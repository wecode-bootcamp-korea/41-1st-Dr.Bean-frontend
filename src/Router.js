import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Product from "./pages/ProductList/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/productDetail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
