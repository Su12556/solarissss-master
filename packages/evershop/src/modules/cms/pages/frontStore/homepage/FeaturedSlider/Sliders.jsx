import React, { useState, useRef } from "react";

function Sliders({ slides, autoplayInterval = 3000 }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const startX = useRef(null);
  const isDragging = useRef(false);
  const sliderRef = useRef(null);
  const sliderWrapperRef = useRef(null);

  const nextSlide = () => {
    const newIndex = currentSlide === slides.length - 1 ? currentSlide : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const handleMouseDown = (event) => {
    isDragging.current = true;
    startX.current = event.clientX;
    sliderRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (event) => {
    if (isDragging.current) {
      const diff = event.clientX - startX.current;
      sliderWrapperRef.current.style.transition = "none";
      sliderWrapperRef.current.style.transform = `translateX(${-currentSlide * 100 + (diff / sliderRef.current.clientWidth) * 100}%)`;
    }
  };

  const handleMouseUp = (event) => {
    if (isDragging.current) {
      const diff = event.clientX - startX.current;
      handleDragEnd(diff);
    }
  };

  const handleDragEnd = (diff) => {
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    startX.current = null;
    isDragging.current = false;
    sliderRef.current.style.cursor = "grab";
    sliderWrapperRef.current.style.transition = "transform 0.3s ease-out";
    sliderWrapperRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
  };

  const handleTouchStart = (event) => {
    isDragging.current = true;
    startX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    if (isDragging.current) {
      const diff = event.touches[0].clientX - startX.current;
      sliderWrapperRef.current.style.transition = "none";
      sliderWrapperRef.current.style.transform = `translateX(${-currentSlide * 100 + (diff / sliderRef.current.clientWidth) * 100}%)`;
    }
  };

  const handleTouchEnd = (event) => {
    if (isDragging.current) {
      const diff = event.changedTouches[0].clientX - startX.current;
      handleDragEnd(diff);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className="slider"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={sliderRef}
    >
      <div
        className="slider-wrapper"
        ref={sliderWrapperRef}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {slide}
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? "dot active" : "dot"}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Sliders;
