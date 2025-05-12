"use client";

import Link from "next/link";
import { useState } from "react";
import { Product } from "@/app/types/products";
import getProductLink from "@/app/utils/getProductLink";
import Working from "@/app/components/actions/Working";

import { AddToCartModal } from "@/app/components/modals/AddToCartModal";
import { useFavorites } from "@/app/context/FavoritesContext";
import { Variation } from "@/app/types/variations";

type Props = {
  product: Product;
  isModal?: boolean;
	variation: Variation;
};
type ImageType = {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
};


export const VariationCard01 = ({ product, variation }: Props) => {
	const [imgLoaded, setImgLoaded] = useState(false);
	const [cartLoading] = useState(false);
	const { handleFavoritesAction, isFavorite }= useFavorites();
	const [openModal, setOpenModal] = useState(false);

	let parsedImage: ImageType | null = null;

	try {
		parsedImage = JSON.parse(variation.image);
	} catch (e) {
		console.error("Invalid image JSON:", e);
	}
	const handleAddToCart = async () => {
		product && setOpenModal(true);
	}

	const handleFavorites = async () => {
		product && handleFavoritesAction(product);
	}
	
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
							{!parsedImage && (
								<div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70">
									<Working />
								</div>
							)}
							<picture className="w-auto">
								<source media="(max-width: 767px)" srcSet={`/api/media?url=${parsedImage?.src}`} />
								<source media="(min-width: 768px) and (max-width: 1024px)" srcSet={`/api/media?url=${parsedImage?.src}`} />
								<img
									src={`/api/media?url=${parsedImage?.src}`}
									alt="Product"
									className={`rounded-lg transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
									onLoad={() => setImgLoaded(true)}
								/>
							</picture>
						</div>
					</div>
	 
					{/** Product name */}
					<h5 className="text-sm font-semibold tracking-tight line-clamp-2  pl-1">
					
							<span className=" text-gray-900">
								{variation?.regularPrice ? `${variation?.regularPrice} ₴` : "Ціна недоступна "}
							</span>


					</h5>
					{/** Product Price */}
					<div className="flex flex-col justify-between flex-grow">
						<span className="text-sm text-[#0066cc]  hover:text-[#dd2400] group-hover:text-[#dd2400]">
							{variation?.name}
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


 