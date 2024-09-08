import React, { useState } from 'react';
import ProductCard from './ProductCard';
import AddToCartModal from './AddToCartModal';
import { products } from '../constants/products'; 

const ProductList = () => {
  const [cartItems, setCartItems] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setSelectedProduct(product);
    setPopupVisible(true);
  };

  const handleClose = () => {
    setPopupVisible(false);
    setSelectedProduct(null);
  };

  const bestProduct = products.reduce((best, product) => {
    if (!best) return product;
    return product.rating > best.rating || (product.rating === best.rating && product.price < best.price) ? product : best;
  }, null);

  return (
    <div className="col-span-3 grid grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          isBestProduct={product.id === bestProduct.id}
          onAddToCart={handleAddToCart}
        />
      ))}
      <AddToCartModal open={popupVisible} handleClose={handleClose} product={selectedProduct} />
    </div>
  );
};

export default ProductList;
