"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { Product } from "@/app/types/products";
import getProductLink from "@/app/utils/getProductLink";
import Working from "@/app/components/actions/Working";

import { AddToCartModal } from "@/app/components/modals/AddToCartModal";
import { useFavorites } from "@/app/context/FavoritesContext";

type Props = {
  product: Product;
	isModal?: boolean;
};

export const ProductCard01 = ({ product }: Props) => {
	const [imgLoaded, setImgLoaded] = useState(false);
	const [cartLoading] = useState(false);
	const { handleFavoritesAction, isFavorite }= useFavorites();
	const [openModal, setOpenModal] = useState(false);

	
	const handleAddToCart = async () => {
		product && setOpenModal(true);
	}

	const handleFavorites = async () => {
		product && handleFavoritesAction(product);
	}
	
	const productImage = product?.images[0]?.src || "/images/default-category.jpg";

	const averageRating = useMemo(() => Math.round(product?.averageRating || 0), [product]);

return cartLoading ? (
    <Working />
  ) : (
		<>
		<div className="group/outer relative flex flex-col overflow-hidden justify-between h-full w-full min-h-[300px] md:min-w-[200px] sm:max-w-[150px]">
				{/** Favorites */}
			<div className={`${isFavorite(product.id) ? "bg-customRed text-white " : "bg-white text-customRed hover:cursor-pointer hover:text-white hover:bg-customRed"} group/inner flex group-hover/outer:right-0 justify-start items-center  w-8 h-[20px] transition-all duration-200	z-10 absolute right-0 lg:-right-6 top-[13px]		rounded-tl-md rounded-bl-md`}>
				<i
				onClick={handleFavorites}
					className={`${
						isFavorite(product.id) ? "fa-solid " : "fa-regular "
					}  pl-2 text-md hover:cursor-pointer fa-heart  `}
				></i>
			</div>
			{/** Cart */}
			
			<div className={`${
					product.inCart ? "bg-customGreen text-white" : "bg-white text-customRed"
				} group/inner  flex group-hover/outer:right-0 hover:cursor-pointer  hover:bg-customRed justify-start items-center  w-8 h-[20px] transition-all	z-10 duration-500  absolute right-0 lg:-right-6 top-[35px]		rounded-tl-md rounded-bl-md`}>
				<i
				 onClick={handleAddToCart}
				 className={`fa-solid fa-cart-plus group-hover/inner:text-white pl-2 text-md `}
				></i>
				
			</div>
				{/** Product Card */}
			<div className="flex group flex-col flex-grow">
			
 

				<Link
				 	href={getProductLink(product?.wpId, product?.slug)}

					className="h-full w-full "
				>
					{/** Product Image */}
					<div className="flex relative items-center rounded-lg  justify-center mb-2  h-[200px] overflow-hidden">
						<div className="flex relative items-center rounded-lg justify-center mb-2 h-[200px] overflow-hidden">
							{!imgLoaded && (
								<div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70">
									<Working />
								</div>
							)}
							<picture className="w-auto">
								<source media="(max-width: 767px)" srcSet={`/api/media?url=${productImage}`} />
								<source media="(min-width: 768px) and (max-width: 1024px)" srcSet={`/api/media?url=${productImage}`} />
								<img
									src={`/api/media?url=${productImage}`}
									alt="Product"
									className={`rounded-lg transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
									onLoad={() => setImgLoaded(true)}
								/>
							</picture>
						</div>
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
		<AddToCartModal 
			openCartModal={openModal}
			setOpenCartModal={setOpenModal}
			productId={product.wpId} 
		/>
</>
	);
};


 