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
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Container */ "./components/Container.js");
/* harmony import */ var _HeaderDescription__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HeaderDescription */ "./components/HeaderDescription.js");
/* harmony import */ var _utils_sortForChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/sortForChart */ "./utils/sortForChart.js");
/* harmony import */ var _utils_mapDataForTodayGraph__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/mapDataForTodayGraph */ "./utils/mapDataForTodayGraph.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/CoronaApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      showWorld = _useState[0],
      setTimeData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      country = _useState2[0],
      setCountry = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      inputValue = _useState3[0],
      setInput = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isWorld = _useState4[0],
      setWorld = _useState4[1];

  var url = 'http://covid19.borisky.me:3003/api/v1/';

  var _useTodayStats = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_5__["default"])(url, country),
      todayStats = _useTodayStats.todayStats;

  var _useTime = Object(_utils_useTime__WEBPACK_IMPORTED_MODULE_4__["default"])('world'),
      timeStats = _useTime.timeStats,
      timeError = _useTime.timeError,
      timeLoading = _useTime.timeLoading;

  var _useTime2 = Object(_utils_useTime__WEBPACK_IMPORTED_MODULE_4__["default"])('init'),
      countryStats = _useTime2.countryStats,
      countryLoading = _useTime2.countryLoading,
      countryError = _useTime2.countryError;

  var todayStatsSorted = todayStats && {
    cases: todayStats.cases,
    todayCases: todayStats.todayCases,
    recovered: todayStats.recovered,
    deaths: todayStats.deaths
  } || '';

  var changeData = function changeData(k) {
    return setTimeData(!showWorld);
  };

  var handleChange = function handleChange(e) {
    return setInput(e.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setCountry(inputValue);
  };

  if (timeLoading || timeError) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, " Loading....");
  if (timeError) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, " We've encountered an Error. Maybe you typed wrong country");
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Covid19 Feed"), __jsx(_HeaderDescription__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isWorld: isWorld,
    cn: country || todayStats && todayStats.country,
    timeData: timeStats,
    todayStats: todayStatsSorted,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx(_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      padding: '34px 32px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: changeData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "World"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, " | "), __jsx(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: changeData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, country || 'Israel')), timeStats && __jsx(_Chart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "line",
    labels: showWorld && timeStats.labels || countryStats.labels,
    data: showWorld && timeStats.datasets.filter(function (x) {
      return x.label === 'cases';
    }) || countryStats.datasets.filter(function (x) {
      return x.label === 'cases';
    }),
    label: "Infection Growth - Country/World",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }) || __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, " Loading Charts.............. ")), __jsx("form", {
    style: {
      maxWidth: '520px',
      margin: '54px auto'
    },
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("label", {
    style: {
      fontSize: '16px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Search For Country:"), __jsx("div", {
    style: {
      display: 'flex',
      margin: '0 auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "text",
    value: inputValue,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "submit",
    value: "submit",
    btn: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.3fbc90427988f5039d4b.hot-update.js.map