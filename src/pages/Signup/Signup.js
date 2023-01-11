import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";
import ContentHeader from "../../components/RegisterLogin/ContentHeader";

export default function Signup() {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    userName: "",
    userId: "",
    idlabel: "아이디",
    idalert: "input-label",
    userPw: "",
    emailId: "",
    domain: "",
    emailDomain: "",
    phoneOne: "",
    phoneTwo: "",
    phoneThree: "",
    points: "",
    inputIdValid: "inputbox",
    inputPwValid: "inputbox",
    pwlabel: "비밀번호",
    pwalert: "input-label",
    userPwConfirmation: "",
    pwconfirmationlabel: "비밀번호 확인",
    pwconfirmationalert: "input-label",
    pwconfirmationvalid: "inputbox",
  });

  const saveUserInfo = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const emailAddress =
    inputValues.emailDomain !== ""
      ? `${inputValues.emailId}@${inputValues.emailDomain}`
      : `${inputValues.emailId}@${inputValues.domain}`;

  const idvalidation = () => {
    if (inputValues.userId.length < 5) {
      setInputValues({
        ...inputValues,
        idlabel: "아이디 제한 글자 수를 맞춰주세요.",
        idalert: "input-label-invalid",
        inputIdValid: false,
      });
    } else {
      setInputValues({
        ...inputValues,
        idlabel: "사용할 수 있는 아이디입니다.",
        idalert: "input-label-valid",
        inputIdValid: true,
      });
    }
  };

  const pwvalidation = () => {
    const regex = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/;
    if (regex.test(inputValues.userPw) === false) {
      setInputValues({
        ...inputValues,
        pwlabel: "영문, 숫자, 특수문자 포함 8 ~ 20자입니다.",
        pwalert: "input-label-invalid",
        inputPwValid: false,
      });
    } else {
      setInputValues({
        ...inputValues,
        pwlabel: "올바른 형식의 비밀번호를 입력했습니다.",
        pwalert: "input-label-valid",
        inputPwValid: true,
      });
    }
  };

  const pwconfirmation = () => {
    if (inputValues.userPw !== inputValues.userPwConfirmation) {
      setInputValues({
        ...inputValues,
        pwconfirmationlabel: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
        pwconfirmationalert: "input-label-invalid",
        pwconfirmationvalid: false,
      });
    } else {
      setInputValues({
        ...inputValues,
        pwconfirmationlabel: "비밀번호와 비밀번호 확인이 일치합니다.",
        pwconfirmationalert: "input-label-valid",
        pwconfirmationvalid: true,
      });
    }
  };

  const phoneNumber = `${inputValues.phoneOne}${inputValues.phoneTwo}${inputValues.phoneThree}`;

  const fetchHandler = e => {
    e.preventDefault();
    fetch("http://10.58.52.52:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        userId: inputValues.userId,
        name: inputValues.userName,
        password: inputValues.userPw,
        email: emailAddress,
        phoneNumber: phoneNumber,
        point: inputValues.points,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === "SIGNUP_SUCCESS") {
          alert("회원가입을 축하드립니다.");
          navigate("/login");
        } else {
          alert("아이디 또는 비밀번호 양식을 확인해주세요.");
        }
      });
  };

  return (
    <div className="signup-section inner">
      <ContentHeader
        pageInfo="회원가입"
        title="환영합니다."
        subtitle="지금 바로 다양한 혜택을 만나보세요."
      />
      <form onSubmit={fetchHandler}>
        <div className="signup-form">
          <label className="input-label">이름</label>
          <input
            type="text"
            name="userName"
            className="inputbox"
            onChange={e => saveUserInfo(e)}
            value={inputValues.userName}
          />
          <label className={inputValues.idalert}>{inputValues.idlabel}</label>
          <input
            type="text"
            name="userId"
            className={
              inputValues.inputIdValid ? "inputbox" : "inputbox-invalid"
            }
            placeholder="영문 6글자 이상"
            onChange={e => saveUserInfo(e)}
            value={inputValues.userId}
            onKeyDown={idvalidation}
          />
          <label className={inputValues.pwalert}>{inputValues.pwlabel}</label>
          <input
            type="password"
            name="userPw"
            className={
              inputValues.inputPwValid ? "inputbox" : "inputbox-invalid"
            }
            placeholder="공백 없는 영문, 숫자, 특수문자 포함 8 ~ 20자"
            onChange={e => saveUserInfo(e)}
            value={inputValues.userPw}
            onKeyUp={pwvalidation}
          />
          <label className={inputValues.pwconfirmationalert}>
            {inputValues.pwconfirmationlabel}
          </label>
          <input
            type="password"
            name="userPwConfirmation"
            className={
              inputValues.pwconfirmationvalid ? "inputbox" : "inputbox-invalid"
            }
            onChange={e => saveUserInfo(e)}
            value={inputValues.userPwConfirmation}
            onKeyUp={pwconfirmation}
          />
          <label className="input-label-email">이메일</label>
          <div className="email-section">
            <div className="email-section-1">
              <input
                type="text"
                name="emailId"
                className="inputbox-email"
                onChange={e => saveUserInfo(e)}
                value={inputValues.emailId}
              />
              <span className="at">@</span>
              <select
                onChange={e => saveUserInfo(e)}
                name="domain"
                value={inputValues.domain}
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
              name="emailDomain"
              className="email-section-2"
              disabled={
                inputValues.domain === "naver.com" ||
                inputValues.domain === "gmail.com" ||
                inputValues.domain === "hanmail.net"
                  ? "disabled"
                  : ""
              }
              onChange={e => saveUserInfo(e)}
              value={inputValues.emailDomain}
            />
          </div>
          <label className="input-label">휴대폰</label>
          <div className="phone-section">
            <input
              type="text"
              name="phoneOne"
              onChange={e => saveUserInfo(e)}
              value={inputValues.phoneOne}
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
              name="phoneTwo"
              onChange={e => saveUserInfo(e)}
              value={inputValues.phoneTwo}
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
              name="phoneThree"
              onChange={e => saveUserInfo(e)}
              value={inputValues.phoneThree}
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
            name="points"
            className="inputbox"
            onChange={e => saveUserInfo(e)}
            value={inputValues.points}
          />
          <button className="signup-btn">회원가입</button>
        </div>
      </form>
    </div>
  );
}
