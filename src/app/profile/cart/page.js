"use client";
import { useWooCommerceCart } from "@/app/hooks/useWooCommerceCart";
import { useProducts } from "@/app/hooks/useProducts";
import { useEffect, useState } from "react";
import { CartItem } from "@/app/components/cart/CartItem";

import { useCartContext } from "@/app/context/CartContext";
import { Loading } from "@/app/components/Loading";
import { InfoBadge } from "@/app/components/badges/InfoBadge";
import { ProductQuantity } from "@/app/components/products/ProductQuantity";

export default function CartPage() {
    const { cart,updateCartItem, fetchCart, removeFromCart, loading, error } = useWooCommerceCart();
    const { getProductById } = useProducts();
    const [cartProducts, setCartProducts] = useState({}); // Store product details
		const { setCartItemsCount } = useCartContext();
		const [quantity, setQuantity] = useState(0);

		const { refreshCartAndUpdateCount } = useCartContext(); //  Use updated function

		const handleQuantityUpdate = async (id, itemKey, newQuantity) => {
				await updateCartItem(id, itemKey, newQuantity);
				await refreshCartAndUpdateCount(); //  Ensures cart count updates immediately
		};
    // Fetch product details after cart loads
		const itemKey = {};
		const productId = {};

    useEffect(() => {
        if (cart?.items?.length) {
            (async () => {
                const productsData = await Promise.all(
                    cart.items.map(async (item) => {
                        const product = await getProductById(item.id);
                        return { id: item.id, ...product };
                    })
                );
                // Convert array to object for easy lookup
                const productMap = Object.fromEntries(productsData.map(p => [p.id, p]));
								 
                setCartProducts(productMap);
            })();
        } else {
            setCartProducts({});
        }
    }, [cart]);

		const handleRemoveFromCart = async (itemKey) => {
			await removeFromCart(itemKey); // Remove item
			await refreshCartAndUpdateCount(); //  Ensures header updates instantly
	};
	

    if (loading) return <Loading text="cart items..." />;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (!cart || cart.items.length === 0) return <InfoBadge title="Ooops" text="You cart seems to be empty. Let's go shopping" />

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Кошик</h1>

            {/* Cart Items */}
            <div className="bg-white rounded-lg overflow-hidden flex gap-4 flex-col">
                {cart.items.map((item) => {
									const product = cartProducts[item.id]; // Get fetched product details
                    return (
											<CartItem key={item.id} product={product} item={item} handleRemoveFromCart={handleRemoveFromCart} handleQuantityUpdate={handleQuantityUpdate} />
                    );
                })}
					</div>

            {/* Cart Summary */}
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-lg font-semibold">
									Totals: {cart.totals.total_price / 100} ₴
								</p>
                <button className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-lg w-full hover:bg-blue-700">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}
