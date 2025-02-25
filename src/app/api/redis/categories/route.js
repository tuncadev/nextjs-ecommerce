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
    // ✅ Fetch categories from Redis
    const categoriesFromRedis = await getFromRedis("categories");

    if (!categoriesFromRedis) {
      console.warn("⚠️ No categories found in Redis");
      return new Response(
        JSON.stringify({
          message: "No categories found in Redis",
          categories: [],
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // ✅ Ensure categories are returned as an array
 
		const categories = Array.isArray(categoriesFromRedis) ? categoriesFromRedis : [];

		// 🔹 **Ensure category.image is a string before replacing**
		/*const updatedCategories = categories.map(category => ({
				...category,
				image: typeof category.image === "string"
						? category.image.replace("backend.tunca.site", "kangaroo.tunca.site")
						: category.image, // Keep it as-is if it's null/undefined
		}));*/
    return new Response(
      JSON.stringify({
        message: "Categories fetched successfully",
        categories: categories,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("❌ Error fetching Categories:", error);
    return new Response(
      JSON.stringify({ message: "Failed to fetch categories from Redis" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
