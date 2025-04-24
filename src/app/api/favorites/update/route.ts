// app/api/favorites/update/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const { productId } = await req.json();
    if (!productId) {
      return NextResponse.json({ message: "Missing productId" }, { status: 400 });
    }

    const cookieStore = cookies();
    const sessionToken = (await cookieStore).get("session_token")?.value ?? null;
    const session = await getSession();

    const existing = await prisma.favorite.findFirst({
			where: {
				productId,
				OR: [
					{ userId: session.userId ?? undefined },
					{ sessionToken },
				],
			},
		});

    if (existing) {
      return NextResponse.json({ message: "Already in favorites" }, { status: 200 });
    }

    const created = await prisma.favorite.create({
      data: {
        userId: session.userId ?? null,
        sessionToken,
        productId,
      },
      include: { product: true },
    });

    return NextResponse.json({ message: "Added to favorites", favorite: created });
  } catch (err) {
    console.error("❌ Failed to add to favorites", err);
    return NextResponse.json({ message: "Failed to add to favorites" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const productId = Number(searchParams.get("productId"));
    if (!productId) {
      return NextResponse.json({ message: "Missing productId" }, { status: 400 });
    }

    const cookieStore = cookies();
    const sessionToken = (await cookieStore).get("session_token")?.value ?? null;
    const session = await getSession();

    const deleted = await prisma.favorite.deleteMany({
      where: {
        productId,
        OR: [
          { userId: session.userId ?? undefined },
          { sessionToken },
        ],
      },
    });

    return NextResponse.json({ message: "Removed from favorites", deleted });
  } catch (err) {
    console.error("❌ Failed to remove from favorites", err);
    return NextResponse.json({ message: "Failed to remove from favorites" }, { status: 500 });
  }
}
