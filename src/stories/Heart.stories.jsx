import React from "react";
import Lottie from "../index.js";
import animationData from "./animations/heart.json";

export default {
  title: "Lottie/Heart",
  component: Lottie,
};

export const Heart = ({
  autoplay,
  containerClassName,
  renderer,
  paused,
  speed,
  direction
}) => {
  const onComplete = () => {
    console.log('onComplete');
  };

  const onLoopComplete = () => {
    console.log('onLoopComplete');
  }

  const onDOMLoaded = () => {
    console.log('onDOMLoaded');
  };
  return (
    <div style={{ width: "400px" }}>
      <Lottie
        autoplay={autoplay}
        containerClassName={containerClassName}
        animationData={animationData}
        renderer={renderer}
        paused={paused}
        speed={speed}
        direction={direction}
        onComplete={onComplete}
        onLoopComplete={onLoopComplete}
        onDOMLoaded={onDOMLoaded}
      />
    </div>
  );
};
