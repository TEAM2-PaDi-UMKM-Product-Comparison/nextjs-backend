import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ProductSearch from './ProductSearch'; // Import komponen ProductSearch

const SearchModal = ({ onClose, onAddToCart }) => {
  const [searchQuery, setSearchQuery] = useState(""); // State untuk melacak query pencarian
  const [currentPage, setCurrentPage] = useState(1); // State untuk melacak halaman saat ini

  const handleSearch = (e) => {
    setSearchQuery(e.target.value); // Perbarui state searchQuery
  };

  const handleAddProduct = (product) => {
    onAddToCart(product);  // Tambahkan produk ke keranjang melalui fungsi prop
    onClose();  // Tutup modal setelah menambahkan produk
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Kurangi halaman jika memungkinkan
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1); // Tambah halaman
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-4xl">
        {/* Header dengan Kotak Pencarian */}
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
        </div>

        {/* Komponen ProductSearch dengan Pagination */}
        <ProductSearch 
          searchQuery={searchQuery} 
          currentPage={currentPage} // Pass halaman saat ini ke ProductSearch
          onAddProduct={handleAddProduct} 
        /> 

        {/* Tombol Pagination dan Tutup */}
        <div className="flex justify-between items-center mt-6">
          {/* Tombol Tutup */}
          <button
            onClick={onClose}
            className="bg-cyan-500 text-white px-4 py-2 rounded-full"
          >
            Tutup
          </button>

          {/* Pagination */}
          <div className="flex items-center space-x-4">
            {/* Tombol Previous */}
            <button
              onClick={handlePreviousPage} 
              className={`text-gray-400 ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
              disabled={currentPage === 1} // Disable tombol jika di halaman pertama
            >
              &#9664; {/* Simbol panah kiri */}
            </button>

            {/* Angka halaman */}
            <div className="bg-cyan-500 text-white px-4 py-2 rounded-full">
              {currentPage} {/* Tampilkan halaman saat ini */}
            </div>

            {/* Tombol Next */}
            <button onClick={handleNextPage} className="text-gray-400">
              &#9654; {/* Simbol panah kanan */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
