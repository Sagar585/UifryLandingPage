import React from "react";
import "./Styles/Features.css";
import featureimage from "../assets/Features.png";
import Smoke from "../assets/Smoke.png";
import bulletPoint from "../assets/BulletPoint.png";

const featureData = [
  {
    name: "Budgeting Intervals",
    description:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
  {
    name: "Budgeting Intervals",
    description:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
  {
    name: "Budgeting Intervals",
    description:
      "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
]; 

export default function Features() {
  return (
    <div className="featureSection">
      <div className="featureLeft">
        <img src={featureimage} alt="" />
      </div>
      <div className="featureRight">
        <img className="featureSmoke" src={Smoke} alt="" />
        <h2 className="Heading">FEATURES</h2>
        <p className="Premium">UIFRY PREMIUM </p>
        <div className="FeatureContainer">
          {featureData.map((feature) => (
            <div className="bulletPoints">
              <h2>
                <img src={bulletPoint} alt="" />
                {feature.name}
              </h2>
              <p>{feature.description}</p>
            </div>
          ))}
          </div>
      </div>
    </div>
  );
}
