import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";

export default function Signup() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [idlabel, setIdlabel] = useState("아이디");
  const [idalert, setIdalert] = useState("input-label");
  const [userPw, setUserPw] = useState("");
  const [emailId, setEmailId] = useState("");
  const [domain, setDomain] = useState("");
  const [emailDomain, setEmailDomain] = useState("");
  const [phoneOne, setPhoneOne] = useState("");
  const [phoneTwo, setPhoneTwo] = useState("");
  const [phoneThree, setPhoneThree] = useState("");
  const [points, setPoints] = useState("");

  const saveUserName = e => {
    setUserName(e.target.value);
  };

  const saveUserId = e => {
    setUserId(e.target.value);
  };

  const saveUserPw = e => {
    setUserPw(e.target.value);
  };

  const domainSelect = e => {
    setDomain(e.target.value);
  };

  const saveEmailId = e => {
    setEmailId(e.target.value);
  };

  const saveEmailDomain = e => {
    setEmailDomain(e.target.value);
  };

  const savePhoneOne = e => {
    setPhoneOne(e.target.value);
  };

  const savePhoneTwo = e => {
    setPhoneTwo(e.target.value);
  };

  const savePhoneThree = e => {
    setPhoneThree(e.target.value);
  };

  const savePoints = e => {
    setPoints(e.target.value);
  };

  const emailAddress = () => {
    if (emailDomain !== "") {
      return `${emailId}@${emailDomain}`;
    } else {
      return `${emailId}@${domain}`;
    }
  };

  const idvalidation = () => {
    if (userId.length < 5) {
      setIdlabel("아이디 제한 글자 수를 맞춰주세요.");
      setIdalert(true);
    } else {
      setIdlabel("사용할 수 있는 아이디입니다.");
      setIdalert(false);
    }
  };

  const phoneNumber = `${phoneOne}${phoneTwo}${phoneThree}`;

  const fetchHandler = () => {
    fetch("http://10.58.52.135:3000/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        username: userName,
        userid: userId,
        password: userPw,
        phone: phoneNumber,
        email: emailAddress,
        points: points,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

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
          <input
            type="text"
            className="inputbox"
            onChange={e => saveUserName(e)}
            value={userName}
          />
          <label className={idalert}>{idlabel}</label>
          <input
            type="text"
            className="inputbox"
            placeholder="영문 6글자 이상"
            onChange={e => saveUserId(e)}
            value={userId}
          />
          <label className="input-label">비밀번호</label>
          <input
            type="password"
            className="inputbox"
            placeholder="공백 없는 영문, 숫자 포함 6 ~ 10자"
            onChange={e => saveUserPw(e)}
            value={userPw}
          />
          <label className="input-label">비밀번호 확인</label>
          <input type="password" className="inputbox" />
          <label className="input-label-email">이메일</label>
          <div className="email-section">
            <div className="email-section-1">
              <input
                type="text"
                className="inputbox-email"
                onChange={e => saveEmailId(e)}
                value={emailId}
              />
              <span className="at">@</span>
              <select
                onChange={domainSelect}
                value={domain}
                className="email-provider"
              >
                <option value="1">직접입력</option>
                <option value="naver.com">naver.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="hanmail.net">hanmail.net</option>
              </select>
            </div>
            <input
              type="text"
              className="email-section-2"
              disabled={
                domain === "naver.com" ||
                domain === "gmail.com" ||
                domain === "hanmail.net"
                  ? "disabled"
                  : ""
              }
              onChange={e => saveEmailDomain(e)}
              value={emailDomain}
            />
          </div>
          <label className="input-label">휴대폰</label>
          <div className="phone-section">
            <input
              type="text"
              onChange={e => savePhoneOne(e)}
              value={phoneOne}
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
              onChange={e => savePhoneTwo(e)}
              value={phoneTwo}
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
              onChange={e => savePhoneThree(e)}
              value={phoneThree}
              className="inputbox-phone"
              onKeyPress={event => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              maxLength="4"
            />
          </div>
          <label
            className="input-label"
            onChange={e => savePoints(e)}
            value={points}
          >
            포인트
          </label>
          <input type="text" className="inputbox" />
          <button
            className="signup-btn"
            onClick={
              fetchHandler
              //   () => {
              //   navigate("/main");
              // }
            }
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
