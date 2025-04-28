"use client"
import { useAuth } from '@/app/context/AuthProvider';
import React from 'react'
 


const page = () => {
	const { user } = useAuth();
	return (
		<div>Profile Page {user?.username}</div>
	)
}

export default page