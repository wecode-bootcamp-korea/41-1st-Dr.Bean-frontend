import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";
import { BiWon } from "react-icons/bi";

export default function ProductCard({ country }) {
  const navigate = useNavigate();

  return (
    <>
      {country.map(content => {
        return (
          <div className="container" key={content.id}>
            <img
              src={content.img}
              alt="pics"
              className="product-image"
              onClick={e => {
                navigate(`/productlist/${content.countryName}`);
              }}
            />
            <div className="product-description">
              <button
                className="product-name"
                onClick={e => {
                  navigate(`/productlist/${content.countryName}`);
                }}
              >
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
