import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // 추가된 부분
import "./Home.css";
import EmblaCarousel from "./carousel/EmblaCarousel";
import Header from "./header/Header";
import HeaderLogined from "./header/HeaderLogined";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo from "../assets/header-logo.png";
import best from "../assets/best.png";
import milkt from "../assets/milkt.png";
import elihigh from "../assets/elihigh.png";
import smartall from "../assets/smartall.png";
import onlyone from "../assets/onlyone.png";
import homelearn from "../assets/homelearn.png";
import kumon from "../assets/kumon.png";
import banner from "../assets/eduPICK's analysis banner.png";
import adbanner from "../assets/adbanner.png";
import smallKakao from "../assets/smallKakao.png";
import smallinsta from "../assets/smallInsta.png";

const OPTIONS = {
  loop: true,
};
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    arrows: true,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    // draggable: true,
  };

  const location = useLocation();
  const login = location.state?.login;

  const [isLogin, setIsLogin] = useState(login === false ? false : true);

  return (
    <>
      <div className="homeContainer">
        {/* 헤더 */}
        {/* {isLogin === false ? (
          <Header isLogin={isLogin} />
        ) : (
          <HeaderLogined isLogin={isLogin} />
        )} */}
        <Header isLogin={isLogin} />

        {/* 로고 슬라이더 */}
        <div className="logoSlider">
          <div className="logoWrapper">
            <Link to={"/best"} className="mgr-15">
              <img src={best} alt="best" className="serviceLogo" />
            </Link>
            <Link to={"/milkt"} className="mgr-15">
              <img src={milkt} alt="milkt" className="serviceLogo" />
            </Link>
            <Link to={"/smartall"} className="mgr-15">
              <img src={smartall} alt="smartall" className="serviceLogo" />
            </Link>
            <Link to={"/elihigh"} className="mgr-15">
              <img src={elihigh} alt="elihigh" className="serviceLogo" />
            </Link>
            <Link to={"/onlyone"} className="mgr-15">
              <img src={onlyone} alt="only1" className="serviceLogo" />
            </Link>
            <Link to={"/homelearn"}>
              <img src={homelearn} alt="homelearn" className="serviceLogo" />
            </Link>
          </div>
        </div>

        <div>
          <img src={banner} alt="에듀PICK의 분석" width="100%" />
        </div>

        {/* 베스트 리뷰 영역 */}
        <div className="bestContainer">
          <div>
            <Link to={"/best"}>
              <p>BEST REVIEW</p>
            </Link>
          </div>
          <Link to={"/best"}>
            <div className="bestSliderWrapper">
              {/* <Slider {...settings}> */}
              <div className="bestItem">
                <div className="bestLeft">
                  <img src={milkt} alt="milkT" width="35px" height="35px" />
                </div>
                <div className="bestRight">
                  <div className="bestTop">
                    <div>우리 아이가 재밌게... | rlaqls**** 2024.03.01</div>
                    <div>좋아요 123</div>
                  </div>
                  <div className="bestBottom">
                    집에서 하루종일 놀아주고 공부 봐주는 게 힘들어서 시작했는데
                    아이가 혼자서 이것저것 눌러보면서 ...
                  </div>
                </div>
              </div>
              <div className="bestItem">
                <div className="bestLeft">
                  <img src={milkt} alt="milkT" width="35px" height="35px" />
                </div>
                <div className="bestRight">
                  <div className="bestTop">
                    <div>초등 2학년 학습... | qtda**** 2024.03.02</div>
                    <div>좋아요 120</div>
                  </div>
                  <div className="bestBottom">
                    뭔가 아이의 학습 상태를 실시간으로 살펴볼 수 있으니, 마음이
                    한결 놓이더라고요. 그리고 선생님들이 주는...
                  </div>
                </div>
              </div>
              <div className="bestItem">
                <div className="bestLeft">
                  <img src={homelearn} alt="milkT" width="35px" height="35px" />
                </div>
                <div className="bestRight">
                  <div className="bestTop">
                    <div>스스로 공부하는 습관... | alstjr**** 2024.03.01</div>
                    <div>좋아요 113</div>
                  </div>
                  <div className="bestBottom">
                    아이가 스스로 학습 계획을 세우고, 그에 따라 공부하는 모습도
                    보게 됐어요. 이런 자기 주도적...
                  </div>
                </div>
              </div>
              <div className="bestItem">
                <div className="bestLeft">
                  <img src={smartall} alt="milkT" width="35px" height="35px" />
                </div>
                <div className="bestRight">
                  <div className="bestTop">
                    <div>스마트올 2달 사용... | whddnjs**** 2024.03.05</div>
                    <div>좋아요 98</div>
                  </div>
                  <div className="bestBottom">
                    쓰기 시작한 지 벌써 두 달이 됐네요. 짧다면 짧고, 길다면 긴
                    시간인데, 아이도 저도 많은 걸 느꼈어요...
                  </div>
                </div>
              </div>
              <div className="bestItem">
                <div className="bestLeft">
                  <img src={milkt} alt="milkT" width="35px" height="35px" />
                </div>
                <div className="bestRight">
                  <div className="bestTop">
                    <div>밀크T 장점 뽑아보기... | rlaqls**** 2024.03.01</div>
                    <div>좋아요 96</div>
                  </div>
                  <div className="bestBottom">
                    피드백을 받을 수 있어서 학습의 진도나 이해도를 실시간으로
                    파악할 수 있었던 점도 큰 장점...
                  </div>
                </div>
              </div>
              <div className="bestItem">
                <div className="bestLeft">
                  <img src={elihigh} alt="milkT" width="35px" height="35px" />
                </div>
                <div className="bestRight">
                  <div className="bestTop">
                    <div>초등 1학년 이제는... | asdgr**** 2024.03.01</div>
                    <div>좋아요 95</div>
                  </div>
                  <div className="bestBottom">
                    아이만의 특성을 잘 파악해서, 개선할 수 있는 방법을
                    제시해주시는 것도 좋았고, 아이가 스스로 학습...
                  </div>
                </div>
              </div>
              <div className="bestItem">
                <div className="bestLeft">
                  <img src={elihigh} alt="milkT" width="35px" height="35px" />
                </div>
                <div className="bestRight">
                  <div className="bestTop">
                    <div>
                      학습 현황 파악하기 용이... | rlaqls**** 2024.03.01
                    </div>
                    <div>좋아요 94</div>
                  </div>
                  <div className="bestBottom">
                    오늘은 어떤 학습을 했는지 궁금할 때가 많잖아요. 덕분에 그런
                    걸 바로바로 확인할...
                  </div>
                </div>
              </div>
              <div className="bestItem">
                <div className="bestLeft">
                  <img src={onlyone} alt="milkT" width="35px" height="35px" />
                </div>
                <div className="bestRight">
                  <div className="bestTop">
                    <div>우리 아이가 재밌게... | rlaqls**** 2024.03.03</div>
                    <div>좋아요 93</div>
                  </div>
                  <div className="bestBottom">
                    집에서 하루종일 놀아주고 공부 봐주는 게 힘들어서 시작했는데
                    아이가 혼자서 이것저것 눌러보면서 ...
                  </div>
                </div>
              </div>
              <div className="bestItem">
                <div className="bestLeft">
                  <img src={milkt} alt="milkT" width="35px" height="35px" />
                </div>
                <div className="bestRight">
                  <div className="bestTop">
                    <div>밀크T 직접 사용 후기... | rlaqls**** 2024.03.01</div>
                    <div>좋아요 92</div>
                  </div>
                  <div className="bestBottom">
                    아이가 자신만의 속도로 학습할 수 있도록 배려해주는 점도
                    마음에 들어요. 사용하면서 느낀 건데...
                  </div>
                </div>
              </div>
              <div className="bestItem">
                <div className="bestLeft">
                  <img src={homelearn} alt="milkT" width="35px" height="35px" />
                </div>
                <div className="bestRight">
                  <div className="bestTop">
                    <div>우리 아이가 재밌게... | rlaqls**** 2024.03.01</div>
                    <div>좋아요 90</div>
                  </div>
                  <div className="bestBottom">
                    집에서 하루종일 놀아주고 공부 봐주는 게 힘들어서 시작했는데
                    아이가 혼자서 이것저것 눌러보면서 ...
                  </div>
                </div>
              </div>
              {/* </Slider> */}
            </div>
          </Link>
        </div>

        {/* PICK's award 영역 */}
        <div className="awardContainer">
          <Link to={"/award"}>
            <p>PICK's award</p>
          </Link>
          <Link to={"/award"}>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </Link>
        </div>

        <div className="ads">
          <img src={adbanner} alt="" width="100%" />
        </div>

        <div className="footer">
          <div className="logo">
            <img src={logo} alt="" width="100%" height="100%" />
          </div>
          <div className="slogun">
            <span>Your pick, '에듀PICK'</span>
          </div>
          <div className="footerNav">
            <br />
            <span>ⓒ 2024. 에듀PICK all rights reserved | </span>
            <span>
              <b>개인정보처리방침 |</b>
            </span>
            <span>
              <b>이용약관 |</b>
            </span>
            <span>회사소개</span>
          </div>
          <div className="snsContainer">
            <div>
              <img src={smallKakao} alt="" width="100%" height="100%" />
              <span>고객센터</span>
            </div>
            <div>
              <img src={smallinsta} alt="" width="100%" height="100%" />
              <span>instagram</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
