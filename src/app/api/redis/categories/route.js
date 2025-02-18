import { getFromRedis } from "@/lib/redis";

export async function GET() { 
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

    return new Response(
      JSON.stringify({
        message: "Categories fetched successfully",
        categories,
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
