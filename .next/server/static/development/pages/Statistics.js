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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
})(["display:flex;flex-direction:", ";justify-content:", ";margin:", ";color:", ";align-items:", ";flex:", ";background:", ";padding:", ";@media (max-width:768px){flex-direction:", ";}"], props => props.column && 'column' || 'row', props => props.justify || 'center', props => props.margin || '0 2px', props => props.color || '', props => props.alignItems || '', props => props.flex, props => props.bgColor === 'inverse' ? props.theme.color : props.bgColor === 'bg' ? props.theme.bgColor : '', props => props.padding, props => props.mRow ? 'row' : props.mCol ? 'column' : '');
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
})(["@media (max-width:576px){max-width:540px;max-width:100%;}@media (max-width:768px){}@media (max-width:992px){max-width:960px;}@media (min-width:1200px){max-width:1140px;}transition:all .5s cubic-bezier(.55,0,.1,1);padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;text-align:", ";"], props => props.textAlign && 'center');
const Btn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "S__Btn",
  componentId: "sc-3vwmv4-6"
})(["border-radius:", ";font-size:16px;padding:", ";", ";background:", ";color:", ";border:", ";font-weight:", ";font-family:'Rubik';cursor:", ";outline:none;line-height:1.5;margin:", ";box-shadow:", ";letter-spacing:", ";transition:all 0.3s ease-in-out;&:hover{transform:", ";background:", ";color:", ";}@media (max-width:450px){font-size:12px;font-weight:normal;letter-spacing:0.5px;}@media (max-width:344px){padding:2px 4px;letter-spacing:0.2px;}", ";"], props => props.radius ? props.radius : '4px', props => props.medium && '6px 9px' || props.big && '14px' || '8px 10px', props => props.small && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["font-size:12px;padding:0rem 1rem;"]), props => props.active && props.theme.primaryColor || props.bg && props.theme.general[props.bg] || props.theme[props.bg] || props.theme.primaryColor, props => props.active ? props.theme.onPrimary : props.btnColor && props.theme[props.btnColor] || props.theme.general.white, props => props.outline ? `${props.fat ? '2px' : '1px'} solid ${props.theme[props.outline] || props.theme.primaryColor}` : 'none', props => props.bold && 'bold' || 'normal', props => props.link ? 'pointer' : 'cursor', props => props.margin ? props.margin : '', props => props.theme.shadows[1], props => props.letterSpace ? '1.5px' : '0', props => props.hoverUp ? 'translateY(-5%)' : '', props => !props.active && props.hoverColor && props.theme[props.hoverColor], props => !props.active && props.hoverColor ? props.theme.onPrimary : '', props => props.KoFi && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["font-family:", ";font-weight:700;margin-left:4px;margin-right:4px;padding:0 12px;letter-spacing:1.75px;color:", ";cursor:pointer;background:", ";"], props.fontFamily, props => props.theme.white, props => props.theme.kofi));
const Button = props => __jsx(Btn, _extends({
  onClick: props.onClick
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146
  },
  __self: undefined
}), props.children);
const BaseAnimation = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "S__BaseAnimation",
  componentId: "sc-3vwmv4-7"
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
  componentId: "sc-3vwmv4-8"
})(["animation-name:", ";"], fadeInAnimation);

/***/ }),

/***/ "./components/Table/Cell.js":
/*!**********************************!*\
  !*** ./components/Table/Cell.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Table/Cell.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Cell = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.td.withConfig({
  displayName: "Cell",
  componentId: "h1tosf-0"
})(["border:2px solid ", ";padding:10px 18px ", ";font-size:", ";max-width:200px;font-family:'Rubik';font-weight:", ";background:", ";color:", ";font-weight:500;span{padding-right:4px;margin-right:4px;}> *{padding:2px;}"], props => props.theme.error2 + '33', ({
  country
}) => country ? '10px 0' : '10px 18px', props => props.country ? '12px' : '14px', props => props.color === 'active2' && 'bold' || props.color === 'successDefault' && 'bold' || 500, props => props.theme.primaryDark, props => props.theme[props.color] || props.theme.onPrimary);
const CellHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.th.withConfig({
  displayName: "Cell__CellHeader",
  componentId: "h1tosf-1"
})(["font-size:14px;font-weight:bold;border-color:1px solid ", ";box-shadow:", ";padding:8px;position:sticky;top:0;background:", ";color:", ";"], props => props.theme.text.primary, props => props.theme.shadows[1], props => props.theme.primaryLight, props => props.theme.onPrimary);
/* harmony default export */ __webpack_exports__["default"] = (({
  content,
  header,
  cellColor,
  country
}) => {
  const cellMarkup = header ? __jsx(CellHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, content) : __jsx(Cell, {
    color: cellColor,
    country: country,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, content);
  return cellMarkup;
});

/***/ }),

/***/ "./components/Table/Table.js":
/*!***********************************!*\
  !*** ./components/Table/Table.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cell */ "./components/Table/Cell.js");
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../S */ "./components/S.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Table/Table.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ScrollTable = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Table__ScrollTable",
  componentId: "sc-135jno9-0"
})(["overflow-x:auto;"]);
const DataTable = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Table__DataTable",
  componentId: "sc-135jno9-1"
})(["max-width:100%;min-height:100%;"]);
const Table = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.table.withConfig({
  displayName: "Table",
  componentId: "sc-135jno9-2"
})(["position:relative;clear:both;border-collapse:separate;margin:0 auto;border-spacing:0px;background:#fff;box-shadow:0 1px 0 0 rgba(22,29,37,0.05);width:auto;"]);
const colors = {
  0: 'onPrimary',
  1: 'successDefault',
  2: 'error2',
  3: 'active2',
  4: 'purpleComp',
  5: 'error',
  6: 'menuHover',
  7: 'menuColor'
};
/* harmony default export */ __webpack_exports__["default"] = (({
  headings,
  theme,
  isHeb,
  rows
}) => {
  const renderHeadingRow = (_cell, cellIndex) => __jsx(_Cell__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: `heading-${cellIndex}`,
    content: headings[cellIndex],
    header: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  });

  const renderRow = (_row, rowIndex) => {
    return __jsx("tr", {
      key: `row-${rowIndex}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: undefined
    }, rows[rowIndex].map((_cell, cellIndex) => {
      return __jsx(_Cell__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: `${rowIndex}-${cellIndex}`,
        cellColor: colors[cellIndex] || 'onPrimary',
        country: !cellIndex,
        content: cellIndex === 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
          width: "24",
          height: "24",
          src: rows[rowIndex][cellIndex]['flag'],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: undefined
        }), __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: undefined
        }, rows[rowIndex][cellIndex]['country'])) : rows[rowIndex][cellIndex] // content={rows[rowIndex][cellIndex]}
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: undefined
      });
    }));
  };

  const theadMarkup = __jsx("tr", {
    role: "row",
    key: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, headings.map(renderHeadingRow));

  const tbodyMarkup = rows.map(renderRow);
  return __jsx(DataTable, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx(_S__WEBPACK_IMPORTED_MODULE_3__["FadeIn"], {
    duration: "0.5s",
    delay: "0.1s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx(ScrollTable, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx(Table, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, theadMarkup), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, tbodyMarkup)))));
});

/***/ }),

/***/ "./pages/Statistics.js":
/*!*****************************!*\
  !*** ./pages/Statistics.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_S__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/S */ "./components/S.js");
/* harmony import */ var _components_HeaderDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HeaderDescription */ "./components/HeaderDescription.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Table_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Table/Table */ "./components/Table/Table.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/Statistics.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const baseURL = `https://corona.lmao.ninja/countries`;

const Statistics = ({
  isHeb,
  news
}) => {
  const {
    0: rows,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const engHeader = `You are presented with updated data regarding Coronavirus statistics, delivered to you by a great project called Worldometers.`;
  const hebHeader = `בפניכם נתונים עדכניים אודות הנגיף אשר מובאים כאן בעזרת הפרויקט הנהדר בשם worldometers`;
  const text = isHeb && hebHeader || engHeader;
  const engHeaders = ['country', 'cases', 'active', 'recovered', 'critical', 'deaths', 'todayDeaths', 'todayCases'];
  const hebHeaders = ['מדינה', 'נדבקים', 'פעילים', 'מוות', 'החלימו', 'קריטי', 'מתו היום', 'מקרים חדשים'];
  const headers = isHeb && hebHeaders || engHeaders;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchData() {
      setLoading(true);
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://corona.lmao.ninja/countries?sort=cases');
      setData(data.map(({
        countryInfo,
        country,
        cases,
        active,
        deaths,
        recovered,
        critical,
        todayDeaths,
        todayCases
      }) => {
        return [{
          flag: countryInfo.flag,
          country
        }, cases, active, deaths, recovered, critical, todayDeaths, todayCases];
      }));
    }

    fetchData();
    setLoading(false);
  }, []);
  if (loading) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, " Loading Contents . . .");

  const renderTable = rows && headers && __jsx(_components_Table_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    headings: headers,
    rows: rows,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  });

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "nCorona Stats")), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["FadeIn"], {
    duration: "0.5s",
    delay: "0.1s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(_components_HeaderDescription__WEBPACK_IMPORTED_MODULE_2__["default"], {
    txt: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), renderTable));
}; //
// Statistics.getInitialProps = async ctx => {
//     const data = await axios
//       .get('https://corona.lmao.ninja/countries/')
//     const news = data
//     return news
// }


/* harmony default export */ __webpack_exports__["default"] = (Statistics);

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/Statistics.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raypo/Desktop/Projectos/CoronaStatus/pages/Statistics.js */"./pages/Statistics.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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
//# sourceMappingURL=Statistics.js.map