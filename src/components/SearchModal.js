import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ProductSearch from './ProductSearch'; // Import ProductSearch component

const SearchModal = ({ onClose, onAddToCart }) => { // Add onAddToCart prop
  const [searchQuery, setSearchQuery] = useState(""); // State to track search query

  const handleSearch = (e) => {
    setSearchQuery(e.target.value); // Update the search query state
  };

  const handleAddProduct = (product) => {
    onAddToCart(product);  // Add product to cart via prop function
    onClose();  // Close modal after adding product to cart
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">
        {/* Header with Search Bar and Sorting Option */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex-1 max-w-lg relative">
            <input
              type="text"
              placeholder="Cari produk, jasa, atau vendor"
              value={searchQuery}
              onChange={handleSearch} // Update search query on input change
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

        {/* Product Search Component */}
        <ProductSearch searchQuery={searchQuery} onAddProduct={handleAddProduct} /> {/* Pass search query and add product function */}

        {/* Close Button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-cyan-500 text-white px-4 py-2 rounded-full"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
