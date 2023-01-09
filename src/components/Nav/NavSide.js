import React, { useState } from "react";
import "./NavSide.scss";

const sideArray = [
  { title: "아프리카", area: ["케냐", "에티오피아", "르완다", "카메룬"] },
  { title: "남 아메리카", area: ["브라질", "콜롬비아", "페루", "에콰도르"] },
  {
    title: "북 중앙 아메리카",
    area: ["파나마", "코스타리카", "온두라스", "과테말라"],
  },
  { title: "아시아", area: ["인도네시아", "예맨", "베트남"] },
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
    </div>
  );
};

export default NavSide;
