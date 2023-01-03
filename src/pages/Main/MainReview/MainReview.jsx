import React from "react";
import "./MainReview.scss";

function MainReview() {
  return (
    <div className="review-container">
      <div className="inner">
        <div className="review-wrap">
          <h1 className="review-title">고객리뷰</h1>
          <div className="review-line">
            <div className="left-line" />
            <div className="right-line" />
          </div>
          <p className="review-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            inventore sunt voluptatum libero optio illo cupiditate, hic
            consectetur numquam provident eos. Culpa dignissimos velit labore
            voluptates est debitis quod blanditiis.
          </p>
          <p className="review-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            inventore sunt voluptatum libero optio illo cupiditate, hic
            consectetur numquam provident eos. Culpa dignissimos velit labore
            voluptates est debitis quod blanditiis.
          </p>
          <button className="empty-btn">자세히 보기</button>
        </div>
      </div>
      <img src="/images/coffee_icon.png" className="left-img" />
      <img src="/images/coffee_icon.png" className="right-img" />
    </div>
  );
}

export default MainReview;
