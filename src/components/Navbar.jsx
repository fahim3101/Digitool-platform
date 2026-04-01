import React from 'react';
import shoppingCartIcon from '../assets/shopping-cart.png';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 lg:px-20 bg-white border-b border-gray-100">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#8b5cf6]">
        DigiTools
      </div>

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
        <a href="#" className="hover:text-[#8b5cf6] transition">Products</a>
        <a href="#" className="hover:text-[#8b5cf6] transition">Features</a>
        <a href="#" className="hover:text-[#8b5cf6] transition">Pricing</a>
        <a href="#" className="hover:text-[#8b5cf6] transition">Testimonials</a>
        <a href="#" className="hover:text-[#8b5cf6] transition">FAQ</a>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-5">
        <div className="relative cursor-pointer flex items-center gap-2">
           <img src={shoppingCartIcon} alt="Cart" className="w-5 h-5 opacity-70" />
           {cartCount > 0 && (
             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
               {cartCount}
             </span>
           )}
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <button className="text-sm font-semibold text-gray-700 hover:text-[#8b5cf6] transition">Login</button>
          <button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-sm font-semibold py-2 px-5 rounded-full transition shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;