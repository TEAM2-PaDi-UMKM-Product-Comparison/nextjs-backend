import React, { useState } from 'react';
import { FaTrashAlt, FaShoppingCart, FaStar } from 'react-icons/fa';
import AddToCartModal from './AddToCartModal'; // Import the modal component

const ProductCard = ({ product, onAddToCart, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Function to render star rating
  const renderStarAndRating = (rating) => (
    <div className="flex items-center bg-teal-500 text-white rounded-full px-3 py-1">
      <FaStar className="text-yellow-500 mr-1" />
      <span className="text-sm font-semibold">{rating}</span>
    </div>
  );

  const getRandomStock = () => Math.floor(Math.random() * (20 - 10 + 1)) + 10;

  // Function to render product details row
  const renderDetailRow = (label, value) => (
    <div className="flex justify-between">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );

  // Function to handle adding product to cart
  const handleAddToCart = () => {
    setIsModalOpen(true); // Open the AddToCartModal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal when done
  };

  const handleDeleteProduct = () => {
    if (onDelete) {
      onDelete(product.id); // Call the delete function passed from parent
    }
  };

  // Logika Best Product berdasarkan harga di bawah 100.000 dan rating lebih dari 4.5
  const isBestProduct = product.price < 100000 && product.rating > 4.5;

  return (
    <div
      className={`bg-white shadow-md rounded-lg overflow-hidden w-full flex flex-col justify-between relative group ${
        isBestProduct ? 'border-4 border-cyan-500' : 'border border-gray-300'
      }`}
    >
      {/* Image container with hover effect */}
      <div className="relative w-full h-50">
      <img
        src={product.productImage}
        alt={product.name}
        className="w-full h-50 object-cover transition-transform duration-300 group-hover:scale-105"
      />

        {/* Overlay that appears on hover */}
        <div className="relative w-full h-50 absolute inset-0 bg-cyan-500 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
        {product.name}
      </h2>


        {isBestProduct && (
          
          <div className="flex items-center justify-between mb-4">
            {/* Rating */}
            {renderStarAndRating(product.rating)}
            {/* Discount / Promotion Badge */}
            <div className="bg-teal-500 text-white rounded-full px-3 py-1 text-xs font-semibold">
              Harga Terbaik!
            </div>
            <span className="absolute -top-3 right-2 bg-cyan-500 text-white text-xs font-bold px-3 py-5 rounded-lg z-10">
            Most Popular
            </span>
          </div>
        )}

      <div className="flex items-center justify-between mt-4">
        {/* Delete Button */}
        <button 
          onClick={handleDeleteProduct}
          className="flex items-center justify-center bg-white text-cyan-500 border border-cyan-500 rounded-md p-2 hover:bg-cyan-500 hover:text-white transition no-print"
          >
          <FaTrashAlt className="mr-2" />
        </button>
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center bg-cyan-500 text-white rounded-md p-2 hover:bg-cyan-600 transition no-print"
        >
          <FaShoppingCart className="mr-2" /> Keranjang
        </button>
      </div>


        {/* Horizontal Line */}
        <hr className="my-3 border-gray-300" />

        {/* Product Details */}
        <div className="grid grid-cols-1 gap-2 mt-4 text-sm text-gray-600 flex-grow">
          <div className="flex justify-between">
            <span>{product.price}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.sentFrom}</span>
          </div>
          <div className="flex justify-between">
            {renderStarAndRating(product.ratingProduct)}
          </div>
          <div className="flex justify-between">
            <span>{product.soldQuantity}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.taxProduct}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.tkdn || "-"}</span>
          </div>

          <hr className="my-3 border-gray-300 w-full" />

          <div className="flex justify-between">
            <span>{getRandomStock()}</span>
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
            <img  src={product.bumnImage} alt={product.name} className="w-6 h-6 rounded-full"/>
            {/* ini harus disamain di API nya apa */}
          </div>

          <div className="flex justify-between">
            <span>{product.ratingStore}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.totalSold}</span>
          </div>
          <hr className="my-3 border-gray-300 w-full" />

          <div className="flex justify-between">
            <span>{product.description}</span>
          </div>
        </div>
      </div>
      {/* Add to Cart Modal */}
      <AddToCartModal
        open={isModalOpen}
        handleClose={handleModalClose}
        product={product}
        onAddToCart={onAddToCart} // Pass the cart function to modal
      />
    </div>
  );
};

export default ProductCard;
