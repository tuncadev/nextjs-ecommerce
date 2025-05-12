import React from "react";
import { Carousel } from "flowbite-react";
import { ProductImageHolder } from "./ProductImageHolder";

type ProductImage = {
	id: number;
	src: string;
	alt: string;
	productName: string;
};

type ImageCarouselGalleryProps = {
	images: ProductImage[];
};

const ImageCarousel: React.FC<ImageCarouselGalleryProps> = ({ images }) => {

	if (!Array.isArray(images) || images.length === 0) return null;

	return (
		<Carousel className='carousel max-w-[90%] mx-auto' slide={false} >
			{images.map((image) => (
				<ProductImageHolder image={image} />
			))}
		</Carousel>	
	);
};

export default ImageCarousel;
