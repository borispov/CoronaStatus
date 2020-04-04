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
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./S */ "./components/S.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/QuickStats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Row = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "QuickStats__Row",
  componentId: "lmgi17-0"
})(["display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px;"]);
var Col = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "QuickStats__Col",
  componentId: "lmgi17-1"
})(["text-align:center;padding:8px 10px;font-weight:700;flex:0 0 20%;max-width:20%;position:relative;width:100%;display:flex;flex-direction:column;background:", ";color:", ";justify-content:center;@media (max-width:768px){padding:8px 18px;flex:1;max-width:auto;}"], function (props) {
  return props.bg && props.theme[props.bg] || props.theme.primaryColor;
}, function (props) {
  return props.theme.onPrimary;
});
var Country = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "QuickStats__Country",
  componentId: "lmgi17-2"
})(["font-size:18px;font-weight:bold;align-self:center;color:", ";@media (max-width:768px){font-size:14px;}"], function (props) {
  return props.theme.onPrimary;
});
var Div = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "QuickStats__Div",
  componentId: "lmgi17-3"
})(["box-shadow:", ";border-radius:6px;margin-bottom:16px;"], function (props) {
  return props.theme.shadows[2];
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var S = _ref.S,
      country = _ref.country,
      isHeb = _ref.isHeb;
  return __jsx(_S__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(Col, {
    style: {
      borderRight: 'none',
      borderTopRightRadius: '5px',
      borderBottomRightRadius: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(Country, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, " ", country, " ")), __jsx(Col, {
    bg: "primaryVariant",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(Country, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, S.cases, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, isHeb ? 'נדבקים' : 'Infected'))), __jsx(Col, {
    bg: "successDefault",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(Country, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, S.recovered, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, isHeb ? 'החלימו' : 'Recovered'))), __jsx(Col, {
    bg: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(Country, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, S.deaths, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, isHeb ? 'מקרי מוות' : 'Deaths'))), __jsx(Col, {
    bg: "error2",
    style: {
      borderLeft: 'none',
      borderTopLeftRadius: '5px',
      borderBottomLeftRadius: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(Country, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, S.todayCases, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, isHeb ? 'מקרים חדשים' : 'Today Cases'))))));
});

/***/ })

})
//# sourceMappingURL=index.js.680e47d90e3fb962dd23.hot-update.js.map