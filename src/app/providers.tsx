"use client";

import { AuthProvider } from "@/app/context/AuthProvider";
import { ProductsProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";
 
export function Providers({ children }: { children: React.ReactNode }) {
  return (
		<AuthProvider>
			<ProductsProvider>
				<CartProvider>
					{children}
				</CartProvider>
			</ProductsProvider>
		</AuthProvider>
	);
}
