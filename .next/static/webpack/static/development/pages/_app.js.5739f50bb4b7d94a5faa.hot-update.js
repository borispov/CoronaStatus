webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: HeaderWrapper, HeaderTag, Nav, NavList, NavItem, Logo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderWrapper", function() { return HeaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTag", function() { return HeaderTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavList", function() { return NavList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return NavItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../S */ "./components/S.js");
/* harmony import */ var _Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons/ThemeIcon */ "./components/Icons/ThemeIcon.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Header/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import { HeaderWrapper, HeaderTag, Nav, NavList, NavItem, Logo } from './Header.styled'



var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "Header__HeaderWrapper",
  componentId: "sc-11jvbnh-0"
})(["direction:ltr;position:relative;height:64px;z-index:1;width:100%;background:linear-gradient(45deg,#5c0434,#000000d6);border-bottom:1px solid darkblue;margin:0 auto;margin-bottom:48px;"]);
var HeaderTag = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].header.withConfig({
  displayName: "Header__HeaderTag",
  componentId: "sc-11jvbnh-1"
})(["justify-content:space-between;align-items:center;max-width:920px;margin:0 auto;@media (max-width:", " => theme.mobile){margin-left:12px;margin-right:12px;align-items:flex-end;padding-top:4px;}"], theme);
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].nav.withConfig({
  displayName: "Header__Nav",
  componentId: "sc-11jvbnh-2"
})(["align-items:center;width:100%;"]);
var NavList = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].ul.withConfig({
  displayName: "Header__NavList",
  componentId: "sc-11jvbnh-3"
})(["justify-content:space-around;display:flex;align-items:center;"]);
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].li.withConfig({
  displayName: "Header__NavItem",
  componentId: "sc-11jvbnh-4"
})(["margin-top:10px;margin-left:40px;list-style:none;display:flex;justify-content:space-between;align-items:center;i{width:1.3rem;margin:0px 6px 0 0;display:inline-block;vertical-align:middle;font-size:14px;}@media (max-width:", "){margin-left:8px;}"], function (props) {
  return props.theme.mobile;
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-11jvbnh-5"
})(["margin-top:10px;color:#e6e6e6;font-size:3.5rem;font-family:'Montserrat';text-align:center;text-shadow:0 1px 35px rgba(5,35,10,0.2);cursor:pointer;font-family:'Montserrat';@media (max-width:", " => theme.mobile){font-size:2.5rem;align-items:flex-end;}"], theme);

var Header = function Header(_ref) {
  var title = _ref.title,
      theme = _ref.theme,
      isHeb = _ref.isHeb,
      children = _ref.children;
  var Tip = isHeb && 'תרומה לכפפות' || 'Gloves Tip';
  return __jsx(HeaderWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_S__WEBPACK_IMPORTED_MODULE_1__["SlideInLeft"], {
    duration: "0.75s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(HeaderTag, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(NavList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, title))), __jsx(NavItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/Coffee",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_S__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    small: true,
    bgColor: "#c82333",
    link: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, " ", __jsx(_Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_2__["Coffee"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), " "), Tip)))), children)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/Header.styled.js":
false

})
//# sourceMappingURL=_app.js.5739f50bb4b7d94a5faa.hot-update.js.map