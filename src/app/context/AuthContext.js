"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);

    // ✅ Check if user is logged in on app load
		useEffect(() => {
			async function checkAuthStatus() {
				try {
					const res = await fetch("/api/user/check-auth", {
						method: "GET",
						headers: {
								"Content-Type": "application/json",
						},
						credentials: "include", // ✅ Ensures cookies are sent
					});
					const data = await res.json();

					// ✅ Only set user if authenticated
					if (data.isAuthenticated) {
						setAuthUser(data.user);
					} else {
						setAuthUser(null);
					}
				} catch (error) {
					console.error("Auth check failed:", error);
					setAuthUser(null);
				}
			}
			checkAuthStatus();
		}, []);
			
    const logout = async () => {
        await fetch("/api/user/logout", { method: "POST", credentials: "include" });
        setAuthUser(null);
    };

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
