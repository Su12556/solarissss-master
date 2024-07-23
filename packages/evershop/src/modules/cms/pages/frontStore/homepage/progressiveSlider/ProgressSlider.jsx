import React, { useEffect, useState } from "react";

function ProgressSlider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progresses, setProgresses] = useState(
    new Array(slides.length).fill(0)
  );
  const [timers, setTimers] = useState(new Array(slides.length).fill(null));

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgresses((prevProgresses) =>
        prevProgresses.map((progress, index) => {
          if (index === currentSlide && progress < 100) {
            return progress + 1;
          } else {
            return 0;
          }
        })
      );
    }, 50);

    return () => clearInterval(progressInterval);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      resetTimer(currentSlide);
    }, 5000);

    setTimers((prevTimers) => {
      const updatedTimers = [...prevTimers];
      updatedTimers[currentSlide] = interval;
      return updatedTimers;
    });

    return () => clearInterval(interval);
  }, [slides.length, currentSlide]);

  const resetTimer = (index) => {
    clearInterval(timers[index]);
    const updatedTimers = [...timers];
    updatedTimers[index] = null;
    setTimers(updatedTimers);
  };

  const goToSlide = (index) => {
    resetTimer(currentSlide);
    setProgresses((prevProgresses) =>
      prevProgresses.map((progress, i) => (i === index ? progress : 0))
    ); // Reset progress for current slide
    setCurrentSlide(index);
  };
  return (
    <>
      <div className="progress-btns">
        {slides.map((slide, index) => (
          <div key={index} className="slide-button">
            {/* <button >Slide {index + 1}</button> */}
            <div className="progress-bar" onClick={() => goToSlide(index)}>
              <div
                className="progress"
                style={{ width: `${progresses[index]}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="progress-slider">
        <div
          className="slide-container"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              {slide.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProgressSlider;
