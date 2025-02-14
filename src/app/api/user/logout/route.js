import { cookies } from "next/headers";

export async function POST() {
    try {
        const cookieStore = cookies();
        await cookieStore.set("auth_token", "", { maxAge: -1, path: "/" });
        await cookieStore.set("auth_user", "", { maxAge: -1, path: "/" });

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
