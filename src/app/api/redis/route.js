import { getAllRedisData } from "@/lib/redis";
import { NextResponse } from "next/server";
import { getAllowedHosts } from "@/app/utils/getAllowedHosts";

export async function GET(req) { 

	try {
		// ✅ Fetch categories from Redis
 
		const allData = await getAllRedisData();
 

		if (!allData) {
			console.warn("⚠️ Nothing found in Redis");
			return new Response(
				JSON.stringify({
					data: "No data found in Redis",
				}),
				{
					status: 200,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		// ✅ Ensure categories are returned as an array
		const redisData = Array.isArray(allData) ? allData : [];

		return new Response(
			JSON.stringify({
				message: "Data fetched successfully",
				allData,
			}),
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			}
		);
	} catch (error) {
		console.error("❌ Error fetching data:", error);
		return new Response(
			JSON.stringify({ message: "Failed to fetch categories from Redis" }),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
}
