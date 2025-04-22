
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Category } from "@/app/types/categories";

type CategoryProductCard01Props = {
	category: Category;
}

const CategoryProductCard01: React.FC<CategoryProductCard01Props> = ({ category }) => {
	const imageData = category?.image ? JSON.parse(category.image) : null;
	const imageSrc = imageData?.src || "/images/default-category.jpg";
  const imageLoader = ({ src, width, quality }: {src: string, width?: number, quality?: number}) => {
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
							src={`/api/media?url=${imageSrc}`}
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


export default CategoryProductCard01;