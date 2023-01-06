import React from "react";
import { useParams } from "react-router-dom";
import ProductListHeader from "./ProductListHeader";
import ProductCard from "./ProductCard";
import "./ProductList.scss";

const MOCK_DATA = [
  {
    continent: "아프리카",
    country: "케냐",
    content: "닥터빈의 아프리카 컬렉션입니다.",
    items: [
      {
        img: "https://images.pexels.com/photos/14894302/pexels-photo-14894302.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "케냐 키린야가 룬게토 카리미쿠이 AA",
        price: 18000,
        countryId: 1,
      },
      {
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "케냐 니에리 오타야 칭가 AA",
        price: 17000,
        countryId: 1,
      },
      {
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "케냐 키린야가 기칸다 칸고쵸 AA",
        price: 18000,
        countryId: 1,
      },
    ],
  },
  {
    continent: "유럽",
    country: "프랑스",
    content: "ㅁㄴㅇㅁㅇㅁㄴㅇㅁ",
    items: [
      {
        img: "https://images.pexels.com/photos/14894302/pexels-photo-14894302.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "케냐 키린야가 룬게토 카리미쿠이 AA",
        price: 18000,
        countryId: 1,
      },
      {
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "케냐 니에리 오타야 칭가 AA",
        price: 17000,
        countryId: 1,
      },
      {
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "케냐 키린야가 기칸다 칸고쵸 AA",
        price: 18000,
        countryId: 1,
      },
    ],
  },
  {
    continent: "유럽",
    country: "프랑스",
    content: "ㅁㄴㅇㅁㅇㅁㄴㅇㅁ",
    items: [
      {
        img: "https://images.pexels.com/photos/14894302/pexels-photo-14894302.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "케냐 키린야가 룬게토 카리미쿠이 AA",
        price: 18000,
        countryId: 1,
      },
      {
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "케냐 니에리 오타야 칭가 AA",
        price: 17000,
        countryId: 1,
      },
      {
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "케냐 키린야가 기칸다 칸고쵸 AA",
        price: 18000,
        countryId: 1,
      },
    ],
  },
];

export default function ProductList() {
  const params = useParams();
  console.log(MOCK_DATA[1].country);

  return (
    <div className="list-section inner">
      <ProductListHeader category={params} products={MOCK_DATA} />
      <div className="list-container">
        {MOCK_DATA.map(content => {
          return <ProductCard test={content} />;
        })}
      </div>
    </div>
  );
}
