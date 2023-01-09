import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductListHeader from "./ProductListHeader";
import ProductCard from "./ProductCard";
import "./ProductList.scss";

export default function ProductList() {
  const params = useParams();
  const params2 = useParams();

  return (
    <div className="list-section inner">
      <ProductListHeader
        category={params}
        test={PRODUCT_CATEGORY}
        country={params2}
      />
      {/* <div className="list-container">
        <ProductCard products={MOCK_DATA[0].items} />
      </div> */}
    </div>
  );
}

const PRODUCT_CATEGORY = [
  {
    id: 0,
    text: "아프리카",
    name: "africa",
    description: "닥터빈의 아프리카 컬렉션입니다.",
  },
  {
    id: 1,
    text: "중남미",
    name: "csamerica",
    description: "닥터빈의 중남미 컬렉션입니다.",
  },
  {
    id: 2,
    text: "아시아",
    name: "asia",
    description: "닥터빈의 아시아 컬렉션입니다.",
  },
];
