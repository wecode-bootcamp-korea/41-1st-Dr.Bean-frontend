import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";
import { BiWon } from "react-icons/bi";

export default function ProductCard({ continent, products, country }) {
  const navigate = useNavigate();
  //country 값 /url을 찾아와야함
  console.log(country.country);
  //나라 데이터를 별도로 또 받아옴

  return (
    <>
      {ghana.map(content => {
        return (
          <div className="container">
            <img src={content.img} alt="pics" className="product-image" />
            <div className="product-description">
              <button className="product-name">{content.text}</button>
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

const kenya = [
  {
    id: 0,
    text: "케냐1",
    price: "3만원",
    img: "https://images.pexels.com/photos/14894302/pexels-photo-14894302.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 1,
    text: "케냐2",
    price: "4만원",
    img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 2,
    text: "케냐3",
    price: "5만원",
    img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
];

const ghana = [
  {
    id: 0,
    text: "가나1",
    price: "3만원",
    img: "https://images.pexels.com/photos/14894302/pexels-photo-14894302.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 1,
    text: "가나2",
    name: "4만원",
    img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 2,
    text: "가나3",
    name: "5만원",
    img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
];
