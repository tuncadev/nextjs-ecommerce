import React from "react";
import { Carousel } from "flowbite-react";

type ProductImage = {
	id: number;
	src: string;
};

type ImageCarouselGalleryProps = {
	images: ProductImage[];
};

const ImageCarousel: React.FC<ImageCarouselGalleryProps> = ({ images }) => {
	if (!Array.isArray(images) || images.length === 0) return null;

	return (
		<Carousel className='carousel' slide={false} >
			{images.map((image) => (
				<div key={image.id} className="w-full h-full flex items-center justify-center">
					<picture>
						<source media="(max-width: 767px)" srcSet={`/api/media?url=${image.src}`} />
						<source media="(min-width: 768px) and (max-width: 1024px)" srcSet={`/api/media?url=${image.src}`} />
						<img src={`/api/media?url=${image.src}`} alt="Product" />
					</picture>
				</div>
			))}
		</Carousel>	
	);
};

export default ImageCarousel;
