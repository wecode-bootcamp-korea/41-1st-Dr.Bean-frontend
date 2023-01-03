import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signup-section">
      <div className="page-description">
        <button
          className="pageback-btn"
          onClick={() => {
            navigate("/");
          }}
        >
          <FontAwesomeIcon icon={faCircleLeft} className="arrow-left" />
        </button>
        <h1>회원가입</h1>
      </div>
      <div className="welcome">
        <h2 className="welcome-title">환영합니다.</h2>
        <h3 className="welcome-subtitle">
          지금 바로 다양한 혜택을 만나보세요.
        </h3>
      </div>
      <form onSubmit={e => e.preventDefault()}>
        <div className="signup-form">
          <label className="input-label">이름</label>
          <input type="text" className="inputbox" value={username} />
          <label className="input-label">아이디</label>
          <input type="text" className="inputbox" value={userid} />
          <label className="input-label">비밀번호</label>
          <input type="password" className="inputbox" value={password} />
          <label className="input-label">비밀번호 확인</label>
          <input type="password" className="inputbox" />
          <label className="input-label-email">이메일</label>
          <div className="email-section">
            <div className="email-section-1">
              <input type="text" className="inputbox-email" />
              <span className="at">@</span>
              <select className="email-provider">
                <option value="1">직접입력</option>
                <option value="2">naver.com</option>
                <option value="3">gmail.com</option>
                <option value="4">hanmail.net</option>
              </select>
            </div>
            <input type="text" className="email-section-2" />
          </div>
          <label className="input-label">휴대폰</label>
          <div className="phone-section">
            <input
              type="text"
              className="inputbox-phone"
              onKeyPress={event => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              maxLength="3"
            />
            <input
              type="text"
              className="inputbox-phone"
              onKeyPress={event => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              maxLength="4"
            />
            <input
              type="text"
              className="inputbox-phone"
              onKeyPress={event => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              maxLength="4"
            />
          </div>
          <button
            className="signup-btn"
            onClick={() => {
              navigate("/main");
            }}
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
