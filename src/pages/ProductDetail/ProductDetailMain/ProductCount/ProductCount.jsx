import React, { useState } from "react";
import { BiPlus, BiMinus, BiWon } from "react-icons/bi";
import "./ProductCount.scss";

function ProductCount({ count, setCount, price }) {
  const plus = () => {
    if (count >= 10) {
      alert("최대 10개까지 구매 가능합니다.");
      return;
    }
    setCount(count + 1);
  };

  const minus = () => {
    if (count <= 1) {
      alert("최소 1개 이상 구매 가능합니다.");
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className="total-container">
      <div className="count-container">
        <span className="count">수량</span>
        <span>{count}</span>
        <BiMinus className="count-minus" onClick={minus} />
        <BiPlus className="count-plus" onClick={plus} />
      </div>
      <div className="product-price">
        <BiWon className="won" />
        <span>
          {(price * count)
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      </div>
    </div>
  );
}

export default ProductCount;
