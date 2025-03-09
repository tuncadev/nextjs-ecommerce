import { cookies } from "next/headers";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { getFromRedis } from "@/lib/redis";
import { getAllowedHosts } from "@/app/utils/getAllowedHosts";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const visitorId = searchParams.get("visitorId");
		console.log("We are here");
    if (!visitorId) {
      return new Response(JSON.stringify({ message: "Missing visitorId" }), { 
        status: 400, 
        headers: { "Content-Type": "application/json" },
      });
    }

    let userData = await getFromRedis(`users:${visitorId}`);

    return new Response(JSON.stringify({ message: userData || "User not found with id : \n" + "\n" + visitorId  }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
