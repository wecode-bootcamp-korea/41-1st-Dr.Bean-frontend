import React from "react";
import "./ProductReview.scss";
import { BsPencil } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const REVIEW_LIST = [
  {
    id: 1,
    img: "/images/coffee_icon.png",
    userId: "이진경",
    comment: "신발이 너무 예뻐용",
    like: 5,
  },
  {
    id: 2,
    img: "/images/coffee_icon.png",
    userId: "이진경",
    comment: "신발이 너무 예뻐용",
    like: 5,
  },
  {
    id: 3,
    img: "/images/coffee_icon.png",
    userId: "이진경",
    comment: "신발이 너무 예뻐용",
    like: 5,
  },
];

function ProductReview() {
  return (
    <div className="review-container inner">
      <div className="title-container">
        <span>상품후기</span>
        <button>
          <BsPencil className="pencil-icon" />
          글쓰기
        </button>
      </div>
      <ul className="review-item-container">
        {REVIEW_LIST.map(info => {
          return (
            <li className="item-box" key={info.id}>
              <div className="user-info">
                <img src={info.img} />
                <div className="user-id">{info.userId}</div>
              </div>
              <div className="comment">{info.comment}</div>
              <div className="like-container">
                <div className="like">별별별별별</div>
                <div className="more">펼쳐보기</div>
              </div>
            </li>
          );
        })}
      </ul>
      <button className="more-btn">더 많은 후기 보기</button>

      <form className="form-container">
        <div className="title-container">
          <span className="title">상품후기 작성</span>
          <IoMdClose />
        </div>
        <div className="like input-wrap">
          <label>별점</label>
          <input type="text" />
        </div>
        <div className="writer input-wrap">
          <label>작성자</label>
          <input type="text" />
        </div>
        <div className="writer input-wrap">
          <label>후기 내용</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}

export default ProductReview;
