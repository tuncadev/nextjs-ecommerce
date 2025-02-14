"use client";
import React from 'react'
import { useState, useEffect } from 'react';
import { useAuth } from "@/app/context/AuthContext";

 
export default function ProfilePage() {
	const { authUser, setAuthUser } = useAuth();

	const handleLogout = async () => {
    try {
        const res = await fetch("/api/user/logout", { method: "POST" });
        const data = await res.json();
        if (res.ok) {
					setAuthUser(null); // Clear the user state
        } else {
            console.error("Logout failed:", data.message);
        }
    } catch (error) {
        console.error("Error during logout:", error);
    }
};
	return (
		authUser && (
			<button
					onClick={handleLogout}
					className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
			>
					Logout
			</button>
		)
	);
}
