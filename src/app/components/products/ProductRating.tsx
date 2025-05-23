import React from 'react'
 
type ProductRatingProps = {
	average:  number;
}

const ProductRating = ({average}: ProductRatingProps) => {
	const rounded = Math.round(average || 0);

	return (
		<div className="mb-2 sm:mb-3 mt-1 sm:mt-2.5 flex items-center">
			{[...Array(5)].map((_, index) => (
				<svg
					key={index}
					className={`h-3 w-3 sm:h-5 sm:w-5 ${
						index < rounded ? "text-yellow-300" : "text-gray-300"
					}`}
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
			))}
			<span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800">
				{average || "0"}
			</span>
		</div>
	)
}
export default ProductRating