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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Burger/Burger.js":
/*!*************************************!*\
  !*** ./components/Burger/Burger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Burger_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Burger.styled */ "./components/Burger/Burger.styled.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Burger/Burger.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Burger = ({
  open,
  setOpen
}) => {
  return __jsx(_Burger_styled__WEBPACK_IMPORTED_MODULE_1__["StyledBurger"], {
    open: open,
    onClick: () => setOpen(!open),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Burger);

/***/ }),

/***/ "./components/Burger/Burger.styled.js":
/*!********************************************!*\
  !*** ./components/Burger/Burger.styled.js ***!
  \********************************************/
/*! exports provided: StyledBurger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledBurger", function() { return StyledBurger; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledBurger = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Burgerstyled__StyledBurger",
  componentId: "sc-2xj2d1-0"
})(["position:relative;display:flex;flex-direction:column;justify-content:space-around;width:auto;height:2.4rem;background:transparent;border:none;cursor:pointer;z-index:10;transition:all 0.3s ease-in-out;margin-top:12px;&:focus{outline:none;}&:hover{transform:translateY(10%);}@media (max-width:660px){margin-top:4px;}@media (min-width:961px){display:none;}div{width:3.2rem;height:0.45rem;background:", ";border-radius:10px;z-index:10;transition:all 0.3s linear;position:relative;transform-origin:1px;:first-child{transform:", ";box-shadow:", ";}:nth-child(2){opacity:", ";transform:", ";box-shadow:", ";}:nth-child(3){transform:", ";box-shadow:", ";}}"], ({
  theme,
  open
}) => open ? '#d9d9d9' : theme.white, ({
  open
}) => open ? 'rotate(34deg)' : 'rotate(0)', props => props.theme.shadows[3], ({
  open
}) => open ? '0' : '1', ({
  open
}) => open ? 'translateX(20px)' : 'translateX(0)', props => props.theme.shadows[3], ({
  open
}) => open ? 'rotate(-34deg)' : 'rotate(0)', props => props.theme.shadows[3]);

/***/ }),

/***/ "./components/Burger/index.js":
/*!************************************!*\
  !*** ./components/Burger/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Burger.js */ "./components/Burger/Burger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Burger_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../S */ "./components/S.js");
/* harmony import */ var _Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons/ThemeIcon */ "./components/Icons/ThemeIcon.js");
/* harmony import */ var _Header_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.styled */ "./components/Header/Header.styled.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Header/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Header = ({
  title,
  theme,
  isHeb,
  children
}) => {
  const Tip = isHeb && '- השאר טיפ ל' || 'Tip Jar';
  return __jsx(_Header_styled__WEBPACK_IMPORTED_MODULE_3__["HeaderWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_S__WEBPACK_IMPORTED_MODULE_1__["FadeIn"], {
    duration: "0.4s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(_Header_styled__WEBPACK_IMPORTED_MODULE_3__["HeaderTag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_Header_styled__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(_Header_styled__WEBPACK_IMPORTED_MODULE_3__["NavList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_Header_styled__WEBPACK_IMPORTED_MODULE_3__["Logo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "n", __jsx(_Header_styled__WEBPACK_IMPORTED_MODULE_3__["Span"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "C"), "orona")), children, __jsx(_Header_styled__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, isHeb && __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/Coffee",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(_S__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    KoFi: true,
    hoverUp: true,
    hoverColor: "error2",
    fontFamily: isHeb && 'Rubik' || 'Quicksand',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("img", {
    height: "36",
    style: {
      height: '36px',
      border: '0px'
    },
    src: "./kofi.png",
    alt: "Buy Me A Coffee @ ko-fi.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), Tip)))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/Header.styled.js":
/*!********************************************!*\
  !*** ./components/Header/Header.styled.js ***!
  \********************************************/
/*! exports provided: HeaderWrapper, HeaderTag, Nav, NavList, NavItem, Span, Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderWrapper", function() { return HeaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTag", function() { return HeaderTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavList", function() { return NavList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return NavItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return Span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyled__HeaderWrapper",
  componentId: "sc-1v2vfvs-0"
})(["direction:ltr;position:relative;height:64px;z-index:1;width:100%;background:linear-gradient(45deg,#5c0434,#000000d6);margin:0 auto;margin-bottom:48px;box-shadow:", ";"], props => props.theme.shadows[4]);
const HeaderTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "Headerstyled__HeaderTag",
  componentId: "sc-1v2vfvs-1"
})(["justify-content:space-between;align-items:center;max-width:920px;margin:0 auto;@media (max-width:580px){margin-left:12px;margin-right:12px;align-items:flex-end;padding-top:4px;}"]);
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "Headerstyled__Nav",
  componentId: "sc-1v2vfvs-2"
})(["align-items:center;width:100%;"]);
const NavList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "Headerstyled__NavList",
  componentId: "sc-1v2vfvs-3"
})(["justify-content:space-around;display:flex;align-items:center;"]);
const NavItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "Headerstyled__NavItem",
  componentId: "sc-1v2vfvs-4"
})(["margin-top:10px;margin-left:40px;list-style:none;display:flex;justify-content:space-between;align-items:center;i{width:1.3rem;margin:2px 12px 0 0;display:inline-block;vertical-align:middle;font-size:16px;}@media (max-width:580px){margin-left:8px;}"]);
const Span = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Headerstyled__Span",
  componentId: "sc-1v2vfvs-5"
})(["font-size:3.8rem;font-weight:bold;text-shadow:0 1px 9px rgba(15,0,115,0.6);color:", ";@media (max-width:580px){font-size:3.3rem;align-items:flex-end;}"], props => props.theme.error2);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Headerstyled__Logo",
  componentId: "sc-1v2vfvs-6"
})(["display:inline-block;margin-top:10px;color:", ";font-size:3.5rem;font-family:'Montserrat';text-align:center;text-shadow:0 1px 35px rgba(5,35,10,0.2);cursor:pointer;font-family:'Montserrat';@media (max-width:580px){font-size:3rem;align-items:flex-end;}"], props => props.color || '#e6e6e6');

/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./components/Header/Header.js");

/* harmony default export */ __webpack_exports__["default"] = (_Header__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/Icons/ThemeIcon.js":
/*!***************************************!*\
  !*** ./components/Icons/ThemeIcon.js ***!
  \***************************************/
/*! exports provided: DeathIcon, CoughIcon, LikeIcon, IcuIcon, Coffee, WorldIcon, MoonIcon, SunIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathIcon", function() { return DeathIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoughIcon", function() { return CoughIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeIcon", function() { return LikeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IcuIcon", function() { return IcuIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coffee", function() { return Coffee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldIcon", function() { return WorldIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoonIcon", function() { return MoonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SunIcon", function() { return SunIcon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _moon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moon.svg */ "./components/Icons/moon.svg");
/* harmony import */ var _moon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_moon_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sun_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sun.svg */ "./components/Icons/sun.svg");
/* harmony import */ var _sun_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sun_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_world_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/world.svg */ "./public/world.svg");
/* harmony import */ var _public_world_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_world_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_kofi_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/kofi.png */ "./public/kofi.png");
/* harmony import */ var _public_kofi_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_kofi_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_death_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/death.svg */ "./public/death.svg");
/* harmony import */ var _public_death_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_death_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_cough_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/cough.svg */ "./public/cough.svg");
/* harmony import */ var _public_cough_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_cough_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_like_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/like.svg */ "./public/like.svg");
/* harmony import */ var _public_like_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_like_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_icu_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/icu.svg */ "./public/icu.svg");
/* harmony import */ var _public_icu_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_icu_svg__WEBPACK_IMPORTED_MODULE_8__);









const ThemeIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:2rem;height:2rem;margin-left:auto;cursor:pointer;@media (max-width:768px){width:1.5rem;height:1.5rem;margin-right:0;}"]);
const DeathIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_public_death_svg__WEBPACK_IMPORTED_MODULE_5___default.a).withConfig({
  displayName: "ThemeIcon__DeathIcon",
  componentId: "sc-19iwvb-0"
})(["", ""], ThemeIcon);
const CoughIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_public_cough_svg__WEBPACK_IMPORTED_MODULE_6___default.a).withConfig({
  displayName: "ThemeIcon__CoughIcon",
  componentId: "sc-19iwvb-1"
})(["", ""], ThemeIcon);
const LikeIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_public_like_svg__WEBPACK_IMPORTED_MODULE_7___default.a).withConfig({
  displayName: "ThemeIcon__LikeIcon",
  componentId: "sc-19iwvb-2"
})(["", ""], ThemeIcon);
const IcuIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_public_icu_svg__WEBPACK_IMPORTED_MODULE_8___default.a).withConfig({
  displayName: "ThemeIcon__IcuIcon",
  componentId: "sc-19iwvb-3"
})(["", ""], ThemeIcon);
const Coffee = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_public_kofi_png__WEBPACK_IMPORTED_MODULE_4___default.a).withConfig({
  displayName: "ThemeIcon__Coffee",
  componentId: "sc-19iwvb-4"
})(["", " width:2rem;height:2rem;"], ThemeIcon);
const WorldIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_public_world_svg__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "ThemeIcon__WorldIcon",
  componentId: "sc-19iwvb-5"
})(["", " width:1.5rem;height:1.5rem;margin-right:8px;"], ThemeIcon);
const MoonIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_moon_svg__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "ThemeIcon__MoonIcon",
  componentId: "sc-19iwvb-6"
})(["", " color:lightblue;"], ThemeIcon);
const SunIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_sun_svg__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "ThemeIcon__SunIcon",
  componentId: "sc-19iwvb-7"
})(["", ""], ThemeIcon);

/***/ }),

/***/ "./components/Icons/moon.svg":
/*!***********************************!*\
  !*** ./components/Icons/moon.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJtb29uIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtbW9vbiBmYS13LTE2IGZhLWxnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBjb2xvcj0iIzY2NiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjgzLjIxMSA1MTJjNzguOTYyIDAgMTUxLjA3OS0zNS45MjUgMTk4Ljg1Ny05NC43OTIgNy4wNjgtOC43MDgtLjYzOS0yMS40My0xMS41NjItMTkuMzUtMTI0LjIwMyAyMy42NTQtMjM4LjI2Mi03MS41NzYtMjM4LjI2Mi0xOTYuOTU0IDAtNzIuMjIyIDM4LjY2Mi0xMzguNjM1IDEwMS40OTgtMTc0LjM5NCA5LjY4Ni01LjUxMiA3LjI1LTIwLjE5Ny0zLjc1Ni0yMi4yM0EyNTguMTU2IDI1OC4xNTYgMCAwIDAgMjgzLjIxMSAwYy0xNDEuMzA5IDAtMjU2IDExNC41MTEtMjU2IDI1NiAwIDE0MS4zMDkgMTE0LjUxMSAyNTYgMjU2IDI1NnoiLz48L3N2Zz4K"

/***/ }),

/***/ "./components/Icons/sun.svg":
/*!**********************************!*\
  !*** ./components/Icons/sun.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJzdW4iIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1zdW4gZmEtdy0xNiBmYS1sZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgY29sb3I9IiNGMUQ2MDAiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTI1NiAxNjBjLTUyLjkgMC05NiA0My4xLTk2IDk2czQzLjEgOTYgOTYgOTYgOTYtNDMuMSA5Ni05Ni00My4xLTk2LTk2LTk2em0yNDYuNCA4MC41bC05NC43LTQ3LjMgMzMuNS0xMDAuNGM0LjUtMTMuNi04LjQtMjYuNS0yMS45LTIxLjlsLTEwMC40IDMzLjUtNDcuNC05NC44Yy02LjQtMTIuOC0yNC42LTEyLjgtMzEgMGwtNDcuMyA5NC43TDkyLjcgNzAuOGMtMTMuNi00LjUtMjYuNSA4LjQtMjEuOSAyMS45bDMzLjUgMTAwLjQtOTQuNyA0Ny40Yy0xMi44IDYuNC0xMi44IDI0LjYgMCAzMWw5NC43IDQ3LjMtMzMuNSAxMDAuNWMtNC41IDEzLjYgOC40IDI2LjUgMjEuOSAyMS45bDEwMC40LTMzLjUgNDcuMyA5NC43YzYuNCAxMi44IDI0LjYgMTIuOCAzMSAwbDQ3LjMtOTQuNyAxMDAuNCAzMy41YzEzLjYgNC41IDI2LjUtOC40IDIxLjktMjEuOWwtMzMuNS0xMDAuNCA5NC43LTQ3LjNjMTMtNi41IDEzLTI0LjcuMi0zMS4xem0tMTU1LjkgMTA2Yy00OS45IDQ5LjktMTMxLjEgNDkuOS0xODEgMC00OS45LTQ5LjktNDkuOS0xMzEuMSAwLTE4MSA0OS45LTQ5LjkgMTMxLjEtNDkuOSAxODEgMCA0OS45IDQ5LjkgNDkuOSAxMzEuMSAwIDE4MXoiLz48L3N2Zz4K"

/***/ }),

/***/ "./components/Menu/Menu.js":
/*!*********************************!*\
  !*** ./components/Menu/Menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Menu_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.styled */ "./components/Menu/Menu.styled.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icons/ThemeIcon */ "./components/Icons/ThemeIcon.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Menu/Menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Menu = ({
  children,
  open
}) => {
  const renderItems = children.map((x, i) => __jsx("div", {
    className: "divv",
    key: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, x));
  return __jsx(_Menu_styled__WEBPACK_IMPORTED_MODULE_1__["StyledMenu"], {
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, renderItems);
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/Menu/Menu.styled.js":
/*!****************************************!*\
  !*** ./components/Menu/Menu.styled.js ***!
  \****************************************/
/*! exports provided: StyledMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledMenu", function() { return StyledMenu; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const openStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media (min-width:961px){display:none;}display:flex;flex-direction:column;justify-content:center;background:#3f172b;color:", ";height:auto;position:absolute;z-index:999;top:0;right:50%;direction:rtl;width:220px;border-bottom-left-radius:6px;border-bottom:2px solid;border-bottom-color:{$props => props.theme.menuBorder};border-bottom-right-radius:6px;border-top:none;transition:transform 0.22s ease-in-out;opacity:", ";transform:", " translateX(50%);@media (max-width:660px){width:100%;}.divv{z-index:9999;display:flex:flex-direction:row;justify-content:flex-start;padding:10px 6px;text-align:right;@media (max-width:660px){margin:0 auto;padding:16px;text-align:center;}}span{margin-right:18px;margin-left:18px;font-size:12px;color:", ";@media (max-width:660px){font-size:12px;}}a{padding:4px;cursor:pointer;font-size:18px;font-weight:500;letter-spacing:0.15rem;color:#F1F1F1;text-decoration:none;transition:color 0.15s linear;@media (max-width:660px){font-size:12px;}&:hover{color:", ";}}"], props => props.theme.onPrimary, ({
  open
}) => open ? '1' : '0', ({
  open
}) => open ? 'translateY(63px)' : 'translateY(-140%)', props => props.theme.menuColor, ({
  theme
}) => theme.menuHover);
const closeStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media (max-width:960px){display:none;}display:flex;width:auto;flex-flow:row;justify-content:flex-start;display:flex;justify-content:space-around;margin:12px 0 0;.divv{font-size:16px;color:white;cursor:pointer;&:hover{color:", ";}}a{font-family:'Rubik';padding:0px 20px;text-decoration:none;color:", ";transition:all 0.15s ease-in-out;&:hover{color:", ";text-shadow:1px 2px 3px rgba(0,0,0,0.2) 1px 3px 0px rgba(0,0,0,0.46) 1px 4px 1px rgba(0,0,0,0.2);}}span{display:none;}"], ({
  theme
}) => theme.menuHover, props => props.theme.light, ({
  theme
}) => theme.menuHover);
const StyledMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "Menustyled__StyledMenu",
  componentId: "sc-1p59uup-0"
})(["@media (max-width:960px){", "}@media (min-width:961px){", "}"], openStyle, closeStyle);

/***/ }),

/***/ "./components/Menu/index.js":
/*!**********************************!*\
  !*** ./components/Menu/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "./components/Menu/Menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Menu__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./components/proxy-view.js":
/*!**********************************!*\
  !*** ./components/proxy-view.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_proxy_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/proxy-context */ "./context/proxy-context.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/proxy-view.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ProxyView = () => {
  const {
    0: proxy
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_proxy_context__WEBPACK_IMPORTED_MODULE_1__["ProxyContext"]);
  const {
    ipAddress,
    countryName
  } = proxy;
  return __jsx("div", {
    className: "box center",
    style: {
      fontSize: '18px',
      textAlign: 'center',
      padding: '12px',
      margin: '0 auto',
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "IP Address : ", ipAddress, " "), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Country : ", countryName, " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (ProxyView);

/***/ }),

/***/ "./context/proxy-context.js":
/*!**********************************!*\
  !*** ./context/proxy-context.js ***!
  \**********************************/
/*! exports provided: ProxyContext, ProxyContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyContext", function() { return ProxyContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyContextProvider", function() { return ProxyContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/context/proxy-context.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ProxyContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const ProxyContextProvider = props => {
  const initialState = {
    ipAddress: 'localhost',
    countryName: 'israel'
  }; // Declare shareable proxy state

  const {
    0: proxy,
    1: setProxy
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);
  const prev = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // Read and Write Proxy State to Local Storage

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (proxy.countryName == 'israel') {
      const localState = JSON.parse(localStorage.getItem('ip2proxy'));

      if (localState) {
        console.info('reading local storage');
        prev.current = localState.ipAddress;
        setProxy(localState);
      }
    } else if (prev.current !== proxy.ipAddress) {
      console.info('writing local storage');
      localStorage.setItem('ip2proxy', JSON.stringify(proxy));
    }
  }, [proxy]);
  return __jsx(ProxyContext.Provider, {
    value: [proxy, setProxy],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, props.children);
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/Global.js":
/*!*************************!*\
  !*** ./pages/Global.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-normalize */ "styled-normalize");
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_1__);


const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  ${styled_normalize__WEBPACK_IMPORTED_MODULE_1__["normalize"]}
  *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  html, body {
      position: relative;
      min-height: 100%;
      max-width: 100%;
      font-size: 62.5%;
      background-color: ${props => props.theme.bgColor};
      color: ${props => props.theme.text.primary};
      font-family: ${props => props.theme.fontFamily};
      direction: ${props => props.isHeb ? 'rtl' : ''};
  }

  .Select {
    color: black !important;
    font-size: 17px;
    font-family: 'Rubik, Arial';
    z-index: 999999;
  }


  .div.span.h3 {
    font-family: 'Rubik';
  }

  h1 {
    font-family: 'Rubik';
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }
  h3 {
    font-family: 'Rubik';
    font-size: 1.75rem;
  }

  .loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #ededed;
  }

  .loader {
    max-width: 15rem;
    width: 100%;
    height: auto;
    stroke-linecap: round;
  }

  circle {
    fill: none;
    stroke-width: 3.5;
    animation-name: preloader;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    transform-origin: 170px 170px;
    will-change: transform;

    &:nth-of-type(1) {
      stroke-dasharray: 550px;
    }

    &:nth-of-type(2) {
      stroke-dasharray: 500px;
    }

    &:nth-of-type(3) {
      stroke-dasharray: 450px;
    }

    &:nth-of-type(4) {
      stroke-dasharray: 300px;
    }

    @for $i from 1 through 4 {
      &:nth-of-type(#{$i}) {
        animation-delay: -#{$i * 0.15}s;
      }
    }
  }

  img {
    vertical-align: middle;
  }

  @keyframes preloader {
    50% {
      transform: rotate(360deg);
    }
  }



`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_proxy_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/proxy-view */ "./components/proxy-view.js");
/* harmony import */ var _context_proxy_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/proxy-context */ "./context/proxy-context.js");
/* harmony import */ var _utils_useOutSide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useOutSide */ "./utils/useOutSide.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Global */ "./pages/Global.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_Burger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Burger */ "./components/Burger/index.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu/index.js");
/* harmony import */ var _components_Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Icons/ThemeIcon */ "./components/Icons/ThemeIcon.js");
/* harmony import */ var _utils_themes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/themes */ "./utils/themes.js");
/* harmony import */ var _utils_gtag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/gtag */ "./utils/gtag.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const getCountryFromData = response => response.data.country;

const currentCountry = async url => await axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(url).then(getCountryFromData).catch(e => 'israel'); // async function currentCountry(url){
//   return await axios
//     .get(url)
//     .then( res => res.data.country)
//     .catch(e => 'israel')
// }


next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeComplete', url => _utils_gtag__WEBPACK_IMPORTED_MODULE_15__["pageview"](url));

const lightTheme = () => _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_14__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_14__["themes"]['light']);

const darkTheme = () => _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_14__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_14__["themes"]['dark']);

function MyApp({
  Component,
  pageProps,
  newProxy
}) {
  const {
    0: theme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(lightTheme());
  const {
    0: isHeb,
    1: setHeb
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(newProxy && newProxy.countryName.toLowerCase() === 'israel' ? true : false);
  const {
    0: menuOpen,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const closeMenu = () => setOpen(false);

  const toggleMenu = () => setOpen(!menuOpen);

  const toggleLang = () => {
    closeMenu(), setHeb(!isHeb);
  };

  const setDarkTheme = () => {
    closeMenu(), setTheme(darkTheme());
  };

  const setLightTheme = () => {
    closeMenu(), setTheme(lightTheme());
  };

  const node = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(_utils_useOutSide__WEBPACK_IMPORTED_MODULE_8__["default"])(node, closeMenu);
  const displayLang = isHeb ? 'English' : 'עברית';
  const isLight = theme.type === 'light';
  return __jsx(_context_proxy_context__WEBPACK_IMPORTED_MODULE_7__["ProxyContextProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_Global__WEBPACK_IMPORTED_MODULE_9__["default"], {
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "nCorona",
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    ref: node,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(_components_Burger__WEBPACK_IMPORTED_MODULE_11__["default"], {
    setOpen: toggleMenu,
    open: menuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setOpen: toggleMenu,
    open: menuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/News",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("a", {
    alt: "news",
    onClick: () => closeMenu(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\uD83D\uDCF0"), isHeb && 'חדשות' || 'News')), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/Statistics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("a", {
    alt: "stats",
    onClick: () => closeMenu(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, " \uD83D\uDDFA"), isHeb && 'נתונים' || 'Data')), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("a", {
    alt: "about",
    onClick: () => closeMenu(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, " \uD83D\uDDFA"), isHeb && 'אודות' || 'About')), __jsx("a", {
    onClick: toggleLang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "\uD83C\uDF10"), displayLang)))), __jsx(Component, _extends({}, pageProps, {
    isHeb: isHeb,
    newProxy: newProxy,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }))));
}

MyApp.getInitialProps = async appContext => {
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(appContext);
  let proxyUrl;
  const req = appContext.ctx && appContext.ctx.req;

  if (req) {
    // grab client's ip address
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const localAddresses = ['::1', '127.0.0.1', 'localhost']; // Construct URL with IP ADDRESS

    if (!localAddresses.includes(ipAddress)) {
      proxyUrl = `https://extreme-ip-lookup.com/json/${ipAddress}`;
    }

    try {
      const countryName = await currentCountry(proxyUrl);
      const newProxy = {
        countryName,
        ipAddress
      };
      return _objectSpread({
        newProxy
      }, appProps);
    } catch (e) {
      return _objectSpread({
        errorCode: e.code,
        errorMessage: e.message
      }, appProps);
    }
  }

  return _objectSpread({}, appProps, {
    newProxy: null
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./public/cough.svg":
/*!**************************!*\
  !*** ./public/cough.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cough-974d03c177fea8a40e546e6367f20223.svg";

/***/ }),

/***/ "./public/death.svg":
/*!**************************!*\
  !*** ./public/death.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjI1NS45OTIiIGN5PSIyNTUuOTQ2IiBmaWxsPSIjZTA0OTU1IiByPSIyNDguNDU2Ii8+PHBhdGggZD0ibTI3My40ODkgNTAzLjc5MmMtNS43NzkuNDEtMTEuNjE4LjYxLTE3LjQ5Ny42MS0xMzcuMjE2IDAtMjQ4LjQ1Ni0xMTEuMjQtMjQ4LjQ1Ni0yNDguNDU2czExMS4yNC0yNDguNDU2IDI0OC40NTYtMjQ4LjQ1NmM1Ljg3OSAwIDExLjcxOC4yIDE3LjQ5Ny42MS0xMjkuMDQ3IDguOTc4LTIzMC45NTkgMTE2LjUwOS0yMzAuOTU5IDI0Ny44NDZzMTAxLjkxMiAyMzguODY3IDIzMC45NTkgMjQ3Ljg0NnoiIGZpbGw9IiNkODBhNjEiLz48ZWxsaXBzZSBjeD0iMjU1Ljk5MiIgY3k9IjI1NS45NDYiIGZpbGw9IiNmZmY1ZjQiIHJ4PSIyMDUuNDIyIiByeT0iMjA1LjQyMyIgdHJhbnNmb3JtPSJtYXRyaXgoLjcwNyAtLjcwNyAuNzA3IC43MDcgLTEwNi4wMDMgMjU1Ljk3OCkiLz48cGF0aCBkPSJtMTQ1LjczMiA0MDEuMmMzNS42MDQgMzUuNjA0IDgxLjEzNiA1NS4zOCAxMjcuNzU3IDU5LjMyOS01OC4yNyA0LjkzOS0xMTguMjU5LTE0LjgzNy0xNjIuNzUxLTU5LjMyOS04MC4wOTYtODAuMDk2LTgwLjA5Ni0yMTAuNDEzIDAtMjkwLjUwOSA0NC40OTItNDQuNDkyIDEwNC40ODItNjQuMjY5IDE2Mi43NTEtNTkuMzMtNDYuNjIyIDMuOTQ5LTkyLjE1NCAyMy43MjYtMTI3Ljc1NyA1OS4zMy04MC4wOTYgODAuMDk2LTgwLjA5NiAyMTAuNDEzIDAgMjkwLjUwOXoiIGZpbGw9IiNlZWU2ZTMiLz48cGF0aCBkPSJtMjY1Ljk5MiAxNTguNDA2LTkuOTk4IDIxLjkyMS0xMC4wMDgtMjEuOTIxYy00MC41NjMtODMuNTI2LTE2NS45ODEtMTAuOTM4LTEyOC4yMDcgODcuNzQgNC4yODkgMTEuMjA3IDEwLjM3OCAyMS40MzkgMTcuNjg3IDMwLjQ3Mi45NDggMS4xNzIgNzkuMzcyIDk4LjExMiAxMDkuMjAyIDEzNC45NzMgNS44MzMgNy4yMDcgMTYuODE3IDcuMjA3IDIyLjY0OS0uMDAxIDI5LjgxOS0zNi44NTYgMTA4LjIxOC0xMzMuNzYxIDEwOS4xOTctMTM0Ljk3MiA3LjMwOS05LjAzMyAxMy40MDgtMTkuMjY1IDE3LjY5Ny0zMC40NzIgMzcuNzYyLTk4LjY3OC04Ny42NTYtMTcxLjI2Ni0xMjguMjE5LTg3Ljc0eiIgZmlsbD0iI2VhN2Y4NyIvPjxwYXRoIGQ9Im0yNzMuNDg5IDQwMy45NTljLTIuMjMgMi43NTYtNC4yOTkgNS4zMTMtNi4xNzUgNy42MzItNS44MzIgNy4yMDgtMTYuODE3IDcuMjA5LTIyLjY0OS4wMDEtMjkuODI5LTM2Ljg2My0xMDguMjQ4LTEzMy44MDUtMTA5LjIwMS0xMzQuOTctNy4zMDktOS4wMzgtMTMuMzk4LTE5LjI2Ny0xNy42ODctMzAuNDc1LTI5LjM0NS03Ni42NjYgMzkuODAzLTEzNy41ODYgOTEuMTQ0LTEyMS43NzgtNDEuODYyIDExLjU2OC03OS4wODYgNjEuODU5LTU2LjE1IDEyMS43NzggNC4yODkgMTEuMjA4IDEwLjM3OCAyMS40MzYgMTcuNjg3IDMwLjQ3NS44ODkgMS4wOSA2OS44MTcgODYuMjk1IDEwMy4wMzEgMTI3LjMzN3oiIGZpbGw9IiNlNTY0NmUiLz48cGF0aCBkPSJtMzg2LjcxOSA0MTcuMzM0LTI5MC41NTQtMjkwLjYwMSAzLjg1NS0yNS43NiAyNi42MDMtNS4wMjMgMjg5Ljc1NyAyODkuNjM5LjQxNyAyOC44Mjl6IiBmaWxsPSIjZTA0OTU1Ii8+PHBhdGggZD0ibTQzNi45NzkgNzQuOTU4Yy0xMzQuNjYyLTEzNC42NjItMzY0LjY5NS03OS45NDgtNDI0LjE4NiAxMDAuOTgtMS4yOTQgMy45MzQuODQ4IDguMTcyIDQuNzgxIDkuNDY2IDMuOTM4IDEuMjk0IDguMTczLS44NDcgOS40NjYtNC43ODEgOC45MDgtMjcuMDk0IDIyLjI3LTUxLjc0OSAzOS4xMDYtNzMuMjgzbDIwLjA5NCAyMC4wOTRjLTY0Ljc5NyA4NS41NTgtNTYuNzYxIDIwOS42NTcgMjUuOTIgMjg1LjUxIDMuMDU1IDIuODAxIDcuNzk4IDIuNTkzIDEwLjU5NS0uNDU3IDIuOC0zLjA1MiAyLjU5NS03Ljc5NS0uNDU2LTEwLjU5NS00MC4xMjktMzYuODEtNjQuMTM2LTg4LjYyMy02NC4xMzYtMTQ1LjkwMSAwLTQyLjQ5IDEzLjcxOC04NC4wMTMgMzguNzgzLTExNy44NTFsMjAuNzI4IDIwLjcyN2MtMTYuMjU3IDI2LjM3OS0xOC44MjUgNTguOC02LjkwMSA4OS45NjEgOC44NyAyMy4xNzQgOC43MjYgMjAuMDI5IDEzMy4xNzMgMTczLjc5NiA2LjIwOCA3LjY3MSAxNy44OSA3LjY2MSAyNC4wODcuMDAxIDguNTgzLTEwLjYxMiAyNi4yMzItMzIuNDIyIDUwLjcxLTYyLjY5bDU1LjA1OCA1NS4wNThjLTY2LjgxMiA0OS40OTItMTU5LjAzIDUyLjE3OS0yMjguODU3IDQuODEzLTMuNDI4LTIuMzI1LTguMDktMS40MzEtMTAuNDE1IDEuOTk2LTIuMzI1IDMuNDI4LTEuNDMgOC4wOSAxLjk5NyAxMC40MTUgNzYuMzY2IDUxLjgwMiAxNzYuNTU1IDQ3LjU3NiAyNDcuOTgtNi41MmwxOS45MjcgMTkuOTI3Yy00MC45NDEgMzIuMTEtOTIuNDkzIDUxLjI3OS0xNDguNDQgNTEuMjc5LTE1MC44NjEgMC0yNjYuMS0xMzguMjY0LTIzNi4zMzgtMjg4LjE1Ny44MDYtNC4wNjItMS44MzMtOC4wMDktNS44OTQtOC44MTYtNC4wNjMtLjgwNS04LjAwOSAxLjgzMi04LjgxNiA1Ljg5NC0xNi4wNTYgODAuODc1IDYuOTIzIDE2Ny45NyA3MC4wNjEgMjMxLjEwOSA5Mi44NjcgOTIuODY3IDI0MS43NTkgMTAxLjQ0NCAzNDUuNDYxIDE1LjEzMSAxMTUuNTk2LTk3LjI3NCAxMjIuMzc2LTI3MS4yNDEgMTYuNTEyLTM3Ny4xMDZ6bS0xODAuOTg4IDMzOC40MThjLS4yMzcgMC0uMzQ0LS4xMzItLjM4OS0uMTg3LTEyMy45OS0xNTMuMjA1LTEyMi45MzEtMTQ5LjA5OS0xMzAuODIyLTE2OS43MjItMTIuNTctMzIuODQ4LTQuNzAyLTU4LjMwMyAzLjg1My03My42NDFsNTcuMTM0IDU3LjEzNC0xMC41NzggMjMuMTI3aC0xNC42NGMtNC4xNDIgMC03LjQ5OSAzLjM1Ny03LjQ5OSA3LjQ5OXMzLjM1NyA3LjQ5OSA3LjQ5OSA3LjQ5OWgxOS40NTdjMi45MzQgMCA1LjU5OS0xLjcxMiA2LjgxOS00LjM4bDEwLjI1OC0yMi40MjkgMTAuMjA0IDEwLjIwNGM0LjU2MiAxNi4zMzIgOS43MDQgMzQuNjUyIDIxLjg0NyA5My4zMDEuNjMyIDMuMDU1IDMuMDg5IDUuMzk5IDYuMTcxIDUuODg2LjM5My4wNjMuNzg1LjA5MyAxLjE3NC4wOTMgMi42NjMgMCA1LjE2NS0xLjQyMiA2LjUxMy0zLjc4NiAxMC4zMjktMTguMTI3IDE0LjgxNC0yOC4yMzggMTkuODE5LTM5Ljk3bDQ1LjI2OCA0NS4yNjdjLS4yNTYuMzE0LTUxLjY4MyA2NC4xMDUtNTIuMDg4IDY0LjEwNXptLTI3LjU0Mi0xNDMuNzM0IDIyLjkyOCAyMi45MjhjLS40MTYuOTc1LS44MjUgMS45MzYtMS4yMjUgMi44NzctMy4zMyA3LjgzLTYuMjI0IDE0LjYyOS0xMC41NDcgMjMuMjI3LTQuNzk0LTIyLjQ3LTguMzEzLTM3LjYyNC0xMS4xNTYtNDkuMDMyem0xODcuNTI3IDE2Ni4zMTdjLTEyLjY1MS0xMi42NTEtMzI3LjkzNS0zMjcuOTM0LTM0MC4xODktMzQwLjE4OCA2LjI5LTcuMDgxIDEyLjk3Ny0xMy43NjkgMjAuMDI2LTIwLjAzM2wyNS43MjkgMjUuNzI5LjAxNS4wMTUgMTUzLjExMyAxNTMuMTEyYy4wMDguMDA4LjAxNi4wMTYuMDI0LjAyNGwxNjEuMzEyIDE2MS4zMTJjLTYuMjgyIDcuMDU5LTEyLjk3IDEzLjc0OC0yMC4wMyAyMC4wMjl6bS0zMi40NjEtMTY4LjUxNGMtMy4zMDYtMi40OTQtOC4wMDgtMS44MzMtMTAuNTAyIDEuNDc0LTEuNTMzIDIuMDM1LjMxMS0uMjc5LTI4LjA0NiAzNC43NjNsLTU1LjkwNy01NS45MDdjOC4zODMtMTYuMzg4IDE4LjU5NS0zNS40NjQgMzAuOTc2LTU3Ljg1Nmw4LjU0NSAzOC45NzdjLjc1NSAzLjQ0MSAzLjgwMiA1Ljg5MyA3LjMyNSA1Ljg5M2gzMC40NDVjNC4xNDIgMCA3LjQ5OS0zLjM1NyA3LjQ5OS03LjQ5OXMtMy4zNTctNy40OTktNy40OTktNy40OTloLTI0LjQxMmwtMTEuNDk2LTUyLjQzN2MtMS40NzItNi43MTUtMTAuNTA0LTguMDY2LTEzLjg2OC0yLjA1Ny0xNS43NTEgMjguMTM1LTI4LjQ1OCA1MS41ODctMzguNjU0IDcxLjMzOWwtMTA0LjMyNy0xMDQuMzI4YzI2Ljk4NC04LjUyNiA1Mi4wMTQgMS4zNzYgNjUuNjA2IDI5LjI5MWw5Ljk3IDIxLjg0M2MyLjY2NiA1Ljg0IDEwLjk4NSA1LjgzMSAxMy42NDUtLjAwMmw5Ljk1OS0yMS44NDFjMzYuMzMxLTc0LjYgMTQ4LjgyOS04LjAyMiAxMTQuNDI5IDgxLjg3LTQuNDE1IDExLjU0MSAxMC4wNTcgMTUuMzQ4IDEzLjQ4OCA2LjY5MyA0Mi44NjgtMTA4LjM2Mi05Ni41MjctMTg3LjUzLTE0MS40NDYtOTUuMDM1LS4wNTguMTE1LTMuMjAzIDcuMDE4LTMuMjU2IDcuMTM1LS4xMDYtLjIzMi0zLjE1MS02LjkwNS0zLjI1OS03LjEzNS0xOC44NzgtMzguODgtNTYuMDUxLTQ5LjAyOC05MC44MTctMzQuNWwtMjMuNzI3LTIzLjcyN2M3OC41MDktNTguMzY0IDE4Ny45MDQtNTAuNzYyIDI1Ny43NTggMTkuMDk0IDY5Ljg1NiA2OS44NTYgNzcuNDU2IDE3OS4yNDkgMTkuMDkzIDI1Ny43NTdsLTU5LjQwNi01OS40MDZjMjguOTUzLTM1Ljc4MSAyNy41NTQtMzQuMDA2IDI5LjM1OC0zNi4zOTkgMi40OTMtMy4zMDYgMS44MzMtOC4wMDgtMS40NzQtMTAuNTAxem00Mi4yMjkgMTE3LjAxM2MzMC4xMS0zOS43MTYgNDUuMjg2LTg4LjgyNSA0Mi44MTUtMTM5LjA3LTguNDA3LTE3MC44ODctMjA1LjQ5Ny0yNjEuOTg3LTM0MS4wOC0xNTkuMTk0bC0yMC4xMDUtMjAuMTA1YzQxLjM3OS0zMi4zNzIgOTMuMjU5LTUxLjEgMTQ4LjYxOC01MS4xIDEzMi44NjQgMCAyNDAuOTU3IDEwOC4wOTMgMjQwLjk1NyAyNDAuOTU3IDAgNTUuOTQ2LTE5LjE2OCAxMDcuNDk4LTUxLjI3OSAxNDguNDM5eiIvPjwvc3ZnPg=="

/***/ }),

/***/ "./public/icu.svg":
/*!************************!*\
  !*** ./public/icu.svg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzU2LjQ5NiAzNTYuNDk2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNTYuNDk2IDM1Ni40OTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnIGlkPSJMYXllcl81XzEzXyI+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTMzNS4wMDYsMjguODE0SDIxLjQ5QzkuNjQsMjguODE0LDAsMzguNDU0LDAsNTAuMzA1djI1NS44ODdjMCwxMS44NSw5LjY0MSwyMS40OSwyMS40OSwyMS40OWgzMTMuNTE2DQoJCQkJYzExLjg1LDAsMjEuNDktOS42NCwyMS40OS0yMS40OVY1MC4zMDVDMzU2LjQ5NiwzOC40NTQsMzQ2Ljg1NSwyOC44MTQsMzM1LjAwNiwyOC44MTR6IE0yNjEuNTgxLDMxMC40NjVoLTE5LjI0NQ0KCQkJCWMtMy44NjYsMC03LTMuMTM0LTctN3MzLjEzNC03LDctN2gxOS4yNDVjMy44NjYsMCw3LDMuMTM0LDcsN1MyNjUuNDQ3LDMxMC40NjUsMjYxLjU4MSwzMTAuNDY1eiBNMzE2Ljk3NywzMTAuNDY1aC0xOS4yNDUNCgkJCQljLTMuODY2LDAtNy0zLjEzNC03LTdzMy4xMzQtNyw3LTdoMTkuMjQ1YzMuODY2LDAsNywzLjEzNCw3LDdTMzIwLjg0NCwzMTAuNDY1LDMxNi45NzcsMzEwLjQ2NXogTTMzMS40OTYsMjg0Ljc0N0gyNXYtOTEuNzkNCgkJCQljMCwwLTAuMTI3LTIuOTY0LDMuMTM0LTIuOTY0YzcuMDkzLDAsMjIuOTI2LDAsMjguOTg5LDBjMywwLDUuMzk4LDIuNzIyLDUuMzk4LDIuNzIybDExLjEwMiwxMi41NTcNCgkJCQljMS42MjksMS44NDIsNC4wNzYsMi42NTMsNi4zOTQsMi4xMThjMi4zMTUtMC41MzUsNC4xNi0yLjMzOSw0LjgxMy00LjcwNmMwLDAsOS4yNy0zMy45MjQsMTIuNTEtNDUuMTkxDQoJCQkJYzAuNzgzLTIuNzI0LDEuNjkxLTAuOTI1LDEuNjkxLTAuOTI1bDguNjAyLDIwLjY0M2MxLjE1MSwyLjc1OSwzLjkzMyw0LjYxMyw2LjkyMiw0LjYxM2MwLDAsMjAuODE2LDAsMjcuNzU2LDANCgkJCQljMi4wNjMsMCwyLjQ1OCwyLjExMSwyLjQ1OCwyLjExMWwxMi4zMjIsNDguNTUyYzAuODUsMy4zMzksMy42MDYsNC44NzgsNS45Niw0LjkyMWMwLjAzNSwwLDAuMDY5LDAuMDAxLDAuMTA0LDAuMDAxDQoJCQkJYzIuMzMyLDAsNS4wNzUtMS40NDEsNi4wMzMtNC42OTZjMCwwLDEzLjk4My00Ny4yMjIsMTguNTY0LTYyLjk4NmMwLjgyOS0yLjg1MywyLjAwNywwLjEwMSwyLjAwNywwLjEwMWw5LjE3OCwxOC43NDYNCgkJCQljMS4yNDYsMi41NSwzLjk5MSw0LjI2NCw2LjgzLDQuMjY0aDI5LjkyM2MzLjIxMiwwLDYuMTA0LTIuMTQ3LDcuMDMzLTUuMjI0YzAsMCw4Ljc3Ni0yOS4yMDcsMTEuNzUtMzguOTI3DQoJCQkJYzAuNTY3LTEuODU0LDAuOTYyLDAuNDk0LDAuOTYyLDAuNDk0bDExLjY3Myw0Ny4wNjNjMC42NywyLjcxNywyLjgxOCw0LjY1OSw1LjQ3Myw0Ljk0OWMyLjY1NywwLjI5Miw1LjE3Mi0xLjE0Myw2LjQxNS0zLjY1Mw0KCQkJCWw5Ljk2OS0yMC4xNjJjMCwwLDAuMzI1LTAuOTY5LDEuNzQyLTAuOTY5YzEwLjE5NywwLDI5LjQwNiwwLDM5LjIwOCwwYzEuNjI1LDAsMS41ODEsMS4zODIsMS41ODEsMS4zODJWMjg0Ljc0N3oNCgkJCQkgTTMzMS40OTYsMTYyLjk5OWMwLDEuNS0xLjU4LDEuNDEtMS41OCwxLjQxaC00My4xOTljLTIuODI2LDAtNS41NjYsMS43MDItNi44MjIsNC4yMzdjMCwwLTMuMDk4LDYuMTc3LTQuMDg0LDguMjU5DQoJCQkJYy0wLjg1NCwxLjgwMi0xLjE1Ny0wLjA5LTEuMTU3LTAuMDlsLTEzLjA4Ni01Mi43NjRjLTAuODI1LTMuMzQ2LTMuNTcxLTQuOTA0LTUuOTI1LTQuOTY1Yy0yLjM2Ni0wLjA3Ny01LjE3NywxLjM1NC02LjE3NCw0LjY1NQ0KCQkJCWwtMTYuODUyLDU1LjgyNmMwLDAtMC4yMDIsMS4yNy0yLjA3NywxLjI3Yy01LjEzNiwwLTE0Ljk4MiwwLTIwLjU0MSwwYy0xLjQ1OCwwLTIuMS0xLjI0OC0yLjEtMS4yNDhsLTE0Ljk3Ni0zMC41ODUNCgkJCQljLTEuMjA0LTIuNDY0LTMuNjY3LTMuOTI0LTYuMjgyLTMuNjk3Yy0yLjYxMywwLjIxOC00LjgwNSwyLjA1OC01LjU4Niw0LjY5NmwtMTYuNyw1Ni42NjJjMCwwLTAuNjcsMy4xNjctMS40NTYtMC4wNzQNCgkJCQljLTEuOTAxLTcuODQtNy45MzgtMzEuMjc5LTcuOTM4LTMxLjI3OWMtMC44MS0zLjE4LTMuNzc5LTUuNDg5LTcuMDYxLTUuNDg5YzAsMC0yMC41OTgsMC0yNy40NjQsMA0KCQkJCWMtMi44MTMsMC0zLjY5OS0xLjk2MS0zLjY5OS0xLjk2MWwtMTMuNzkzLTMzLjEwNGMtMS4wOTctMi42MjktMy41NTctNC4yMTktNi4yNjUtNC4wNDZjLTIuNzA5LDAuMTctNC45NDksMi4wNTUtNS43MDYsNC43OTcNCgkJCQljMCwwLTEwLjYxOSwzNi45Ni0xMy42NzYsNDkuNDA3Yy0xLjMsNS4yOTItNC4wNjQsMS43OTktNC4wNjQsMS43OTlsLTUuMjU3LTUuOTQ2Yy0xLjUxNC0xLjcxMi0zLjg3My0yLjc3NS02LjE1OC0yLjc3NQ0KCQkJCWMwLDAtMjUuMDg0LDAtMzMuNDQ1LDBjLTMuNSwwLTMuMzczLTIuNzg2LTMuMzczLTIuNzg2VjcxLjc0N2gzMDYuNDk2QzMzMS40OTYsNzEuNzQ3LDMzMS40OTYsMTQwLjE4NiwzMzEuNDk2LDE2Mi45OTl6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./public/kofi.png":
/*!*************************!*\
  !*** ./public/kofi.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlkAAAJYCAYAAABRpPPiAAAACXBIWXMAAAsSAAALEgHS3X78AAAeDUlEQVR4nO3dP5BcxZ3A8cZFghxoXSVSaS+zIsngEFkiAWcILjtMIaqMHSJC/rgs6gwOEZcZXMWqbMKDVWaceAWExkiJIWNXKQTa4ESoq9a+Ka1W+2dm5/3m9ev+fKq21nXlw7P9lp3vdPfr99CdO3cSAAD9+pHxBADon8gCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACIL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ACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAAAogsAIAAIgsAIIDIAgAIILIAAAKILACAACILACCAyAIACCCyAAACiCwAgAAiCwAggMgCAAggsgAA+pZS+n8++k5QM42SigAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./public/like.svg":
/*!*************************!*\
  !*** ./public/like.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzQ2LjA3OCAzNDYuMDc4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNDYuMDc4IDM0Ni4wNzg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojMDEwMDAyOyIgZD0iTTM0Ni4wNzgsMTg0LjM2NHYtNS44NDJjMC0xNC40NDYtMTEuMDg2LTI2LjEzNS0yNi4yMjQtMjguNzc4DQoJCQljNS4xMDgtNS45MzEsOC4zMjQtMTMuNjI4LDguMzI0LTIxLjgyMXYtNS44MzZjMC0xNy4zNTgtMTQuODUyLTMyLjU4NS0zMS43ODYtMzIuNTg1SDI1MS4wNWMtNS43MjIsMC0xMC45ODUsMi4yNzktMTUuNDYsNS45NjcNCgkJCWgtNDQuNjVWNjIuMjM0YzAtMjMuNjUzLTQxLjMwOS01MC4zMDEtNjMuMzItNTAuMzAxaC04LjI4MmMtNy4xNzIsMC0xMi40ODMsMi4zMTUtMTUuNzgyLDYuODc0DQoJCQljLTcuMjU2LDEwLjAzNi0xLjU1NywyNy4zMjIsMy45NTYsNDQuMDM1YzIuODgyLDguNzQxLDUuODU5LDE3Ljc3NSw1Ljg1OSwyMy4wMzJsMC4wMTgsMTMuMzI0bC0yLjg0LDM2LjQwNGwtNjIuODEzLDAuNDk1VjMxNS44NQ0KCQkJbDUuMzcsMC41NDNjMi43NjMsMC4yOCw2Ny43NTQsNi44MTQsNzQuMDI1LDcuMzQ1bDAuNTk3LDAuMDNjMC4wMDYsMCwwLjAwNiwwLDAuMDEyLDBjMi42MDgsMCw0LjYyNC0wLjk3Myw2LjMzNy0zLjU2Mg0KCQkJYzE3LjExMyw5LjM3NCwzOC45MTYsMTMuOTM5LDU2LjQ0NywxMy45MzloNjAuODU2YzcuOTMsMCwxNS4xMDItMi4yMDIsMjEuNDU3LTUuOTY3aDEyLjI2MmMxNy40NjUsMCwzMS4xNDctMTMuNTg3LDMxLjE0Ny0zMC45NDQNCgkJCXYtNS44NDJjMC02LjQ5Mi0yLjAxNy0xMi4yNTYtNS40ODQtMTYuOTIyaDIuNTZjMTcuMTQzLDAsMzIuNzU4LTE2LjA1MSwzMi43NTgtMzMuNjgzdi01Ljg0Mg0KCQkJYzAtMTAuMzExLTUuNTkxLTE5LjgyOC0xMy44MzctMjUuNzgzQzM0MC41OTUsMjAzLjY1NSwzNDYuMDc4LDE5NC42MDMsMzQ2LjA3OCwxODQuMzY0eiBNMjUxLjA1LDEwMS40MzdoMC4zMjhoNDUuMDE0DQoJCQljMTAuMzg4LDAsMTkuODUyLDkuODM5LDE5Ljg1MiwyMC42NTF2NS44MzZjMCwxMS4xMjItOS40NjMsMjEuMjQ4LTE5Ljg1OCwyMS4yNDhoLTQ1LjM0MmMtOC44OTEsMC0xNi45Ny0xMi44NjUtMTguMTg3LTI0LjE1NA0KCQkJQzIzNC4wNjgsMTEzLjk5MSwyNDIuMTM2LDEwMS40MzcsMjUxLjA1LDEwMS40Mzd6IE0xOTAuNTIyLDMyMi4yMTFjLTEzLjM4NCwwLTMzLjczMS0zLjgwMS00OS41MTktMTEuOTY0DQoJCQljLTAuMTU1LDAuMDA2LTAuMjk4LDAuMDMtMC40NDgsMC4wM2gtMTUuMDA3Yy0wLjEzNywwLjQ1OS0wLjI3NCwwLjkxMy0wLjQwNiwxLjI5NWMtMTEuODkyLTEuMTQtNTEuMDctNS4wNzItNjUuNDc0LTYuNTE2DQoJCQl2LTE1Ny4xMmw2MS45MTgtMC40ODlsMy43MTctNDcuNzgzVjg1Ljg3NWMwLTcuMTc4LTMuMTM5LTE2LjY4OS02LjQ2Mi0yNi43NjFjLTMuOTI2LTExLjkxLTkuMzAyLTI4LjIxNy01LjYxNS0zMy4zMDcNCgkJCWMwLjkzMS0xLjI4OSwyLjk4My0xLjkzOSw2LjExLTEuOTM5aDguMjgyYzE3LjI1LDAsNTEuMzg3LDIzLjMxOSw1MS4zODcsMzguMzY3djEwNi4zNzdjMCwxNS4xOTItOS44MjEsMjYuOTA1LTIzLjQyNiwyOS4wNDcNCgkJCWM3LjAxMSwwLjgxNywxMy4wOTcsMi40NCwxNy44ODksNS4zODhjMTAuNjAzLTcuMzY5LDE3LjQ3MS0xOS45MDUsMTcuNDcxLTM0LjQzNXYtNjEuMjA4aDM1LjE0NQ0KCQkJYy0yLjQ2NCw0LjY0Mi00LjE3MSw5Ljc4LTQuOTA1LDE0Ljg4MWgtMC40MDZ2NS40NDhoMC40YzEuMTY5LDguMjU4LDQuNzg1LDE2LjYwNiwxMC4wMywyMi44ODMNCgkJCWMtMTEuNzczLDQuMDg3LTE5Ljk4OSwxNi4yMDYtMjEuOTIyLDI4LjA5OGgtMC40NDJ2NS40NDhoMC40MzZjMS41MDQsOS40MjgsNi44MzgsMTguOTYzLDE0LjQyMiwyNC44MjgNCgkJCWMtNy41OSw2LjE5NC0xMi45MjQsMTYuMjM2LTE0LjQzNCwyNi4xNTloLTAuNDI0djUuNDQ4aDAuNDE4YzEuNzAxLDExLjQ2OCw4LjM0OCwyMy4zOSwxNy40NTksMjkuNTcyDQoJCQljLTYuMDkyLDUuNTk3LTEwLjE5NywxMy41NTEtMTEuNDc0LDIxLjQyMWgtMC40MzZ2NS40NDhoMC40MjRjMS40NDQsOS41MjMsNi41MSwxOS4xODMsMTMuOTY4LDI1LjE2OGgtMzguNjc3VjMyMi4yMTF6DQoJCQkgTTMwNC4zMSwyOTcuMjM0YzAsMTAuNjYzLTguNDQzLDE5LjAxLTE5LjIxOSwxOS4wMWgtMzkuNjkyYy05LjIzNywwLTE3LjI2Mi0xMS40NDQtMTguNDk3LTIxLjkwNA0KCQkJYzEuMTg3LTkuNzAyLDguNzY1LTE5Ljg2NCwxOC41MDMtMTkuODY0aDM5LjY5OGM5LjI0OSwwLDE5LjIwNyw1LjI5OSwxOS4yMDcsMTYuOTIyVjI5Ny4yMzR6IE0zMzQuMTQ1LDIzNC45NTd2NS44NDINCgkJCWMwLDEwLjk2Ny0xMC4zMTcsMjEuNzQzLTIwLjgyNCwyMS43NDNoLTI4LjIxN2gtMzkuNjk4aC01LjY0NWMtOC45OTgsMC0xNy41MjUtMTMuMzQyLTE4LjgyLTI0LjY0OQ0KCQkJYzEuMjY1LTEwLjgsOS42MTMtMjMuMDg2LDE4LjgyLTIzLjA4Nmg3My41NkMzMjQuMjIyLDIxNC44MDcsMzM0LjE0NSwyMjQuNDA4LDMzNC4xNDUsMjM0Ljk1N3ogTTMzNC4xNDUsMTg0LjM2NA0KCQkJYzAsMTEuMDc1LTEwLjc3LDE4LjUwOS0yMC44MjQsMTguNTA5aC03My41NmMtOS4zOTIsMC0xNy41NDktMTEuMTg4LTE4LjgxNC0yMS40MjFjMS4yMjktOS43NDQsOS4wOTktMjAuMzQ3LDE4LjgxNC0yMC4zNDcNCgkJCWgxMS4yODloNDUuMzQyaDE2LjkzNGMxMC4yMzksMCwyMC44MjQsNi41MTYsMjAuODI0LDE3LjQxN3Y1Ljg0MkgzMzQuMTQ1eiIvPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojMDEwMDAyOyIgZD0iTTAsMzE2LjI0NGg0MS43NjhWMTM3LjIzOEgwVjMxNi4yNDR6IE0yMC4yMjIsMjgxLjE0N2M3LjI2MiwwLDEzLjE2OSw1LjkwNywxMy4xNjksMTMuMTY5DQoJCQljMCw3LjI2Mi01LjkwNywxMy4xNjMtMTMuMTY5LDEzLjE2M3MtMTMuMTc1LTUuOTAxLTEzLjE3NS0xMy4xNjNDNy4wNDcsMjg3LjA1NCwxMi45NiwyODEuMTQ3LDIwLjIyMiwyODEuMTQ3eiIvPg0KCQk8Y2lyY2xlIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBjeD0iMjAuMjIyIiBjeT0iMjk0LjMxNiIgcj0iNy41MjQiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./public/world.svg":
/*!**************************!*\
  !*** ./public/world.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/world-5822fbc778b63bb6279b5288c2fa5c4c.svg";

/***/ }),

/***/ "./utils/gtag.js":
/*!***********************!*\
  !*** ./utils/gtag.js ***!
  \***********************/
/*! exports provided: GA_TRACKING_ID, pageview, event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GA_TRACKING_ID", function() { return GA_TRACKING_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageview", function() { return pageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
const GA_TRACKING_ID = 'UA-161939292-1'; // https://developers.google.com/analytics/devguides/collection/gtagjs/pages

const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  });
}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events

const event = ({
  action,
  category,
  label,
  value
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

/***/ }),

/***/ "./utils/themes.js":
/*!*************************!*\
  !*** ./utils/themes.js ***!
  \*************************/
/*! exports provided: themes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return themes; });
const themes = {
  common: {
    fontFamily: "Rubik, Montserrat, -apple-system, 'Segoe UI', 'Helvetica Neue', sans-serif",
    menuBorder: '#232F34',
    menuBg: '#344955',
    menuColor: '#4A6572',
    menuHover: '#F9AA33',
    headerBg: '#364F9F',
    white: '#FFF',
    black: '#000',
    kofi: '#FF5E5B',
    dark: '#343a40',
    blue: '#007bff',
    danger: '#dc3545',
    light: '#f8f9fa',
    secondary: '#303f9f',
    shadows: {
      0: "none",
      1: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
      2: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
      3: "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
      4: "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)"
    },
    general: {
      primaryDark: '#31000d',
      primaryColor: '#5C0434',
      primaryLight: 'rgb(124,54,92)',
      primaryVariant: '#B8004B',
      analogous: '#58045c',
      grey: '#d2d2d2',
      bgColor: '#F5F5F5',
      successDefault: '#4caf50',
      secondaryColor: '#6646EE',
      secondaryDark: '#303f9f',
      secondaryVariant: '#3700B3',
      complementary: '#BC85F9',
      error: '#b00020',
      error2: '#ee5f02',
      transparent: 'transparent',
      white: '#FFF',
      analogous: '#58045c',
      CTA: '#d0021c',
      CTAHOVER: '#8A0011'
    }
  },
  mobile: '660px',
  red: {
    type: 'red',
    primaryColor: '#5C0434',
    primaryDark: '#31000d',
    primaryVariant: '#B8004B',
    primaryLight: '#8c385e',
    complementary: '#045c2c',
    bgColor: '#F5F5F5',
    text: {
      primary: 'hsl(207, 0%, 87%)',
      secondary: 'hsl(207, 0%, 60%)',
      disabled: 'hsl(207, 0%, 38%)'
    },
    onPrimary: '#000',
    onBg: '#FFF',
    onError: '#000',
    color: 'hsl(207, 0%, 87%)',
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c'
    }
  },
  light: {
    type: 'light',
    CTAHOVER: '#8A0011',
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.60)',
      disabled: 'rgba(0,0,0,0.38)'
    },
    primaryDark: '#31000d',
    primaryColor: '#5C0434',
    // Red
    // primaryLight: '#8c385e',
    primaryLight: 'rgb(124,54,92)',
    primaryVariant: '#B8004B',
    analogous: '#58045c',
    complementary: '#1d8c4a',
    // primaryColor: '#6646EE', // Main Purple
    // primaryDark: '#303f9f',
    // primaryVariant: '#3700B3',
    // complementary: '#BC85F9',
    purpleComp: '#BC85F9',
    purpleVariant: '#3700B3',
    purple: '#6646EE',
    // Main Purple
    bgColor: '#F5F5F5',
    // bgColor: '#FFF',
    error: '#b00020',
    error2: '#ee5f02',
    hover: 'rgba(0,0,0,0.4)',
    hoverOpacity: 0.04,
    active: 'rgba(0,0,0,0.54)',
    active2: '#dc3545',
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    successDefault: '#4caf50',
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c'
    },
    color: '#121212',
    onPrimary: '#FFFFFF',
    onBg: '#000000',
    onError: '#FFFFFF',
    boxShadow: '0.8rem 0.8rem 1.5rem gray',
    btnBg: '#344955',
    btnColor: '#fff'
  },
  dark: {
    type: 'dark',
    // primaryColor: '#BB86FC',
    // primaryColor: '#BC85F9',
    primaryDark: '#BB86FC',
    primaryVariant: '#3700B3',
    primaryColor: '#8c385e',
    complementary: '#6646EE',
    bgColor: '#1B1B12',
    error: '#CF6679',
    error2: '#ee5f02',
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c'
    },
    onPrimary: '#FFF',
    onBg: '#FFF',
    onError: '#000',
    primaryHover: '#BF96FD',
    text: {
      primary: 'hsl(207, 0%, 87%)',
      secondary: 'hsl(207, 0%, 60%)',
      disabled: 'hsl(207, 0%, 38%)'
    },
    hover: 'rgba(255,255,255,0.4)',
    hoverOpacity: 0.04,
    active: 'rgba(255,255,255,255.54)',
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    color: '#B8004B',
    // color: '#8c385e',
    // color: 'hsl(207, 0%, 87%)',
    boxShadow: '0.4rem 0.4rem 1.5rem #11111111',
    categoryColor: '#CBD2D9',
    categoryHoverColor: '#9AA5B1',
    btnBg: '#344955'
  }
};

/***/ }),

/***/ "./utils/useOutSide.js":
/*!*****************************!*\
  !*** ./utils/useOutSide.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((ref, handler) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
});

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

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

/***/ }),

/***/ "styled-normalize":
/*!***********************************!*\
  !*** external "styled-normalize" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-normalize");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map