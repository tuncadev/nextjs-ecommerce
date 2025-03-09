import { getFromRedis } from "@/lib/redis";
import { getAllowedHosts } from "@/app/utils/getAllowedHosts";
import { NextResponse } from "next/server";

export async function GET(req) { 
	const checkHost = getAllowedHosts(req);
		if (!checkHost) {
			return new Response("403 Forbidden - Access Denied", { 
					status: 403,
					headers: { "Content-Type": "text/plain" }, 
			});
	}
	try {
		// ✅ Fetch products from Redis
		let productsFromRedis = await getFromRedis("products");

		if (!productsFromRedis) {
			console.warn("⚠️ No products found in Redis, updating db");
			productsFromRedis = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/update-data`, {
				method: "GET",
				headers: { "Content-Type": "application/json" },
			});
			if(!productsFromRedis) {
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
		}

		// ✅ Ensure products are returned as an array
		const products = Array.isArray(productsFromRedis) ? productsFromRedis : [];

		// 🔹 **Replace backend URL with frontend**
		/*const products = Array.isArray(productsFromRedis) ? productsFromRedis : [];

        // 🔹 **Ensure images exist before modifying**
        const updatedProducts = products.map(product => ({
            ...product,
            permalink: typeof product.permalink === "string"
                ? product.permalink.replace("backend.tunca.site", "kangaroo.tunca.site")
                : product.permalink,
            images: Array.isArray(product.images)
                ? product.images.map(image => ({
                    ...image,
                    src: typeof image.src === "string"
                        ? image.src.replace("backend.tunca.site", "kangaroo.tunca.site")
                        : image.src
                }))
                : [], // Ensure images is always an array
        }));*/
		return new Response(
			JSON.stringify({
				message: "products fetched successfully",
				products: products,
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
