import React, { useEffect } from "react";
import "../TopBtn/TopBtn.scss";
import { SlArrowUp } from "react-icons/sl";

function TopBtn() {
  const toTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="topbtn-container" onClick={toTop}>
      <SlArrowUp className="topbtn-arrow" />
      <div className="topbtn-text">TOP</div>
    </div>
  );
}

export default TopBtn;
