webpackHotUpdate("static/development/pages/Coffee.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ "./components/Container.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var _public_coffee_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/coffee.svg */ "./public/coffee.svg");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var CoffeeIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_public_coffee_svg__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "Header__CoffeeIcon",
  componentId: "sc-1yguf34-0"
})(["width:1.5rem;height:1.5rem;margin:0px 6px 0 0;display:inline-block;font-size:14px;padding-top:4px;"]);
var Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__Wrap",
  componentId: "sc-1yguf34-1"
})(["direction:ltr;position:relative;height:82px;width:100%;background:linear-gradient(45deg,#5c0434,#000000d6);border-bottom:1px solid darkblue;margin:0 auto;margin-bottom:48px;"]);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header.withConfig({
  displayName: "Header",
  componentId: "sc-1yguf34-2"
})(["display:flex;justify-content:space-between;align-items:center;@media (max-width:768px){margin-left:12px;margin-right:12px;}"]);
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "Header__Nav",
  componentId: "sc-1yguf34-3"
})(["display:flex;align-items:center;justify-content:space-between;width:100%;@media (max-width:768px){margin-top:10px;}"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Header__List",
  componentId: "sc-1yguf34-4"
})(["display:flex;align-items:center;"]);
var Item = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Header__Item",
  componentId: "sc-1yguf34-5"
})(["margin-top:20px;margin-left:40px;list-style:none;display:flex;justify-content:space-between;align-items:center;@media (max-width:768px){margin-left:12px;}"]);
var Side = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Header__Side",
  componentId: "sc-1yguf34-6"
})(["display:flex;margin-top:20px;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "Header__Title",
  componentId: "sc-1yguf34-7"
})(["margin-top:20px;color:#e6e6e6;font-size:3.5rem;font-family:'Montserrat';text-align:center;text-shadow:0 1px 35px rgba(5,35,10,0.2);@media (max-width:768px){font-size:2.5rem;}"]);
var Href = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a).withConfig({
  displayName: "Header__Href",
  componentId: "sc-1yguf34-8"
})(["cursor:pointer;text-decoration:none;color:", ";"], function (props) {
  return props.theme.btnColor;
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      children = _ref.children,
      isHeb = _ref.isHeb,
      theme = _ref.theme;
  return __jsx(Wrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("div", {
    style: {
      maxWidth: '820px',
      margin: '0 auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, 'C19feed'), __jsx(Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: {
      pathname: '/Coffee',
      query: {
        isHeb: 'false'
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    small: true,
    bgColor: "#c82333",
    link: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(CoffeeIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), "Buy Me A Coffix")))), __jsx(Side, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, " ", children, " ")))));
});

/***/ })

})
//# sourceMappingURL=Coffee.js.6cecf400ffc00f3ee086.hot-update.js.map