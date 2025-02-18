import { cookies } from "next/headers";
import { redisUserHandler } from "@/app/utils/redisUserHandler";

export async function POST(req) {
    try {
				const body = await req.json(); // ✅ Parse the request body
				const visitorId = body.visitorId;

				const authUser = body.authUser;
        const cookieStore = await cookies();

				const user_email = cookieStore.get("auth_user_email")?.value || "";


				
        cookieStore.set("auth_token", "", { maxAge: -1, path: "/" });
        cookieStore.set("auth_user", "", { maxAge: -1, path: "/" });
				cookieStore.set("auth_user_email", "", { maxAge: -1, path: "/" });

				const redisUserLogout = await redisUserHandler("logout", visitorId, authUser, user_email);




        return new Response(JSON.stringify({ message: "Logged out successfully" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Logout Error:", error);
        return new Response(JSON.stringify({ message: "Logout failed" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
