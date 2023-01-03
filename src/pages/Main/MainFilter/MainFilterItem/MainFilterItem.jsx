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
    <>
      <ul className="item-container inner">
        {ITEM_DATA.map(list => {
          return (
            <li className="item" key={list.id}>
              <img className="item-img" src={list.img} />
              <div className="item-sub-wrap">
                <p class="fa-solid fa-won-sign">{list.name}</p>
                <p>{list.price}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="btn-wrap inner">
        <i class="fa-solid fa-angle-left" />
        <i class="fa-solid fa-angle-right" />
      </div>
    </>
  );
}

export default MainFilterItem;
