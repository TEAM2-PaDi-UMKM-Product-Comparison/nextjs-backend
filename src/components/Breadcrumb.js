// src/components/Breadcrumb.js
import React from 'react';
import { FaPrint } from 'react-icons/fa';  // Import icon print

const Breadcrumb = () => {
  return (
    <nav className="bg-white p-10 flex justify-between items-center">
      {/* Breadcrumb Navigation */}
      <ul className="flex space-x-3 text-sm text-gray-600">
        <li>Beranda</li>
        <li>&gt;</li>
        <li className="font-semibold">Bandingkan Produk</li>
      </ul>

      {/* Tombol Cetak Perbandingan */}
      <button 
        onClick={() => window.print()}  // Fungsi cetak
        className="flex items-center space-x-1 border border-teal-400 text-teal-600 bg-white px-4 py-2 rounded-full transition hover:bg-teal-500 hover:text-white no-print" // Tambahkan kelas no-print agar tidak muncul saat cetak
      >
        <FaPrint className="text-teal-600" />
        <span className="font-semibold">Cetak Perbandingan</span>
      </button>

      {/* Tombol URL ke halaman perbandingan (hanya muncul saat cetak) */}
      <div className="print-only absolute top-24 left-50 text-black-500">
        <span className="underline cursor-pointer" onClick={() => window.location.href='/halaman-pembanding'}>
          Halaman Perbandingan Produk
        </span>
      </div>
    </nav>
  );
};

export default Breadcrumb;
