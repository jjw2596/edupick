import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import milkt from "../../assets/milkt.png";
import elihigh from "../../assets/elihigh.png";
import smartall from "../../assets/smartall.png";
import onlyone from "../../assets/onlyone.png";
import homelearn from "../../assets/homelearn.png";

const Modal = ({ modalClose }) => {
  const onCloseModal = (e) => {
    console.log("e.target: ", e.target);
    console.log("e.tarcurrentTargetget: ", e.currentTarget);
    if (e.target === e.currentTarget) {
      modalClose();
    }
  };
  return (
    <div className="modal__container" onClick={onCloseModal}>
      <div className="modal">
        <CloseIcon
          fontSize="large"
          className="modal__button"
          onClick={modalClose}
        />
        <div className="welcome">
          <p>OOO님 환영합니다.</p>
        </div>

        <div className="recent">
          <div>
            <span>최근 본 리뷰</span>
          </div>
          <div className="recentWrapper">
            <div className="recentItem">
              <div className="recentLeft">
                <img src={milkt} alt="" width="80%" height="80%" />
              </div>
              <div className="recentRight">
                <span>우리 아이가 좋아해요 정말...</span>
              </div>
            </div>
            <div className="recentItem">
              <div className="recentLeft">
                <img src={homelearn} alt="" width="80%" height="80%" />
              </div>
              <div className="recentRight">
                <span>스스로 공부하는 습관을...</span>
              </div>
            </div>
            <div className="recentItem">
              <div className="recentLeft">
                <img src={elihigh} alt="" width="80%" height="80%" />
              </div>
              <div className="recentRight">
                <span>초3 남자아이 공부 습관...</span>
              </div>
            </div>
            <div className="recentItem">
              <div className="recentLeft">
                <img src={milkt} alt="" width="80%" height="80%" />
              </div>
              <div className="recentRight">
                <span>최고의 학습지..!</span>
              </div>
            </div>
            <div className="recentItem">
              <div className="recentLeft">
                <img src={onlyone} alt="" width="80%" height="80%" />
              </div>
              <div className="recentRight">
                <span>초등 공부습관 형성에 좋아...</span>
              </div>
            </div>
          </div>
        </div>

        {/* 아코디언 네비게이션 메뉴 */}
        <div className="accordionMenu">
          <AccordionSummary aria-controls="panel1-content" id="panel1-header">
            <Link to={"/"} onClick={onCloseModal}>
              <HomeIcon />
              HOME
            </Link>
          </AccordionSummary>
          <AccordionSummary aria-controls="panel1-content" id="panel1-header">
            <Link path={"/"} onClick={onCloseModal}>
              에듀PICK의 분석
            </Link>
          </AccordionSummary>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div>REVIEW</div>
            </AccordionSummary>
            <AccordionDetails>
              <Link to={"/best"} onClick={onCloseModal}>
                <li>Best Review</li>
              </Link>
              <Link to={"/milkt"}>
                <li>밀크T 초등</li>
              </Link>
              <Link to={"/elihigh"}>
                <li>엘리하이</li>
              </Link>
              <Link to={"/homelearn"}>
                <li>아이스크림 홈런</li>
              </Link>
              <Link to={"/onlyone"}>
                <li>온리원</li>
              </Link>
              <Link to={"/smartall"}>
                <li>스마트올</li>
              </Link>
            </AccordionDetails>
          </Accordion>
          <AccordionSummary aria-controls="panel1-content" id="panel1-header">
            <Link path={"/"} onClick={onCloseModal}>
              공지사항
            </Link>
          </AccordionSummary>
        </div>

        <div className="logOutContainer">
          <div className="logOutBtn">로그아웃 </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
