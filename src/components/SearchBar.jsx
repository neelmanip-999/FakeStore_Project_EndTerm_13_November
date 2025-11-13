import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  const [local, setLocal] = useState(searchQuery);

  useEffect(() => {
    setLocal(searchQuery);
  }, [searchQuery]);

  return (
    <div className="search-container">
      <Search size={18} className="search-icon" />
      <input
        type="text"
        placeholder="Search products..."
        value={local}
        onChange={(e) => {
          setLocal(e.target.value);
          setSearchQuery(e.target.value);
        }}
        className="search-input"
      />
      {local && (
        <button
          onClick={() => {
            setLocal('');
            setSearchQuery('');
          }}
          className="clear-btn"
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
