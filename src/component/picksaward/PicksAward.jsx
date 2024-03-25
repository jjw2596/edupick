import React from "react";
import "./PicksAward.css";
import award from "../../assets/awardback.png";
import awardstar from "../../assets/awardstar.png";
import AwardHeader from "../header/AwardHeader";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";

function PicksAward() {
  return (
    <>
      <AwardHeader />
      <div className="awardBody">
        <div>
          <img src={award} alt="" width="100%" height="100%" />
        </div>

        <div className="awardTypo">
          <p>
            여러분들의 성의있고 상세한 리뷰는 많은 유저분들께 도움이 됩니다.
            <br />
            양질의 리뷰로 에듀PICK을 더 나은 서비스로 발전시켜주세요!
          </p>
          <span>에듀PICK이 뽑은 이달의 우수 리뷰를 소개합니다!</span>
        </div>

        <Grid container className="awardContainer">
          <Grid item xs={6} className="awardGrid">
            <Link to={"/milkt"}>
              <div className="awardItem">
                <div className="starContainer">
                  <img
                    src={awardstar}
                    alt=""
                    width="60px"
                    height="60px"
                    className="awardStar"
                  />
                </div>
                <div className="awardTop">
                  초3 시작은 밀크T로... <br />
                  <span className="awardWriter">rlaqls****|2024.03.01</span>
                </div>
                <div className="awardBottom">
                  <p>
                    디지털 기기 노출은 최대한 늦춰야 한다고 생각했는데
                    <br /> 즐겁게 수업하고 문제도 게임처럼 즐겁게
                    풀었어요.실력평가, 단원평가로 수업 마무리할 수 있어서
                    좋았어요.
                    <br />
                    매일 매일 공부도 하고 콘도 모으고 꾸준히 습관 만들고
                    완벽템입니다
                  </p>
                </div>
              </div>
            </Link>
          </Grid>
          <Grid item xs={6} className="awardGrid">
            <Link to={"/elihigh"}></Link>
            <div className="awardItem">
              <div className="starContainer">
                <img
                  src={awardstar}
                  alt=""
                  width="60px"
                  height="60px"
                  className="awardStar"
                />
              </div>
              <div className="awardTop">
                습관나무 키우기... <br />
                <span className="awardWriter">rlaqls****|2024.03.01</span>
              </div>
              <div className="awardBottom">
                <p>
                  코로나시기에 학습공백이 생길것 같아 시작하게 되었는데우리 딸램
                  처음부터 홀릭 된 아이스크림 홈런입니다.아이들에게 익숙한
                  캐릭터로 딱딱한 수업이 아니라 즐겁게 공부하는 습관을 들이게
                  된것 같아요...
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className="awardGrid">
            <Link to={"/homelearn"}>
              <div className="awardItem">
                <div className="starContainer">
                  <img
                    src={awardstar}
                    alt=""
                    width="60px"
                    height="60px"
                    className="awardStar"
                  />
                </div>
                <div className="awardTop">
                  스스로 찾아요 <br />
                  <span className="awardWriter">rlaqls****|2024.03.01</span>
                </div>
                <div className="awardBottom">
                  <p>
                    다른거보다 아이들이 꾸준히 책상에 앉는 습관이 꾀 길러졌다고
                    봅니다.두달동안 긴 시간은 아니더라도짧은시간 동안 재미난
                    수업도 하고바로 피드백이 있는거 같아서 아이들도 좋아하고
                    학부모 입장에서 그때그때 일 과제 마무리 했는지 안했는지
                    확인도...
                  </p>
                </div>
              </div>
            </Link>
          </Grid>
          <Grid item xs={6} className="awardGrid">
            <Link to={"/onlyone"}>
              <div className="awardItem">
                <div className="starContainer">
                  <img
                    src={awardstar}
                    alt=""
                    width="60px"
                    height="60px"
                    className="awardStar"
                  />
                </div>
                <div className="awardTop">
                  4학년 초등 남학생... <br />
                  <span className="awardWriter">rlaqls****|2024.03.01</span>
                </div>
                <div className="awardBottom">
                  <p>
                    저희는 타사 제품을 2년 사용했었어요. 그래서 더욱 비교가 잘
                    되는것 같아요. 특히 국어과목 컨텐츠가 너무 훌륭해서 매우
                    흡족합니다. 또 수업을 영어로 진행하시면서도 아이가 우리말로
                    답하는 것에 대해 핀잔을 주시지 않으시고, 영어를 좋아하지
                    않는 저희 아이가 거부감없이...
                  </p>
                </div>
              </div>
            </Link>
          </Grid>
          <Grid item xs={6} className="awardGrid">
            <Link to={"/smartall"}>
              <div className="awardItem">
                <div className="starContainer">
                  <img
                    src={awardstar}
                    alt=""
                    width="60px"
                    height="60px"
                    className="awardStar"
                  />
                </div>
                <div className="awardTop">
                  시작하길 정말 잘했어요 <br />
                  <span className="awardWriter">rlaqls****|2024.03.01</span>
                </div>
                <div className="awardBottom">
                  <p>
                    컨텐츠가 너무 다양하고 딱딱한 문제집을 푸는 것보다 영상으로
                    보고, 펜으로 쓰는 걸 너무 좋아해요. 이제는 아이가 눈뜨자마자
                    스스로 켜서 공부를 합니다. 아이가 홈런 선생님도 너무
                    좋아해서, 선생님이랑 상담하는 날을 손꼽아 기다려요. 이렇게
                    꾸준히 하다보면 자기주도 학습을 잘할 수 있을 것 같아요..!
                  </p>
                </div>
              </div>
            </Link>
          </Grid>
          <Grid item xs={6} className="awardGrid">
            <div className="awardItem">
              <div className="starContainer">
                <img
                  src={awardstar}
                  alt=""
                  width="60px"
                  height="60px"
                  className="awardStar"
                />
              </div>
              <div className="awardTop">
                초3 시작은 밀크T로... <br />
                <span className="awardWriter">rlaqls****|2024.03.01</span>
              </div>
              <div className="awardBottom">
                <p>
                  디지털 기기 노출은 최대한 늦춰야 한다고 생각했는데
                  <br /> 즐겁게 수업하고 문제도 게임처럼 즐겁게
                  풀었어요.실력평가, 단원평가로 수업 마무리할 수 있어서
                  좋았어요.
                  <br />
                  매일 매일 공부도 하고 콘도 모으고 꾸준히 습관 만들고
                  완벽템입니다
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className="awardGrid">
            <div className="awardItem">
              <div className="starContainer">
                <img
                  src={awardstar}
                  alt=""
                  width="60px"
                  height="60px"
                  className="awardStar"
                />
              </div>
              <div className="awardTop">
                습관나무 키우기... <br />
                <span className="awardWriter">rlaqls****|2024.03.01</span>
              </div>
              <div className="awardBottom">
                <p>
                  코로나시기에 학습공백이 생길것 같아 시작하게 되었는데우리 딸램
                  처음부터 홀릭 된 아이스크림 홈런입니다.아이들에게 익숙한
                  캐릭터로 딱딱한 수업이 아니라 즐겁게 공부하는 습관을 들이게
                  된것 같아요...
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className="awardGrid">
            <div className="awardItem">
              <div className="starContainer">
                <img
                  src={awardstar}
                  alt=""
                  width="60px"
                  height="60px"
                  className="awardStar"
                />
              </div>
              <div className="awardTop">
                스스로 찾아요 <br />
                <span className="awardWriter">rlaqls****|2024.03.01</span>
              </div>
              <div className="awardBottom">
                <p>
                  다른거보다 아이들이 꾸준히 책상에 앉는 습관이 꾀 길러졌다고
                  봅니다.두달동안 긴 시간은 아니더라도짧은시간 동안 재미난
                  수업도 하고바로 피드백이 있는거 같아서 아이들도 좋아하고
                  학부모 입장에서 그때그때 일 과제 마무리 했는지 안했는지
                  확인도...
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className="awardGrid">
            <div className="awardItem">
              <div className="starContainer">
                <img
                  src={awardstar}
                  alt=""
                  width="60px"
                  height="60px"
                  className="awardStar"
                />
              </div>
              <div className="awardTop">
                4학년 초등 남학생... <br />
                <span className="awardWriter">rlaqls****|2024.03.01</span>
              </div>
              <div className="awardBottom">
                <p>
                  저희는 타사 제품을 2년 사용했었어요. 그래서 더욱 비교가 잘
                  되는것 같아요. 특히 국어과목 컨텐츠가 너무 훌륭해서 매우
                  흡족합니다. 또 수업을 영어로 진행하시면서도 아이가 우리말로
                  답하는 것에 대해 핀잔을 주시지 않으시고, 영어를 좋아하지 않는
                  저희 아이가 거부감없이...
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className="awardGrid">
            <div className="awardItem">
              <div className="starContainer">
                <img
                  src={awardstar}
                  alt=""
                  width="60px"
                  height="60px"
                  className="awardStar"
                />
              </div>
              <div className="awardTop">
                시작하길 정말 잘했어요 <br />
                <span className="awardWriter">rlaqls****|2024.03.01</span>
              </div>
              <div className="awardBottom">
                <p>
                  컨텐츠가 너무 다양하고 딱딱한 문제집을 푸는 것보다 영상으로
                  보고, 펜으로 쓰는 걸 너무 좋아해요. 이제는 아이가 눈뜨자마자
                  스스로 켜서 공부를 합니다. 아이가 홈런 선생님도 너무 좋아해서,
                  선생님이랑 상담하는 날을 손꼽아 기다려요. 이렇게 꾸준히
                  하다보면 자기주도 학습을 잘할 수 있을 것 같아요..!
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default PicksAward;
