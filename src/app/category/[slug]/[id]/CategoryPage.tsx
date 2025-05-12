"use client";

import { useProducts } from "@/app/context/ProductsContext";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { ProductCard01 } from "@/app/components/cards/ProductCard01";
import Working from "@/app/components/actions/Working";
import { useAuth } from "@/app/context/AuthProvider";
import { Variation } from "@/app/types/variations";
import { VariationCard01 } from "@/app/components/cards/VariationCard01";

const CategoryPage: React.FC = () => {
  const { getProductsByCatId, productsLoading, getProductVariationsById, isParentCategory, hasParent } = useProducts();
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

    return { isParent, categoryProducts };
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
    <section className="justify-between mt-4 grid grid-cols-2 gap-6 md:gap-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {categoryProducts.map((product) => {

				const catHasParent = hasParent(product.categories[0].id)
        const variations = (getProductVariationsById(product.id) || []) as Variation[];
        return (
          <React.Fragment key={product.id}>
            {
						variations.length > 0 && !isParent ? (
              variations.map((variation: Variation) => (
                <VariationCard01 key={variation.id} product={product} variation={variation} />
              ))
            ) : (
              <ProductCard01 catHasParent={catHasParent} product={product} />
            )
						}
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default CategoryPage;
