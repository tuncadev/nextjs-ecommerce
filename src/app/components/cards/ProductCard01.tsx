"use client";

import Link from "next/link";
import { useState } from "react";
import { Product } from "@/app/types/products";
 
import Working from "@/app/components/actions/Working";

import { AddToCartModal } from "@/app/components/modals/AddToCartModal";
import { useFavorites } from "@/app/context/FavoritesContext";
import getCategoryLink from "@/app/utils/getCategoryLink";
import ProductRating from "../products/ProductRating";
import ProductCardPrice from "../products/ProductCardPrice";
 

type Props = {
  product: Product;
  isModal?: boolean;
	catHasParent?: boolean;
	};
export const ProductCard01 = ({ product, catHasParent }: Props) => {
	const [imgLoaded, setImgLoaded] = useState(false);
	const { handleFavoritesAction, isFavorite }= useFavorites();
	const [openModal, setOpenModal] = useState(false);
	const category = catHasParent
  ? product?.categories?.[0]
  : product?.categories?.[1];
	
	const handleAddToCart = async () => {
		product && setOpenModal(true);
	}

	const handleFavorites = async (e: React.MouseEvent) => {
		e.stopPropagation();
		e.preventDefault();
		product && handleFavoritesAction(product);
	}
 
	const productImage = product?.images[0]?.src || "/images/default-category.jpg";

	const prices = product.variationsData.map((v: any) => Number(v.price)).filter(Boolean);
	const hasPrices = prices.length > 0;
	const min = hasPrices ? Math.min(...prices) : 0;
	const max = hasPrices ? Math.max(...prices) : 0;


return (
		<>
		<div className="group/outer border hover:shadow-md border-gray-300 rounded-md px-2 py-1 relative flex flex-col overflow-hidden justify-between h-full w-full min-h-[300px] md:min-w-[200px] sm:max-w-[150px]">
			{/** Favorites */}
			<div
				className={`${
					isFavorite(product.id)
						? "bg-customRed border-customRed text-white"
						: "bg-white border-customRed border-y border-l text-customRed hover:text-white hover:bg-customRed"
				} group/inner  flex group-hover/outer:right-0 hover:cursor-pointer border-customRed border-y border-l hover:bg-customRed justify-start items-center  w-8 h-[20px] transition-all	z-10 duration-200  absolute right-0 lg:-right-6 top-[13px]		rounded-tl-md rounded-bl-md`}
				style={{ touchAction: "manipulation" }}
			>
				<button onClick={handleFavorites} className="w-full h-full items-center flex">
					<i
						className={`${
							isFavorite(product.id) ? "fa-solid" : "fa-regular"
						} pl-2 text-md fa-heart`}
					></i>
				</button>
			</div>
						
			{/** Cart */}
			
			<div className={`${
					product.inCart ? "bg-customGreen  border-customGreen border text-white" : "bg-white border-customRed text-customRed"
				} group/inner  flex group-hover/outer:right-0 hover:cursor-pointer  border-y border-l  hover:bg-customRed justify-start items-center  w-8 h-[20px] transition-all	z-10 duration-500  absolute right-0 lg:-right-6 top-[35px]		rounded-tl-md rounded-bl-md`}>
				<i
				 onClick={handleAddToCart}
				 className={`fa-solid fa-cart-plus group-hover/inner:text-white pl-2 text-md `}
				></i>
				
			</div>
				{/** Product Card */}
			<div className="flex group flex-col flex-grow">
				<Link
				 	href={category ? getCategoryLink(category.id, category.slug) : "#"}
					className="h-full w-full "> 
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
										alt={product.name || "Product image"}
										className={`rounded-lg transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
										onLoad={() => setImgLoaded(true)}
									/>
								</picture>
							</div>
						</div>
					{/** Product Name */}
						<div className="flex flex-col justify-between flex-grow">
							<span className="text-sm text-[#0066cc]  hover:text-[#dd2400] group-hover:text-[#dd2400]">
								{product.name}
							</span>
						</div>
					{/** Product Rating */}
						<ProductRating average={product.averageRating} />
					{/** Product price */}
						<ProductCardPrice variationsCount={product.variationsData?.length} productPrice={product.price} min={min} max={max}  />
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


 