import React, { useState } from "react";
import "./ReviewItem.scss";

function ReviewItem({ info, review }) {
  const [view, setView] = useState(false);
  const [name, setName] = useState("");
  const [open, setOpen] = useState("펼쳐보기");

  const clickHandler = () => {
    setView(!view);
    view ? setName(" view") : setName("");
    view ? setOpen("접기") : setOpen("펼쳐보기");
  };

  return (
    <li className="item-box" key={info.id}>
      <div className="user-info">
        <img src={info.user_img} />
        <div className="user-id">{info.user_id}</div>
      </div>
      <div className="review-title">{info.review_title}</div>
      <div className="review-wrap">
        <img
          src={info.review_img}
          alt="review-img"
          className={"review-img" + name}
        />
        <div className={"review-content" + name}>{info.review_content}</div>
        <div className="more" onClick={clickHandler}>
          {open}
        </div>
      </div>
    </li>
  );
}

export default ReviewItem;
