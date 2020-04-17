webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./hooks/useTranslation.js":
/*!*********************************!*\
  !*** ./hooks/useTranslation.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTranslation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_LocaleContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/LocaleContext */ "./context/LocaleContext.js");
/* harmony import */ var _locales_translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locales/translations */ "./locales/translations.js");
var defaultLocale = 'he';



function useTranslation() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_LocaleContext__WEBPACK_IMPORTED_MODULE_1__["LocaleContext"]),
      locale = _useContext.locale;

  var t = function t(key, key2) {
    if (!_locales_translations__WEBPACK_IMPORTED_MODULE_2__["strings"][locale][key] || !_locales_translations__WEBPACK_IMPORTED_MODULE_2__["strings"][locale][key2][key]) {
      console.warn("Translation '".concat(key, "' for locale '").concat(locale, "' not found."));
    }

    if (!key2) {
      return _locales_translations__WEBPACK_IMPORTED_MODULE_2__["strings"][locale][key] || _locales_translations__WEBPACK_IMPORTED_MODULE_2__["strings"][defaultLocale][key] || '';
    }

    return _locales_translations__WEBPACK_IMPORTED_MODULE_2__["strings"][locale][key2][key] || _locales_translations__WEBPACK_IMPORTED_MODULE_2__["strings"][defaultLocale][key2][key] || '';
  };

  return {
    t: t,
    locale: locale
  };
}

/***/ })

})
//# sourceMappingURL=_app.js.400bebf0701e6af69791.hot-update.js.map