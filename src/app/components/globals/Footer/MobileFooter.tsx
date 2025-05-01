"use client";
import { useAuth } from '@/app/context/AuthProvider';
import { getProfileLink } from '@/app/utils/getProfileLink';
import { User } from '@prisma/client';
import Link from 'next/link';
import React from 'react'
import { FaHouse, FaCartShopping, FaHeart, FaUserGear } from "react-icons/fa6";
import { TbCategory } from "react-icons/tb";



const MobileFooter = () => {
	const { user, authHydrated, authLoading} = useAuth();
	if(authLoading && !authHydrated) return null;
	return (

			<div className="fixed  bottom-0 w-full bg-gray-900 text-gray-50 items-center">
				<div className="flex flex-row text-2xl justify-between px-4 py-3">
					<Link href="/" className="flex flex-col items-center gap-y-1 ">
						<FaHouse className=' ' />
						<span className='text-xs'>Головна</span>
					</Link>
					<Link href="/shop" className="flex flex-col items-center gap-y-1 ">
						<TbCategory className=' ' />
						<span className='text-xs'>Каталог</span>
					</Link>
					{/**
					<Link href="/search" className="flex flex-col items-center gap-y-1"> 
						<FaMagnifyingGlass />
						<span className='text-xs'>Пошук</span>
					</Link>
					 */}
					<Link href={`${getProfileLink({ user: user as User, page: "cart" })}`} className="flex flex-col items-center gap-y-1">
						<FaCartShopping />
						<span className='text-xs'>Кошик</span>
					</Link>
					<Link href={`${getProfileLink({ user: user as User, page: "favorites" })}`} className="flex flex-col items-center gap-y-1">
						<FaHeart />
						<span className='text-xs'>Списки</span>
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