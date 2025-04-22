 
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { getSession } from "@/lib/session";
// Type for incoming cart items
type IncomingCartItem = {
	variationId: number;
  productId: number;
  quantity: number;
  price: number;

};

export async function POST(req: NextRequest): Promise<Response> {
  try {


		const cookieStore = cookies();
		const sessionToken = (await cookieStore).get("session_token")?.value ?? null;
		const session = await getSession();
		const userId = session.userId ?? null;


    const body = await req.json();

    if (!body || !Array.isArray(body.cartItems)) {
      return NextResponse.json(
        { status: "fail", message: "Формат тіла запиту невірний" },
        { status: 400 }
      );
    }
		
    const cartItems: IncomingCartItem[] = body.cartItems;



    if (!userId && !sessionToken) {
      return NextResponse.json(
        { status: "fail", message: "Немає активної сесії або токену користувача" },
        { status: 400 }
      );
    }

    // Find existing cart
    let cart = await prisma.cart.findFirst({
      where: userId ? { userId } : { sessionToken },
    });

    // Create cart if not exists
    if (!cart) {
      cart = await prisma.cart.create({
        data: {
          userId: userId ?? undefined,
          sessionToken: sessionToken ?? undefined,
        },
      });
    }

    // Clear old items
    await prisma.cartItem.deleteMany({ where: { cartId: cart.id } });

    // Insert new items
    if (cartItems.length > 0) {
      await prisma.cartItem.createMany({
        data: cartItems.map((item) => ({
          cartId: cart.id,
					variationId: item.variationId,
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
        })),
      });
    }

    return NextResponse.json({ status: "success", message: "Кошик оновлено" });
  } catch (error) {
    console.error("❌ Cart update error:", error);
    return NextResponse.json(
      { status: "fail", message: "Не вдалося оновити кошик" },
      { status: 500 }
    );
  }
}
