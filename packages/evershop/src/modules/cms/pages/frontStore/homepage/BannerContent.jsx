import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
const { insert, select } = require('@evershop/postgres-query-builder');
// import CommonButton from "../commonButton/CommonButton";
// import { laptop, laptopBox, priceTag } from "..";
import AOS from "aos";
import "aos/dist/aos.css";
import CommonButton from "./commonButton/CommonButton";
// import { Modal, Button } from 'react-bootstrap';

function BannerContent() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [stage, setStage] = useState(1);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: '',
    telephone: '',
    address: '',
    city: '',
    country: '',
    province: '',
    postCode: ''
  });

  const handleOpenModal = async () => {
    setShowModal(true);
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3001/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
           query {
  product(id: 86) {
    productId
    sku
    url
    name
    gallery {
      thumb
      alt
      single
    }
    inventory {
      isInStock
    }
    variantGroup {
      items {
        id
        attributes {
          attributeId
          attributeCode
          optionId
          optionText
        }
        product {
          productId
          uuid
          name
          url
          sku
          status
          visibility
          price {
            regular {
              value
              currency
              text
            }
          }
          image {
            uuid
            url
            alt
            thumb
            single
          }
          gallery {
            uuid
            url
            alt
            thumb
            single
          }
        }
      }
    }
    uuid
    image {
      alt
      thumb
      single
    }
    attributes: attributeIndex {
      attributeName
      attributeCode
      optionText
    }
  }
  
  courses {
    courseName
    courseCode
  }
}

          `,
        }),
      });
      const result = await response.json();
      setData(result.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setStage(1); // Reset to first stage when closing modal
    setFormValues({
      fullName: '',
      telephone: '',
      address: '',
      city: '',
      country: '',
      province: '',
      postCode: ''
    });
  };

  const handleProceed = () => {
    setStage(prevStage => prevStage + 1); // Move to next stage
  };

  const handlePrevious = () => {
    setStage(prevStage => prevStage - 1); // Move to previous stage
  };

  const handleBlur = () => {
    if (!selectedCourse) {
      setErrorMessage('Please select a course');
    } else {
      setErrorMessage('');
    }
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setFormValues(prevValues => ({
      ...prevValues,
      country: selectedCountry,
      province: '' // Reset province when country changes
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(document.getElementById('formId'));
  
    const data = {
      full_name: formData.get('fullName'),
      telephone: formData.get('telephone'),
      address_1: formData.get('address'),
      city: formData.get('city'),
      country: formData.get('country'),
      province: formData.get('province'),
      post_code: formData.get('postCode'), // Ensure this matches your data structure
    };
console.log(data);
    try {
      const response = await fetch('http://localhost:3001/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Failed to insert data');
      }
  
      const results = await insert('form_data', data);
      const result = await response.json();
      console.log('Data inserted successfully:', result);
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };
  

  useEffect(() => {
    AOS.init({});

    return () => {
      AOS.refresh();
    };
  }, []);
  return (

    <div className="container">
      <div className="bannerContentRow">
        <div
          className="bannerTextWrap"
        >
          


          <h1 className="mainText">
            <span className="gradientText">Solaris</span> Book 14X OLED
          </h1>
          <p className="mainPara">
            India's pioneering crafting laptop book-tailored for lifelong
            learning and suitable for all ages!
          </p>
          <CommonButton buttonText="Pre Order Now" id="#opModal"/>
        </div>
        <div className="centerBoxWrap">
          <span className="priceTag">
            <img
              src="/price-tag.png"
              alt="Price tag"
              className="priceTagImg"
              data-aos="fade-in"
              data-aos-duration="2500"
              data-aos-easing="ease-in-back"
            />
            <span
              className="priceAmt"
              data-aos="fade-in"
              data-aos-duration="2500"
              data-aos-easing="ease-in-back"
            >
              14,999/-
            </span>
          </span>
          <span
            className="mainLaptop"
            data-aos="fade-down"
            data-aos-duration="2200"
          >
            <img src="/laptop.png" alt="laptop" className="img-fluid" />
            <span className="overlapText">Made for India</span>
          </span>
          <span className="laptopBox">
            <img src="/laptop-box.png" alt="laptop box" className="img-fluid" />
          </span>
          <div
            className="leftbox absBox"
            data-aos="fade-left"
            data-aos-duration="2200"
          >
            <div className="boxTitle">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    d="M4.67092 17.43C4.49996 17.4299 4.33372 17.3738 4.19765 17.2703C4.06158 17.1668 3.96317 17.0216 3.91748 16.8568C3.87179 16.6921 3.88134 16.5169 3.94466 16.3581C4.00799 16.1993 4.1216 16.0656 4.26812 15.9775C7.03923 14.3131 7.03923 10.7388 7.03923 8.60354C7.03923 7.98124 7.28644 7.38442 7.72648 6.94438C8.16651 6.50434 8.76333 6.25713 9.38564 6.25713C10.0079 6.25713 10.6048 6.50434 11.0448 6.94438C11.4848 7.38442 11.732 7.98124 11.732 8.60354C11.732 8.81098 11.6496 9.00992 11.503 9.1566C11.3563 9.30328 11.1573 9.38568 10.9499 9.38568C10.7425 9.38568 10.5435 9.30328 10.3969 9.1566C10.2502 9.00992 10.1678 8.81098 10.1678 8.60354C10.1678 8.39611 10.0854 8.19717 9.93869 8.05049C9.79202 7.90381 9.59307 7.82141 9.38564 7.82141C9.1782 7.82141 8.97926 7.90381 8.83259 8.05049C8.68591 8.19717 8.6035 8.39611 8.6035 8.60354C8.6035 10.9085 8.6035 15.2001 5.07294 17.3189C4.95146 17.3916 4.81251 17.43 4.67092 17.43ZM8.55266 18.5414C10.3375 16.7425 11.3801 14.213 11.6507 11.0164C11.6598 10.9139 11.6486 10.8106 11.6177 10.7124C11.5868 10.6142 11.5368 10.523 11.4706 10.4442C11.4044 10.3653 11.3233 10.3003 11.232 10.2529C11.1406 10.2055 11.0408 10.1766 10.9382 10.1678C10.8355 10.1573 10.7318 10.1675 10.6333 10.1979C10.5347 10.2283 10.4432 10.2782 10.3643 10.3447C10.2854 10.4112 10.2207 10.4929 10.174 10.5849C10.1274 10.6769 10.0997 10.7774 10.0927 10.8803C9.84945 13.7406 8.98284 15.886 7.44281 17.4354C7.29657 17.5826 7.21478 17.7818 7.21544 17.9893C7.2161 18.1968 7.29916 18.3955 7.44633 18.5418C7.59351 18.688 7.79275 18.7698 8.00023 18.7691C8.2077 18.7685 8.40642 18.6854 8.55266 18.5382V18.5414ZM12.6198 18.3959C13.0942 17.6076 13.4893 16.7742 13.7992 15.9079C13.864 15.7142 13.8504 15.5028 13.7614 15.3189C13.6723 15.135 13.5149 14.9933 13.3227 14.9241C13.1305 14.8548 12.9188 14.8635 12.733 14.9482C12.5471 15.033 12.4018 15.1871 12.328 15.3776C12.0527 16.1457 11.7021 16.8848 11.2815 17.584C11.2282 17.6719 11.1928 17.7694 11.1771 17.871C11.1615 17.9726 11.166 18.0762 11.1905 18.1761C11.2149 18.2759 11.2588 18.3699 11.3196 18.4528C11.3803 18.5357 11.4569 18.6058 11.5447 18.6591C11.7222 18.7667 11.9351 18.7995 12.1368 18.7501C12.2366 18.7257 12.3306 18.6818 12.4135 18.6211C12.4964 18.5603 12.5665 18.4838 12.6198 18.3959ZM14.4695 13.4458C14.7593 11.8485 14.8903 10.2266 14.8606 8.60354C14.8599 7.49549 14.5229 6.41374 13.8943 5.50124C13.2657 4.58875 12.375 3.88847 11.34 3.49294C10.3049 3.09741 9.17421 3.02525 8.09727 3.286C7.02033 3.54675 6.04786 4.12813 5.30836 4.95331C5.23634 5.02918 5.18027 5.11873 5.14347 5.21665C5.10667 5.31457 5.08989 5.41888 5.09412 5.52341C5.09835 5.62793 5.1235 5.73054 5.16809 5.82517C5.21268 5.9198 5.2758 6.00453 5.35372 6.07433C5.43163 6.14413 5.52276 6.1976 5.6217 6.23156C5.72064 6.26552 5.82539 6.27929 5.92975 6.27205C6.03411 6.26481 6.13595 6.23671 6.22926 6.18941C6.32257 6.14211 6.40543 6.07657 6.47296 5.99668C7.00112 5.40717 7.69573 4.9918 8.46499 4.80546C9.23425 4.61913 10.0419 4.6706 10.7813 4.95308C11.5207 5.23556 12.157 5.73575 12.606 6.38754C13.0551 7.03933 13.2958 7.81204 13.2963 8.60354C13.3252 10.1262 13.2041 11.648 12.935 13.147C12.8955 13.3505 12.9384 13.5613 13.0542 13.7332C13.1701 13.905 13.3494 14.0239 13.5529 14.0636C13.6026 14.0736 13.6531 14.0786 13.7038 14.0785C13.885 14.078 14.0604 14.0147 14.2 13.8993C14.3397 13.7839 14.4349 13.6236 14.4695 13.4458ZM5.47496 8.60354C5.47473 8.38525 5.49278 8.16731 5.52892 7.95202C5.55228 7.84838 5.55427 7.74107 5.53479 7.63663C5.5153 7.53219 5.47474 7.43282 5.41558 7.34457C5.35642 7.25633 5.27991 7.18106 5.1907 7.12336C5.10149 7.06566 5.00147 7.02674 4.89672 7.00897C4.79198 6.9912 4.68471 6.99496 4.58147 7.02001C4.47822 7.04507 4.38117 7.0909 4.29622 7.1547C4.21127 7.2185 4.14021 7.29894 4.08737 7.39111C4.03453 7.48328 4.00103 7.58524 3.9889 7.69079C3.93727 7.99231 3.9111 8.29764 3.91068 8.60354C3.91068 12.2366 2.85793 14.0785 0.782137 14.0785C0.574701 14.0785 0.375762 14.1609 0.229083 14.3076C0.0824035 14.4543 0 14.6532 0 14.8606C0 15.0681 0.0824035 15.267 0.229083 15.4137C0.375762 15.5604 0.574701 15.6428 0.782137 15.6428C3.80822 15.6428 5.47496 13.1399 5.47496 8.60354ZM16.1902 18.313C17.4774 15.2424 18.0908 11.9314 17.9891 8.60354C17.9928 7.30436 17.6984 6.02164 17.1288 4.85398C17.0839 4.76154 17.0212 4.67886 16.9443 4.61065C16.8674 4.54244 16.7778 4.49005 16.6807 4.45646C16.5835 4.42286 16.4807 4.40874 16.3781 4.41488C16.2755 4.42102 16.1751 4.44731 16.0827 4.49224C15.9902 4.53718 15.9076 4.59988 15.8394 4.67677C15.7711 4.75366 15.7188 4.84324 15.6852 4.94038C15.6516 5.03752 15.6374 5.14032 15.6436 5.24292C15.6497 5.34552 15.676 5.44591 15.7209 5.53835C16.1863 6.493 16.4271 7.54149 16.4249 8.60354C16.5233 11.7077 15.9583 14.7971 14.7675 17.6654C14.7251 17.759 14.7016 17.8601 14.6983 17.9629C14.695 18.0657 14.712 18.1681 14.7484 18.2642C14.7847 18.3604 14.8396 18.4485 14.91 18.5234C14.9804 18.5984 15.0649 18.6587 15.1586 18.7009C15.2599 18.7475 15.3701 18.7715 15.4816 18.7713C15.6312 18.7707 15.7774 18.7272 15.903 18.6459C16.0286 18.5647 16.1283 18.4491 16.1902 18.313ZM2.34641 10.95V8.60354C2.34848 6.73726 3.09078 4.94801 4.41044 3.62834C5.7301 2.30868 7.51935 1.56638 9.38564 1.56431C10.9095 1.55924 12.3931 2.05376 13.6092 2.97216C13.7751 3.09662 13.9837 3.15006 14.1891 3.12073C14.3944 3.09139 14.5797 2.98168 14.7042 2.81573C14.8286 2.64978 14.8821 2.44119 14.8527 2.23584C14.8234 2.03049 14.7137 1.8452 14.5477 1.72074C13.0612 0.598705 11.2481 -0.0056586 9.38564 3.99316e-05C7.10467 0.00273085 4.9179 0.910033 3.30502 2.52292C1.69213 4.13581 0.784828 6.32258 0.782137 8.60354V10.95C0.782137 11.1574 0.86454 11.3563 1.01122 11.503C1.1579 11.6497 1.35684 11.7321 1.56427 11.7321C1.77171 11.7321 1.97065 11.6497 2.11733 11.503C2.26401 11.3563 2.34641 11.1574 2.34641 10.95Z"
                    fill="url(#paint0_linear_250_186)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_250_186"
                      x1="9"
                      y1="0"
                      x2="9"
                      y2="18.7726"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2D4DC3" />
                      <stop offset="1" stopColor="#B3ADF7" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="title">One-touch login</span>
            </div>
            <p>via touchpad fingerprint sensor9</p>
          </div>
          <span className="svgLine">
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
                transform: "rotate(170deg)",
              }}
              xmlSpace="preserve"
            >
              <polyline className="st0" points="55,80 225,8 700,0" />
            </svg>
          </span>
          <div
            className="rightbox absBox"
            data-aos="fade-right"
            data-aos-duration="2200"
          >
            <div className="boxTitle">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                >
                  <path
                    d="M18.3343 10.1545V4.16713C18.3329 3.06234 17.8935 2.00319 17.1123 1.22198C16.3311 0.440784 15.2719 0.00132336 14.1671 0H5.83287C4.72809 0.00132336 3.66893 0.440784 2.88773 1.22198C2.10653 2.00319 1.66707 3.06234 1.66575 4.16713V10.1545C1.11012 10.3502 0.641681 10.7362 0.343403 11.2442C0.0451254 11.7522 -0.0637436 12.3493 0.0360791 12.9299C0.135902 13.5105 0.437974 14.037 0.888794 14.4162C1.33961 14.7954 1.91009 15.0028 2.49917 15.0017H17.5008C18.0899 15.0028 18.6604 14.7954 19.1112 14.4162C19.562 14.037 19.8641 13.5105 19.9639 12.9299C20.0637 12.3493 19.9549 11.7522 19.6566 11.2442C19.3583 10.7362 18.8899 10.3502 18.3343 10.1545ZM5.83287 1.66685H14.1671C14.8302 1.66685 15.4662 1.93027 15.9351 2.39916C16.404 2.86806 16.6674 3.50401 16.6674 4.16713V10.0011H13.2079C12.9654 10.0009 12.7259 10.0537 12.506 10.1556C12.286 10.2575 12.091 10.4061 11.9344 10.5912L11.7285 10.8345H8.27064L8.06562 10.5912C7.90903 10.4061 7.71396 10.2575 7.49402 10.1556C7.27407 10.0537 7.03455 10.0009 6.79215 10.0011H3.3326V4.16713C3.3326 3.50401 3.59602 2.86806 4.06491 2.39916C4.5338 1.93027 5.16976 1.66685 5.83287 1.66685ZM17.5008 13.3348H2.49917C2.27814 13.3348 2.06615 13.247 1.90985 13.0907C1.75356 12.9344 1.66575 12.7224 1.66575 12.5014C1.66575 12.2803 1.75356 12.0684 1.90985 11.9121C2.06615 11.7558 2.27814 11.668 2.49917 11.668H6.79298L6.998 11.9113C7.15451 12.0962 7.34944 12.2448 7.56923 12.3467C7.78902 12.4486 8.02838 12.5014 8.27064 12.5014H11.7285C11.9709 12.5015 12.2105 12.4488 12.4304 12.3469C12.6503 12.245 12.8454 12.0964 13.002 11.9113L13.2079 11.668H17.5008C17.7219 11.668 17.9339 11.7558 18.0901 11.9121C18.2464 12.0684 18.3343 12.2803 18.3343 12.5014C18.3343 12.7224 18.2464 12.9344 18.0901 13.0907C17.9339 13.247 17.7219 13.3348 17.5008 13.3348Z"
                    fill="url(#paint0_linear_250_189)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_250_189"
                      x1="10"
                      y1="0"
                      x2="10"
                      y2="15.0017"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2C4CC3" />
                      <stop offset="1" stopColor="#B3AEF7" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="title">Exhilarating OLED displays</span>
            </div>
            <p>
              Fully customizable color with sRGB, DCI-P3, Display-P3, and Native
              options.
            </p>
          </div>
          <span className="svgLine leftArrow">
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
                transform: "rotate(0deg)",
              }}
              xmlSpace="preserve"
            >
              <polyline className="st0" points="55,80 225,8 700,0" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}


BannerContent.propTypes = {
  handleCloseModal: PropTypes.func.isRequired
};
export default BannerContent;
