import { NextRequest, NextResponse } from "next/server";

function generateUUID() {
  return globalThis.crypto.randomUUID(); // ✅ works in Edge
}

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const sessionToken = req.cookies.get("session_token")?.value;

  if (!sessionToken) {
    const newToken = generateUUID();

    res.cookies.set("session_token", newToken, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
    });
  }

  return res;
}
