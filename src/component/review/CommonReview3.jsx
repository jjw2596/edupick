import React, { useState } from "react";
import "./Review.css";

import aiAnalysis from "../../assets/aiAnalysis.png";
import reviewPhoto2 from "../../assets/reviewPhoto2.png";
import thumb from "../../assets/thumb.png";
import scrap from "../../assets/scrap.png";
import send from "../../assets/send.png";

function CommonReview3() {
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
              <span>공부의 즐거움을 알려주는 최고의 방법!</span>
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
            가장 인상 깊었던 것은 아이가 학습하는 과정에서 즐거움을 느꼈다는
            점입니다. 학습지가 지루하지 않게 구성되어 있어 아이가 스스로 학습에
            흥미를 느끼는 모습을 보는 것은 정말 가슴 뿌듯한 일이었습니다. <br />
            또한, 실시간으로 제공되는 피드백 덕분에 아이의 학습 진도와 이해도를
            파악할 수 있어 매우 편리했습니다. 학부모로서 아이의 학습 상태를
            실시간으로 확인할 수 있다는 것은 마음을 놓이게 했습니다. 선생님들의
            구체적인 피드백은 아이가 어떤 부분을 잘 하고 있는지, 어떤 부분이
            부족한지를 명확하게 알려주어, 아이를 보다 효과적으로 지원할 수 있게
            해주었습니다. <br />
            아이가 자신만의 학습 계획을 세우고, 스스로 학습하는 모습을 보니 자기
            주도적 학습 습관이 생긴 것 같아 뿌듯함을 느꼈습니다. 이 플랫폼은
            모든 아이가 자신의 속도와 스타일로 학습할 수 있도록 배려해주며,
            학부모 간의 정보 공유와 경험담 나누기를 통해 우리 아이 교육에 더
            많은 아이디어를 얻을 수 있게 해주었습니다.
            <br />
            스마트학습지를 사용하면서 아이의 학습이 더욱 풍부해지고 즐거워진
            것을 느낄 수 있어 매우 만족스러웠습니다. 이처럼 다양한 장점을 가진
            스마트학습지는 아이들에게 학습의 즐거움을 가르쳐주고, 학부모에게는
            아이의 학습 상태를 효과적으로 관리할 수 있는 수단을 제공합니다.
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

export default CommonReview3;
