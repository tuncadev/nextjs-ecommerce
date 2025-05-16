"use client";
import { useAuth } from '@/app/context/AuthProvider';
import { useCart } from '@/app/context/CartContext';
import { useFavorites } from '@/app/context/FavoritesContext';
import { getProfileLink } from '@/app/utils/getProfileLink';
import { User } from '@prisma/client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaHouse, FaCartShopping, FaHeart, FaUserGear } from "react-icons/fa6";
import { TbCategory } from "react-icons/tb";



const MobileFooter = () => {
	const { user, authHydrated, authLoading} = useAuth();
	const {favorites }= useFavorites();
	const {cartItems, CartLoading, CartInitialized} = useCart();
	useEffect(()=> {
		setCartLength(cartItems.length);
		setFavLength(favorites.length);
	}, [cartItems, favorites])

	if(authLoading && !authHydrated || CartLoading || !CartInitialized) return null;
	const [cartLength, setCartLength] = useState(0);
	const [favLength, setFavLength] = useState(0);



	return (

			<div className="fixed z-50 bottom-0 w-full bg-gray-900 text-gray-50 items-center">
				<div className="flex flex-row text-2xl justify-between px-4 py-3">
					<Link href="/" className="flex flex-col items-center gap-y-1 ">
						<FaHouse className=' ' />
						<span className='text-xs'>Головна</span>
					</Link>
					<Link href="/shop" className="flex flex-col justify-center items-center gap-y-1 ">
						<div className="relative flex flex-col items-center  justify-center">
						<TbCategory className=' ' />
						<span className='text-xs'>Каталог</span>
						
						</div>
						
					</Link>
					{/**
					<Link href="/search" className="flex flex-col items-center gap-y-1"> 
						<FaMagnifyingGlass />
						<span className='text-xs'>Пошук</span>
					</Link>
					 */}
					<Link href={`${getProfileLink({ user: user as User, page: "cart" })}`} className="flex flex-col items-center gap-y-1">
						<div className="relative flex flex-col items-center  justify-center">
							<FaCartShopping className={`${cartLength > 0 ? "text-customGreen" : ""}`} />
							<span className='text-xs'>Кошик</span>
								<span className="text-white  absolute text-[10px] bg-customRed leading-none rounded-full px-2 py-1 group-hover:cursor-pointer bottom-3 right-0 group-hover:bg-white group-hover:text-red-600">
									{cartLength && (
										<span> {cartLength} </span>
									)}
							</span>
						</div>
					</Link>
					<Link href={`${getProfileLink({ user: user as User, page: "favorites" })}`} className="flex flex-col items-center gap-y-1">
						<div className="relative flex flex-col items-center  justify-center">
							<FaHeart className={`${favLength > 0 ? "text-customGreen" : ""}`} />
							<span className='text-xs'>Списки</span>
								<span className="text-white  absolute text-[10px] bg-customRed leading-none rounded-full px-2 py-1 group-hover:cursor-pointer bottom-3 right-0 group-hover:bg-white group-hover:text-red-600">
									{favLength && (
										<span> {favLength} </span>
									)}
							</span>
						</div>
					</Link>
					{user && (
					<Link href={`${getProfileLink({ user: user as User, page: "" })}`} className="flex flex-col items-center gap-y-1">
						<FaUserGear />
						<span className='text-xs'>Профіль</span>
					</Link>
				)}
				</div>
			</div>

	)
}

export default MobileFooter