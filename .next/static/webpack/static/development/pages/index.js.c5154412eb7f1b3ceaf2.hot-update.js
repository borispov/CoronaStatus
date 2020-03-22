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
/* harmony import */ var _utils_mapDataForTodayGraph__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/mapDataForTodayGraph */ "./utils/mapDataForTodayGraph.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
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

  var url = 'http://covid19.borisky.me:3003/api/v1/';

  var _useTodayStats = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_6__["default"])(url, country),
      todayStats = _useTodayStats.todayStats;

  var _useTime = Object(_utils_useTime__WEBPACK_IMPORTED_MODULE_4__["default"])(country),
      countryStats = _useTime.countryStats,
      error = _useTime.error,
      loading = _useTime.loading;

  var _worldTimeData = Object(_utils_worldTimeData__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      timeStats = _worldTimeData.timeStats,
      timeError = _worldTimeData.timeError,
      timeLoading = _worldTimeData.timeLoading;

  var todayStatsSorted = todayStats && {
    cases: todayStats.cases,
    todayCases: todayStats.todayCases,
    recovered: todayStats.recovered,
    deaths: todayStats.deaths
  } || '';

  var changeData = function changeData(k) {
    return setTimeData(k);
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
      lineNumber: 44
    },
    __self: this
  }, " Loading....");
  if (error) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, " We've encountered an Error. Maybe you typed wrong country");
  var worldCases = timeStats && timeStats.datasets.filter(function (a) {
    return a.label === 'cases';
  });
  var countryCases = countryStats && countryStats.datasets.filter(function (a) {
    return a.label === 'cases';
  });
  console.log(countryStats && countryCases);
  console.log(worldCases && worldCases);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Covid19 Feed"), __jsx(_HeaderDescription__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cn: country || todayStats && todayStats.country // timeData={timeStats}
    ,
    todayStats: todayStatsSorted,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
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
      lineNumber: 66
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: function onClick() {
      return changeData(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "World"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, " | "), __jsx(_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: function onClick() {
      return changeData(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, country || 'Israel')), timeStats && __jsx(_Chart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "line",
    labels: showWorld && timeStats.labels || countryStats.labels,
    data: showWorld && worldCases || countryCases,
    dataZ: showWorld && timeStats.datasets.filter(function (x) {
      return x.label === 'cases';
    }) || countryStats.datasets.filter(function (x) {
      return x.label === 'cases';
    }),
    label: "Infection Growth - Country/World",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }) || __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
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
      lineNumber: 95
    },
    __self: this
  }, __jsx("label", {
    style: {
      fontSize: '16px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Search For Country:"), __jsx("div", {
    style: {
      display: 'flex',
      margin: '0 auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "text",
    value: inputValue,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "submit",
    value: "submit",
    btn: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }))));
});

/***/ }),

/***/ "./utils/worldTimeData.js":
/*!********************************!*\
  !*** ./utils/worldTimeData.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sortForChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortForChart */ "./utils/sortForChart.js");




var baseURL = "http://46.101.156.51:3003/api/v1/alltime/";

function worldTimeData() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      timeStats = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      timeLoading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      timeError = _useState3[0],
      setError = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function fetchData(cn) {
      var data, sortedData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              setError();
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(URL).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return setError(err);
              }));

            case 4:
              data = _context.sent;
              sortedData = Object(_sortForChart__WEBPACK_IMPORTED_MODULE_3__["default"])(data);
              setData(sortedData);
              setLoading(false);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }

    fetchData();
  }, []);
  return {
    timeStats: timeStats,
    timeLoading: timeLoading,
    timeError: timeError
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useTime);

/***/ })

})
//# sourceMappingURL=index.js.c5154412eb7f1b3ceaf2.hot-update.js.map