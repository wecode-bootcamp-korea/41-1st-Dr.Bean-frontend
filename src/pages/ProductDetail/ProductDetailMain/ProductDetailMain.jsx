import React from "react";
import ProductCount from "./ProductCount/ProductCount";
import "./ProductDetailMain.scss";

import ProductSelect from "./ProductSelect/ProductSelect";

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
    content: "(분쇄) 에스프레소머신",
  },
  {
    id: 2,
    content: "(분쇄) 커피메이커",
  },
  {
    id: 3,
    content: "(분쇄) 모카포트",
  },
  {
    id: 4,
    content: "(분쇄) 더치커피",
  },
  {
    id: 5,
    content: "(분쇄) 프렌치프레스",
  },
  {
    id: 6,
    content: "(분쇄) 에어로프레스",
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
              return <ProductSelect key={list.id} content={list.content} />;
            })}
          </ul>
          <ul className="select-container">
            {GRINDER_LIST.map(list => {
              return <ProductSelect key={list.id} content={list.content} />;
            })}
          </ul>
          <ProductCount />
          <button className="cart-btn">장바구니</button>
          <button className="buy-btn">구매하기</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailMain;
