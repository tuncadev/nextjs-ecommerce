"use client";

import { useState } from "react";
import { ProductQuantity } from "@/app/components/products/ProductQuantity";
import { useCart } from "@/app/context/CartContext";
import { SuccessModal } from "@/app/components/modals/SuccessModal";
import Working from "@/app/components/actions/Working";
import { Variation } from "@/app/types/variations";
import { useFavorites } from "@/app/context/FavoritesContext";
import { Product } from "@/app/types/products";

type Props = {
	selectedVariation: Variation;
	product: Product;
	requiredAttributes?: string[];
	selectedAttributes?: Record<string, string>;
	openCartModal: boolean;
  setOpenCartModal?: (open: boolean) => void;
};

export const SingleProductActions = ({ selectedVariation, product, requiredAttributes, selectedAttributes, openCartModal, setOpenCartModal }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);
	const isAddDisabled = requiredAttributes?.some(attr => !selectedAttributes?.[attr]);

  const { addToCart } = useCart();
	const { handleFavoritesAction, isFavorite }= useFavorites();

	const handleFavorites = async () => {
		handleFavoritesAction(product);
	}
	

  const handleAddToCart = async () => {
    setCartLoading(true);

     addToCart({
			variationId: selectedVariation.wpId,
      productId: product.wpId,
      quantity,
      price: product.price,
    });
 
    setCartLoading(false);
    setOpenSuccessModal(true);
  };

  return cartLoading ? (
    <Working />
  ) : (
    <>
      <div className="space-y-4 flex items-center w-full max-w-[400px] justify-between py-5">
        <ProductQuantity
          min={1}
          max={99}
          quantity={quantity}
          onQuantityChange={setQuantity}
        />

        <div className="flex justify-between gap-4 !mt-0 sm:m-auto">
				<button
					type="button"
					title={isAddDisabled ? "Будь ласка, виберіть варіацію" : ""}
					onClick={handleAddToCart}
					disabled={isAddDisabled}
					className="disabled:opacity-75 w-full disabled:bg-gray-600 bg-[#DD2400] hover:bg-blue-700 rounded-[4px] text-white font-semibold px-1 py-1 sm:px-4 sm:py-2 ml-1 transition text-sm sm:text-normal"
				>
					Додати в кошик
				</button>

          <button
            type="button"
            onClick={handleFavorites}
            className={`${isFavorite(product.id) ? "bg-red-500 text-white border-red-500 " : "bg-white border-red-500 text-red-500 hover:bg-red-500 hover:text-white" } disabled:opacity-75 w-12 h-12 flex items-center justify-center border rounded-lg transition`}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z"
              />
            </svg>
          </button>
        </div>
      </div>

      <SuccessModal
				openSuccessModal={openSuccessModal}
				setOpenSuccessModal={setOpenSuccessModal}
				openCartModal={openCartModal || false}
				setOpenCartModal={setOpenCartModal}
        header="Успішно!"
        message="Товар додано до кошика"
      />
    </>
  );
};
