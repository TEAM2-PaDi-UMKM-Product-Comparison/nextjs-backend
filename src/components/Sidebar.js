'use client'; // Tambahkan ini di baris pertama

import React, { useState } from 'react';
import { FaTrashAlt, FaShoppingCart, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Sidebar =  ({ product }) => {
  // State untuk mengontrol pop-up informasi
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }

    if (halfStars) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }

    return stars;
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-xs flex flex-col justify-between">
      {/* Responsive Image */}
      
     <div className="p-4 text-left flex flex-col  ">

     <div 
  className="w-full h-60 flex items-start  sm:h-48 lg:h-60"
>
  <span className="text-lg font-semibold pt-4">Bandingkan Produk</span>
</div>


  {/* Ensure the title section has a flexible but constrained height */}
            <div className="flex flex-col justify-between" style={{ minHeight: '100px', maxHeight: '150px', overflowY: 'hidden' }}>
              <h2 className="text-lg font-semibold" style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
             
              </h2>
            </div>

            <div className="flex items-center justify-between mt-4 invisible">
              <button className="flex items-center justify-center bg-white text-teal-500 border border-teal-500 rounded-md p-2 hover:bg-teal-500 hover:text-white transition">
                <FaTrashAlt className="mr-2" />
              </button>
              <button className="flex items-center justify-center bg-teal-500 text-white rounded-md p-2 hover:bg-teal-600 transition">
                <FaShoppingCart className="mr-2" /> Keranjang
              </button>
            </div>

            {/* Horizontal Line */}
            <hr className="my-3 border-gray-300" />



        <div className="grid grid-cols-1 gap-2 mt-4 text-sm text-gray-600 flex-grow">
          <div className="flex justify-between">
          <span className="font-semibold">Harga:</span>
          </div>
          <div className="flex justify-between">
          <span className="font-semibold">Dikirim dari:</span>
          </div>
          <div className="flex justify-between">
          <span className="font-semibold">Rating:</span>
          </div>
          <div className="flex justify-between">
          <span className="font-semibold">Terjual:</span>
          </div>
          <div className="flex justify-between">
          <span className="font-semibold">Pajak:</span>
          </div>
          <div className="flex justify-between">
          <span className="font-semibold">TKDN:</span>
          </div>

          <hr className="my-3 border-gray-300 w-full" />

          <div className="flex justify-between">
          <span className="font-semibold">Stok:</span>
          </div>
          <div className="flex justify-between">
          <span className="font-semibold">Kategori:</span>
          </div>
          <div className="flex justify-between">
          <span className="font-semibold">Brand:</span>
          </div>
          <div className="flex justify-between">
          <span className="font-semibold">Min Pembelian:</span>
          </div>
          <div className="flex justify-between">
          <span className="font-semibold">Berat Satuan:</span>
          </div>
          <div className="flex justify-between">
          <span className="font-semibold">Dimensi Ukuran:</span>
          </div>

          <hr className="my-3 border-gray-300 w-full" />

          <div className="flex justify-between">
          <span className="font-semibold">Penjual:</span>
          </div>
          <div className="flex justify-between">
          <span className="font-semibold">Pajak:</span>
          </div>
          <div className="flex justify-between">
          <span className="font-semibold">BUMN Pengampu:</span>
          </div>
          <div className="flex justify-between">
          <span className="font-semibold">Rating & Ulasan:</span>
          </div>
          <div className="flex justify-between">
          <span className="font-semibold">Total Penjualan:</span>
          </div>

          <hr className="my-3 border-gray-300 w-full" />
          
          <div className="flex justify-between">
          <span className="font-semibold">Deskripsi:</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

