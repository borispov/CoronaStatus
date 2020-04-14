webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/QuickStats.js":
/*!**********************************!*\
  !*** ./components/QuickStats.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./S */ "./components/S.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/QuickStats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var formatNumber = function formatNumber(x) {
  return x.toString().split('').reverse().map(function (x, i) {
    return i % 3 === 0 ? x + ',' : x;
  }).reverse().join('').slice(0, -1);
};

var Column = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "QuickStats__Column",
  componentId: "lmgi17-0"
})(["display:flex;flex-flow:column wrap;direction:", ";align-items:start;width:100%;background:#fafafa;padding:16px 3em 12px;border-radius:2px;border-bottom:1px solid #e4e7eb;@media (min-width:660px){box-shadow:none;border:1px solid #e4e7eb;height:auto;flex:1 0 ", ";}&:last-child{border-bottom:none;}"], function (props) {
  return props.ltr ? 'ltr' : 'rtl';
}, function (props) {
  return props.world ? '249px' : '235px';
});
var InRow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "QuickStats__InRow",
  componentId: "lmgi17-1"
})(["display:flex;flex-flow:row wrap;font-weight:700;color:", ";justify-content:", ";width:100%;line-height:1.45;"], function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.justify || 'space-between';
});
var TheRow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "QuickStats__TheRow",
  componentId: "lmgi17-2"
})(["display:flex;flex-flow:column wrap;justify-content:center;box-shadow:", ";margin-bottom:28px;border-radius:8px;border:1px solid #e4e7eb;margin-left:auto;margin-right:auto;@media (min-width:660px) and (max-width:920px){max-width:620px;flex-flow:", ";}@media (min-width:921px) and (max-width:1023px){max-width:", ";flex-flow:", ";}@media (min-width:1024px){max-width:1064px;flex-flow:", ";}"], function (props) {
  return props.theme.shadows[1];
}, function (props) {
  return props.world ? 'row wrap' : 'row wrap';
}, function (props) {
  return props.world ? '900px' : '620px';
}, function (props) {
  return props.world ? 'row wrap' : 'row wrap';
}, function (props) {
  return props.world ? 'row wrap' : 'row wrap';
});
var Percentage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "QuickStats__Percentage",
  componentId: "lmgi17-3"
})(["font-size:10px;font-weight:500;color:", ";align-self:flex-end;padding-bottom:2px;border-radius:12px;background:#DFF7EC;padding:0.5em 1em;span{font-family:'Verdana';background:#DFF7EC;color:", ";}@media (min-width:350px){font-size:12px;}"], function (props) {
  return props.theme.text.secondary;
}, function (props) {
  return props.theme.primaryLight;
});
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "QuickStats__Header",
  componentId: "lmgi17-4"
})(["font-size:20px;font-weight:500;color:", ";width:auto;letter-spacing:0.1px;line-height:1.85;@media (min-width:660px) and (max-width:920px){font-size:12px;line-height:1.65;letter-spacing:0.025px;}@media (min-width:921px) and (max-width:1023px){font-size:14px;}@media (min-width:1024px){font-size:16x;}"], function (props) {
  return props.theme.text.primary;
});
var Number = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "QuickStats__Number",
  componentId: "lmgi17-5"
})(["font-size:24px;font-weight:700;color:", ";letter-spacing:1.2px;font-family:'Montserrat';padding:0;margin:0;line-height:1.65;span{font-size:10px;font-family:'Verdana';letter-spacing:0px;color:#717171;margin-left:1em;margin-right:1em;margin-bottom:4px;}@media (min-width:660px) and (max-width:920px){h1{font-size:14px;line-height:1.65;letter-spacing:0.5px;}}@media (min-width:921px) and (max-width:1023px){h1{font-size:12px;letter-spacing:0.8px;}}@media (min-width:1024px){h1{font-size:16px;}}"], function (props) {
  return props.theme.primaryVariant;
});

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
  return __jsx(_S__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx(TheRow, {
    world: country.toLowerCase() === 'world',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, Object.keys(S).map(function (k, i) {
    return __jsx(Column, {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, __jsx(Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, " ", putLabel(isHeb, k)), __jsx(InRow, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, __jsx(Number, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, S[k] && formatNumber(S[k]), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, comparison && country !== 'world' && country !== 'World' && "(".concat(formatNumber(yday[k]), ")"))), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }), comparison && __jsx(Percentage, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, calcDiff(S[k])(yday[k]) < 0 && "\u2B07" || "\u2B06"), "%", Math.abs(calcDiff(S[k])(yday[k])))));
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.10e7cb2a775b1a194d39.hot-update.js.map