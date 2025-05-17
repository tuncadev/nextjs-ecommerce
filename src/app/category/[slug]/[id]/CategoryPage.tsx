"use client";

import { useProducts } from "@/app/context/ProductsContext";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

import Working from "@/app/components/actions/Working";
import { useAuth } from "@/app/context/AuthProvider";
import { Variation } from "@/app/types/variations";

import { BaseCard } from "@/app/components/cards/BaseCard";

const CategoryPage: React.FC = () => {
  const { getProductsByCatId, productsLoading, getProductVariationsById, isParentCategory, getCategoryById } = useProducts();
  const params = useParams();
  const [hydrated, setHydrated] = useState(false);
  const { authHydrated, authLoading } = useAuth();

  useEffect(() => {
    setHydrated(true);
  }, [getProductsByCatId]);

  if (!params?.id || typeof params.id !== "string") {
    return <div className="text-center text-customRed">Невірна категорія</div>;
  }

  const categoryDetails = useMemo(() => {
    const isParent = isParentCategory(Number(params.id));
    const categoryProducts = getProductsByCatId(Number(params.id));
		const category = getCategoryById(Number(params.id));

    return { isParent, categoryProducts,category };
  }, [params.id, getProductsByCatId]);

  const categoryProducts = categoryDetails.categoryProducts;
	const isParent = categoryDetails.isParent;


  if (!hydrated || productsLoading || !authHydrated || authLoading) {
    return <Working />;
  }

  if (!categoryProducts || categoryProducts.length === 0) {
    return (
      <div className="text-center col-span-full text-gray-500">
        Товарів не знайдено.
      </div>
    );
  }

  return (
    <div className="page_container">
			<h1  className="pl-4 ">{categoryDetails.category?.name}</h1>
			<section className="justify-between mt-4 grid grid-cols-2 gap-y-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {categoryProducts.map((product) => {
 
        const variations = (getProductVariationsById(product.id) || []) as Variation[];
        return (
          <React.Fragment key={product.id}>
            {
						variations.length > 0 && !isParent ? (
              variations.map((variation: Variation) => (
								<BaseCard  key={`${product.id}-${variation.id}`} product={product} variation={variation} />

              ))
            ) : (
              <BaseCard product={product} catHasParent={true} />
            )
						}
          </React.Fragment>
        );
      })}
    </section>
		</div>
  );
};

export default CategoryPage;
