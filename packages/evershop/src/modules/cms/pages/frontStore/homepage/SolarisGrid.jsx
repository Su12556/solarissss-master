import React from "react";
// import { grid1, grid2, grid3, grid4, grid5 } from "..";

function SolarisGrid() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-xl-10 mx-auto col-12">
          <div className="gridWrap">
            <h2>Solaris book 14X OLED</h2>
            <p>
              Set your imagination free with the powerful Solaris book 14X OLED!
              Whether it's for creative work or gaming fun
            </p>
          </div>
          <div className="bookGrid">
            <div className="grid1 grid">
              <img src="/grid-one.png" alt="solaris book" className="img-fluid" />
              <div className="floatBox float1">
                <div className="roundBox">
                  <span>1 TB PCIe 3.0 SSD</span>
                </div>
                <p>
                  Set your imagination free with the powerful Solaris book 14X
                  OLED! Whether it’s for creative work or gaming fun
                </p>
              </div>
            </div>
            <div className="grid2 grid">
              <img src="grid-two.png" alt="solaris book" className="img-fluid" />
              <div className="floatBox float2">
                <div className="roundBox">
                  <span>Solaris Sense keyboard</span>
                </div>
                <p>
                  Set your imagination free with the powerful Solaris book 14X
                  OLED! Whether it’s for creative work or gaming fun
                </p>
              </div>
            </div>
            <div className="grid3 grid">
              <img src="grid-three.png" alt="solaris book" className="img-fluid" />
              <div className="flotTitle title1" data-aos="fade-right" data-aos-duration="3000">
                <span >Metallic Lid</span>
              </div>
              <span
                className="svgLine"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
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
                    transform: "rotate(240deg)",
                  }}
                  xmlSpace="preserve"
                >
                  <polyline className="st0" points="55,137 200,8 700,0" />
                </svg>
              </span>
              <div className="btmBox boxed1">
                <p className="lightTxt">Touch</p>
                <p className="darkTxt">Design</p>
              </div>
            </div>
            <div className="grid4 grid">
              <img src="grid-four.png" alt="solaris book" className="img-fluid" />
              <div className="flotTitle title2" data-aos="zoom-in" data-aos-duration="3000">
                <span>Touch Login</span>
              </div>
              <span
                className="svgLine"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
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
                    transform: "rotate(150deg)",
                  }}
                  xmlSpace="preserve"
                >
                  <polyline className="st0" points="55,137 200,8 700,0" />
                </svg>
              </span>
              <div className="btmBox boxed2">
                <p className="lightTxt">Touchpad</p>
                <p className="darkTxt">Sensor 9</p>
              </div>
            </div>
            <div className="grid5 grid">
              <img src="grid-five.png" alt="solaris book" className="img-fluid" />
              <div className="flotTitle title3" data-aos="fade-left" data-aos-duration="3000">
                <span>Webcam</span>
              </div>
              <span
                className="svgLine"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
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
                    transform: "rotate(150deg)",
                  }}
                  xmlSpace="preserve"
                >
                  <polyline className="st0" points="55,42 200,8 700,503" />
                </svg>
              </span>
              <div className="btmBox boxed3">
                <p className="lightTxt">Instant Privacy</p>
                <p className="darkTxt">Shield</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolarisGrid;
