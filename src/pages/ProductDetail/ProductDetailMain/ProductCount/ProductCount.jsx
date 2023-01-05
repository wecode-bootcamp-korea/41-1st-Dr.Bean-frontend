import React, { useState } from "react";
import { BiPlus, BiMinus, BiWon } from "react-icons/bi";
import "./ProductCount.scss";

function ProductCount() {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(2100);
  const [cal, setCal] = useState(2100);

  const plus = () => {
    if (count < 10) {
      setCount(count + 1);
      setPrice(count * cal);
    } else {
      setCount(10);
      alert("최대 10개까지 구매가능합니다.");
    }
  };

  const minus = () => {
    setCount(count - 1);
    setPrice(count * price);
    count <= 0 && alert("최소 1개 이상 구매가능합니다.");
    count <= 0 && setCount(1);
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
        <span>{price}</span>
      </div>
    </div>
  );
}

export default ProductCount;
