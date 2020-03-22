webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/useTime.js":
/*!**************************!*\
  !*** ./utils/useTime.js ***!
  \**************************/
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

function currentCountry() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function currentCountry$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://extreme-ip-lookup.com/json/').then(function (res) {
            return res.data.country;
          })["catch"](function (e) {
            return 'israel';
          }));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
} // function useTime(loc, url = baseURL) {


function useTime(loc) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      countryStats = _useState[0],
      setCountryStats = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      error = _useState3[0],
      setError = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      country = _useState4[0],
      setCountry = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function fetchData(cn) {
      var geoLocation, URL, data, timeStats;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setLoading(true);
              setError();

              if (!(!country || !country.length)) {
                _context2.next = 7;
                break;
              }

              _context2.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(currentCountry());

            case 5:
              geoLocation = _context2.sent;
              setCountry(geoLocation);

            case 7:
              URL = baseURL + country;
              _context2.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(URL).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return setError(err);
              }));

            case 10:
              data = _context2.sent;
              timeStats = Object(_sortForChart__WEBPACK_IMPORTED_MODULE_3__["default"])(data);
              setCountryStats(timeStats);
              setLoading(false);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    }

    fetchData(country);
  }, [country]);
  return {
    countryStats: countryStats,
    loading: loading,
    error: error
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useTime);

/***/ })

})
//# sourceMappingURL=index.js.2f0551e9ea3da8cb553c.hot-update.js.map