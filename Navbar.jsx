import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black fixed w-full top-0 z-50 shadow-lg">
      <h1 className="text-2xl font-bold text-white">Leo9 Clone</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8">
        <li className="hover:text-yellow-400 cursor-pointer">Home</li>
        <li className="hover:text-yellow-400 cursor-pointer">About</li>
        <li className="hover:text-yellow-400 cursor-pointer">Services</li>
        <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-6 py-6 md:hidden">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#" className="hover:text-yellow-400">About</a>
          <a href="#" className="hover:text-yellow-400">Services</a>
          <a href="#" className="hover:text-yellow-400">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
