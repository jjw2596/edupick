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
            <img src={smartall} alt="" width="80%" height="80%" />
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
            디지털 시대의 교육 방식이 얼마나 다양하고 효과적일 수 있는지 새삼
            깨닫고 있어요. 아이가 처음으로 이 플랫폼을 접했을 때만 해도, 솔직히
            말하면 제가 조금은 회의적이었어요. 과연 온라인 학습만으로 아이가
            제대로 된 교육을 받을 수 있을까 하는 걱정도 있었고요. <br />
            하지만 몇 주가 지나지 않아서 제 걱정이 기우였음을 알게 되었습니다.
            온라인 학습을 통해 아이는 매일 새로운 것을 배우고 있고, 무엇보다
            배운 내용에 대해 열정적으로 이야기합니다. <br />
            예를 들어, 최근에는 우주에 대한 단원을 학습하고 나서는 하루가 멀다
            하고 우주와 별에 관한 이야기를 해요. 아이의 이런 모습을 보면서,
            온라인 학습이 단순히 지식을 전달하는 것을 넘어서 아이들의 호기심을
            자극하고, 스스로 배우고 싶은 욕구를 불러일으킨다는 걸 느낄 수
            있었습니다.
            <br />
            또한, 학습의 가장 큰 장점 중 하나는 바로 유연성이에요. 아이가
            학교에서 돌아와서나 주말에나 자기 스케줄에 맞춰서 학습할 수
            있으니까요. 이런 유연성 덕분에 아이는 학습을 더 이상 부담스러운 일로
            여기지 않고, 자신의 일상 속에 자연스럽게 녹여내고 있어요. 아이가
            온라인 학습을 하면서 가장 인상 깊었던 변화 중 하나는 바로 문제 해결
            능력이에요. <br />
            다양한 문제를 접하고, 그것을 해결해 나가는 과정에서 아이는 스스로
            생각하는 힘을 기르고 있어요. 처음에는 어려워하던 문제도 시간이
            지나면서 점차 스스로 해결하는 모습을 보여주고 있고, 이 과정에서 얻은
            성취감이 아이에게 큰 자신감으로 이어지고 있습니다. <br />
            이렇게 학습을 통해 아이가 겪는 긍정적인 변화들을 보며, 저 역시
            디지털 시대의 교육 방식에 대해 새로운 시각을 갖게 되었어요. 앞으로도
            아이가 이런 학습 방식을 통해 더 많은 것을 배우고, 성장해 나가길
            기대하고 있습니다.
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
