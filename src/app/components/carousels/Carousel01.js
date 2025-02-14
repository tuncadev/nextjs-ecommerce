"use client";

import { Carousel } from "flowbite-react";
import { Slider2 } from "../sliders/Slider2";

export const Carousel01 = ({ categories, order }) => {
	return (
		<>
			<div className="pb-5 mb-4">
				<Carousel 
					className="carousel px-4" 
					indicators={false}
					slideInterval={5000}
				>
					{categories.map((category) => ( //  Fix map syntax
						<Slider2 key={category} categorySlug={category} />
					))}
				</Carousel>
			</div>
		</>
	);
};
