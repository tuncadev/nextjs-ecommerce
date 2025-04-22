import React from "react";

type ProductVariationProps = {
	variation?: any;
};

export const ProductVariation: React.FC<ProductVariationProps> = ({ variation = {} }) => {

	const variationImage = variation.image;
 
	return (
		<div className="p-2 hover:cursor-pointer rounded-md border hover:border-1 hover:border-gray-400  max-w-[250px]"> 
			<div className="max-w-56   overflow-hidden rounded-lg">
				<img className="" src={variationImage.src} alt="" />
			</div>
			<h3 className="text-sm font-semibold pl-1">{variation.name}</h3>
			<span className="instock text-sm font-semibold pl-1">{variation.price} грн</span>
		</div>
	)
}
