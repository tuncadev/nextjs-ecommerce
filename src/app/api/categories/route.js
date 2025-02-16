import { NextResponse } from "next/server";

export async function GET() {
    try {
				const start = Date.now(); // Track execution time
        const API_URL = process.env.WP_API_PRODUCTS_URL;
        const CONSUMER_KEY = process.env.WP_CONSUMER_KEY;
        const CONSUMER_SECRET = process.env.WP_CONSUMER_SECRET;
        const AUTH_PARAMS = `consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;

				const res = await fetch(`${API_URL}/categories?per_page=100&${AUTH_PARAMS}`);
				if (!res.ok) throw new Error("Failed to fetch categories");
	
				const data = await res.json();
				const executionTime = Date.now() - start;
				console.log(`✅ Categoires Fetched in ${executionTime}ms`);
        return NextResponse.json({ data: data }, { status: 200 });
    } catch (error) {
        console.error("Category Fetch Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
