import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFilterSquare } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import ProductCard from "./ProductCard";
import { COUNTRY_CODE, CONTINENT_DIVISION } from "./ProductCategory";
import "./ProductListHeader.scss";

export default function ProductListHeader({ category, country }) {
  const navigate = useNavigate();
  const [data, setData] = useState();
  console.log(data);

  const findCountry = CONTINENT_DIVISION.find(
    e => e.titleEnglish === category.category
  );
  const findurl = COUNTRY_CODE.find(e => e.name === country.country);

  useEffect(() => {
    fetch(`http://10.58.52.108:3000/items/country/${findurl.id}`)
      .then(response => response.json())
      .then(result => setData(result[0]));
  }, [findurl.id]);

  return (
    <div className="page-description">
      <AiOutlineArrowLeft className="arrow" onClick={() => navigate(-1)} />
      <span className="category">{findurl.nameKor}</span>
      <span className="category-productnumbers">
        닥터빈의 {findurl.nameKor} 원두 상품을 확인해보세요!
      </span>
      <div className="subcategory-container">
        {findCountry.area.map(content => {
          return (
            <button
              className={
                country.country === content.nameEng
                  ? "subcategory-activated"
                  : "subcategory"
              }
              key={content.id}
              onClick={e => {
                navigate(
                  `/productlist/${category.category}/${content.nameEng}`
                );
              }}
            >
              {content.name}
            </button>
          );
        })}
      </div>
      <div className="category-description">{data && data.content}</div>
      <button className="filter-btn">
        <BsFilterSquare />
        <span className="filter-txt">필터</span>
        {/* 추가사항 */}
        <MdArrowDropDown />
      </button>
      <div className="borderline" />
      <div className="list-container">
        <ProductCard countryData={data} />
      </div>
    </div>
  );
}
