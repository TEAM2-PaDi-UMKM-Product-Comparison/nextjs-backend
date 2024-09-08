import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import SearchModal from '../components/SearchModal';
import '../app/globals.css';

const HomePage = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(true);  // Open modal
  };

  const closeSearch = () => {
    setIsSearchOpen(false);  // Close modal
  };

  return (
    <>
      <Header onSearchClick={handleSearchClick} />  {/* Pass the click handler */}
      <Breadcrumb />
      <main className="bg-gray-50 min-h-screen p-6">
        <div className="grid grid-cols-4 gap-6">
          <Sidebar />
          <ProductList />
        </div>
      </main>

      {/* Show the search modal when isSearchOpen is true */}
      {isSearchOpen && <SearchModal onClose={closeSearch} />}
    </>
  );
};

export default HomePage;
