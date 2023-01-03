import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquare,
  faCircleLeft,
  faSquareCheck,
} from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [idlabel, setIdlabel] = useState("아이디");
  const [isClicked, setIsClicked] = useState(false);

  const fetchHandler = () => {
    fetch("#", {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=utf-8" },

      body: JSON.stringify({
        userid: idValue,
        password: pwValue,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  const saveUserId = e => {
    setIdValue(e.target.value);
  };
  const saveUserPw = e => {
    setPwValue(e.target.value);
  };

  return (
    <div className="login-section">
      <div className="page-description">
        <button
          className="pageback-btn"
          onClick={() => {
            navigate("/main");
          }}
        >
          <FontAwesomeIcon icon={faCircleLeft} className="arrow-left" />
        </button>
        <h1>로그인</h1>
      </div>
      {/* <div className='loginbox'></div> */}
      <div className="welcome">
        <h2 className="welcome-title">어서오세요</h2>
        <h3 className="welcome-subtitle">닥터코드에 오신걸 환영합니다</h3>
      </div>
      <div>
        <div>
          <h3 className="logintext">로그인</h3>
        </div>
        <form onSubmit={e => e.preventDefault()}>
          <div className="login-form">
            <label className="id-label">{idlabel}</label>
            {/* 빈칸일때 '아이디는 필수입력사항입니다.' */}
            <input
              type="text"
              className="inputbox"
              value={idValue}
              onChange={e => saveUserId(e)}
            />
            <label className="pw-label">비밀번호</label>
            {/* 빈칸일때 '비밀번호는 필수입력사항입니다.' */}
            <input
              type="password"
              className="inputbox"
              value={pwValue}
              onChange={e => saveUserPw(e)}
            />
            <div className="login-option">
              <div className="id-autosave">
                <button
                  className="id-autosave-btn"
                  onClick={() => setIsClicked(prevTrue => !prevTrue)}
                >
                  <FontAwesomeIcon
                    icon={isClicked === false ? faSquare : faSquareCheck}
                    className="id-autosave-checkbox"
                  />
                </button>
                <span>아이디 자동저장</span>
              </div>
              <div className="find-idpw">
                <span>아이디/비밀번호 찾기</span>
              </div>
            </div>
            <button
              className="login-btn"
              onClick={
                //   () => {
                //   navigate("/main");
                // }
                fetchHandler
              }
            >
              로그인
            </button>
            <div className="signup-box">
              <div
                className="signup-text"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                <span>회원가입</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
