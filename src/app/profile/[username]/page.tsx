"use client"
import Working from '@/app/components/actions/Working';
import { useAuth } from '@/app/context/AuthProvider';
import { useCart } from '@/app/context/CartContext';

import React from 'react'
 
const page = () => {
	const { user, authHydrated, authLoading } = useAuth();
	const {CartLoading, CartInitialized}	= useCart();
	if (!authHydrated || authLoading || !CartInitialized || CartLoading) return <Working />;

	return (
		<div>Profile Page {user?.username}</div>
	)
}

export default page