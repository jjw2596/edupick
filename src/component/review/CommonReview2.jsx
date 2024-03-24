import React, { useState } from "react";
import "./Review.css";

import aiAnalysis from "../../assets/aiAnalysis.png";
import reviewPhoto2 from "../../assets/reviewPhoto2.png";
import thumb from "../../assets/thumb.png";
import scrap from "../../assets/scrap.png";
import send from "../../assets/send.png";

function CommonReview2() {
  const [isClose, setIsClose] = useState(true);

  const showFullContext = () => {
    setIsClose(!isClose);
  };
  return (
    <>
      <div className="reviewWrapper">
        <div className="reviewContentWrapper">
          {/* <div className="reviewLeft">
            <img src={onlyone} alt="" width="80%" height="80%" />
          </div> */}
          <div className="commonReviewRight">
            <div className="reviewTop">
              <span>초등 2학년 솔직 사용후기!</span>
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
            가장 좋았던 건, 아이가 학습을 하면서 즐거워하는 모습을 본 것 같아요.
            이런 스마트학습지가 아니었다면 아이가 이렇게 공부에 흥미를 느낄 수
            있었을까 싶어요.
            <br />
            가장 큰 장점 중 하나는 바로 실시간 피드백인 것 같아요. 아이가 무엇을
            배우고 있는지, 어디까지 진행했는지 바로바로 알 수 있으니까, 저희
            부모 입장에서도 아이의 학습 상태를 파악하기가 훨씬 수월해졌어요.
            그리고 선생님들이 주는 피드백이 정말 구체적이에요. 아이가 어떤
            부분을 잘 하고 있는지, 어디를 더 개선해야 하는지 명확히 알려주니까,
            저희도 아이를 도울 때 방향을 잡기가 쉬워져요. <br />
            아이 스스로 학습 계획을 세우고 그 계획에 따라 공부하는 모습을 보니,
            정말 자기 주도적으로 학습하는 습관이 생긴 것 같아요. 이런 습관이
            앞으로 아이의 학습 뿐만 아니라 다른 면에서도 큰 도움이 될 거라고
            생각해요. 그리고 이 플랫폼을 통해 만난 다른 학부모님들과의 정보
            공유도 정말 큰 도움이 되고 있어요.
            <br />
            다른 가정은 어떻게 학습을 관리하는지, 어떤 팁이 있는지 공유하면서,
            저희 아이 교육에도 많은 아이디어를 얻고 있거든요. 정말 덕분에 아이의
            학습이 훨씬 더 재미있고 풍부해진 것 같아요. 앞으로도 계속 좋은
            경험을 해 나갈 수 있기를 기대하고 있습니다
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

export default CommonReview2;
