# 🛒 FakeStore Web3 Shopping Cart

A **modern, responsive, high-performance React app** that fetches real product data from the **FakeStore API**, displays it in a clean product grid, supports **live search**, and shows detailed product information in a modal — all with smooth UI/UX, accessibility, and clean component architecture.

This project is built using **Vite + React**, follows a **modular folder structure**, and uses **CSS** for styling (no frameworks).

---

## 🚀 Live Features Demo

✔ Fetch products from **[https://fakestoreapi.com/products](https://fakestoreapi.com/products)**
✔ Product grid with responsive breakpoints
✔ Real-time **search** with **debounce (300ms)**
✔ Beautiful **Product Cards** with image, title, price, rating
✔ Fully responsive on **Mobile / Tablet / Desktop**
✔ Smooth **modal** for product details
✔ Loader state + Error state
✔ Clean code structure (components, hooks, API layer)
✔ Keyboard accessible (Esc closes modal)
✔ UI matches modern e-commerce layout standards

---

# 📸 Screenshots

> *(Add your own screenshots here once you run the app)*

```
/screenshots
  ├── homepage.png
  ├── search.png
  └── modal.png
```

---

# 🧠 Tech Stack

* ⚡ **Vite** — Ultra fast bundler & dev server
* ⚛ **React 18** — UI library
* 🎨 **Vanilla CSS** — Fully customized, no frameworks
* 🧩 **Lucide Icons** — Clean SVG icon components
* 🌐 **FakeStore API** — Free public product API

---

# 📂 Folder Structure

```
fake-store/
│
├── index.html
├── package.json
├── vite.config.js
│
├── public/
│
└── src/
    ├── api/
    │   └── product.js
    │
    ├── components/
    │   ├── Header.jsx
    │   ├── SearchBar.jsx
    │   ├── ProductGrid.jsx
    │   ├── ProductCard.jsx
    │   ├── ProductModal.jsx
    │   ├── Loader.jsx
    │   └── Error.jsx
    │
    ├── styles/
    │   ├── variables.css
    │   ├── base.css
    │   ├── header.css
    │   ├── product-card.css
    │   └── grid.css
    │
    ├── App.jsx
    ├── App.css
    ├── main.jsx
    └── index.css
```

---

# 📝 Features Explained

### 🔍 **1. Live Search (Debounced)**

Typing in the search bar filters products by:

* title
* description
* category

Search is debounced by **300ms**, preventing unnecessary re-renders.

---

### 🧃 **2. Product Cards**

Each card displays:

* Product Image
* Title (truncated)
* Category
* Description (truncated)
* Price (formatted in USD)
* Rating
* View Details button

Includes hover effects + shadow transitions.

---

### 🪟 **3. Product Modal**

Opens with full product details:

* Large image
* Title
* Rating + Reviews count
* Full description
* Price
* “Add to Cart” button (dummy UI)

Modal:

* closes on overlay click
* closes on **Esc key**
* disables page scrolling while open

---

### 📡 **4. API Layer**

All requests are managed in:

```
src/api/product.js
```

Easy to switch API anytime.

---

### 🎯 **5. Robust States**

* **Loading** → shows spinner
* **Error** → retries fetch
* **No results** → clean message

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the repo

```sh
git clone https://github.com/yourusername/fake-store.git
cd fake-store
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Start the development server

```sh
npm run dev
```

Vite will start the server at:

👉 [http://localhost:5173](http://localhost:5173)

---

# 🌐 API Reference

This project uses the FakeStore API:

```
GET https://fakestoreapi.com/products
```

Sample response:

```json
{
  "id": 1,
  "title": "Fjallraven Backpack",
  "price": 109.95,
  "description": "...",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd.png",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
```

---

# 🛠 Improvements (Optional)

Want to extend the project? Here are ideas:

### ⭐ Sorting options

* Price: Low → High
* Price: High → Low
* Rating: High → Low

### 🎗 Category filters

Buttons: Men's, Women's, Jewelery, Electronics

### 💾 Local Storage features

* Save cart items
* Save favorites

### 🌙 Dark mode toggle

### ⚡ Infinite scroll / Pagination

---

# 👨‍💻 Author

**Neelmani Pandey**
Student • Developer
Web3 Shopping Cart Project

---

# 🏆 Final Notes

This project is designed to be **exam-ready**, **industry-standard**, and **cleanly written**.
You now have a fully modular, scalable React e-commerce UI with modern best practices.

If you want — I can also
✅ Create a GitHub-optimized version
✅ Add screenshots automatically
✅ Generate a Deployment guide (Vercel/Netlify)

Just tell me!
