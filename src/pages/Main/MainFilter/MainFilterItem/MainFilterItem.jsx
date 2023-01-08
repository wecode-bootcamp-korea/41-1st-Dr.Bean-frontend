import React, { useEffect, useState } from "react";
import "./MainFilterItem.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function MainFilterItem(activeId, setActiveId) {
  const [item, setItem] = useState([]);

  // useEffect(() => {
  //   fetch(`http://10.58.52.120:3000/items/1`)
  //     .then(res => res.json())
  //     .then(result => setItem(result));
  // }, []);

  console.log(item);

  const obj = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
  };

  useEffect(() => {
    fetch("/data/FilterData.json")
      .then(res => res.json())
      .then(data => setItem(data));
  }, []);

  return (
    <>
      <ul className="item-container inner">
        {item.map(str => {
          return (
            <li className="item" key={str.id}>
              <img className="item-img" src={str.item_img} />
              <div className="item-sub-wrap">
                <p class="fa-solid fa-won-sign">{str.name}</p>
                <p>{str.price}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="btn-container">
        <div className="btn-wrap inner">
          <BsChevronLeft className="left-btn" />
          <BsChevronRight className="right-btn" />
        </div>
      </div>
    </>
  );
}

export default MainFilterItem;
