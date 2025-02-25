import { NextResponse } from "next/server";
import { getAllowedHosts } from "@/app/utils/getAllowedHosts";

export async function GET(req) {
	const checkHost = getAllowedHosts(req);
	if (!checkHost) {
		return new Response("403 Forbidden - Access Denied", { 
				status: 403,
				headers: { "Content-Type": "text/plain" }, // ✅ Ensure raw text response
		});
	}
    const url = new URL(req.url);
		const backendUrl = process.env.BACKEND_UPLOADS_URL
    const imageUrl = url.searchParams.get("url");

    if (!imageUrl) {
        return NextResponse.json({ error: "No image URL provided" }, { status: 400 });
    }

    try {

        const fullImageUrl = `${backendUrl}/${imageUrl}`;
        const response = await fetch(fullImageUrl);
        
        if (!response.ok) {
            return NextResponse.json({ error: "Image not found" }, { status: 404 });
        }

        const imageBuffer = await response.arrayBuffer();

        return new NextResponse(imageBuffer, {
            status: 200,
            headers: {
                "Content-Type": response.headers.get("Content-Type"),
                "Cache-Control": "max-age=31536000, immutable" // Cache for 1 year
            }
        });
    } catch (error) {
        return NextResponse.json({ error: "Failed to load image" }, { status: 500 });
    }
}
