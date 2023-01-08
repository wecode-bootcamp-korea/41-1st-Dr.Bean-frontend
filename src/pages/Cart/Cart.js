import React, { useState, useEffect } from "react";
import "./Cart.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

let testArray = [
  {
    id: 123,
    title: "2976 첼시 스무스",
    color: "블랙",
    pointYN: 0,
    price: 260000,
  },
  { id: 156, title: "뉴발", color: "브라운", pointYN: 1, price: 30000 },
  { id: 1238, title: "메종", color: "화이트", pointYN: 0, price: 700000 },
];

const Cart = () => {
  //예외
  const [cartItem, setCartItem] = useState({ list: [], result: 0, msg: "" });

  useEffect(() => {
    //api요청 -> list 갱신 (state 업데이트)
  }, []);

  // const deleteItem = () => {
  //   //api요청
  //   let ret = "";
  //   setCartItem({
  //     list: ret.data.list,
  //     result: ret.data.result,
  //     msg: ret.data.msg,
  //   });
  // };

  const testDeletItem = id => {
    let resultArray = [...testArray];
    testArray.forEach(function (item, index) {
      if (item.id === id) {
        resultArray.splice(index, 1);
      }
    });
    testArray = [...resultArray];
  };

  const showList = () => {
    return testArray.map((item, index) => (
      <div className="cart-item" key={index}>
        <div className="cart-item-img">
          <div className="item-info">
            <h2>
              {item.title}
              <button
                className="delete-box"
                onClick={() => testDeletItem(item.id)}
              >
                <TiDeleteOutline className="delete-box-icon" />
              </button>
            </h2>
            <ui>
              <li>컬러 : {item.color}</li>
              <li>{}</li>
              <li>{}</li>
              <li>
                <p>
                  {item.pointYN === 1 ? "포인트사용가능" : "포인트사용불가"}
                </p>
              </li>
            </ui>
            <div className="info-price">
              <p className="price">₩{item.price}</p>
            </div>
            <p className="option">옵션/수량변경</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="payment inner">
      {/* 
    {cartItem.result === 1 ? <>cartItem.msg</> : 
    {cartItem.list.map((item)=> {<></>})}}
 */}

      <div className="head-icon">
        <AiOutlineArrowLeft className="arrow-icon" />
      </div>
      <div className="head-title">
        <h1 className="subHead-title">장바구니</h1>
      </div>
      <div className="settleContainer-row ">
        <div className="settleContainer-left">
          <div className="settle-cart">
            <div className="cart-control">
              <label>
                <input type="checkbox" class="item-checkbox" value="{}" />
                <a>전체선택</a>
              </label>
            </div>
            {showList()}
          </div>
        </div>
        <div className="settle-container-right">
          <article className="order-price">
            <div className="article-title">
              <h2>주문 예정 금액</h2>
            </div>
            <div className="totalPrice">
              <div className="firstPrice">
                <div>총 상품 금액</div>
                <span>{}</span>
              </div>
              <div className="firstPrice">
                <div>할인 금액</div>
                <span>₩(+)0</span>
              </div>
              <div className="firstPrice-bottom">
                <div>총 결제 예정 금액</div>
                <span>₩{}</span>
              </div>
            </div>
          </article>
          <button className="buy-button">구매하기</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
