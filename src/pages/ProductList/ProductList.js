import React from "react";
import { useParams } from "react-router-dom";
import ProductListHeader from "./ProductListHeader";
import "./ProductList.scss";

export default function ProductList() {
  const params = useParams();
  const params2 = useParams();

  return (
    <div className="list-section inner">
      <ProductListHeader category={params} country={params2} />
    </div>
  );
}
