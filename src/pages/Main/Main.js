import React from "react";
import MainFilter from "./MainFilter/MainFilter";
import MainReview from "./MainReview/MainReview";
import MainScroll from "./MainScroll/MainScroll";

export default function Main() {
  return (
    <>
      <MainScroll />
      <MainFilter />
      <MainReview />
    </>
  );
}
