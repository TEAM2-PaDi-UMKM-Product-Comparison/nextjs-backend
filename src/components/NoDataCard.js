// src/components/NoDataCard.js

import React from 'react';
import { FaSearch } from 'react-icons/fa';

const NoDataCard = ({ onOpenSearchModal }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full p-4">
      <table className="min-w-full text-center">
        <tbody>
          <tr>
            <td className="py-4 px-6 border-b">
              <div className="flex flex-col items-center border-gray-300 justify-center h-80">
                <div 
                  className="flex items-center justify-center border border-gray-300 rounded-full px-4 py-2 shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200"
                  onClick={onOpenSearchModal}  // Use the passed onOpenSearchModal
                >
                  <FaSearch className="text-cyan-500 mr-2" />
                  <span className="text-cyan-500 font-medium">Cari Produk</span>
                </div>
              </div>
            </td>   
          </tr>

          <tr>
              <td className="py-4 px-4 border-b">
                <div className="flex flex-col items-center justify-center h-44">
                </div>
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 border-b">
                <div className="flex flex-col items-center justify-center h-44">
                </div>
              </td>
            </tr>

            <tr>
              <td className="py-2 px-4 border-b">
                <div className="flex flex-col items-center justify-center h-32">
                </div>
              </td>
            </tr>
            
        </tbody>
      </table>
    </div>
  );
};

export default NoDataCard;
