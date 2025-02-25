import { cookies } from "next/headers";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { getAllowedHosts } from "@/app/utils/getAllowedHosts";

export async function GET(req) {
		const checkHost = getAllowedHosts(req);
		if (!checkHost) {
			return new Response("403 Forbidden - Access Denied", { 
					status: 403,
					headers: { "Content-Type": "text/plain" }, 
			});
	}
    try {

        const cookieStore = await cookies(); 
        const token = cookieStore.get("auth_token")?.value || null;
        const user = cookieStore.get("auth_user")?.value || null;

        if (!token || !user) {
            return new Response(
                JSON.stringify({ message: "User not authenticated", isAuthenticated: false }),
                { status: 200, headers: { "Content-Type": "application/json" } }
            );
        }
        return new Response(
            JSON.stringify({ message: "User authenticated", isAuthenticated: true, user }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );

    } catch (error) {
        console.error("🔹 Check-Auth Error:", error);
        return new Response(
            JSON.stringify({ message: "Internal server error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
