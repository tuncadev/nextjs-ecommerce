"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Product } from "@/app/types/products";
import { Category } from "@/app/types/categories";
import { Variation } from "@/app/types/variations";
import { useCart } from "@/app/context/CartContext";

type ProductsContextType = {
  categories: Category[];
  products: Product[];
  variations: Variation[];
  productsLoading: boolean;
  error: string | null;
  getProductById: (id: number) => Product | undefined;
  getProductBySlug: (slug: string) => Product | undefined;
  getCategoryById: (id: number) => Category | undefined;
  getCategoryBySlug: (slug: string) => Category | undefined;
  getProductsByCatId: (catId: number) => Product[];
  getProductVariationById: (id: number) => Variation | undefined;
	getProductVariationsById: (id: number) => Variation[]
  getFeaturedCategories: () => Category[];
  getSubCategoriesFromParentId: (parentId: number) => Category[];
	isParentCategory: (id: number) => boolean;
	hasParent: (id: number) => boolean;
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
  const [productsLoading, setProductsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
	const [rawProductData, setRawProductData] = useState<any[]>([]);
	const {cartItems} = useCart();
	
  useEffect(() => {
		const fetchAll = async () => {
			setProductsLoading(true);
			try {
				const [catRes, prodRes, varRes] = await Promise.all([
					fetch("/api/products/categories/get-categories"),
					fetch("/api/products/get-products"),
					fetch("/api/products/get-variations"),
				]);
	
				const catData = await catRes.json();
				const prodData = await prodRes.json();
				const varData = await varRes.json();
	
				setCategories(catData?.status === "success" ? catData.data : []);
				setVariations(varData?.status === "success" ? varData.data : []);
	
				// TEMP store raw for enrichment
				setRawProductData(prodData?.status === "success" ? prodData.data : []);
	
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
				setProductsLoading(false);
			}
		};
	
		fetchAll();
	}, []);
	

	useEffect(() => {
		if (!rawProductData.length || !variations.length) return;
	
		const enrichedProducts = rawProductData.map((p) => {
			const variationIds = typeof p.variations === "string"
				? safelyParseArray(p.variations)
				: p.variations;
	
			const variationsData = variationIds
				.map((vid: number) => variations.find((v: Variation) => v.wpId === vid))
				.filter(Boolean);
			return {
				...normalizeProduct(p),
				variationsData,
				inCart: cartItems.some(item => item.productId === p.wpId),
			};
		});
	
		setProducts(enrichedProducts);
	}, [rawProductData, variations, cartItems]);

  const getProductById = (id: number): Product | undefined => {
    return products.find((p) => p.wpId === id);
  };

	const isParentCategory = (id: number): boolean => {
 
		return categories.some((c) => ( c?.wpId === id && c?.parent === null  ) || c?.parent === id);
	};

	const hasParent = (id: number): boolean => {

 		return categories.some((c) => c?.wpId === id && c?.parent !== null );
	};

  const getProductBySlug = (slug: string): Product | undefined =>
    products.find((p) => p.slug === slug);

  const getCategoryById = (id: number): Category | undefined =>
    categories.find((c) => c.wpId === id);

  const getCategoryBySlug = (slug: string): Category | undefined =>
    categories.find((c) => c.slug === slug);

	const getProductVariationsById = (id: number): Variation[] =>
		variations.filter((v) => v.productId === id);

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
        productsLoading,
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
				getProductVariationsById,
				isParentCategory,
				hasParent,
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