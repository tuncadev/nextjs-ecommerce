import React from 'react'

const SiteLogo = () => {
  return (
    <a href="/" className="flex flex-col space-x-3 rtl:space-x-reverse">
      <div id="logo" className="text-3xl font-bold text-sky-100">
        Baby<span className="text-red-600 ml-1">Kangaroo</span>
      </div>
      <div className="text-right -mt-1 mb-2 sm:mb-0 text-sm tracking-widest text-gray-100">
        <span id="sublogo">магазин дитячих меблів</span>
      </div>
    </a>
  )
}

export default SiteLogo