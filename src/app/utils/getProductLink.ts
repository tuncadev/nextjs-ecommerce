// src/app/utils/getProductLink.ts

type Category = {
  id: number;
  slug: string;
};

type Product = {
  id: number;
  slug: string;
  categories?: Category[] | string;
};

const safelyParseCategories = (cats: string | Category[]): Category[] => {
  if (typeof cats === "string") {
    try {
      const parsed = JSON.parse(cats);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return cats || [];
};

const getProductLink = (product: Product | null | undefined): string => {
  if (!product) return "#";

  const categories = safelyParseCategories(product.categories ?? []);
  if (!categories.length) return "#";

  const category = categories[0];
  return `/product/${product.slug}/${product.id}`;
};

export default getProductLink;
