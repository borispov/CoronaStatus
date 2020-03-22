webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CoronaApp.js":
/*!*********************************!*\
  !*** ./components/CoronaApp.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./components/Input.js");
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Stats */ "./components/Stats.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _utils_useTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useTime */ "./utils/useTime.js");
/* harmony import */ var _utils_worldTimeData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/worldTimeData */ "./utils/worldTimeData.js");
/* harmony import */ var _utils_useTodayStats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useTodayStats */ "./utils/useTodayStats.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Container */ "./components/Container.js");
/* harmony import */ var _HeaderDescription__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HeaderDescription */ "./components/HeaderDescription.js");
/* harmony import */ var _utils_sortForChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/sortForChart */ "./utils/sortForChart.js");
/* harmony import */ var _utils_mapDataForTodayGraph__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/mapDataForTodayGraph */ "./utils/mapDataForTodayGraph.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/CoronaApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















var worldTimeData2 = function worldTimeData2() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function worldTimeData2$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_14___default.a.get(baseURL).then(function (res) {
            return Object(_utils_sortForChart__WEBPACK_IMPORTED_MODULE_11__["default"])(res.data);
          })["catch"](function (err) {
            return setError(err);
          }));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      showWorld = _useState[0],
      setShowWorld = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      country = _useState2[0],
      setCountry = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      inputValue = _useState3[0],
      setInput = _useState3[1];

  var url = 'http://covid19.borisky.me:3003/api/v1/';

  var _useTodayStats = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_7__["default"])(url, country),
      todayStats = _useTodayStats.todayStats;

  var _useTime = Object(_utils_useTime__WEBPACK_IMPORTED_MODULE_5__["default"])(country),
      countryStats = _useTime.countryStats,
      error = _useTime.error,
      loading = _useTime.loading;

  var timeStats = worldTimeData2(); // , timeError, timeLoading }

  console.log(timeStats && timeStats);
  var todayStatsSorted = todayStats && {
    cases: todayStats.cases,
    todayCases: todayStats.todayCases,
    recovered: todayStats.recovered,
    deaths: todayStats.deaths
  } || '';

  var changeData = function changeData(k) {
    return setShowWorld(k);
  };

  var handleChange = function handleChange(e) {
    return setInput(e.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setCountry(inputValue);
  };

  if (loading) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, " Loading....");
  if (error) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, " We've encountered an Error. Maybe you typed wrong country"); // const worldCases = timeStats && timeStats.datasets.filter(a => a.label === 'cases')
  // console.log(worldCases);
  // const countryCases = countryStats && countryStats.datasets.filter(a => a.label === 'cases')

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Covid19 Feed"), __jsx(_HeaderDescription__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cn: country || todayStats && todayStats.country,
    todayStats: todayStatsSorted,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
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
      lineNumber: 74
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: function onClick() {
      return setShowWorld(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "World"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, " | "), __jsx(_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: function onClick() {
      return setShowWorld(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, country || 'Israel'))), __jsx("form", {
    style: {
      maxWidth: '520px',
      margin: '54px auto'
    },
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("label", {
    style: {
      fontSize: '16px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Search For Country:"), __jsx("div", {
    style: {
      display: 'flex',
      margin: '0 auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "text",
    value: inputValue,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "submit",
    value: "submit",
    btn: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.095025fb3a37c934332d.hot-update.js.map