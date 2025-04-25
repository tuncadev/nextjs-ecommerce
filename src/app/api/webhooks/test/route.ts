// /api/webhook/test/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request): Promise<Response> {


  const secret = process.env.WC_CATEGORY_UPDATE_WEBHOOK_SECRET as string;
  const signature = req.headers.get("x-wc-webhook-signature");
  const contentType = req.headers.get("content-type") || "";

  let rawBody = await req.text();
	
	try {
		if (contentType.includes("application/json")) {
			JSON.parse(rawBody); // Just validate
		}
	} catch (e) {
		console.warn("⚠️ Could not parse request body.");
		return NextResponse.json({ message: "Invalid JSON." }, { status: 400 });
	}
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(rawBody, "utf8")
    .digest("base64");



  if (signature !== expectedSignature) {
    console.warn("❌ Signature mismatch.");
    return NextResponse.json({ message: "Invalid signature." }, { status: 403 });
  }


  return NextResponse.json({ message: "Webhook received and validated." }, { status: 200 });
}

export async function GET() {
  return NextResponse.json({ status: "ok", test: true });
}
