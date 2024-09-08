import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../constants/products'; // Assuming products are imported

const ProductList = () => {
  // Find the product with the highest rating and lowest price
  const bestProduct = products.reduce((best, product) => {
    if (!best) return product;
    if (product.rating > best.rating || (product.rating === best.rating && product.price < best.price)) {
      return product;
    }
    return best;
  }, null);

  return (
    <div className="col-span-3 grid grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          isBestProduct={product.id === bestProduct.id} // Only pass true for the best product
        />
      ))}
    </div>
  );
};

export default ProductList;
