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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_useTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/useTime */ "./utils/useTime.js");
/* harmony import */ var _utils_sortForChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/sortForChart */ "./utils/sortForChart.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Container */ "./components/Container.js");








var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/CaseChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;







var worldTimeData = function worldTimeData() {
  var baseURL, data, dataRes;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function worldTimeData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          baseURL = "http://covid19.borisky.me:3003/api/v1/alltime/";
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(baseURL));

        case 3:
          data = _context.sent;
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(Object(_utils_sortForChart__WEBPACK_IMPORTED_MODULE_11__["default"])(data.data));

        case 6:
          dataRes = _context.sent;
          // .then(res => sortForChart(res.data))
          // .catch(err => console.log(err))
          console.log(dataRes);
          return _context.abrupt("return", dataRes);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var CaseChart = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CaseChart, _React$Component);

  function CaseChart() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CaseChart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CaseChart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      country: '',
      worldData: [],
      countryData: [],
      worldLabels: [],
      countryLabels: [],
      worldCases: [],
      countryCases: [],
      showWorld: true
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CaseChart, [{
    key: "setShowWorld",
    value: function setShowWorld() {
      var showWorld = !this.state.showWorld;
      this.setState({
        showWorld: showWorld
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _ref, timeStats, worldCases;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function componentDidMount$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(worldTimeData());

            case 2:
              _ref = _context2.sent;
              timeStats = _ref.timeStats;
              // const { countryStats } = useTime()
              worldCases = timeStats && timeStats.datasets.filter(function (a) {
                return a.label === 'cases';
              }); // const countryCases = countryStats && countryStats.datasets.filter(a => a.label === 'cases')

              this.setState({
                worldData: timeStats,
                // countryData: countryStats,
                worldCases: worldCases // countryCases

              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      });
    }
  }]);

  return CaseChart;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CaseChart);

/***/ })

})
//# sourceMappingURL=index.js.45b45dc1d80ca4ea5939.hot-update.js.map