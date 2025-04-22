"use client";
import { Card } from "flowbite-react";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Product } from "@/app/types/products";

type Props = {
  product: Product;
};

export const ProductCard01 = ({ product }: Props) => {
	const [isFavorite, setIsFavorite] = useState(false);


	const productImage = product?.images[0]?.src || "/images/default-category.jpg";

	const averageRating = useMemo(() => Math.round(product?.averageRating || 0), [product]);

	return (
		<div className="relative group flex flex-col justify-between h-full w-full min-h-[300px] min-w-[200px] ">
			<div className="flex flex-col flex-grow">
				{/** Favorites */}
 
				{/** Product Card */}
				<Link
					href={`/product/${product.slug}/${product.wpId}`}
					className="h-full w-full "
				>
					{/** Product Image */}
					<div className="flex relatives items-center justify-center mb-2">
						<div className="w-10 bg-white absolute right-0 top-4 rounded-tl-md rounded-bl-md ">
							<i
								className={`${
									isFavorite ? "fa-solid" : "fa-regular"
								} hover:text-gray-600 text-md hover:cursor-pointer fa-heart text-red-500 `}
							></i>
						</div>
						<picture className=" w-auto h-[160px] overflow-hidden">
							<source media="(max-width: 767px)" srcSet={`/api/media?url=${productImage}`} />
							<source media="(min-width: 768px) and (max-width: 1024px)" srcSet={`/api/media?url=${productImage}`} />
							<img src={`/api/media?url=${productImage}`} alt="Product" />
						</picture>
					</div>
					{/** Product name */}
					<h5 className="text-sm font-semibold tracking-tight line-clamp-2  pl-1">
					{product.variationsData?.length > 0 ? (
							(() => {
								const prices = product.variationsData.map((v: any) => Number(v.price)).filter(Boolean);
								const min = Math.min(...prices);
								const max = Math.max(...prices);
								return (
									<span className=" text-gray-900">
										{min === max ? `${min} ₴` : `${min} ₴ – ${max} ₴`}
									</span>
								);
							})()
						) : (
							<span className=" text-gray-900">
								{product.price ? `${product.price} ₴` : "Ціна недоступна "}
							</span>
						)}

					</h5>
					{/** Product Rating */}
					<div className="mb-2 sm:mb-3 mt-1 sm:mt-2.5 flex items-center">
						{[...Array(5)].map((_, index) => (
							<svg
								key={index}
								className={`h-3 w-3 sm:h-5 sm:w-5 ${
									index < averageRating ? "text-yellow-300" : "text-gray-300"
								}`}
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						))}
						<span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800">
							{product.averageRating || "0"}
						</span>
					</div>
					{/** Product Price */}
					<div className="flex flex-col justify-between flex-grow">
						<span className="text-sm text-[#0066cc]  hover:text-[#dd2400] group-hover:text-[#dd2400]">
							{product.name}
						</span>

					</div>
				</Link>
			</div>
		</div>
	);
};


 