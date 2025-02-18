import { redis, saveToRedis } from "@/lib/redis";
import { fetchAllCategories, fetchAllProducts } from "@/lib/fetchWooData";

export async function GET() {
    try {
			

				const categories = await fetchAllCategories();
				const products = await fetchAllProducts();

        // Store data in Redis
        await saveToRedis("products", products);
        await saveToRedis("categories", categories);

				const productsFromRedis = await redis.get("products");
				const categoriesFromRedis = await redis.get("categories");
        return new Response(
					JSON.stringify({ 
						message: "WooCommerce data updated successfully" ,
						products: JSON.parse(productsFromRedis) || [],
						categories: JSON.parse(categoriesFromRedis) || [],
					
					}), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("❌ Error updating WooCommerce data:", error);
        return new Response(JSON.stringify({ message: "Failed to update WooCommerce data" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
