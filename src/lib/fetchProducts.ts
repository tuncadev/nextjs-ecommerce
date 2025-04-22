const API_URL = process.env.WP_BASE_API as string;
const AUTH_PARAMS = `consumer_key=${process.env.WP_CONSUMER_KEY as string}&consumer_secret=${process.env.WP_CONSUMER_SECRET as string}`;

export async function fetchAllProducts(): Promise<any[]> { // Replace `any[]` with a proper Product type if available
  try {

    const response = await fetch(`${API_URL}/wc/v3/products?per_page=100&${AUTH_PARAMS}`);
    
    if (!response.ok) {

      throw new Error("Failed to fetch products");
    }

    const products: any[] = await response.json(); // Replace `any[]` with a proper type if available

		if (!products) {

      throw new Error("Failed to fetch products");
    }


    return products;
    
  } catch (error) {
    console.error("❌ Error fetching products:", error instanceof Error ? error.message : "Невідома помилка");
    return [];
  }
}
