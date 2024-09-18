import React, { useState } from 'react';
import { Modal } from '@mui/material';
import { FaTimes, FaCheckCircle, FaShoppingCart } from 'react-icons/fa';
import ProductCard from './ProductCard'; // Import the modal component

const AddToCartModal = ({ open, handleClose, product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0); // Default quantity is 0
  const [showSuccess, setShowSuccess] = useState(false); // Toggle success modal

  if (!product) return null;

  const handleIncreaseQuantity = () => {
    if (quantity < getRandomStock()) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product, quantity);
    }
    setShowSuccess(true); // Show the success modal
  };
  
  <ProductCard
    product={product}
    onAddToCart={handleAddToCart} // Make sure this function is passed correctly
  />
  
  const getRandomStock = () => Math.floor(Math.random() * (20 - 10 + 1)) + 10;

  const handleCloseSuccess = () => {
    setShowSuccess(false); // Close success modal
    handleClose(); // Close the main modal
  };

  return (
    <>
      {/* Main Modal */}
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">{product.title}</h2>
              <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
                <FaTimes size={20} />
              </button>
            </div>

            {/* Product Image and Information */}
            <div className="flex mt-4">
              <img
                src={product.productImage}
                alt={product.title}
                className="w-24 h-24 rounded-md object-cover"
              />
              <div className="ml-4 flex-grow">
                <p className="font-bold">Rp{product.price.toLocaleString()}/Box (Rp{(product.price / product.unit).toFixed(3)}/Pcs)</p>
                <p className="mt-1 text-sm">Isi: {product.unit}/Box</p>
                <p className="text-sm">Stok: {getRandomStock()} box</p>
              </div>
            </div>

            {/* Product Details */}
            <div className="mt-4">
              <p className="font-bold text-sm">Motif</p>
              <p className="text-sm text-gray-500 italic mb-4">*Motif tidak tersedia</p>
              <p className="font-bold text-sm">Jumlah (*satuan box)</p>

              {/* Quantity Selector */}
              <div className="flex items-center mt-2">
                <button
                  onClick={handleDecreaseQuantity}
                  disabled={quantity <= 0}
                  className="w-8 h-8 border border-gray-300 rounded-full flex justify-center items-center"
                >
                  -
                </button>
                <p className="mx-4 text-sm">{quantity}</p>
                <button
                  onClick={handleIncreaseQuantity}
                  disabled={quantity >= getRandomStock()}
                  className="w-8 h-8 border border-gray-300 rounded-full flex justify-center items-center"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={quantity === 0 || getRandomStock() === 0}
                className="mt-6 w-full flex items-center justify-center py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-md transition-colors disabled:bg-gray-300"
              >
                <FaShoppingCart className="mr-2" />
                Masukkan Keranjang
              </button>
            </div>
          </div>
        </div>
      </Modal>

      {/* Success Modal */}
      <Modal open={showSuccess} onClose={handleCloseSuccess}>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6">
            
            {/* Success Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <FaCheckCircle className="text-cyan-500 mr-2" size={24} />
                <h2 className="text-lg font-bold">Berhasil dimasukkan ke keranjang!</h2>
              </div>
              <button onClick={handleCloseSuccess} className="text-gray-500 hover:text-gray-700">
                <FaTimes size={20} />
              </button>
            </div>

            {/* Success Message */}
            <p className="text-sm mb-4">
              Terima kasih sudah mempercayai kami! <strong>Beli barang</strong> atau pilih lebih banyak barang di bawah.
            </p>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <button
                onClick={handleCloseSuccess}
                className="flex items-center px-4 py-2 border border-cyan-500 text-cyan-500 rounded-md hover:bg-cyan-50"
              >
                <FaShoppingCart className="mr-2" />
                Pilih lagi
              </button>
              <button
                onClick={handleCloseSuccess}
                className="flex items-center px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600"
              >
                <FaShoppingCart className="mr-2" />
                Beli barang
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddToCartModal;
