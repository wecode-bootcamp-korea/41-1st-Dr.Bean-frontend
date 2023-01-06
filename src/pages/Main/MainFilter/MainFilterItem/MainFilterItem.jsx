import React, { useEffect, useState } from "react";
import "./MainFilterItem.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const PRODUCT_LIST = [
  {
    id: 1,
    img: "/images/coffee_bean.jpg",
    name: "상품이름",
    price: 10000,
  },
  {
    id: 2,
    img: "/images/coffee_bean.jpg",
    name: "상품이름",
    price: 10000,
  },
  {
    id: 3,
    img: "/images/coffee_bean.jpg",
    name: "상품이름",
    price: 10000,
  },
  {
    id: 4,
    img: "/images/coffee_bean.jpg",
    name: "상품이름",
    price: 10000,
  },
  {
    id: 5,
    img: "/images/coffee_bean.jpg",
    name: "상품이름",
    price: 10000,
  },
];

function MainFilterItem() {
  // const [item, setItem] = useState([]);

  // useEffect(() => {
  //   fetch("http://10.58.52.57:3000/items/1")
  //     .then(res => res.json())
  //     .then(result => setItem(result));
  // }, []);

  return (
    <>
      <ul className="item-container inner">
        {PRODUCT_LIST.map(list => {
          return (
            <li className="item" key={list.id}>
              <img className="item-img" src={list.item_img} />
              <div className="item-sub-wrap">
                <p class="fa-solid fa-won-sign">{list.name}</p>
                <p>{list.price}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="btn-container">
        <div className="btn-wrap inner">
          <BsChevronLeft className="left-btn" />
          <BsChevronRight className="right-btn" />
        </div>
      </div>
    </>
  );
}

export default MainFilterItem;
