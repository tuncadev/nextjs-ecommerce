"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { useProducts } from "../context/ProductsContext";
import { CartItem } from "@/app/components/cart/CartItem";
import { Loading } from "@/app/components/actions/Loading";
import { InfoBadge } from "@/app/components/badges/InfoBadge";
import { Product } from "@/app/types/products";
import { Variation } from "@/app/types/variations";
import Working from "../components/actions/Working";
import { PopularCategories } from "../components/sections/PopularCategories";

type EnrichedProduct = Product & { quantity: number; price: number };

export default function CartPage() {
	const { cartItems, updateQuantity, removeFromCart, loading, initialized } = useCart();
	const { getProductById, getProductVariationById } = useProducts();

	const [cartProducts, setCartProducts] = useState<
			Record<number, { product: EnrichedProduct; variation?: Variation }>
		>({});
	const [hydrated, setHydrated] = useState(false);
 
	useEffect(() => {
		if (!cartItems.length) {
			setCartProducts({});
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
			setHydrated(true);
		};
	
		enrich();
	}, [cartItems]);
	

	const handleQuantityUpdate = async (productId: number, quantity: number) => {
		updateQuantity(productId, quantity);
	};

	const handleRemoveFromCart = async (variationId: number) => {
		removeFromCart(variationId);
	};

 
	if (!hydrated || !initialized) return <Working text="Завантаження кошика..." />;

	if (!cartItems.length) {
		return (
			<>
				<section className="container">
					<InfoBadge title="Упс!" text="Ваш кошик порожній. Перейдіть до покупок!" />
				</section>
				<section className="container">
					<PopularCategories />
				</section>
			</>
		);
	}
	if (!initialized || loading) return null;
	const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

	return (
		<div className="container mx-auto px-4 py-8">
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

			<div className="mt-6 p-4 bg-gray-100 rounded-lg">
				<p className="text-lg font-semibold">Загалом: {total.toFixed(2)} ₴</p>
				<button className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-lg w-full hover:bg-blue-700">
					Перейти до оплати
				</button>
			</div>
		</div>
	);
}
