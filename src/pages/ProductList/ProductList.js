import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductListHeader from "./ProductListHeader";
import ProductCard from "./ProductCard";
import "./ProductList.scss";

export default function ProductList() {
  const params = useParams();

  if (params.category === "아프리카") {
    console.log("아프리카 맞습니다.");
  } else {
    console.log("다른나라");
  }

  return (
    <div className="list-section inner">
      <ProductListHeader category={params} products={MOCK_DATA} />
      <div className="list-container">
        <ProductCard products={MOCK_DATA[0].items} />
      </div>
    </div>
  );
}

const MOCK_DATA = [
  {
    continent: "아프리카",
    country: "케냐",
    description: "닥터빈의 아프리카 컬렉션입니다.",
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
    continent: "아프리카",
    country: "가나",
    description: "닥터빈의 유럽 컬렉션입니다.",
    items: [
      {
        img: "https://images.pexels.com/photos/14894302/pexels-photo-14894302.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "프랑스 키린야가 룬게토 카리미쿠이 AA",
        price: 18000,
        countryId: 1,
      },
      {
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "이탈리아 니에리 오타야 칭가 AA",
        price: 17000,
        countryId: 1,
      },
      {
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "스페인 키린야가 기칸다 칸고쵸 AA",
        price: 18000,
        countryId: 1,
      },
      {
        img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        name: "영국 키린야가 기칸다 칸고쵸 AA",
        price: 18000,
        countryId: 1,
      },
    ],
  },
  {
    continent: "유럽",
    country: "프랑스",
    description: "ㅁㄴㅇㅁㅇㅁㄴㅇㅁ",
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
