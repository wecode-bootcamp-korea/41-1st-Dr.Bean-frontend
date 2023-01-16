import React, { useEffect, useState } from "react";
import "./MainFilter.scss";
import MainFilterItem from "./MainFilterItem/MainFilterItem";

function MainFilter() {
  const [country, setCountry] = useState([]);
  const [id, setId] = useState(1);

  const changeId = id => {
    setId(id);
  };
  useEffect(() => {
    fetch(`/data/Country.json`)
      .then(res => res.json())
      .then(data => setCountry(data));
  }, []);
  return (
    <>
      <h1 className="icons-title">ICONS</h1>
      <div className="icons-container">
        <ul className="icon-wrap inner">
          {country.map(str => {
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
