import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./pages/Payment/Payment";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}
