import React, { useEffect, useState } from "react";
import "./ProductReview.scss";
import { BsPencil } from "react-icons/bs";
import ReviewItem from "./ReviewItem/ReviewItem";
import ReviewBox from "./ReviewBox/ReviewBox";
import useInput from "../../../useInput";

function ProductReview() {
  const [view, setView] = useState(false);
  const [className, setClassName] = useState("");
  const [review, setReview] = useState([]);
  const [limit, setLimit] = useState(3);
  const [offset, setOffset] = useState(0);
  const [titleValue, handleChange] = useInput("hi");
  const [contentValue, handleChange2] = useInput("내용");

  const openBtn = () => {
    setView(!view);
    view ? setClassName(" view") : setClassName("");
  };

  const updataOffset = () => {
    setLimit(limit);
    setOffset(limit + offset);
  };

  useEffect(() => {
    fetch(
      `http://10.58.52.229:3000/items/reviews/3?limit=${limit}&offset=${offset}`
    )
      .then(res => res.json())
      .then(data => setReview(prev => [...prev, ...data]));
  }, [limit, offset]);

  //배열 맨앞에 추가
  // const addReview =()=>{
  //   setReview(prev=> [...prev].unshift())
  // }

  //서버로 post 할 로직
  // const handleClick = () =>{
  //   title : titleValue,
  //   content : contentValue,
  // }

  return (
    <div className="review-container inner">
      <div className="title-container">
        <span>상품후기</span>
        <button onClick={openBtn}>
          <BsPencil className="pencil-icon" />
          글쓰기
        </button>
      </div>
      <ul className="review-item-container">
        {review.map(info => {
          return <ReviewItem key={info.id} info={info} />;
        })}
        <button className="more-btn" onClick={updataOffset}>
          더 많은 후기 보기
        </button>
      </ul>

      <ReviewBox
        className={className}
        setClassName={setClassName}
        titleValue={titleValue}
        handleChange={handleChange}
        contentValue={contentValue}
        handleChange2={handleChange2}
      />
    </div>
  );
}

export default ProductReview;
