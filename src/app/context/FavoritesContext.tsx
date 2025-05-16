"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { Product } from "@/app/types/products";
import { Variation } from "@/app/types/variations";
import Link from "next/link";
import toast from "react-hot-toast";


type Favorite = {
  id: number;
  productId: number;
	variationId?: number;
  product: Product;
	variation: Variation;
};

type FavoritesContextType = {
  favorites: Favorite[];
  loading: boolean;
  isFavorite: (productId: number, variationId?: number) => boolean;
  toggleFavorite: (product: Product) => void;
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: number) => void;
	handleFavoritesAction: (product: Product, variation?: Variation) => void;
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
				console.log("favorites data:", data.favorites)
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
		(productId: number, variationId?: number) => {
			return favorites.some(
				(f) => f.productId === productId && f.variationId === (variationId ?? null)
			);
		},
		[favorites]
	);
	
	
  const addToFavorites = async (product: Product, variation?: Variation) => {
		try {
			const res = await fetch("/api/favorites/update", {
				method: "POST",
				body: JSON.stringify({ productId: product.id, variationId: variation?.id }),
				headers: { "Content-Type": "application/json" },
			});
	
			if (res.ok) {
				const data = await res.json();
				setFavorites((prev) => [...prev, data.favorite]);

				toast.success(
					<span className="text-sm">
						Додано до обраного.{" "}
						<Link href="/favorites" className="underline text-blue-600 ml-1">Перейти</Link>
					</span>
				);

				
			}
		} catch (e) {
			console.error("Failed to add to favorites", e);
		}
	};
	

	const handleFavoritesAction = async (product: Product, variation?: Variation) => {
		const isFav = isFavorite(product.id, variation?.id);
		isFav
			? await removeFromFavorites(product.id, variation?.id)
			: await addToFavorites(product, variation);
	};
	

  const removeFromFavorites = async (productId: number, variationId?: number) => {
		try {
			const url = `/api/favorites/update?productId=${productId}${
				variationId ? `&variationId=${variationId}` : ""
			}`;
	
			const res = await fetch(url, { method: "DELETE" });
	
			if (res.ok) {
				setFavorites((prev) =>
					prev.filter(
						(f) => !(f.productId === productId && f.variationId === (variationId ?? null))
					)
				);
				toast.success(
					<span className="text-sm">
						Видалено з обраного
					</span>
					
				);
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
