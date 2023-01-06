import React from "react";
import "./MainScroll.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function MainScroll() {
  return (
    <div className="scroll-container">
      <div>
        <div className="btn-wrap inner">
          <BsChevronLeft className="left-btn" />
          <BsChevronRight className="right-btn" />
        </div>
      </div>
    </div>
  );
}

export default MainScroll;
