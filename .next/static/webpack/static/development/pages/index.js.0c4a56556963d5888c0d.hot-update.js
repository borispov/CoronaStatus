webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/QuickStats.js":
/*!**********************************!*\
  !*** ./components/QuickStats.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/QuickStats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "QuickStats__Container",
  componentId: "lmgi17-0"
})(["@media (max-width:576px){max-width:540px;}@media (max-width:768px){}@media (max-width:992px){max-width:960px;}@media (min-width:1200px){max-width:1140px;}transition:all .5s cubic-bezier(.55,0,.1,1);width:85%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;"]);
var Row = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "QuickStats__Row",
  componentId: "lmgi17-1"
})(["display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px;"]);
var Col = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "QuickStats__Col",
  componentId: "lmgi17-2"
})(["text-align:center;padding:8px 10px;font-weight:700;border-right-width:1px;border-left:2px solid #38383b;border-bottom:2px solid #38383b;border-right-color:2px solid #38383b;border-top:2px solid #38383b;color:", ";background-color:", ";flex:0 0 20%;max-width:20%;position:relative;width:100%;display:flex;flex-direction:column;justify-content:center;"], function (props) {
  return props.theme.statColor;
}, function (props) {
  return props.theme.bgColor;
});
var Country = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "QuickStats__Country",
  componentId: "lmgi17-3"
})(["font-size:18px;font-weight:bold;align-self:center;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var S = _ref.S,
      country = _ref.country,
      isHeb = _ref.isHeb;
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(Col, {
    style: {
      borderRight: '2px solid #38383b',
      borderTopRightRadius: '5px',
      borderBottomRightRadius: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(Country, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, " ", country, " ")), __jsx(Col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, S.cases, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, isHeb ? 'נדבקים' : 'Infected'))), __jsx(Col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, S.recovered, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, isHeb ? 'החלימו' : 'Recovered'))), __jsx(Col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, S.deaths, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, isHeb ? 'מקרי מוות' : 'Deaths'))), __jsx(Col, {
    style: {
      borderLeft: '2px solid #38383b',
      borderTopLeftRadius: '5px',
      borderBottomLeftRadius: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, S.todayCases, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, isHeb ? 'מקרים חדשים' : 'Today Cases')))));
});

/***/ })

})
//# sourceMappingURL=index.js.0c4a56556963d5888c0d.hot-update.js.map