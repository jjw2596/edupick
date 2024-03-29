import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ModalContainer from "../modal/ModalContainer";
import logo from "../../assets/header-logo.png";
import bell from "../../assets/bell.png";

function Header({ isLogin }) {
  return (
    <>
      <div className="header">
        <ModalContainer isLogin={isLogin} />
        <div className="mainLogo">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>

        {isLogin === true ? (
          <Link to={"/login"}>
            <div className="loginBtn">Login/회원가입</div>
          </Link>
        ) : (
          <div className="loginBtn">
            <div>
              <img src={bell} alt="" />
            </div>
            <div>
              <Link to={"/mypage"}>
                <h2>MY</h2>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
