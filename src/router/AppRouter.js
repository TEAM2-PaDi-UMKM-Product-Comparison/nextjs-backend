import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/index';
import ProductSearch from '../pages/ProductSearch'; // Import halaman ProductSearch
import SearchModal from '../components/SearchModal'; // Import komponen SearchModal

const AppRouter = ({ showModal, handleOpenModal, handleCloseModal, cart, handleAddToCart }) => (
  <Router>
    <Routes>
      {/* Route ke halaman Home */}
      <Route path="/" element={<HomePage handleOpenModal={handleOpenModal} cart={cart} />} />

      {/* Route ke halaman ProductSearch */}
      <Route path="/product-search" element={<ProductSearch onAddToCart={handleAddToCart} />} />
    </Routes>

    {/* Menampilkan modal pencarian produk ketika showModal bernilai true */}
    {showModal && (
      <SearchModal onClose={handleCloseModal} onAddToCart={handleAddToCart} />
    )}
  </Router>
);

export default AppRouter;
