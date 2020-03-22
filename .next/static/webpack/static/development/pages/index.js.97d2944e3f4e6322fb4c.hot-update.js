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
}

function useTime(country) {
  var url,
      _useState,
      timeStats,
      setData,
      _useState2,
      countryStats,
      setCountryStats,
      _useState3,
      timeLoading,
      setLoading,
      _useState4,
      timeError,
      setError,
      _useState5,
      geo,
      setGeo,
      fetchData,
      _args4 = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function useTime$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          fetchData = function _ref(cn) {
            var URL, data, timeStats;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    setLoading(true);
                    setError();
                    URL = baseURL + geo;
                    console.log(cn);
                    _context3.next = 6;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(URL).then(function (res) {
                      return res.data;
                    })["catch"](function (err) {
                      return setError(err);
                    }));

                  case 6:
                    data = _context3.sent;
                    timeStats = Object(_sortForChart__WEBPACK_IMPORTED_MODULE_3__["default"])(data);
                    console.log(timeStats);
                    setData(timeStats);
                    setLoading(false);

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, null, null, null, Promise);
          };

          url = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : baseURL;
          _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(), timeStats = _useState[0], setData = _useState[1];
          _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(), countryStats = _useState2[0], setCountryStats = _useState2[1];
          _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), timeLoading = _useState3[0], setLoading = _useState3[1];
          _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), timeError = _useState4[0], setError = _useState4[1];
          _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''), geo = _useState5[0], setGeo = _useState5[1];
          Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
            console.log('inside Geo Location Effect');

            (function _callee() {
              var geoLocation;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(currentCountry());

                    case 2:
                      geoLocation = _context2.sent;
                      setGeo(geoLocation);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, null, null, null, Promise);
            })();
          }, []);
          // useEffect(() => {
          //   console.log('inside World effect');
          //   fetchData('world')
          // }, [])
          Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
            console.log('inside Country Effect');
            fetchData(country || geo);
          }, [country]);
          return _context4.abrupt("return", {
            countryStats: countryStats,
            timeStats: timeStats,
            timeLoading: timeLoading,
            timeError: timeError
          });

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, null, Promise);
}

/* harmony default export */ __webpack_exports__["default"] = (useTime);

/***/ })

})
//# sourceMappingURL=index.js.97d2944e3f4e6322fb4c.hot-update.js.map