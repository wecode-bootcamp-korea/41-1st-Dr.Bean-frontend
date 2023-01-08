import React, { useEffect, useRef, useState } from "react";
import "./ProductReview.scss";
import { BsPencil } from "react-icons/bs";
import ReviewBox from "./ReviewBox/ReviewBox";
import ReviewItem from "./ReviewItem/ReviewItem";

function ProductReview() {
  const [view, setView] = useState(false);
  const [className, setClassName] = useState("");
  const [review, setReview] = useState([]);

  const openBtn = () => {
    setView(!view);
    view ? setClassName(" view") : setClassName("");
  };

  useEffect(() => {
    fetch("http://localhost:3000/data/Review.json")
      .then(res => res.json())
      .then(data => setReview(data));
  }, []);

  console.log(review);

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
          return <ReviewItem info={info} />;
        })}
        <button className="more-btn">더 많은 후기 보기</button>
      </ul>

      <ReviewBox className={className} setClassName={setClassName} />
    </div>
  );
}

export default ProductReview;
