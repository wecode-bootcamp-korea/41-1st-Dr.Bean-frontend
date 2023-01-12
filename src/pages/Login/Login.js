import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import ContentHeader from "../../components/RegisterLogin/ContentHeader";
const Login = () => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    idValue: "",
    pwValue: "",
    idlabel: "아이디",
    pwlabel: "비밀번호",
    idalert: false,
    pwalert: false,
  });
  const [isClicked, setIsClicked] = useState(false);
  const fetchHandler = () => {
    fetch("http://10.58.52.52:3000/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        userId: inputValues.idValue,
        password: inputValues.pwValue,
      }),
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("token", data.accessToken);
      });
  };

  const saveUserId = e => {
    const { value } = e.target;
    setInputValues({ ...inputValues, idValue: value });
  };
  const saveUserPw = e => {
    const { value } = e.target;
    setInputValues({ ...inputValues, pwValue: value });
  };
  const idvalidation = () => {
    if (inputValues.idValue.length <= 0) {
      setInputValues({
        ...inputValues,
        idlabel: "아이디는 필수 입력사항입니다.",
        idalert: true,
      });
    } else {
      setInputValues({
        ...inputValues,
        idlabel: "아이디",
        idalert: false,
      });
    }
  };
  const pwvalidation = () => {
    if (inputValues.pwValue.length <= 0) {
      setInputValues({
        ...inputValues,
        pwlabel: "비밀번호는 필수 입력사항입니다.",
        pwalert: true,
      });
    } else {
      setInputValues({
        ...inputValues,
        pwlabel: "비밀번호",
        pwalert: false,
      });
    }
  };
  return (
    <div className="login-section inner">
      <ContentHeader
        pageInfo="로그인"
        title="어서오세요"
        subtitle="닥터빈에 오신걸 환영합니다"
      />
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <div className="login-form">
            <label
              className={inputValues.idalert ? "id-label-invalid" : "id-label"}
            >
              {inputValues.idlabel}
            </label>
            <input
              type="text"
              className={
                inputValues.idalert ? "inputbox-id-invalid" : "inputbox"
              }
              value={inputValues.idValue}
              onChange={saveUserId}
              onKeyUp={idvalidation}
            />
            <label
              className={inputValues.pwalert ? "pw-label-invalid" : "pw-label"}
            >
              {inputValues.pwlabel}
            </label>
            <input
              type="password"
              className={
                inputValues.pwalert ? "inputbox-pw-invalid" : "inputbox"
              }
              value={inputValues.pwValue}
              onChange={e => saveUserPw(e)}
              onKeyUp={pwvalidation}
            />
            <div className="login-option">
              <div className="id-autosave">
                <div
                  className="id-autosave-btn"
                  onClick={() => setIsClicked(prevTrue => !prevTrue)}
                >
                  <FontAwesomeIcon
                    icon={isClicked === false ? faSquare : faSquareCheck}
                    className="id-autosave-checkbox"
                  />
                </div>
                <span>아이디 자동저장</span>
              </div>
              <div className="find-idpw">
                <span>아이디/비밀번호 찾기</span>
              </div>
            </div>
            <button className="login-btn" onClick={fetchHandler}>
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
