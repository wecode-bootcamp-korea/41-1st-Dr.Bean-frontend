import React, { useState } from "react";
import "./MainFilterItem.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BiWon } from "react-icons/bi";
import useFetch from "../../../../hooks/useFetch";

function MainFilterItem({ id, setId }) {
  const [slidePx, setSlidePx] = useState(0);
  const widthPx = 1140;
  const [item] = useFetch(`http://10.58.52.108:3000/items/continent/${id}`);

  const toPrev = () => {
    slidePx < 0 && setSlidePx(slidePx + widthPx);
  };

  const toNext = () => {
    slidePx > -(widthPx * 2) && setSlidePx(slidePx - widthPx);
  };

  return (
    <>
      <div className="item-container inner">
        <ul
          className="flexbox"
          style={{
            transform: `translateX(${slidePx}px)`,
            transition: "0.5s ease",
          }}
        >
          {item &&
            item.map(str => {
              return (
                <li className="item" key={str.id}>
                  <img className="item-img" src={str.item_img} />
                  <div className="item-sub-wrap">
                    <p class="fa-solid fa-won-sign">{str.name}</p>
                    <p className="product-price">
                      <BiWon />
                      {parseInt(str.price)
                        .toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="btn-container">
        <div className="btn-wrap inner">
          <BsChevronLeft className="left-btn" onClick={toPrev} />
          <BsChevronRight className="right-btn" onClick={toNext} />
        </div>
      </div>
    </>
  );
}

export default MainFilterItem;
