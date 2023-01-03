import React from "react";
import "./Nav.scss";

export default function Nav() {
  return (
    <div className="headerwrapper">
      <div className="hamburgerbutton">
        <i class="fa-solid fa-bars fa-2x" />
      </div>
      <input
        type="text"
        className="searchform"
        placeholder="검색어를 입력해주세요"
      />
      <div className="headericons">
        <div className="glass">
          <i class="fa-solid fa-magnifying-glass fa-2x" />
        </div>
        <div className="heart">
          <i class="fa-regular fa-heart fa-2x" />
        </div>
        <div className="bracket">
          <i class="fa-solid fa-arrow-right-to-bracket fa-2x" />
        </div>
        <div className="user">
          <i class="fa-regular fa-user fa-2x" />
        </div>
      </div>
    </div>
  );
}
