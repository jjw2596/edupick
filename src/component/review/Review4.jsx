import React, { useState } from "react";
import "./Review.css";

import milkt from "../../assets/milkt.png";
import elihigh from "../../assets/elihigh.png";
import smartall from "../../assets/smartall.png";
import onlyone from "../../assets/onlyone.png";
import homelearn from "../../assets/homelearn.png";
import best from "../../assets/best.png";
import searchbtn from "../../assets/searchbtn.png";
import reviewPhoto from "../../assets/reviewPhoto.png";
import reviewPhotoPlus from "../../assets/reviewPhotoPlus.png";
import aiAnalysis from "../../assets/aiAnalysis.png";
import reviewPhoto2 from "../../assets/reviewPhoto2.png";
import thumb from "../../assets/thumb.png";
import scrap from "../../assets/scrap.png";
import send from "../../assets/send.png";

function Review() {
  const [isClose, setIsClose] = useState(true);

  const showFullContext = () => {
    setIsClose(!isClose);
  };
  return (
    <>
      <div className="reviewWrapper">
        <div className="reviewContentWrapper">
          <div className="reviewLeft">
            <img src={onlyone} alt="" width="80%" height="80%" />
          </div>
          <div className="reviewRight">
            <div className="reviewTop">
              <span>아이가 너무 좋아하고 컨텐츠도 풍부해요!</span>
            </div>
            <div className="reviewBottom">
              <div>
                <span>작성자 | tnals****</span>
                <span>&nbsp; &nbsp; 2024.03.01</span>
              </div>
              <div>
                <span>좋아요 123</span>
                <span>&nbsp;&nbsp;신고</span>
              </div>
            </div>
          </div>
        </div>

        <div className="aiAnalysis">
          <img src={aiAnalysis} alt="" width="100%" height="100%" />
        </div>

        <div className="reviewContent">
          <p
            className={isClose === true ? "close" : ""}
            onClick={showFullContext}
          >
            요즘 아이가 온라인 학습에 푹 빠져있어요. 처음엔 그저 새로운 거라
            호기심에서 시작한 거라고만 생각했는데, 시간이 지나면서 이게 단순한
            관심을 넘어서 아이의 학습 습관에 긍정적인 변화를 가져오고 있음을
            느꼈어요. <br />
            아이가 무엇을 배우고 있는지 확인해보니, 교과서에서만 보던 내용이
            아니라 다양한 주제에 대해 깊이 있게 다루고 있더라고요. 아이가 특히
            관심을 가지는 과학 주제에 대한 내용이 많아서인지, 요즘은 식탁에서도
            우리 가족에게 이런저런 과학 이야기를 해주곤 해요. 특히 인상 깊었던
            건 아이의 자기 주도적 학습 태도예요. 과제를 할 때 스스로 정보를
            찾아보고, 문제를 해결하기 위해 여러 시도를 하는 모습이 정말
            놀랍더라고요. <br />
            이전에는 과제를 하면서도 종종 도움을 청하곤 했는데, 이제는 스스로
            해결책을 찾으려고 노력하는 모습이 자주 보여요. 또, 이런 학습
            플랫폼을 통해 아이가 만난 친구들과의 교류도 큰 장점 중 하나인 것
            같아요. 비슷한 관심사를 가진 친구들과 정보를 공유하고, 때로는 함께
            문제를 풀기도 하며 학습에 대한 동기를 부여받는 것 같아요. <br />
            아이가 친구들과의 대화에서 학습 팁을 얻어 오기도 하고, 자신이 알고
            있는 정보를 공유하며 자신감을 얻는 모습을 보니, 이런 교류가 얼마나
            중요한지 새삼 느끼게 됐어요. <br />
            실제로 이 온라인 학습을 시작한 이후로 아이의 학교 성적도 조금씩
            오르기 시작했어요. 무엇보다 아이가 학습 자체를 즐기고 있다는 게 가장
            큰 수확이라고 생각해요. 아이가 스스로 학습에 임하는 모습을 보며,
            앞으로도 계속해서 좋은 방향으로 나아갈 수 있을 거라는 확신이 듭니다.
          </p>
        </div>

        <div className="reviewPhotoContainer">
          <div className="reviewPhoto">
            <img src={reviewPhoto2} alt="" width="100%" height="100%" />
          </div>
          <div className="reviewPhoto">
            <img src={reviewPhoto2} alt="" width="100%" height="100%" />
          </div>
          <div className="reviewPhoto">
            <img src={reviewPhoto2} alt="" width="100%" height="100%" />
          </div>
          <div className="reviewPhoto">
            <img src={reviewPhoto2} alt="" width="100%" height="100%" />
          </div>
        </div>

        <div className="reviewWrapperBottom">
          <div>
            <span>댓글</span>
            <span>&nbsp;2개</span>
          </div>
          <div className="reviewBottomRight">
            <div className="iconBox">
              <img src={thumb} alt="" width="100%" height="100%" />
            </div>
            <div className="iconBox">
              <img src={scrap} alt="" width="100%" height="100%" />
            </div>
            <div className="ellipsisBtn" onClick={showFullContext}>
              {isClose === true ? "[리뷰 펼치기]" : "[리뷰 접기]"}
            </div>
          </div>
        </div>
      </div>
      {isClose === true ? (
        ""
      ) : (
        <div className="commentContainer">
          <div className="commentTitle">댓글</div>
          <div className="commentInput">
            <textarea type="text" placeholder="댓글 내용을 입력하세요." />
            <div className="commentInputBottom">
              <div className="sendBtn">
                <img src={send} alt="" width="100%" height="100%" />
              </div>
            </div>
          </div>
          <div className="commentBox">
            <div className="commentTop">
              <div>
                <span>rlaqls****</span>
                <span>&nbsp;&nbsp;2024.03.02</span>
              </div>
              <div>신고</div>
            </div>
            <div className="commentBottom">
              <span>자녀분 학년이 어떻게 되나요??</span>
            </div>
          </div>
          <div className="commentBox">
            <div className="commentTop">
              <div>
                <span>whddnjs****</span>
                <span>&nbsp;&nbsp;2024.03.02</span>
              </div>
              <div>신고</div>
            </div>
            <div className="commentBottom">
              <span>
                혹시 특정 과목에서 아이가 가장 큰 흥미를 보인 부분이 있다면
                공유해주실 수 있나요? 그리고 아이가 스스로 학습 계획을 세우고
                실천에 옮기기까지 부모님께서는 어떤 방식으로 도와주셨는지
                궁금합니다.{" "}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Review;
