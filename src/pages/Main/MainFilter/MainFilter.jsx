import React from "react";
import "./MainFilter.scss";

function MainFilter() {
  const ICON_DATA = [
    {
      id: 1,
      img: "/images/coffee_icon.png",
      name: "원두이름",
    },
    {
      id: 2,
      img: "/images/coffee_icon.png",
      name: "원두이름",
    },
    {
      id: 3,
      img: "/images/coffee_icon.png",
      name: "원두이름",
    },
  ];

  const ITEM_DATA = [];

  return (
    <>
      <h1 className="icons_title">ICONS</h1>

      <div className="icons_container">
        <ul className="icon_wrap inner">
          {ICON_DATA.map(list => {
            return (
              <li key={list.id}>
                <img src={list.img} />
                <p className="icon_name">{list.name}</p>
              </li>
            );
          })}
        </ul>
        <ul className="items_container">
          <li>
            <img className="item_img" />
            <span className="item_name" />
            <span className="item_price" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default MainFilter;
