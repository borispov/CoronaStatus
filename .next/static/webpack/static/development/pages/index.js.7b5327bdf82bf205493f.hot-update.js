webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _QuickStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuickStats */ "./components/QuickStats.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Stats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Stats__Container",
  componentId: "tjczhx-0"
})(["max-width:1140px;margin:8px auto 0;text-align:center;"]);
function Stats(_ref) {
  var _ref$cn = _ref.cn,
      cn = _ref$cn === void 0 ? '' : _ref$cn,
      todayWorld = _ref.todayWorld,
      todayStats = _ref.todayStats,
      isHeb = _ref.isHeb,
      yesteryday = _ref.yesteryday;
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, todayWorld && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    style: {
      fontSize: '20px',
      paddingTop: '18px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, isHeb && 'המצב הנוכחי ב' || 'Status for: ', __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, cn === 'World' && isHeb && 'עולם' || cn)), __jsx(_QuickStats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    country: cn,
    yday: yesteryday,
    S: todayWorld,
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), todayStats && __jsx(_QuickStats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    country: cn,
    yday: yesteryday,
    S: todayStats,
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.7b5327bdf82bf205493f.hot-update.js.map