"use client";

import Image from "next/image";
import Link from "next/link";
import getProductLink from "@/app/utils/getProductLink";
import { ProductQuantity } from "@/app/components/products/ProductQuantity";
import type { Product } from "@/app/types/products";
import { useProducts } from "@/app/context/ProductsContext";
import { useEffect, useMemo, useState } from "react";
import type { Variation } from "@/app/types/variations";

type CartItemType = {
	variationId: number;
  productId: number;
  quantity: number;
  price: number;
};

type CartItemProps = {
	
  product: Product | null;
  item: CartItemType;
  handleRemoveFromCart: (variationId: number) => void;
  handleQuantityUpdate: (variationId: number, quantity: number) => void;
};



export const CartItem: React.FC<CartItemProps> = ({
  product,
  item,
  handleRemoveFromCart,
  handleQuantityUpdate,
}) => {
  const total = (item.quantity * item.price).toFixed(2);
	const [itemVariation, setItemVariation] = useState<Variation | null>(null);

	const { getProductVariationById } = useProducts();

	useEffect(() => {
		if (item.variationId) {
			const variation = getProductVariationById(item.variationId);
			if (variation) setItemVariation(variation);
		}
	}, [item.variationId]);

	const parsedAttributes = useMemo(() => {
		if (!itemVariation?.attributes) return [];
		try {
			const attrs = typeof itemVariation.attributes === "string"
				? JSON.parse(itemVariation.attributes)
				: itemVariation.attributes;
			return Array.isArray(attrs) ? attrs : [];
		} catch {
			return [];
		}
	}, [itemVariation]);

	const variationImage = useMemo(() => {
		try {
			return itemVariation?.image ? JSON.parse(itemVariation.image) : null;
		} catch {
			return null;
		}
	}, [itemVariation]);


  return (
    <div className="flex flex-col md:flex-row items-center relative shadow-lg border border-gray-200 rounded-lg p-4 bg-white dark:bg-gray-800 mb-6">
      {/* Product Image */}
      <div className="w-full md:w-32 flex-shrink-0">
        <Image
          src={variationImage?.src ? `/api/media?url=${variationImage?.src}` : "/images/default-product.jpg"}
          width={120}
          height={120}
          alt={product?.name || "Product"}
          className="rounded-md object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-grow w-full md:ml-4 md:w-auto">
        <Link
          href={getProductLink(product?.wpId, product?.slug)}
          className="text-lg md:text-xl font-semibold text-blue-600 hover:underline"
        >
          {product?.name || "Товар"}
        </Link>
				{/**
        <div className="text-gray-500 text-sm mt-1">
          <span className="font-semibold">SKU:</span> {product?.sku || "-"}
        </div>
				 */}
				 {/** Attributes */}
				{parsedAttributes.length > 0 && (
					<div className="text-gray-500 text-sm mt-1">
						{parsedAttributes.map((attr) => (
							<div key={attr.id} className="">
								<span className="font-semibold">{attr.name} :</span>	
								<span className="pl-2">{ attr.option}</span>
							</div>
						))}
					</div>
				)}	
        {/* Quantity + Price */}
        <div className="flex flex-col md:flex-row md:items-center justify-start mt-3 gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Кількість:</span>
            <ProductQuantity
              min={1}
              max={99}
              quantity={item.quantity}
              onQuantityChange={(newQty) => handleQuantityUpdate(item.variationId, newQty)}
            />
          </div>
       </div>
      </div>

      {/* Remove & Total */}
      <div className="absolute top-3 right-3 sm:relative flex flex-col md:flex-row items-end md:items-center justify-end md:justify-between w-full md:w-auto md:ml-4 mt-3 md:mt-0">
        <div className="text-lg md:text-xl font-bold text-green-600">{total} ₴</div>
        <button
          onClick={() => handleRemoveFromCart(item.variationId)}
          className="text-customRed hover:text-red-700 transition-all text-2xl ml-4"
          title="Видалити товар"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};
