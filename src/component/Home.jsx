import React from "react";
import "./Home.css";
import ModalContainer from "./modal/ModalContainer";
import EmblaCarousel from "./carousel/EmblaCarousel";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo from "../assets/header-logo.png";
import milkt from "../assets/milkt.png";
import elihigh from "../assets/elihigh.png";
import smartall from "../assets/smartall.png";
import onlyone from "../assets/onlyone.png";
import homelearn from "../assets/homelearn.png";
import kumon from "../assets/kumon.png";
import banner from "../assets/eduPICK's analysis banner.png";

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

  return (
    <>
      <div className="homeContainer">
        {/* 헤더 */}
        <div className="header">
          <ModalContainer />
          <img src={logo} alt="logo" className="logo" />
          <div className="loginBtn">Login/회원가입</div>
        </div>

        {/* 로고 슬라이더 */}
        <div className="logoSlider">
          <div className="logoWrapper">
            <img src={milkt} alt="milkt" className="serviceLogo" />
            <img src={smartall} alt="smartall" className="serviceLogo" />
            <img src={elihigh} alt="elihigh" className="serviceLogo" />
            <img src={onlyone} alt="only1" className="serviceLogo" />
            <img src={homelearn} alt="homelearn" className="serviceLogo" />
            <img src={kumon} alt="kumon" className="serviceLogo" />
          </div>
        </div>

        <div>
          <img src={banner} alt="에듀PICK의 분석" width="100%" />
        </div>

        {/* 베스트 리뷰 영역 */}
        <div className="bestContainer">
          <div>
            <p>BEST REVIEW</p>
          </div>
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
                <img src={homelearn} alt="milkT" width="35px" height="35px" />
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
                <img src={smartall} alt="milkT" width="35px" height="35px" />
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
                <img src={elihigh} alt="milkT" width="35px" height="35px" />
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
                <img src={elihigh} alt="milkT" width="35px" height="35px" />
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
                <img src={onlyone} alt="milkT" width="35px" height="35px" />
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
                <img src={homelearn} alt="milkT" width="35px" height="35px" />
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
            {/* </Slider> */}
          </div>
        </div>

        {/* PICK's award 영역 */}
        <div className="awardContainer">
          <p>PICK's award</p>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>

        <div className="ads">Ads Banner</div>
        <div className="footer">footer</div>
      </div>
    </>
  );
}

export default Home;
