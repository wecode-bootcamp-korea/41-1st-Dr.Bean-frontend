import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="footer-top-left">
            <span id="title">닥터빈코리아(주)</span>
            <br />
            <br />
            <span>
              서울특별시 강남구 테헤란로 427, 10층(삼성동) | 사업자번호 :
              530-81-01310
            </span>
            <br />
            <span>
              통신판매업 신고 : 제 2022-서울강남-06094 | 개인정보관리책임자 :
              송은우 | 대표이사 : 송은우
            </span>
            <br />
            <span id="phone">문의전화 : 070-4323-4050</span>
            <span>
              (10AM ~ 5PM 점심시간 12:00~13:00) | 이메일 : hello@drmartens.co.kr
            </span>
            <br />
            <span>
              팩스 : 02-431-7651 | 호스팅 제공 : 주식회사 그레이스풀레인
            </span>
            <br />
            <span>
              All Images and Contents Copyright (c) 2019 Dr. Martens-Airwair
              Korea Ltd. All Rights Reserved.
            </span>
            <div className="" />
          </div>
        </div>
        <div className="footer-bottom">
          <span>이용약관&nbsp;&nbsp;&nbsp;</span>
          <span>개인정보취급방침 &nbsp;&nbsp;&nbsp;</span>
          <span>매장찾기&nbsp;&nbsp;&nbsp;</span>
          <span>CONTACT&nbsp;&nbsp;&nbsp;</span>
          <span>사이트 맵</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
