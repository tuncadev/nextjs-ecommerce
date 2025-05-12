import crypto from "crypto";

export async function readRawBody(readable: ReadableStream<Uint8Array>): Promise<Buffer> {
	const reader = readable.getReader();
	const chunks: Uint8Array[] = [];

	while (true) {
		const { done, value } = await reader.read();
		if (done) break;
		if (value) chunks.push(value);
	}

	return Buffer.concat(chunks);
}

export async function verifyWooSignature({
	req,
	secret,
	debug = false,
}: {
	req: Request;
	secret: string;
	debug?: boolean;
}): Promise<{
	valid: boolean;
	body: string;
	json?: any;
	signature?: string;
	expected?: string;
}> {
	const signature = req.headers.get("x-wc-webhook-signature") || "";
	const rawBodyBuffer = await readRawBody(req.body as ReadableStream<Uint8Array>);

	const expectedSignature = crypto
		.createHmac("sha256", secret)
		.update(rawBodyBuffer) // critical: raw buffer only
		.digest("base64");

	const isValid = signature === expectedSignature;

	if (debug) {
		console.warn("🔐 Received signature:", signature);
		console.warn("🔐 Expected signature:", expectedSignature);
	}

	let json: any;
	let body: string;
	try {
		body = rawBodyBuffer.toString("utf8");
		json = JSON.parse(body);
	} catch {
		body = rawBodyBuffer.toString("utf8"); // fallback to string if not JSON
	}

	return {
		valid: isValid,
		body,
		json,
		signature,
		expected: expectedSignature,
	};
}
