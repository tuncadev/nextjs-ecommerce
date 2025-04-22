import { NextResponse } from "next/server";
import { parse } from "querystring";
import crypto from "crypto";
import { getAllowedHosts } from "@/app/utils/getAllowedHosts";

 
interface Product {
	id: number;
	[key: string]: any;
}

export async function POST(req: Request): Promise<Response> {
	console.warn("⚠️ Products Webhook connected");
	const checkHost = getAllowedHosts(req);
	if (!checkHost) {
		return new Response("403 Forbidden - Access Denied", {
			status: 403,
			headers: { "Content-Type": "text/plain" },
		});
	}
	console.warn("Host Allowed");
	try {
		console.warn("Trying");
		const secret = process.env.WC_PRODUCT_UPDATE_WEBHOOK_SECRET as string;
		const signature = req.headers.get("x-wc-webhook-signature");

		let body: Record<string, any>;
		let rawBody: string;

		const contentType = req.headers.get("content-type") || "";

		if (contentType.includes("application/json")) {
			rawBody = await req.text();
			body = JSON.parse(rawBody);
		} else {
			rawBody = await req.text();
			body = parse(rawBody);
		}
		console.warn("Checking signature");
		if (!signature) {
			console.warn("⚠️ Webhook received without signature. Ignoring.");
			return NextResponse.json({ message: "No signature. Ignored." }, { status: 200 });
		}

		const expectedSignature = crypto
			.createHmac("sha256", secret)
			.update(rawBody, "utf8")
			.digest("base64");
			console.warn("Checking expectedSignature signature");
		if (signature !== expectedSignature) {
			console.warn("⚠️ Invalid webhook signature. Ignoring.");
			return NextResponse.json({ message: "Invalid signature. Ignored." }, { status: 200 });
		}
		console.warn(`Fetching products from ${process.env.NEXT_PUBLIC_SITE_URL}/api/products/`);
		
		const productsUpdate = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/`, {
      method: "GET",
    });

		if (!productsUpdate.ok) {
			console.warn("Product update fetch error 500");
			return NextResponse.json({ message: "Product update fetch error" }, { status: 500 });
		}
		console.warn("Product updated successfully");
		return NextResponse.json({ message: "Product updated successfully" }, { status: 200 });

	} catch (error) {
		console.error("❌ Error processing product update webhook:", error);
		return NextResponse.json({ error: "Invalid request" }, { status: 400 });
	}
}
