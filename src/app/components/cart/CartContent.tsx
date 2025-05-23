"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { useProducts } from "@/app/context/ProductsContext";
import { CartItem } from "@/app/components/cart/CartItem";
import { InfoBadge } from "@/app/components/badges/InfoBadge";
import { Product } from "@/app/types/products";
import { Variation } from "@/app/types/variations";
import Working from "@/app/components/actions/Working";
import { PopularCategories } from "@/app/components/sections/PopularCategories";
import { useAuth } from "@/app/context/AuthProvider";
//import { useAuth } from "@/app/context/AuthProvider";

type EnrichedProduct = Product & { quantity: number; price: number };

const CartContent = () => {
	{/** const { user, authHydrated, authLoading } = useAuth(); */}
	const { cartItems, updateQuantity, removeFromCart, CartLoading, CartInitialized } = useCart();
	const { getProductById, products } = useProducts();
	const { authHydrated, authLoading } = useAuth();
	const [cartProducts, setCartProducts] = useState<
			Record<number, { product: EnrichedProduct; variation?: Variation }>
		>({});
	 

	useEffect(() => {
		if (!cartItems.length) {
			setCartProducts({});
			return;
		}
	
		const enrich = () => {
			const enriched: Record<number, { product: EnrichedProduct; variation?: Variation }> = {};
	
			for (const item of cartItems) {
				const product = getProductById(item.productId);
				if (product) {
					enriched[item.productId] = {
						product: {
							...product,
							quantity: item.quantity,
							price: item.price,
						},
					};
				}
			}
	
			setCartProducts(enriched);
		};
	
		enrich();
	}, [cartItems, CartInitialized, authHydrated, products]);
	
	

	const handleQuantityUpdate = async (productId: number, quantity: number) => {
		updateQuantity(productId, quantity);
	};

	const handleRemoveFromCart = async (variationId: number) => {
		removeFromCart(variationId);
	};


 
	if (!authHydrated || authLoading || !CartInitialized || CartLoading) return <Working text="Завантаження кошика..." />;

	if (!cartItems.length) {
		return (
			<>
				<section>
					<InfoBadge title="Упс!" text="Ваш кошик порожній. Перейдіть до покупок!" />
				</section>
				<section>
					<PopularCategories columns="2" />
				</section>
			</>
		);
	}
	
	const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

	return (
		<div className="page_container mx-auto px-4 py-8">
			<h1 className="text-2xl font-bold mb-6">Кошик</h1>

			<div className="bg-white rounded-lg overflow-hidden flex gap-4 flex-col">
			{cartItems.map((item) => {
				const data = cartProducts[item.productId];
				
				if (!data) return null;
				return (
					<CartItem
						key={item.variationId}
						product={data.product}
						item={item}
						handleQuantityUpdate={handleQuantityUpdate}
						handleRemoveFromCart={handleRemoveFromCart}
					/>
				);
			})}
			</div>

			<div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md border border-gray-200 hover:shadow-lg">
				<p className="text-md font-semibold">Загалом: {total.toFixed(2)} ₴</p>
				<button className="bg-customGreen text-primary font-semibold px-6 py-2 mt-4 rounded-lg w-full hover:bg-customRed hover:text-gray-100">
					Перейти до оплати
				</button>
			</div>
		</div>
	);
}

export default CartContent



