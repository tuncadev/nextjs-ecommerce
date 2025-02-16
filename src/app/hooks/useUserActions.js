"use client";
import { useState } from "react";

export const useUserActions = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    /** REGISTER USER */
		async function register(username, email, password) {
			setLoading(true);
			try {
				const res = await fetch("/api/user/register", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ username, email, password }),
				});

				const data = await res.json();
				if (!res.ok) throw new Error(data.message || "Failed to register");

				// ✅ Check authentication after registration
				await checkAuth();
				return data;
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		}

    /** LOGIN USER */
		async function login(email, password) {
			setLoading(true);
			try {
				const res = await fetch("/api/user/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email, password }),
				});

				const data = await res.json();
				if (!res.ok) throw new Error(data.message || "Login failed");

				// ✅ Check authentication after login
				await checkAuth();
				return data;
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		}

   	/** LOGOUT USER */
		async function logout() {
			setLoading(true);
			try {
				const res = await fetch("/api/user/logout", { method: "POST" });
				const data = await res.json();
				if (!res.ok) throw new Error(data.message || "Logout failed");

				setUser(null);
			} catch (error) {
				console.error("Error during logout:", error);
			} finally {
				setLoading(false);
			}
		}

    /** CHECK AUTH STATUS */
		async function checkAuth() {
			setLoading(true);
			try {

				const res = await fetch("/api/user/check-auth", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
					credentials: "include", // ✅ Ensures cookies are sent with the request
				});
				const data = await res.json();

				// ✅ Only set user if authentication is successful
				if (res.ok && data.isAuthenticated) {
					setUser(data.user);
				} else {
					setUser(null);
				}

				return data;
			} catch (error) {
				setUser(null);
				setError(error.message);
			} finally {
				setLoading(false);
			}
		}

    return {
        user,
        error,
        loading,
		setLoading,
        register,
        login,
        logout,
        checkAuth,
    };
};
