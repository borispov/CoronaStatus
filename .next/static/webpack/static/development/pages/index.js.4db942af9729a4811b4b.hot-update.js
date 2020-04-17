webpackHotUpdate("static/development/pages/index.js",{

/***/ "./context/LocaleContext.js":
/*!**********************************!*\
  !*** ./context/LocaleContext.js ***!
  \**********************************/
/*! exports provided: LocaleContext, LocaleProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleContext", function() { return LocaleContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleProvider", function() { return LocaleProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/context/LocaleContext.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var LocaleContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var LocaleProvider = function LocaleProvider(props) {
  // Default Setting
  var initialState = 'he';

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState),
      locale = _useState[0],
      setLocale = _useState[1];

  var prev = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(locale);

    if (prev.current === undefined && locale === 'he') {
      var readLocal = localStorage.getItem('locale');

      if (readLocal !== 'he') {
        setLocale(readLocal);
        return;
      } else {
        setLocale(readLocal);
      }
    } else {
      localStorage.setItem('locale', locale);
      prev.current = locale;
    }
  }, [locale]);
  return __jsx(LocaleContext.Provider, {
    value: {
      locale: locale,
      setLocale: setLocale
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, props.children);
};

/***/ })

})
//# sourceMappingURL=index.js.4db942af9729a4811b4b.hot-update.js.map