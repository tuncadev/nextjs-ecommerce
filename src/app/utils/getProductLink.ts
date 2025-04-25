// src/app/utils/getProductLink.ts
import { Category } from "@/app/types/categories";
import { Product } from "@/app/types/products";

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

  
  return `/product/${product.slug}/${product.id}`;
};

export default getProductLink;
