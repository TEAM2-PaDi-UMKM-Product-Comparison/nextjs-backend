'use client'; // Tambahkan ini di baris pertama

import React, { useState } from 'react';

const Sidebar = () => {
  // State untuk mengontrol pop-up informasi
  const [tooltip, setTooltip] = useState(null);
  const [priceRange, setPriceRange] = useState([5000, 1000000]);

  // State untuk select options
  const [filters, setFilters] = useState({
    location: '',
    stock: '',
    category: '',
    brand: '',
    minPurchase: '',
    weight: '',
    dimension: '',
    seller: '',
    tax: '',
    bumn: ''
  });

  // Fungsi untuk menampilkan atau menyembunyikan tooltip
  const toggleTooltip = (index) => {
    setTooltip(tooltip === index ? null : index);
  };

  // Fungsi untuk handle perubahan select options
  const handleSelectChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handlePriceChange = (e) => {
    const newRange = [parseInt(e.target.value[0]), parseInt(e.target.value[1])];
    setPriceRange(newRange);
  };

  return (
    <aside className="col-span-1 bg-white p-4 shadow-md rounded-lg relative">
      <h2 className="text-lg font-semibold mb-4">Bandingkan Produk</h2>
      <div className="space-y-4">
        {/* Filter Harga */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Harga
            <span
              className="ml-1 cursor-pointer text-blue-500"
              onMouseEnter={() => toggleTooltip(0)}
              onMouseLeave={() => toggleTooltip(null)}
            >
              ℹ️
            </span>
          </label>
          {tooltip === 0 && (
            <div className="absolute bg-gray-200 text-gray-800 p-2 rounded shadow-lg mt-1 text-xs w-56">
              Rentang harga produk yang ingin Anda cari.
            </div>
          )}
          <input
            type="range"
            className="w-full"
            min={5000}
            max={1000000}
            value={priceRange}
            onChange={handlePriceChange}
          />
          <div className="text-sm mt-2">
            Rp {priceRange[0]} - Rp {priceRange[1]}
          </div>
        </div>

        {/* Filter Dikirim dari */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Dikirim dari
            <span
              className="ml-1 cursor-pointer text-blue-500"
              onMouseEnter={() => toggleTooltip(1)}
              onMouseLeave={() => toggleTooltip(null)}
            >
              ℹ️
            </span>
          </label>
          {tooltip === 1 && (
            <div className="absolute bg-gray-200 text-gray-800 p-2 rounded shadow-lg mt-1 text-xs w-56">
              Lokasi pengiriman produk.
            </div>
          )}
          <select
            name="location"
            className="w-full p-2 mt-2 border rounded-md"
            value={filters.location}
            onChange={handleSelectChange}
          >
            <option value="">Pilih Lokasi</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Bandung">Bandung</option>
            <option value="Surabaya">Surabaya</option>
            {/* Tambahkan opsi lain sesuai kebutuhan */}
          </select>
        </div>

        {/* Filter Stok */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Stok
            <span
              className="ml-1 cursor-pointer text-blue-500"
              onMouseEnter={() => toggleTooltip(2)}
              onMouseLeave={() => toggleTooltip(null)}
            >
              ℹ️
            </span>
          </label>
          {tooltip === 2 && (
            <div className="absolute bg-gray-200 text-gray-800 p-2 rounded shadow-lg mt-1 text-xs w-56">
              Jumlah produk yang tersedia di gudang.
            </div>
          )}
          <select
            name="stock"
            className="w-full p-2 mt-2 border rounded-md"
            value={filters.stock}
            onChange={handleSelectChange}
          >
            <option value="">Pilih Stok</option>
            <option value="5"> 5 pack</option>
            <option value="10"> 10 pack</option>
            <option value="20"> 20 pack</option>
            {/* Tambahkan opsi lain sesuai kebutuhan */}
          </select>
        </div>

        {/* Filter Kategori */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Kategori
            <span
              className="ml-1 cursor-pointer text-blue-500"
              onMouseEnter={() => toggleTooltip(3)}
              onMouseLeave={() => toggleTooltip(null)}
            >
              ℹ️
            </span>
          </label>
          {tooltip === 3 && (
            <div className="absolute bg-gray-200 text-gray-800 p-2 rounded shadow-lg mt-1 text-xs w-56">
              Kategori produk yang sesuai.
            </div>
          )}
          <select
            name="category"
            className="w-full p-2 mt-2 border rounded-md"
            value={filters.category}
            onChange={handleSelectChange}
          >
            <option value="">Pilih Kategori</option>
            <option value="Elektronik">Elektronik</option>
            <option value="Pakaian">Pakaian</option>
            <option value="Makanan">Makanan</option>
            {/* Tambahkan opsi lain sesuai kebutuhan */}
          </select>
        </div>

        {/* Filter Brand */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Brand
            <span
              className="ml-1 cursor-pointer text-blue-500"
              onMouseEnter={() => toggleTooltip(4)}
              onMouseLeave={() => toggleTooltip(null)}
            >
              ℹ️
            </span>
          </label>
          {tooltip === 4 && (
            <div className="absolute bg-gray-200 text-gray-800 p-2 rounded shadow-lg mt-1 text-xs w-56">
              Merek produk yang ingin dicari.
            </div>
          )}
          <select
            name="brand"
            className="w-full p-2 mt-2 border rounded-md"
            value={filters.brand}
            onChange={handleSelectChange}
          >
            <option value="">Pilih Brand</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Sony">Sony</option>
            {/* Tambahkan opsi lain sesuai kebutuhan */}
          </select>
        </div>

        {/* Filter Minimum Pembelian */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Min Pembelian
            <span
              className="ml-1 cursor-pointer text-blue-500"
              onMouseEnter={() => toggleTooltip(5)}
              onMouseLeave={() => toggleTooltip(null)}
            >
              ℹ️
            </span>
          </label>
          {tooltip === 5 && (
            <div className="absolute bg-gray-200 text-gray-800 p-2 rounded shadow-lg mt-1 text-xs w-56">
              Jumlah minimum pembelian produk.
            </div>
          )}
          <select
            name="minPurchase"
            className="w-full p-2 mt-2 border rounded-md"
            value={filters.minPurchase}
            onChange={handleSelectChange}
          >
            <option value="">Pilih Min Pembelian</option>
            <option value="1">1 unit</option>
            <option value="5">5 unit</option>
            <option value="10">10 unit</option>
            {/* Tambahkan opsi lain sesuai kebutuhan */}
          </select>
        </div>

        {/* Filter Berat Satuan */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Berat Satuan
            <span
              className="ml-1 cursor-pointer text-blue-500"
              onMouseEnter={() => toggleTooltip(6)}
              onMouseLeave={() => toggleTooltip(null)}
            >
              ℹ️
            </span>
          </label>
          {tooltip === 6 && (
            <div className="absolute bg-gray-200 text-gray-800 p-2 rounded shadow-lg mt-1 text-xs w-56">
              Berat satuan dari produk.
            </div>
          )}
          <select
            name="weight"
            className="w-full p-2 mt-2 border rounded-md"
            value={filters.weight}
            onChange={handleSelectChange}
          >
            <option value="">Pilih Berat</option>
            <option value="500g">500g</option>
            <option value="1kg">1kg</option>
            <option value="5kg">5kg</option>
            {/* Tambahkan opsi lain sesuai kebutuhan */}
          </select>
        </div>

        {/* Filter Dimensi Ukuran */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Dimensi Ukuran
            <span
              className="ml-1 cursor-pointer text-blue-500"
              onMouseEnter={() => toggleTooltip(7)}
              onMouseLeave={() => toggleTooltip(null)}
            >
              ℹ️
            </span>
          </label>
          {tooltip === 7 && (
            <div className="absolute bg-gray-200 text-gray-800 p-2 rounded shadow-lg mt-1 text-xs w-56">
              Ukuran dimensi produk.
            </div>
          )}
          <select
            name="dimension"
            className="w-full p-2 mt-2 border rounded-md"
            value={filters.dimension}
            onChange={handleSelectChange}
          >
            <option value="">Pilih Dimensi</option>
            <option value="small">Kecil</option>
            <option value="medium">Sedang</option>
            <option value="large">Besar</option>
            {/* Tambahkan opsi lain sesuai kebutuhan */}
          </select>
        </div>

        {/* Filter Seller */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Seller
            <span
              className="ml-1 cursor-pointer text-blue-500"
              onMouseEnter={() => toggleTooltip(8)}
              onMouseLeave={() => toggleTooltip(null)}
            >
              ℹ️
            </span>
          </label>
          {tooltip === 8 && (
            <div className="absolute bg-gray-200 text-gray-800 p-2 rounded shadow-lg mt-1 text-xs w-56">
              Penjual produk yang ingin dicari.
            </div>
          )}
          <select
            name="seller"
            className="w-full p-2 mt-2 border rounded-md"
            value={filters.seller}
            onChange={handleSelectChange}
          >
            <option value="">Pilih Seller</option>
            <option value="official">Official</option>
            <option value="reseller">Reseller</option>
            <option value="umkm">UMKM</option>
            {/* Tambahkan opsi lain sesuai kebutuhan */}
          </select>
        </div>

        {/* Filter Pajak */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pajak
            <span
              className="ml-1 cursor-pointer text-blue-500"
              onMouseEnter={() => toggleTooltip(9)}
              onMouseLeave={() => toggleTooltip(null)}
            >
              ℹ️
            </span>
          </label>
          {tooltip === 9 && (
            <div className="absolute bg-gray-200 text-gray-800 p-2 rounded shadow-lg mt-1 text-xs w-56">
              Produk dengan pajak atau bebas pajak.
            </div>
          )}
          <select
            name="tax"
            className="w-full p-2 mt-2 border rounded-md"
            value={filters.tax}
            onChange={handleSelectChange}
          >
            <option value="">Pilih Pajak</option>
            <option value="tax">Dengan Pajak</option>
            <option value="noTax">Tanpa Pajak</option>
            {/* Tambahkan opsi lain sesuai kebutuhan */}
          </select>
        </div>

        {/* Filter BUMN */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            BUMN
            <span
              className="ml-1 cursor-pointer text-blue-500"
              onMouseEnter={() => toggleTooltip(10)}
              onMouseLeave={() => toggleTooltip(null)}
            >
              ℹ️
            </span>
          </label>
          {tooltip === 10 && (
            <div className="absolute bg-gray-200 text-gray-800 p-2 rounded shadow-lg mt-1 text-xs w-56">
              Produk yang dijual oleh BUMN.
            </div>
          )}
          <select
            name="bumn"
            className="w-full p-2 mt-2 border rounded-md"
            value={filters.bumn}
            onChange={handleSelectChange}
          >
            <option value="">Pilih BUMN</option>
            <option value="yes">Ya</option>
            <option value="no">Tidak</option>
            {/* Tambahkan opsi lain sesuai kebutuhan */}
          </select>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;