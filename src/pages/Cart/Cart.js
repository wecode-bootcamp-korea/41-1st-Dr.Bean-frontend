import React from "react";
import "./Cart.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

const Cart = () => {
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
            <div className="cart-item">
              <div className="cart-item-img">
                <div className="item-info">
                  <h2>
                    2976 첼시 스무스
                    {/* <button className="delete-box">
                      <TiDeleteOutline className="delete-box-icon" />
                    </button> */}
                  </h2>
                  <ui>
                    <li>컬러 : 블랙</li>
                    <li>...</li>
                    <li>...</li>
                    <li>
                      ...
                      <p>포인트사용불가</p>
                    </li>
                  </ui>
                  <div className="info-price">
                    <p className="price">₩260,000{}</p>
                  </div>
                  <p className="option">옵션/수량변경</p>
                </div>
              </div>
            </div>
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
