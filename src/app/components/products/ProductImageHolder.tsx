import React from 'react'
type ProductImageHolderProps = {
	image?: any;
};
export const ProductImageHolder: React.FC<ProductImageHolderProps> = ({
	image
}) => {
 const ProductImage = JSON.parse(image);

	return (
		<div key={ProductImage.id} className="w-full h-full flex items-center justify-center rounded-[0.5rem] overflow-hidden">
			<picture>
				<source media="(max-width: 767px)" srcSet={`/api/media?url=${ProductImage.src}`} />
				<source media="(min-width: 768px) and (max-width: 1024px)" srcSet={`/api/media?url=${ProductImage.src}`} />
				<img src={`/api/media?url=${ProductImage.src}`} alt="Product Image" />
			</picture>
		</div>
	)
}
