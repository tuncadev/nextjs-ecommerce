import React from 'react'

const HeaderSearch = () => {
  return (
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
  )
}

export default HeaderSearch