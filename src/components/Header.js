// src/components/Header.js
import React from 'react';
import { FaBell, FaShoppingCart, FaComments } from 'react-icons/fa';  // Ensure correct icons are imported based on design

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src="/images/padiUMKM.png" alt="Logo" className="h-8 mr-4" />
          <span className="font-bold text-xl text-gray-700">PaDi UMKM</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-4">
          <input 
            type="text" 
            placeholder="Cari produk jasa atau vendor" 
            className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none"
          />
        </div>

        {/* Icons and User Info */}
        <div className="flex items-center space-x-4">
          <FaBell className="text-gray-700 cursor-pointer" />
          <FaShoppingCart className="text-gray-700 cursor-pointer" />
          <FaComments className="text-gray-700 cursor-pointer" />
          <div className="flex items-center space-x-2">
            <img src="/icons/user.png" alt="Profile" className="h-8 w-8 rounded-full" />
            <div className="text-gray-700">
              <span className="block font-medium">Muhammad</span>
              <span className="block text-sm">Buyer Retail</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
