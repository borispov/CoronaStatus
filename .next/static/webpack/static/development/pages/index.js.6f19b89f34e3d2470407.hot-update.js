webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CoronaApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CoronaApp */ "./components/CoronaApp.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Global */ "./pages/Global.js");
/* harmony import */ var _utils_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/themes */ "./utils/themes.js");


var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: ", ";\n  background-color: ", ";\n  border-radius: 50%;\n  position: absolute;\n  top: 5%\n  left: 2%;\n  padding: 6px 2px;\n  outline: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var lightTheme = function lightTheme() {
  return _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_6__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_6__["themes"]['light']);
};

var darkTheme = function darkTheme() {
  return _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_6__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_6__["themes"]['dark']);
};

var Btn = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button(_templateObject(), function (props) {
  return props.theme.bgColor;
}, function (props) {
  return props.theme.color;
});
function IndexPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(lightTheme()),
      theme = _useState[0],
      setTheme = _useState[1];

  var setDarkTheme = function setDarkTheme() {
    return setTheme(darkTheme());
  };

  var setLightTheme = function setLightTheme() {
    return setTheme(lightTheme());
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('heb'),
      lang = _useState2[0],
      setLang = _useState2[1];

  var isLight = theme.type === 'light';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_Global__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(_components_CoronaApp__WEBPACK_IMPORTED_MODULE_3__["default"], {
    theme: theme,
    lang: lang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(Btn, {
    onClick: lang === 'heb' ? setLang('eng') : setLang('heb'),
    left: "0",
    top: "2%",
    right: "5%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Eng | Heb"), __jsx(Btn, {
    onClick: !isLight ? setLightTheme : setDarkTheme,
    top: "5%",
    left: "1%",
    right: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, !isLight ? 'Light' : 'Dark')));
}

/***/ })

})
//# sourceMappingURL=index.js.6f19b89f34e3d2470407.hot-update.js.map