import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import icon for location
import { products as allProducts } from '../constants/products'; // Import data produk dari constants/products.js

const ProductSearch = ({ searchQuery, onAddProduct }) => {
  const [products, setProducts] = useState([]); // Store filtered products
  const [hoveredProduct, setHoveredProduct] = useState(null); // Track hovered product
  const [priceRange, setPriceRange] = useState([5000, 1000000]); // Price filter
  const [locationFilter, setLocationFilter] = useState(''); // Location filter
  const [ratingFilter, setRatingFilter] = useState(''); // Rating filter

  // Menggunakan data yang diimpor dari products.js
  useEffect(() => {
    let filteredProducts = allProducts;

    // Filter by search query
    if (searchQuery) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by price range
    filteredProducts = filteredProducts.filter(
      product => parseInt(product.price.replace('.', '')) >= priceRange[0] && parseInt(product.price.replace('.', '')) <= priceRange[1]
    );

    // Filter by location
    if (locationFilter) {
      filteredProducts = filteredProducts.filter(
        product => product.location === locationFilter
      );
    }

    // Filter by rating
    if (ratingFilter) {
      filteredProducts = filteredProducts.filter(
        product => product.rating >= ratingFilter
      );
    }

    setProducts(filteredProducts);
  }, [searchQuery, priceRange, locationFilter, ratingFilter]); // Re-run the effect when filters change

  // Handle slider change
  const handlePriceChange = (e) => {
    const newRange = [...priceRange];
    newRange[0] = e.target.value;
    setPriceRange(newRange);
  };

  return (
    <div className="flex">
      {/* Sidebar for filtering products */}
      <div className="w-1/4 p-3">
        <h2 className="font-bold mb-4">Sortir Produk</h2>
        
        {/* Price Range Slider */}
        <div className="mb-4">
          <label className="block text-gray-700">Harga</label>
          <input
            type="range"
            min="5000"
            max="1000000"
            value={priceRange[0]}
            onChange={handlePriceChange}
            className="w-full"
          />
          <p>{`Rp${priceRange[0]} - Rp${priceRange[1]}`}</p>
        </div>

        {/* Location Filter */}
        <div className="mb-4">
          <label className="block text-gray-700">Dikirim dari</label>
          <select
            value={locationFilter}
            onChange={e => setLocationFilter(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="">Semua Lokasi</option>
            <option value="Kota Surabaya">Kota Surabaya</option>
            <option value="Jakarta Timur">Jakarta Timur</option>
            <option value="Bandung">Bandung</option>
            {/* Add more locations as needed */}
          </select>
        </div>

        {/* Rating Filter */}
        <div className="mb-4">
          <label className="block text-gray-700">Rating</label>
          <select
            value={ratingFilter}
            onChange={e => setRatingFilter(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="">Pilih Rating</option>
            <option value="4">4 ke atas</option>
            <option value="3">3 ke atas</option>
            <option value="2">2 ke atas</option>
            <option value="1">1 ke atas</option>
          </select>
        </div>
      </div>

      {/* Product Search Results */}
      <div className="w-3/4 p-4">
        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64">
            <img src="/icons/middle pic.png" alt="No Products" className="h-24 w-24 mb-4" />
            <p className="text-gray-500 text-lg mb-2">Belum Ada Produk</p>
            <p className="text-gray-400 text-sm text-center">
              Silahkan cari produk di kolom pencarian dengan menuliskan nama produk yang ingin dicari
            </p>
          </div>
        ) : (
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-3">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="bg-white p-4 shadow-md rounded-md"
                onMouseEnter={() => setHoveredProduct(index)} // Track mouse enter
                onMouseLeave={() => setHoveredProduct(null)}  // Track mouse leave
              >
                <img src={product.image} alt={product.title} className="h-32 w-full object-cover mb-2" />
                
                {/* Title */}
                <h3 className=" text-sm text-ellipsis overflow-hidden mb-1 leading-tight">
                  {product.title}
                </h3>
                
                {/* Price */}
                <p className="text-black-500 font-bold text-lg">Rp.{product.price}</p>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-1">
                  <span className="text-yellow-500 text-sm">⭐</span>
                  <p className="text-xs text-gray-600">{product.rating} / 5</p>
                </div>
                
                {/* Location */}
                <div className="flex items-center space-x-1 mb-2">
                  <FaMapMarkerAlt className="text-gray-500" /> {/* Replaced with location icon */}
                  <p className="text-xs text-gray-600">{product.location}</p>
                </div>
                
                {/* PKP Label */}
                <div className="flex justify-between items-center mb-2">
                  <span className={`py-1 px-2 text-xs rounded-full ${product.pkp === 'PKP' ? 'bg-green-100 text-green-600' : 'bg-cyan-100 text-red-600'}`}>
                    {product.pkp}
                  </span>
                </div>
                
                {/* Button */}
                <button className={`w-full py-2 rounded-full text-xs ${product.pkp === 'PKP' ? 'bg-cyan-500 text-white' : 'bg-cyan-100 text-white-600'} hover:bg-teal-500`} 
                        onClick={() => onAddProduct(product)} // Trigger the onAddProduct callback when clicked
                  >
                  {/* Change text on hover */}
                  {hoveredProduct === index ? 'Bandingkan Produk' : 'Tambahkan'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
