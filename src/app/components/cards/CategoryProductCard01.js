import React from "react";
import Image from "next/image";
import Link from "next/link";

export const CategoryProductCard01 = ({ category }) => {
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
		<>
			<Link href={`/${category.slug}/${category.id}`}>
				<div className="p-4 border border-gray-300 text-center flex flex-col justify-between h-full min-h-[180px]">
					{/* Image Container */}
					<div className="w-full lg:h-[180px] flex justify-center items-center">
						<Image
							loader={imageLoader}
							src={category.image?.src}
							width={143}
							height={96}
							alt={category.name}
							loading="lazy"
							className="object-contain h-full"
						/>
					</div>

					{/* Category Name */}
					<h3 className="text-xs mt-4 flex-grow flex items-center justify-center">
						{category.name} ({category.count})
					</h3>
				</div>
			</Link>
	
	
	</>
  );
};


