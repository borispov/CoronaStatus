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
      _args2 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function useTime$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          url = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : baseURL;
          // const [timeStats, setData] = useState();
          // const [countryStats, setCountryStats] = useState();
          // const [timeLoading, setLoading] = useState(false);
          // const [timeError, setError] = useState(false);
          // const [geo, setGeo] = useState('')
          // useEffect(() => {
          //   console.log('inside Geo Location Effect');
          //   let geoLocation = currentCountry()
          //   setGeo(geoLocation)
          // }, [])
          // async function fetchData(cn) {
          //   setLoading(true)
          //   setError()
          //
          //   const URL = cn === 'world' ? baseURL : baseURL + country || geo
          //   const data = await axios.get(URL)
          //     .then(res => res.data)
          //     .catch(err => setError(err))
          //   const timeStats = sortForChart(data);
          //   setData(timeStats)
          //   setLoading(false)
          // }
          // useEffect(() => {
          //   console.log('inside World effect');
          //   fetchData('world')
          // }, [])
          // useEffect(() => {
          //   console.log('inside Country Effect');
          //   fetchData(country);
          // }, [country])
          console.log(countryStats);
          return _context2.abrupt("return", {});

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
}

/* harmony default export */ __webpack_exports__["default"] = (useTime);

/***/ })

})
//# sourceMappingURL=index.js.7c59982bf4ba0ebaaf8f.hot-update.js.map