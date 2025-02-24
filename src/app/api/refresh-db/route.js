import { NextResponse } from "next/server";
import { saveToRedis } from "@/lib/redis";
import { fetchAllCategories, fetchAllProducts } from "@/lib/fetchWooData";
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

        // Fetch data from WooCommerce
        const categories = await fetchAllCategories();
        const products = await fetchAllProducts();

        // Store in Redis
        await saveToRedis("categories", categories);
        await saveToRedis("products", products);
        return NextResponse.json({ message: "Data refreshed successfully!" });
    } catch (error) {
        console.error("❌ Error refreshing data:", error);
        return NextResponse.json({ error: "Failed to refresh data" }, { status: 500 });
    }
}
