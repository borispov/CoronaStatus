webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../S */ "./components/S.js");
/* harmony import */ var _Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons/ThemeIcon */ "./components/Icons/ThemeIcon.js");
/* harmony import */ var _Header_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.styled */ "./components/Header/Header.styled.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Header/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Header = function Header(_ref) {
  var title = _ref.title,
      theme = _ref.theme,
      isHeb = _ref.isHeb,
      children = _ref.children;
  var Tip = isHeb && 'תרומה לכפפות' || 'Gloves Tip';
  return __jsx(_Header_styled__WEBPACK_IMPORTED_MODULE_3__["HeaderWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_S__WEBPACK_IMPORTED_MODULE_1__["FadeIn"], {
    duration: "0.4s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_Header_styled__WEBPACK_IMPORTED_MODULE_3__["HeaderTag"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_Header_styled__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_Header_styled__WEBPACK_IMPORTED_MODULE_3__["NavList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_Header_styled__WEBPACK_IMPORTED_MODULE_3__["Logo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, title))), __jsx(_Header_styled__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/Coffee",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_S__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    small: true,
    bgColor: "#c82333",
    link: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, " ", __jsx(_Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_2__["Coffee"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), " "), Tip)))), children)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/Header.styled.js":
/*!********************************************!*\
  !*** ./components/Header/Header.styled.js ***!
  \********************************************/
/*! exports provided: HeaderWrapper, HeaderTag, Nav, NavList, NavItem, Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderWrapper", function() { return HeaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTag", function() { return HeaderTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavList", function() { return NavList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return NavItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Headerstyled__HeaderWrapper",
  componentId: "sc-1v2vfvs-0"
})(["direction:ltr;position:relative;height:64px;z-index:1;width:100%;background:linear-gradient(45deg,#5c0434,#000000d6);border-bottom:1px solid darkblue;margin:0 auto;margin-bottom:48px;"]);
var HeaderTag = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].header.withConfig({
  displayName: "Headerstyled__HeaderTag",
  componentId: "sc-1v2vfvs-1"
})(["justify-content:space-between;align-items:center;max-width:920px;margin:0 auto;@media (max-width:580px){margin-left:12px;margin-right:12px;align-items:flex-end;padding-top:4px;}"]);
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "Headerstyled__Nav",
  componentId: "sc-1v2vfvs-2"
})(["align-items:center;width:100%;"]);
var NavList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "Headerstyled__NavList",
  componentId: "sc-1v2vfvs-3"
})(["justify-content:space-around;display:flex;align-items:center;"]);
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "Headerstyled__NavItem",
  componentId: "sc-1v2vfvs-4"
})(["margin-top:10px;margin-left:40px;list-style:none;display:flex;justify-content:space-between;align-items:center;i{width:1.3rem;margin:0px 6px 0 0;display:inline-block;vertical-align:middle;font-size:14px;}@media (max-width:580px){margin-left:8px;}"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1.withConfig({
  displayName: "Headerstyled__Logo",
  componentId: "sc-1v2vfvs-5"
})(["margin-top:10px;color:#e6e6e6;font-size:3.5rem;font-family:'Montserrat';text-align:center;text-shadow:0 1px 35px rgba(5,35,10,0.2);cursor:pointer;font-family:'Montserrat';@media (max-width:580px){font-size:2.5rem;align-items:flex-end;}"]);

/***/ })

})
//# sourceMappingURL=_app.js.996c828aaea103a78cce.hot-update.js.map