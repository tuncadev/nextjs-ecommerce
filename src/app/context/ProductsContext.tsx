"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Product } from "@/app/types/products";
import { Category } from "@/app/types/categories";
import { Variation } from "@/app/types/variations";

type ProductsContextType = {
  categories: Category[];
  products: Product[];
  variations: Variation[];
  loading: boolean;
  error: string | null;
  getProductById: (id: number) => Product | undefined;
  getProductBySlug: (slug: string) => Product | undefined;
  getCategoryById: (id: number) => Category | undefined;
  getCategoryBySlug: (slug: string) => Category | undefined;
  getProductsByCatId: (catId: number) => Product[];
  getProductVariationById: (id: number) => Variation | undefined;
  getFeaturedCategories: () => Category[];
  getSubCategoriesFromParentId: (parentId: number) => Category[];
  getCategoryTree: () => (Category & { subcategories: Category[] })[];
};

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

const normalizeProduct = (p: any): Product => ({
  ...p,
  tags: typeof p.tags === "string" ? safelyParseArray(p.tags) : p.tags,
  categories: typeof p.categories === "string" ? safelyParseArray(p.categories) : p.categories,
  images: typeof p.images === "string" ? safelyParseArray(p.images) : p.images,
	attributes: typeof p.attributes === "string" ? safelyParseArray(p.attributes) : p.attributes,
	variationsData: p.variationsData || [],
});

const safelyParseArray = (json: string) => {
  try {
    const parsed = JSON.parse(json);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [variations, setVariations] = useState<Variation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      try {
        const [catRes, prodRes, varRes] = await Promise.all([
          fetch("/api/products/categories/get-categories"),
          fetch("/api/products/get-products"),
          fetch("/api/products/get-variations"),
        ]);

        const catData = await catRes.json();
        const prodData = await prodRes.json();
        const varData = await varRes.json();

        const allVariations = varData?.status === "success" ? varData.data : [];

        setCategories(catData?.status === "success" ? catData.data : []);
        setVariations(allVariations);

        const enrichedProducts =
          prodData?.status === "success"
            ? prodData.data.map((p: any) => {
                const variationIds = typeof p.variations === "string"
                  ? safelyParseArray(p.variations)
                  : p.variations;
                const variationsData = variationIds
                  .map((vid: number) => allVariations.find((v: Variation) => v.wpId === vid))
                  .filter(Boolean);
                return { ...normalizeProduct(p), variationsData };
              })
            : [];

        setProducts(enrichedProducts);

        if (catData?.status !== "success")
          setError(catData.message || "Не вдалося завантажити категорії.");
        if (prodData?.status !== "success")
          setError(prodData.message || "Не вдалося завантажити продукти.");
      } catch {
        setError("Мережева помилка під час завантаження продуктів або категорій.");
        setCategories([]);
        setProducts([]);
        setVariations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  const getProductById = (id: number): Product | undefined => {
    return products.find((p) => p.wpId === id);
  };

  const getProductBySlug = (slug: string): Product | undefined =>
    products.find((p) => p.slug === slug);

  const getCategoryById = (id: number): Category | undefined =>
    categories.find((c) => c.wpId === id);

  const getCategoryBySlug = (slug: string): Category | undefined =>
    categories.find((c) => c.slug === slug);

  const getProductsByCatId = (catId: number): Product[] => {
    return products.filter((product) => {
      const cats = product.categories;
      return Array.isArray(cats) && cats.some((cat) => cat.id === catId);
    });
  };

  const getProductVariationById = (id: number): Variation | undefined =>
    variations.find((v) => v.wpId === id);

  const getFeaturedCategories = useMemo(() => {
    return () => categories.filter((cat) => cat.featured);
  }, [categories]);

  const getSubCategoriesFromParentId = useMemo(() => {
    return (parentId: number) => categories.filter((cat) => cat.parent === parentId);
  }, [categories]);

  const getCategoryTree = useMemo(() => {
    return () => {
      const categoryMap = new Map<number, Category & { subcategories: Category[] }>();

      categories.forEach((category) => {
        categoryMap.set(category.wpId, { ...category, subcategories: [] });
      });

      const tree: (Category & { subcategories: Category[] })[] = [];

      categories.forEach((category) => {
        if (category.parent === 0 || category.parent == null) {
          tree.push(categoryMap.get(category.wpId)!);
        } else {
          const parent = categoryMap.get(category.parent);
          if (parent) parent.subcategories.push(categoryMap.get(category.wpId)!);
        }
      });

      return tree;
    };
  }, [categories]);

  return (
    <ProductsContext.Provider
      value={{
        categories,
        products,
        variations,
        loading,
        error,
        getProductById,
        getProductBySlug,
        getCategoryById,
        getCategoryBySlug,
        getProductsByCatId,
        getProductVariationById,
        getFeaturedCategories,
        getSubCategoriesFromParentId,
        getCategoryTree,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};