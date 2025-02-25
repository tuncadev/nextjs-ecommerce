import { cookies } from "next/headers";
import { redisUserHandler } from "@/app/utils/redisUserHandler";
import { NextResponse } from "next/server";
import { getAllowedHosts } from "@/app/utils/getAllowedHosts";

export async function POST(req) {
		const checkHost = getAllowedHosts(req);
		if (!checkHost) {
			return new Response("403 Forbidden - Access Denied", { 
					status: 403,
					headers: { "Content-Type": "text/plain" }, 
			});
	}
    try {

				const cookieStore = await cookies();
				const { loginEmail, loginPassword, visitorId } = await req.json();
				const user_email = loginEmail; // Rename manually if needed
				const password = loginPassword;

				const requestUserAgent = req.headers?.get("User-Agent") || "Unknown Browser";


				// Proceed with authentication...

							
        if (!user_email || !password) {

            return new Response(
                JSON.stringify({ message: "email and password are required" }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        const API_URL = process.env.WP_BASE_API;

        const response = await fetch(`${API_URL}/jwt-auth/v1/token`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: user_email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            const loginErrorMessage = "username or password error. Please try again or use 'Lost Password' ";
            return new Response(
                JSON.stringify({ message: loginErrorMessage || "Login failed" }),
                {
                    status: response.status,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }



        await redisUserHandler("login", visitorId, "", user_email, requestUserAgent);

				
        // ✅ Store JWT Token in Cookies
        cookieStore.set("auth_token", data.token, {
            httpOnly: true, // Secure cookie, not accessible by JS
            secure: process.env.NODE_ENV === "production", // Only secure in production
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 7, // 7 days expiry
            path: "/",
        });

        // ✅ Store User in Cookies (for frontend access)
        cookieStore.set("auth_user", data.user_display_name, {
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 7, // 7 days expiry
            path: "/",
        });

				// ✅ Store User in Cookies (for frontend access)
        cookieStore.set("auth_user_email", user_email, {
					secure: process.env.NODE_ENV === "production",
					sameSite: "strict",
					maxAge: 60 * 60 * 24 * 7, // 7 days expiry
					path: "/",
				});
        // ✅ Return Success Response
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
