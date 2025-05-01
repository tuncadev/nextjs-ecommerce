import React from 'react';

type ProductTitleSectionProps = {
  productName?: string;
  productSku?: string;
  productUrl: string;
};
const ProductTitleSection: React.FC<ProductTitleSectionProps> = ({ productName, productSku, productUrl }) => {
	return (
		<div className='flex lg:flex-row flex-col md:justify-between md:pl-4  lg:items-center py-6 border-b border-b-gray-200'>
			<div className="text-center sm:text-left">
				<h1 className='text-xl font-semibold text-center sm:text-left'>{productName}</h1>
				<span className='text-xs text-center sm:text-left'>
					SKU: {productSku}
				</span>
			</div>

			<div className="flex justify-center md:justify-end  items-center space-x-4 mt-4 sm:mt-0">
				<a href={productUrl} className="flex items-center text-gray-100 w-8 h-8 text-center justify-center rounded bg-blue-600 hover:text-blue-800 shadow-lg">
					<i className="fab fa-facebook-f text-lg"></i>
				</a>
				<a href={productUrl} className="flex items-center text-gray-100 w-8 h-8 text-center justify-center rounded bg-pink-500 hover:text-pink-700 shadow-lg">
					<i className="fab fa-instagram text-lg"></i>
				</a>
				<a href={productUrl} className="flex items-center text-gray-100 w-8 h-8 text-center justify-center rounded bg-sky-500 hover:text-sky-700 shadow-lg">
					<i className="fab fa-twitter text-lg"></i>
				</a>
				<a href={productUrl} className="flex items-center text-gray-100 w-8 h-8 text-center justify-center rounded bg-red-600 hover:text-red-800 shadow-lg">
					<i className="fab fa-pinterest text-lg"></i>
				</a>
				<a href={productUrl} className="flex items-center text-gray-100 w-8 h-8 text-center justify-center rounded bg-customRed hover:text-red-700 shadow-lg">
					<i className="fab fa-google-plus-g text-lg"></i>
				</a>
			</div>
		</div>
	);
};

export default ProductTitleSection;
