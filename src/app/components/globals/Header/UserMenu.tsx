
import Link from "next/link";
import React from "react";
import useLogout from "@/app/hooks/useLogout";
import { useAuth } from "@/app/context/AuthProvider";

const UserMenu = () => {
	const { user } = useAuth();
  const { handleLogout } = useLogout();
  return (
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
  );
}

export default UserMenu;