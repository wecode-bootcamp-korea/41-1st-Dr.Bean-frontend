import "./ReviewBox.scss";
import { IoMdClose } from "react-icons/io";
import { BiWon } from "react-icons/bi";
import { ImStarFull } from "react-icons/im";
import { useState } from "react";

function ReviewBox({
  className,
  setClassName,
  titleValue,
  handleChange,
  contentValue,
  handleChange2,
}) {
  const closeBtn = () => {
    setClassName("");
  };

  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const starArray = [1, 2, 3, 4, 5];

  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
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
            <div className="option-select">
              <span className="option-select size">size : 어쩌구</span>
              <span className="option-select grinder">grinder : 저쩌구</span>
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
            <div className="like-wrap">
              {starArray.map(el => {
                return (
                  <ImStarFull
                    key={el}
                    className="like"
                    onClick={handleStarClick}
                  />
                );
              })}
            </div>
          </div>
          <div className="writer input-wrap">
            <label>제목</label>
            <input
              type="text"
              className="input-box"
              value={titleValue}
              onChange={handleChange}
            />
          </div>

          <div className="content-container">
            <div className="add-photo input-wrap">
              <label>사진</label>
              <input type="file" accept="/image/*" />
            </div>
            <div className="content input-wrap">
              <label>내용</label>
              <textarea
                type="text"
                value={contentValue}
                onChange={handleChange2}
              />
            </div>
          </div>
        </div>
        <div className="box-btn-container">
          <button className="empty-btn">취소</button>
          <button className="full-btn">등록</button>
        </div>
      </form>
    </div>
  );
}

export default ReviewBox;
