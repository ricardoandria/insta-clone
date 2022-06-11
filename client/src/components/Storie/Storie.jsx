import React from "react";
import "./storie.scss";
import Carousel from "react-elastic-carousel";

const Storie = () => {
  return (
    <div className="storie">
      <div className="storieContainer">
        <div className="sItem">
          <img src="/images/cat.webp" alt="" className="storieImg" />
          <span className="name">Ricardo</span>
        </div>
        <div className="sItem">
          <img src="/images/cat.webp" alt="" className="storieImg" />
          <span className="name">Ricardo</span>
        </div>
        <div className="sItem">
          <img src="/images/cat.webp" alt="" className="storieImg" />
          <span className="name">Ricardo</span>
        </div>
        <div className="sItem">
          <img src="/images/cat.webp" alt="" className="storieImg" />
          <span className="name">Ricardo</span>
        </div>
        <div className="sItem">
          <img src="/images/cat.webp" alt="" className="storieImg" />
          <span className="name">Ricardo</span>
        </div>
        <div className="sItem">
          <img src="/images/cat.webp" alt="" className="storieImg" />
          <span className="name">Ricardo</span>
        </div>
      </div>
    </div>
  );
};

export default Storie;
