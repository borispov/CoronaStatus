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
/* harmony import */ var _sortExternalApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sortExternalApi */ "./utils/sortExternalApi.js");





var baseURL = "https://nCorona.live/api/v1/alltime/";
var baseURLv2 = 'https://pomber.github.io/covid19/timeseries.json';

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
  var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
      countries = _useState4[0],
      setCountries = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function fetchData(cn) {
      var country, URL, data, timeStats;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setLoading(true);
              setError();
              _context2.t0 = loc;

              if (_context2.t0) {
                _context2.next = 7;
                break;
              }

              _context2.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(currentCountry());

            case 6:
              _context2.t0 = _context2.sent;

            case 7:
              country = _context2.t0;
              URL = baseURL + country;
              _context2.next = 11;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(URL).then(function (res) {
                return res.data;
              })["catch"](function (err) {
                return setError(err);
              }));

            case 11:
              data = _context2.sent;
              // const data = await axios.get(baseURLv2)
              //   .then(res => res.data[country])
              //   .catch(err => setError(err))
              // const timeStats = sortExternalApi(data);
              timeStats = Object(_sortForChart__WEBPACK_IMPORTED_MODULE_3__["default"])(data, theme);
              setCountryStats(timeStats);
              setLoading(false);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    }

    fetchData(loc);
  }, [loc]);
  return {
    countryStats: countryStats,
    loading: loading,
    error: error,
    countries: countries
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useTime);

/***/ })

})
//# sourceMappingURL=index.js.169da37f084f42f8cedb.hot-update.js.map