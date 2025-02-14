"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useWooCommerceCart } from "../hooks/useWooCommerceCart"; // Import WooCommerce cart hook

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { cart, fetchCart } = useWooCommerceCart();
    const [cartItemsCount, setCartItemsCount] = useState(0);

    useEffect(() => {
        if (cart?.items?.length) {
            const totalQuantity = cart.items.reduce((sum, item) => sum + item.quantity, 0);
            setCartItemsCount(totalQuantity);
        } else {
            setCartItemsCount(0);
        }
    }, [cart]); //  Reacts immediately when cart updates

    //  Ensure the cart count updates immediately after fetchCart()
    const refreshCartAndUpdateCount = async () => {
        await fetchCart(); 
        if (cart?.items?.length) {
            const totalQuantity = cart.items.reduce((sum, item) => sum + item.quantity, 0);
            setCartItemsCount(totalQuantity);
        } else {
            setCartItemsCount(0);
        }
    };

    return (
        <CartContext.Provider value={{ cartItemsCount, setCartItemsCount, refreshCartAndUpdateCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);
