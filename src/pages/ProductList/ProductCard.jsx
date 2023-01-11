import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";
import { BiWon } from "react-icons/bi";

export default function ProductCard({ countryData }) {
  const navigate = useNavigate();

  return (
    <>
      {countryData &&
        countryData.items.map(content => {
          const detailpageHandler = e => {
            navigate(`/productDetail/${content.id}`);
          };

          return (
            <div className="container" key={content.id}>
              <img
                src={content.img}
                alt="pics"
                className="product-image"
                onClick={detailpageHandler}
              />
              <div className="product-description">
                <button className="product-name" onClick={detailpageHandler}>
                  {content.name}
                </button>
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
