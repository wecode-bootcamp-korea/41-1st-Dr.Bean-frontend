import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Product from "./pages/ProductList/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Payment from "./pages/Payment/Payment";

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/payment" element={<Payment />} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productList" element={<ProductList />}>
          <Route path=":category" element={<ProductList />} />
          <Route path=":category/:country" element={<ProductList />} />
        </Route>
        <Route path="/productDetail/" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
