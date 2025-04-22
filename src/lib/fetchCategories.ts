const API_URL = process.env.WP_BASE_API as string;
const AUTH_PARAMS = `consumer_key=${process.env.WP_CONSUMER_KEY as string}&consumer_secret=${process.env.WP_CONSUMER_SECRET as string}`;

export async function fetchAllCategories(): Promise<any[]> { // Replace `any[]` with actual Category type if available
  try {
    const response = await fetch(`${API_URL}/wc/v3/products/categories?per_page=100&${AUTH_PARAMS}`);

    if (!response.ok) throw new Error("Failed to fetch categories");

    const categories: any[] = await response.json(); // Replace `any[]` with actual type
    return categories;
  } catch (error) {
    console.error("❌ Error fetching categories:", error instanceof Error ? error.message : "Невідома помилка");
    return [];
  }
}fetchAllCategories
