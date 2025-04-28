"use client";

import { useEffect, useState, useMemo } from "react";
import { Loading } from "@/app/components/actions/Loading";
import { WarningMessage } from "@/app/components/messages/WarningMessage";
import { CategoryProductCard02 } from "@/app/components/cards/CategoryProductCard02";
import { useProducts } from "@/app/context/ProductsContext";

export const PopularCategories = () => {
  const {
    getFeaturedCategories,
    categories,
    productsLoading,
    error,
    getSubCategoriesFromParentId,
  } = useProducts();

  const [subCategoriesMap, setSubCategoriesMap] = useState<{ [key: number]: any[] }>({});
  const [randomizedCategories, setRandomizedCategories] = useState<any[]>([]);

  const featuredCategories = useMemo(() => getFeaturedCategories(), [categories]);

  useEffect(() => {
    async function fetchSubCategories() {
      const newSubCategoriesMap: { [key: number]: any[] } = {};

      for (const category of featuredCategories) {
        const subs = await getSubCategoriesFromParentId(category.wpId);
        newSubCategoriesMap[category.wpId] = subs;
      }

      setSubCategoriesMap(newSubCategoriesMap);
    }

    if (featuredCategories.length > 0) {
      fetchSubCategories();

      const shuffled = [...featuredCategories]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      setRandomizedCategories(shuffled);
    }
  }, [featuredCategories]);

  return (
    <div className="flex flex-col justify-center m-auto">
      <h2 className="">Найпопулярніші категорії місяця</h2>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
        {productsLoading ? (
          <div className="flex flex-col justify-center gap-2">
            <Loading text="Завантаження категорій..." />
          </div>
        ) : error ? (
          <WarningMessage message={error} />
        ) : randomizedCategories.length > 0 ? (
          randomizedCategories.map((category) => (
            <CategoryProductCard02
              key={category.wpId}
              category={category}
              subCategories={(subCategoriesMap[category.wpId] ?? []).slice(0, 3)}
            />
          ))
        ) : (
          <WarningMessage message="Жодної категорії не знайдено." />
        )}
      </div>
    </div>
  );
};
