import React, { useRef, useState } from "react";
import "./ProductReview.scss";
import { BsPencil } from "react-icons/bs";
import ReviewBox from "./ReviewBox/ReviewBox";
import ReviewItem from "./ReviewItem/ReviewItem";

function ProductReview() {
  const [view, setView] = useState(false);
  const [className, setClassName] = useState("");
  const [inputValue, setInputValue] = useState({});
  const [review, setReview] = useState([
    {
      user_img: "/images/coffee_icon.png",
      userId: "이진경",
      like: 5,
      review_title: "",
      review_img: "",
      review_content: "",
    },
  ]);
  const { review_title, review_img, review_content } = review;

  const changeHandler = e => {
    const { name, value } = e.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

  const clickHandler = () => {
    let copy = [...review];
    copy.unshift(inputValue);
    setReview(copy);
    setInputValue("");
  };

  const openBtn = () => {
    setView(!view);
    view ? setClassName(" view") : setClassName("");
  };

  // const addHandler = () => {
  //   const
  // };
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

      <ReviewBox
        className={className}
        setClassName={setClassName}
        changeHandler={changeHandler}
        createHandler={clickHandler}
      />
    </div>
  );
}

export default ProductReview;
