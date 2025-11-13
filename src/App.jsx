import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import LoadingSpinner from './components/Loader';
import ErrorDisplay from './components/Error';
import { fetchProducts } from './api/product';

import './styles/variables.css';
import './styles/base.css';
import './styles/header.css';
import './styles/grid.css';
import './styles/product-card.css';
import './App.css';

function useDebounce(value, delay = 300) {
  const [v, setV] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setV(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return v;
}

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 300);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const loadProducts = async () => {
    try {
      setError(null);
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message || 'Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    const search = debouncedSearch.trim().toLowerCase();
    if (!search) return products;
    return products.filter((p) =>
      `${p.title} ${p.description} ${p.category}`.toLowerCase().includes(search)
    );
  }, [products, debouncedSearch]);

  return (
    <div className="app">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="main-content">
        <div className="hero">
          <h2 className="hero-title">Store</h2>
          <p className="hero-subtitle">Buy with web3 wallet!</p>
        </div>

        {debouncedSearch && (
          <div className="results-info">
            <p>{filteredProducts.length} results found for &ldquo;{debouncedSearch}&rdquo;</p>
          </div>
        )}

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorDisplay message={error} onRetry={loadProducts} />
        ) : (
          <ProductGrid products={filteredProducts} onViewDetails={setSelectedProduct} />
        )}
      </main>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
}
