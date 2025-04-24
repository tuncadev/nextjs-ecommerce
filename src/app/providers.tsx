"use client";

import { AuthProvider } from "@/app/context/AuthProvider";
import { ProductsProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
 
export function Providers({ children }: { children: React.ReactNode }) {
  return (
		<AuthProvider>
			<ProductsProvider>
				<CartProvider>
					<FavoritesProvider>
						{children}
					</FavoritesProvider>
				</CartProvider>
			</ProductsProvider>
		</AuthProvider>
	);
}
