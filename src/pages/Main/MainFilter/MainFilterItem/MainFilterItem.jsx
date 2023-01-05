import React, { useEffect, useState } from "react";
import "./MainFilterItem.scss";

function MainFilterItem() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("http://10.58.52.57:3000/items/1")
      .then(res => res.json())
      .then(result => setItem(result));
  }, []);

  return (
    <>
      <ul className="item-container inner">
        {item.map(list => {
          return (
            <li className="item" key={list.id}>
              <img className="item-img" src={list.item_img} />
              <div className="item-sub-wrap">
                <p class="fa-solid fa-won-sign">{list.name}</p>
                <p>{list.price}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="btn-container">
        <div className="btn-wrap inner">
          <i class="fa-solid fa-angle-left" />
          <i class="fa-solid fa-angle-right" />
        </div>
      </div>
    </>
  );
}

export default MainFilterItem;
