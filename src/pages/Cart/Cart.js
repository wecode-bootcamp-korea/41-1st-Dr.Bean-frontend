import React, { useState, useEffect } from "react";
import "./Cart.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
const Cart = () => {
  const [cartItem, setCartItem] = useState({ list: [] });
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://10.58.52.196:3000/cart/18")
      .then(response => response.json())
      .then(data => setList(data));

    console.log(list);
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
    const resultArray = [...list];
    list.forEach(function (item, index) {
      if (item.id === id) {
        resultArray.splice(index, 1);
      }
    });
    list = [...resultArray];
  };

  const showList = () => {
    return list.map((item, index) => (
      <div className="cart-item" key={index}>
        <img className="cart-item-img" src={item.item_img}>
          <div className="item-info">
            <h2>
              {item.title}
              <button
                className="delete-box"
                onClick={() => testDeletItem(item.id)}
              >
                <TiDeleteOutline />
              </button>
            </h2>
            <ui>
              <li>{item.id}</li>
              <li>{item.quantity}</li>
              <li>{item.name}</li>

              <li />
            </ui>
            <div className="info-price">
              <p className="price">₩{item.price}</p>
            </div>
            <p className="option">옵션/수량변경</p>
          </div>
        </img>
      </div>
    ));
  };

  return (
    <div className="payment inner">
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
