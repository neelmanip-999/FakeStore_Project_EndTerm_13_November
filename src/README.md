# FakeStore - Web3 Shopping Cart (Vite + React)

## Quick start

1. Install dependencies:
```
npm install
```

2. Run dev server:
```
npm run dev
```

Open http://localhost:5173

## Where to change API URL
Edit `src/api/product.js` and change the fetch URL.

## Project structure
- src/
  - api/product.js
  - components/
    - Header.jsx
    - SearchBar.jsx
    - ProductGrid.jsx
    - ProductCard.jsx
    - ProductModal.jsx
    - Loader.jsx
    - Error.jsx
  - styles/
    - variables.css
    - base.css
    - header.css
    - grid.css
    - product-card.css
  - App.jsx
  - main.jsx

## Features
- Fetches live data from https://fakestoreapi.com/products
- Debounced search (300ms)
- Responsive grid and modal details
- Loader and error states
- Accessible markup: alt text, keyboard focus, close modal on Esc
