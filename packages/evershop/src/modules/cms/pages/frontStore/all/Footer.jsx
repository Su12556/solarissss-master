import React from 'react';
import PropTypes from 'prop-types';
import CommonButton from '../homepage/commonButton/CommonButton';

function Footer({ themeConfig: { copyRight } }) {
  return (
   
  <>
    <footer id="footer">
      <div className="container">
        <div className="row footerWrap">
          <div className="col-md-4">
            <div className="foologoWrap">
              <a href="#">
                <img src="foologo.png" alt="Solaris Logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-5">
            <CommonButton buttonText="Pre Order Now" id="#opModal" />
          </div>
        </div>
        <div className="row padTop">
          <div className="col-md-6 col-lg-8">
            <div className="subscriptionBox">
              <h6>Revolutionizing India's Digital Landscape</h6>
              <p>
                The affordability of Solaris laptops stems from our innovative
                approach to manufacturing and commitment to the "Make in India"
                concept. By offering advance bookings, we can gauge demand
                accurately and manufacture in bulk, achieving economies of
                scale. Our aim is to provide high-quality laptops with excellent
                configurations at afford- able prices to ensure accessibility
                for all. By booking, users will unlock lifetime access to over
                25 digital courses covering diverse topics like programming,
                photography, business, and writing. Each purchase includes 3
                courses along with 5 bonus courses, letting them expand their
                skills at their own pace. Whether for career advancement, new
                hobbies, or curiosity, this collection has they covered.
              </p>
              <div className="subscriptionFormWrap d-none">
                <form action="">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Start Here"
                    className="form-control"
                  />
                  <button type="submit" className="subBtn">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <path
                          d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM1 9H16V7H1V9Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-lg-3">
            <div className="fooLinksWrap">
              <ul>
                <li>
                  <a href="">Home</a>
                </li>

                <li>
                  <a href="">Contact Sales</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
                <li>
                  <a href="">Privacy & Policy</a>
                </li>
                <li>
                  <a href="">Terms & Condition</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row copyWriteSection">
          <div className="col-md-4">
            <div className="cirtificateBox">
              <h6>Certified by</h6>
              <span>
                <img src="cirtificates.png" alt="" className="img-fluid" />
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="socialLinksWrap">
              <ul>
                <li>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.752022 2.44787C0.752022 2.03972 0.909764 1.64828 1.19055 1.35968C1.47133 1.07107 1.85215 0.908938 2.24923 0.908938H17.1741C17.3709 0.908607 17.5658 0.948175 17.7477 1.02538C17.9296 1.10258 18.0949 1.21589 18.2341 1.35884C18.3733 1.50179 18.4837 1.67156 18.5591 1.85843C18.6344 2.0453 18.6731 2.2456 18.673 2.44787V17.7886C18.6732 17.9909 18.6346 18.1913 18.5594 18.3782C18.4842 18.5652 18.3739 18.7351 18.2347 18.8782C18.0956 19.0212 17.9304 19.1347 17.7485 19.2121C17.5667 19.2895 17.3718 19.3293 17.1749 19.3292H2.24923C2.05255 19.3292 1.85779 19.2894 1.67609 19.212C1.49438 19.1346 1.3293 19.0211 1.19026 18.8782C1.05122 18.7352 0.940951 18.5654 0.865757 18.3786C0.790563 18.1918 0.751915 17.9916 0.752022 17.7894V2.44787ZM7.84545 7.93208H10.2721V9.18466C10.6224 8.46459 11.5184 7.81653 12.8649 7.81653C15.4464 7.81653 16.0581 9.2508 16.0581 11.8824V16.7571H13.4457V12.4819C13.4457 10.9831 13.0955 10.1375 12.2059 10.1375C10.9718 10.1375 10.4587 11.0493 10.4587 12.4819V16.7571H7.84545V7.93208ZM3.36522 16.6423H5.97842V7.81653H3.36522V16.6415V16.6423ZM6.35231 4.93795C6.35724 5.16793 6.31743 5.3966 6.23521 5.61055C6.15299 5.8245 6.03002 6.01942 5.87353 6.18386C5.71703 6.3483 5.53015 6.47895 5.32386 6.56815C5.11757 6.65735 4.89603 6.7033 4.67223 6.7033C4.44843 6.7033 4.22688 6.65735 4.02059 6.56815C3.8143 6.47895 3.62743 6.3483 3.47093 6.18386C3.31443 6.01942 3.19146 5.8245 3.10924 5.61055C3.02703 5.3966 2.98721 5.16793 2.99214 4.93795C3.00181 4.48653 3.18307 4.05695 3.49709 3.74121C3.81111 3.42546 4.23294 3.24866 4.67223 3.24866C5.11152 3.24866 5.53334 3.42546 5.84736 3.74121C6.16139 4.05695 6.34264 4.48653 6.35231 4.93795Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="20"
                      viewBox="0 0 23 20"
                      fill="none"
                    >
                      <path
                        d="M22.8794 3.06563C22.0507 3.43008 21.1604 3.67634 20.2244 3.78764C21.1902 3.21416 21.9127 2.31157 22.2571 1.24829C21.3498 1.78314 20.3568 2.15962 19.3212 2.36135C18.6248 1.62344 17.7025 1.13435 16.6973 0.969999C15.6921 0.805648 14.6604 0.975236 13.7623 1.45244C12.8642 1.92963 12.1499 2.68774 11.7305 3.60906C11.311 4.53039 11.2098 5.56337 11.4425 6.54764C9.604 6.45603 7.80547 5.9818 6.16362 5.15573C4.52177 4.32965 3.07328 3.1702 1.91218 1.75261C1.51516 2.43227 1.28688 3.22028 1.28688 4.05951C1.28644 4.815 1.47391 5.55893 1.83266 6.22528C2.1914 6.89163 2.71034 7.45979 3.34341 7.87937C2.60921 7.85619 1.89121 7.6593 1.24917 7.30511V7.36421C1.24909 8.42383 1.61842 9.45083 2.29449 10.271C2.97055 11.0911 3.91171 11.6539 4.95826 11.8637C4.27717 12.0467 3.5631 12.0736 2.86997 11.9425C3.16525 12.8543 3.74042 13.6516 4.51497 14.2228C5.28951 14.794 6.22465 15.1105 7.18948 15.1281C5.55163 16.404 3.5289 17.0962 1.44668 17.0931C1.07784 17.0932 0.709304 17.0719 0.342983 17.0291C2.45656 18.3778 4.91691 19.0935 7.42967 19.0907C15.9357 19.0907 20.5857 12.0992 20.5857 6.03543C20.5857 5.83843 20.5807 5.63946 20.5718 5.44246C21.4763 4.79331 22.257 3.98947 22.8775 3.06859L22.8794 3.06563Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="24"
                      viewBox="0 0 13 24"
                      fill="none"
                    >
                      <path
                        d="M12.0038 13.6727L12.6471 9.49647H8.62588V6.78638C8.62588 5.64407 9.18742 4.52989 10.9886 4.52989H12.8165V0.974598C12.8165 0.974598 11.1579 0.692627 9.57168 0.692627C6.26031 0.692627 4.09591 2.69311 4.09591 6.31402V9.49719H0.414761V13.6734H4.09591V23.7696H8.62588V13.6734L12.0038 13.6727Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="cpyWriteText">
              <p>© 2024 Solaris2222</p>
            </div>
          </div>
        </div>
      </div>
   
    </footer>
    
  </>
  );
}

Footer.propTypes = {
  themeConfig: PropTypes.shape({
    copyRight: PropTypes.string
  })
};

Footer.defaultProps = {
  themeConfig: {
    copyRight: 'ghxxhggx © 2022 Evershop. All Rights Reserved.'
  }
};

export default Footer;

export const layout = {
  areaId: 'footer',
  sortOrder: 10
};

export const query = `
  query query {
    themeConfig {
      copyRight
    }
  }
`;
