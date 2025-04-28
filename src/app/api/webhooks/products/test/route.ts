import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log("🔍 GET test webhook hit", req);
  return NextResponse.json({ message: "GET OK" });
}

export async function POST(req: NextRequest) {
  const headers = Object.fromEntries(req.headers.entries());
  const method = req.method;
  const contentType = req.headers.get("content-type") || "unknown";

  console.log("🚨 Woo POST webhook hit");
  console.log("Method:", method);
  console.log("Content-Type:", contentType);
  console.log("Headers:", headers);

  try {
    const rawBody = await req.text();
    console.log("Body:", rawBody);
  } catch (e) {
    console.warn("❌ Could not read body");
  }

  return NextResponse.json({ message: "POST OK" });
}
