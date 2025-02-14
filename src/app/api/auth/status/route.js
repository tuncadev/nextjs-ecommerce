import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = await cookies(); //  Await cookies() once

    const token = cookieStore.get("auth_token")?.value || null;
    const user = cookieStore.get("auth_user")?.value || null;

    return new Response(JSON.stringify({ token, user }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
