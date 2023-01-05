import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";
import ContentHeader from "../../components/RegisterLogin/ContentHeader";

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
  const [inputIdValid, setInputIdValid] = useState("inputbox");
  const [inputPwValid, setInputPwValid] = useState("inputbox");
  const [pwlabel, setPwlabel] = useState("비밀번호");
  const [pwalert, setPwalert] = useState("input-label");
  const [userPwConfirmation, setUserPwConfirmation] = useState("");
  const [pwconfirmationlabel, setPwConfirmationlabel] =
    useState("비밀번호 확인");
  const [pwconfirmationalert, setPwConfirmationalert] = useState("input-label");
  const [pwconfirmationvalid, setPwconfirmationValid] = useState("inputbox");

  const saveUserName = e => {
    setUserName(e.target.value);
  };

  const saveUserId = e => {
    setUserId(e.target.value);
  };

  const saveUserPw = e => {
    setUserPw(e.target.value);
  };

  const saveUserPwConfirmation = e => {
    setUserPwConfirmation(e.target.value);
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

  const emailAddress =
    emailDomain !== "" ? `${emailId}@${emailDomain}` : `${emailId}@${domain}`;

  const idvalidation = () => {
    if (userId.length < 5) {
      setIdlabel("아이디 제한 글자 수를 맞춰주세요.");
      setIdalert("input-label-invalid");
      setInputIdValid(false);
    } else {
      setIdlabel("사용할 수 있는 아이디입니다.");
      setIdalert("input-label-valid");
      setInputIdValid(true);
    }
  };

  const pwvalidation = () => {
    const regex = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/;
    if (regex.test(userPw) === false) {
      setPwlabel("영문, 숫자, 특수문자 포함 8 ~ 20자입니다.");
      setPwalert("input-label-invalid");
      setInputPwValid(false);
    } else {
      setPwlabel("올바른 형식의 비밀번호를 입력했습니다.");
      setPwalert("input-label-valid");
      setInputPwValid(true);
    }
  };

  const pwconfirmation = () => {
    if (userPw !== userPwConfirmation) {
      setPwConfirmationlabel("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      setPwConfirmationalert("input-label-invalid");
      setPwconfirmationValid(false);
    } else {
      setPwConfirmationlabel("비밀번호와 비밀번호 확인이 일치합니다.");
      setPwConfirmationalert("input-label-valid");
      setPwconfirmationValid(true);
    }
  };

  const phoneNumber = `${phoneOne}${phoneTwo}${phoneThree}`;

  const fetchHandler = () => {
    fetch("http://10.58.52.53:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        userId: userId,
        name: userName,
        password: userPw,
        email: emailAddress,
        phoneNumber: phoneNumber,
        point: points,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  return (
    <div className="signup-section inner">
      <ContentHeader
        pageInfo="회원가입"
        title="환영합니다."
        subtitle="지금 바로 다양한 혜택을 만나보세요."
      />
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
            className={inputIdValid ? "inputbox" : "inputbox-invalid"}
            placeholder="영문 6글자 이상"
            onChange={e => saveUserId(e)}
            value={userId}
            onKeyDown={idvalidation}
          />
          <label className={pwalert}>{pwlabel}</label>
          <input
            type="password"
            className={inputPwValid ? "inputbox" : "inputbox-invalid"}
            placeholder="공백 없는 영문, 숫자, 특수문자 포함 8 ~ 20자"
            onChange={e => saveUserPw(e)}
            value={userPw}
            onKeyUp={pwvalidation}
          />
          <label className={pwconfirmationalert}>{pwconfirmationlabel}</label>
          <input
            type="password"
            className={pwconfirmationvalid ? "inputbox" : "inputbox-invalid"}
            onChange={e => saveUserPwConfirmation(e)}
            value={userPwConfirmation}
            onKeyUp={pwconfirmation}
          />
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
          <label className="input-label">포인트</label>
          <input
            type="text"
            className="inputbox"
            onChange={e => savePoints(e)}
            value={points}
          />
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
