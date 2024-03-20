import React, { useState, useEffect } from "react";
import "./Login.css";
import LoginHeader from "./../header/LoginHeader";
import charater from "../../assets/character.png";
import kakao from "../../assets/kakao.png";
import naver from "../../assets/naver.png";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";
import { Link } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(!login);
  };

  useEffect(() => {
    console.log(login);
  }, [login]);

  return (
    <>
      <LoginHeader />

      <div className="loginTop">
        <div className="loginTitle">
          <div>
            <h1>로그인</h1>
          </div>
        </div>

        <div className="loginImgContainer">
          <div>
            <img src={charater} alt="" />
          </div>
        </div>

        <div className="slogunContainer">
          <span>Your pick, '에듀PICK'</span>
        </div>
      </div>

      <div className="loginBottom">
        <div className="loginInputContainer">
          <div className="loginInputWrapper">
            <div>
              <label htmlFor="">이메일</label>
            </div>
            <div className="loginInput">
              <input type="text" placeholder="이메일" />
            </div>
          </div>
          <div className="loginInputWrapper">
            <div>
              <label htmlFor="">비밀번호</label>
            </div>
            <div className="loginInput">
              <input
                type="password"
                placeholder="비밀번호"
                // className="loginInput"
              />
            </div>
          </div>

          <div>
            <input type="checkbox" />
            <label htmlFor="">아이디 저장</label>
          </div>

          <Link to={"/"} state={{ login: login }} onClick={handleLogin}>
            <div className="loginSubmit">
              <span>Log In</span>
            </div>
          </Link>
        </div>

        <div className="findSignupContainer">
          <span>아이디/비밀번호 찾기</span>
          <span>회원가입</span>
        </div>

        <div className="snsLoginContainer">
          <div className="snsWrapper">
            <div className="snsLeft">
              <img src={kakao} alt="" />
            </div>
            <div className="snsRight">
              <span>카카오 계정으로 로그인</span>
            </div>
          </div>
          <div className="snsWrapper">
            <div className="snsLeft">
              <img src={naver} alt="" />
            </div>
            <div className="snsRight">
              <span>네이버 계정으로 로그인</span>
            </div>
          </div>
          <div className="snsWrapper">
            <div className="snsLeft">
              <img src={google} alt="" />
            </div>
            <div className="snsRight">
              <span>구글 계정으로 로그인</span>
            </div>
          </div>
          <div className="snsWrapper">
            <div className="snsLeft">
              <img src={apple} alt="" />
            </div>
            <div className="snsRight">
              <span>애플 계정으로 로그인</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
