import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/product" element={<ProductList />} />
        <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
