"use client";
import Image from "next/image";
import Link from "next/link";
import { getProductLink } from "@/app/utils/getProductLink";
import { ProductQuantity } from "@/app/components/products/ProductQuantity";

export const CartItem = ({product, item, handleRemoveFromCart, handleQuantityUpdate}) => {
	return (
		<div key={item.key} className="flex flex-col md:flex-row items-center relative shadow-lg rounded-lg p-4 bg-white dark:bg-gray-800 mb-6">
			{/* Product Image  */}
			<div className="w-full md:w-32 flex-shrink-0">
				<Image
					src={product?.images?.[0]?.src || item.images?.[0]?.src || "/images/default-product.jpg"}
					width={120}
					height={120}
					alt={item.name}
					className="rounded-md object-cover"
				/>
			</div>
			{/* Product Details */}
			<div className="flex flex-col flex-grow w-full md:ml-4 md:w-auto">
				{/* Product Name & SKU */}
				<Link href={getProductLink(product)} className="text-lg md:text-xl font-semibold text-blue-600 hover:underline">
						{item.name}
				</Link>
				{product && (
					<div className="text-gray-500 text-sm mt-1">
						<span className="font-semibold">SKU:</span> {product.sku}
					</div>
				)}

				{/* Quantity Selector & Price */}
				<div className="flex flex-col md:flex-row md:items-center justify-start mt-3 gap-4">
					{/* Quantity */}
					<div className="flex items-center space-x-2">
						<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Кількість:</span>
						<ProductQuantity 
							min={1} 
							max={99} 
							quantity={item.quantity} 
							onQuantityChange={(newQty) => handleQuantityUpdate(product.id, item.key, newQty)}
						/>
					</div>

					{/* Price */}
					<p className="text-lg font-semibold text-gray-500 dark:text-white">
						{(item.prices.price / 100)} ₴
					</p>
				</div>
			</div>
			<div className="flex flex-col md:flex-row items-end md:items-center justify-end md:justify-between w-full md:w-auto md:ml-4 mt-3 md:mt-0">
				<div className="text-lg md:text-xl font-bold text-green-600">
					{(item.prices.price * item.quantity) / 100} ₴
				</div>
				{/* Remove Button */}
				<button
					onClick={() => handleRemoveFromCart(item.key, item.quantity)}
					className="text-red-500 hover:text-red-700 transition-all text-2xl ml-4"
					title="Remove Item"
				>
					<i className="fa-solid fa-trash"></i>
				</button>
			</div>
		</div>

	)
}
