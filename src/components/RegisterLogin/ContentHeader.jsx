import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";

export default function ContentHeader({ pageInfo, title, subtitle }) {
  const navigate = useNavigate();

  return (
    <div className="page-description">
      <button
        className="pageback-btn"
        onClick={() => {
          navigate("/");
        }}
      >
        <FontAwesomeIcon icon={faCircleLeft} className="arrow-left" />
      </button>
      <h1>{pageInfo}</h1>
      <div className="welcome">
        <h2 className="welcome-title">{title}</h2>
        <h3 className="welcome-subtitle">{subtitle}</h3>
      </div>
      <div>
        <h3 className="maintext">{pageInfo}</h3>
      </div>
    </div>
  );
}
