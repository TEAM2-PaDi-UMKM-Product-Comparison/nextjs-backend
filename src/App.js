// src/App.jsx
import React, { useState } from 'react';
import AppRouter from './router/AppRouter';
import './App.css';

const App = () => {
  // State to manage modal visibility
  const [showModal, setShowModal] = useState(false);

  // Function to toggle modal visibility
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      {/* Pass modal state and handler functions to AppRouter */}
      <AppRouter
        showModal={showModal}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};

export default App;
