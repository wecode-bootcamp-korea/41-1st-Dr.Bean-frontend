import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Product from "./pages/ProductList/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
