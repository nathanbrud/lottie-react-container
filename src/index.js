import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import lottie from "lottie-web";
import classNames from "classnames";

const Lottie = ({
  containerClassName,
  animationData,
  renderer,
  speed,
  direction,
  autoplay,
  loop,
  isPaused,
	onComplete,
	onLoopComplete,
	onDOMLoaded
}) => {
  const [animation, setAnimation] = useState(null);
  const container = useRef(null);

  useEffect(() => {
    const animationItem = lottie.loadAnimation({
      container: container.current,
      renderer,
      loop,
      autoplay,
      animationData,
    });

    animationItem.setSpeed(speed);
    animationItem.setDirection(direction);

		animationItem.addEventListener('complete', onComplete);
		animationItem.addEventListener('loopComplete', onLoopComplete);
		animationItem.addEventListener('DOMLoaded', onDOMLoaded);

    setAnimation(animationItem);
  }, []);

  useEffect(() => {
    if (isPaused) animation?.pause();
    else animation?.play();
  }, [isPaused]);

  useEffect(() => {
    animation?.setSpeed(speed);
  }, [speed]);

  useEffect(() => {
    animation?.setDirection(direction);
  }, [direction]);

  const className = classNames({
    lottie: true,
    [containerClassName]: containerClassName,
  });

  return <div className={className} ref={container} />;
};

Lottie.propTypes = {
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  renderer: PropTypes.oneOf(["svg", "html", "canvas"]),
  speed: PropTypes.number,
  direction: PropTypes.number,
  containerClassName: PropTypes.string,
  isPaused: PropTypes.bool,
  onComplete: PropTypes.func,
  onLoopComplete: PropTypes.func,
  onDOMLoaded: PropTypes.func,
};

Lottie.defaultProps = {
  autoplay: true,
  loop: true,
  renderer: "svg",
  speed: 1,
  direction: 1,
  containerClassName: null,
  isPaused: false,
  onComplete: null,
  onLoopComplete: null,
  onDOMLoaded: null,
};

export default Lottie;
