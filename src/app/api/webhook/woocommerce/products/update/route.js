import { NextResponse } from "next/server";
import crypto from "crypto";
import { redis, connectRedis } from "@/lib/redis";
import { getAllowedHosts } from "@/app/utils/getAllowedHosts";

export async function POST(req) {
	const checkHost = getAllowedHosts(req);
	if (!checkHost) {
		return new Response("403 Forbidden - Access Denied", { 
				status: 403,
				headers: { "Content-Type": "text/plain" }, 
		});
	}
  try {
    const secret = process.env.WC_PRODUCT_UPDATE_WEBHOOK_SECRET;
    const signature = req.headers.get("x-wc-webhook-signature");
    const eventType = req.headers.get("x-wc-webhook-event"); // Check event type

    let rawBody = await req.text();
    let body = JSON.parse(rawBody);



    // 🚀 **Step 1: Ignore update if it was triggered by a product creation**
    if (eventType === "created") {
      console.warn("⚠️ Ignoring product update triggered by creation.");
      return NextResponse.json({ message: "Ignoring update triggered by product creation." }, { status: 200 });
    }

    // 🔑 Validate webhook signature
    const expectedSignature = crypto.createHmac("sha256", secret)
      .update(rawBody, "utf8")
      .digest("base64");

    if (signature !== expectedSignature) {
      console.warn("⚠️ Invalid webhook signature. Ignoring.");
      return NextResponse.json({ message: "Webhook received, invalid signature. Ignored." }, { status: 200 });
    }



    // 🔄 **Fetch existing products from Redis**
    await connectRedis();
    const productsJson = await redis.get("products");
    let products = productsJson ? JSON.parse(productsJson) : [];

    // ✅ **Update product in Redis**
    products = products.map((p) => (p.id === body.id ? { ...p, ...body } : p));
    await redis.set("products", JSON.stringify(products));


    return NextResponse.json({ message: "Product updated in Redis successfully." }, { status: 200 });

  } catch (error) {
    console.error("❌ Error processing product update webhook:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
