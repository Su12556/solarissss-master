import React from "react";
import ProgressSlider from "./progressiveSlider/ProgressSlider";
import FirstSlide from "./progressiveSlider/FirstSlide";
import SecondSlide from "./progressiveSlider/SecondSlide";

function PurePerformance() {
  const slides = [
    { content: <FirstSlide/>},
    { content: <SecondSlide/>},
    { content: <FirstSlide/>},
    { content: <SecondSlide/>},
    
  ];
  return (
   
    <div className="container">
      <ProgressSlider slides={slides} />
    </div>
   
  );
}

export default PurePerformance;
