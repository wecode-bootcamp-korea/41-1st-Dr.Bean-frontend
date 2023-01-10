import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Product from "./pages/ProductList/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productList" element={<ProductList />}>
          <Route path=":category" element={<ProductList />} />
          <Route path=":category/:country" element={<ProductList />} />
        </Route>
        <Route path="/productDetail/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
