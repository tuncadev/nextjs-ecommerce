import { NextResponse } from "next/server";

export async function GET() {
    try {
        const API_URL = process.env.WP_API_PRODUCTS_URL;
        const CONSUMER_KEY = process.env.WP_CONSUMER_KEY;
        const CONSUMER_SECRET = process.env.WP_CONSUMER_SECRET;
        const AUTH_PARAMS = `consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;

        console.log("Fetching products...");
        const res = await fetch(`${API_URL}?per_page=100&${AUTH_PARAMS}`);

        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();

        return NextResponse.json({ products: data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
