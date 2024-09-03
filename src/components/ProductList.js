import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../constants/products';

const ProductList = () => {
  return (
    <div className="col-span-3 grid grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
