import React from "react";
// import { butterflyImg, winProImg } from "..";

function WindowPro() {
  return (
   
    <div className="container">
      <div className="row custRow">
        <div className="col-lg-6 leftImgWrap">
          <div className="lapImgWRap">
            <img src="butterflyImg.png" alt="" className="img-fluid"/>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="winProTitleWrap">
            <h2>Windows 11 Pro</h2>
            <p>With Pre-Installed MS Office 365</p>
          </div>
          <div className="winProList row">
            <div className="col-md-6">
              <ul className="fistList">
                <li>
                  <p>Processor</p>
                  <h5>Intel CoreTM i5-1335U</h5>
                  <p>13th Gen Intel processor</p>
                </li>
                <li>
                  <p>Display</p>
                  <h5>35.5-CM Full HD+</h5>
                  <p>1920X1200 LED-Backlit TFT</p>
                </li>
                <li>
                  <p>Network</p>
                  <h5>WiFi 6E</h5>
                  <p>802.11ax7</p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="secondList">
                <li>
                  <p>SSD</p>
                  <h5>256 GB</h5>
                  <p>PCIe Gen4, NVMe SSD</p>
                </li>
                <li>
                  <p>Intel Graphics</p>
                  <h5>XE Iris</h5>
                  <p>Graphics Card</p>
                </li>
                <li>
                  <p>RAM</p>
                  <h5>8 GB</h5>
                  <p>DDE4 3200 MHz</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default WindowPro;
