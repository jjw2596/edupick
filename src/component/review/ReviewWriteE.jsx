import React from "react";
import "./ReviewWrite.css";
import Header from "../header/Header";

import milkt from "../../assets/milkt.png";
import elihigh from "../../assets/elihigh.png";
import smartall from "../../assets/smartall.png";
import onlyone from "../../assets/onlyone.png";
import homelearn from "../../assets/homelearn.png";
import starRate from "../../assets/starRate.png";
import addImg from "../../assets/addImg.png";
import { Link } from "react-router-dom";

function ReviewWrite() {
  return (
    <>
      <Header />

      <div className="logoRateContainer">
        <div className="logoRateWrapper">
          <div className="writeLogo">
            <img src={elihigh} alt="" width="100%" height="100%" />
          </div>
          <div className="rateContainer">
            <span>별점</span>
            <div>
              <img src={starRate} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="selectGrade">
        <div className="gradeWrapper">
          <span>자녀 학년</span>
          <span>(사용 시점 기준, 중복가능)</span>
          <div className="checkGrade">
            <div>
              <input type="checkbox" /> <label htmlFor="">미취학</label>
            </div>
          </div>
          <div className="checkGrade">
            <div>
              <input type="checkbox" /> <label htmlFor="">1학년</label>
            </div>
            <div>
              <input type="checkbox" /> <label htmlFor="">2학년</label>
            </div>
            <div>
              <input type="checkbox" /> <label htmlFor="">3학년</label>
            </div>
            <div>
              <input type="checkbox" /> <label htmlFor="">4학년</label>
            </div>
            <div>
              <input type="checkbox" /> <label htmlFor="">5학년</label>
            </div>
            <div>
              <input type="checkbox" /> <label htmlFor="">6학년</label>
            </div>
          </div>
        </div>
      </div>

      <div className="periodContainer">
        <div className="periodWrapper">
          <span>이용기간</span>
          <div className="periodBtnContainer">
            <div className="periodBtn selectedBtn">전체</div>
            <div className="periodBtn">무료체험</div>
            <div className="periodBtn">3개월 미만</div>
            <div className="periodBtn">6개월 미만</div>
            <div className="periodBtn">6개월 이상</div>
          </div>
        </div>
      </div>

      <div className="writeTitleContainer">
        <div className="writeTitleWrapper">
          <label>제목</label>
          <div>
            <input
              type="text"
              name=""
              id=""
              className="writeTitle"
              placeholder="제목을 입력해주세요"
            />
          </div>
        </div>
      </div>

      <div className="writeContentContainer">
        <div className="writeContentWrapper">
          <label>내용</label>
          <div>
            <textarea
              name=""
              id=""
              cols="50"
              rows="10"
              placeholder="서비스를 사용하면서 느꼈던 장점과 단점, 만족했던 기능과 s불만족스러웠던 기능 등을 자유롭게 작성해주세요. (80자 이상, 1000자 이하)"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="addImgContainer">
        <div className="addImgWrapper">
          <label htmlFor="">이미지 첨부</label>
          <span>&nbsp;*5MB 미만의 사진파일(JPG,PNG)을 첨부할 수 있습니다.</span>
          <div>
            <img src={addImg} alt="" />
          </div>
        </div>
      </div>

      <div className="addImgContainer">
        <div className="addImgWrapper">
          <label htmlFor="">인증</label>
          <span>
            &nbsp;*결제내역 혹은 아이디와 전화번호가 기입된 메모지와 학습기기{" "}
          </span>
          <div>
            <img src={addImg} alt="" />
          </div>
        </div>
      </div>

      <div className="submitBtnContainer">
        <div className="submitBtnWrapper">
          <Link to={"/milkt"}>
            <div className="cancelBtn">취소</div>
          </Link>
          <Link to={"/milkt"}>
            <div className="submitBtn">리뷰등록</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ReviewWrite;
