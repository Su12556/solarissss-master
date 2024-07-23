import React from "react";
import SlideOne from "./FeaturedSlider/SlideOne";
import SlideTwo from "./FeaturedSlider/SlideTwo";
import Sliders from "./FeaturedSlider/Sliders";

function FeatureSliderSection() {
  const slides = [
    <div key={1}><SlideOne/></div>,
    <div key={2}><SlideTwo/></div>,
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-xl-10 mx-auto">
          <div className="sectionTitleWrap">
            <h2>Solaris book 14X OLED</h2>
            <p>
              Set your imagination free with the powerful Vivobook 14X OLED!
              Whether it's for creative work or gaming fun
            </p>
          </div>
          <div className="slider-container">
            <Sliders slides={slides} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSliderSection;
