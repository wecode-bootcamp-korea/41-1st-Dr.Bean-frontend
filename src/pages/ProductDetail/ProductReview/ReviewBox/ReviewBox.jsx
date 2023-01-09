import "./ReviewBox.scss";
import { IoMdClose } from "react-icons/io";
import { BiWon } from "react-icons/bi";
import { useState } from "react";

function ReviewBox({ className, setClassName, onCreate }) {
  const closeBtn = () => {
    setClassName("");
  };

  const [state, setState] = useState({
    review_title: "",
    review_img: "",
    review_content: "",
  });

  const handleChangeState = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={"form-bg" + className}>
      <form className="form-container">
        <div className="title-container">
          <span className="title">상품후기 작성</span>
          <IoMdClose size={50} onClick={closeBtn} className="close-btn" />
        </div>
        <div className="order-container">
          <img src="/images/coffee_icon.png" alt="상품사진" />
          <div className="order-info">
            <div className="name">상품이름</div>
            <div className="option">
              <span className="option size">size : 어쩌구</span>
              <span className="option grinder">grinder : 저쩌구</span>
            </div>

            <div className="price">
              <BiWon className="won" />
              17,000
            </div>
          </div>
        </div>
        <div className="input-container">
          <div className="like input-wrap">
            <label>별점</label>
            <input type="text" className="input-box" />
          </div>
          <div className="writer input-wrap">
            <label>제목</label>
            <input
              type="text"
              className="input-box"
              onChange={handleChangeState}
            />
          </div>

          <div className="content-container">
            <div className="add-photo input-wrap">
              <label>사진</label>
              <input
                type="file"
                accept="/image/*"
                onChange={handleChangeState}
              />
            </div>
            <div className="content input-wrap">
              <label>내용</label>
              <textarea type="text" onChange={handleChangeState} />
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button className="empty-btn">취소</button>
          <button className="full-btn">등록</button>
        </div>
      </form>
    </div>
  );
}

export default ReviewBox;
