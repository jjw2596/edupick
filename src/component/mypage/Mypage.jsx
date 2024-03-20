import React, { useEffect, useState } from "react";
import "./Mypage.css";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import milkt from "../../assets/milkt.png";
import elihigh from "../../assets/elihigh.png";
import smartall from "../../assets/smartall.png";
import onlyone from "../../assets/onlyone.png";
import homelearn from "../../assets/homelearn.png";

function Mypage() {
  const [myInfo, setMyInfo] = useState(true);
  const [scrap, setScrap] = useState(false);
  const [written, setWritten] = useState(false);

  const onTabInfo = () => {
    setMyInfo(true);
    setScrap(false);
    setWritten(false);
  };
  const onTabScrap = () => {
    setMyInfo(false);
    setScrap(true);
    setWritten(false);
  };
  const onTabWritten = () => {
    setMyInfo(false);
    setScrap(false);
    setWritten(true);
  };

  const [isClose, setIsClose] = useState(true);
  const [isClose2, setIsClose2] = useState(true);
  const [isClose3, setIsClose3] = useState(true);

  const showFullContext = () => {
    setIsClose(!isClose);
  };
  const showFullContext2 = () => {
    setIsClose2(!isClose2);
  };
  const showFullContext3 = () => {
    setIsClose3(!isClose3);
  };

  return (
    <>
      <Header />

      <div className="mypageTabContainer">
        <div className="mypageTabWrapper">
          <div
            className={myInfo === true ? "selectedTab" : ""}
            onClick={onTabInfo}
          >
            나의 정보
          </div>
          <div
            className={scrap === true ? "selectedTab" : ""}
            onClick={onTabScrap}
          >
            스크랩한 리뷰
          </div>
          <div
            className={written === true ? "selectedTab" : ""}
            onClick={onTabWritten}
          >
            내가 쓴 리뷰
          </div>
        </div>
      </div>

      {myInfo === true ? (
        <div>
          <div className="myInfoContainer">
            <div className="myInfoWrapper">
              <div>
                <div className="infoLabel">이름</div>
                <div className="infoContent">:&nbsp;&nbsp;전종원</div>
              </div>
              <div>
                <div className="infoLabel">생년월일</div>
                <div className="infoContent">:&nbsp;&nbsp;1998.08.29</div>
              </div>
              <div>
                <div className="infoLabel">이메일</div>
                <div className="infoContent">
                  :&nbsp;&nbsp;whddnjs1234@naver.com
                </div>
              </div>
              <div>
                <div className="infoLabel">휴대폰 번호</div>
                <div className="infoContent">
                  <span>:&nbsp;&nbsp;010-1234-0987</span>
                  <span className="phone">휴대폰 번호 수정</span>
                </div>
              </div>
              <div>
                <div className="infoLabel">성별</div>
                <div className="infoContent">:&nbsp;&nbsp;남자</div>
              </div>

              <div className="childContainer">
                <div className="childInfoTitle">
                  <span>자녀 학년 정보</span>
                </div>
                <div className="childAddContainer">
                  <div className="childAddBtn">자녀 추가</div>
                </div>
                <div className="childGradeContainer">
                  <div className="childItem">
                    <div>자녀 1</div>
                    <div>
                      <select name="" id="">
                        <option value="">미취학</option>
                        <optgroup label="초등">
                          <option value="">초등1</option>
                          <option value="">초등2</option>
                          <option value="">초등3</option>
                          <option value="">초등4</option>
                          <option value="">초등5</option>
                          <option value="">초등6</option>
                        </optgroup>
                        <optgroup label="중등">
                          <option value="">중등1</option>
                          <option value="">중등2</option>
                          <option value="">중등3</option>
                        </optgroup>
                        <optgroup label="고등">
                          <option value="">고등1</option>
                          <option value="">고등2</option>
                          <option value="">고등3</option>
                        </optgroup>
                      </select>
                    </div>
                    <div>X</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="marketingContainer">
            <div className="marketingWrapper">
              <div>
                <span>마케팅 수신 동의</span>
                <div>
                  <div className="agreeBtn">
                    <span>동의</span>
                  </div>
                  <div className="disagreeBtn">
                    <span>비동의</span>
                  </div>
                </div>
              </div>

              <div className="marketingContext">
                <span>마케팅 수신 동의 내용</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {scrap === true ? (
        <div>
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={milkt} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>시작하길 정말 잘했어요</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div>
                  컨텐츠가 너무 다양하고 딱딱한 문제집을 푸는 것보다 영상으로
                  보고, 펜으로 쓰는 걸 너무 좋아해요. 이제는...
                </div>
                <Link to={"/milkt"}>
                  <div className="more">[더보기]</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={homelearn} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>습관나무 키우기...</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div>
                  코로나시기에 학습공백이 생길것 같아 시작하게 되었는데 우리
                  딸램 처음부터 홀릭 된 아이스크림 홈런입니다....
                </div>
                <div className="more">
                  <Link to={"/homelearn"}>[더보기]</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={elihigh} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>스스로 찾아요</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div>
                  다른거보다 아이들이 꾸준히 책상에 앉는 습관이 꾀 길러졌다고
                  봅니다.두달동안 긴 시간은 아니더라도 짧은시간 동안...
                </div>
                <Link to={"/elihigh"}>
                  <div className="more">[더보기]</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={milkt} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>4학년 초등 남학생...</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div>
                  디지털 기기 노출은 최대한 늦춰야 한다고 생각했는데 즐겁게
                  수업하고 문제도 게임처럼 즐겁게 풀었어요...
                </div>
                <Link to={"/milkt"}>
                  <div className="more">[더보기]</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={elihigh} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>스스로 찾아요</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div>
                  다른거보다 아이들이 꾸준히 책상에 앉는 습관이 꾀 길러졌다고
                  봅니다.두달동안 긴 시간은 아니더라도 짧은시간 동안...
                </div>
                <Link to={"/elihigh"}>
                  <div className="more">[더보기]</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={homelearn} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>습관나무 키우기...</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div>
                  코로나시기에 학습공백이 생길것 같아 시작하게 되었는데 우리
                  딸램 처음부터 홀릭 된 아이스크림 홈런입니다....
                </div>
                <div className="more">
                  <Link to={"/homelearn"}>[더보기]</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={milkt} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>시작하길 정말 잘했어요</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div>
                  컨텐츠가 너무 다양하고 딱딱한 문제집을 푸는 것보다 영상으로
                  보고, 펜으로 쓰는 걸 너무 좋아해요. 이제는...
                </div>
                <Link to={"/milkt"}>
                  <div className="more">[더보기]</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={homelearn} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>습관나무 키우기...</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div>
                  코로나시기에 학습공백이 생길것 같아 시작하게 되었는데 우리
                  딸램 처음부터 홀릭 된 아이스크림 홈런입니다....
                </div>
                <div className="more">
                  <Link to={"/homelearn"}>[더보기]</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={elihigh} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>스스로 찾아요</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div>
                  다른거보다 아이들이 꾸준히 책상에 앉는 습관이 꾀 길러졌다고
                  봅니다.두달동안 긴 시간은 아니더라도 짧은시간 동안...
                </div>
                <Link to={"/elihigh"}>
                  <div className="more">[더보기]</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={milkt} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>4학년 초등 남학생...</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div>
                  디지털 기기 노출은 최대한 늦춰야 한다고 생각했는데 즐겁게
                  수업하고 문제도 게임처럼 즐겁게 풀었어요...
                </div>
                <Link to={"/milkt"}>
                  <div className="more">[더보기]</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={elihigh} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>스스로 찾아요</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div>
                  다른거보다 아이들이 꾸준히 책상에 앉는 습관이 꾀 길러졌다고
                  봅니다.두달동안 긴 시간은 아니더라도 짧은시간 동안...
                </div>
                <Link to={"/elihigh"}>
                  <div className="more">[더보기]</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={homelearn} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>습관나무 키우기...</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div>
                  코로나시기에 학습공백이 생길것 같아 시작하게 되었는데 우리
                  딸램 처음부터 홀릭 된 아이스크림 홈런입니다....
                </div>
                <div className="more">
                  <Link to={"/homelearn"}>[더보기]</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={milkt} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>시작하길 정말 잘했어요</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div>
                  컨텐츠가 너무 다양하고 딱딱한 문제집을 푸는 것보다 영상으로
                  보고, 펜으로 쓰는 걸 너무 좋아해요. 이제는...
                </div>
                <Link to={"/milkt"}>
                  <div className="more">[더보기]</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={homelearn} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>습관나무 키우기...</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div>
                  코로나시기에 학습공백이 생길것 같아 시작하게 되었는데 우리
                  딸램 처음부터 홀릭 된 아이스크림 홈런입니다....
                </div>
                <div className="more">
                  <Link to={"/homelearn"}>[더보기]</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={elihigh} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>스스로 찾아요</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div>
                  다른거보다 아이들이 꾸준히 책상에 앉는 습관이 꾀 길러졌다고
                  봅니다.두달동안 긴 시간은 아니더라도 짧은시간 동안...
                </div>
                <Link to={"/elihigh"}>
                  <div className="more">[더보기]</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={milkt} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>4학년 초등 남학생...</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div>
                  디지털 기기 노출은 최대한 늦춰야 한다고 생각했는데 즐겁게
                  수업하고 문제도 게임처럼 즐겁게 풀었어요...
                </div>
                <Link to={"/milkt"}>
                  <div className="more">[더보기]</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={elihigh} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>스스로 찾아요</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div>
                  다른거보다 아이들이 꾸준히 책상에 앉는 습관이 꾀 길러졌다고
                  봅니다.두달동안 긴 시간은 아니더라도 짧은시간 동안...
                </div>
                <Link to={"/elihigh"}>
                  <div className="more">[더보기]</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={homelearn} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>습관나무 키우기...</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div>
                  코로나시기에 학습공백이 생길것 같아 시작하게 되었는데 우리
                  딸램 처음부터 홀릭 된 아이스크림 홈런입니다....
                </div>
                <div className="more">
                  <Link to={"/homelearn"}>[더보기]</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={elihigh} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>스스로 찾아요</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div>
                  다른거보다 아이들이 꾸준히 책상에 앉는 습관이 꾀 길러졌다고
                  봅니다.두달동안 긴 시간은 아니더라도 짧은시간 동안...
                </div>
                <Link to={"/elihigh"}>
                  <div className="more">[더보기]</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={milkt} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>시작하길 정말 잘했어요</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div>
                  컨텐츠가 너무 다양하고 딱딱한 문제집을 푸는 것보다 영상으로
                  보고, 펜으로 쓰는 걸 너무 좋아해요. 이제는...
                </div>
                <Link to={"/milkt"}>
                  <div className="more">[더보기]</div>
                </Link>
              </div>
            </div>
          </div>

          <div className="paginationBox">
            <div>
              <Stack spacing={2}>
                <Pagination
                  count={3}
                  showFirstButton
                  showLastButton
                  size="small"
                />
                {/* <Pagination count={10} hidePrevButton hideNextButton /> */}
              </Stack>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {written === true ? (
        <div className="writtenContainer">
          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={milkt} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>시작하길 정말 잘했어요</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div className={isClose === true ? "myClose" : ""}>
                  <p>
                    쓰기 시작한 지 벌써 두 달이 됐네요. 짧다면 짧고, 길다면 긴
                    시간인데, 이 기간 동안 아이도 저도 많은 걸 느꼈어요. 제일
                    좋았던 건 아이가 뭔가 배우면서도 재미를 느낀다는 거였죠.
                    수업이 지루하지 않게 구성되어 있어서인지, 아이가 스스로
                    학습에 흥미를 느끼는 모습을 보는 게 참 좋았어요. <br />
                    그리고 바로바로 피드백을 받을 수 있어서 학습의 진도나
                    이해도를 실시간으로 파악할 수 있었던 점도 큰 장점이었죠.
                    저희 같은 학부모 입장에서는 아이가 과제를 제대로 마쳤는지,
                    오늘은 어떤 학습을 했는지 궁금할 때가 많잖아요. 덕분에 그런
                    걸 바로바로 확인할 수 있어서 아주 편했습니다. <br />
                    뭔가 아이의 학습 상태를 실시간으로 살펴볼 수 있으니, 마음이
                    한결 놓이더라고요. 그리고 선생님들이 주는 피드백이 정말
                    구체적이에요. 아이가 어떤 부분을 잘 했고, 어떤 부분이
                    부족한지 명확하게 알려주시니까, 저희도 그에 맞춰 아이를 도울
                    수 있었어요. <br />
                  </p>
                </div>

                <div className="writtenBottom">
                  <div>
                    <div onClick={showFullContext}>[더보기]</div>
                    <div>수정</div>
                    <div>삭제</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={homelearn} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>초등학교 3학년 남학생 학습...</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div className={isClose2 === true ? "myClose" : ""}>
                  <p>
                    모든 아이가 자신만의 속도와 스타일로 학습할 수 있도록
                    배려해주는 점도 정말 마음에 들어요. 마지막으로, 이 플랫폼
                    사용하면서 느낀 건데, 여기서 만난 다른 학부모님들과의 정보
                    공유나 경험담 나누기도 정말 큰 도움이 됐어요. <br />
                    아이 학습에 관한 팁이나 조언을 주고받으며, 우리 아이 교육에
                    더 많은 아이디어를 얻을 수 있었죠. 이렇게 좋은 커뮤니티가
                    있다는 것도 큰 장점인 것 같아요. 정말 이 플랫폼 덕분에 우리
                    아이의 학습이 더욱 풍부하고 즐거워진 것 같아요.
                  </p>
                </div>

                <div className="writtenBottom">
                  <div>
                    <div onClick={showFullContext2}>[더보기]</div>
                    <div>수정</div>
                    <div>삭제</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="myInfoContainer">
            <div className="scrapWrapper">
              <div>
                <img src={elihigh} alt="" width="100%" height="100%" />
              </div>
              <div>
                <div>
                  <b>스스로하는 학습 습관 키우기..!</b>
                </div>
                <div className="idNDate">rlaqls**** 2024.03.01</div>
                <div className={isClose3 === true ? "myClose" : ""}>
                  <p>
                    바로바로 피드백을 받을 수 있어서 학습의 진도나 이해도를
                    실시간으로 파악할 수 있었던 점도 큰 장점이었죠. 저희 같은
                    학부모 입장에서는 아이가 과제를 제대로 마쳤는지, 오늘은 어떤
                    학습을 했는지 궁금할 때가 많잖아요. 덕분에 그런 걸 바로바로
                    확인할 수 있어서 아주 편했습니다. <br />
                    뭔가 아이의 학습 상태를 실시간으로 살펴볼 수 있으니, 마음이
                    한결 놓이더라고요. 그리고 선생님들이 주는 피드백이 정말
                    구체적이에요. 아이가 어떤 부분을 잘 했고, 어떤 부분이
                    부족한지 명확하게 알려주시니까, 저희도 그에 맞춰 아이를 도울
                    수 있었어요. <br />
                    가끔은 우리 아이만의 특성을 잘 파악해서, 더 개선할 수 있는
                    방법을 제시해주시는 것도 정말 감사했죠. 아이가 스스로 학습
                    계획을 세우고, 그에 따라 공부하는 모습도 보게 됐어요. 이런
                    자기 주도적 학습 습관이 생기니, 아이 스스로 공부에 대한
                    책임감을 갖게 된 것 같아서 뿌듯했습니다.
                  </p>
                </div>

                <div className="writtenBottom">
                  <div>
                    <div onClick={showFullContext3}>[더보기]</div>
                    <div>수정</div>
                    <div>삭제</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Mypage;
