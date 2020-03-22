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
/* harmony import */ var _utils_useTodayStats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useTodayStats */ "./utils/useTodayStats.js");
/* harmony import */ var _utils_useCountries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useCountries */ "./utils/useCountries.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Container */ "./components/Container.js");
/* harmony import */ var _HeaderDescription__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeaderDescription */ "./components/HeaderDescription.js");
/* harmony import */ var _CaseChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CaseChart */ "./components/CaseChart.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/CoronaApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var allCountries = {
  israel: '',
  usa: '',
  uk: '',
  france: '',
  lebanon: '',
  germany: '',
  poland: '',
  russia: '',
  india: '',
  ukraine: '',
  moldova: '',
  spain: '',
  italy: ''
};

var translateCountries = function translateCountries(countries) {
  return function (cn) {
    return countries[Object.keys(countries).filter(function (c) {
      return c === 'cn';
    })];
  };
};

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

  var _useTodayStats = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_5__["default"])(url, country),
      todayStats = _useTodayStats.todayStats;

  var worldToday = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_5__["default"])(url, 'world').todayStats;

  var _useCountries = Object(_utils_useCountries__WEBPACK_IMPORTED_MODULE_6__["default"])(),
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
    return setCountry(selected);
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
  }); // const selectOptions = {}

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Covid19 Feed"), __jsx(_HeaderDescription__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx(_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, countryStats && __jsx(_Chart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isHeb: lang === 'heb',
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
      lineNumber: 81
    },
    __self: this
  }), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cn: country || todayStats && todayStats.country,
    todayStats: todayStatsSorted,
    isHeb: lang === 'heb',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
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
      lineNumber: 98
    },
    __self: this
  }, __jsx("label", {
    style: {
      fontSize: '16px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, lang === 'eng' ? "Search For Country:" : "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DC\u05E4\u05D9 \u05DE\u05D3\u05D9\u05E0\u05D4"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_11__["default"], {
    options: selectOptions,
    value: country,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  })), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cn: 'World',
    todayWorld: worldTodaySorted,
    isHeb: lang === 'heb',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }), __jsx(_CaseChart__WEBPACK_IMPORTED_MODULE_10__["default"], {
    showWorld: showWorld,
    theme: theme,
    country: country,
    isHeb: lang === 'heb',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.6b1bfde81af83a43b8f1.hot-update.js.map