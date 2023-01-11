import React, { useEffect, useState } from "react";
import "./Nav.scss";
import "./NavSide";

import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import NavSide from "./NavSide";

export default function Nav() {
  const [sideState, setSideState] = useState({ show: true });

  const navClose = () => {
    setSideState({ show: true });
  };

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
        <img className="logo" src="/images/dr.bean-logo.png" alt="" />
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
        <div className="heart">
          <FiHeart />
        </div>
        <div className="basket">
          <MdOutlineShoppingBag />
        </div>
        <div className="user">
          <FiUser />
        </div>
      </div>
    </div>
  );
}
