import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-black text-white border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">My Navbar</h1>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
