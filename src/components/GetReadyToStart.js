import React from "react";
import "./Styles/GetReadyToStart.css";
import getreadytostart from "../assets/getreadytostart.png";
import getsStar from "../assets/gets-star.png";
import appleicon from "../assets/appleicon.png";

export default function GetReadyToStart() {
  return (
    <>
    <div className="gtsBigcontainer">

      <div className="gts">
        <div className="gtsImage2">
          <img src={getsStar} alt="getreadytostart" />
        </div>
      </div>
      <div className="gtsImage1">
        <img src={getreadytostart} alt="getreadytostart" />
        <div className="gtsText">
          <h1>Ready To Get Started?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cum
            ratione impedit ut.
          </p>
          <button>
            Download <img src={appleicon} alt="" />
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
