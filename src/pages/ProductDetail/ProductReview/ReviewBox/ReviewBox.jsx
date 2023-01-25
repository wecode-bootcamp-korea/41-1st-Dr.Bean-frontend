import "./ReviewBox.scss";
import { IoMdClose } from "react-icons/io";
import { BiWon } from "react-icons/bi";
import { ImStarFull } from "react-icons/im";
import { useRef } from "react";

function ReviewBox({
  state,
  setState,
  review,
  setReview,
  handleChangeState,
  handleModal,
  goToServer,
  closeBtn,
}) {
  const titleInput = useRef();
  const contetnInput = useRef();
  const currentId = useRef(0);
  const starArray = [1, 2, 3, 4, 5];

  const onCreate = (reviewTitle, reviewDetails) => {
    const newItem = {
      reviewTitle,
      reviewDetails,
      id: currentId.current,
    };
    currentId.current += 1;
    setReview([newItem, ...review]);
  };

  const handleSubmit = () => {
    if (state.reviewTitle.length < 1) {
      titleInput.current.focus();
      return;
    }

    if (state.reviewDetails.length < 5) {
      contetnInput.current.focus();
      return;
    }

    onCreate(state.reviewTitle, state.review_details);
    setState({
      reviewTitle: "",
      reviewDetails: "",
    });
    alert("후기 등록이 완료됐습니다.");
    closeBtn();
    goToServer();
  };

  return (
    <div className="form-bg">
      <form className="form-container">
        <div className="title-container">
          <span className="title">상품후기 작성</span>
          <IoMdClose size={50} onClick={handleModal} className="close-btn" />
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
                return <ImStarFull key={el} className="like" />;
              })}
            </div>
          </div>
          <div className="writer input-wrap">
            <label>제목</label>
            <input
              type="text"
              className="input-box"
              name="reviewTitle"
              value={state.reviewTitle}
              onChange={handleChangeState}
              ref={titleInput}
            />
          </div>

          <div className="content-container">
            <div className="add-photo input-wrap">
              <label>사진</label>
              <input
                type="file"
                accept="/image/*"
                name="review_img"
                value={state.review_img}
              />
            </div>
            <div className="content input-wrap">
              <label>내용</label>
              <textarea
                type="text"
                name="reviewDetails"
                value={state.reviewDetails}
                onChange={handleChangeState}
                ref={contetnInput}
              />
            </div>
          </div>
        </div>
        <div className="box-btn-container">
          <div className="empty-btn" onClick={closeBtn}>
            취소
          </div>

          <div className="full-btn" onClick={handleSubmit}>
            등록
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewBox;
