import React from "react";
import CommonButton from "../commonButton/CommonButton";
// import { display1 } from "..";

function SecondSlide() {
  return (
    <div className="row">
      <div className="col-md-5">
        <div className="slideWrapping">
          <h6>Display 2</h6>
          <h4>Pure Performance</h4>
          <p>
            The Solaris 14X OLED empowers faster idea realization with its
            robust 13th Gen Intel Core H-series processor and NVIDIA GeForce RTX
            3050 Laptop GPU. Supported by 1 TB SSD, 16 GB DDR4 memory, and
            ultrafast WiFi 6E.
          </p>
          <CommonButton buttonText="Pre Order Now" id="#opModal" />
        </div>
      </div>
      <div className="col-md-7">
        <div className="displayImgWrap">
          <img src="display-1.png" alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default SecondSlide;
