import React, { useEffect, useRef, useState } from "react";
import "./ProductReview.scss";
import { BsPencil } from "react-icons/bs";
import ReviewItem from "./ReviewItem/ReviewItem";
// import ReviewBox from "./ReviewBox/ReviewBox";

function ProductReview() {
  const [view, setView] = useState(false);
  const [className, setClassName] = useState("");
  const [review, setReview] = useState([]);
  const [limit, setLimit] = useState(3);
  const [offset, setOffset] = useState(0);

  const openBtn = () => {
    setView(!view);
    view ? setClassName(" view") : setClassName("");
  };

  const updataOffset = () => {
    setLimit(limit);
    setOffset(limit + offset);
  };

  // useEffect(() => {
  //   fetch(
  //     `http://10.58.52.125:3000/items/reviews/3?limit=${limit}&offset=${offset}`
  //   )
  //     .then(res => res.json())
  //     .then(data => setReview(prev => [...prev, ...data]));
  // }, [limit, offset]);

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

      {/* <ReviewBox className={className} setClassName={setClassName} /> */}
    </div>
  );
}

export default ProductReview;
