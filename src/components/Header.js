import React from 'react';
import { FaBell, FaShoppingCart, FaComments, FaSearch } from 'react-icons/fa';

const Header = ({ onSearchClick }) => {  // Add onSearchClick as a prop
  return (
    <header className="bg-white p-0 shadow-md">
      <div className="w-full bg-gray-200">
        <div className="container ml-4 flex justify-start items-left space-x-5 py-4">
          <a href="#" className="text-gray-700 hover:text-black">Mitra PaDi UMKM</a>
          <a href="#" className="text-gray-700 hover:text-black">Menjadi Penjual</a>
          <a href="#" className="text-gray-700 hover:text-black">Info</a>
          <a href="#" className="text-gray-700 hover:text-black">Pusat Bantuan</a>

          <div className="absolute right-8 top-2 flex items-center space-x-10">
            <img src="/images/Logo-Buatan-Indonesia-Outline.png" alt="Logo 1" className="h-8" />
            <img src="/images/Logo_BUMN_Untuk_Indonesia_2020.svg.png" alt="Logo 2" className="h-8" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center top-8">
          <img src="/images/padiUMKM.png" alt="Logo" className="h-8 mr-4 ml-4 " />
          <img src="/icons/category.ba0a63f9 1.png" alt="Icon" className="h-6 w-6 " />
          <span className="font-bold text-xl text-gray-700">Kategori</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-4 relative top-2">
          <input
            type="text"
            placeholder="Cari produk jasa atau vendor"
            className="w-full border border-gray-300 rounded-full py-2 px-4 pl-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={onSearchClick}  // Trigger the modal when clicked
          />

          {/* Search Icon */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <FaSearch className="h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Icons and User Info */}
        <div className="flex items-center space-x-4 ">
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
