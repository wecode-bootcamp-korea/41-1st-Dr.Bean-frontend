import React, { useEffect, useState } from "react";
import "./Nav.scss";
import "./NavSide";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { HiOutlineUserAdd } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";
import NavSide from "./NavSide";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [sideState, setSideState] = useState({ show: true });
  const navClose = () => {
    setSideState({ show: true });
  };
  const navigate = useNavigate();
  return (
    <div className="header-wrapper inner">
      <div className="side-bar-btn">
        <RxHamburgerMenu
          className="side-bar-icon"
          onClick={() => setSideState({ show: !sideState.show })}
        />
        <div hidden={sideState.show}>
          <NavSide onClose={navClose} />
        </div>
        <img
          className="logo"
          src="/images/dr.bean-logo.png"
          alt=""
          onClick={e => {
            navigate("/");
          }}
        />
      </div>
      <input
        type="text"
        className="search"
        placeholder="검색어를 입력해주세요"
      />
      <div className="header-icons">
        <div className="search-glass">
          <FiSearch />
        </div>
        <div
          className="basket"
          onClick={e => {
            navigate("/cart");
          }}
        >
          <MdOutlineShoppingBag />
        </div>
        <div
          className="sign"
          onClick={e => {
            navigate("/login");
          }}
        >
          <HiOutlineUserCircle />
        </div>
        <div
          className="user"
          onClick={e => {
            navigate("/signup");
          }}
        >
          <HiOutlineUserAdd />
        </div>
      </div>
    </div>
  );
}
