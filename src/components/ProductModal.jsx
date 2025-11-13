import React, { useEffect } from 'react';
import { X, Star } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close" aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-body">
          <div className="modal-image-container">
            <img src={product.image} alt={product.title} className="modal-image" />
          </div>

          <div className="modal-info">
            <span className="modal-category">{product.category}</span>
            <h2 className="modal-title">{product.title}</h2>

            <div className="modal-rating">
              <Star size={20} fill="#fbbf24" stroke="#fbbf24" />
              <span>{product.rating?.rate ?? 'N/A'}</span>
              <span className="rating-count">({product.rating?.count ?? 0} reviews)</span>
            </div>

            <p className="modal-price">${product.price.toFixed(2)} USD</p>

            <p className="modal-description">{product.description}</p>

            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
