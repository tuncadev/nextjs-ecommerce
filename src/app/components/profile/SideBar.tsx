"use client";
import { Badge, Sidebar } from "flowbite-react";
import React, { useState } from 'react'
import { useAuth } from '@/app/context/AuthProvider'
import { useCart } from '@/app/context/CartContext'
import { HiLogout, HiOutlineUser, HiShoppingBag, HiUser, HiHeart } from "react-icons/hi";
import useLogout from "@/app/hooks/useLogout";
import {getProfileLink} from "@/app/utils/getProfileLink";
import Link from "next/link";
 


const SideBar = () => {
	const {cartItems} = useCart();
	const {user} = useAuth();
	const { handleLogout } = useLogout();
	const [badge, setBadge] = useState(true);

 if(!user) return null;
		return (
		<Sidebar aria-label="Personal Information" className="hidden sm:block">
			<Sidebar.Items>
				<Sidebar.ItemGroup>
					<Sidebar.Item as={Link} href={getProfileLink({username: user.username, page: ""})} icon={HiOutlineUser}>
						<div className="flex flex-col">
							<span className="text-xs">{user.username}</span>
							<span className="text-xs text-lime-700">
									{user?.email || "No email"} {/* Fix email display */}
							</span>
						</div>
					</Sidebar.Item>
					<Sidebar.Item as={Link}  href={getProfileLink({username: user.username, page:"cart"})} icon={HiShoppingBag}>
						<div className="flex flex-col relative text-sm">
							<span>Кошик</span>
							<span className={`absolute text-[10px] ${cartItems.length > 0 ? "bg-lime-500 text-gray-900 border border-gray-600 font-semibold" : "bg-red-500"}  leading-none border px-2 py-1 group-hover:cursor-pointer bottom-0 -right-3 group-hover:bg-white group-hover:text-red-600`}>
								{cartItems.reduce((sum, item) => sum + item.quantity, 0)}
							</span>
						</div>
					</Sidebar.Item>
					<Sidebar.Item as={Link}  href={user ? `${getProfileLink({username: user.username, page: "favorites"})}` : "/favorites"} icon={HiHeart} className="text-sm">
							Списки бажань
					</Sidebar.Item>
					<Sidebar.Item   as={Link}  href="/users" icon={HiUser} className="text-sm">
							Users
					</Sidebar.Item>
					<Sidebar.Item as={Link}  href={user ? `/profile/${user.username}/userdata` : "/auth"} icon={HiShoppingBag} className="text-sm">
							All User Data
					</Sidebar.Item>
					<Sidebar.Item  onClick={handleLogout} icon={HiLogout} className="hover:cursor-pointer text-sm">
							Вихід
					</Sidebar.Item>
				</Sidebar.ItemGroup>
			</Sidebar.Items>
			<Sidebar.CTA className={`${badge ? "" : "hidden"}`}>
					<div className="mb-3 flex items-center">
							<Badge color="warning">Beta</Badge>
							<button
									aria-label="Close"
									onClick={() => setBadge(!badge)}
									className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
									type="button"
							>
									<svg
											aria-hidden
											className="h-4 w-4"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
									>
											<path
													fillRule="evenodd"
													d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
													clipRule="evenodd"
											/>
									</svg>
							</button>
					</div>
					<div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
							Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your
							profile.
					</div>
					<a className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300" href="#">
							Turn new navigation off
					</a>
			</Sidebar.CTA>
		</Sidebar>
	)
}

export default SideBar