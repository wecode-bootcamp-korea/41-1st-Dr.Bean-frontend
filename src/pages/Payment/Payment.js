import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import "./Payment.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdDirectionsBusFilled, MdDiscFull, MdEditNote } from "react-icons/md";

const Payment = () => {
  const [modal, setModal] = useState(true);
  const [list, setList] = useState([]);
  const [user, setUser] = useState({});
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

  useEffect(() => {
    fetch("http://10.58.52.182:3000/carts", {
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

  console.log(list);
  useEffect(() => {
    fetch("http://10.58.52.182:3000/order", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(response => response.json())

      .then(data => {
        setUser(data[0]);
      });
  }, []);

  const payHandler = () => {
    fetch("http://10.58.52.182:3000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        zipCode: addressinput.postcode,
        address: addressinput.mainaddress,
        reAddress: addressinput.subaddress,
        message: addressinput.message,
        itemId: list[0].item_id,
        itemOptionId: list[0].item_option_id,
      }),
    }).then(res => res.json());
    alert("????????? ?????????????????????");
  };

  const finalPaymentPrice = list.reduce((prev, cur) => {
    prev += Number(cur.price);
    return prev;
  }, 0);

  return (
    <div className="payment inner">
      <div className="head-icon">
        <AiOutlineArrowLeft className="arrow-icon" />
      </div>
      <div className="head-title">
        <h1 className="subHead-title">??????/??????</h1>
      </div>
      <div className="settleContainer-row ">
        <div className="settleContainer-left">
          <button
            onClick={() => setModal(!modal)}
            className="settleProduct-list"
          >
            <p>
              ?????? ?????? ??????{" "}
              {finalPaymentPrice
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}{" "}
              ???{" "}
            </p>
            {modal ? (
              <AiOutlinePlus className="plus-btn" />
            ) : (
              <div>
                <AiOutlineMinus className="minus-btn" />
              </div>
            )}
          </button>

          <Modal hidden={modal} productList={list} />

          <div className="settleOrder">
            <div className="user">
              <FiUser className="user-icon" />
              <h2>????????? ??????</h2>
            </div>
            <div>
              <label className="userName">??????</label>
              <input className="inputUser" value={user.name} />
            </div>
            <label className="usePhone">????????????</label>
            <div className="phone-number">
              <input
                className="inputPhone"
                value={user.phone_num?.slice(0, 3)}
              />
              <input
                className="inputPhone"
                value={user.phone_num?.slice(3, 7)}
              />
              <input
                className="inputPhone"
                value={user.phone_num?.slice(7, 11)}
              />
            </div>
            <div>
              <label className="userEmail">?????????</label>
              <input className="inputEmail" value={user.email} />
            </div>
            <div className="settle-deliver">
              <div className="deliver-headline">
                <CiDeliveryTruck className="deliver-icon" />
                <h2>???????????????</h2>
                <button className="address">
                  <MdEditNote className="address-icon" />
                  <h4>?????????</h4>
                </button>
              </div>
              <div>
                <label className="userName">????????????</label>
                <input
                  className="inputUser"
                  name="postcode"
                  onChange={e => saveaddress(e)}
                  value={addressinput.postcode}
                />
              </div>
              <div>
                <label className="userName" placeholder="??????">
                  ??????
                </label>
                <input
                  className="inputUser"
                  name="mainaddress"
                  onChange={e => saveaddress(e)}
                  value={addressinput.mainaddress}
                />
              </div>
              <div>
                <label className="userName">???????????????</label>
                <input
                  className="inputUser"
                  name="subaddress"
                  onChange={e => saveaddress(e)}
                  value={addressinput.subaddress}
                />
              </div>
              <div>
                <label className="userName">??????????????? ??????(??????)</label>
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
              <h2>?????? ?????? ??????</h2>
            </div>
            <div className="totalPrice">
              <div className="firstPrice">
                <div>??? ?????? ??????</div>
                <div>
                  ???
                  {finalPaymentPrice
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                </div>
              </div>
              <div className="firstPrice">
                <div>?????? ?????????</div>
                <div>
                  ???
                  {parseInt(user.point)
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                </div>
              </div>

              <div className="firstPrice-bottom">
                <div>??? ?????? ?????? ??????</div>
                <div>
                  ???
                  {(user.point - finalPaymentPrice)
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                </div>
              </div>
            </div>
          </article>
          <span className="priceText">
            ?????? ??? ?????????????????? ?????? ?????? ???????????? ????????? ????????? ???????????? ??????
            ???????????????.
          </span>
          <button
            className="priceButton"
            onClick={
              payHandler
              // () => alert("????????? ?????????????????????")
            }
          >
            ????????????
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
