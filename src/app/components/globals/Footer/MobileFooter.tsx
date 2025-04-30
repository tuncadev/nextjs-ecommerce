import React from 'react'
import { FaHouse, FaMagnifyingGlass, FaCartShopping, FaHeart, FaUserGear } from "react-icons/fa6";


const MobileFooter = () => {
	return (

			<div className="fixed  bottom-0 w-full bg-gray-900 text-gray-50 items-center">
				<div className="flex flex-row text-2xl justify-between px-4 py-3">
					<div className="flex flex-col items-center gap-y-1 ">
						<FaHouse className=' ' />
						<span className='text-xs'>Home</span>
					</div>
					<div className="flex flex-col items-center gap-y-1"> 
						<FaMagnifyingGlass />
						<span className='text-xs'>Search</span>
					</div>
					<div className="flex flex-col items-center gap-y-1">
						<FaCartShopping />
						<span className='text-xs'>Cart</span>
					</div>
					<div className="flex flex-col items-center gap-y-1">
						<FaHeart />
						<span className='text-xs'>Favorites</span>
					</div>
					<div className="flex flex-col items-center gap-y-1">
						<FaUserGear />
						<span className='text-xs'>Profile</span>
					</div>
				</div>
			</div>

	)
}

export default MobileFooter