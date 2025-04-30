
import { NextRequest, NextResponse } from "next/server";
import { getAllowedHosts } from "@/app/utils/getAllowedHosts";

export async function GET(req: NextRequest): Promise<NextResponse> {
	const checkHost = getAllowedHosts(req);
	if (!checkHost) {
		return new NextResponse("403 Forbidden - Access Denied", {
			status: 403,
			headers: { "Content-Type": "text/plain" },
		});
	}

	const url = new URL(req.url);
	const backendUrl = process.env.BACKEND_UPLOADS_URL;
	const imageUrl = url.searchParams.get("url");

	if (!imageUrl || !backendUrl) {
		return NextResponse.json({ error: "No image URL provided or backend URL missing" }, { status: 400 });
	}

	try {
		const fullImageUrl = `${backendUrl}/${imageUrl}`;
		const response = await fetch(fullImageUrl);

		if (!response.ok) {
			return NextResponse.json({ error: "Image not found" }, { status: 404 });
		}

		const imageBuffer = await response.arrayBuffer();
		const contentType = response.headers.get("Content-Type") || "image/jpeg";

		return new NextResponse(imageBuffer, {
			status: 200,
			headers: {
				"Content-Type": contentType,
				"Cache-Control": "max-age=31536000, immutable",
			},
		});
	} catch (error) {
		return NextResponse.json({ error: "Failed to load image" }, { status: 500 });
	}
}
