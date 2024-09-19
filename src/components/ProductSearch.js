  import React, { useEffect, useState } from 'react';
  import { FaMapMarkerAlt } from 'react-icons/fa';
  import AddToCartModal from './AddToCartModal'; // Mengimpor AddToCartModal

  const ProductSearch = ({ searchQuery, onAddProduct }) => {
    const [products, setProducts] = useState([]); // Menyimpan produk yang didapat dari API
    const [hoveredProduct, setHoveredProduct] = useState(null); // Melacak produk yang di-hover
    const [priceRange, setPriceRange] = useState([5000, 1000000]); // Filter harga
    const [locationFilter, setLocationFilter] = useState(''); // Filter lokasi
    const [ratingFilter, setRatingFilter] = useState(''); // Filter rating
    const [loading, setLoading] = useState(false); // Status loading
    const [error, setError] = useState(null); // Menyimpan pesan error jika ada

    useEffect(() => {
      const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        try {
          // Lakukan permintaan ke API
          const response = await fetch(`https://nestjs-backend-production-f91c.up.railway.app/products/search?keyword=${searchQuery}`);
          if (!response.ok) {
            throw new Error('Terjadi kesalahan saat mengambil data produk');
          }
          const data = await response.json();

          // Filter data berdasarkan rentang harga
          let filteredProducts = data.filter(
            product => {
              // Menghilangkan 'Rp' dan karakter lain dari harga, lalu mengonversi ke angka
              const price = parseInt(product.price.replace(/[^0-9]/g, ''));
              return price >= priceRange[0] && price <= priceRange[1];
            }
          );

          // Filter berdasarkan lokasi (jika data lokasi tersedia)
          if (locationFilter) {
            filteredProducts = filteredProducts.filter(
              product => product.location === locationFilter
            );
          }

          // Filter berdasarkan rating (jika data rating tersedia)
          if (ratingFilter) {
            filteredProducts = filteredProducts.filter(
              product => parseFloat(product.ratings) >= parseFloat(ratingFilter)
            );
          }

          setProducts(filteredProducts);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      if (searchQuery) {
        fetchProducts();
      } else {
        // Jika tidak ada query pencarian, kosongkan daftar produk
        setProducts([]);
      }
    }, [searchQuery, priceRange, locationFilter, ratingFilter]);

      // State untuk pilihan harga
      const [selectedPrice, setSelectedPrice] = useState('');

      // Fungsi untuk mengubah rentang harga pada slider
      const handlePriceChange = (e) => {
        const newPrice = parseInt(e.target.value, 10);
        setPriceRange([newPrice, priceRange[1]]);
      };

      // Fungsi untuk mengubah pilihan harga dari radio button
      const handleSelectedPriceChange = (priceOption) => {
        setSelectedPrice(priceOption);
      };

    return (
      <div className="flex">
        {/* Sidebar untuk menyaring produk */}
        <div className="w-1/4 p-3">
          <h2 className="font-bold mb-4">Sortir Produk</h2>

  {/* Radio Button Pilihan Harga */}
      <div className="mb-6">
          <label className="block text-gray-700">Harga</label>
          <div>
            <label>
              <input
                type="radio"
                name="harga"
                value="termurah"
                checked={selectedPrice === "termurah"}
                onChange={() => handleSelectedPriceChange("termurah")}
                className="mr-2"
              />
              Termurah
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="harga"
                value="termahal"
                checked={selectedPrice === "termahal"}
                onChange={() => handleSelectedPriceChange("termahal")}
                className="mr-2"
              />
              Termahal
            </label>
          </div>
        </div>


          {/* Filter Lokasi */}
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
              {/* Tambahkan lokasi lainnya jika perlu */}
            </select>
          </div>

          {/* Filter Rating */}
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

        {/* Hasil Pencarian Produk */}
        <div className="w-3/4 p-4w-3/4 p-4 max-h-[340px] overflow-y-scroll">
          {loading ? (
            <p>Memuat produk...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : products.length === 0 ? (
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
                  key={product._id}
                  className="bg-white p-4 shadow-md rounded-md"
                  onMouseEnter={() => setHoveredProduct(index)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <img src={product.productImage} alt={product.name} className="h-32 w-full object-cover mb-2" />

                  {/* Judul */}
                  <h3 className="text-sm text-ellipsis overflow-hidden mb-1 leading-tight">
                    {product.name}
                  </h3>

                  {/* Harga */}
                  <p className="text-black-500 font-bold text-lg">{product.price}</p>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-1">
                    <span className="text-yellow-500 text-sm">⭐</span>
                    <p className="text-xs text-gray-600">{product.ratings} / 5 </p>
                  </div>

                  {/* Lokasi (jika tersedia) */}
                  {product.sentFrom && (
                    <div className="flex items-center space-x-1 mb-2">
                      <FaMapMarkerAlt className="text-gray-500" />
                      <p className="text-xs text-gray-600">{product.sentFrom}</p>
                    </div>
                  )}

                  {/* Label PKP atau lainnya (jika ada) */}
                  {product.taxStore && (
                    <div className="flex justify-between items-center mb-2">
                      <span className={`py-1 px-2 text-xs rounded-full ${product.taxStore === 'PKP' ? 'bg-green-100 text-green-600' : 'bg-cyan-100 text-red-600'}`}>
                        {product.taxStore}
                      </span>
                    </div>
                  )}

                  {/* Tombol */}
                  <button
                    className={`w-full py-2 rounded-full text-xs ${product.pkp === 'PKP' ? 'bg-cyan-500 text-white' : 'bg-cyan-100 text-white-600'} hover:bg-teal-500`}
                    onClick={() => onAddProduct(product)}
                  >
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
