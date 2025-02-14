"use client";
import { useState, useEffect } from 'react';
import { parseCookies } from "nookies"; // Import nookies for reading cookies
import { DrawerNav } from './DrawerNav';
import { BreadCrumbsNav } from './BreadCrumbsNav';
import Link from 'next/link';
import { useCartContext } from "@/app/context/CartContext";
import { useProducts } from '../hooks/useProducts';
import { useAuth } from "@/app/context/AuthContext";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const {getCategoryBySlug} = useProducts();
	const carBedsCategory = getCategoryBySlug('lizhka-avtomobili');
	const { authUser , setAuthUser} = useAuth();
	const { cartItemsCount } = useCartContext();


		const handleLogout = async () => {
			try {
					const res = await fetch("/api/user/logout", { method: "POST" });
					const data = await res.json();
					if (res.ok) {
						setAuthUser(null); // Clear the user state
					} else {
							console.error("Logout failed:", data.message);
					}
			} catch (error) {
					console.error("Error during logout:", error);
			}
	};

	return (
		<header className='w-full bg-[#022335] border-b border-b-gray-300 pt-4'>
			{/* Logo and search */}
			<div className="container border-gray-200 dark:bg-gray-900 px-4">
				<div className="flex flex-wrap items-center justify-center sm:justify-between">
					<a href="/" className="flex flex-col  space-x-3 rtl:space-x-reverse">
						<div id="logo" className="text-3xl font-bold text-sky-100">Baby<span className='text-red-600 ml-1'>Kangaroo</span></div>
						<div className="text-right -mt-1 mb-2 sm:mb-0 text-sm tracking-widest text-gray-100"><span id="sublogo">магазин дитячих меблів</span></div>
					</a>
					{/* Search */}
					<div className="flex w-full sm:max-w-80 md:max-w-[40%] pb-2 sm:pb-0">
						<div className="relative w-full px-4">
							<div className="absolute inset-y-0 start-0 flex items-center ps-7 pointer-events-none">
								<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
								</svg>
								<span className="sr-only">Значок пошуку</span>
							</div>
							<input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Пошук товарів..." />
						</div>
					</div>
					{/* User Menu */}
					<div className="items-center justify-center sm:justify-between w-full md:flex md:w-auto md:order-1 pr-6" id="navbar-search">
						<div className="flex gap-8  justify-center">
							
								<div className="relative group text-gray-50">
									<i className="fa-regular fa-heart text-xl sm:text-3xl group-hover:text-red-500 group-hover:cursor-pointer"></i>
									<span className='absolute text-[10px] bg-red-500 leading-none rounded-full px-2 py-1 group-hover:cursor-pointer bottom-0 -right-3 group-hover:bg-white group-hover:text-red-600'>
										0
									</span>
								</div>
							<Link
								href="/cart"
								> 
							<div className={`${cartItemsCount > 0 ? "text-lime-500" : "text-gray-50"} relative group `}>
								<i className="fa-solid fa-bag-shopping text-xl sm:text-3xl group-hover:text-red-500 group-hover:cursor-pointer"></i>
								<span className={`absolute text-[10px] ${cartItemsCount > 0 ? "bg-lime-500 text-gray-900 border border-gray-800 font-semibold" : "bg-red-500"}  leading-none rounded-full px-2 py-1 group-hover:cursor-pointer bottom-0 -right-3 group-hover:bg-white group-hover:text-red-600`}>
									{cartItemsCount}
								</span>
							</div>
							</Link>
							<div className={`relative group ${authUser ? "text-lime-500" : "text-gray-50"}`}>
								<Link 
									href={authUser ? `/profile/${authUser}` : "/auth"}
								>
									<div className="">
										<i className="fa-regular fa-user text-xl sm:text-3xl group-hover:text-red-500 group-hover:cursor-pointer"></i>
										<span className={`${authUser ? "bg-lime-500 text-gray-900 border border-gray-800 font-semibold left-3" : "bg-red-500 left-3"} absolute text-[10px] leading-none rounded-full px-2 py-1 group-hover:cursor-pointer bottom-0   group-hover:bg-white group-hover:text-red-600`}>
											{authUser ? authUser : "логін"}
										</span>
									</div>
								</Link>
								{authUser && (
									<div className="absolute font-semibold flex items-center justify-center gap-1 mt-1">
									<span className="text-[11px] leading-none text-sky-100">
											<button 
													onClick={handleLogout}
													className="hover:text-gray-800 hover:bg-white text-gray-800 rounded bg-lime-500 px-2 py-0.5 h-[22px] flex items-center"
											>
													Logout
											</button>
									</span>
									<span className="text-[11px] leading-none text-sky-100">                                    
											<Link 
													href={`/profile/${authUser}`}
													className="hover:text-gray-800 hover:bg-white text-gray-800 rounded bg-lime-500 px-2 py-0.5 h-[22px] flex items-center"
											>
													Profile    
											</Link>
									</span>
							</div>
									)}
								</div>

							
						</div>
					</div>
				</div>
			</div>
			
			{/* Navigation tab */}
			<nav className='w-full flex items-center justify-between sm:flex-row max-w-full bg-gray-200 mt-4'>
				<div className="container flex items-center flex-col sm:flex-row justify-between">
					<div className="text-xl flex items-center text-gray-700 hover:cursor-pointer" onClick={() => setIsOpen(true)}>
						<i className="fa-solid fa-bars text-2xl mr-4"></i>
						<div className='text-lg leading-none'>
							всі товари
						</div>
					</div>
					
					{/* Drawer Menu */}
					{isOpen && <DrawerNav isOpen={isOpen} setIsOpen={setIsOpen} />}

					{/* Bar Menu */}
					<div className="text-gray-900 mt-4 sm:mt-0 sm:flex-row">
						<ul className='flex flex-wrap flex-col sm:flex-row justify-center font-semibold uppercase text-xs lg:text-sm'>
							{[
								{ icon: "star", text: "Гарячі пропозиції", hrefLink:"/hot" },
								{ icon: "car-side", text: "Ліжка-автомобілі", hrefLink:`/${carBedsCategory?.slug}/c${carBedsCategory?.id}` },
								{ icon: "bed", text: "Ліжко-кімната", hrefLink:`/${getCategoryBySlug("lizhko-kimnata")?.slug}/c${getCategoryBySlug("lizhko-kimnata")?.id}` },
								{ icon: "couch", text: "Дитячі м'які меблі", hrefLink:`/${getCategoryBySlug("dytyachi-mebli")?.slug}/c${getCategoryBySlug("dytyachi-mebli")?.id}` }
							].map(({ icon, text, hrefLink}, index) => (
								<Link key={index} href={hrefLink}>
									<li key={index} className='px-3 py-2 lg:px-4 lg:py-2 flex items-center sm:border-none border-b border-b-gray-300'>
										<i className={`fa-solid fa-${icon} mr-2 text-yellow-500`}></i>
										{text}
									</li>
								</Link>
							))}
						</ul>
					</div>
					
					{/* Contact */}
					<div className="flex relative">
						<button className='contact-btn tracking-[0.2rem] text-sky-50 bg-cyan-700 text-xs uppercase font-semibold px-4 py-2 border-2 border-sky-50 rounded-lg shadow hover:bg-sky-50 hover:text-cyan-700 hover:border-cyan-700'>
							Зв'яжіться з нами
						</button>
					</div>
				</div>
			</nav>

			{/* Breadcrumbs with Error Handling */}
			<div>
				{(() => {
					try {
						return <BreadCrumbsNav />;
					} catch (error) {
						console.error("Error in Breadcrumbs:", error);
						return <p className="text-red-600">Oops! Breadcrumbs can't load.</p>;
					}
				})()}
			</div>
		</header>
	);
};
