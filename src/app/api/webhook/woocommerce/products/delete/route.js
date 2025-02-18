import { NextResponse } from "next/server";
import { parse } from "querystring";
import crypto from "crypto";
import { redis } from "@/lib/redis";

export async function POST(req) {
  try {
    const secret = process.env.WC_PRODUCT_DELETE_WEBHOOK_SECRET;
    const signature = req.headers.get("x-wc-webhook-signature");

    let body;
    let rawBody;

    if (req.headers.get("content-type").includes("application/json")) {
      rawBody = await req.text();
      body = JSON.parse(rawBody);
    } else {
      rawBody = await req.text();
      body = parse(rawBody);
    }



    // Validate webhook signature
    if (!signature) {
      console.warn("⚠️ Webhook received without signature. Ignoring.");
      return NextResponse.json({ message: "Webhook received, no signature. Ignored." }, { status: 200 });
    }

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(rawBody, "utf8")
      .digest("base64");

    if (signature !== expectedSignature) {
      console.warn("⚠️ Invalid webhook signature. Ignoring.");
      return NextResponse.json({ message: "Webhook received, invalid signature. Ignored." }, { status: 200 });
    }



    // 🔹 **Step 1: Fetch existing products from Redis**
    const productsJson = await redis.get("products");
    let products = productsJson ? JSON.parse(productsJson) : [];

    // 🔹 **Step 2: Remove the product from the array**
    const updatedProducts = products.filter((cat) => cat.id !== body.id);

    if (products.length === updatedProducts.length) {
      console.warn("⚠️ Product ID not found in Redis. No changes made.");
    } else {

      // 🔹 **Step 3: Save updated products back to Redis**
      await redis.set("products", JSON.stringify(updatedProducts));

    }

    return NextResponse.json({ message: "Product deleted from Redis successfully" }, { status: 200 });

  } catch (error) {
    console.error("❌ Error processing product delete webhook:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
