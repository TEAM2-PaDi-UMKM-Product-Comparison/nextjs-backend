// src/components/Breadcrumb.js
import React from 'react';
import { FaPrint } from 'react-icons/fa';  // Import the print icon (adjust if needed)

const Breadcrumb = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      {/* Breadcrumb Navigation */}
      <ul className="flex space-x-2 text-sm text-gray-600">
        <li>Beranda</li>
        <li>&gt;</li>
        <li className="font-semibold">Bandingkan Produk</li>
      </ul>

      {/* Cetak Perbandingan Button */}
      <button className="flex items-center space-x-2 border border-teal-400 text-teal-600 bg-white px-4 py-2 rounded transition hover:bg-teal-500 hover:text-white">
        <FaPrint />
        <span>Cetak Perbandingan</span>
      </button>
    </nav>
  );
};

export default Breadcrumb;
