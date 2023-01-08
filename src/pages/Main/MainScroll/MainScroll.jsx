import React, { useState } from "react";
import "./MainScroll.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function MainScroll() {
  const [slidePx, setSlidePx] = useState(0);
  const widthPx = 1680;

  const toPrev = () => {
    slidePx < 0 && setSlidePx(slidePx + widthPx);
  };

  const toNext = () => {
    slidePx > -3360 && setSlidePx(slidePx - widthPx);
  };

  return (
    <div className="window">
      <div
        className="flexbox"
        style={{
          transform: `translateX(${slidePx}px)`,
          transition: "0.5s ease",
        }}
      >
        <div className="img1" />
        <div className="img2" />
        <div className="img3" />
      </div>

      <div>
        <div className="btn-wrap inner">
          <BsChevronLeft className="left-btn" onClick={toPrev} />
          <BsChevronRight className="right-btn" onClick={toNext} />
        </div>
      </div>
    </div>
  );
}

export default MainScroll;
