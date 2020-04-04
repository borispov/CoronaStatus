webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/StatBlock.js":
/*!*********************************!*\
  !*** ./components/StatBlock.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/StatBlock.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Block = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "StatBlock__Block",
  componentId: "rmn7zo-0"
})(["position:relative;margin:0;padding:16px 12px;font-size:18px;text-align:center;border-radius:6px;align-content:center;justify-content:space-between;color:", ";"], function (props) {
  return props.theme.onBg;
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "StatBlock__Title",
  componentId: "rmn7zo-1"
})(["font:'Helvetica';font-weight:400;text-decoration:underline;letter-spacing:1px;color:", ";margin-bottom:6px;"], function (props) {
  return props.theme.onBg;
});
var Span = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "StatBlock__Span",
  componentId: "rmn7zo-2"
})(["font-size:18px;font-weight:700;margin:12px 0 0 0;color:", ""], function (props) {
  return props.theme.color;
});

var StatBlock = function StatBlock(_ref) {
  var title = _ref.title,
      data = _ref.data;
  return __jsx(Block, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, title, ":"), __jsx(Span, {
    style: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '12px 0 0 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, data));
};

/* harmony default export */ __webpack_exports__["default"] = (StatBlock);

/***/ })

})
//# sourceMappingURL=index.js.98f6ee38ae77eb6f2513.hot-update.js.map