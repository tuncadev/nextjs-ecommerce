"use client";

import { Loading } from "@/app/components/actions/Loading";
import { Carousel } from "flowbite-react";
import  Slider03  from "@/app/components/sliders/Slider03";
import { useProducts } from "@/app/context/ProductsContext";
import  FallBackProductCard  from "@/app/components/cards/FallBackProductCard";

import type { Category } from "@/app/types/categories";

export const ShopByCategory = () => {
	const { categories, loading } = useProducts();
 

	// Filter out categories with 0 products
	const filteredCategories: Category[] = categories.filter((category) => category.count > 0);

	// Only chunk if more than 6 categories exist
	const chunks: Category[][] =
		filteredCategories.length > 6
			? [...Array(Math.ceil(filteredCategories.length / 6))].map((_, index) =>
					filteredCategories.slice(index * 6, index * 6 + 6)
			  )
			: [filteredCategories];

	return (
		<div className="py-6 border-y border-y-gray-300 my-4">
			<h2 className="">Shop by Category</h2>
			<div>
				{loading ? (
					<div className="flex flex-col justify-center gap-2">
						<Loading text="categories..." />
						<FallBackProductCard />
					</div>
				) : chunks.length > 6 ? (
					<Carousel className="h-96 carousel px-4" indicators={false} slideInterval={5000}>
						{chunks.map((chunk, index) => (
							<Slider03 key={index} categories={chunk} />
						))}
					</Carousel>
				) : (
					chunks.map((chunk, index) => (
						<Slider03 key={index} categories={chunk} />
					))
				)}
			</div>
		</div>
	);
};
