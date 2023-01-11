import React, { useState, useEffect } from "react";
import "./cart.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
const Cart = () => {
  const [cartItem, setCartItem] = useState({ list: [] });
  const [list, setList] = useState([]);
  const [test, setTest] = useState("");

  useEffect(() => {
    fetch("http://10.58.52.52:3000/carts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(response => response.json())

      .then(data => {
        setList(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://10.58.52.52:3000/carts", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(response => response.json())

      .then(data => {
        setList(data);
      });
  }, []);

  const deletItem = id => {
    const resultArray = [...list];
    list.forEach(function (item, index) {
      if (item.id === id) {
        resultArray.splice(index, 1);
      }
    });
    setList([...resultArray]);
  };

  return (
    <div className="cart inner">
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
                <input type="checkbox" class="item-checkbox" />
                <a>전체선택</a>
              </label>
            </div>
            {/* // showList */}
            <div>
              {list.map((item, index) => (
                <div className="cart-item" key={index}>
                  <img className="cart-item-img" src={item.item_img} />
                  <div className="item-info">
                    <h2>{item.name}</h2>
                    <button
                      className="delete-box"
                      onClick={() => deletItem(item.id)}
                    >
                      <TiDeleteOutline />
                    </button>
                    <ui className="option-list">
                      <li>{item.grind}</li>
                      <li>수량: {item.quantity}개 </li>
                      {/* <li>{item.name}</li> */}
                      <li />
                    </ui>
                    <div className="info-price">
                      <p className="price">₩{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* // showList END */}
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
