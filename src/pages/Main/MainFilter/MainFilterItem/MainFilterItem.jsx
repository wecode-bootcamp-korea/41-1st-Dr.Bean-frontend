import React, { useEffect, useState } from "react";
import "./MainFilterItem.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function MainFilterItem() {
  const [item, setItem] = useState([]);
  const [slidePx, setSlidePx] = useState(0);
  const widthPx = 1140;

  useEffect(() => {
    fetch("http://10.58.52.150:3000/items/1")
      .then(res => res.json())
      .then(result => setItem(result));
  }, []);

  console.log(item);

  // useEffect(() => {
  //   fetch("/data/FilterData.json")
  //     .then(res => res.json())
  //     .then(data => setItem(data));
  // }, []);

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
          {item.map(str => {
            return (
              <li className="item" key={str.id}>
                <img className="item-img" src={str.item_img} />
                <div className="item-sub-wrap">
                  <p class="fa-solid fa-won-sign">{str.name}</p>
                  <p className="product-price">{str.price}</p>
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
