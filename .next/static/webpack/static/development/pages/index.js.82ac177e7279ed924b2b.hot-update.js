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
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./S */ "./components/S.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_sortForChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/sortForChart */ "./utils/sortForChart.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Spinner */ "./components/Spinner.js");








var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/CaseChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var baseURL = "https://nCorona.live/api/v1/alltime/";

var worldTimeData = function worldTimeData() {
  var data, dataRes;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function worldTimeData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(baseURL));

        case 2:
          data = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(Object(_utils_sortForChart__WEBPACK_IMPORTED_MODULE_11__["default"])(data.data));

        case 5:
          dataRes = _context.sent;
          console.log(dataRes);
          return _context.abrupt("return", dataRes);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

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
      worldLabels: [],
      worldCases: [],
      deathCases: [],
      newCases: [],
      showWorld: true,
      loading: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CaseChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var timeStats, worldCases, deathCases, newCases, worldLabels;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function componentDidMount$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.setState({
                loading: true
              });
              _context2.prev = 1;
              _context2.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(worldTimeData());

            case 4:
              timeStats = _context2.sent;
              worldCases = timeStats && timeStats.datasets.filter(function (a) {
                return a.label === 'cases';
              });
              deathCases = timeStats && timeStats.datasets.filter(function (a) {
                return a.label === 'deaths';
              });
              newCases = timeStats && timeStats.datasets.filter(function (a) {
                return a.label === 'new cases';
              });
              worldLabels = timeStats && timeStats.labels;
              this.setState({
                worldData: timeStats,
                worldCases: worldCases,
                deathCases: deathCases,
                newCases: newCases,
                worldLabels: worldLabels,
                loading: false
              });
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](1);
              this.setState({
                loading: false,
                error: _context2.t0
              });

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[1, 12]], Promise);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.loading) {
        return __jsx(_S__WEBPACK_IMPORTED_MODULE_9__["Container"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, "Loading Data . . ."));
      }

      if (this.state.error) {
        return __jsx(_S__WEBPACK_IMPORTED_MODULE_9__["Container"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, ' error occured:' + this.state.error));
      }

      return __jsx(_S__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("p", {
        style: {
          margin: '82px 0 0 0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, this.props.isHeb && 'שיעור התפשטות הנגיף בעולם, מקרי מוות ומסרים מקרים חדשים ליום' || 'Growth Rate of the virus in the world, including deaths and new cases'), this.state.worldData && __jsx(_Chart__WEBPACK_IMPORTED_MODULE_12__["default"], {
        type: "line",
        labels: this.state.worldLabels,
        data: this.state[this.state.dataToPresent],
        label: "Global Statistics",
        theme: this.props.theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }) || __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, " Loading Charts ... "), __jsx("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-evenly',
          marginLeft: '16px',
          padding: '34px 32px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx(_S__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: function onClick() {
          return _this2.present('worldCases');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, this.props.isHeb && 'נדבקים' || 'Cases'), __jsx(_S__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: function onClick() {
          return _this2.present('deathCases');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, this.props.isHeb && 'מקרי מוות' || 'Deaths'), __jsx(_S__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: function onClick() {
          return _this2.present('newCases');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
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
//# sourceMappingURL=index.js.82ac177e7279ed924b2b.hot-update.js.map