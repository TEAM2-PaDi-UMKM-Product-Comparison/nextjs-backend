// src/components/Breadcrumb.js
import React from 'react';
import { FaPrint } from 'react-icons/fa';  // Import the print icon (adjust if needed)

const Breadcrumb = () => {
  return (
    <nav className="bg-white p-10 flex justify-between items-center">
      {/* Breadcrumb Navigation */}
      <ul className="flex space-x-3 text-sm text-gray-600">
        <li>Beranda</li>
        <li>&gt;</li>
        <li className="font-semibold">Bandingkan Produk</li>
      </ul>

      {/* Cetak Perbandingan Button */}
      <button className="flex items-center space-x-1 border border-teal-400 text-teal-600 bg-white px-4 py-2 rounded-full transition hover:bg-teal-500 hover:text-white">
        <FaPrint className="text-teal-600" /> {/* Ikon printer dengan warna teal */}
          <span className="font-semibold">Cetak Perbandingan</span> {/* Teks dengan font yang lebih tebal */}
      </button>

    </nav>
  );
};

export default Breadcrumb;
