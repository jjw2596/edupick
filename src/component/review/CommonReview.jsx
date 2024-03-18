import React, { useState } from "react";
import "./Review.css";

import aiAnalysis from "../../assets/aiAnalysis.png";
import reviewPhoto2 from "../../assets/reviewPhoto2.png";
import thumb from "../../assets/thumb.png";
import scrap from "../../assets/scrap.png";
import send from "../../assets/send.png";

function CommonReview() {
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
          <p className={isClose === true ? "close" : ""}>
            쓰기 시작한 지 벌써 두 달이 됐네요. 짧다면 짧고, 길다면 긴 시간인데,
            이 기간 동안 아이도 저도 많은 걸 느꼈어요. 제일 좋았던 건 아이가
            뭔가 배우면서도 재미를 느낀다는 거였죠. 수업이 지루하지 않게
            구성되어 있어서인지, 아이가 스스로 학습에 흥미를 느끼는 모습을 보는
            게 참 좋았어요. <br />
            그리고 바로바로 피드백을 받을 수 있어서 학습의 진도나 이해도를
            실시간으로 파악할 수 있었던 점도 큰 장점이었죠. 저희 같은 학부모
            입장에서는 아이가 과제를 제대로 마쳤는지, 오늘은 어떤 학습을 했는지
            궁금할 때가 많잖아요. 덕분에 그런 걸 바로바로 확인할 수 있어서 아주
            편했습니다. <br />
            뭔가 아이의 학습 상태를 실시간으로 살펴볼 수 있으니, 마음이 한결
            놓이더라고요. 그리고 선생님들이 주는 피드백이 정말 구체적이에요.
            아이가 어떤 부분을 잘 했고, 어떤 부분이 부족한지 명확하게
            알려주시니까, 저희도 그에 맞춰 아이를 도울 수 있었어요. <br />
            가끔은 우리 아이만의 특성을 잘 파악해서, 더 개선할 수 있는 방법을
            제시해주시는 것도 정말 감사했죠. 아이가 스스로 학습 계획을 세우고,
            그에 따라 공부하는 모습도 보게 됐어요. 이런 자기 주도적 학습 습관이
            생기니, 아이 스스로 공부에 대한 책임감을 갖게 된 것 같아서
            뿌듯했습니다.
            <br /> 모든 아이가 자신만의 속도와 스타일로 학습할 수 있도록
            배려해주는 점도 정말 마음에 들어요. 마지막으로, 이 플랫폼 사용하면서
            느낀 건데, 여기서 만난 다른 학부모님들과의 정보 공유나 경험담
            나누기도 정말 큰 도움이 됐어요. <br />
            아이 학습에 관한 팁이나 조언을 주고받으며, 우리 아이 교육에 더 많은
            아이디어를 얻을 수 있었죠. 이렇게 좋은 커뮤니티가 있다는 것도 큰
            장점인 것 같아요. 정말 이 플랫폼 덕분에 우리 아이의 학습이 더욱
            풍부하고 즐거워진 것 같아요.
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

export default CommonReview;
