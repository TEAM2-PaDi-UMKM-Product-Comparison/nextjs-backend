import React from 'react';
import { FaTrashAlt, FaShoppingCart, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ProductCard = ({ product }) => {
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
      
      <div className="p-4 text-left flex flex-col ">

        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-60 object-cover sm:h-50 lg:h-60"
        />

        {/* Ensure the title section has a flexible but constrained height */}
        <div className="flex flex-col justify-between" style={{ minHeight: '100px', maxHeight: '150px', overflowY: 'hidden' }}>
          <h2 className="text-lg font-semibold" style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {product.title}
          </h2>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button className="flex items-center justify-center bg-white text-teal-500 border border-teal-500 rounded-md p-2 hover:bg-teal-500 hover:text-white transition">
            <FaTrashAlt className="mr-2" />
          </button>
          <button className="flex items-center justify-center bg-teal-500 text-white rounded-md p-2 hover:bg-teal-600 transition">
            <FaShoppingCart className="mr-2" /> Keranjang
          </button>
        </div>

        {/* Horizontal Line */}
        <hr className="my-3 border-gray-300" />

        {/* Product Information */}
        <div className="grid grid-cols-1 gap-2 mt-4 text-sm text-gray-600 flex-grow">
          <div className="flex justify-between">
            <span>Rp {product.price}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.location}</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              {renderStars(product.rating)}
              <span>{product.rating}</span>
            </div>
          </div>
          <div className="flex justify-between">
            <span>{product.sold}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.taxes}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.tkdn}</span>
          </div>

          <hr className="my-3 border-gray-300 w-full" />

          <div className="flex justify-between">
            <span>{product.stock}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.category}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.brand}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.minPurchase}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.unitWeight}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.sizeDimensions}</span>
          </div>

          <hr className="my-3 border-gray-300 w-full" />

          <div className="flex justify-between">
            <span>{product.seller}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.taxes}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.bumn}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.reviews}</span>
          </div>
          <div className="flex justify-between">
            <span>{product.totalSales}</span>
          </div>

          <hr className="my-3 border-gray-300 w-full" />

          <div className="flex justify-between">
            <span>{product.description}</span>
          </div>

          <div className="flex items-center justify-between mt-4">
          <button className="flex items-center justify-center bg-white text-teal-500 border border-teal-500 rounded-md p-2 hover:bg-teal-500 hover:text-white transition">
            <FaTrashAlt className="mr-2" />
          </button>
          <button className="flex items-center justify-center bg-teal-500 text-white rounded-md p-2 hover:bg-teal-600 transition">
            <FaShoppingCart className="mr-2" /> Keranjang
          </button>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
