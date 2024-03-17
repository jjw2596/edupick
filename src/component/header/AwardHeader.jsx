import React from "react";
import "./AwardHeader.css";
import { Link } from "react-router-dom";
import ModalContainer from "../modal/ModalContainer";
import logo from "../../assets/header-logo.png";

function AwardHeader() {
  return (
    <>
      <div className="awardHeader">
        <ModalContainer />
        <Link to={"/"}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <div className="loginBtn">Login/회원가입</div>
      </div>
    </>
  );
}

export default AwardHeader;
