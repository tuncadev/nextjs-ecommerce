import { NextResponse } from "next/server";
import { parse } from "querystring";
import crypto from "crypto";

export async function POST(req) {
  try {
    const secret = process.env.WC_API_DEBUG_SECRET;
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


    if (!signature) {
      console.warn("⚠️ No WooCommerce Webhook Signature Found");
      return NextResponse.json({ message: "Webhook received, but no signature. Debugging only." }, { status: 200 });
    }

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(rawBody, "utf8")
      .digest("base64");

    if (signature !== expectedSignature) {
      console.warn("🚨 Invalid WooCommerce Webhook Signature");
      return NextResponse.json({ message: "Invalid webhook signature. Debugging only." }, { status: 200 });
    }



    return NextResponse.json({ message: "Webhook received and logged successfully." }, { status: 200 });

  } catch (error) {
    console.error("❌ Error processing debug webhook:", error);
    return NextResponse.json({ error: "Debug webhook failed" }, { status: 500 });
  }
}
