import React from 'react';
import { Loader } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="loader-container">
      <Loader size={48} className="spinner" />
      <p>Loading products...</p>
    </div>
  );
}
