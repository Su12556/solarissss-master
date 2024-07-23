import React, { useState } from "react";

const ImageSlider = ({ colorImages }) => {
  const [currentIndexByColor, setCurrentIndexByColor] = useState({
    black: 0,
    gray: 0,
    red: 0,
    green: 0,
  });
  const [selectedColor, setSelectedColor] = useState("black");

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndexByColor((prevState) => ({
      ...prevState,
      [selectedColor]: index,
    }));
  };

  const getCurrentImages = () => {
    return colorImages[selectedColor];
  };

  return (
    <div className="slider-container container">
      <div className="main-image-container">
        <img
          src={getCurrentImages()[currentIndexByColor[selectedColor]]}
          alt={`Main ${currentIndexByColor[selectedColor]}`}
          className="main-image"
        />

        <div className="color-container">
          {Object.keys(colorImages).map((color) => (
            <div
              key={color}
              className={`color-${color} colorBox`}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      </div>
      <div className="thumbnail-container">
        {getCurrentImages().map((image, index) => (
          <div className="thumbNailBox" key={index}>
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              className={`thumbnail ${
                index === currentIndexByColor[selectedColor] ? "active" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
