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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Container */ "./components/Container.js");


var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Stats.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  margin-top: 32px;\n  display: flex;\n  justify-content: space-evenly;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var Flex = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
function Stats(_ref) {
  var _ref$cn = _ref.cn,
      cn = _ref$cn === void 0 ? '' : _ref$cn,
      isWorld = _ref.isWorld,
      timeData = _ref.timeData,
      todayWorld = _ref.todayWorld,
      todayStats = _ref.todayStats;

  var renderTimeGraph = timeData && __jsx(_Chart__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "line"
  }, timeData, {
    label: isWorld && 'World' + '\'s Outbreak Over Time',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })) || __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, " Loading Time Graph ... ");

  console.log(todayStats);
  return __jsx(_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h1", {
    style: {
      fontSize: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Status for:   ", __jsx("span", {
    style: {
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, cn)), todayStats && __jsx("div", {
    style: {
      border: '1px solid rgba(255, 60, 60, 0.12)',
      borderRadius: '6px',
      marginBottom: '16px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_Chart__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "bar",
    info: todayStats,
    label: cn + '\'s Outbreak',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Infected",
    data: todayStats.cases,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Recovered",
    data: todayStats.recovered,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Total Deaths",
    data: todayStats.deaths,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "New Cases Today",
    data: todayStats.todayCases,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))), renderTimeGraph);
}

/***/ })

})
//# sourceMappingURL=index.js.19e74f44a590c7f504cf.hot-update.js.map