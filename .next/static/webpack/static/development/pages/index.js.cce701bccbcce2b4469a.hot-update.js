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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_CoronaApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CoronaApp */ "./components/CoronaApp.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Global */ "./pages/Global.js");
/* harmony import */ var _utils_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/themes */ "./utils/themes.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_moon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/moon.svg */ "./utils/moon.svg");
/* harmony import */ var _assets_icons_sun_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/sun.svg */ "./assets/icons/sun.svg");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var _components_InfoSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/InfoSection */ "./components/InfoSection.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");

var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var lightTheme = function lightTheme() {
  return _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_4__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_4__["themes"]['light']);
};

var darkTheme = function darkTheme() {
  return _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_4__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_4__["themes"]['dark']);
};

var ThemeIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["width:4rem;height:4rem;margin-left:auto;cursor:pointer;@media (max-width:768px){width:2rem;height:2rem;}"]);
var MoonIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_moon_svg__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "pages__MoonIcon",
  componentId: "sc-1t8jk7a-0"
})(["", " color:lightblue;"], ThemeIcon);
var SunIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_assets_icons_sun_svg__WEBPACK_IMPORTED_MODULE_7__["default"]).withConfig({
  displayName: "pages__SunIcon",
  componentId: "sc-1t8jk7a-1"
})(["", ""], ThemeIcon);
var Btn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "pages__Btn",
  componentId: "sc-1t8jk7a-2"
})(["color:", ";background-color:", ";border-radius:50%;position:absolute;top:", ";right:", ";left:", ";padding:6px 2px;outline:none;"], function (props) {
  return props.theme.bgColor;
}, function (props) {
  return props.theme.color;
}, function (props) {
  return props.top;
}, function (props) {
  return props.right;
}, function (props) {
  return props.left;
});
var LangBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "pages__LangBtn",
  componentId: "sc-1t8jk7a-3"
})(["position:relative;background:", ";color:", ";font-size:14px;font-weight:600;font-family:'Sans';padding:8px 10px;width:100%;outline:none;text-align:center;border:none;border-radius:6px;margin:0 6px;margin-left:16px;@media (max-width:768px){width:30px;font-size:12px;font-weight:400;padding:4px 6px;}"], function (props) {
  return props.theme.bgColor;
}, function (props) {
  return props.theme.color;
});
function IndexPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(lightTheme()),
      theme = _useState[0],
      setTheme = _useState[1];

  var setDarkTheme = function setDarkTheme() {
    return setTheme(darkTheme());
  };

  var setLightTheme = function setLightTheme() {
    return setTheme(lightTheme());
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])('heb'),
      lang = _useState2[0],
      setLang = _useState2[1];

  var setHeb = function setHeb() {
    return setLang('heb');
  };

  var setEng = function setEng() {
    return setLang('eng');
  };

  var isLight = theme.type === 'light';
  var handleLanguage = lang === 'heb' ? setEng : setHeb;

  var themeButton = isLight && __jsx(MoonIcon, {
    onClick: setDarkTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }) || __jsx(SunIcon, {
    onClick: setLightTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  });

  var displayLang = lang === 'heb' ? 'English' : 'עברית';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(_Global__WEBPACK_IMPORTED_MODULE_3__["default"], {
    lang: lang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "C19.FeeD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, themeButton, __jsx(LangBtn, {
    onClick: handleLanguage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, displayLang)), __jsx(_components_CoronaApp__WEBPACK_IMPORTED_MODULE_1__["default"], {
    theme: theme,
    lang: lang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), __jsx(_components_InfoSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.cce701bccbcce2b4469a.hot-update.js.map