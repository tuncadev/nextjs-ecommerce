import { NextResponse } from "next/server";
import crypto from "crypto";
import { getAllowedHosts } from "@/app/utils/getAllowedHosts";


export async function POST(req: Request): Promise<Response> {
  const checkHost = getAllowedHosts(req);
  if (!checkHost) {
    console.warn("⛔ Forbidden host tried to access.");
    return new Response("403 Forbidden - Access Denied", {
      status: 403,
      headers: { "Content-Type": "text/plain" },
    });
  }

  try {
    const secret = process.env.WC_CATEGORY_UPDATE_WEBHOOK_SECRET as string;
    const signature = req.headers.get("x-wc-webhook-signature");

    let rawBody: string;
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      rawBody = await req.text();
    } else {
      rawBody = await req.text();
    }

    if (!signature) {
      console.warn("⚠️ Webhook received without signature. Ignoring.");
      return NextResponse.json({ message: "No signature. Ignored." }, { status: 500 });
    }

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(rawBody, "utf8")
      .digest("base64");


    if (signature !== expectedSignature) {
      console.warn("⚠️ Invalid webhook signature. Ignoring.");

      return NextResponse.json({ message: "Invalid signature. Ignored." }, { status: 500 });
    }




    const categoriesUpdate = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/categories`, {
      method: "GET",
    });


    if (!categoriesUpdate.ok) {
      console.error("❌ Fetching categories failed:", categoriesUpdate.statusText);
      return NextResponse.json({ message: "Category update fetch error" }, { status: 500 });
    }

    return NextResponse.json({ message: "Category updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("❌ Error processing category update webhook:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
