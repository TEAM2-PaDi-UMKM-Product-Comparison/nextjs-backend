import React from 'react';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      
      {/* Main Content Container */}
      <div className="grid grid-cols-4 gap-6">
        {/* Sidebar */}
        <Sidebar />

        {/* Product Cards Container */}
        <ProductList />
      </div>
    </div>
  );
}
