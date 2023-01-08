import React from "react";
import "./ProductCard.scss";
import { BiWon } from "react-icons/bi";

export default function ProductCard({ products }) {
  return (
    <>
      {products.map(content => {
        return (
          <div className="container">
            <img src={content.img} alt="pics" className="product-image" />
            <div className="product-description">
              <button className="product-name">{content.name}</button>
              <div className="product-price">
                <BiWon />
                {content.price}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
