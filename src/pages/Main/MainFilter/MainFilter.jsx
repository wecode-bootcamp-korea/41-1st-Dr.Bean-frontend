import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import "./MainFilter.scss";
import MainFilterItem from "./MainFilterItem/MainFilterItem";

function MainFilter() {
  const [id, setId] = useState(1);

  const [country] = useFetch("/data/Country.json");

  const changeId = id => {
    setId(id);
  };

  return (
    <>
      <h1 className="icons-title">ICONS</h1>
      <div className="icons-container">
        <ul className="icon-wrap inner">
          {country &&
            country.map(str => {
              return (
                <li key={str.id} onClick={() => changeId(str.id)}>
                  <img src={str.img} />
                  <p className="icon-name">{str.name}</p>
                </li>
              );
            })}
        </ul>
      </div>
      <MainFilterItem id={id} setId={setId} />
    </>
  );
}

export default MainFilter;
