"use client";

import React from 'react'
import Link from 'next/link';
import { useAuth } from "@/app/context/AuthProvider";
import { useCart } from "@/app/context/CartContext";
import {getProfileLink} from '@/app/utils/getProfileLink';
import { User } from '@prisma/client';


const Cart = () => {
 	const { user, authLoading, authHydrated } = useAuth();
	
	const {cartItems} = useCart();
  return (
    <Link href={`${getProfileLink({ user: user as User, page: "cart" })}`}>
      <div className={`${cartItems.length > 0 ? "text-customGreen " : "text-gray-50 " } relative group`}>
        <i className="fa-solid fa-bag-shopping text-xl sm:text-3xl group-hover:text-customRed"></i>
        {authHydrated && !authLoading && (
          <span className="absolute text-white text-[10px] bg-customRed leading-none rounded-full px-2 py-1 bottom-0 -right-3 group-hover:bg-white group-hover:text-red-600">
            {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </div>
    </Link>
  )
}

 
export default Cart;


