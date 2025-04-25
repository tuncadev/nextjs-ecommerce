import React from 'react'
 import { FavoritesType } from '@/app/types/favorites';
 
type Props = {
  favorites: FavoritesType[];
  hasFavorites: boolean;
};

const Favorites = ({ favorites, hasFavorites }: Props) => {
 
  return (
    <div className={`${hasFavorites ? "text-lime-500" : "text-gray-50"} relative group `}>
    <i className={` fa-regular fa-heart text-xl sm:text-3xl group-hover:text-red-500 group-hover:cursor-pointer`}></i>
    <span className="text-white  absolute text-[10px] bg-red-500 leading-none rounded-full px-2 py-1 group-hover:cursor-pointer bottom-0 -right-3 group-hover:bg-white group-hover:text-red-600">
        {favorites.length && (
          <span> {favorites.length} </span>
        )}
    </span>
  </div>
  )
}

 
export default Favorites;