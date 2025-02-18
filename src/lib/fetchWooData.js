const API_URL = process.env.WP_BASE_API;
const AUTH_PARAMS = `consumer_key=${process.env.WP_CONSUMER_KEY}&consumer_secret=${process.env.WP_CONSUMER_SECRET}`;

export async function fetchAllCategories() {
    try {
        const response = await fetch(`${API_URL}/wc/v3/products/categories?per_page=100&${AUTH_PARAMS}`);
        if (!response.ok) throw new Error("Failed to fetch categories");

        const categories = await response.json();

        return categories;
    } catch (error) {
        console.error("❌ Error fetching categories:", error);
        return [];
    }
}

export async function fetchAllProducts() {
    try {
        const response = await fetch(`${API_URL}/wc/v3/products?per_page=100&${AUTH_PARAMS}`);
        if (!response.ok) throw new Error("Failed to fetch products");

        const products = await response.json();

        return products;
    } catch (error) {
        console.error("❌ Error fetching products:", error);
        return [];
    }
}
