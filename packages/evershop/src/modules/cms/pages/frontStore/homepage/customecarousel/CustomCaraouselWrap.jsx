import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import cardData from "./cardsslide/card";


function CustomCaraouselWrap({ cards }) {
  const [startIndex, setStartIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef(null);
  const cardCount = cards.length;

  useEffect(() => {
    const resizeHandler = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth + 15);
      }
    };

    // Initial call
    resizeHandler();

    // Add event listener for resize
    window.addEventListener("resize", resizeHandler);

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [startIndex]);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

 const handleNext = () => {
  let limit = cardCount - 1; // Default limit

  // Adjust limit based on screen width
  if (window.innerWidth <= 767) {
    limit = cardCount - 1;
  } else if (window.innerWidth <= 1024) {
    limit = cardCount - 2;
  }

  if (startIndex < limit) {
    setStartIndex((prevIndex) => prevIndex + 1);
  }
};

var value = 3;

if (window.innerWidth < 1025) {
    value = 2;
}

if (window.innerWidth < 767) {
    value = 1;
}


  return (
    <div className="container">
      <div className="sectionTitleWrap">
        <h2>What end users will get with Pre-Booking Amount?</h2>
        <p>
          By booking, users will unlock lifetime access to over 25 digital
          courses covering diverse topics like programming, photography,
          business, and writing.
        </p>
      </div>
      <div className="slider-container">
        <div className="buttons">
          <button onClick={handlePrev} disabled={startIndex === 0}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464467C7.97631 0.269205 7.65973 0.269204 7.46447 0.464467C7.2692 0.659729 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM1 4.5L11 4.5L11 3.5L1 3.5L1 4.5Z"
                  fill="#919191"
                />
              </svg>
            </span>
          </button>
          <button onClick={handleNext} disabled={startIndex === cardCount - value}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464467C7.97631 0.269205 7.65973 0.269204 7.46447 0.464467C7.2692 0.659729 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM1 4.5L11 4.5L11 3.5L1 3.5L1 4.5Z"
                  fill="#919191"
                />
              </svg>
            </span>
          </button>
        </div>
        <div
          className="slider"
          style={{ transform: `translateX(-${startIndex * cardWidth}px)` }}
        >
          <div className="row flex-nowrap ">
            {cardData.map((card, index) => (
              <div className="col-md-4 resCard" key={index}>
                <div
                  key={index}
                  className="boxed"
                  ref={index === 0 ? cardRef : null}
                  style={{ backgroundImage: `url(${card.backgroundImg})` }}
                >
                  <div className="rightTopBox">
                    <h5>{card.title}</h5>
                    <h6>{card.subTitle}</h6>
                  </div>
                  <div className="midlBox">
                    <h4>{card.mainTitle}</h4>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomCaraouselWrap;
