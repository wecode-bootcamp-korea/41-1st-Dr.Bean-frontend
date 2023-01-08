import React from "react";
import "./MainReview.scss";

function MainReview() {
  return (
    <div className="review-container">
      <div className="inner">
        <div
          className="review-wrap"
          // style={{ transform: `translateY(${position})px` }}
        >
          <h1 className="review-title">Dr.Bean</h1>
          <div className="review-line">
            <div className="left-line" />
            <div className="right-line" />
          </div>
          <p className="review-content">
            왜 닥터빈인가? <br />
            주문하면 로스팅을 시작하는 원두가 무엇인지 경험하실 수 있습니다.
            <br />
            생두의 특성에 맞게 각각 다른, 로스팅 포인트로 최상의 풍미를
            선사합니다.
            <br />
            프리미엄, 스페셜티, 마이크로랏에 이르는 아라비카(뉴크롭)생두만을
            고집합니다.
            <br />
          </p>
          <p className="review-content">
            닥터빈의 친환경 활동 <br />
            커피 원산지부터 매장까지 환경 발자국 줄이기위해 노력하고 있습니다.
            <br />
            닥터빈은 자체 친환경 원두 구매 가이드라인인 C.A.F.E Practice를 통해
            커피 원산지의 환경을 보호하며 사회, 경제적 여건을 향상시켜 최상질의
            원두 커피를 안정적으로 공급받을 수 있도록 전 세계 커피 농가와 지난
            30여 년간 장기적인 상상 협력 관계를 구축해오고 있습니다.
          </p>
          <button className="empty-btn">자세히 보기</button>
        </div>
      </div>
    </div>
  );
}

export default MainReview;
