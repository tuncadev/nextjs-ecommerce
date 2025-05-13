"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthProvider";
import { toast } from "react-hot-toast";

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
	CartLoading: boolean;
	CartInitialized: boolean;
	variationInCart: (variationId: number) => boolean;

};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { authHydrated } = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [CartLoading, setLoading] = useState<boolean>(true);
  const [CartInitialized, setCartInitialized] = useState(false);

  // Load cart when auth is ready
  useEffect(() => {
    if (!authHydrated) return;

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
        setCartInitialized(true);
      }
    };

    loadCart();
  }, [authHydrated]);

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
				toast.success("Додано до кошика");
				setCartItems(data.cartItems);
			}
		} catch (err) {
			console.error("Failed to refresh cart", err);
		} finally {
			setLoading(false);
			setCartInitialized(true);
		}
	};

  const removeFromCart = (variationId: number) => {
    const updated = cartItems.filter((i) => i.variationId !== variationId);
    setCartItems(updated);
    syncCart(updated);
  };

	const variationInCart = (variationId: number) => {
    const inCart = cartItems.some(item => item.variationId === variationId);
    return inCart;
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
        CartLoading,
        CartInitialized,
				refreshCart,
				variationInCart,
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
