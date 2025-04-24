"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthProvider";

type CartItem = {
	variationId: number,
	productId: number;
	quantity: number;
	price: number;
};

type CartContextType = {
	cartItems: CartItem[];
	addToCart: (item: CartItem) => void;
	removeFromCart: (variationId: number) => void;
	updateQuantity: (variationId: number, quantity: number) => void;
	clearCart: () => void;
	refreshCart: () => Promise<void>;
	loading: boolean;
	initialized: boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, hydrated } = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [initialized, setInitialized] = useState(false);

  // Load cart when auth is ready
  useEffect(() => {
    if (!hydrated) return;

    const loadCart = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/cart/load");
        const data = await res.json();
        if (data?.status === "success") {
          setCartItems(data.cartItems);
        }
      } catch (err) {
        console.error("Failed to load cart", err);
      } finally {
        setLoading(false);
        setInitialized(true);
      }
    };

    loadCart();
  }, [hydrated]);

  const syncCart = async (items: CartItem[]) => {
    try {
      await fetch("/api/cart/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems: items }),
      });
    } catch (err) {
      console.error("Failed to sync cart", err);
    }
  };

  const addToCart = (item: CartItem) => {
    const updated = [...cartItems];
    const index = updated.findIndex((i) => i.variationId === item.variationId);
    if (index > -1) updated[index].quantity += item.quantity;
    else updated.push(item);
    setCartItems(updated);
    syncCart(updated);
  };
	const refreshCart = async () => {
		setLoading(true);
		try {
			const res = await fetch("/api/cart/load");
			const data = await res.json();
			if (data?.status === "success") {
				setCartItems(data.cartItems);
			}
		} catch (err) {
			console.error("Failed to refresh cart", err);
		} finally {
			setLoading(false);
			setInitialized(true);
		}
	};
  const removeFromCart = (variationId: number) => {
    const updated = cartItems.filter((i) => i.variationId !== variationId);
    setCartItems(updated);
    syncCart(updated);
  };

  const updateQuantity = (variationId: number, quantity: number) => {
    const updated = cartItems.map((i) =>
      i.variationId === variationId ? { ...i, quantity } : i
    );
    setCartItems(updated);
    syncCart(updated);
  };

  const clearCart = () => {
    setCartItems([]);
    syncCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        loading,
        initialized,
				refreshCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
