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
/* harmony import */ var _utils_useTodayStats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useTodayStats */ "./utils/useTodayStats.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Container */ "./components/Container.js");
/* harmony import */ var _HeaderDescription__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeaderDescription */ "./components/HeaderDescription.js");
/* harmony import */ var _utils_sortForChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/sortForChart */ "./utils/sortForChart.js");
/* harmony import */ var _utils_mapDataForTodayGraph__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/mapDataForTodayGraph */ "./utils/mapDataForTodayGraph.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Button */ "./components/Button.js");

var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/CoronaApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












/* harmony default export */ __webpack_exports__["default"] = (function _callee() {
  var _useState, showWorld, setTimeData, _useState2, country, setCountry, _useState3, inputValue, setInput, url, _useTodayStats, todayStats, timeResponse, todayStatsSorted, changeData, handleChange, handleSubmit;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true), showWorld = _useState[0], setTimeData = _useState[1];
          _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''), country = _useState2[0], setCountry = _useState2[1];
          _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''), inputValue = _useState3[0], setInput = _useState3[1];
          url = 'http://covid19.borisky.me:3003/api/v1/';
          _useTodayStats = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_6__["default"])(url, country), todayStats = _useTodayStats.todayStats; // const { timeStats, countryStats, timeError, timeLoading } = useTime(country)

          _context.next = 7;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_utils_useTime__WEBPACK_IMPORTED_MODULE_5__["default"])(country));

        case 7:
          timeResponse = _context.sent;
          console.log(timeResponse);
          todayStatsSorted = todayStats && {
            cases: todayStats.cases,
            todayCases: todayStats.todayCases,
            recovered: todayStats.recovered,
            deaths: todayStats.deaths
          } || '';

          changeData = function changeData(k) {
            return setTimeData(k);
          };

          handleChange = function handleChange(e) {
            return setInput(e.target.value);
          };

          handleSubmit = function handleSubmit(e) {
            e.preventDefault();
            setCountry(inputValue);
          }; // if (timeLoading || timeError) return <div> Loading....</div>
          // if (timeError) return <div> We've encountered an Error. Maybe you typed wrong country</div>
          // const worldCases = timeStats && timeStats.datasets.filter(a => a.label === 'cases')
          // console.log(timeStats && timeStats);


          return _context.abrupt("return", __jsx("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }, "Covid19 Feed"), __jsx(_HeaderDescription__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          }), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_3__["default"], {
            cn: country || todayStats && todayStats.country // timeData={timeStats}
            ,
            todayStats: todayStatsSorted,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }), __jsx(_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
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
              lineNumber: 64
            },
            __self: this
          }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
            onClick: function onClick() {
              return changeData(true);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          }, "World"), __jsx("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          }, " | "), __jsx(_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
            onClick: function onClick() {
              return changeData(false);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
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
              lineNumber: 88
            },
            __self: this
          }, __jsx("label", {
            style: {
              fontSize: '16px'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }, "Search For Country:"), __jsx("div", {
            style: {
              display: 'flex',
              margin: '0 auto'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          }, __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
            type: "text",
            value: inputValue,
            onChange: handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          }), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
            type: "submit",
            value: "submit",
            btn: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          })))));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, this, null, Promise);
});

/***/ })

})
//# sourceMappingURL=index.js.ee977ebde5b4f38cbe06.hot-update.js.map