webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CaseChart.js":
/*!*********************************!*\
  !*** ./components/CaseChart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_useTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/useTime */ "./utils/useTime.js");
/* harmony import */ var _utils_sortForChart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/sortForChart */ "./utils/sortForChart.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Container */ "./components/Container.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");








var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/CaseChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;








var baseURL = "http://covid19.borisky.me:3003/api/v1/alltime/";

var countryTimeData = function countryTimeData(cn) {
  var loc, data, dataRes;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function countryTimeData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('fetchinGGGGG');
          _context.t0 = cn;

          if (_context.t0) {
            _context.next = 6;
            break;
          }

          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(currentCountry());

        case 5:
          _context.t0 = _context.sent;

        case 6:
          loc = _context.t0;
          _context.next = 9;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(baseURL + loc));

        case 9:
          data = _context.sent;
          _context.next = 12;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(Object(_utils_sortForChart__WEBPACK_IMPORTED_MODULE_12__["default"])(data.data));

        case 12:
          dataRes = _context.sent;
          return _context.abrupt("return", dataRes);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var worldTimeData = function worldTimeData() {
  var data, dataRes;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function worldTimeData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(baseURL));

        case 2:
          data = _context2.sent;
          _context2.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(Object(_utils_sortForChart__WEBPACK_IMPORTED_MODULE_12__["default"])(data.data));

        case 5:
          dataRes = _context2.sent;
          return _context2.abrupt("return", dataRes);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
};

function currentCountry() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function currentCountry$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('https://extreme-ip-lookup.com/json/').then(function (res) {
            return res.data.country;
          })["catch"](function (e) {
            return 'israel';
          }));

        case 2:
          return _context3.abrupt("return", _context3.sent);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, null, Promise);
}

var CaseChart = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CaseChart, _React$Component);

  function CaseChart(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CaseChart);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CaseChart).call(this, props));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "present", function (val) {
      return _this.setState({
        dataToPresent: val
      });
    });

    _this.state = {
      dataToPresent: 'worldCases',
      worldData: [],
      countryData: [],
      worldLabels: [],
      countryLabels: [],
      worldCases: [],
      deathCases: [],
      newCases: [],
      countryCases: [],
      showWorld: true,
      loading: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CaseChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var timeStats, countryStats, worldCases, deathCases, newCases, countryCases, countryLabels, worldLabels, worldDeaths;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function componentDidMount$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              this.setState({
                loading: true
              });
              console.log(this.props);
              _context4.prev = 2;
              _context4.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(worldTimeData());

            case 5:
              timeStats = _context4.sent;
              _context4.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(countryTimeData(this.props.country));

            case 8:
              countryStats = _context4.sent;
              worldCases = timeStats && timeStats.datasets.filter(function (a) {
                return a.label === 'cases';
              });
              deathCases = timeStats && timeStats.datasets.filter(function (a) {
                return a.label === 'deaths';
              });
              newCases = timeStats && timeStats.datasets.filter(function (a) {
                return a.label === 'new cases';
              });
              countryCases = countryStats && countryStats.datasets.filter(function (a) {
                return a.label === 'cases';
              });
              countryLabels = countryStats && countryStats.labels;
              worldLabels = timeStats && timeStats.labels;
              worldDeaths = timeStats && timeStats.datasets.filter(function (a) {
                return a.label === 'deaths';
              });
              this.setState({
                worldData: timeStats,
                countryData: countryStats,
                worldCases: worldCases,
                deathCases: deathCases,
                newCases: newCases,
                countryCases: countryCases,
                worldLabels: worldLabels,
                countryLabels: countryLabels,
                loading: false
              });
              _context4.next = 22;
              break;

            case 19:
              _context4.prev = 19;
              _context4.t0 = _context4["catch"](2);
              this.setState({
                loading: false,
                error: _context4.t0
              });

            case 22:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, [[2, 19]], Promise);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.loading) {
        return __jsx(_Container__WEBPACK_IMPORTED_MODULE_14__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, "Loading Data . . ."));
      }

      if (this.state.error) {
        return __jsx(_Container__WEBPACK_IMPORTED_MODULE_14__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, this.state.error));
      } // console.log(this.state.worldCases);


      return __jsx(_Container__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("p", {
        style: {
          margin: '82px 0 0 0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, this.props.isHeb && 'שיעור התפשטות הנגיף בעולם, מקרי מוות ומסרים מקרים חדשים ליום' || 'Growth Rate of the virus in the world, including deaths and new cases'), this.state.worldData && __jsx(_Chart__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "line",
        labels: this.state.worldLabels,
        data: this.state[this.state.dataToPresent],
        label: "Global Statistics",
        theme: this.props.theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }) || __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, " Loading Charts ... "), __jsx("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-around',
          padding: '34px 32px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: function onClick() {
          return _this2.present('worldCases');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, this.props.isHeb && 'נדבקים' || 'Cases'), __jsx(_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: function onClick() {
          return _this2.present('deathCases');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, this.props.isHeb && 'מקרי מוות' || 'Deaths'), __jsx(_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: function onClick() {
          return _this2.present('newCases');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, this.props.isHeb && 'מקרים חדשים' || 'New cases')));
    }
  }]);

  return CaseChart;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CaseChart);

/***/ })

})
//# sourceMappingURL=index.js.a05da9eb45df2dce2f8d.hot-update.js.map