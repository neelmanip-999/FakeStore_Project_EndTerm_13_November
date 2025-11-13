import React from 'react';

export default function ErrorDisplay({ message, onRetry }) {
  return (
    <div className="error-container">
      <h2>Oops! Something went wrong</h2>
      <p>{message}</p>
      <button onClick={onRetry} className="retry-btn">
        Try Again
      </button>
    </div>
  );
}
