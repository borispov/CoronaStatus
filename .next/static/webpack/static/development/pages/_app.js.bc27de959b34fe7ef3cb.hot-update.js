webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./utils/useOnClickOutside.js":
/*!************************************!*\
  !*** ./utils/useOnClickOutside.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useOnClickOutside(ref, handler) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var listener = function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return function () {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

/* harmony default export */ __webpack_exports__["default"] = (useOnClickOutside);

/***/ })

})
//# sourceMappingURL=_app.js.bc27de959b34fe7ef3cb.hot-update.js.map