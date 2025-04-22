"use client";
import { useProducts } from "@/app/context/ProductsContext";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { ProductCard01 } from "@/app/components/cards/ProductCard01";
import Working from "@/app/components/actions/Working";

const CategoryPage: React.FC = () => {
  const { categories, getProductsByCatId, loading } = useProducts();
  const params = useParams();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!params?.id || typeof params.id !== "string") {
    return <div className="text-center text-red-500">Невірна категорія</div>;
  }

  const categoryProducts = useMemo(() => {
    return getProductsByCatId(Number(params.id));
  }, [params.id, getProductsByCatId]);

  if (!hydrated || loading) return <Working />;

  if (!categoryProducts || categoryProducts.length === 0) {
    return (
      <div className="text-center col-span-full text-gray-500">
        Товарів не знайдено.
      </div>
    );
  }

  return (
    <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {categoryProducts.map((product) => (
        <ProductCard01 key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CategoryPage;
