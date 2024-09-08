import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">
        {/* Header with Search Bar and Sorting Option */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex-1 max-w-lg relative">
            <input
              type="text"
              placeholder="Cari produk, jasa, atau vendor"
              className="w-full border border-gray-300 rounded-full py-2 px-4 pl-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Sorting Dropdown */}
          <div className="relative">
            <select
              className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>Harga Terendah</option>
              <option>Harga Tertinggi</option>
              <option>Rating</option>
            </select>
          </div>
        </div>

        {/* Empty State Illustration */}
        <div className="flex flex-col items-center justify-center h-64">
          <img src="/icons/middle pic.png" alt="No Products" className="h-24 w-24 mb-4" />
          <p className="text-gray-500 text-lg mb-2">Belum Ada Produk</p>
          <p className="text-gray-400 text-sm text-center">
            Silahkan cari produk di kolom pencarian dengan menuliskan nama produk yang ingin dicari
          </p>
        </div>

        {/* Close Button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
