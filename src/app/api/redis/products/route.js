import { getFromRedis } from "@/lib/redis";

export async function GET() { 
	try {
		// ✅ Fetch products from Redis
		const productsFromRedis = await getFromRedis("products");

		if (!productsFromRedis) {
			console.warn("⚠️ No products found in Redis");
			return new Response(
				JSON.stringify({
					message: "No products found in Redis",
					products: [],
				}),
				{
					status: 200,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		// ✅ Ensure products are returned as an array
		const products = Array.isArray(productsFromRedis) ? productsFromRedis : [];

		return new Response(
			JSON.stringify({
				message: "products fetched successfully",
				products,
			}),
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			}
		);
	} catch (error) {
		console.error("❌ Error fetching products:", error);
		return new Response(
			JSON.stringify({ message: "Failed to fetch products from Redis" }),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
}
