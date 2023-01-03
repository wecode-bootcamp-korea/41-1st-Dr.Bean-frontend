import React from "react";
import "./MainFilterItem.scss";

function MainFilterItem() {
  // const ITEM_DATA = [{
  //   id:1,
  //   img: ,
  //   name : 상품이름,
  //   price : 260,000

  // }];
  return (
    <>
      <ul className="item-container inner">
        <li className="item">
          <img className="item-img" />
          <p>상품이름</p>
        </li>
      </ul>
    </>
  );
}

export default MainFilterItem;
