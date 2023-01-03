import React from "react";
import "./MainFilterItem.scss";

function MainFilterItem() {
  const ITEM_DATA = [
    {
      id: 1,
      img: "/images/coffee_bean.jpg",
      name: "상품이름",
      price: "260,000",
    },
    {
      id: 2,
      img: "/images/coffee_bean.jpg",
      name: "상품이름",
      price: "260,000",
    },
    {
      id: 3,
      img: "/images/coffee_bean.jpg",
      name: "상품이름",
      price: "260,000",
    },
  ];
  return (
    <ul className="item-container inner">
      <li className="item">
        <img className="item-img" />
        <p class="fa-solid fa-won-sign">상품이름</p>
      </li>
    </ul>
  );
}

export default MainFilterItem;
