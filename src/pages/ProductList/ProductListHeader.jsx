import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFilterSquare } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import ProductCard from "./ProductCard";
import "./ProductListHeader.scss";

export default function ProductListHeader({ category, country }) {
  const navigate = useNavigate();

  const continentCat = MOCK_MOCK.filter(
    e => e.continentName === category.category
  );

  const countryCat = continentCat.find(e => e.countryName === country.country);

  return (
    <div className="page-description">
      <AiOutlineArrowLeft className="arrow" />
      <span className="category">{countryCat.country}</span>
      <span className="category-productnumbers">
        닥터빈의 {countryCat.country} 원두 상품을 확인해보세요!
      </span>
      <div className="subcategory-container">
        {continentCat.map(content => {
          return (
            <button
              className={
                country.country === content.countryName
                  ? "subcategory-activated"
                  : "subcategory"
              }
              key={content.id}
              onClick={e => {
                navigate(
                  `/productlist/${category.category}/${content.countryName}`
                );
              }}
            >
              {content.country}
            </button>
          );
        })}
      </div>
      <div className="category-description">{countryCat.description}</div>
      <button className="filter-btn">
        <BsFilterSquare />
        <span className="filter-txt">필터</span>
        {/* 추가사항 */}
        <MdArrowDropDown />
      </button>
      <div className="borderline" />
      <div className="list-container">
        <ProductCard country={countryCat.items} />
      </div>
    </div>
  );
}

const MOCK_MOCK = [
  {
    id: 0,
    continent: "아프리카",
    continentName: "africa",
    country: "케냐",
    countryName: "kenya",
    description: "케냐 상세설명",
    items: [
      {
        name: "케냐1",
        price: "3만원",
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      },
      {
        name: "케냐2",
        price: "3만원",
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      },
    ],
  },
  {
    id: 1,
    continent: "아프리카",
    continentName: "africa",
    country: "가나",
    countryName: "ghana",
    description: "가나 상세설명",
    items: [
      {
        name: "가나1",
        price: "3만원",
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      },
      {
        name: "가나2",
        price: "3만원",
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      },
    ],
  },
  {
    id: 2,
    continent: "아시아",
    continentName: "asia",
    country: "베트남",
    countryName: "vietnam",
    description: "베트남 상세설명",
    items: [
      {
        name: "베트남1",
        price: "3만원",
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      },
      {
        name: "베트남2",
        price: "3만원",
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      },
    ],
  },
  {
    id: 3,
    continent: "아시아",
    continentName: "asia",
    country: "일본",
    countryName: "japan",
    description: "일본 상세설명",
    items: [
      {
        name: "일본1",
        price: "3만원",
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      },
      {
        name: "일본2",
        price: "3만원",
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      },
    ],
  },
  {
    id: 4,
    continent: "중남미",
    continentName: "csamerica",
    country: "푸에르토리코",
    countryName: "puertorico",
    description: "푸에 상세설명",
    items: [
      {
        name: "푸에1",
        price: "3만원",
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      },
      {
        name: "푸에2",
        price: "3만원",
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      },
    ],
  },
  {
    id: 5,
    continent: "중남미",
    continentName: "csamerica",
    country: "페루",
    countryName: "peru",
    description: "페루 상세설명",
    items: [
      {
        name: "페루1",
        price: "3만원",
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      },
      {
        name: "페루2",
        price: "3만원",
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      },
    ],
  },
];
