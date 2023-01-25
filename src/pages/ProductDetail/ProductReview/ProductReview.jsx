import React, { useEffect, useState } from "react";
import "./ProductReview.scss";
import { BsPencil } from "react-icons/bs";
import ReviewItem from "./ReviewItem/ReviewItem";
import ReviewBox from "./ReviewBox/ReviewBox";
import useFetch from "../../../hooks/useFetch";

function ProductReview() {
  const [view, setView] = useState(false);
  const [review, setReview] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 3;
  //
  // const [review] =useFetch( `http://10.58.52.154:3000/items/reviews/1?limit=${limit}&offset=${offset}`)

  const handleModal = () => {
    setView(prev => !prev);
  };

  const closeBtn = () => {
    setView(false);
  };

  const [state, setState] = useState({
    reviewTitle: "",
    reviewImage: "",
    reviewDetails: "",
  });

  const handleChangeState = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetch(
      `http://10.58.52.154:3000/items/reviews/1?limit=${limit}&offset=${offset}`
    )
      .then(res => res.json())
      .then(data => setReview(prev => [...prev, ...data]));
  }, [limit, offset]);

  const updataOffset = () => {
    setOffset(offset + limit);
  };

  const goToServer = () => {
    fetch("http://10.58.52.154:3000/items/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        rates: 5,
        itemId: 1,
        reviewTitle: state.reviewTitle,
        reviewDetails: state.reviewDetails,
        reviewImage: state.reviewImage,
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
      });
  };

  const onDelete = targetId => {
    fetch(`http://10.58.52.154:3000/items/reviews/${targetId}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(res => res.text())
      .then(res => {
        if (res === "ok") {
          setReview(review.filter(it => it.id !== targetId));
        }
      });
  };

  return (
    <div className="review-container inner">
      <div className="title-container">
        <span>상품후기</span>
        <button onClick={handleModal}>
          <BsPencil className="pencil-icon" />
          글쓰기
        </button>
      </div>
      <ul className="review-item-container">
        {review.map(info => {
          return <ReviewItem key={info.id} info={info} onDelete={onDelete} />;
        })}
        <button className="more-btn" onClick={updataOffset}>
          더 많은 후기 보기
        </button>
      </ul>
      {view && (
        <ReviewBox
          goToServer={goToServer}
          handleModal={handleModal}
          state={state}
          setState={setState}
          review={review}
          setReview={setReview}
          handleChangeState={handleChangeState}
          closeBtn={closeBtn}
        />
      )}
    </div>
  );
}

export default ProductReview;
