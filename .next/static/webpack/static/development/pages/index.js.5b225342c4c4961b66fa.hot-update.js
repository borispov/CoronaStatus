webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/HeaderDescription.js":
/*!*****************************************!*\
  !*** ./components/HeaderDescription.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/HeaderDescription.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: block;\n  width: 620px;\n  max-width: 620px;\n  margin: 0 auto 24px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: ", ";\n  font-size: 14px;\n  font-family: 'Open Sans';\n  line-height: 1.6;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Text = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject(), function (props) {
  return props.theme.categoryColor;
});
var Wrap = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return __jsx(Wrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, children));
});

/***/ }),

/***/ "./utils/themes.js":
/*!*************************!*\
  !*** ./utils/themes.js ***!
  \*************************/
/*! exports provided: themes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return themes; });
var themes = {
  common: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
  },
  light: {
    type: 'light',
    bgColor: 'rgb(250, 250, 252)',
    headerBg: 'rgb(250, 250, 252)',
    color: '#3E4C59',
    searchBgColor: '#E4E7EB',
    boxShadow: '0.8rem 0.8rem 1.5rem gray',
    categoryColor: '#999',
    categoryHoverColor: '#333'
  },
  dark: {
    type: 'dark',
    bgColor: '#1F2933',
    headerBg: '#3d444b',
    color: '#E4E7EB',
    searchBgColor: '#E4E7EB',
    boxShadow: '0.4rem 0.4rem 1.5rem #111111',
    categoryColor: '#CBD2D9',
    categoryHoverColor: '#9AA5B1',
    textColor: '#eee'
  }
};

/***/ })

})
//# sourceMappingURL=index.js.5b225342c4c4961b66fa.hot-update.js.map