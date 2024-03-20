import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ModalContainer from "../modal/ModalContainer";
import logo from "../../assets/header-logo.png";
import bell from "../../assets/bell.png";

function HeaderLogined({ isLogin }) {
  return (
    <>
      <div className="header">
        <ModalContainer isLogin={isLogin} />
        <div className="mainLogo">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <Link to={"/login"}>
          <div className="loginBtn">
            <div>
              <img src={bell} alt="" />
            </div>
            <div>
              <h2>MY</h2>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default HeaderLogined;
