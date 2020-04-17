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
/* harmony import */ var _hooks_useTranslation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useTranslation.js */ "./hooks/useTranslation.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/QuickStats/QuickStats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // utils

var formatNumber = function formatNumber(x) {
  return x.toString().split('').reverse().map(function (x, i) {
    return i % 3 === 0 ? x + ',' : x;
  }).reverse().join('').slice(0, -1);
};

var isPercentDown = function isPercentDown(x) {
  return x < 0;
};

var showPercent = function showPercent(x) {
  return x !== 0;
};

var calcDiff = function calcDiff(current) {
  return function (prev) {
    return current !== 0 ? ((current - prev) / prev * 100).toFixed(2) : 0;
  };
}; // Percentage of increase = |100 - 150|/100 = 50/100 = 0.5 = 50%


var labels = {
  cases: {
    heb: 'מאומתים',
    eng: 'Confirmed'
  },
  todayCases: {
    heb: 'מקרים חדשים',
    eng: 'New Cases'
  },
  deaths: {
    heb: 'נפטרו',
    eng: 'Deaths'
  },
  recovered: {
    heb: 'החלימו',
    eng: 'Recovered'
  },
  active: {
    heb: 'פעילים',
    eng: 'Active'
  },
  affectedCountries: {
    heb: 'מדינות נגועות',
    eng: 'Infected Countries'
  }
};

var engLbl = function engLbl(k) {
  return labels[k]['eng'];
};

var hebLbl = function hebLbl(k) {
  return labels[k]['heb'];
};

var putLabel = function putLabel(heb, k) {
  return heb && hebLbl(k) || engLbl(k);
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var S = _ref.S,
      country = _ref.country,
      isHeb = _ref.isHeb,
      yday = _ref.yday,
      _ref$comparison = _ref.comparison,
      comparison = _ref$comparison === void 0 ? true : _ref$comparison;
  return __jsx(_S__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_QuickStats_styled__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    world: country.toLowerCase() === 'world',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, Object.keys(S).map(function (k, i) {
    return __jsx(_QuickStats_styled__WEBPACK_IMPORTED_MODULE_2__["Column"], {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(_QuickStats_styled__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, " ", putLabel(isHeb, k)), __jsx(_QuickStats_styled__WEBPACK_IMPORTED_MODULE_2__["InRow"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx(_QuickStats_styled__WEBPACK_IMPORTED_MODULE_2__["Number"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, S[k] && formatNumber(S[k]), comparison && yday && country !== 'world' && country !== 'World' && __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "(", formatNumber(yday[k]), ")")), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), comparison && yday && __jsx(_QuickStats_styled__WEBPACK_IMPORTED_MODULE_2__["Percentage"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, calcDiff(S[k])(yday[k]) < 0 && "\u2B07" || "\u2B06"), "%", Math.abs(calcDiff(S[k])(yday[k])))));
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.d182d2c1adc0363a141c.hot-update.js.map