import React, { useEffect, useState } from "react";
import "./MainFilter.scss";
import MainFilterItem from "./MainFilterItem/MainFilterItem";

const ICON_DATA = [
  {
    id: 1,
    img: "/images/north_america.png",
    name: "North-America",
  },
  {
    id: 2,
    img: "/images/south_america.png",
    name: "South-America",
  },
  {
    id: 3,
    img: "/images/africa.png",
    name: "Africa",
  },
  {
    id: 3,
    img: "/images/asia.png",
    name: "Asia",
  },
];

function MainFilter() {
  return (
    <>
      <h1 className="icons-title">ICONS</h1>
      <div className="icons-container">
        <ul className="icon-wrap inner">
          {ICON_DATA.map(list => {
            return (
              <li key={list.id}>
                <img src={list.img} />
                <p className="icon-name">{list.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <MainFilterItem />
    </>
  );
}

export default MainFilter;
