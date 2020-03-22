webpackHotUpdate("static/development/pages/index.js",{

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




var baseURL = "http://covid19.borisky.me:3003/api/v1/alltime/";

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
              console.log('RUNNINGGGGGG AGAIN');
              setLoading(true);
              setError();
              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(baseURL).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return setError(err);
              }));

            case 5:
              data = _context.sent;
              sortedData = Object(_sortForChart__WEBPACK_IMPORTED_MODULE_3__["default"])(data);
              setData(sortedData);
              setLoading(false);

            case 9:
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

/* harmony default export */ __webpack_exports__["default"] = (worldTimeData);

/***/ })

})
//# sourceMappingURL=index.js.99ff42e045c0dca84bbf.hot-update.js.map