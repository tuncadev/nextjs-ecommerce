"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthProvider";
import useLogout from "@/app/hooks/useLogout";
import toast from "react-hot-toast";
import { useCart } from "@/app/context/CartContext";
import { DrawerNav } from "./DrawerNav";
import { useFavorites } from "@/app/context/FavoritesContext";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading, hydrated } = useAuth();
  const { handleLogout } = useLogout();
	const {cartItems} = useCart();
 	const { hasFavorites, favorites }= useFavorites();
	if (!hydrated) return null;// 🧠 Prevent hydration mismatch

  return (
    <header className="w-full bg-[#022335] border-b border-b-gray-300 pt-4">
      <div className="container border-gray-200 px-4">
        <div className="flex flex-wrap items-center justify-center sm:justify-between">
          {/* Logo */}
          <a href="/" className="flex flex-col space-x-3 rtl:space-x-reverse">
            <div id="logo" className="text-3xl font-bold text-sky-100">
              Baby<span className="text-red-600 ml-1">Kangaroo</span>
            </div>
            <div className="text-right -mt-1 mb-2 sm:mb-0 text-sm tracking-widest text-gray-100">
              <span id="sublogo">магазин дитячих меблів</span>
            </div>
          </a>

          {/* Search */}
          <div className="flex w-full sm:max-w-80 md:max-w-[40%] pb-2 sm:pb-0">
            <div className="relative w-full px-4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-7 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Пошук товарів..."
              />
            </div>
          </div>

          {/* User Menu */}
          <div className="items-center justify-center sm:justify-between w-full md:flex md:w-auto md:order-1 pr-6 pb-4">
            <div className="flex gap-8 justify-center">
              {/* Favorites */}
              <div className={`${hasFavorites ? "text-red-500" : "text-gray-50"} relative group `}>
                <i className={` fa-regular fa-heart text-xl sm:text-3xl group-hover:text-red-500 group-hover:cursor-pointer`}></i>
                <span className="text-white  absolute text-[10px] bg-red-500 leading-none rounded-full px-2 py-1 group-hover:cursor-pointer bottom-0 -right-3 group-hover:bg-white group-hover:text-red-600">
                  {favorites.length}
                </span>
              </div>

              {/* Cart Icon */}
              <Link href="/cart">
                <div className="text-gray-50 relative group">
                  <i className="fa-solid fa-bag-shopping text-xl sm:text-3xl group-hover:text-red-500"></i>
									{hydrated && !loading && (
										<span className="absolute text-[10px] bg-red-500 leading-none rounded-full px-2 py-1 bottom-0 -right-3 group-hover:bg-white group-hover:text-red-600">
											{cartItems.reduce((sum, item) => sum + item.quantity, 0)}
										</span>
									)}
                </div>
              </Link>

              {/* User Auth */}
              <div className={`relative group ${user?.username ? "text-lime-500" : "text-gray-50"}`}>
                <Link href={user?.username ? `/profile/${user.username}` : "/login"}>
                  <div>
                    <i className="fa-regular fa-user text-xl sm:text-3xl group-hover:text-red-500"></i>
                    <span className={`${user?.username ? "bg-lime-500 text-gray-900 border border-gray-800 font-semibold left-3" : "bg-red-500 left-3"} absolute text-[10px] leading-none rounded-full px-2 py-1 bottom-0`}>
                      {user?.username || "логін"}
                    </span>
                  </div>
                </Link>

                {user?.username && (
                  <div className="absolute font-semibold flex items-center justify-center gap-1 mt-2">
                    <span className="text-[11px] leading-none text-sky-100">
                      <Link href="#" onClick={handleLogout} className="hover:text-gray-800 hover:bg-white text-gray-800 rounded bg-red-500 px-2 py-0.5 h-[22px]">
                        Вихід
                      </Link>
                    </span>
                    <span className="text-[11px] leading-none text-sky-100">
                      <Link href={`/profile/${user.username}`} className="hover:text-gray-800 hover:bg-white text-gray-800 rounded bg-lime-500 px-2 py-0.5 h-[22px]">
                        Профіль
                      </Link>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full flex items-center justify-between sm:flex-row max-w-full bg-gray-200 mt-4">
        <div className="container flex items-center flex-col sm:flex-row justify-between">
          <div className="text-xl flex items-center text-gray-700" onClick={() => setIsOpen(true)}>
            <i className="fa-solid fa-bars text-2xl mr-4"></i>
            <div className="text-lg leading-none">всі товари</div>
          </div>

          {/* DrawerNav placeholder */}
           {isOpen && <DrawerNav isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </nav>
    </header>
  );
};
