import React from 'react';
import { FaTrashAlt, FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-50 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <div className="flex items-center justify-between mt-4">
          <button className="flex items-center justify-center bg-white text-teal-500 border border-teal-500 rounded-md p-2 hover:bg-teal-500 hover:text-white transition">
            <FaTrashAlt className="mr-2" />
          </button>
          <button className="flex items-center justify-center bg-teal-500 text-white rounded-md p-2 hover:bg-teal-600 transition">
            <FaShoppingCart className="mr-2" /> Keranjang
          </button>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p>{product.price}</p>
          <p>{product.location}</p>
          <p>Rating: {product.rating}</p>
          <p>Terjual: {product.sold}</p>
          <p>Pajak: {product.taxes}</p>
          <p>TKDN: {product.tkdn}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
