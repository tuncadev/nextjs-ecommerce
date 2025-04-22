import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {

  const { token } = await req.json();

  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 400 });
  }

  try {
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
    await prisma.appSession.create({
      data: {
        id: token,
        expiresAt,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("❌ Failed to create session:", e);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
