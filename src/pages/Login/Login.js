import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import ContentHeader from "../../components/RegisterLogin/ContentHeader";

const Login = () => {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [idlabel, setIdlabel] = useState("아이디");
  const [pwlabel, setPwlabel] = useState("비밀번호");
  const [idalert, setIdalert] = useState(false);
  const [pwalert, setPwalert] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const fetchHandler = () => {
    fetch("http://10.58.52.135:3000/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        user_id: idValue,
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

  const idvalidation = () => {
    if (idValue.length <= 0) {
      setIdlabel("아이디는 필수 입력사항입니다.");
      setIdalert(true);
    } else {
      setIdlabel("아이디");
      setIdalert(false);
    }
  };

  const pwvalidation = () => {
    if (pwValue.length <= 0) {
      setPwlabel("비밀번호는 필수 입력사항입니다.");
      setPwalert(true);
    } else {
      setPwlabel("비밀번호");
      setPwalert(false);
    }
  };

  return (
    <div className="login-section">
      <ContentHeader
        pageInfo="로그인"
        title="어서오세요"
        subtitle="닥터코드에 오신걸 환영합니다"
      />
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <div className="login-form">
            <label className={idalert ? "id-label-invalid" : "id-label"}>
              {idlabel}
            </label>
            <input
              type="text"
              className={idalert ? "inputbox-id-invalid" : "inputbox"}
              value={idValue}
              onChange={e => saveUserId(e)}
              onKeyUp={idvalidation}
            />
            <label className={pwalert ? "pw-label-invalid" : "pw-label"}>
              {pwlabel}
            </label>
            <input
              type="password"
              className={pwalert ? "inputbox-pw-invalid" : "inputbox"}
              value={pwValue}
              onChange={e => saveUserPw(e)}
              onKeyUp={pwvalidation}
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
