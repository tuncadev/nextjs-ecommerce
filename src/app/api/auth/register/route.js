import { cookies } from "next/headers";

export async function POST(req) {
	try {
			const { registerUsername: username, registerEmail: email, registerPassword: password } = await req.json();

			if (!username || !email || !password) {
					return new Response(JSON.stringify({ message: "Username, email, and password are required" }), {
							status: 400,
							headers: { "Content-Type": "application/json" },
					});
			}

			// Get admin token to create users
			const adminResponse = await fetch(`${process.env.WP_BASE_API}/jwt-auth/v1/token`, {
					method: "POST",
					headers: {
							"Content-Type": "application/json",
					},
					body: JSON.stringify({
							username: process.env.WP_ADMIN_USERNAME,
							password: process.env.WP_ADMIN_PASSWORD,
					}),
			});

			const adminData = await adminResponse.json();
			if (!adminResponse.ok) {
					throw new Error(adminData.message || "Failed to get admin token");
			}

			const adminToken = adminData.token;

			// Create the user
			const userResponse = await fetch(`${process.env.WP_USERS_API_URL}`, {
					method: "POST",
					headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${adminToken}`,
					},
					body: JSON.stringify({
							username,
							email,
							password,
							roles: ["customer"],
					}),
			});

			const userData = await userResponse.json();
			if (!userResponse.ok) {
					return new Response(JSON.stringify({ message: userData.message || "Failed to register user" }), {
							status: userResponse.status,
							headers: { "Content-Type": "application/json" },
					});
			}

			/**  LOG USER IN AUTOMATICALLY  */
			const loginResponse = await fetch(`${process.env.WP_BASE_API}/jwt-auth/v1/token`, {
					method: "POST",
					headers: {
							"Content-Type": "application/json",
					},
					body: JSON.stringify({
							username,
							password,
					}),
			});

			const loginData = await loginResponse.json();
			if (!loginResponse.ok) {
					return new Response(JSON.stringify({ message: loginData.message || "Login failed" }), {
							status: loginResponse.status,
							headers: { "Content-Type": "application/json" },
					});
			}

			// Store JWT token and username in cookies
			cookies().set("auth_token", loginData.token, {
				httpOnly: true, 
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				maxAge: 60 * 60 * 24 * 7, 
				path: "/",
			});

			cookies().set("auth_user", loginData.user_display_name, {
				secure: process.env.NODE_ENV === "production",
				sameSite: "strict",
				maxAge: 60 * 60 * 24 * 7, 
				path: "/",
			});


			//  Return success response with user details
			return new Response(
					JSON.stringify({
							message: "User registered & logged in successfully",
							user: userData,
					}),
					{
							status: 201,
							headers: { "Content-Type": "application/json" },
					}
			);

	} catch (error) {
			console.error("Registration Error:", error.message);
			return new Response(JSON.stringify({ message: "Internal server error" }), {
					status: 500,
					headers: { "Content-Type": "application/json" },
			});
	}
}
