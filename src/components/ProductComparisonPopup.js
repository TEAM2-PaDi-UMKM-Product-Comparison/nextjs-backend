import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ProductComparisonPopup = ({ products = [], onClose }) => {
  const [selectedPrice, setSelectedPrice] = useState('termurah');
  const [locationFilter, setLocationFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleSelectedPriceChange = (price) => setSelectedPrice(price);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-3/4 h-3/4 p-6 relative overflow-y-auto">
        {/* Tombol Tutup */}
        <button
          className="absolute top-4 right-4 text-xl transition duration-200 transform hover:scale-110"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-xl font-semibold mb-6">Perbandingan Produk</h2>

        {/* Konten Utama */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/4 pr-4 border-r">
            {/* Opsi Cetak */}
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Cetak Dengan Perbandingan</label>
              <div className="flex flex-col">
                <label className="mb-2">
                  <input type="radio" name="cetak" className="mr-2" defaultChecked />
                  Cetak Dengan Perbandingan
                </label>
                <label>
                  <input type="radio" name="cetak" className="mr-2" />
                  Cetak Tanpa Perbandingan
                </label>
              </div>
            </div>

            {/* Layout */}
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Layout</label>
              <div className="flex flex-col">
                <label className="mb-2">
                  <input type="radio" name="layout" className="mr-2" />
                  Potrait
                </label>
                <label>
                  <input type="radio" name="layout" className="mr-2" />
                  Landscape
                </label>
              </div>
            </div>

            {/* Format */}
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Format</label>
              <div className="flex flex-col">
                <label className="mb-2">
                  <input type="radio" name="format" className="mr-2" />
                  PDF
                </label>
                <label>
                  <input type="radio" name="format" className="mr-2" />
                  Docx
                </label>
              </div>
            </div>
          </div>

          {/* Kartu Perbandingan Produk */}
          <div className="flex-1 pl-4">
            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                  <div key={product._id} className="bg-white border rounded-lg p-4 shadow-md">
                    <img
                      src={product.productImage}
                      alt={product.name}
                      className="w-full h-40 object-cover mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-700 mb-1">Harga: {product.price}</p>
                    <p className="text-gray-700 mb-1">Dikirim dari: {product.location}</p>
                    <p className="text-gray-700 flex items-center mb-1">
                      <FaStar className="text-yellow-500 mr-1" /> {product.ratings}
                    </p>
                    <p className="text-gray-700 mb-1">Terjual: {product.soldQuantity}</p>
                    <p className="text-gray-700 mb-1">Pajak: {product.taxProduct}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-700">Tidak ada produk yang tersedia untuk dibandingkan.</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center mt-6">
          <button 
          onClick={() => window.print()}
          className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600 transition duration-200 no-print"
          > 
            Unduh File
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductComparisonPopup;