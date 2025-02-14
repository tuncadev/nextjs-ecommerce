import { cookies } from "next/headers";

export async function POST(req) {

	try {
		const { loginEmail: username, loginPassword: password } = await req.json();

		if (!username || !password) {
			return new Response(
				JSON.stringify({ message: "Email and password are required" }),
				{
					status: 400,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		const API_URL = process.env.WP_BASE_API;
		const response = await fetch(`${API_URL}/jwt-auth/v1/token`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});

		const data = await response.json();

		if (!response.ok) {
			const loginErrorMessage = "Username or password error. Please try again or use 'Lost Password' ";
			return new Response(
				
				JSON.stringify({ message: loginErrorMessage || "Login failed" }),
				{
					status: response.status,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		// Store JWT token in cookies
		cookies().set("auth_token", data.token, {
			httpOnly: true, // Secure cookie, not accessible by JS
			secure: process.env.NODE_ENV === "production", // Only secure in production
			sameSite: "strict",
			maxAge: 60 * 60 * 24 * 7, // 7 days expiry
			path: "/",
		});

		// Store username in cookies
		cookies().set("auth_user", data.user_display_name, {
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
			maxAge: 60 * 60 * 24 * 7, // 7 days expiry
			path: "/",
		});
		//
		// Return success response
		return new Response(
			JSON.stringify({ message: "Login successful", user: data.user_display_name }),
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			}
		);
	} catch (error) {
		return new Response(
			JSON.stringify({ message: "Internal server error" }),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
}
