webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/useYday.js":
/*!**************************!*\
  !*** ./utils/useYday.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useYday; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




var isUSA = function isUSA(s) {
  return s === 'usa' || s === 'Usa' || s === 'United States';
};

var isUK = function isUK(str) {
  return str === 'Uk' || str === 'England' || str === 'United Kingdom' || str == 'great britain';
};

var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
};

var parseCountry = function parseCountry(country) {
  return isUSA(country) ? 'USA' : isUK(country) ? 'UK' : country;
};

function useYday(url, country) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      yesterdayCn = _useState[0],
      setStats = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      error = _useState3[0],
      setError = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function fetchData() {
      var URL, _ref, data, _yesterdayCn;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              setError();
              URL = url + parseCountry(country).toLowerCase();
              _context.prev = 3;
              _context.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(URL + '?yesterday=true'));

            case 6:
              _ref = _context.sent;
              data = _ref.data;
              _yesterdayCn = {
                active: data.active,
                cases: data.cases,
                todayCases: data.todayCases,
                recovered: data.recovered,
                deaths: data.deaths,
                country: data.country
              };
              setStats(_yesterdayCn);
              setLoading(false);
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](3);
              setError(_context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[3, 13]], Promise);
    }

    fetchData();
  }, [country]);
  return {
    yesterdayCn: yesterdayCn,
    loading: loading,
    error: error
  };
}

/***/ })

})
//# sourceMappingURL=index.js.ffb54e8ad1ec736607fb.hot-update.js.map