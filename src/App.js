import React, { useState } from 'react';
import AppRouter from './router/AppRouter';
import './App.css';

const App = () => {
  // State to manage modal visibility
  const [showModal, setShowModal] = useState(false);

  // State to store cart items
  const [cart, setCart] = useState([]);

  // Function to toggle modal visibility
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Function to add a product to the cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);  // Add selected product to the cart state
  };

  return (
    <div className="App">
      {/* Pass modal state, cart, and handler functions to AppRouter */}
      <AppRouter
        showModal={showModal}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        cart={cart}  // Pass cart state to AppRouter
        handleAddToCart={handleAddToCart}  // Pass add to cart function
      />
    </div>
  );
};

export default App;
