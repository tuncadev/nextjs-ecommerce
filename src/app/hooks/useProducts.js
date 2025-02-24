"use client";
import { createContext, useContext, useState, useEffect, useMemo } from "react";
  
const ProductContext = createContext();

 export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriesLoading, setCategoriesLoading] = useState(true); 
  const [error, setError] = useState(null);
	const [selectedProductId, setSelectedProductId] = useState(null);
	const [featuredCategories, setFeaturedCategories] = useState([]);
	const [allCategories, setAllCategories] = useState([]);
	const [productsByCategory, setProductsByCategory] = useState({});
	const [subCategoriesByParent, setSubCategoriesByParent] = useState({});


	useEffect(() => {
    async function fetchData() {
      if (products.length === 0) {
        await fetchProducts();
      }
      if (categories.length === 0) {
        await fetchCategories();
      }
    }
    fetchData();
  }, [products.length, categories.length]);

  /***  Product Operations ***/
	
	async function fetchProducts() {

    try {
        const res = await fetch("/api/redis/products");// Fetch from our Next.js API

        if (!res.ok) throw new Error("Failed to fetch products");

        const { products } = await res.json();
        setProducts(products);

        const categorizedProducts = {};
        products.forEach((product) => {
            product.categories.forEach((category) => {
                if (!categorizedProducts[category.id]) {
                    categorizedProducts[category.id] = [];
                }
                categorizedProducts[category.id].push(product);

                if (!categorizedProducts[category.slug]) {
                    categorizedProducts[category.slug] = [];
                }
                categorizedProducts[category.slug].push(product);
            });
        });

        setProductsByCategory(categorizedProducts);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
}


	function getHotOffers() {
		if (!products.length) return []; // Ensure we have products before filtering
	
		return products.filter((product) => product.featured === true);

	}
	
	async function getProductFromRedisById(id) {
    try {
 

			const res = await fetch("/api/products/from-redis");
			if (!res.ok) throw new Error("Failed to fetch products from Redis");

			const { products } = await res.json(); // ✅ Extract 'products' from the object

			if (!Array.isArray(products)) {
					throw new Error("Invalid products format in Redis response");
			}

			const product = products.find(p => Number(p.id) === Number(id));

			return product || null;
	} catch (error) {
			console.error("❌ Error retrieving product:", error);
			return null;
	}
	}

  async function getProductById(id) {
    try {
        const res = await fetch(`/api/products/${id}`);

        if (!res.ok) {
            throw new Error("Product not found");
        }

        const { product } = await res.json();
        return product;
    } catch (error) {
        console.error("Error fetching product:", error);
        return { error: "Failed to fetch product details" };
    }
}
	function getProductsByCategorySlug(slug) {
		return productsByCategory[slug] || [];
	}
	
	function getProductsByCategoryId(id) {
		return productsByCategory[id] || [];
	}

  /***  Category Operations ***/

  async function fetchCategories() {

		try {
			setCategoriesLoading(true);
			const res = await  fetch("/api/redis/categories");
			if (!res.ok) throw new Error("Failed to fetch categories");
	
			const {categories} = await res.json();
			setCategories(categories);
	
			//  Store all categories in a separate state
			setAllCategories(categories);

			const featured = categories.filter(category => category.featured === true);
    	setFeaturedCategories(featured);

			const groupedSubCategories = {};
			categories.forEach((category) => {
				if (category.parent !== 0) {
					if (!groupedSubCategories[category.parent]) {
						groupedSubCategories[category.parent] = [];
					}
					groupedSubCategories[category.parent].push(category);
				}
			});
			setSubCategoriesByParent(groupedSubCategories);

		} catch (error) {
			console.error("Error fetching categories:", error);
			setCategories([]);
		} finally {
			setCategoriesLoading(false);
		}
	}
	  
	//  Now, `listAllCategories()` simply returns the stored value
	function listAllCategories() {
		return allCategories;
	}

	const getFeaturedCategories = useMemo(() => {
		return () => featuredCategories; //  Returns a function that returns the value
	}, [featuredCategories]); 
	
	function getProductImage(product) {
		return product?.images?.length > 0
			? product.images[0].src.replace("backend.tunca.site", "kangaroo.tunca.site")
			: "/default-placeholder.jpg";
	}

	

	
  function getCategoryById(id) {

    return categories.find((category) => category.id === Number(id)) || "Unknown Category";
  }

  function getCategoryBySlug(slug) {

    if (!categories.length) return null;
    return categories.find((category) => category.slug === slug) || null;
  }

function getSubCategoriesByParentId(id) {
  return subCategoriesByParent[id] || [];
}

  /***  Provide Context to Children ***/
  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        loading,
        categoriesLoading, //  Separate loading state for categories
        error,
				selectedProductId, 
				getProductFromRedisById,
				getHotOffers,
        getProductById,
        getProductsByCategorySlug,
        listAllCategories,
        getProductsByCategoryId,
        getCategoryById,
        getFeaturedCategories,
        getSubCategoriesByParentId,
        getCategoryBySlug,
				setSelectedProductId,
				getProductImage
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// 3️⃣ Custom Hook for Using Context
export const useProducts = () => {
  return useContext(ProductContext);
};
