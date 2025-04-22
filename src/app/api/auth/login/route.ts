import { NextResponse } from "next/server";
import { parse } from "cookie";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const isValid = await compare(password, user.passwordHash);
    if (!isValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const cookieHeader = req.headers.get("cookie") || "";
    const cookies = parse(cookieHeader);
    const sessionToken = cookies["session_token"] || null;

    const existingSession = await prisma.appSession.findFirst({
      where: { userId: user.id },
    });

    if (existingSession && sessionToken && existingSession.id !== sessionToken) {
      const guestCart = await prisma.cart.findUnique({
        where: { sessionToken },
        include: { items: true },
      });

      const userCart = await prisma.cart.findFirst({
        where: { userId: user.id },
        include: { items: true },
      });

      const mergedItems = (userCart?.items || []).map(item => ({
				productId: item.productId,
				quantity: item.quantity,
				price: item.price,
				variationId: item.variationId ?? null,
			}));

      if (guestCart?.items?.length) {
        guestCart.items.forEach((guestItem) => {
          const existing = mergedItems.find((i) => i.productId === guestItem.productId);
          if (existing) {
            existing.quantity += guestItem.quantity;
          } else {
            mergedItems.push({
              productId: guestItem.productId,
              quantity: guestItem.quantity,
              price: guestItem.price,
							variationId: guestItem.variationId ?? null,
            });
          }
        });

        if (userCart) {
          await prisma.cartItem.deleteMany({ where: { cartId: userCart.id } });
          await prisma.cartItem.createMany({
            data: mergedItems.map((item) => ({
              cartId: userCart.id,
							variationId: item.variationId ?? null,
              productId: item.productId,
              quantity: item.quantity,
              price: item.price,
            })),
          });
        } else {
          const newCart = await prisma.cart.create({
            data: {
              userId: user.id,
              sessionToken: existingSession.id,
            },
          });

          await prisma.cartItem.createMany({
            data: mergedItems.map((item) => ({
							variationId: item.variationId ?? null,
              cartId: newCart.id,
              productId: item.productId,
              quantity: item.quantity,
              price: item.price,
            })),
          });
        }

        const stillGuestCart = await prisma.cart.findFirst({
          where: { sessionToken, userId: null },
        });

        if (!stillGuestCart) {
          await prisma.cart.deleteMany({
            where: { sessionToken, userId: null },
          });
        }
      }

      const response = NextResponse.json({ ok: true });
      response.cookies.set("session_token", existingSession.id, {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 30,
      });

      const session = await getSession();
      session.userId = user.id;
      await session.save();

      return response;
    }

    // No existing session or same session
    if (sessionToken) {
      await prisma.appSession.upsert({
        where: { id: sessionToken },
        update: { userId: user.id },
        create: {
          id: sessionToken,
          userId: user.id,
          expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
        },
      });

      await prisma.cart.updateMany({
        where: { sessionToken, userId: null },
        data: { userId: user.id },
      });
    }

    const session = await getSession();
    session.userId = user.id;
    await session.save();

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
