import { useState, useEffect, use } from "react";

const STORE_API_URL = process.env.WC_STORE_API_URL;
 

// Encode API keys for Basic Authentication
 

export const useWooCommerceCart = () => {
	const [cart, setCart] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);


	//  Fetch Nonce
	async function fetchNonce() {
		try {
			const nonceResponse = await fetch(`${STORE_API_URL}/cart`, {
				method: "GET",
				headers: {
						"Content-Type": "application/json",
				Authorization: `Basic ${encodedAuth}`,	
				},
				
		});

		if (!nonceResponse.ok) {
				return new Response(JSON.stringify({ message: "Failed to fetch nonce" }), {
						status: nonceResponse.status,
						headers: { "Content-Type": "application/json" },
				});
		}

		// Extract the nonce from the response headers
		const nonce = nonceResponse.headers.get("nonce") || null;
				return nonce || null;
		} catch (error) {
				console.error("Error Fetching WooCommerce Nonce:", error);
				return null;
		}
	}



	// Add to Cart (now using internal API)
	const addToCart = async (productId, quantity = 1) => {
		setLoading(true);
		setError(null);
		setSuccess(false);

		try {
			const response = await fetch("/api/wc/cart/add", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ productId, quantity }),
			});

			if (!response.ok) throw new Error("Failed to add item.");

			const cartData = await response.json();
			setCart(cartData);
			setSuccess(true);
		} catch (error) {
			setError(error.message || "Something went wrong.");
		} finally {
			setLoading(false);
		}
	};
	

	// Fetch Cart Data from Internal API
	const fetchCart = async () => {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch("/api/wc/cart"); // 🔹 Using internal API
			if (!response.ok) throw new Error("Failed to fetch cart.");

			const data = await response.json();
			setCart(data);
		} catch (err) {
			setError(err.message || "Something went wrong.");
		} finally {
			setLoading(false);
		}
	};

	// Update cart item (now using internal API)
	const updateCartItem = async (productId, itemKey, newQuantity) => {
		setLoading(true);
		setError(null);

		try {
				const response = await fetch("/api/wc/cart/update", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ productId, itemKey, newQuantity }),
				});

				if (!response.ok) throw new Error("Failed to update quantity.");

				const cartData = await response.json();
				setCart(cartData); // Update cart state
		} catch (err) {
				setError(err.message || "Something went wrong.");
		} finally {
				setLoading(false);
		}
	};

	// Remove from Cart (now using internal API)
	const removeFromCart = async (cartKey) => {
		setLoading(true);
		setError(null);

		try {
				const response = await fetch("/api/wc/cart/remove", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ cartKey }),
				});

				if (!response.ok) throw new Error("Failed to remove item.");

				const cartData = await response.json();
				setCart(cartData); // Update cart state
		} catch (err) {
				setError(err.message || "Something went wrong.");
		} finally {
				setLoading(false);
		}
	};

	// Auto-fetch cart on component mount
	useEffect(() => {
		fetchCart();
	}, []);

	return { 
		addToCart, 
		fetchCart,
		removeFromCart,
		updateCartItem,
		loading, 
		error, 
		success,
		cart
	};
};
