import React from 'react'
import { useFavorites } from '@/app/context/FavoritesContext';
import Link from 'next/link';
import { getProfileLink } from '@/app/utils/getProfileLink';
import { useAuth } from '@/app/context/AuthProvider';
import { User } from '@prisma/client';
 

const Favorites = () => {
	const { hasFavorites, favorites }= useFavorites();
	const { user } = useAuth();

  return (
		<Link href={`${getProfileLink({ user: user as User, page: "favorites" })}`} >
			<div className={`${hasFavorites ? "text-customGreen" : "text-gray-50"} relative group `}>
				<i className={` fa-regular fa-heart  group-hover:text-customRed group-hover:cursor-pointer`}></i>
				<span className="text-white  absolute text-[10px] bg-customRed leading-none rounded-full px-2 py-1 group-hover:cursor-pointer bottom-0 -right-3 group-hover:bg-white group-hover:text-red-600">
						<span> {favorites.length} </span>
				</span>
			</div>
		</Link>
  )
}

 
export default Favorites;