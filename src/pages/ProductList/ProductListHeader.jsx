import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFilterSquare } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import "./ProductListHeader.scss";

export default function ProductListHeader({ category, products }) {
  return (
    <div className="page-description">
      <AiOutlineArrowLeft className="arrow" />
      <span className="category">{category.category}</span>
      <span className="category-productnumbers">
        총 75개 종류의 {category.category} 원두가 있습니다.
      </span>
      <div className="subcategory-container">
        <button className="subcategory">전체보기</button>
        {products.map(content => {
          return <button className="subcategory">{content.country}</button>;
        })}
      </div>
      <div className="category-description">{products[0].description}</div>
      <button className="filter-btn">
        <BsFilterSquare />
        <span className="filter-txt">필터</span>
        <MdArrowDropDown />
      </button>
      <div className="borderline" />
    </div>
  );
}
