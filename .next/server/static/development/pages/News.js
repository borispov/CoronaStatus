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
/*! exports provided: Flex, Heading, Heading2, Paragraph, simpleWrapper, Container, Button */
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
})(["display:flex;flex-direction:", ";justify-content:", ";margin:", ";align-items:", ";@media (max-width:768px){flex-direction:", ";}"], props => props.column && 'column' || 'row', props => props.justify || 'center', props => props.margin || '0 2px', props => props.alignItems || '', props => props.mRow ? 'row' : props.mCol ? 'column' : '');
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "S__Heading",
  componentId: "sc-3vwmv4-1"
})(["font-size:", ";color:", ";font-family:", ";line-height:1.5;"], props => props.fontSize || '4.5rem', props => props.color || props.theme.color, props => props.font || 'Montserrat');
const Heading2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "S__Heading2",
  componentId: "sc-3vwmv4-2"
})(["font-size:", ";padding:", ";color:", ";font-family:", ";background:", ";white-space:", ";white-space:nowrap;overflow:hidden;max-width:450px;text-overflow:", ";@media (max-width:768px){font-size:14px;font-weight:400;max-width:100%;}"], props => props.fontSize || '18px', props => props.padding || '', props => props.color || props.theme.color, props => props.font || 'Montserrat', props => props.bg || '', props => props.nowrap || '', props => props.truncate && 'ellipsis');
const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "S__Paragraph",
  componentId: "sc-3vwmv4-3"
})(["font-size:", ";max-width:", ";margin:", ";line-height:", ";padding:", ";color:", ";@media (max-width:768px){font-size:12px;font-weight:300;overflow:hidden;max-width:250px;text-overflow:ellipsis;}"], props => props.fontSize || '16px', props => props.mw || '480px', props => props.noMargin || '0 auto', props => props.lineHeight || 1.5, props => props.padding || '2px', props => props.color || props.theme.color);
const simpleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "S__simpleWrapper",
  componentId: "sc-3vwmv4-4"
})(["background:", ";color:", ";direction:ltr;"], props => props.theme.bgColor, props => props.theme.color);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "S__Container",
  componentId: "sc-3vwmv4-5"
})(["@media (max-width:576px){max-width:540px;}@media (max-width:768px){max-width:640px;}@media (max-width:992px){max-width:960px;}@media (min-width:1200px){max-width:1140px;}transition:all .5s cubic-bezier(.55,0,.1,1);width:85%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;"]);
const Btn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "S__Btn",
  componentId: "sc-3vwmv4-6"
})(["border-radius:", ";padding:", ";font-size:", ";background:", ";color:", ";font-family:'Sans';border:", ";font-weight:", ";cursor:", ";line-height:1.5;margin:", ";"], props => props.radius ? props.radius : '4px', props => props.small && '.375rem .75rem' || '10px 14px', props => props.small ? '14px' : '16px', props => props.bgColor && props.bgColor || props.theme.btnBg, props => props.btnColor && props.btnColor || props.theme.btnColor, props => props.border ? props.border : 'none', props => props.bold && 'bold' || 'normal', props => props.link ? 'pointer' : 'cursor', props => props.margin ? props.margin : '');
const LangBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "S__LangBtn",
  componentId: "sc-3vwmv4-7"
})(["position:relative;background:", ";color:", ";font-size:14px;font-weight:600;font-family:'Sans';padding:8px 10px;width:100%;outline:none;text-align:center;border:none;border-radius:6px;margin:0 6px;margin-left:16px;@media (max-width:768px){font-size:12px;font-weight:400;padding:4px 6px;}"], props => props.theme.bgColor, props => props.theme.color);
const Button = props => props.langBtn && __jsx(LangBtn, _extends({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120
  },
  __self: undefined
}), props.children) || __jsx(Btn, _extends({
  onClick: props.onClick
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121
  },
  __self: undefined
}), props.children);

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
})(["margin:0 auto;width:85%;direction:rtl;@media (max-width:768px){width:100%;max-width:100%;}"]);
const NewsCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "News__NewsCard",
  componentId: "sc-1dpkj34-1"
})(["margin:8px 12px;display:flex;flex-direction:row;padding:16px 6px;border:1px solid gray;justify-content:space-between;@media (max-width:768px){width:100%;max-width:100%;flex-direction:column;padding:0;margin:0 auto;}"]);
const NewsBanner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "News__NewsBanner",
  componentId: "sc-1dpkj34-2"
})(["margin-left:42px;width:48px;height:48px;display:block;border:1px solid gray;@media (max-width:768px){margin:0;visibility:hidden;}"]);
const Source = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "News__Source",
  componentId: "sc-1dpkj34-3"
})(["font-size:12px;font-weight:700;padding-bottom:8px;transform:rotate(-15deg);@media (max-width:768px){transform:rotate(0);padding:0;}"]);

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
        lineNumber: 71
      },
      __self: undefined
    }, __jsx("a", {
      style: {
        textDecoration: 'none'
      },
      href: item.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: undefined
    }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      mCol: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: undefined
    }, __jsx(NewsBanner, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: undefined
    }, __jsx("img", {
      width: "64",
      height: "64",
      src: item.image,
      alt: item.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: undefined
    })), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      column: true,
      alignItems: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: undefined
    }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["Heading2"], {
      truncate: true,
      nowrap: true,
      fontSize: "16px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: undefined
    }, item.title), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["Paragraph"], {
      padding: "0",
      noMargin: true,
      fontSize: "12px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: undefined
    }, item.description)))), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      justify: "space-evenly",
      margin: "12px 0 0 0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: undefined
    }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      justify: "center",
      alignItems: true,
      column: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: undefined
    }, __jsx("a", {
      style: {
        textDecoration: 'none'
      },
      href: item.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: undefined
    }, __jsx(Source, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: undefined
    }, showSource(item.href)))), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      justify: "flex-end",
      column: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: undefined
    }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["Heading2"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: undefined
    }, Object(_utils_dateHeb__WEBPACK_IMPORTED_MODULE_4__["default"])(item.date))))));
  };

  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    column: true,
    justify: "baseline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, newsToTemplate(news))));
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