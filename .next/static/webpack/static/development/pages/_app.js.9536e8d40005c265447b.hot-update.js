webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Burger/Burger.js":
/*!*************************************!*\
  !*** ./components/Burger/Burger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Burger_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Burger.styled */ "./components/Burger/Burger.styled.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Burger/Burger.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Burger = function Burger() {
  return __jsx(_Burger_styled__WEBPACK_IMPORTED_MODULE_1__["StyledBurger"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Burger);

/***/ }),

/***/ "./components/Burger/Burger.styled.js":
/*!********************************************!*\
  !*** ./components/Burger/Burger.styled.js ***!
  \********************************************/
/*! exports provided: StyledBurger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledBurger", function() { return StyledBurger; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var StyledBurger = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "Burgerstyled__StyledBurger",
  componentId: "sc-2xj2d1-0"
})(["position:absolute;top:5%;left:2rem;display:flex;flex-direction:column;justify-content:space-around;width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;z-index:10;&:focus{outline:none;}div{width:2rem;height:0.25rem;background:", ";border-radius:10px;transition:all 0.3s linear;position:relative;transform-origin:1px;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.bgColor;
});

/***/ }),

/***/ "./components/Burger/index.js":
/*!************************************!*\
  !*** ./components/Burger/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Burger */ "./components/Burger/Burger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Burger__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Global */ "./pages/Global.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_S__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/S */ "./components/S.js");
/* harmony import */ var _components_Burger__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Burger */ "./components/Burger/index.js");
/* harmony import */ var _components_Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Icons/ThemeIcon */ "./components/Icons/ThemeIcon.js");
/* harmony import */ var _utils_themes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/themes */ "./utils/themes.js");
/* harmony import */ var _utils_gtag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/gtag */ "./utils/gtag.js");








var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











next_router__WEBPACK_IMPORTED_MODULE_10___default.a.events.on('routeChangeComplete', function (url) {
  return _utils_gtag__WEBPACK_IMPORTED_MODULE_18__["pageview"](url);
});

var lightTheme = function lightTheme() {
  return _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_17__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_17__["themes"]['light']);
};

var darkTheme = function darkTheme() {
  return _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_17__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_17__["themes"]['dark']);
};

var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp, _App);

  function MyApp() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      theme: lightTheme(),
      isHeb: true,
      menuOpen: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "toggleMenu", function () {
      return _this.setState({
        menuOpen: !_this.state.menuOpen
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "toggleLang", function () {
      return _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          isHeb: !prevState.isHeb
        });
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setDarkTheme", function () {
      return _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          theme: darkTheme()
        });
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setLightTheme", function () {
      return _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          theme: lightTheme()
        });
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          theme = _this$state.theme,
          isHeb = _this$state.isHeb;
      var displayLang = isHeb ? 'English' : 'עברית';
      var isLight = theme.type === 'light';

      var themeButton = isLight && __jsx(_components_Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_16__["MoonIcon"], {
        onClick: this.setDarkTheme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }) || __jsx(_components_Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_16__["SunIcon"], {
        onClick: this.setLightTheme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      });

      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx(_Global__WEBPACK_IMPORTED_MODULE_12__["default"], {
        isHeb: isHeb,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "nCorona",
        isHeb: isHeb,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(Menu, {
        onClick: this.toggleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), __jsx(_components_Burger__WEBPACK_IMPORTED_MODULE_15__["default"], {
        onClick: this.toggleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), themeButton, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        langBtn: true,
        onClick: this.toggleLang,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("div", {
        style: {
          display: 'flex',
          alignItems: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx(_components_Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_16__["WorldIcon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), displayLang))), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        isHeb: isHeb,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.9536e8d40005c265447b.hot-update.js.map