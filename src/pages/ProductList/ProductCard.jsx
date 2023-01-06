import React from "react";
import "./ProductCard.scss";
import { BiWon } from "react-icons/bi";

export default function ProductCard({ test }) {
  console.log(test[1]);
  return (
    <div className="container">
      <img
        src="https://plus.unsplash.com/premium_photo-1667336906826-b800ab208825?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="pics"
        className="product-image"
      />

      <div className="product-description">
        <button className="product-name">1490버지니아</button>
        <div className="product-price">
          <BiWon />
          1000
        </div>
      </div>
    </div>
  );
}
