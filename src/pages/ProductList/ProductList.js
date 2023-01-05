import React from "react";
import { useNavigate } from "react-router-dom";
import ProductListHeader from "./ProductListHeader";
import "./ProductList.scss";

export default function ProductList() {
  const navigate = useNavigate();
  return (
    <div className="list-section inner">
      <ProductListHeader />
    </div>
  );
}
