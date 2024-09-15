import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ProductSearch from './ProductSearch'; // Import komponen ProductSearch

const SearchModal = ({ onClose, onAddToCart }) => { // Tambahkan prop onAddToCart
  const [searchQuery, setSearchQuery] = useState(""); // State untuk melacak query pencarian

  const handleSearch = (e) => {
    setSearchQuery(e.target.value); // Perbarui state searchQuery
  };

  const handleAddProduct = (product) => {
    onAddToCart(product);  // Tambahkan produk ke keranjang melalui fungsi prop
    onClose();  // Tutup modal setelah menambahkan produk
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">
        {/* Header dengan Kotak Pencarian dan Opsi Sorting */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex-1 max-w-lg relative">
            <input
              type="text"
              placeholder="Cari produk, jasa, atau vendor"
              value={searchQuery}
              onChange={handleSearch} // Perbarui query pencarian saat input berubah
              className="w-full border border-gray-300 rounded-full py-2 px-4 pl-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Dropdown Sorting */}
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

        {/* Komponen ProductSearch */}
        <ProductSearch searchQuery={searchQuery} onAddProduct={handleAddProduct} /> {/* Pass search query dan fungsi tambah produk */}

        {/* Tombol Tutup */}
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
