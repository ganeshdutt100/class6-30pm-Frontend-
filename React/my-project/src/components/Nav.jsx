import React, { useState } from 'react'
import {Menu, X} from 'lucide-react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <header className="text-gray-600 bg-blue-50 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex justify-around items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav className="md:ml-auto hidden md:flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">First Link</a>
      <a className="mr-5 hover:text-gray-900">Second Link</a>
      <a className="mr-5 hover:text-gray-900">Third Link</a>
      <a className="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <button onClick={()=>setIsOpen(!isOpen)}>
     {isOpen?<X/>:<Menu/>}
    </button>
  </div>
  {isOpen && (
     <nav className="md:ml-auto pb-11 flex flex-col  gap-5 flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">First Link</a>
      <a className="mr-5 hover:text-gray-900">Second Link</a>
      <a className="mr-5 hover:text-gray-900">Third Link</a>
      <a className="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
  )}
</header>

    </div>
  )
}

export default Nav