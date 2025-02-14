
import { useState, useEffect } from "react";
import { useWooCommerceCart } from "@/app/hooks/useWooCommerceCart"; // Import hook
import Link from "next/link";
import { ProductQuantity } from "./ProductQuantity";
import { useCartContext } from "@/app/context/CartContext";
import { SuccessModal } from "../modals/SuccessModal";
import { Button } from "flowbite-react";
import { Working } from "../actions/Working";


export const SingleProductActions = ({onAddToCart, onAddToFavorites, product }) => {

		const [openModal, setOpenModal] = useState(false);
		const [ cartLoading, setCartLoading ] = useState(false);
		const { cart, addToCart, loading, error, success } = useWooCommerceCart();
		const [quantity, setQuantity] = useState(1);
		const { setCartItemsCount } = useCartContext();
		
			// Callback from ProductQuantity
		const handleQuantityChange = (newQty) => {
			setQuantity(newQty);
		};

 
		
		const handleAddToCart = async () => {
			setCartLoading(true);
			await addToCart(product.id, quantity);
			// Check if product already exists in cart
			setCartItemsCount(prev => prev + quantity); // Only increase for new items
			setCartLoading(false);
			setOpenModal(true);

		};
		
    return (

			cartLoading ? (
					<Working />
				) : (
					<>
					<div className="space-y-4 flex items-center w-full max-w-[400px]  justify-between py-5">
					{/* Quantity Selector */}
					<ProductQuantity
						min={1}
						max={99}
						quantity={quantity}          // Pass current quantity
						onQuantityChange={handleQuantityChange} // Pass callback
					/>

					{/* Buttons */}
					<div className="flex justify-between gap-4 !mt-0 sm:m-auto">
						{/* Add to Cart */}
						<button
							type="button"
							onClick={() => handleAddToCart(product.id, quantity)}
							className="w-full bg-[#DD2400] hover:bg-blue-700 text-white font-semibold px-1 py-1 sm:px-4 sm:py-2 ml-1 transition text-sm sm:text-normal"
						>
							Додати в кошик
						</button>
						{/* Add to Favorites */}
						<button
							type="button"
							onClick={onAddToFavorites}
							className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 transition"
						>
							<svg className="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" />
							</svg>
						</button>
					</div>
        </div>
				<SuccessModal openModal={openModal} setOpenModal={setOpenModal} header="Success!" message="Product Succesfully added to cart" />
				</>
				)
        


    );
};
