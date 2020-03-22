webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CoronaApp.js":
/*!*********************************!*\
  !*** ./components/CoronaApp.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "./components/Input.js");
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stats */ "./components/Stats.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _utils_useTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useTime */ "./utils/useTime.js");
/* harmony import */ var _utils_worldTimeData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/worldTimeData */ "./utils/worldTimeData.js");
/* harmony import */ var _utils_useTodayStats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useTodayStats */ "./utils/useTodayStats.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Container */ "./components/Container.js");
/* harmony import */ var _HeaderDescription__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeaderDescription */ "./components/HeaderDescription.js");
/* harmony import */ var _utils_sortForChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/sortForChart */ "./utils/sortForChart.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _CaseChart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CaseChart */ "./components/CaseChart.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/CoronaApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var theme = _ref.theme,
      lang = _ref.lang;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      showWorld = _useState[0],
      setShowWorld = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      country = _useState2[0],
      setCountry = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      inputValue = _useState3[0],
      setInput = _useState3[1];

  var url = 'http://covid19.borisky.me:3003/api/v1/';

  var _useTime = Object(_utils_useTime__WEBPACK_IMPORTED_MODULE_4__["default"])(country),
      countryStats = _useTime.countryStats;

  var _useTodayStats = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_6__["default"])(url, country),
      todayStats = _useTodayStats.todayStats;

  var todayStatsSorted = todayStats && {
    cases: todayStats.cases,
    todayCases: todayStats.todayCases,
    recovered: todayStats.recovered,
    deaths: todayStats.deaths
  } || '';

  var handleChange = function handleChange(e) {
    return setInput(e.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setCountry(inputValue);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Covid19 Feed"), __jsx(_HeaderDescription__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), countryStats && __jsx(_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_Chart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "line",
    labels: countryStats.labels,
    data: countryStats.datasets.filter(function (a) {
      return a.label === 'cases';
    }),
    label: country || 'israel',
    theme: theme,
    fill: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cn: country || todayStats && todayStats.country,
    todayStats: todayStatsSorted,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx(_CaseChart__WEBPACK_IMPORTED_MODULE_13__["default"], {
    showWorld: showWorld,
    theme: theme,
    country: country,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("form", {
    style: {
      maxWidth: '520px',
      margin: '54px auto'
    },
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("label", {
    style: {
      fontSize: '16px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, lang === 'eng' ? "Search For Country:" : "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DC\u05E4\u05D9 \u05DE\u05D3\u05D9\u05E0\u05D4"), __jsx("div", {
    style: {
      display: 'flex',
      margin: '0 auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "text",
    value: inputValue,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "submit",
    value: "submit",
    btn: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.cdcad09e77dc16df7eba.hot-update.js.map