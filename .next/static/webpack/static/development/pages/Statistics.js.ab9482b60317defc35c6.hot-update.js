webpackHotUpdate("static/development/pages/Statistics.js",{

/***/ "./pages/Statistics.js":
/*!*****************************!*\
  !*** ./pages/Statistics.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_S__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/S */ "./components/S.js");
/* harmony import */ var _components_HeaderDescription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HeaderDescription */ "./components/HeaderDescription.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Table_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Table/Table */ "./components/Table/Table.js");

var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/Statistics.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // import Link from 'next/link'



var baseURL = "https://corona.lmao.ninja/countries";

var Statistics = function Statistics(_ref) {
  var isHeb = _ref.isHeb,
      news = _ref.news;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      rows = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var engHeader = "You are presented with updated data regarding Coronavirus statistics, delivered to you by a great project called Worldometers.";
  var hebHeader = "\u05D1\u05E4\u05E0\u05D9\u05DB\u05DD \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E2\u05D3\u05DB\u05E0\u05D9\u05D9\u05DD \u05D0\u05D5\u05D3\u05D5\u05EA \u05D4\u05E0\u05D2\u05D9\u05E3 \u05D0\u05E9\u05E8 \u05DE\u05D5\u05D1\u05D0\u05D9\u05DD \u05DB\u05D0\u05DF \u05D1\u05E2\u05D6\u05E8\u05EA \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D4\u05E0\u05D4\u05D3\u05E8 \u05D1\u05E9\u05DD worldometers";
  var text = isHeb && hebHeader || engHeader;
  var engHeaders = ['country', 'cases', 'active', 'recovered', 'critical', 'deaths', 'todayDeaths', 'todayCases'];
  var hebHeaders = ['מדינה', 'נדבקים', 'פעילים', 'החלימו', 'קריטי', 'מוות', 'מתו היום', 'מקרים חדשים'];
  var headers = isHeb && hebHeaders || engHeaders;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function fetchData() {
      var _ref2, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('https://corona.lmao.ninja/countries/'));

            case 3:
              _ref2 = _context.sent;
              data = _ref2.data;
              setData(data.map(function (_ref3) {
                var countryInfo = _ref3.countryInfo,
                    country = _ref3.country,
                    cases = _ref3.cases,
                    active = _ref3.active,
                    deaths = _ref3.deaths,
                    recovered = _ref3.recovered,
                    critical = _ref3.critical,
                    todayDeaths = _ref3.todayDeaths,
                    todayCases = _ref3.todayCases;
                return [{
                  flag: countryInfo.flag,
                  country: country
                }, cases, active, deaths, recovered, critical, todayDeaths, todayCases];
              }));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }

    fetchData();
    setLoading(false);
  }, []);
  if (loading) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, " Loading Contents . . .");

  var renderTable = rows && headers && __jsx(_components_Table_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    headings: headers,
    rows: rows,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  });

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_HeaderDescription__WEBPACK_IMPORTED_MODULE_3__["default"], {
    txt: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["FadeIn"], {
    duration: "0.5s",
    delay: "0.1s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, renderTable));
}; //
// Statistics.getInitialProps = async ctx => {
//     const data = await axios
//       .get('https://corona.lmao.ninja/countries/')
//     const news = data
//     return news
// }


/* harmony default export */ __webpack_exports__["default"] = (Statistics);

/***/ })

})
//# sourceMappingURL=Statistics.js.ab9482b60317defc35c6.hot-update.js.map