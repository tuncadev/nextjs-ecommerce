import { redis, saveToRedis } from "@/lib/redis";
import { NextResponse } from "next/server";
import { fetchAllCategories, fetchAllProducts } from "@/lib/fetchWooData";
import { getAllowedHosts } from "@/app/utils/getAllowedHosts";
import fetch from 'node-fetch';

export async function GET(req) {
	/*
	const checkHost = getAllowedHosts(req);
	if (!checkHost) {
		return new Response("403 Forbidden - Access Denied", { 
			status: 403,
			headers: { "Content-Type": "text/plain" }, 
		});
	}
	*/

	const BACKEND_URL = process.env.BACKEND_UPLOADS_URL;

	try {
 
		// Fetch products and categories
		const fetchedProducts = await fetchAllProducts();
 
		const categories = await fetchAllCategories();
 

		// Modify image URLs
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
 
		// Fetch users
		const userRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/get-users`);
 
		if (!userRes.ok) {
			throw new Error(`Error fetching users`);
		}

		// Ensure response is JSON before parsing
		const contentType = userRes.headers.get("content-type");
		if (!contentType || !contentType.includes("application/json")) {
			const rawResponse = await userRes.text(); // Log raw response
			console.error("❌ Unexpected response from get-users API:", rawResponse);
			throw new Error("Invalid JSON response from get-users API");
		}

		const { data: users } = await userRes.json(); // Extract 'data' array from response
 

		await saveToRedis("users", users);
 

		return new Response(JSON.stringify({ 
			message: "WooCommerce and Users data updated successfully",
			data: users,
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});

	} catch (error) {
		console.error("❌ Error updating WooCommerce data:", error.message);
		return new Response(JSON.stringify({ 
			message: "Failed to update WooCommerce data",
			error: error.message 
		}), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
