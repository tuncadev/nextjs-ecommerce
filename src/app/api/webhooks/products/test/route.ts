import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

  console.log("🔍 GET test webhook hit", req);
	
  return NextResponse.json({ message: "GET OK" });
}

export async function POST() {

  console.log("🚨 Woo POST webhook hit");


  try {
 
  } catch (e) {
    console.warn("❌ Could not read body");
  }

  return NextResponse.json({ message: "POST OK" });
}
