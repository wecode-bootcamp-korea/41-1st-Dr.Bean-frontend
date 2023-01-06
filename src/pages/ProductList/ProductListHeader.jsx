import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFilterSquare } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import "./ProductListHeader.scss";

export default function ProductListHeader({ category, products }) {
  return (
    <div className="page-description">
      <AiOutlineArrowLeft className="arrow" />
      <span className="category">{products[0].continent}</span>
      <span className="category-productnumbers">
        75개 종류의 {products[0].continent} 원두가 있습니다.
      </span>
      <div className="subcategory-container">
        <button className="subcategory">전체보기</button>
        {products.map(anyname => {
          return <button className="subcategory">{anyname.country}</button>;
        })}
      </div>
      <div className="category-description">{products[0].content}</div>
      <button className="filter-btn">
        <BsFilterSquare />
        <span className="filter-txt">필터</span>
        <MdArrowDropDown />
      </button>
      <div className="borderline" />
    </div>
  );
}
