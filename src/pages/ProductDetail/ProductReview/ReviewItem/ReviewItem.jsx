import React, { useState } from "react";
import "./ReviewItem.scss";
import { AiOutlineDelete } from "react-icons/ai";

function ReviewItem({ info, onDelete }) {
  const [view, setView] = useState(false);
  const { id, review_img, reviewTitle, reviewDetails, user_name } = info;

  const name = view ? " view" : "";
  const open = view ? "접기" : "펼쳐보기";

  const clickHandler = () => {
    setView(!view);
  };
  return (
    <li className="item-box" key={id}>
      <div className="user-info">
        <div className="user-id">{user_name}</div>
      </div>
      <div className="review-title">{reviewTitle}</div>
      <div className="review-wrap">
        {view && (
          <>
            <img
              src={review_img}
              alt="review-img"
              className={"review-img" + name}
            />
            <div className={"review-content" + name}>{reviewDetails}</div>
          </>
        )}
        <div className="more" onClick={clickHandler}>
          {open}
        </div>
      </div>

      <AiOutlineDelete
        className={"review-delete" + name}
        onClick={() => {
          onDelete(id);
        }}
      />
    </li>
  );
}

export default ReviewItem;
