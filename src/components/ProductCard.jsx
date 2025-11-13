import React from 'react';
import { Star } from 'lucide-react';

export default function ProductCard({ product, onViewDetails }) {
  const truncate = (s, n) => (s?.length > n ? s.slice(0, n) + '...' : s);

  return (
    <article className="product-card" tabIndex={0} aria-label={product.title}>
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>

      <div className="product-info">
        <h3 className="product-title" title={product.title}>
          {truncate(product.title, 60)}
        </h3>

        <p className="product-category">{product.category}</p>

        <p className="product-description">{truncate(product.description, 100)}</p>

        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)} USD</span>
          <div className="product-rating">
            <Star size={16} fill="#fbbf24" stroke="#fbbf24" />
            <span>{product.rating?.rate ?? 'N/A'}</span>
          </div>
        </div>

        <button className="view-details-btn" onClick={() => onViewDetails(product)}>
          View Details
        </button>
      </div>
    </article>
  );
}
