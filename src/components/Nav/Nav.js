import React, { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = () => setIsOpen(prev => !prev);

  const navigate = useNavigate();

  return (
    <div className="header-wrapper inner">
      <div className="side-bar-btn">
        <RxHamburgerMenu className="side-bar-icon" onClick={handleNav} />
        {isOpen && <NavSide onClickMenu={() => setIsOpen(false)} />}
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
          <HiOutlineUserAdd />
        </div>
        <div
          className="user"
          onClick={e => {
            navigate("/signup");
          }}
        >
          <HiOutlineUserCircle />
        </div>
      </div>
    </div>
  );
}
