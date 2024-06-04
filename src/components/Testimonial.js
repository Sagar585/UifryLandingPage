import React from 'react'
import "./Styles/Testimonial.css";
import TestimonialImage1 from "../assets/TestimonialImage1.png";
import TestimonialPeople from "../assets/TestimonialPeople.png";
import PlusBullet from "../assets/PlusBullet.png";

export default function Testimonial() {
  return (
    <>
    <div className='TestimonialContainer'>
        <div className='TestimonialHeading'>
        <h1>TESTIMONIAL</h1>
        <h3>WHAT OUR USERS SAY ABOUT US?</h3>
        </div>
      <div className="TestimonialSection">
      
      <div className="TestimonialLeft">
        <img src={TestimonialImage1} alt="" />
      </div>

      <div className="TestimonialRight">
        <div className="TestimonialContainer">
          <div className="BellNoti">
            <h2>
              <img src={PlusBullet} alt="" />
              The Best Financial Accounting App Ever!
            </h2>
            <p>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”
            </p>
            <img  className="TestimonialPeople" src={TestimonialPeople} alt=""  style={{width: "20%"}} />
            <h3>Nick Jonas</h3>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
