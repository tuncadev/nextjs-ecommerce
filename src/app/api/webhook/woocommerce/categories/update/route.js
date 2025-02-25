import { NextResponse } from "next/server";
import { parse } from "querystring";
import crypto from "crypto";
import { redis } from "@/lib/redis";
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
    const secret = process.env.WC_CATEGORY_UPDATE_WEBHOOK_SECRET;
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


    // Log and ignore webhook if no signature is found
    if (!signature) {
      console.warn("⚠️ Webhook received without signature. Ignoring.");
      return NextResponse.json({ message: "Webhook received, no signature. Ignored." }, { status: 200 });
    }

    // Generate HMAC-SHA256 signature for validation
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(rawBody, "utf8")
      .digest("base64");

    // Validate webhook signature
    if (signature !== expectedSignature) {
      console.warn("⚠️ Invalid webhook signature. Ignoring.");
      return NextResponse.json({ message: "Webhook received, invalid signature. Ignored." }, { status: 200 });
    }


    // 🔹 **Step 1: Fetch existing categories from Redis**
    const categoriesJson = await redis.get("categories");
    let categories = categoriesJson ? JSON.parse(categoriesJson) : [];

    // 🔹 **Step 2: Find the category to update**
    const categoryIndex = categories.findIndex((cat) => cat.id === body.id);
    if (categoryIndex === -1) {
      console.warn("⚠️ Category not found in Redis. Cannot update.");
      return NextResponse.json({ message: "Category not found in Redis." }, { status: 404 });
    }

    // 🔹 **Step 3: Update category data**
    categories[categoryIndex] = { ...categories[categoryIndex], ...body };

    // 🔹 **Step 4: Save updated categories back to Redis**
    await redis.set("categories", JSON.stringify(categories));

    return NextResponse.json({ message: "Category updated in Redis successfully" }, { status: 200 });

  } catch (error) {
    console.error("❌ Error processing category update webhook:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
