import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import SearchModal from '../components/SearchModal';
import AddToCartModal from '../components/AddToCartModal';
import ProductComparisonPopup from '../components/ProductComparisonPopup';  // Import the ProductComparisonPopup
import '../app/globals.css';

const HomePage = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);  // State for search modal
  const [cart, setCart] = useState([]);  // Cart state
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);  // State for add to cart modal
  const [selectedProduct, setSelectedProduct] = useState(null);  // Selected product state
  const [quantity, setQuantity] = useState(0);  // Quantity state for selected product
  const [isComparisonPopupOpen, setIsComparisonPopupOpen] = useState(false);  // State for comparison popup
  const [products, setProducts] = useState([]);  // State to store products from API
  const [loading, setLoading] = useState(true);  // Loading state

  // Function to handle opening Add to Cart modal
  const openAddToCartModal = (product) => {
    if (isSearchOpen) {
      setIsSearchOpen(false);
    }
    setSelectedProduct(product);
    setQuantity(1);  // Set default quantity to 1
    setShowAddToCartModal(true);  // Open add to cart modal
  };

  // Function to handle closing Add to Cart modal
  const closeAddToCartModal = () => {
    setShowAddToCartModal(false);  // Close add to cart modal
    setSelectedProduct(null);  // Reset selected product
    setQuantity(0);  // Reset quantity
  };

  // Function to handle adding product to cart
  const handleAddToCart = (product, quantity) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }

    closeAddToCartModal();  // Close modal after adding product to cart
  };

  // Function to handle opening search modal
  const handleSearchClick = () => {
    if (showAddToCartModal) {
      setShowAddToCartModal(false);
    }
    setIsSearchOpen(true);  // Open search modal
  };

  // Function to handle closing search modal
  const closeSearch = () => {
    setIsSearchOpen(false);  // Close search modal
  };

  // Function to toggle the product comparison popup
  const toggleComparisonPopup = () => {
    setIsComparisonPopupOpen(!isComparisonPopupOpen);
  };

  // Fetch products from API when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://nestjs-backend-production-f91c.up.railway.app/products/search?keyword=${searchQuery}');  // Replace with your API endpoint
        const data = await response.json();
        setProducts(data);  // Set products state with API response
        setLoading(false);  // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);  // Set loading to false even if there is an error
      }
    };

    fetchProducts();  // Call the API function
  }, []);

  return (
    <>
      {/* Header */}
      <Header onSearchClick={handleSearchClick} />
      
      {/* Breadcrumb */}
      <Breadcrumb onCompareClick={toggleComparisonPopup} /> {/* Trigger comparison popup from breadcrumb */}
      
      {/* Main Content */}
      <main className="bg-gray-50 min-h-screen p-6">
        <div className="grid grid-cols-4 gap-6">
          <Sidebar />
          <div className="col-span-1">
            <ProductList onAddToCart={openAddToCartModal} />
          </div>
          <div className="col-span-1">
            <ProductList onAddToCart={openAddToCartModal} />
          </div>
          <div className="col-span-1">
            <ProductList onAddToCart={openAddToCartModal} />
          </div>
        </div>
      </main>

        {/* Search Modal */}
        {isSearchOpen && (
                <SearchModal onClose={closeSearch} />
              )}

              {/* Add to Cart Modal */}
              {showAddToCartModal && selectedProduct && (
                <AddToCartModal
                  open={showAddToCartModal}
                  handleClose={closeAddToCartModal}
                  product={selectedProduct}
                  onAddToCart={handleAddToCart}
                />
              )}

              {/* Product Comparison Popup */}
              {isComparisonPopupOpen && (
                <ProductComparisonPopup 
                  products={products}  // Pass API data to the popup
                  onClose={toggleComparisonPopup}  // Close popup function
                />
              )}
            </>
          );
        };

        export default HomePage;