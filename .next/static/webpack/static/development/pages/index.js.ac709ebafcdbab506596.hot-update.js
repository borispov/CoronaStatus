webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/QuickStats/QuickStats.js":
/*!*********************************************!*\
  !*** ./components/QuickStats/QuickStats.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../S */ "./components/S.js");
/* harmony import */ var _QuickStats_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuickStats.styled */ "./components/QuickStats/QuickStats.styled.js");
/* harmony import */ var _QuickStats_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuickStats.utils */ "./components/QuickStats/QuickStats.utils.js");
/* harmony import */ var _hooks_useTranslation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useTranslation.js */ "./hooks/useTranslation.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/QuickStats/QuickStats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Styles

 // utils



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var S = _ref.S,
      country = _ref.country,
      isHeb = _ref.isHeb,
      yday = _ref.yday,
      _ref$comparison = _ref.comparison,
      comparison = _ref$comparison === void 0 ? true : _ref$comparison;

  var _useTranslation = Object(_hooks_useTranslation_js__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      t = _useTranslation.t;

  return __jsx(_S__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_QuickStats_styled__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    world: country.toLowerCase() === 'world',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, Object.keys(S).map(function (k, i) {
    return __jsx(_QuickStats_styled__WEBPACK_IMPORTED_MODULE_2__["Column"], {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(_QuickStats_styled__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, " ", t(k, 'labels')), __jsx(_QuickStats_styled__WEBPACK_IMPORTED_MODULE_2__["InRow"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(_QuickStats_styled__WEBPACK_IMPORTED_MODULE_2__["Number"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, S[k] && _QuickStats_utils__WEBPACK_IMPORTED_MODULE_3__["F"].formatNumber(S[k]), comparison && yday && country !== 'world' && country !== 'World' && __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "(", _QuickStats_utils__WEBPACK_IMPORTED_MODULE_3__["F"].formatNumber(yday[k]), ")")), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), comparison && yday && __jsx(_QuickStats_styled__WEBPACK_IMPORTED_MODULE_2__["Percentage"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, _QuickStats_utils__WEBPACK_IMPORTED_MODULE_3__["F"].calcDiff(S[k])(yday[k]) < 0 && "\u2B07" || "\u2B06"), "%", Math.abs(_QuickStats_utils__WEBPACK_IMPORTED_MODULE_3__["F"].calcDiff(S[k])(yday[k])))));
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.ac709ebafcdbab506596.hot-update.js.map