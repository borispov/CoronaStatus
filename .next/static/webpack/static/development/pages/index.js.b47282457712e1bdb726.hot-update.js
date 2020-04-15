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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _utils_useTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useTime */ "./utils/useTime.js");
/* harmony import */ var _utils_useTodayStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useTodayStats */ "./utils/useTodayStats.js");
/* harmony import */ var _utils_useCountries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useCountries */ "./utils/useCountries.js");
/* harmony import */ var _utils_useYday__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useYday */ "./utils/useYday.js");
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./S */ "./components/S.js");
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Stats */ "./components/Stats.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
/* harmony import */ var _HeaderDescription__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HeaderDescription */ "./components/HeaderDescription.js");
/* harmony import */ var _CaseChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CaseChart */ "./components/CaseChart.js");
/* harmony import */ var _CaseChart__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_CaseChart__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_cns_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/cns.js */ "./assets/cns.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/CoronaApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














var calcDiff = function calcDiff(current) {
  return function (prev) {
    return current !== 0 ? (current - prev) / 100 * 100 : 0;
  };
};

var CoronaApp = function CoronaApp(_ref) {
  var isHeb = _ref.isHeb,
      theme = _ref.theme,
      userLocation = _ref.userLocation,
      yesterdayC = _ref.yesterdayC,
      yesterdayGlobal = _ref.yesterdayGlobal,
      worldTime = _ref.worldTime;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      showWorld = _useState[0],
      setShowWorld = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(userLocation),
      country = _useState2[0],
      setCountry = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      inputValue = _useState3[0],
      setInput = _useState3[1];

  var url = 'https://nCorona.live/api/v1/';
  var worldUrl = 'https://corona.lmao.ninja/all';
  var v2 = 'https://corona.lmao.ninja/v2/countries/';

  var _useTime = Object(_utils_useTime__WEBPACK_IMPORTED_MODULE_3__["default"])(country, theme),
      countryStats = _useTime.countryStats;

  var _useTodayStats = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_4__["default"])(url, country),
      todayStats = _useTodayStats.todayStats;

  var worldToday = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_4__["default"])(url, 'world').todayStats;

  var _useYday = Object(_utils_useYday__WEBPACK_IMPORTED_MODULE_6__["default"])(v2, country),
      yesterdayCn = _useYday.yesterdayCn;

  var _useCountries = Object(_utils_useCountries__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      countries = _useCountries.countries;

  var worldTodaySorted = worldToday && {
    cases: worldToday.cases,
    active: worldToday.active,
    recovered: worldToday.recovered,
    deaths: worldToday.deaths,
    todayCases: worldToday.todayCases,
    affectedCountries: yesterdayGlobal.affectedCountries
  } || '';
  var yesterdayStatsSorted = yesterdayCn && {
    cases: yesterdayCn.cases,
    todayCases: yesterdayCn.todayCases,
    recovered: yesterdayCn.recovered,
    deaths: yesterdayCn.deaths
  } || '';
  var yesterdayGlobalSorted = yesterdayGlobal && {
    cases: yesterdayGlobal.cases,
    active: yesterdayGlobal.active,
    deaths: yesterdayGlobal.deaths,
    todayCases: yesterdayGlobal.todayCases,
    recovered: yesterdayGlobal.recovered,
    affectedCountries: yesterdayGlobal.affectedCountries
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

  var countryheb = function countryheb(country) {
    if (countries) {
      var lowerCased = countries.map(function (a) {
        return a.toLowerCase();
      });
      var engIndex = lowerCased.indexOf(country);
      return _assets_cns_js__WEBPACK_IMPORTED_MODULE_12__["default"][engIndex];
    }
  };

  console.log(countries && countryheb(country)); // const selectOptions = countries && countries.map(a => ({ value: a, label: a }))

  var selectOptions = !countries ? {
    value: 'null',
    label: 'Loading List...'
  } : !isHeb ? countries.map(function (a) {
    return {
      value: a,
      label: a
    };
  }) : countries.map(function (country, idx) {
    return {
      value: country,
      label: _assets_cns_js__WEBPACK_IMPORTED_MODULE_12__["default"][idx]
    };
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_S__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("form", {
    style: {
      maxWidth: '520px',
      margin: '54px auto 12px',
      textAlign: 'center'
    },
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("label", {
    style: {
      fontSize: '16px',
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, isHeb ? "\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05DC\u05E4\u05D9 \u05DE\u05D3\u05D9\u05E0\u05D4" : "Data For Country:"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: 'Select',
    options: selectOptions,
    value: country === 'Israel' && isHeb ? 'ישראל' : country,
    onChange: handleChange,
    placeholder: countryheb(country),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  })), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_8__["default"], {
    cn: country || todayStats && todayStats.country,
    todayStats: todayStatsSorted,
    yesteryday: yesterdayStatsSorted,
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), countryStats && __jsx(_Chart__WEBPACK_IMPORTED_MODULE_9__["default"], {
    isHeb: isHeb,
    type: "line",
    labels: countryStats.labels // data={countryStats.datasets.filter(a => a.label === 'cases')}
    ,
    data: countryStats.datasets,
    label: country || 'israel',
    fill: false,
    stops: 3,
    showLegend: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_8__["default"], {
    cn: 'World',
    todayWorld: worldTodaySorted,
    yesteryday: yesterdayGlobalSorted,
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), __jsx(_HeaderDescription__WEBPACK_IMPORTED_MODULE_10__["default"], {
    txt: "* \u05D2\u05E8\u05E4\u05D9\u05DD \u05D4\u05DE\u05E6\u05D9\u05D2\u05D9\u05DD \u05D0\u05EA \u05E9\u05D9\u05E2\u05D5\u05E8 \u05D4\u05E6\u05DE\u05D9\u05D7\u05D4 \u05E9\u05DC \u05E0\u05D2\u05D9\u05E3 \u05D4\u05E7\u05D5\u05E8\u05D5\u05E0\u05D4, \u05D0\u05D9\u05E0\u05DD \u05DE\u05EA\u05E2\u05D3\u05DB\u05E0\u05D9\u05DD \u05D1\u05D6\u05DE\u05DF \u05D0\u05DE\u05EA \u05D5\u05DC\u05DB\u05DF \u05D0\u05D9\u05E0\u05DD \u05DE\u05E9\u05E7\u05E4\u05D9\u05DD \u05D0\u05EA \u05D4\u05D9\u05D5\u05DD \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9. \u05D1\u05D3\u05E8\u05DA-\u05DB\u05DC\u05DC \u05DE\u05EA\u05E7\u05D9\u05D9\u05DD \u05E4\u05E2\u05E8 \u05E9\u05DC \u05D9\u05D5\u05DD, \u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC\u05D5\u05E9\u05D4 \u05D9\u05DE\u05D9\u05DD. \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05D4\u05DE\u05D5\u05E6\u05D2\u05D9\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05D2\u05E8\u05E4\u05D9\u05DD \u05DE\u05E9\u05E7\u05E4\u05D9\u05DD \u05D0\u05EA \u05D4\u05D6\u05DE\u05DF \u05D4\u05E0\u05EA\u05D5\u05DF \u05D1\u05E8\u05D2\u05E2 \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9 \u05D5\u05DE\u05EA\u05E2\u05D3\u05DB\u05E0\u05D9\u05DD \u05D1\u05E2\u05E8\u05DA \u05D0\u05D7\u05EA \u05DC\u05D7\u05E6\u05D9 \u05E9\u05E2\u05D4.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), __jsx(_Chart__WEBPACK_IMPORTED_MODULE_9__["default"], {
    isHeb: isHeb,
    type: "line",
    labels: worldTime.labels,
    data: worldTime.datasets,
    label: isHeb && 'עולם' || 'World',
    fill: false,
    stops: 3,
    showLegend: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["withTheme"])(CoronaApp));

/***/ })

})
//# sourceMappingURL=index.js.b47282457712e1bdb726.hot-update.js.map