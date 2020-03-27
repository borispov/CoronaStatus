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

var ThemeIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["width:3rem;height:3rem;margin-left:auto;cursor:pointer;"]);
var MoonIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_utils_moon_svg__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "pages__MoonIcon",
  componentId: "sc-1t8jk7a-0"
})(["", ""], ThemeIcon);
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
})(["position:relative;background:", ";color:", ";font-size:14px;font-weight:600;padding:6px 10px;width:45px;outline:none;text-align:center;border:none;border-radius:6px;margin:0 6px;@media (max-width:768px){width:30px;font-size:12px;font-weight:400;padding:4px 6px;}"], function (props) {
  return props.theme.bgColor;
}, function (props) {
  return props.theme.color;
});
var BtnContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__BtnContainer",
  componentId: "sc-1t8jk7a-4"
})(["position:absolute;top:5%;right:3%;padding:0 12px;@media (max-width:768px){right:0%;top:8%;padding:0;}"]);
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

  var handleLanguage = function handleLanguage() {
    return lang === 'heb' ? setEng : setHeb;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_Global__WEBPACK_IMPORTED_MODULE_3__["default"], {
    lang: lang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "C19.FeeD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, theme.type === 'light' && __jsx(MoonIcon, {
    onClick: setDarkTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), theme.type === 'dark' && __jsx(SunIcon, {
    onClick: setLightTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  })), __jsx(_components_CoronaApp__WEBPACK_IMPORTED_MODULE_1__["default"], {
    theme: theme,
    lang: lang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx(_components_InfoSection__WEBPACK_IMPORTED_MODULE_10__["default"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), __jsx(BtnContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: handleLanguage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, lang === 'heb' ? 'English' : 'עברית')), __jsx("div", {
    style: {
      position: 'absolute',
      top: '5%',
      left: '2%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.b9c13f329d4d1f5ac1ab.hot-update.js.map