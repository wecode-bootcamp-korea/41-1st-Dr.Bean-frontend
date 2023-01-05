import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFilterSquare } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";

export default function ProductListHeader() {
  return (
    <div className="page-description">
      <AiOutlineArrowLeft className="arrow" />
      <span className="category">여성 부츠</span>
      <span className="category-productnumbers">
        75개의 여성 부츠 상품이 있습니다.
      </span>
      <div className="subcategory-container">
        <button className="subcategory">부츠</button>
        <button className="subcategory">슈즈</button>
        <button className="subcategory">전체보기</button>
      </div>
      <div className="category-description">
        닥터마틴의 여성 부츠 컬렉션입니다.
      </div>
      <button className="filter-btn">
        <BsFilterSquare />
        <span className="filter-txt">필터</span>
        <MdArrowDropDown />
      </button>
    </div>
  );
}
