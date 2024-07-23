import React from "react";

// import ImageSlider from "../ImageSlider/ImageSlider";
import CommonButton from "./commonButton/CommonButton";
import ImageSlider from "./ImageSlider/ImageSlider";
// import blackImg1 from '../../images/black/img1.png';
// import blackImg2 from '../../images/black/img2.png';
// import blackImg3 from '../../images/black/img3.png';
// import blackImg4 from '../../images/black/silder-main.png';
// import grayImg1 from '../../images/gray/img1.jpg';
// import grayImg2 from '../../images/gray/img2.jpg';
// import grayImg3 from '../../images/gray/img3.jpg';
function ProductFeature() {
  const colorImages = {
    black: [
      "https://placehold.co/800x400",
      "https://placehold.co/800x400",
      "https://placehold.co/800x800",
      "https://placehold.co/300x200",
    ],
    gray: [
      "https://placehold.co/200x200",
      "https://placehold.co/100x100",
      "https://placehold.co/300x800",
      "https://placehold.co/1000x200",
    ],
    red: [
      "https://placehold.co/100x900",
      "https://placehold.co/700x700",
      "https://placehold.co/300x800",
      "https://placehold.co/400x400",
      "https://placehold.co/1200x1200",
      "https://placehold.co/200x200",
    ],
    green: [
      "https://placehold.co/400x400",
      "https://placehold.co/1200x1200",
      "https://placehold.co/200x200",
    ],
    // Add more colors if needed
  };
  return (
    
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <div className="leftBox">
            <h2>Future Laptop for Digital India</h2>
            <p>
              Set your imagination free with the powerful Vivobook 14X OLED!
              Whether it's for creative work or gaming fun, its 13th Gen Intel®
              Core™ H-series processor and NVIDIA® GeForce RTX™ 3050 Laptop GPU1
              give you all the multitasking power you need.
            </p>
            <CommonButton buttonText="Pre Order Now" id="#opModal" />
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <ImageSlider colorImages={colorImages} />
        </div>
      </div>
    </div>
    
  );
}

export default ProductFeature;
