import { NextResponse } from "next/server";
import { getFromRedis } from "@/lib/redis";
import { getAllowedHosts } from "@/app/utils/getAllowedHosts";

export async function GET(req) {
		const checkHost = getAllowedHosts(req);
		if (!checkHost) {
			return new Response("403 Forbidden - Access Denied", { 
					status: 403,
					headers: { "Content-Type": "text/plain" }, // ✅ Ensure raw text response
			});
	}
    try {
	
        const products = await getFromRedis("products");

        if (!products || !Array.isArray(products)) {
            throw new Error("No products found in Redis");
        }

        return NextResponse.json({ products }, { status: 200 });
    } catch (error) {
        console.error("❌ Error fetching products from Redis:", error);
        return NextResponse.json({ error: "Failed to fetch products from Redis" }, { status: 500 });
    }
}
