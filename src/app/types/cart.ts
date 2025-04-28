export type CartItem = {
	variationId?: number,
	productId: number;
	quantity: number;
	price: number;
};

export type CartContextType = {
	cartItems: CartItem[];
	addToCart: (item: CartItem) => void;
	removeFromCart: (variationId: number) => void;
	updateQuantity: (variationId: number, quantity: number) => void;
	clearCart: () => void;
	refreshCart: () => Promise<void>;
	CartLoading: boolean;
	CartInitialized: boolean;
};
