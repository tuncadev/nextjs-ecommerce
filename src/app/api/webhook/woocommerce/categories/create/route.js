import { NextResponse } from "next/server";
import { parse } from "querystring";
import crypto from "crypto";
import { redis } from "@/lib/redis";

export async function POST(req) {
  try {
    const secret = process.env.WC_CATEGORY_CREATE_WEBHOOK_SECRET;
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



    // 🔹 **Step 1: Fetch existing categories from Redis**
    const categoriesJson = await redis.get("categories");
    let categories = categoriesJson ? JSON.parse(categoriesJson) : [];

    // 🔹 **Step 2: Check if the category already exists**
    const existingCategory = categories.find((cat) => cat.id === body.id);
    if (existingCategory) {
      console.warn("⚠️ Category already exists in Redis. Updating instead.");
      categories = categories.map((cat) => (cat.id === body.id ? { ...cat, ...body } : cat));
    } else {

      categories.push(body);
    }

    // 🔹 **Step 3: Save updated categories back to Redis**
    await redis.set("categories", JSON.stringify(categories));


    return NextResponse.json({ message: "Category added/updated in Redis successfully" }, { status: 200 });

  } catch (error) {
    console.error("❌ Error processing category create webhook:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
