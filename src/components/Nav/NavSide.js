import React, { useState } from "react";
import "./NavSide.scss";

const sideArray = [
  { title: "아프리카", area: ["케냐", "남아공", "수단"] },
  { title: "남 아메리카", area: ["콜롬비아", "멕시코", "브라질"] },
  { title: "아시아", area: ["대한민국", "일본", "중국"] },
  { title: "북 중앙 아메리카", area: ["미국", "캐나다"] },
];

let result = [];
const NavSide = props => {
  const [subMenu, setSubMenu] = useState({ list: [], title: "" });

  // const addCart = value => {
  //   window.localStorage.setItem("addItem", value);
  //   window.dispatchEvent(new Event("storage"));
  // };
  //onClick={() => addCart(item.title)}
  const navClick = (value, event) => {
    event.stopPropagation();

    result = [];
    sideArray.forEach(function (item) {
      if (item.title === value) {
        result = [...item.area];
        return;
      }
    });

    setSubMenu({ list: result, title: value });
  };

  return (
    <div className="NavSide" onClick={() => props.onClose()}>
      {sideArray.map((item, index) => {
        return (
          <div key={index} className="side-menu">
            <div
              className="side-list"
              onClick={event => navClick(item.title, event)}
            >
              {item.title}
            </div>
            <div className="sub-menu">
              {item.title === subMenu.title ? (
                subMenu.list.map((item, index) => {
                  return <div key={index}>{item}</div>;
                })
              ) : (
                <div />
              )}
            </div>
          </div>
        );
      })}
      {/* <div className="side-list"/>
      <div className="side-list"/>
      <div className="side-list" />
      <div className="side-list" /> */}
    </div>
  );
};

export default NavSide;
