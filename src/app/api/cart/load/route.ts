// app/api/cart/load/route.ts
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";

export async function GET(): Promise<Response> {
  try {
    const cookieStore = cookies();
    const sessionToken = (await cookieStore).get("session_token")?.value ?? null;
    const session = await getSession();

    let cart;

    if (session.userId) {
      cart = await prisma.cart.findUnique({
        where: { userId: session.userId },
        include: { items: true },
      });
    }

    if (!cart && sessionToken) {
      cart = await prisma.cart.findUnique({
        where: { sessionToken },
        include: { items: true },
      });
    }

    return NextResponse.json({
      status: "success",
      cartItems: cart?.items ?? [],
    });
  } catch (error) {
    console.error("❌ Failed to load cart:", error);
    return NextResponse.json(
      { status: "fail", message: "Неможливо завантажити кошик" },
      { status: 500 }
    );
  }
}
