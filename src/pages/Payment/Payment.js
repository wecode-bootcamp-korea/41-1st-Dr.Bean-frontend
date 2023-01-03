import React from "react";
import "./Payment.scss";
const Payment = () => {
  return (
    <>
      <div className="head-icon">
        <i class="fa-solid fa-arrow-left fa-2x" />
      </div>
      <div className="head-title">
        <h1 className="subHead-title">주문/결제</h1>
      </div>
      <div className="settleContainer-row ">
        <div className="settleContainer-left">
          <button className="settleProduct-list">
            <p>주문 예정 금액 (1item | ₩ 400,000) </p>
            <span>+</span>
          </button>
          <div className="settleOrder">
            <div className="user">
              <i class="fa-regular fa-user fa-2x" />
              <h2>주문자 정보</h2>
            </div>
            <div>
              <label className="userName">이름</label>
              <input className="inputUser" />
            </div>
            <label className="usePhone">전화번호</label>
            <div className="phone-number">
              <input className="inputPhone" />
              <input className="inputPhone" />
              <input className="inputPhone" />
            </div>
            <div>
              <label className="userEmail">이메일</label>
              <input className="inputEmail" />
            </div>
            <div className="settle-deliver">
              <div className="deliver-headline">
                <i class="fa-regular fa-clipboard " />
                <h2>배송지정보</h2>
                <button className="address">
                  <i class="fa-regular fa-address-book" />
                  <h4>주소록</h4>
                </button>
              </div>
              <i class="fa-regular fa-square-check" />
              <span className="text">주문자 정보와 다른 수령인</span>
              <div>
                <label className="userName">우편번호</label>

                <input className="inputUser" />
              </div>
              <div>
                <label className="userName" placeholder="주소">
                  주소
                </label>
                <input className="inputUser" />
              </div>
              <div>
                <label className="userName">나머지주소</label>
                <input className="inputUser" />
              </div>
              <div>
                <label className="userName">배송메세지 선택(선택)</label>
                <input className="inputUser" />
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
                <div>₩233,333</div>
              </div>
              <div className="firstPrice">
                <div>배송비</div>
                <div>₩(+)0</div>
              </div>
              <div className="firstPrice">
                <div>할인 금액</div>
                <div>₩(+)0</div>
              </div>
              <div className="firstPrice-bottom">
                <div>총 결제 예정 금액</div>
                <div>₩233,333</div>
              </div>
            </div>
          </article>
          <span className="priceText">
            반품 시 결제금액에서 반품 왕복 배송비를 차감한 금액이 환불되는 것에
            동의합니다.
          </span>
          <button className="priceButton">결제하기</button>
        </div>
      </div>
    </>
  );
};

export default Payment;
