import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  try {
    const cookieStore = cookies();
    const sessionToken = (await cookieStore).get("session_token")?.value ?? null;
    const session = await getSession();

    let favorites: any[] = [];

    if (session.userId) {
      favorites = await prisma.favorite.findMany({
        where: { userId: session.userId },
        include: { product: true },
      });
    }

    if (!favorites?.length && sessionToken) {
      favorites = await prisma.favorite.findMany({
        where: { sessionToken },
        include: { product: true },
      });
    }

    return NextResponse.json({
      status: "success",
      favorites: favorites ?? [],
    });
  } catch (error) {
    console.error("❌ Failed to load favorites:", error);
    return NextResponse.json(
      { status: "fail", message: "Не вдалося завантажити обране" },
      { status: 500 }
    );
  }
}
