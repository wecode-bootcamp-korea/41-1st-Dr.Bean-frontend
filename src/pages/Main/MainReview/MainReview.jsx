import React from "react";
import "./MainReview.scss";

function MainReview() {
  return (
    <div className="reviewbox-container">
      <div className="inner">
        <div
          className="review-wrap"
          // style={{ transform: `translateY(${position})px` }}
        >
          <h1 className="review-title">커피와 지속가능성</h1>
          <div className="review-line">
            <div className="left-line" />
            <div className="right-line" />
          </div>
          <p className="review-content">
            생두를 수확하는 일부터 소비자에게 건네지는 일까지 모든 구성원의
            지속적인 환경적, 경제적, 사회적 건강은 커피산업이 생존하는데
            필수적입니다.
            <br />
            커피 업계에서도 최근 10년 사이 지속가능성은 뜨거운 주제였습니다.
            <br />
          </p>
          <p className="review-content">
            커피 재배 농가의 삶의 질을 개선하고 수질과 토양, 생물 다양성을
            보호하며 장기적인 관점에서 안정적으로 커피를 생산하는 시스템을
            말합니다.
            <br />
            지속가능성은 미래의 사람들의 요구를 위태롭게 하지 않으면서 오늘날
            사람들의 요구를 충족시키는 것이 중요합니다.
            <br />
          </p>
          <p className="review-content">
            커피와 관련하여 우리는 지구, 사람 그리고 긍정적인 이익을 포함하는
            결론을 고려해야 합니다.
            <br />
            자연을 보존하고 그것을 재배하고 가공하는 사람들에게 더 나은 생계를
            제공하는 방식으로 재배되는 커피가 우선되어야 할 것입니다.
          </p>
          <button className="empty-btn">자세히 보기</button>
        </div>
      </div>
    </div>
  );
}

export default MainReview;
