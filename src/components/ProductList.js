import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { FaSearch } from 'react-icons/fa'; // Import search icon
import SearchModal from './SearchModal';   // Import SearchModal untuk pencarian produk

const ProductList = () => {
  const [products, setProducts] = useState([]); // Store products in comparison list
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleOpenSearchModal = () => {
    setIsSearchModalOpen(true); // Buka modal pencarian
  };

  const handleCloseSearchModal = () => {
    setIsSearchModalOpen(false); // Tutup modal pencarian
  };

  // Function to handle adding products
  const handleAddToCart = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]); // Add new product to list
  };

  // Jika produk tidak ada, tampilkan tabel "No Data" dengan card "Cari Produk"
  if (!products || products.length === 0) {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full p-4">
        <table className="min-w-full text-center">
          <thead></thead>
          <tbody>
            <tr>
              <td className="py-4 px-6 border-b">
                <div className="flex flex-col items-center border-gray-300 justify-center h-80">
                  <div 
                    className="flex items-center justify-center border border-gray-300 rounded-full px-4 py-2 shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200"
                    onClick={handleOpenSearchModal} // Buka modal pencarian saat tombol diklik
                  >
                    <FaSearch className="text-cyan-500 mr-2" /> {/* Icon search */}
                    <span className="text-cyan-500 font-medium">Cari Produk</span>
                  </div>
                </div>
              </td>   
            </tr>
            <tr>
              <td className="py-4 px-4 border-b">
                <div className="flex flex-col items-center justify-center h-44">
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 border-b">
                <div className="flex flex-col items-center justify-center h-44">
                </div>
              </td>
            </tr>

            <tr>
              <td className="py-4 px-6 border-b">
                <div className="flex flex-col items-center justify-center h-44">
                </div>
              </td>
            </tr>

            <tr>
              <td className="py-4 px-6 border-b">
                <div className="flex flex-col items-center justify-center h-44">
                </div>
              </td>
            </tr>

          </tbody>
        </table>

          {/* Modal for product search */}
        {isSearchModalOpen && (
          <SearchModal 
            onClose={handleCloseSearchModal} 
            onAddToCart={handleAddToCart}  // Pass handleAddToCart function to SearchModal
          />
        )}
      </div>
    );
  }

  // If products exist, display the product list
  return (
    <div className="flex flex-wrap gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;