"use client";
import { useProducts } from "@/app/context/ProductsContext";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { ProductCard01 } from "@/app/components/cards/ProductCard01";
import Working from "@/app/components/actions/Working";
import { useAuth } from "@/app/context/AuthProvider";
 
const CategoryPage: React.FC = () => {
  const { getProductsByCatId, productsLoading } = useProducts();
  const params = useParams();
  const [hydrated, setHydrated] = useState(false);
	const { authHydrated, authLoading} = useAuth();

  useEffect(() => {
    setHydrated(true);
  }, [getProductsByCatId]);

  if (!params?.id || typeof params.id !== "string") {
    return <div className="text-center text-customRed">Невірна категорія</div>;
  }

	
  const categoryProducts = useMemo(() => {
    return getProductsByCatId(Number(params.id));
  }, [params.id, getProductsByCatId]);

  if (!hydrated || !params?.id || typeof params.id !== "string" || productsLoading) {
		return <Working />;
	}

  if (!categoryProducts || categoryProducts.length === 0) {
    return (
      <div className="text-center col-span-full text-gray-500">
        Товарів не знайдено.
      </div>
    );
  }

	if (!authHydrated || authLoading) return <Working />


  return (
		<section className="justify-between mt-4 grid grid-cols-2 gap-6 md:gap-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {categoryProducts.map((product) => (
        <ProductCard01 key={product.id} product={product} />
      ))}
		</section>
  );
};

export default CategoryPage;
