import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFilterSquare } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import ProductCard from "./ProductCard";
import "./ProductListHeader.scss";

const africa = [
  { id: 0, text: "전체보기", name: "africaall" },
  { id: 1, text: "케냐", name: "Kenya" },
  { id: 2, text: "페루", name: "Peru" },
  { id: 3, text: "가나", name: "Ghana" },
];

const csamerica = [
  { id: 0, text: "전체보기", name: "csamericaall" },
  { id: 0, text: "코스타리카", name: "costarica" },
  { id: 1, text: "중남미1", name: "costarica2" },
  { id: 2, text: "중남미2", name: "costarica3" },
];

const asia = [
  { id: 0, text: "베트남", name: "asiaall" },
  { id: 0, text: "베트남", name: "vietnam" },
  { id: 1, text: "아시아1", name: "asia2" },
  { id: 2, text: "아시아2", name: "asia3" },
];

export default function ProductListHeader({ category, test, country }) {
  const navigate = useNavigate();
  const continentValue = test.find(e => e.name === category.category);
  console.log(continentValue.name);
  //continentValue.name url을 통해 http://~~/continentValue.name 해당 continent의 나라 리스트를 호출

  return (
    <div className="page-description">
      <AiOutlineArrowLeft className="arrow" />
      <span className="category">{continentValue.text}</span>
      <span className="category-productnumbers">
        총 75개 종류의 {continentValue.text} 원두가 있습니다.
      </span>
      <div className="subcategory-container">
        {/* 해당continent 값 받아와야함 */}
        {asia.map(content => {
          return (
            <button
              className="subcategory"
              onClick={e => {
                navigate(`/productlist/${continentValue.name}/${content.name}`);
              }}
            >
              {content.text}
            </button>
          );
        })}
      </div>
      <div className="category-description">{continentValue.description}</div>
      <button className="filter-btn">
        <BsFilterSquare />
        <span className="filter-txt">필터</span>
        <MdArrowDropDown />
      </button>
      <div className="borderline" />
      <div className="list-container">
        <ProductCard continent={africa} country={country} />
      </div>
    </div>
  );
}
