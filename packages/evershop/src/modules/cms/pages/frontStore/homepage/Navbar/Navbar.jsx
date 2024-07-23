import Link from "@components/common/Link";
import React, { useEffect, useState } from "react";
// import { Logo } from "..";
// import { Link } from "react-router-dom";
import CommonButton from "../commonButton/CommonButton";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    setIsNavOpen(false);
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
    const handleScroll = () => {
      const currentScrollpos = window.pageYOffset;

      if (prevScrollpos > currentScrollpos) {
        document.getElementById("header").style.top = "5%";
      } else if (prevScrollpos > 80) {
        document.getElementById("header").style.top = "-100px";
      }
      setPrevScrollpos(currentScrollpos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);
  return (

    <header id="header" className={scroll ? "header" : "header topClass"}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">
            <img src="../logo.svg" alt="solaris logo" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="menuToggle"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <input type="checkbox" checked={isNavOpen} readOnly />
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Sales
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 extraLinks">
            <li className="nav-item rightBorder">
              <a className="nav-link" aria-current="page" href="#">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M17.49 3.075C17.0625 2.55 16.425 2.25 15.75 2.25H5.42999L5.39999 1.9875C5.26499 0.854999 4.30499 0 3.165 0H2.25C1.8375 0 1.5 0.3375 1.5 0.749999C1.5 1.1625 1.8375 1.5 2.25 1.5H3.165C3.5475 1.5 3.8625 1.785 3.9075 2.16L4.94249 10.935C5.16749 12.825 6.76499 14.25 8.66999 14.25H15C15.4125 14.25 15.75 13.9125 15.75 13.5C15.75 13.0875 15.4125 12.75 15 12.75H8.66999C7.70249 12.75 6.86249 12.135 6.54749 11.25H13.62C15.405 11.25 16.95 9.98249 17.295 8.23499L17.955 4.94249C18.09 4.28249 17.9175 3.6 17.49 3.075ZM16.485 4.64999L15.825 7.94249C15.615 8.99249 14.685 9.74999 13.62 9.74999H6.31499L5.60999 3.74999H15.75C15.975 3.74999 16.185 3.84749 16.3275 4.02749C16.47 4.19999 16.53 4.43249 16.485 4.64999ZM8.24999 16.5C8.24999 17.325 7.57499 18 6.74999 18C5.92499 18 5.24999 17.325 5.24999 16.5C5.24999 15.675 5.92499 15 6.74999 15C7.57499 15 8.24999 15.675 8.24999 16.5ZM15 16.5C15 17.325 14.325 18 13.5 18C12.675 18 12 17.325 12 16.5C12 15.675 12.675 15 13.5 15C14.325 15 15 15.675 15 16.5ZM0 4.49999C0 4.08749 0.3375 3.74999 0.749999 3.74999H1.905C2.3175 3.74999 2.655 4.08749 2.655 4.49999C2.655 4.91249 2.3175 5.24999 1.905 5.24999H0.749999C0.3375 5.24999 0 4.91249 0 4.49999ZM0 7.49999C0 7.08749 0.3375 6.74999 0.749999 6.74999H2.25C2.6625 6.74999 3 7.08749 3 7.49999C3 7.91249 2.6625 8.24999 2.25 8.24999H0.749999C0.3375 8.24999 0 7.91249 0 7.49999ZM3.75 10.5C3.75 10.9125 3.4125 11.25 3 11.25H0.749999C0.3375 11.25 0 10.9125 0 10.5C0 10.0875 0.3375 9.74999 0.749999 9.74999H3C3.4125 9.74999 3.75 10.0875 3.75 10.5Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <CommonButton buttonText="Pre Order Now" id="#opModal"/>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;