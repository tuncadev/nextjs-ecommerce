"use client";
import { useState } from "react";

const API_URL = process.env.WP_BASE_API;
const WP_CONSUMER_KEY = process.env.WP_CONSUMER_KEY;
const WP_CONSUMER_SECRET =  process.env.WP_CONSUMER_SECRET;
const WP_USERS_API = process.env.WP_USERS_API_URL;
const WP_ADMIN_USERNAME = process.env.WP_ADMIN_USERNAME;
const WP_ADMIN_PASSWORD =  process.env.WP_ADMIN_PASSWORD;

const encodedAuth = btoa(`${WP_CONSUMER_KEY}:${WP_CONSUMER_SECRET}`);


const JWT_TOKEN_KEY = "wp_jwt_token"; // LocalStorage key for JWT

export const useUserActions = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    /** REGISTER USER */
    async function register(username, email, password) {
			setLoading(true);
			try {
        const res = await fetch(`${API_URL}/jwt-auth/v1/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${encodedAuth}` // Make sure to use valid credentials if required
            },
            body: JSON.stringify({
                username: WP_ADMIN_USERNAME,
                password: WP_ADMIN_PASSWORD  
            }),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Failed to register before token");
        }
				const token = data?.token

				const reg = await fetch(`${WP_USERS_API}`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({
						username: username,
						email: email,
						password: password,
						roles: ["Customer"]
					}),
				})
				if (!reg.ok) {
					throw new Error(data.message || "Failed to register after token");
				}

				const logData = login(username, password);
				if (!logData.ok) {
					throw new Error(data.message || "Failed to register during login");
				}
				return logData;
        //return data;
    } catch (error) {
        console.error("Registration Error:", error.message);
        throw error;
    }
    };

    /** LOGIN USER */
    async function login(email, password) {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/jwt-auth/v1/token`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: email, password }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Login failed");

            // Save token in localStorage for future requests
            localStorage.setItem(JWT_TOKEN_KEY, data.token);
            setUser({ email: data.user_email, name: data.user_display_name });

            return data;
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    /**  LOGOUT USER */
    async function logout() {
				setLoading(true);
        localStorage.removeItem(JWT_TOKEN_KEY);
        setUser(null);
				setLoading(false);
    };

    /**  CHECK AUTH STATUS */
    async function checkAuth() {
        const token = localStorage.getItem(JWT_TOKEN_KEY);
        if (!token) return null;

        try {
            const response = await fetch(`${API_URL}/wp/v2/users/me`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Unauthorized");

            setUser(data);
            return data;
        } catch (err) {
            logout(); // If token is invalid, clear it
        }
    };

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
