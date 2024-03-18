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
import aiAnalysis from "../../assets/aiAnalysis.png";
import reviewPhoto2 from "../../assets/reviewPhoto2.png";

function BestReview() {
  return (
    <>
      <Header />

      <div className="logoSlider">
        <div className="logoWrapper">
          <img src={best} alt="best" className="serviceLogo selectedLogo" />
          <img src={milkt} alt="milkt" className="serviceLogo unselectLogo" />
          <img
            src={smartall}
            alt="smartall"
            className="serviceLogo unselectLogo"
          />
          <img
            src={elihigh}
            alt="elihigh"
            className="serviceLogo unselectLogo"
          />
          <img src={onlyone} alt="only1" className="serviceLogo unselectLogo" />
          <img
            src={homelearn}
            alt="homelearn"
            className="serviceLogo unselectLogo"
          />
        </div>
      </div>

      <div className="boardTitle">Best Review</div>

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
          <span>추천 검색어 | </span>
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

      {/* 리뷰 게시글 영역 */}
      <div className="reviewContainer">
        {/* 전체리뷰 txt */}
        <div className="reviewTitleContainer">
          <div className="reviewTitle">
            <span>베스트 리뷰</span>
            <span className="pointTypo"> 100개</span>
          </div>
        </div>

        {/* 게시글 */}
        <div className="reviewWrapper">
          <div className="reviewContentWrapper">
            <div className="reviewLeft">
              <img src={elihigh} alt="" width="80%" height="80%" />
            </div>
            <div className="reviewRight">
              <div className="reviewTop">
                <span>아이가 너무 좋아하고 컨텐츠도 풍부해요!</span>
              </div>
              <div className="reviewBottom">
                <div>
                  <span>작성자 | tnals****</span>
                  <span>&nbsp; &nbsp; 2024.03.01</span>
                </div>
                <div>
                  <span>좋아요 123</span>
                  <span>&nbsp;&nbsp;신고</span>
                </div>
              </div>
            </div>
          </div>

          <div className="aiAnalysis">
            <img src={aiAnalysis} alt="" width="100%" height="100%" />
          </div>

          <div className="reviewContent">
            <p>
              다른거보다 아이들이 꾸준히 책상에 앉는 습관이 꾀 길러졌다고
              봅니다.두달동안 긴 시간은 아니더라도짧은시간 동안 재미난 수업도
              하고바로 피드백이 있는거 같아서 아이들도 좋아하고 학부모 입장에서
              그때그때 일 과제 마무리 했는지 안했는지 확인도...
            </p>
          </div>

          <div className="reviewPhotoContainer">
            <div className="reviewPhoto">
              <img src={reviewPhoto2} alt="" width="100%" height="100%" />
            </div>
            <div className="reviewPhoto">
              <img src={reviewPhoto2} alt="" width="100%" height="100%" />
            </div>
            <div className="reviewPhoto">
              <img src={reviewPhoto2} alt="" width="100%" height="100%" />
            </div>
            <div className="reviewPhoto">
              <img src={reviewPhoto2} alt="" width="100%" height="100%" />
            </div>
          </div>

          <div className="reviewWrapperBottom">
            <div>댓글 2개</div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestReview;
