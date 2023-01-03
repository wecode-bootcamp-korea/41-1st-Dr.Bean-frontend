import React from "react";
import "./MainScroll.scss";
import { BsChevronLeft } from "react-";

function MainScroll() {
  return (
    <div className="scroll-container">
      <div>
        <div className="btn-wrap inner">
          {/* <i class="fa-solid fa-angle-left" />
          <i class="fa-solid fa-angle-right" /> */}
          {/* <FontAwesomeIcon
            icon={faChevronLeft}
            size="10px"
            className="left-btn"
          />
          <FontAwesomeIcon icon={faChevronRight} className="right-btn" /> */}
          {/* BsChevronLeft */}
        </div>
      </div>
    </div>
  );
}

export default MainScroll;
