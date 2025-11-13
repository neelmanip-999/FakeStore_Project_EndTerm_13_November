import React from 'react';
import { ShoppingCart } from 'lucide-react';
import SearchBar from './SearchBar';

export default function Header({ searchQuery, setSearchQuery }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <ShoppingCart size={24} />
          <h1 className="site-title">Web3 Shopping Cart</h1>
        </div>

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
    </header>
  );
}
