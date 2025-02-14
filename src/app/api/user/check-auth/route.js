import { cookies } from "next/headers";

export async function GET() {
    try {
        const cookieStore = await cookies(); // ✅ Await cookies() first

        // Debugging: Log cookies to check if they are being sent
        console.log("🔹 Incoming Cookies:", cookieStore.getAll());

        const token = cookieStore.get("auth_token")?.value || null;
        const user = cookieStore.get("auth_user")?.value || null;

        if (!token || !user) {
            console.warn("🔹 Authentication Failed: Missing token or user cookie.");
            return new Response(
                JSON.stringify({ message: "User not authenticated", isAuthenticated: false }),
                { status: 401, headers: { "Content-Type": "application/json" } }
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
