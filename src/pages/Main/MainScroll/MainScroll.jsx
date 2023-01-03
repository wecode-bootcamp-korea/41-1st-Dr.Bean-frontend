import React from "react";
import "./MainScroll.scss";

function MainScroll() {
  return (
    <div className="scroll-container">
      <div>
        <div className="btn-wrap inner">
          {/* <i class="fa-solid fa-angle-left" />
          <i class="fa-solid fa-angle-right" /> */}
          <div className="left-btn" />
          <div className="right-btn" />
        </div>
      </div>
    </div>
  );
}

export default MainScroll;
