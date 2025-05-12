import { NextResponse } from "next/server";
import { getAllowedHosts } from "@/app/utils/getAllowedHosts";
import { verifyWooSignature } from "@/lib/verifyWooSignature";

export async function POST(req: Request): Promise<Response> {

	console.warn("⚠️ Products Webhook connected");

	const checkHost = getAllowedHosts(req);

	if (!checkHost) {
		return new Response("403 Forbidden - Access Denied", { status: 403 });
	}

	console.warn("Host Allowed");

		try {

		console.warn("Trying");

		const secret = process.env.WC_PRODUCT_CREATE_WEBHOOK_SECRET!;
		const { valid } = await verifyWooSignature({ req, secret });

		if (!valid) {
			console.warn("❌ Invalid WooCommerce webhook signature");
			return NextResponse.json({ message: "Invalid signature" }, { status: 200 });
		}

		console.log("✅ Signature verified");

		console.warn(`Fetching products from ${process.env.NEXT_PUBLIC_SITE_URL}/api/products/`);
		
		const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/`);
		if (!res.ok) {
			return NextResponse.json({ message: "Product update fetch error" }, { status: 500 });
		}

		console.warn("Product updated successfully");
		return NextResponse.json({ message: "Product updated successfully" }, { status: 200 });

	} catch (error) {
		console.error("❌ Error processing product update webhook:", error);
		return NextResponse.json({ error: "Invalid request" }, { status: 400 });
	}
}
