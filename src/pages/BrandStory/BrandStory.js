import React, { useState } from "react";
import TIME_LIST from "./TIME_LIST.js";
import "../BrandStory/BrandStory.scss";

function BrandStory() {
  const [inputValue, setInputValue] = useState();

  const clickHandler = () => {
    setInputValue("");
    alert("예약이 완료되었습니다.");
  };

  return (
    <>
      <div className="brand-container">
        <div className="brand-wrap inner">
          <div className="flexbox">
            <div className="brandstory-img1">
              <img src="/images/brandStory_3.jpg" />
            </div>
            <div className="brandstory-content">
              <p className="content-top">
                전통과 정통성에서 시작된 <br />
                아이콘의 탄생
              </p>
              <p className="content-bottom">
                우리의 비전은 늘 친절하게 맛있는 커피를 제공하고 <br />{" "}
                지속가능한 비즈니스 관행을 실천하는 것입니다. <br />
                환경 보호에 대한 우리의 관심과 지속 가능성 표준에 따라
                운영하려는
                <br />
                우리의 의도를 반영하고자 합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="brand-container second">
        <div className="brand-wrap inner">
          <div className="flexbox second">
            <div className="brandstory-img2">
              <img src="/images/brandStory_2.jpg" />
            </div>
            <div className="brandstory-content second">
              <p className="content-top">
                전통과 정통성에서 시작된 <br />
                아이콘의 탄생
              </p>
              <p className="content-bottom">
                우리의 비전은 늘 친절하게 맛있는 커피를 제공하고 <br />
                지속가능한 비즈니스 관행을 실천하는 것입니다. <br />
                환경 보호에 대한 우리의 관심과 지속 가능성 표준에 따라
                운영하려는
                <br />
                우리의 의도를 반영하고자 합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="brand-container third">
        <div className="brand-wrap inner">
          <div className="flexbox third">
            <div className="brandstory-img2">
              <img src="/images/brandStory_1.jpg" />
            </div>
            <div className="brandstory-content third">
              <h1>예약하기</h1>
              <div className="select-form">
                <input type="date" className="date" />
                {TIME_LIST.map(list => {
                  return (
                    <span>
                      <input
                        className="input-radio"
                        type="radio"
                        key={list.id}
                        name="time"
                        id={list.id}
                      />
                      <label htmlFor={list.id} className="select-btn">
                        {list.time}
                      </label>
                    </span>
                  );
                })}
                <label className="label">문의내용</label>
                <input className="text" type="text" />
              </div>
              <button className="submit" onClick={clickHandler}>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandStory;
