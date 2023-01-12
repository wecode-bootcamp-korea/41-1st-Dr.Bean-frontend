import React, { useState } from "react";
import "./NavSide.scss";
import { sideArray } from "./NavArea";
import { useNavigate } from "react-router-dom";

export default function NavSide({ onClickMenu }) {
  const [currentId, setCurrentId] = useState(0);
  const navigate = useNavigate();

  const onClickDeps = id => e => {
    setCurrentId(id);
  };

  return (
    <div className="NavSide">
      <ul>
        {sideArray.map(({ id, title, area }) => (
          <li key={id} onClick={onClickDeps(id)} className="side-menu">
            {title}
            <ul className="sub-menu">
              {currentId === id &&
                area.map(({ name, url }) => (
                  <li
                    className="country-items"
                    onClick={e => {
                      onClickMenu();
                      navigate(url);
                    }}
                  >
                    {name}
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
