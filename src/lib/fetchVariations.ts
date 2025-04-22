const API_URL = process.env.WP_BASE_API as string;
const AUTH_PARAMS = `consumer_key=${process.env.WP_CONSUMER_KEY as string}&consumer_secret=${process.env.WP_CONSUMER_SECRET as string}`;

export async function fetchVariationsForProduct(
  productId: number,
  variationIds: number[]
): Promise<any[]> {

  try {
    const variationResponses = await Promise.all(
      variationIds.map(async (variationId: number) => {
        const res = await fetch(`${API_URL}/wc/v3/products/${productId}/variations/${variationId}?${AUTH_PARAMS}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch variation ${variationId}`);
        }
        return res.json();
      })
    );

    return variationResponses;
  } catch (error) {
    console.error("❌ Error fetching variations:", error instanceof Error ? error.message : "Unknown error");
    return [];
  }
}
