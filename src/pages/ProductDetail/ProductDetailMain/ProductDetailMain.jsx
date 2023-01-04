import React from "react";
import "./ProductDetailMain.scss";
import { BiPlus, BiMinus, BiWon } from "react-icons/bi";

const GRAM_LIST = [
  {
    id: 1,
    content: "200g",
  },
  {
    id: 2,
    content: "500g",
  },
  {
    id: 3,
    content: "1kg",
  },
];

const GRINDER_LIST = [
  {
    id: 1,
    content: "에스프레소머신",
  },
  {
    id: 2,
    content: "드립/커피메이커",
  },
  {
    id: 3,
    content: "모카포트",
  },
  {
    id: 4,
    content: "더치커피",
  },
  {
    id: 5,
    content: "프렌치프레스",
  },
  {
    id: 6,
    content: "에어로프레스",
  },
  {
    id: 7,
    content: "홀빈 (갈지않은 원두)",
  },
];

function ProductDetailMain() {
  return (
    <div className="product-container inner">
      <img src="/images/coffee_bean.jpg" />
      <div className="product-right">
        <div className="right-container">
          <h1>상품이름</h1>
          <ul className="select-container">
            {GRAM_LIST.map(list => {
              return (
                <li key={list.id} className="select-btn">
                  {list.content}
                </li>
              );
            })}
          </ul>
          <ul className="select-container">
            <div>분쇄</div>
            {GRINDER_LIST.map(info => {
              return (
                <li key={info.id} className="select-btn">
                  {info.content}
                </li>
              );
            })}
          </ul>

          <div className="total-container">
            <div className="count-container">
              <span className="count">수량</span>
              <span>1</span>
              <BiMinus className="count-minus" />
              <BiPlus className="count-plus" />
            </div>
            <div className="product-price">
              <BiWon className="won" />
              <span>210,000</span>
            </div>
          </div>
          <button className="cart-btn">장바구니</button>
          <button className="buy-btn">구매하기</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailMain;
