export async function fetchCategoryById(id: string) {
  const res = await fetch(`${process.env.WP_API_CATEGORIES_URL}/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  

  return data;
}
