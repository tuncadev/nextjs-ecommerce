"use client";

import { useState } from "react";
import { useAuth } from "@/app/context/AuthProvider";
import { useCart } from "@/app/context/CartContext";
import { DrawerNav } from "@/app/components/globals/DrawerNav";
import { useFavorites } from "@/app/context/FavoritesContext";
import SiteLogo from "@/app/components/globals/SiteLogo";
import HeaderSearch from "@/app/components/globals/HeaderSearch";
import Favorites from "@/app/components/globals/Header/Favorites";
import Cart from "@/app/components/globals/Header/Cart";
import UserMenu from "./Header/UserMenu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading, hydrated } = useAuth();

	const {cartItems} = useCart();
 	const { hasFavorites, favorites }= useFavorites();

	if (!hydrated) return null;// 🧠 Prevent hydration mismatch

  return (
    <header className="w-full bg-[#022335] border-b border-b-gray-300 pt-4">
      <div className="container border-gray-200 px-4">
        <div className="flex flex-wrap items-center justify-center sm:justify-between">
          {/* Logo */}
          <SiteLogo />

          {/* Search */}
          <HeaderSearch />

          {/* User Menu */}
          <div className="items-center justify-center sm:justify-between w-full md:flex md:w-auto md:order-1 pr-6 pb-4">
            <div className="flex gap-8 justify-center">
              {/* Favorites */}
              <Favorites favorites={favorites} hasFavorites={hasFavorites} />

              {/* Cart Icon */}
              <Cart hydrated={hydrated} loading={loading} cartItems={cartItems} />

              {/* User Auth */}
              <UserMenu user={user} />
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
