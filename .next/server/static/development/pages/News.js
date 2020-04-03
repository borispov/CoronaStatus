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
})(["font-size:", ";max-width:fit-content;margin:", ";line-height:", ";padding:", ";color:", ";@media (max-width:768px){font-size:12px;font-weight:300;margin:0;}"], props => props.fontSize || '16px', props => props.noMargin && '0' || '0', props => props.lineHeight || 1.5, props => props.padding || '', props => props.color || props.theme.color);
const simpleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "S__simpleWrapper",
  componentId: "sc-3vwmv4-4"
})(["background:", ";color:", ";direction:ltr;"], props => props.theme.bgColor, props => props.theme.color);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "S__Container",
  componentId: "sc-3vwmv4-5"
})(["@media (max-width:576px){max-width:540px;max-width:100%;}@media (max-width:768px){}@media (max-width:992px){max-width:960px;}@media (min-width:1200px){max-width:1140px;}transition:all .5s cubic-bezier(.55,0,.1,1);width:85%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;text-align:", ";"], props => props.textAlign && 'center');
const Btn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "S__Btn",
  componentId: "sc-3vwmv4-6"
})(["border-radius:", ";padding:", ";font-size:", ";background:", ";color:", ";font-family:'Sans';border:", ";font-weight:", ";cursor:", ";outline:none;line-height:1.5;margin:", ";@media (max-width:450px){font-size:12px;font-weight:normal;padding:1px 4px;}"], props => props.radius ? props.radius : '4px', props => props.small && '.375rem .75rem' || '10px 14px', props => props.small ? '12px' : '16px', props => props.bgColor && props.bgColor || props.theme.btnBg, props => props.btnColor && props.btnColor || props.theme.btnColor, props => props.border ? props.border : 'none', props => props.bold && 'bold' || 'normal', props => props.link ? 'pointer' : 'cursor', props => props.margin ? props.margin : '');
const LangBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Btn).withConfig({
  displayName: "S__LangBtn",
  componentId: "sc-3vwmv4-7"
})(["position:relative;background:lightblue;color:#111;padding:0.54rem 0.85rem;font-size:12px;font-weight:400;font-family:'Roboto';outline:none;text-align:center;border:none;border-radius:6px;margin:0 6px;margin-left:16px;z-index:1;"]);
const Button = props => props.langBtn && __jsx(LangBtn, _extends({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127
  },
  __self: undefined
}), props.children) || __jsx(Btn, _extends({
  onClick: props.onClick
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128
  },
  __self: undefined
}), props.children);
const BaseAnimation = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "S__BaseAnimation",
  componentId: "sc-3vwmv4-8"
})(["   animation-duration:", ";animation-timing-function:", ";animation-delay:", ";animation-iteration-count:", ";animation-direction:", ";animation-fill-mode:", ";animation-play-state:", ";display:", ";"], props => props.duration, props => props.timingFunction, props => props.delay, props => props.iterationCount, props => props.direction, props => props.fillMode, props => props.playState, props => props.display);
BaseAnimation.defaultProps = {
  duration: '1s',
  timingFunction: 'ease',
  delay: '0s',
  iterationCount: '1',
  direction: 'normal',
  fillMode: 'both',
  playState: 'running',
  display: 'block'
};
const fadeInAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["from{transform:scale(0.5);opacity:0;}to{transform:scale(1);opacity:1;}"]);
const FadeIn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(BaseAnimation).withConfig({
  displayName: "S__FadeIn",
  componentId: "sc-3vwmv4-9"
})(["animation-name:", ";"], fadeInAnimation);

/***/ }),

/***/ "./pages/News.js":
/*!***********************!*\
  !*** ./pages/News.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_S__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/S */ "./components/S.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_dateHeb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dateHeb */ "./utils/dateHeb.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/News.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const sourceList = {
  maariv: 'מעריב',
  ynet: 'YNET',
  israelhayom: 'ישראל היום'
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "News__Wrapper",
  componentId: "sc-1dpkj34-0"
})(["margin:0 auto;width:85%;direction:rtl;transition:all .6s ease-in-out;@media (max-width:768px){width:100%;max-width:100%;}"]);
const NewsCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "News__NewsCard",
  componentId: "sc-1dpkj34-1"
})(["display:flex;border-radius:6px;border:1px solid ", ";border-top:4px solid ", ";flex-direction:column;width:100%;max-width:100%;justify-content:space-between;margin:16px auto;height:auto;@media (max-width:568px){border:1px solid ", ";border-top:6px solid ", ";}"], props => props.theme.menuBorder, props => props.theme.menuBorder, props => props.theme.blueTheme, props => props.theme.blueTheme);
const NewsBanner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "News__NewsBanner",
  componentId: "sc-1dpkj34-2"
})(["display:block;margin-left:8px;width:124px;height:auto;border:0;img{width:124px;height:100%;}"]);
const Source = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "News__Source",
  componentId: "sc-1dpkj34-3"
})(["margin-right:24px;width:100%;display:block;text-align:center;font-size:12px;font-weight:700;color:", ";@media (max-width:768px){padding:0;}"], props => props.theme.test);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_S__WEBPACK_IMPORTED_MODULE_2__["Heading2"]).withConfig({
  displayName: "News__Title",
  componentId: "sc-1dpkj34-4"
})(["font-weight:700;font-family:'Roboto';color:", ";@media (max-width:768px){max-width:fit-content;}"], props => props.theme.color);

const shortenSnippet = text => text.split(' ').slice(0, 40).join(' ') + '. . .';

const showSource = url => sourceList[url.split('.')[1]];

const News = ({
  theme,
  isHeb,
  news
}) => {
  const newsToTemplate = news => {
    return news.map((item, idx) => __jsx(NewsCard, {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: undefined
    }, __jsx("a", {
      style: {
        textDecoration: 'none'
      },
      href: item.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: undefined
    }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      justify: "flex-start",
      margin: "0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: undefined
    }, __jsx(NewsBanner, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: undefined
    }, __jsx("img", {
      src: item.image,
      alt: item.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: undefined
    })), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      column: true,
      flex: "0 1 80%",
      margin: "12px 0px 18px 6px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: undefined
    }, __jsx(Title, {
      fontSize: "16px",
      color: "#111",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: undefined
    }, item.title), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["Paragraph"], {
      padding: "0",
      noMargin: true,
      fontSize: "12px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: undefined
    }, shortenSnippet(item.description))))), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      justify: "space-between",
      bgColor: "inverse",
      margin: "0",
      padding: "0 12px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: undefined
    }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      justify: "center",
      alignItems: "middle",
      column: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: undefined
    }, __jsx("a", {
      style: {
        textDecoration: 'none',
        textAlign: 'center',
        color: 'white'
      },
      href: item.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: undefined
    }, __jsx(Source, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: undefined
    }, showSource(item.href)))), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      justify: "flex-end",
      column: true,
      alignItems: "middle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: undefined
    }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["Heading2"], {
      color: "white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: undefined
    }, Object(_utils_dateHeb__WEBPACK_IMPORTED_MODULE_4__["default"])(item.date))))));
  };

  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    column: true,
    justify: "baseline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["FadeIn"], {
    duration: "1.8s",
    delay: "0.1s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, newsToTemplate(news)))));
};

News.getInitialProps = async ctx => {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://ncorona.live/api/v1/news/heb');
  const news = data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
  return {
    news
  };
};

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ }),

/***/ "./utils/dateHeb.js":
/*!**************************!*\
  !*** ./utils/dateHeb.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var months = [];
months[months.length] = "ינואר";
months[months.length] = "פברואר";
months[months.length] = "מרץ";
months[months.length] = "אפריל";
months[months.length] = "מאי";
months[months.length] = "יוני";
months[months.length] = "יולי";
months[months.length] = "אוגוסט";
months[months.length] = "ספטמבר";
months[months.length] = "אוקטובר";
months[months.length] = "נובמבר";
months[months.length] = "דצמבר";
/* harmony default export */ __webpack_exports__["default"] = (d => {
  const date = new Date(d);
  const m = months[date.getMonth()];
  const day = date.getDate();
  return `${day} ב${m}`;
}); // const SS = "Wed, 01 Apr 2020 23:04:51 GMT"

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/News.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raypo/Desktop/Projectos/CoronaStatus/pages/News.js */"./pages/News.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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
//# sourceMappingURL=News.js.map