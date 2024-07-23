import React from "react";
import CommonButton from "./commonButton/CommonButton";
// import CommonButton from "../commonButton/CommonButton";
// import { benImg1, benImg2, benImg3 } from "..";

function BenefitsWrap() {
  return (

    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-5">
          <div className="sectionTitleBox">
            <h2>
              The benefits of Solaris laptops include enhanced productivity
            </h2>
            <p>
              Set your imagination free with the powerful Solaris book 14X OLED!
              Whether it’s for creative work or gaming fun
            </p>
          </div>
          <CommonButton buttonText="Pre Order Now" id="#opModal" />
        </div>
        <div className="col-md-12 col-lg-7 mobView">
          <div className="leftImgWrap">
            <div className="topImgContentWrap">
              <h6>
                Equipped with the 13th Gen Intel Core i9-13900H 14-core
                processor
              </h6>
              <div className="leftBoxOverlay">
                <span>
                  13th Gen Intel Core i9-13900H 14-core processor 45 W thermal
                  design power
                </span>
              </div>
            </div>
            <span
              className="svgLine"
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="-50 0 700 100"
                style={{
                  enableBackground: "new 0 0 614 53",
                  transform: "rotate(-45deg)",
                }}
                xmlSpace="preserve"
              >
                <polyline className="st0" points="65,137 200,8 700,0" />
              </svg>
            </span>
            <img src="benefits-top.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-12 col-lg-7">
          <div className="leftBtmImg">
            <div className="overlayText1 overLay">
              <h6>
                Learning experiences for developers, designers, educators,
                researchers, and teachers.
              </h6>
            </div>
            <img src="benefits-left-bottom.png" alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-12 col-lg-5">
          <div className="leftBtmImg">
            <div className="overlayText2 overLay">
              <h6>We are dedicated to delivering high-quality products</h6>
            </div>
            <img src="benefits-right-bottom.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default BenefitsWrap;
