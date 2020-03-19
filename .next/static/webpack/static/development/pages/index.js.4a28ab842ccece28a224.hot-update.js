webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _utils_useTodayStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useTodayStats */ "./utils/useTodayStats.js");
/* harmony import */ var _utils_useTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useTime */ "./utils/useTime.js");
/* harmony import */ var _StatBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StatBlock */ "./components/StatBlock.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Spinner */ "./components/Spinner.js");
/* harmony import */ var _Bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Bar */ "./components/Bar.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");


var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Stats.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  margin-top: 64px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1.5rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  max-width: 760px;\n  margin: 0 auto;\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var vocab = {
  'cases': 'infected',
  'recovered': 'recovered',
  'country': 'country',
  'deaths': 'deaths',
  'todayCases': 'new today'
};

var prop = function prop(o) {
  return function (k) {
    return o[k];
  };
};

var switchToVocab = function switchToVocab(word) {
  return vocab[word];
};

var Container = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
var Grid = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject2());
function Stats(_ref) {
  var url = _ref.url,
      _ref$cn = _ref.cn,
      cn = _ref$cn === void 0 ? '' : _ref$cn,
      search = _ref.search;

  var _useTodayStats = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_2__["default"])(url, cn),
      todayStats = _useTodayStats.todayStats,
      error = _useTodayStats.error,
      loading = _useTodayStats.loading;

  var _useTime = Object(_utils_useTime__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      worldStats = _useTime.worldStats;

  if (error) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, " We've encountered an Error. Maybe you typed wrong country");
  if (!todayStats) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
  var country = todayStats.country,
      cases = todayStats.cases,
      recovered = todayStats.recovered,
      deaths = todayStats.deaths,
      todayCases = todayStats.todayCases;
  var o = {
    cases: cases,
    todayCases: todayCases,
    recovered: recovered,
    deaths: deaths
  };

  var organizeData = function organizeData(d) {
    var mapToKeyword = function mapToKeyword(k) {
      return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, switchToVocab(k), prop(d)(k));
    };

    return Object.keys(d).map(mapToKeyword);
  };

  var organizedData = organizeData(o);
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("h1", {
    style: {
      fontSize: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Status for:   ", __jsx("span", {
    style: {
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, country)), __jsx(_Chart__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "bar",
    info: organizedData,
    label: country + '\'s Outbreak',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx(Grid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Infected",
    data: cases,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Recovered",
    data: recovered,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Total Deaths",
    data: deaths,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "New Cases Today",
    data: todayCases,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.4a28ab842ccece28a224.hot-update.js.map