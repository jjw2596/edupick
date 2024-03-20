import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import ModalContainer from "../modal/ModalContainer";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import logo from "../../assets/header-logo.png";

function LoginHeader() {
  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <ArrowBackIosNewIcon />
        </Link>
        <div className="mainLogo">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        {/* <div className="loginBtn">Login/회원가입</div> */}
      </div>
    </>
  );
}

export default LoginHeader;
