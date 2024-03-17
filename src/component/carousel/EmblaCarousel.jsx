import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
// import {
//   NextButton,
//   PrevButton,
//   usePrevNextButtons,
// } from "./EmblaCarouselArrowButtons";
import "./Embla.css";

import award1 from "../../assets/award1.png";
import award2 from "../../assets/award2.png";
import award3 from "../../assets/award3.png";
import award4 from "../../assets/award4.png";
import award5 from "../../assets/award5.png";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, speed: 0.7 }),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  //   const {
  //     prevBtnDisabled,
  //     nextBtnDisabled,
  //     onPrevButtonClick,
  //     onNextButtonClick,
  //   } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on("autoScroll:play", () => setIsPlaying(true))
      .on("autoScroll:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(false));
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {/* {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
            </div>
          ))} */}
          <div className="embla__slide">
            <img src={award1} alt="award" width="100%" height="100%" />
            {/* <div className="embla__slide__number">
            </div> */}
          </div>
          <div className="embla__slide">
            <img src={award2} alt="award" width="100%" height="100%" />
            {/* <div className="embla__slide__number">
            </div> */}
          </div>
          <div className="embla__slide">
            <img src={award3} alt="award" width="100%" height="100%" />
            {/* <div className="embla__slide__number">
            </div> */}
          </div>
          <div className="embla__slide">
            <img src={award4} alt="award" width="100%" height="100%" />
            {/* <div className="embla__slide__number">
            </div> */}
          </div>
          <div className="embla__slide">
            <img src={award5} alt="award" width="100%" height="100%" />
            {/* <div className="embla__slide__number">
            </div> */}
          </div>
          <div className="embla__slide">
            <img src={award1} alt="award" width="100%" height="100%" />
            {/* <div className="embla__slide__number">
            </div> */}
          </div>
          <div className="embla__slide">
            <img src={award2} alt="award" width="100%" height="100%" />
            {/* <div className="embla__slide__number">
            </div> */}
          </div>
          <div className="embla__slide">
            <img src={award3} alt="award" width="100%" height="100%" />
            {/* <div className="embla__slide__number">
            </div> */}
          </div>
          <div className="embla__slide">
            <img src={award4} alt="award" width="100%" height="100%" />
            {/* <div className="embla__slide__number">
            </div> */}
          </div>
          <div className="embla__slide">
            <img src={award5} alt="award" width="100%" height="100%" />
            {/* <div className="embla__slide__number">
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
