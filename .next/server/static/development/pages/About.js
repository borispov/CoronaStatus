module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/HeaderDescription.js":
/*!*****************************************!*\
  !*** ./components/HeaderDescription.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/HeaderDescription.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const descriptionTextEn = 'This website makes use of public health data, specifically www.ourworldindata.org and WHO.int';
const Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "HeaderDescription__Text",
  componentId: "sc-110gwmc-0"
})(["color:", ";font-size:14px;font-family:'Open Sans';line-height:1.5;max-width:520px;text-align:center;margin:0 auto;@media (max-width:768px){max-width:380px;}@media (max-width:350px){max-width:fit-content;}"], props => props.theme.text.primary);
const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "HeaderDescription__Wrap",
  componentId: "sc-110gwmc-1"
})(["z-index:9999;position:relative;display:block;width:620px;max-width:620px;margin:0 auto 24px;@media (max-width:768px){width:100%;max-width:380px;}@media (max-width:320px){}"]);
const Href = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "HeaderDescription__Href",
  componentId: "sc-110gwmc-2"
})(["outline:none;text-decoration:none;font-weight:bold;color:", ";"], props => props.theme.primaryVariant);
/* harmony default export */ __webpack_exports__["default"] = (({
  txt
}) => {
  const toShow = txt ? __jsx(Text, {
    secondary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, txt) : __jsx(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "This website makes use of public health data, specifically ", __jsx(Href, {
    href: "https://www.ourworldindata.org",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "www.ourworldindata.org"), " and ", __jsx(Href, {
    href: "https://WHO.int",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "WHO.int"));
  return __jsx(Wrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, toShow);
});

/***/ }),

/***/ "./components/S.js":
/*!*************************!*\
  !*** ./components/S.js ***!
  \*************************/
/*! exports provided: Flex, Heading, Heading2, Paragraph, simpleWrapper, Container, Button, FadeIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return Flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading2", function() { return Heading2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return Paragraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleWrapper", function() { return simpleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FadeIn", function() { return FadeIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/S.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const Flex = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "S__Flex",
  componentId: "sc-3vwmv4-0"
})(["display:flex;flex-direction:", ";justify-content:", ";margin:", ";color:", ";align-items:", ";flex:", ";background:", ";padding:", ";@media (max-width:768px){flex-direction:", ";}"], props => props.column && 'column' || 'row', props => props.justify || 'center', props => props.margin || '0 2px', props => props.color || '', props => props.alignItems || '', props => props.flex, props => props.bgColor === 'inverse' ? props.theme.color : props.bGcolor === 'bg' ? props.theme.bgColor : '', props => props.padding, props => props.mRow ? 'row' : props.mCol ? 'column' : '');
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "S__Heading",
  componentId: "sc-3vwmv4-1"
})(["font-size:", ";color:", ";font-family:", ";line-height:1.5;"], props => props.fontSize || '4.5rem', props => props.color || props.theme.color, props => props.font || 'Montserrat');
const Heading2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "S__Heading2",
  componentId: "sc-3vwmv4-2"
})(["font-size:", ";padding:", ";color:", ";font-family:", ";background:", ";white-space:", ";max-width:100%;text-overflow:", ";@media (max-width:768px){font-size:14px;font-weight:700;max-width:100%;line-height:1.45;}"], props => props.fontSize || '18px', props => props.padding || '', props => props.color || props.theme.color, props => props.font || 'Montserrat', props => props.bg || '', props => props.nowrap || '', props => props.truncate && 'ellipsis');
const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "S__Paragraph",
  componentId: "sc-3vwmv4-3"
})(["text-align:", ";font-size:", ";max-width:", ";margin:", ";line-height:", ";padding:", ";color:", ";direction:", ";@media (max-width:768px){font-size:12px;font-weight:300;margin:0;}"], props => props.center ? 'center' : '', props => props.fontSize || '16px', props => props.mw || 'fit-content', props => props.noMargin && '0' || '0', props => props.lineHeight || 1.5, props => props.padding || '', props => props.secondary ? props.theme.text.secondary : props.theme.text.primary, props => props.rtl ? 'rtl' : 'inherit');
const simpleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "S__simpleWrapper",
  componentId: "sc-3vwmv4-4"
})(["background:", ";direction:ltr;"], props => props.theme.bg || props.theme.bgColor);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "S__Container",
  componentId: "sc-3vwmv4-5"
})(["@media (max-width:576px){max-width:540px;max-width:100%;}@media (max-width:768px){}@media (max-width:992px){max-width:960px;}@media (min-width:1200px){max-width:1140px;}transition:all .5s cubic-bezier(.55,0,.1,1);width:85%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;text-align:", ";"], props => props.textAlign && 'center');
const Btn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "S__Btn",
  componentId: "sc-3vwmv4-6"
})(["border-radius:", ";padding:", ";font-size:", ";background:", ";color:", ";border:", ";font-weight:", ";cursor:", ";outline:none;line-height:1.5;margin:", ";box-shadow:", ";letter-spacing:", ";transition:all 0.3s ease-in-out;&:hover{transform:", ";background:", ";color:", ";}@media (max-width:450px){font-size:12px;font-weight:normal;letter-spacing:0.5px;}@media (max-width:344px){padding:2px 4px;letter-spacing:0.2px;}"], props => props.radius ? props.radius : '4px', props => props.small && '.375rem .75rem' || props.medium && '6px 9px' || props.big && '14px' || '10px 14px', props => props.small ? '12px' : '16px', props => props.active && props.theme.primaryColor || props.bg && props.theme.general[props.bg] || props.theme.primaryColor, props => props.active ? props.theme.onPrimary : props.btnColor && props.theme[props.btnColor] || props.theme.onPrimary, props => props.outline ? `${props.fat ? '2px' : '1px'} solid ${props.theme[props.outline] || props.theme.primaryColor}` : 'none', props => props.bold && 'bold' || 'normal', props => props.link ? 'pointer' : 'cursor', props => props.margin ? props.margin : '', props => props.theme.shadows[1], props => props.letterSpace ? '1.5px' : '0', props => props.hoverUp ? 'translateY(-5%)' : '', props => !props.active && props.hoverColor && props.theme[props.hoverColor], props => !props.active && props.hoverColor ? props.theme.onPrimary : '');
const LangBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Btn).withConfig({
  displayName: "S__LangBtn",
  componentId: "sc-3vwmv4-7"
})(["position:relative;background:lightblue;color:#111;padding:0.54rem 0.85rem;font-size:12px;font-weight:400;font-family:'Rubik';outline:none;text-align:center;border:none;border-radius:6px;margin:0 6px;margin-left:16px;z-index:1;"]);
const Button = props => props.langBtn && __jsx(LangBtn, _extends({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 144
  },
  __self: undefined
}), props.children) || __jsx(Btn, _extends({
  onClick: props.onClick
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145
  },
  __self: undefined
}), props.children);
const BaseAnimation = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "S__BaseAnimation",
  componentId: "sc-3vwmv4-8"
})(["   animation-duration:", ";animation-timing-function:", ";animation-delay:", ";animation-iteration-count:", ";animation-direction:", ";animation-fill-mode:", ";animation-play-state:", ";display:", ";"], props => props.duration, props => props.timingFunction, props => props.delay, props => props.iterationCount, props => props.direction, props => props.fillMode, props => props.playState, props => props.display);
BaseAnimation.defaultProps = {
  duration: '1s',
  timingFunction: 'ease-in-out',
  delay: '0s',
  iterationCount: '1',
  direction: 'normal',
  fillMode: 'both',
  playState: 'running',
  display: 'block'
};
const fadeInAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["from{transform:", ";opacity:0;}to{transform:", ";opacity:1;}"], props => props.noScale ? '' : scale(0.5), props => props.noScale ? '' : scale(1));
const FadeIn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(BaseAnimation).withConfig({
  displayName: "S__FadeIn",
  componentId: "sc-3vwmv4-9"
})(["animation-name:", ";"], fadeInAnimation);

/***/ }),

/***/ "./pages/About.js":
/*!************************!*\
  !*** ./pages/About.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_S__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/S */ "./components/S.js");
/* harmony import */ var _components_HeaderDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HeaderDescription */ "./components/HeaderDescription.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/About.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // const someHeader = `When I am not practicing web development and doing geeky stuff, I am usually concerned with either work or family. I am a father of a wonderful little girl whose at the moment of writing is 1y10m old, and a Husband with a lovely, supporting and loving wife who has been a part of assembling this project from day [0]. At work, I'm practicing as a social worker in the mental health field, a place that reminds me the importance of humility`

const welcomeEng = 'The goal of this project is to provide resources for people to cope with Coronavirus, be it link for online activities, important news, psychological methods to help with regulating anxiety and overwhelming emotions.';
const welcomeHeb = 'מטרת הפרויקט הזה הינה לספק משאבים ומידע עבור אנשים להתמודדות יומיומית עם נגיף הקורונה והשלכותיו, היה זה בדמוי רעיונות ולינקים לפעילויות, חדשות חשובות, טכניקות לוויסות החרדה והתמודדות עם חוסר ודאות וחוסר אונים.';

const lastPara = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "\u05D0\u05EA\u05E8 \u05D6\u05D4 \u05E0\u05D5\u05E6\u05E8 \u05DE\u05EA\u05D5\u05DA \u05E6\u05D5\u05E8\u05DA \u05DC\u05DE\u05E7\u05D5\u05DD \u05DE\u05D0\u05D5\u05E8\u05D2\u05DF \u05E2\u05D1\u05D5\u05E8 \u05DB\u05DC \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D4\u05D9\u05E7\u05E8 \u05D4\u05DE\u05D5\u05D6\u05E8\u05DD \u05DB\u05DC \u05D9\u05D5\u05DD \u05D1\u05E7\u05D1\u05D5\u05E6\u05D5\u05EA \u05D4\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4 \u05D4\u05E9\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 \u05D5\u05D4\u05D5\u05DC\u05DA \u05DC\u05D0\u05D9\u05D1\u05D5\u05D3 \u05DC\u05D0\u05D7\u05E8 \u05DE\u05E1\u05E4\u05E8 \u05D3\u05E7\u05D5\u05EA \u05D0\u05D5 \u05E9\u05E2\u05D5\u05EA \u05D1\u05DE\u05E7\u05E8\u05D4 \u05D4\u05D8\u05D5\u05D1. \u05E0\u05D5\u05E1\u05E3 \u05DC\u05DB\u05DA, \u05D4\u05D0\u05EA\u05E8 \u05DE\u05E1\u05E4\u05E7 \u05DE\u05E7\u05D5\u05DD \u05DC\u05D4\u05EA\u05E2\u05D3\u05DB\u05DF \u05D1\u05DE\u05E1\u05E4\u05E8\u05D9\u05DD \u05D4\u05E8\u05DC\u05D5\u05D5\u05E0\u05D8\u05D9\u05D9\u05DD \u05E9\u05DC \u05E0\u05D2\u05D9\u05E3 \u05D4\u05E7\u05D5\u05E8\u05D5\u05E0\u05D4 \u05D1\u05D0\u05E8\u05E5 \u05D5\u05D1\u05E2\u05D5\u05DC\u05DD, \u05D5\u05DE\u05E7\u05E0\u05D4 \u05D9\u05DB\u05D5\u05DC\u05EA \u05DC\u05E9\u05DC\u05D5\u05D8 \u05D1\u05DE\u05D9\u05E0\u05D5\u05DF \u05D4\u05D4\u05EA\u05E2\u05D3\u05DB\u05E0\u05D5\u05EA, \u05D5\u05D6\u05D0\u05EA \u05D1\u05DE\u05E7\u05D5\u05DD \u05DC\u05D3\u05D1\u05D5\u05E7 \u05D1\u05DE\u05E1\u05DA \u05D4\u05D8\u05DC\u05D5\u05D9\u05D6\u05D9\u05D4 \u05DE\u05D5\u05DC \u05D4\u05D7\u05D3\u05E9\u05D5\u05EA \u05D0\u05E9\u05E8 \u05DC\u05E2\u05EA\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D5\u05EA \u05E8\u05E7 \u05DE\u05E2\u05DC\u05D5\u05EA \u05DC\u05D7\u05E6\u05D9\u05DD \u05DE\u05D9\u05D5\u05EA\u05E8\u05D9\u05DD \u05D5\u05D0\u05D5\u05D5\u05D9\u05E8\u05D4 \u05E9\u05DC\u05D9\u05DC\u05D9\u05EA \u05D1\u05D1\u05D9\u05EA.");

/* harmony default export */ __webpack_exports__["default"] = (({
  isHeb
}) => {
  const welcome = isHeb && welcomeHeb || welcomeEng;
  return __jsx("div", {
    style: {
      backgroundColor: '#d9d9d933'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["FadeIn"], {
    duration: "0.2s",
    delay: "0.1s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    style: {
      direction: 'ltr',
      marginBottom: '42px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, " Bonjour!"), __jsx(_components_HeaderDescription__WEBPACK_IMPORTED_MODULE_2__["default"], {
    txt: welcome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(_components_HeaderDescription__WEBPACK_IMPORTED_MODULE_2__["default"], {
    txt: 'This website is created by Boris Povolotsky',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Paragraph"], {
    rtl: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, isHeb ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "\u05DB\u05DC \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D4\u05DE\u05E1\u05E4\u05D5\u05E7 \u05D1\u05D0\u05EA\u05E8 \u05DE\u05D2\u05D9\u05E2 \u05DE\u05DE\u05E7\u05D5\u05E8\u05D5\u05EA \u05D7\u05D5\u05E7\u05D9\u05D9\u05DD \u05DB\u05D2\u05D5\u05DF:", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "WHO.int, worldometers, ourwourldindata.org"), " \u05D5\u05DE\u05E7\u05D5\u05E8\u05D5\u05EA \u05DE\u05DE\u05E9\u05DC\u05EA\u05D9\u05D9\u05DD \u05E9\u05D5\u05E0\u05D9\u05DD.") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "All information provided is legal. The data is gathered through free sources like:", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), " ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "WHO"), ", ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "worldometers"), ", ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "ourwourldindata"), " and government health ministry websites."), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), isHeb ? 'מאגר המידע מוזרם מקובץ csv שיתופי אשר עובר בין מכרים וקולגות בעלי מידע שימושי. אם תרצו להוסיף מידע למאגר כדי שיופיע כאן באתר, אנא צרו קשר' : 'Resources section is a handmade csv file shared between colleagues and people with valuable information to share.', __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), isHeb ? 'אם בכלל, תרצו לקחת חלק בפרויקט ולתרום חלקכם, עשו זאת ע״י השארת פידבק, השארת טיפ דרך דף התרומה, נשמח לקבל הצעות ייעול או בקשות לפיצרים' : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "If you like to contribute, say hi or leave feedback you can accomplish that either by ", __jsx("a", {
    href: "https://ncorona.live/Coffee",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Supporting"), " or email. Let me know what you like and don\\'t like. You can ", __jsx("a", {
    href: "mailto:boristofu@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, " Mail Me ")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), isHeb && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "\u05E0\u05D9\u05EA\u05DF \u05DC\u05D9\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 \u05D3\u05E8\u05DA \u05D4\u05DE\u05D9\u05D9\u05DC: ", __jsx("a", {
    href: "mailto:boristofu@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "boristofu@gmail.com"))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }), __jsx(_components_HeaderDescription__WEBPACK_IMPORTED_MODULE_2__["default"], {
    txt: 'nCorona\'s BIO',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Paragraph"], {
    rtl: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, isHeb ? lastPara : 'This website was created out of a need for an organized source of useful information nowadays, living in the shadow of Coronavirus. Plenty of useful shareable links are streamed through WhatsApp groups that are lost within minutes. Beside that, I find that having one place to look at and catch up with updated data regarding Covid19 casualties and recoveries is key to avoid unnecessary stress related with watching the News channels non-stop.'))));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/About.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raypo/Desktop/Projectos/CoronaStatus/pages/About.js */"./pages/About.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=About.js.map