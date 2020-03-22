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

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  top: 5%;\n  right: 3%;\n  padding: 0 12px;\n  @media (max-width: 768px) {\n    right: 0%;\n    top: 8%;\n    padding: 0;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: ", ";\n  color: ", ";\n  font-size: 14px;\n  font-weight: 600;\n  padding: 6px 10px;\n  width: 45px;\n  outline: none;\n  text-align: center;\n  border: none;\n  border-radius: 6px;\n  @media (max-width: 768px) {\n    width: 30px;\n    font-size: 12px;\n    font-weight: 400;\n    padding: 4px 6px;\n  }\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: ", ";\n  background-color: ", ";\n  border-radius: 50%;\n  position: absolute;\n  top: ", ";\n  right: ", ";\n  left: ", ";\n  padding: 6px 2px;\n  outline: none;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nwidth: 2rem;\nheight: 2rem;\nmargin-left: auto;\ncursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // import {ReactComponent as MoonSVG} from '../assets/icons/moon.svg'
// import {ReactComponent as SunSVG} from '../assets/icons/sun.svg'

var lightTheme = function lightTheme() {
  return _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_6__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_6__["themes"]['light']);
};

var darkTheme = function darkTheme() {
  return _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_6__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_6__["themes"]['dark']);
};

var ThemeIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject());
var SunIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(SunSVG)(_templateObject2(), ThemeIcon);
var MoonIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(MoonSVG)(_templateObject3(), ThemeIcon);
var Btn = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button(_templateObject4(), function (props) {
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
var LangBtn = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button(_templateObject5(), function (props) {
  return props.theme.searchBgColor;
}, function (props) {
  return props.theme.color;
});
var BtnContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject6());
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

  var setHeb = function setHeb() {
    return setLang('heb');
  };

  var setEng = function setEng() {
    return setLang('eng');
  };

  var isLight = theme.type === 'light';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_Global__WEBPACK_IMPORTED_MODULE_5__["default"], {
    lang: lang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx(_components_CoronaApp__WEBPACK_IMPORTED_MODULE_3__["default"], {
    theme: theme,
    lang: lang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx(BtnContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(LangBtn, {
    style: {
      position: 'relative',
      margin: '0 12px'
    },
    onClick: lang === 'heb' ? setEng : function () {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "En"), __jsx(LangBtn, {
    onClick: lang === 'eng' ? setHeb : function () {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "\u05E2\u05D1\u05E8"))));
}

/***/ })

})
//# sourceMappingURL=index.js.da4e9e114a7894b02613.hot-update.js.map