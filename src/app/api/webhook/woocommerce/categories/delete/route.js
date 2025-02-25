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
    const secret = process.env.WC_CATEGORY_DELETE_WEBHOOK_SECRET;
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

    // 🔹 **Step 2: Remove the category from the array**
    const updatedCategories = categories.filter((cat) => cat.id !== body.id);

    if (categories.length === updatedCategories.length) {
      console.warn("⚠️ Category ID not found in Redis. No changes made.");
    } else {

      // 🔹 **Step 3: Save updated categories back to Redis**
      await redis.set("categories", JSON.stringify(updatedCategories));

    }

    return NextResponse.json({ message: "Category deleted from Redis successfully" }, { status: 200 });

  } catch (error) {
    console.error("❌ Error processing category delete webhook:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
