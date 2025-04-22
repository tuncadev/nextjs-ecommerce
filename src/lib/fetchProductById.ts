export async function fetchProductById(id: string) {
  const res = await fetch(`${process.env.WP_API_PRODUCTS_URL}/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;

  return await res.json();
}
