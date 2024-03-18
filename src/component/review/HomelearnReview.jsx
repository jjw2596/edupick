import React, { useState } from "react";
import "./BestReview.css";
import Header from "../header/Header";
import CommonReview from "./CommonReview";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import milkt from "../../assets/milkt.png";
import elihigh from "../../assets/elihigh.png";
import smartall from "../../assets/smartall.png";
import onlyone from "../../assets/onlyone.png";
import homelearn from "../../assets/homelearn.png";
import best from "../../assets/best.png";
import searchbtn from "../../assets/searchbtn.png";
import reviewPhoto from "../../assets/reviewPhoto.png";
import reviewPhotoPlus from "../../assets/reviewPhotoPlus.png";
import { Link } from "react-router-dom";

function HomelearnReview() {
  return (
    <>
      <Header />

      <div className="logoSlider">
        <div className="logoWrapper">
          <Link to={"/best"} className="mgr-15">
            <img src={best} alt="best" className="serviceLogo unselectLogo" />
          </Link>
          <Link to={"/milkt"} className="mgr-15">
            <img src={milkt} alt="milkt" className="serviceLogo unselectLogo" />
          </Link>
          <Link to={"/smartall"} className="mgr-15">
            <img
              src={smartall}
              alt="smartall"
              className="serviceLogo unselectLogo"
            />
          </Link>
          <Link to={"/elihigh"} className="mgr-15">
            <img
              src={elihigh}
              alt="elihigh"
              className="serviceLogo unselectLogo"
            />
          </Link>
          <Link to={"/onlyone"} className="mgr-15">
            <img
              src={onlyone}
              alt="only1"
              className="serviceLogo unselectLogo"
            />
          </Link>
          <Link to={"/homelearn"}>
            <img
              src={homelearn}
              alt="homelearn"
              className="serviceLogo selectedLogo"
            />
          </Link>
        </div>
      </div>

      <div className="boardTitle">홈런</div>

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
        {/* 베스트 리뷰 txt */}
        <div className="reviewTitleContainer">
          <div className="reviewTitle">
            <span>베스트 리뷰</span>
            <span className="pointTypo"> 100개</span>
          </div>
        </div>

        {/* 게시글 */}
        <CommonReview />
        <CommonReview />
        <CommonReview />
        <CommonReview />
        <CommonReview />
        <CommonReview />
        <CommonReview />
        <CommonReview />
        <CommonReview />
        <CommonReview />
        <CommonReview />
        <CommonReview />
        <CommonReview />
        <CommonReview />
        <CommonReview />
        <CommonReview />
        <CommonReview />
        <CommonReview />
        <CommonReview />
        <CommonReview />
      </div>

      <div className="paginationBox">
        <div>
          <Stack spacing={2}>
            <Pagination
              count={10}
              showFirstButton
              showLastButton
              size="small"
            />
            {/* <Pagination count={10} hidePrevButton hideNextButton /> */}
          </Stack>
        </div>
      </div>
    </>
  );
}

export default HomelearnReview;
