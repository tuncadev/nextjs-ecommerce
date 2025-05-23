
import Link from "next/link";
import React from "react";
import useLogout from "@/app/hooks/useLogout";
import { useAuth } from "@/app/context/AuthProvider";
import {getProfileLink} from "@/app/utils/getProfileLink";
import { User } from "@prisma/client";

const UserMenu = () => {
	const { user } = useAuth();
  const { handleLogout } = useLogout();
  return (
    <div className={`relative group ${user?.username ? "text-customGreen pr-14" : "text-gray-50"}`}>
      <Link href={user?.username ? `/profile/${user.username}` : "/login"}>
        <div>
          <i className="fa-regular fa-user  group-hover:text-customRed"></i>
          <span className={`${user?.username ? "bg-customGreen text-gray-900 border border-gray-800 font-semibold left-3" : "bg-customRed left-3"} absolute text-[10px] leading-none rounded-full px-2 py-1 bottom-0`}>
            {user?.username || "логін"}
          </span>
        </div>
      </Link>

      {user?.username && (
        <div className="absolute font-semibold flex items-center justify-center gap-1 mt-2">
          <span className="text-[11px] leading-none text-sky-100">
            <Link href="#" onClick={handleLogout} className="hover:text-gray-800 hover:bg-white text-gray-800 rounded bg-customRed px-2 py-0.5 h-[22px]">
              Вихід
            </Link>
          </span>
          <span className="text-[11px] leading-none text-sky-100">
            <Link href={`${getProfileLink({ user: user as User, page: "" })}`} className="hover:text-gray-800 hover:bg-white text-gray-800 rounded bg-customGreen px-2 py-0.5 h-[22px]">
              Профіль
            </Link>
          </span>
        </div>
      )}
    </div>
  );
}

export default UserMenu;