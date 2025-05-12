import { NextResponse } from "next/server";
import { getAllowedHosts } from "@/app/utils/getAllowedHosts";
import { verifyWooSignature } from "@/lib/verifyWooSignature";

export async function POST(req: Request): Promise<Response> {

 

	const checkHost = getAllowedHosts(req);

	if (!checkHost) {
		return new Response("403 Forbidden - Access Denied", { status: 403 });
	}

	try {


		const secret = process.env.WC_PRODUCT_CREATE_WEBHOOK_SECRET!;
		const { valid } = await verifyWooSignature({ req, secret });

		if (!valid) {
			console.warn("❌ Invalid WooCommerce webhook signature");

			return NextResponse.json({ message: "Invalid signature" }, { status: 200 });
		}

		
		const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/`);

		if (!res.ok) {
			return NextResponse.json({ message: "Product update fetch error" }, { status: 500 });
		}
		let catMessage;
		
		const resCat = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/categories`);
		if (!resCat.ok) {
			catMessage = "Category update fetch error";
		}
		catMessage =  "Category update success";
 
		return NextResponse.json({ message: `Product updated successfully with ${catMessage}` }, { status: 200 });

	} catch (error) {
		console.error("❌ Error processing product update webhook:", error);
		return NextResponse.json({ error: "Invalid request" }, { status: 400 });
	}
}
