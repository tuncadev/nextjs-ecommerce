import { useState, useEffect, use } from "react";

const STORE_API_URL = process.env.WC_STORE_API_URL;
const CONSUMER_KEY = process.env.WP_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.WP_CONSUMER_SECRET;

// Encode API keys for Basic Authentication
const encodedAuth = btoa(`${CONSUMER_KEY}:${CONSUMER_SECRET}`);

export const useWooCommerceCart = () => {
	const [cart, setCart] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);
	const [nonce, setNonce] = useState(null);

	//  Fetch Nonce
	async function fetchNonce() {
    try {
			const response = await fetch(`${STORE_API_URL}/cart`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Basic ${encodedAuth}`,
				},
			});
			// Attempt to read it under the expected name:
 			const nonce = response.headers.get("Nonce");
				
        return nonce || null; //  Now retrieved from JSON instead of headers
    } catch (error) {
        console.error("❌ Error Fetching WooCommerce Nonce:", error);
        return null;
    }
}



	//  Add to Cart
	const addToCart = async (productId, quantity = 1) => {
		setLoading(true);
		setError(null);
		setSuccess(false);
	
		try {
			// ❗ Need "await" here
			const nonce = await fetchNonce();  

			const url = `${STORE_API_URL}/cart/add-item?id=${productId}&quantity=${quantity}`;
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Nonce": nonce, 
					"Authorization": `Basic ${encodedAuth}`,
				},
			});
	
			// Then handle the response, etc.
			const cartData = await response.json();
			setCart(cartData);
			setSuccess(true);
		} catch (error) {
			console.error("Add to Cart Error:", error);
			setError(error.message || "Something went wrong.");
		} finally {

			setLoading(false);
		}
	};
	

	//  Fetch Cart Data
	const fetchCart = async () => {
		setLoading(true);
		setError(null);
		const nonce = await fetchNonce();  
		try {
			const response = await fetch(`${STORE_API_URL}/cart`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Basic ${encodedAuth}`,
				},
				//credentials: "include",
			});

			if (!response.ok) throw new Error("Failed to fetch cart.");
			
			const data = await response.json();

			setCart(data);
		} catch (err) {
			setError(err.message || "Something went wrong.");
		} finally {
			setLoading(false);
		}
	};


	//  Update cart item quantity
const updateCartItem = async (id, itemKey, newQuantity) => {
	setLoading(true);
	const nonce = await fetchNonce();  
	try {
			// First, remove the item from the cart
			const removeResponse = await fetch(`${STORE_API_URL}/cart/remove-item?key=${itemKey}`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Nonce": nonce, 
						"Authorization": `Basic ${encodedAuth}`,
					},
			});

			if (!removeResponse.ok) throw new Error("Failed to remove item before update.");

			// Then, re-add the item with the new quantity
			const addResponse = await fetch(`${STORE_API_URL}/cart/add-item?id=${id}&quantity=${newQuantity}`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Nonce": nonce, 
						"Authorization": `Basic ${encodedAuth}`,
					},
			});

			if (!addResponse.ok) throw new Error("Failed to update quantity.");

			await fetchCart(); // Refresh cart
	} catch (err) {
			setError(err.message);
	} finally {
			setLoading(false);
	}
};

	//  Remove Item from Cart
	const removeFromCart = async (cartKey) => {
		setLoading(true);

		const nonce = await fetchNonce();  
		try {
			const response = await fetch(`${STORE_API_URL}/cart/remove-item?key=${cartKey}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Nonce": nonce, 
					"Authorization": `Basic ${encodedAuth}`,
				},
			});

			if (!response.ok) throw new Error("Failed to remove item.");

			await fetchCart(); // Refresh cart after removal
		} catch (err) {
			setError(err.message);
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
