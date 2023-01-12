import React, { useState, useEffect } from "react";
import "./Cart.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";

const Cart = () => {
  const [list, setList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://10.58.52.229:3000/carts", {
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

  const deletItem = id => {
    const resultArray = [...list];
    list.forEach(function (item, index) {
      if (item.cart_id === id) {
        resultArray.splice(index, 1);
      }
    });
    setList([...resultArray]);

    fetch(`http://10.58.52.229:3000/carts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: localStorage.getItem("token"),
      },
    }).then(response => response.json());
  };

  const finalPrice = list.reduce((prev, cur) => {
    prev += Number(cur.price);
    return prev;
  }, 0);

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
                      onClick={() => deletItem(item.cart_id)}
                    >
                      <TiDeleteOutline />
                    </button>
                    <ui className="option-list">
                      <li>{item.grind}</li>
                      <li>수량: {item.quantity}개 </li>
                      <li>{item.grams}</li>
                      <li />
                    </ui>
                    <div className="info-price">
                      <p className="price">
                        ₩
                        {parseInt(item.price)
                          .toString()
                          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                      </p>
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
                <span>{finalPrice}</span>
              </div>
              <div className="firstPrice">
                <div>할인 금액</div>
                <span>₩(+)0</span>
              </div>
              <div className="firstPrice-bottom">
                <div>총 결제 예정 금액</div>
                <span>₩{finalPrice}</span>
              </div>
            </div>
          </article>
          <button
            className="buy-button"
            onClick={e => {
              navigate("/Payment");
            }}
          >
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
