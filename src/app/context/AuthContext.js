"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);

    //  Check if user is logged in on app load
		useEffect(() => {
			async function checkAuthStatus() {
					const res = await fetch("/api/auth/status");
					const data = await res.json();
					setAuthUser(data.user);
			}
			checkAuthStatus();
			}, []);
			
    const logout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        setAuthUser(null);
    };

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
