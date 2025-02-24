import { redis, saveToRedis } from "@/lib/redis";
import { NextResponse } from "next/server";

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
	const BACKEND_URL = process.env.BACKEND_UPLOADS_URL;
    try {
				const categories = await fetchAllCategories();
				const fetchedProducts = await fetchAllProducts();
				const products = fetchedProducts.map(product => ({
					...product,
					images: product.images
							? product.images.map(image => ({
									...image,
									src: image.src.replace(BACKEND_URL, "")
							}))
							: []
				}));
        // Store data in Redis
        await saveToRedis("products", products);
        await saveToRedis("categories", categories);

        return new Response(
					JSON.stringify({ 
						message: "WooCommerce data updated successfully",
						//products: JSON.parse(productsFromRedis) || [],
						//categories: JSON.parse(categoriesFromRedis) || [],
					})+ "\n", {
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
