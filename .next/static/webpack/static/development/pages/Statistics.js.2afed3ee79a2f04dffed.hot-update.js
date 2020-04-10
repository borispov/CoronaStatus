webpackHotUpdate("static/development/pages/Statistics.js",{

/***/ "./components/Table/Cell.js":
/*!**********************************!*\
  !*** ./components/Table/Cell.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Table/Cell.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Cell = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].td.withConfig({
  displayName: "Cell",
  componentId: "h1tosf-0"
})(["border:2px solid ", ";padding:10px 18px ", ";font-size:", ";max-width:200px;font-family:'Rubik';font-weight:", ";background:", ";color:", ";font-weight:500;text-overflow:ellipsis:span{padding-right:4px;margin-right:4px;}> *{padding:2px;}"], function (props) {
  return props.theme.error2 + '33';
}, function (_ref) {
  var country = _ref.country;
  return country ? '10px 0' : '10px 18px';
}, function (props) {
  return props.country ? '12px' : '14px';
}, function (props) {
  return props.color === 'active2' && 'bold' || props.color === 'successDefault' && 'bold' || 500;
}, function (props) {
  return props.theme.primaryDark;
}, function (props) {
  return props.theme[props.color] || props.theme.onPrimary;
});
var CellHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].th.withConfig({
  displayName: "Cell__CellHeader",
  componentId: "h1tosf-1"
})(["font-size:14px;font-weight:bold;border-color:1px solid ", ";box-shadow:", ";padding:8px;position:sticky;top:0;background:", ";color:", ";"], function (props) {
  return props.theme.text.primary;
}, function (props) {
  return props.theme.shadows[1];
}, function (props) {
  return props.theme.primaryLight;
}, function (props) {
  return props.theme.onPrimary;
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var content = _ref2.content,
      header = _ref2.header,
      cellColor = _ref2.cellColor,
      country = _ref2.country;
  var cellMarkup = header ? __jsx(CellHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, content) : __jsx(Cell, {
    color: cellColor,
    country: country,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, content);
  return cellMarkup;
});

/***/ })

})
//# sourceMappingURL=Statistics.js.2afed3ee79a2f04dffed.hot-update.js.map