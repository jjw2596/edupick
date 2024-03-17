import React from "react";
import "./BestReview.css";
import Header from "../header/Header";

import milkt from "../../assets/milkt.png";
import elihigh from "../../assets/elihigh.png";
import smartall from "../../assets/smartall.png";
import onlyone from "../../assets/onlyone.png";
import homelearn from "../../assets/homelearn.png";
import best from "../../assets/best.png";

function BestReview() {
  return (
    <>
      <Header />

      <div className="logoSlider">
        <div className="logoWrapper">
          <img src={best} alt="best" className="serviceLogo selectedLogo" />
          <img src={milkt} alt="milkt" className="serviceLogo" />
          <img src={smartall} alt="smartall" className="serviceLogo" />
          <img src={elihigh} alt="elihigh" className="serviceLogo" />
          <img src={onlyone} alt="only1" className="serviceLogo" />
          <img src={homelearn} alt="homelearn" className="serviceLogo" />
        </div>
      </div>

      <div className="searchContainer">
        <div className="searchBar">
          <input type="text" />
        </div>
      </div>
    </>
  );
}

export default BestReview;
