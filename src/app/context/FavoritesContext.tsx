"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { Product } from "@/app/types/products";

type Favorite = {
  id: number;
  productId: number;
  product: Product;
};

type FavoritesContextType = {
  favorites: Favorite[];
  loading: boolean;
  isFavorite: (productId: number) => boolean;
  toggleFavorite: (product: Product) => void;
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: number) => void;
	handleFavoritesAction: (product: Product) => void;
	hasFavorites: boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const res = await fetch("/api/favorites/load");
        const data = await res.json();
        setFavorites(data.favorites || []);
      } catch (e) {
        console.error("Failed to load favorites", e);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, []);

  const isFavorite = useCallback(
    (productId: number) => favorites.some((f) => f.productId === productId),
    [favorites]
  );

  const addToFavorites = async (product: Product) => {
    try {
      const res = await fetch("/api/favorites/update", {
        method: "POST",
        body: JSON.stringify({ productId: product.id }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setFavorites((prev) => [...prev, { id: Date.now(), productId: product.id, product }]);
      }
    } catch (e) {
      console.error("Failed to add to favorites", e);
    }
  };

	const handleFavoritesAction = async (product: Product) => {
    if (isFavorite(product.id)) {
      await removeFromFavorites(product.id);
    } else {
      await addToFavorites(product);
    }
  };

  const removeFromFavorites = async (productId: number) => {
    try {
      const res = await fetch(`/api/favorites/update?productId=${productId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setFavorites((prev) => prev.filter((f) => f.productId !== productId));
      }
    } catch (e) {
      console.error("Failed to remove from favorites", e);
    }
  };

  const toggleFavorite = (product: Product) => {
    isFavorite(product.id) ? removeFromFavorites(product.id) : addToFavorites(product);
  };

  return (
    <FavoritesContext.Provider
      value={{ 
				favorites, 
				loading, 
				isFavorite,
				toggleFavorite, 
				addToFavorites, 
				removeFromFavorites, 
				handleFavoritesAction,  
				hasFavorites: favorites.length > 0, 
			}}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
