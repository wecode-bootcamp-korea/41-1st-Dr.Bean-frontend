import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="footer-top-left">
            <a style={{ color: "white", fontSize: 15, fontWeight: 700 }}>
              닥터빈코리아(주)
            </a>
            <br />
            <br />
            <a>
              서울특별시 강남구 테헤란로 427, 10층(삼성동) | 사업자번호 :
              530-81-01310
            </a>
            <br />
            <a>
              통신판매업 신고 : 제 2022-서울강남-06094 | 개인정보관리책임자 :
              송은우 | 대표이사 : 송은우
            </a>
            <br />
            <a style={{ color: "white", fontSize: 15, fontWeight: 700 }}>
              문의전화 : 070-4323-4050
            </a>{" "}
            <a>
              (10AM ~ 5PM 점심시간 12:00~13:00) | 이메일 : hello@drmartens.co.kr
            </a>
            <br />
            <a>팩스 : 02-431-7651 | 호스팅 제공 : 주식회사 그레이스풀레인</a>
            <br />
            <a>
              All Images and Contents Copyright (c) 2019 Dr. Martens-Airwair
              Korea Ltd. All Rights Reserved.
            </a>
            <div className="" />
          </div>
        </div>
        <div className="footer-bottom">
          <a>이용약관&nbsp;&nbsp;&nbsp;</a>
          <a>개인정보취급방침 &nbsp;&nbsp;&nbsp;</a>
          <a>매장찾기&nbsp;&nbsp;&nbsp;</a>
          <a>CONTACT&nbsp;&nbsp;&nbsp;</a>
          <a>사이트 맵</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
