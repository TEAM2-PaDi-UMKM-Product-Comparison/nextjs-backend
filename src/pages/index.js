// src/pages/index.js
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import SearchModal from '../components/SearchModal';
import AddToCartModal from '../components/AddToCartModal';  // New Modal Component
import '../app/globals.css';

const HomePage = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);  // State for search modal
  const [cart, setCart] = useState([]);  // Cart state
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);  // State for add to cart modal
  const [selectedProduct, setSelectedProduct] = useState(null);  // Selected product state
  const [quantity, setQuantity] = useState(0);  // Quantity state for selected product

  // Function to handle opening Add to Cart modal
  const openAddToCartModal = (product) => {
    // Close search modal if it's open before opening add to cart modal
    if (isSearchOpen) {
      setIsSearchOpen(false);
    }
    setSelectedProduct(product);
    setQuantity(1);  // Set default quantity to 1
    setShowAddToCartModal(true);  // Open add to cart modal
  };

  // Function to handle closing Add to Cart modal
  const closeAddToCartModal = () => {
    setShowAddToCartModal(false);  // Close add to cart modal
    setSelectedProduct(null);  // Reset selected product
    setQuantity(0);  // Reset quantity
  };

  // Function to handle adding product to cart
  const handleAddToCart = (product, quantity) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      // If product already exists in the cart, update its quantity
      const updatedCart = cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCart(updatedCart);
    } else {
      // Add the product to the cart
      setCart([...cart, { ...product, quantity }]);
    }

    closeAddToCartModal();  // Close modal after adding product to cart
  };

  // Function to handle opening search modal
  const handleSearchClick = () => {
    // Close Add to Cart modal if it's open before opening search modal
    if (showAddToCartModal) {
      setShowAddToCartModal(false);
    }
    setIsSearchOpen(true);  // Open search modal
  };

  // Function to handle closing search modal
  const closeSearch = () => {
    setIsSearchOpen(false);  // Close search modal
  };

  return (
    <>
      {/* Header */}
      <Header onSearchClick={handleSearchClick} />  {/* Pass search click handler */}
      
      {/* Breadcrumb */}
      <Breadcrumb />
      
      {/* Main Content */}
      <main className="bg-gray-50 min-h-screen p-6">
        <div className="grid grid-cols-4 gap-6">
          <Sidebar />
          <ProductList onAddToCart={openAddToCartModal} />  {/* Pass add to cart handler */}
        </div>
      </main>

      {/* Search Modal */}
      {isSearchOpen && (
        <SearchModal onClose={closeSearch} />
      )}

      {/* Add to Cart Modal */}
      {showAddToCartModal && selectedProduct && (
        <AddToCartModal
          open={showAddToCartModal}
          handleClose={closeAddToCartModal}
          product={selectedProduct}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
};

export default HomePage;
