import React from "react";
// import { halfLaptop } from "..";

function PreOrderSection() {
  return (
    <div className="container">
      <div className="sectionTitleBox">
        <h2>Be the earliest to Pre-order Solaris</h2>
        <p>
          By booking, users will unlock lifetime access to over 25 digital
          courses covering diverse topics like programming, photography,
          business, and writing.
        </p>
      </div>
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="halfLaptopWrap">
            <img src="halflaptop.png" alt="" />
            <div className="bookInputWrap">
              <form action="">
                <input
                  className="form-control"
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your email..."
                />
                <button className="bookBtn">Pre Order Now</button>
              </form>
              <p>
                By booking, users will unlock lifetime access to over 25 digital
                courses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreOrderSection;
