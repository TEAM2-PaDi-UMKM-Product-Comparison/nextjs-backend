import React, { useState } from 'react';
import { FaTrashAlt, FaShoppingCart, FaStar } from 'react-icons/fa';

const ProductCard = ({ product, isBestProduct, onAddToCart }) => {

  // Function to render star rating
  const renderStarAndRating = (rating) => (
    <div className="flex items-center bg-teal-500 text-white rounded-full px-3 py-1">
      <FaStar className="text-yellow-500 mr-1" />
      <span className="text-sm font-semibold">{rating}</span>
    </div>
  );

  // Function to render product details row
  const renderDetailRow = (label, value) => (
    <div className="flex justify-between">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );

  // Function to handle adding product to cart
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-xs flex flex-col justify-between relative group">
      {/* Image container with hover effect */}
      <div className="relative w-full h-50">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-50 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay that appears on hover */}
        <div className="relative w-full h-50 absolute inset-0 bg-teal-500 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white font-semibold">Lihat Produk</span>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 text-left flex flex-col">
        <h2
          className="text-lg font-semibold mb-2"
          style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {product.title}
        </h2>

        {isBestProduct && (
          <div className="flex items-center justify-between mb-4">
            {/* Rating */}
            {renderStarAndRating(product.rating)}
            {/* Discount / Promotion Badge */}
            <div className="bg-teal-500 text-white rounded-full px-3 py-1 text-xs font-semibold">
              50% lebih murah
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-4">
          <button className="flex items-center justify-center bg-white text-teal-500 border border-teal-500 rounded-md p-2 hover:bg-teal-500 hover:text-white transition">
            <FaTrashAlt className="mr-2" />
          </button>
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center bg-teal-500 text-white rounded-md p-2 hover:bg-teal-600 transition"
          >
            <FaShoppingCart className="mr-2" /> Keranjang
          </button>
        </div>

        {/* Horizontal Line */}
        <hr className="my-3 border-gray-300" />

        {/* Product Details */}
        <div className="grid grid-cols-1 gap-2 mt-4 text-sm text-gray-600 flex-grow">
          <div className="flex justify-between">
            <span>Rp {product.price}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.location}</span>
          </div>
          <div className="flex justify-between">
            {renderStarAndRating(product.rating)}
          </div>
          <div className="flex justify-between">
            <span>{product.sold}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.taxes}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.tkdn}</span>
          </div>

          <hr className="my-3 border-gray-300 w-full" />

          <div className="flex justify-between">
            <span>{product.stock}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.category}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.brand}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.minPurchase}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.unitWeight}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.sizeDimensions}</span>
          </div>

          <hr className="my-3 border-gray-300 w-full" />

          <div className="flex justify-between">
            <span>{product.seller}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.bumn}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.totalSales}</span>
          </div>

          <hr className="my-3 border-gray-300 w-full" />

          <div className="flex justify-between">
            <span>{product.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
