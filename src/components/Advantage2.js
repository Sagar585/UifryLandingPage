import React from "react";
import "./Styles/Advantage2.css";
import Advantage2image from "../assets/Advantage2.png";
import PlusBullet from "../assets/PlusBullet.png";

export default function Advantage2() {
  return (
    <div className="Advantage2Section">
      
      <div className="Advantage2Left">
        <img src={Advantage2image} alt="" />
      </div>

      <div className="Advantage2Right">
        <div className="Advantage2Container">
          <div className="BellNoti">
            <h2>
              <img src={PlusBullet} alt="" />
              Fully Customizable
            </h2>
            <p>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
