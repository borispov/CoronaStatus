webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/useYday.js":
/*!**************************!*\
  !*** ./utils/useYday.js ***!
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




var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
};

var parseCn = function parseCn(str) {
  return str === 'usa' || str === 'Usa' || str === 'United States' ? 'USA' : str === 'Uk' || str === 'England' || str === 'United Kingdom' || str == 'great britain' ? 'UK' : str.toLowerCase();
};

function getCountry(list) {
  return function (queryCountry) {
    return list.reduce(function (a, c) {
      return c.country === queryCountry ? c : a;
    }, {});
  };
}

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

function useYday(url, country) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      ydayStats = _useState[0],
      setStats = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      error = _useState3[0],
      setError = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function fetchData() {
      var searchCountry, parsedCountry, URL, _ref, data, relevant;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setLoading(true);
              setError();
              _context2.t0 = country;

              if (_context2.t0) {
                _context2.next = 7;
                break;
              }

              _context2.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(currentCountry());

            case 6:
              _context2.t0 = _context2.sent;

            case 7:
              searchCountry = _context2.t0;
              parsedCountry = parseCn(searchCountry);
              URL = url + parsedCountry.toLowerCase(); // const URL = url + (country === 'world' ? '' : searchCountry)

              _context2.prev = 10;
              _context2.next = 13;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(URL + '?yesterday=true'));

            case 13:
              _ref = _context2.sent;
              data = _ref.data;
              console.log(data);
              relevant = {
                active: data.active,
                cases: data.cases,
                todayCases: data.todayCases,
                recovered: data.recovered,
                deaths: data.deaths,
                country: data.country
              };
              setStats(relevant);
              setLoading(false);
              _context2.next = 24;
              break;

            case 21:
              _context2.prev = 21;
              _context2.t1 = _context2["catch"](10);
              setError(_context2.t1);

            case 24:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[10, 21]], Promise);
    }

    fetchData();
  }, [country]);
  return {
    ydayStats: ydayStats,
    loading: loading,
    error: error
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useYday);

/***/ })

})
//# sourceMappingURL=index.js.7b27019a8936445ec232.hot-update.js.map