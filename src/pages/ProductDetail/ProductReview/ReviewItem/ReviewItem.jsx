import React, { useState } from "react";
import "./ReviewItem.scss";

function ReviewItem({ info }) {
  const [view, setView] = useState(false);
  const [name, setName] = useState("");
  const [open, setOpen] = useState("펼쳐보기");

  const clickHandler = () => {
    setView(!view);
    view ? setName(" view") : setName("");
    view ? setOpen("접기") : setOpen("펼쳐보기");
  };

  const { id, review_img, review_title, review_content, user_name } = info;
  return (
    <li className="item-box" key={id}>
      <div className="user-info">
        {/* <img src={user_img} /> */}
        <div className="user-id">{user_name}</div>
      </div>
      <div className="review-title">{review_title}</div>
      <div className="review-wrap">
        <img
          src={review_img}
          alt="review-img"
          className={"review-img" + name}
        />
        <div className={"review-content" + name}>{review_content}</div>
        <div className="more" onClick={clickHandler}>
          {open}
        </div>
      </div>
    </li>
  );
}

export default ReviewItem;
