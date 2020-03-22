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
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _utils_useTodayStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useTodayStats */ "./utils/useTodayStats.js");
/* harmony import */ var _utils_useTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useTime */ "./utils/useTime.js");
/* harmony import */ var _StatBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StatBlock */ "./components/StatBlock.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Spinner */ "./components/Spinner.js");
/* harmony import */ var _Bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Bar */ "./components/Bar.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");

var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Stats.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: space-evenly;\n  background-color: ", ";\n  border-radius: 4px;\n  & > div {\n    background-color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-width: 760px;\n  margin: 24px auto 0;\n  text-align: center;\n  margin-top: 16px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Container = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject2(), function (props) {
  return props.bg || '';
}, function (props) {
  return props.bg || '';
});
function Stats(_ref) {
  var _ref$cn = _ref.cn,
      cn = _ref$cn === void 0 ? '' : _ref$cn,
      todayWorld = _ref.todayWorld,
      todayStats = _ref.todayStats,
      isHeb = _ref.isHeb;
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, todayStats && __jsx("div", {
    style: {
      border: '1px solid rgba(255, 60, 60, 0.022)',
      borderRadius: '6px',
      marginBottom: '16px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("h1", {
    style: {
      fontSize: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, isHeb && 'המצב ב: ' || 'Status for: ', __jsx("span", {
    style: {
      fontWeight: 'bold',
      textDecoration: 'underline'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, " ", cn)), __jsx(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: isHeb && 'נדבקים' || "Infected",
    data: todayStats.cases,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: isHeb && 'החלימו' || "Recovered",
    data: todayStats.recovered,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: isHeb && 'מקרי מוות' || "Total Deaths",
    data: todayStats.deaths,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: isHeb && 'מקרים חדשים' || "New Cases Today",
    data: todayStats.todayCases,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))) || todayWorld && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("h1", {
    style: {
      fontSize: '20px',
      backgroundColor: 'beige',
      paddingTop: '18px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, isHeb && 'המצב ב: ' || 'Status for: ', __jsx("span", {
    style: {
      fontWeight: 'bold',
      textDecoration: 'underline'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, " ", cn)), __jsx(Flex, {
    bg: "beige",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: isHeb && 'נדבקים' || "Infected",
    data: todayWorld.cases,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.bab96e279f16cf7d61de.hot-update.js.map