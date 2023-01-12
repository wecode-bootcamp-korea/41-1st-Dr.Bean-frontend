import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import "./Payment.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdEditNote } from "react-icons/md";

const Payment = () => {
  const [modal, setModal] = useState(true);
  const [list, setList] = useState([]);
  const [addressinput, setAddressinput] = useState({
    postcode: "",
    mainaddress: "",
    subaddress: "",
    message: "",
  });

  const saveaddress = e => {
    const { name, value } = e.target;
    setAddressinput({ ...addressinput, [name]: value });
  };

  // useEffect(() => {
  //   fetch("http://10.58.52.52:3000/carts", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8",
  //       Authorization: localStorage.getItem("token"),
  //     },
  //   })
  //     .then(response => response.json())

  //     .then(data => {
  //       setList(data);
  //     });
  // }, []);

  useEffect(() => {
    fetch("http://10.58.52.52:3000/order", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(response => {
        // console.log(response);

        if (response.ok) return response.json();
        alert("이상함");
      })

      .then(data => {
        setList(data);
      });
  }, []);

  console.log(addressinput);

  return (
    <div className="payment inner">
      <div className="head-icon">
        <AiOutlineArrowLeft className="arrow-icon" />
      </div>
      <div className="head-title">
        <h1 className="subHead-title">주문/결제</h1>
      </div>
      <div className="settleContainer-row ">
        <div className="settleContainer-left">
          <button
            onClick={() => setModal(!modal)}
            className="settleProduct-list"
          >
            <p>
              주문 예정 금액 ({}item | {}₩ )
            </p>
            {modal ? (
              <AiOutlinePlus className="plus-btn" />
            ) : (
              <div>
                <AiOutlineMinus className="minus-btn" />
              </div>
            )}
          </button>

          <Modal hidden={modal} test={list} />

          <div className="settleOrder">
            <div className="user">
              <FiUser className="user-icon" />
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
                <CiDeliveryTruck className="deliver-icon" />
                <h2>배송지정보</h2>
                <button className="address">
                  <MdEditNote className="address-icon" />
                  <h4>주소록</h4>
                </button>
              </div>
              <div>
                <label className="userName">우편번호</label>
                <input
                  className="inputUser"
                  name="postcode"
                  onChange={e => saveaddress(e)}
                  value={addressinput.postcode}
                />
              </div>
              <div>
                <label className="userName" placeholder="주소">
                  주소
                </label>
                <input
                  className="inputUser"
                  name="mainaddress"
                  onChange={e => saveaddress(e)}
                  value={addressinput.mainaddress}
                />
              </div>
              <div>
                <label className="userName">나머지주소</label>
                <input
                  className="inputUser"
                  name="subaddress"
                  onChange={e => saveaddress(e)}
                  value={addressinput.subaddress}
                />
              </div>
              <div>
                <label className="userName">배송메세지 선택(선택)</label>
                <input
                  className="inputUser"
                  name="message"
                  onChange={e => saveaddress(e)}
                  value={addressinput.message}
                />
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
                <div>보유 포인트</div>
                <div>₩(+)0</div>
              </div>
              <div className="firstPrice">
                <div>결제 포인트</div>
                <div>₩(+)0</div>
              </div>
              <div className="firstPrice-bottom">
                <div className="total-price">총 결제 예정 금액</div>
                <div>{}₩</div>
              </div>
            </div>
          </article>
          <span className="priceText">
            반품 시 결제금액에서 반품 왕복 배송비를 차감한 금액이 환불되는 것에
            동의합니다.
          </span>
          <button
            className="priceButton"
            onClick={() => alert("결제가 완료되었습니다")}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
