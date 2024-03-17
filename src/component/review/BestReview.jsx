import React from "react";
import "./BestReview.css";
import Header from "../header/Header";

import milkt from "../../assets/milkt.png";
import elihigh from "../../assets/elihigh.png";
import smartall from "../../assets/smartall.png";
import onlyone from "../../assets/onlyone.png";
import homelearn from "../../assets/homelearn.png";
import best from "../../assets/best.png";
import searchbtn from "../../assets/searchbtn.png";
import reviewPhoto from "../../assets/reviewPhoto.png";
import reviewPhotoPlus from "../../assets/reviewPhotoPlus.png";

function BestReview() {
  return (
    <>
      <Header />

      <div className="logoSlider">
        <div className="logoWrapper">
          <img src={best} alt="best" className="serviceLogo selectedLogo" />
          <img src={milkt} alt="milkt" className="serviceLogo" />
          <img src={smartall} alt="smartall" className="serviceLogo" />
          <img src={elihigh} alt="elihigh" className="serviceLogo" />
          <img src={onlyone} alt="only1" className="serviceLogo" />
          <img src={homelearn} alt="homelearn" className="serviceLogo" />
        </div>
      </div>

      <div>
        <div className="searchContainer">
          <div className="searchBar">
            <input type="text" placeholder="검색어를 입력하세요." />
            <div className="searchBtn">
              <img src={searchbtn} alt="" width="100%" height="100%" />
            </div>
          </div>
          <div className="gradeSelect">
            <select name="" id="">
              <option value="" selected>
                학년
              </option>
              <option value="">유아</option>
              <option value="">1학년</option>
              <option value="">2학년</option>
              <option value="">3학년</option>
              <option value="">4학년</option>
              <option value="">5학년</option>
              <option value="">6학년</option>
            </select>
          </div>
        </div>
        <div className="recommend">
          <span>영어 | </span>
          <span>수학 | </span>
          <span>자기주도 | </span>
          <span>장점 | </span>
          <span>단점 </span>
        </div>
      </div>

      {/* 포토리뷰 영역 */}
      <div className="photoReviewContainer">
        <div className="reviewTitleContainer">
          <div className="reviewTitle">
            <span>포토리뷰</span>
            <span className="pointTypo"> 20개</span>
          </div>
        </div>
        <div className="photoContainer">
          <div className="photoItem">
            <img src={reviewPhoto} alt="" width="100%" height="100%" />
          </div>
          <div className="photoItem">
            <img src={reviewPhoto} alt="" width="100%" height="100%" />
          </div>
          <div className="photoItem">
            <img src={reviewPhoto} alt="" width="100%" height="100%" />
          </div>
          <div className="photoItem">
            <img src={reviewPhotoPlus} alt="" width="100%" height="100%" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BestReview;
