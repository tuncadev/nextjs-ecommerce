import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const API_URL = process.env.WP_API_PRODUCTS_URL;
        const CONSUMER_KEY = process.env.WP_CONSUMER_KEY;
        const CONSUMER_SECRET = process.env.WP_CONSUMER_SECRET;
        const AUTH_PARAMS = `consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;

        const productId = params.id;
        const productRes = await fetch(`${API_URL}/${productId}?${AUTH_PARAMS}`);

        if (!productRes.ok) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        let product = await productRes.json();

        // Check if it's a variable product and fetch variations
        if (product.type === "variable") {
            const variationsRes = await fetch(`${API_URL}/${productId}/variations?${AUTH_PARAMS}`);
            if (variationsRes.ok) {
                product.variations_data = await variationsRes.json();
            }
        }

        return NextResponse.json({ product }, { status: 200 });
    } catch (error) {
        console.error("Error fetching product:", error);
        return NextResponse.json({ error: "Failed to fetch product details" }, { status: 500 });
    }
}
