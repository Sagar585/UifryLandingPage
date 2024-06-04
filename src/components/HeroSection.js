import React from "react";
// import './Styles/Navbar.css';
// import frame1  from '../assets/Frame1.png';
// import frame2 from '../assets/Frame2.png';
// import frame3 from '../assets/Frame3.png';
import frame from "../assets/HeroPhone.png";
import Icon from "../assets/playIcon.png";
import aboutimage from "../assets/HeroAbout.png";
import "./Styles/HeroSection.css";

export default function HeroSection() {
  return (
    <div className="heroSection">
      <div className="aboutHero">
        <img className="aboutheroimage" src={aboutimage} alt="" />
        <div className="aboutHeroText">
          <h1>MAKE THE BEST FINANCIAL DECISIONS</h1>
          <p>
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="quickaccess">
            <a href="/">Get Started →</a>
            <button className="Watchvid">
              <img src={Icon} alt="Icon" />
              Watch Video
            </button>
          </div>
        </div>
      </div>
      <div className="imageHero">
        <img src={frame} alt="frame" />
      </div>
    </div>
  );
}
