import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onViewDetails }) {
  if (!products.length) {
    return (
      <div className="no-results">
        <h2>No products found</h2>
        <p>Try adjusting your search terms</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
}
