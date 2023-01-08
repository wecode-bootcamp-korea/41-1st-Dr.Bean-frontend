import React, { useEffect, useState } from "react";
import "./MainFilter.scss";
import MainFilterItem from "./MainFilterItem/MainFilterItem";

function MainFilter() {
  const [country, setCountry] = useState([]);
  const [activeId, setActiveId] = useState(0);

  useEffect(() => {
    fetch(`/data/Country.json`)
      .then(res => res.json())
      .then(data => setCountry(data));
  }, []);

  console.log(country);

  const clickHandler = id => {
    setActiveId(id);
  };

  return (
    <>
      <h1 className="icons-title">ICONS</h1>
      <div className="icons-container">
        <ul className="icon-wrap inner">
          {country.map((str, idx) => {
            return (
              <li
                key={str}
                onClick={() => {
                  clickHandler(idx);
                }}
              >
                <img src={str.img} />
                <p className="icon-name">{str.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <MainFilterItem activeId={activeId} setActiveId={setActiveId} />
    </>
  );
}

export default MainFilter;
