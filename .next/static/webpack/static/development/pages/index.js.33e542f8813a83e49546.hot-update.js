webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Bar.js":
/*!***************************!*\
  !*** ./components/Bar.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Bar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var prop = function prop(o) {
  return function (k) {
    return o[k];
  };
};

var popVal = function popVal(o) {
  return Object.values(o)[0];
};

var popKey = function popKey(o) {
  return Object.keys(o)[0];
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var info = _ref.info;
  var data = {
    labels: info.map(popKey),
    datasets: [{
      label: 'Outbreak Info',
      backgroundColor: ['rgba(112, 120, 176, 1)', 'rgba(255,99,132,1)', 'rgba(213, 199, 23, 1)', 'rgba(245, 158, 102, 1)', 'rgba(18, 18, 21, 1)'],
      borderColor: 'rgba(255,99,132,0.8)',
      borderWidth: 1.5,
      barPercentage: 0.52,
      minBarLength: 2,
      maxBarThickness: '60',
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: info.map(popVal)
    }]
  };
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Outbreak Information"), __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
    data: data,
    width: 40,
    height: 12,
    options: {
      maintainAspectRatio: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.33e542f8813a83e49546.hot-update.js.map