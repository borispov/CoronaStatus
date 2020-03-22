webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/StatBlock.js":
/*!*********************************!*\
  !*** ./components/StatBlock.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/StatBlock.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font: 'Helvetica';\n  text-decoration: underline;\n  letter-spacing: 1px;\n  color: ", ";\n  margin-bottom: '8px';\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  margin: 0;\n  padding: 16px 12px;\n  background: ", ";\n  font-size: 18px;\n  text-align: center;\n  border-radius: 6px;\n  align-content: center;\n  justify-content: space-between;\n  // box-shadow: 0 1px 12px 2px rgba(20,20,20,0.1);\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Block = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (props) {
  return props.theme.bgColor;
}, function (props) {
  return props.theme.color;
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3(_templateObject2(), function (props) {
  return props.theme.textColor;
});

var StatBlock = function StatBlock(_ref) {
  var title = _ref.title,
      data = _ref.data;
  return __jsx(Block, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, title, ":"), __jsx("span", {
    style: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '12px 0 0 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, data));
};

/* harmony default export */ __webpack_exports__["default"] = (StatBlock);

/***/ })

})
//# sourceMappingURL=index.js.2e7cb04feae452033dce.hot-update.js.map