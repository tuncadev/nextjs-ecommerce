import React from 'react'
type ProductImageHolderProps = {
	maxSize?: string;
	image?: any;
};
export const ProductImageHolder: React.FC<ProductImageHolderProps> = ({
	image, maxSize
}) => {
 

	let ProductImage;

	try {
		ProductImage = typeof image === "string" ? JSON.parse(image) : image;
	} catch (e) {
		ProductImage = image;
	}

 const imageMaxSize = `max-w-[${maxSize}]` || "max-w-auto"
	return (
		<div key={ProductImage.id} className={`${imageMaxSize} h-full flex items-center justify-center rounded-[0.5rem] overflow-hidden`}>
			<picture className=''>
				<source media="(max-width: 767px)" srcSet={`/api/media?url=${ProductImage.src}`} />
				<source media="(min-width: 768px) and (max-width: 1024px)" srcSet={`/api/media?url=${ProductImage.src}`} />
				<img src={`/api/media?url=${ProductImage.src}`} alt="Product Image" />
			</picture>
		</div>
	)
}
