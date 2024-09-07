import React from 'react';
import { FaTrashAlt, FaShoppingCart, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }

    if (halfStars) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }

    return stars;
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-xs">
      <img src={product.image} alt={product.title} className="w-full h-50 object-cover"/>
      <div className="p-4 text-left">
        <h2 className="text-lg font-semibold">{product.title}</h2>

        <div className="grid grid-cols-1 gap-2 mt-4 text-sm text-gray-600">
          <div className="flex justify-between">
            <span className="font-semibold">Harga:</span>
            <span>Rp {product.price}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Dikirim dari:</span>
            <span>{product.location}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Rating:</span>
            <div className="flex items-center">
              {renderStars(product.rating)}
              <span className="ml-2">{product.rating}</span>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Brand:</span>
            <span>{product.brand}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Kategori:</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md">{product.category}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Terjual:</span>
            <span>{product.sold}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Pajak:</span>
            <span>{product.taxes}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">TKDN:</span>
            <span>{product.tkdn}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">BUMN Pengampu:</span>
            <span>{product.bumn}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button className="flex items-center justify-center bg-white text-teal-500 border border-teal-500 rounded-md p-2 hover:bg-teal-500 hover:text-white transition">
            <FaTrashAlt className="mr-2" />
          </button>
          <button className="flex items-center justify-center bg-teal-500 text-white rounded-md p-2 hover:bg-teal-600 transition">
            <FaShoppingCart className="mr-2" /> Keranjang
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
