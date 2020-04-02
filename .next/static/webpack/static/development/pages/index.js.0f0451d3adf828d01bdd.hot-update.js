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
/* harmony import */ var _utils_useTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useTime */ "./utils/useTime.js");
/* harmony import */ var _utils_useTodayStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useTodayStats */ "./utils/useTodayStats.js");
/* harmony import */ var _utils_useCountries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useCountries */ "./utils/useCountries.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./S */ "./components/S.js");
/* harmony import */ var _HeaderDescription__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HeaderDescription */ "./components/HeaderDescription.js");
/* harmony import */ var _CaseChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CaseChart */ "./components/CaseChart.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/CoronaApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var CoronaApp = function CoronaApp(_ref) {
  var isHeb = _ref.isHeb;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      showWorld = _useState[0],
      setShowWorld = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      country = _useState2[0],
      setCountry = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      inputValue = _useState3[0],
      setInput = _useState3[1];

  var url = 'https://nCorona.live/api/v1/';
  var url2 = 'https://corona.lmao.ninja/countries/';
  var worldUrl = 'https://corona.lmao.ninja/all';

  var _useTime = Object(_utils_useTime__WEBPACK_IMPORTED_MODULE_3__["default"])(country),
      countryStats = _useTime.countryStats;

  var _useTodayStats = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_4__["default"])(url, country),
      todayStats = _useTodayStats.todayStats;

  var worldToday = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_4__["default"])(url, 'world').todayStats;

  var _useCountries = Object(_utils_useCountries__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      countries = _useCountries.countries;

  var worldTodaySorted = worldToday && {
    cases: worldToday.cases,
    todayCases: worldToday.todayCases,
    recovered: worldToday.recovered,
    deaths: worldToday.deaths
  } || '';
  var todayStatsSorted = todayStats && {
    cases: todayStats.cases,
    todayCases: todayStats.todayCases,
    recovered: todayStats.recovered,
    deaths: todayStats.deaths
  } || '';

  var handleChange = function handleChange(selected) {
    setCountry(selected.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setCountry(inputValue);
  };

  var selectOptions = countries && countries.map(function (a) {
    return {
      value: a,
      label: a
    };
  });
  console.log(countryStats);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_HeaderDescription__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx(_S__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, countryStats && __jsx(_Chart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isHeb: isHeb,
    type: "line",
    labels: countryStats.labels,
    data: countryStats.datasets.filter(function (a) {
      return a.label === 'cases';
    }),
    label: country || 'israel',
    fill: false,
    stops: 3,
    showLegend: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cn: country || todayStats && todayStats.country,
    todayStats: todayStatsSorted,
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
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
      lineNumber: 85
    },
    __self: this
  }, __jsx("label", {
    style: {
      fontSize: '16px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, isHeb ? "\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05DC\u05E4\u05D9 \u05DE\u05D3\u05D9\u05E0\u05D4" : "Data For Country:"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: 'Select',
    options: selectOptions,
    value: country,
    onChange: handleChange,
    placeholder: country || 'Get Country Stats',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cn: 'World',
    todayWorld: worldTodaySorted,
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx(_CaseChart__WEBPACK_IMPORTED_MODULE_9__["default"], {
    showWorld: showWorld,
    country: country,
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CoronaApp);

/***/ })

})
//# sourceMappingURL=index.js.0f0451d3adf828d01bdd.hot-update.js.map