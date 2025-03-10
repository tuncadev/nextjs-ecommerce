"use client";
import { Card } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";

export const ProductCard01 = ({ product }) => {
	
	const [isFavorite, setIsFavorite] = useState(false);
  
	return (
		<div className="relative group flex flex-col justify-between h-full w-full min-h-[300px] min-w-[200px]">
  		<div className="flex flex-col flex-grow">
				<div className=" group-hover:block product_favorites absolute right-3 top-2">
					<i className={`${isFavorite ? "fa-solid" : "fa-regular "} hover:text-gray-600 text-md hover:cursor-pointer fa-heart text-red-500`}></i>
				</div>
				<Link
					href={`/${product.categories[0].slug}/c${product.categories[0].id}/${product.slug}/p${product.id}`}
					className="h-full w-full"
				>
					<div>
						<div  className="min-h-[222px] flex items-center justify-center">
							<picture>
								<source media="(max-width: 767px)" srcSet={`/api/media?url=${product.images[0]?.src}`} />
								<source media="(min-width: 768px) and (max-width: 1024px)" srcSet={`/api/media?url=${product.images[0]?.src}`} />
								<img  src={`/api/media?url=${product.images[0]?.src}`} alt="Product" />
							</picture>
						</div>
						{/* Title */}
						<h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2 h-[40px]">
							{product.name}
						</h5>

						{/* Rating */}
						<div className="mb-3 sm:mb-5 mt-1 sm:mt-2.5 flex items-center">
							{[...Array(5)].map((_, index) => (
								<svg
									key={index}
									className={`h-3 w-3 sm:h-5 sm:w-5 ${
										index < Math.round(product?.average_rating || 0) ? "text-yellow-300" : "text-gray-300"
									}`}
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							))}
							<span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800">
								{product.average_rating || "N/A"}
							</span>
						</div>

						{/* Price & Button */}
						<div className="flex flex-col justify-between flex-grow">
							<span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
								{product.price ? `$${product.price}` : "Price not available"}
							</span>
							<button
								className="rounded-lg bg-cyan-700 sm:px-5 sm:py-2.5 px-3 py-2 text-center text-xs mt-2 font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
								onClick={() => alert(`Added ${product.name} to cart`)}
							>
								Add to cart
							</button>
						</div>
					</div>
				</Link>
			</div>
		</div>
  );
};
