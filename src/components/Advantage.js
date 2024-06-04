import React from "react";
import "./Styles/Advantage.css";
import Advantageimage from "../assets/Advantageimage.png";
import BellIcon from "../assets/BellIcon.png";

export default function Advantages() {
  return (
    <div className="AdvantageSection">
      <div className="AdvantageLeft">
        <h2 className="Heading">ADVATNAGES</h2>
        <p className="Premium">WHY CHOOSE UIFRY?</p>
        <div className="AdvantageContainer">
          <div className="BellNoti">
            <h2>
              <img src={BellIcon} alt="" />
              Clever Notifications
            </h2>
            <p>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
      </div>
      <div className="AdvantageRight">
        <img src={Advantageimage} alt="" />
      </div>
    </div>
  );
}
