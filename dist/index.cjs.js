'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var lottie = require('lottie-web');
var classNames = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var lottie__default = /*#__PURE__*/_interopDefaultLegacy(lottie);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var Lottie = function Lottie(_ref) {
  var containerClassName = _ref.containerClassName,
      animationData = _ref.animationData,
      renderer = _ref.renderer,
      speed = _ref.speed,
      direction = _ref.direction,
      autoplay = _ref.autoplay,
      loop = _ref.loop,
      isPaused = _ref.isPaused,
      onComplete = _ref.onComplete,
      onLoopComplete = _ref.onLoopComplete,
      onDOMLoaded = _ref.onDOMLoaded;

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      animation = _useState2[0],
      setAnimation = _useState2[1];

  var container = React.useRef(null);
  React.useEffect(function () {
    var animationItem = lottie__default["default"].loadAnimation({
      container: container.current,
      renderer: renderer,
      loop: loop,
      autoplay: autoplay,
      animationData: animationData
    });
    animationItem.setSpeed(speed);
    animationItem.setDirection(direction);
    animationItem.addEventListener('complete', onComplete);
    animationItem.addEventListener('loopComplete', onLoopComplete);
    animationItem.addEventListener('DOMLoaded', onDOMLoaded);
    setAnimation(animationItem);
  }, []);
  React.useEffect(function () {
    if (isPaused) animation === null || animation === void 0 ? void 0 : animation.pause();else animation === null || animation === void 0 ? void 0 : animation.play();
  }, [isPaused]);
  React.useEffect(function () {
    animation === null || animation === void 0 ? void 0 : animation.setSpeed(speed);
  }, [speed]);
  React.useEffect(function () {
    animation === null || animation === void 0 ? void 0 : animation.setDirection(direction);
  }, [direction]);
  var className = classNames__default["default"](_defineProperty({
    lottie: true
  }, containerClassName, containerClassName));
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: className,
    ref: container
  });
};

Lottie.propTypes = {
  autoplay: PropTypes__default["default"].bool,
  loop: PropTypes__default["default"].bool,
  renderer: PropTypes__default["default"].oneOf(["svg", "html", "canvas"]),
  speed: PropTypes__default["default"].number,
  direction: PropTypes__default["default"].number,
  containerClassName: PropTypes__default["default"].string,
  isPaused: PropTypes__default["default"].bool,
  onComplete: PropTypes__default["default"].func,
  onLoopComplete: PropTypes__default["default"].func,
  onDOMLoaded: PropTypes__default["default"].func
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
  onDOMLoaded: null
};

module.exports = Lottie;
