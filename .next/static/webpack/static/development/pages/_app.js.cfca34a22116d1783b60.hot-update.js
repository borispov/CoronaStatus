webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_S__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/S */ "./components/S.js");
/* harmony import */ var _components_Burger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Burger */ "./components/Burger/index.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu/index.js");
/* harmony import */ var _components_Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Icons/ThemeIcon */ "./components/Icons/ThemeIcon.js");
/* harmony import */ var _utils_themes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/themes */ "./utils/themes.js");
/* harmony import */ var _utils_gtag__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/gtag */ "./utils/gtag.js");
/* harmony import */ var _utils_useOnClickOutside__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/useOnClickOutside */ "./utils/useOnClickOutside.js");








var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















next_router__WEBPACK_IMPORTED_MODULE_10___default.a.events.on('routeChangeComplete', function (url) {
  return _utils_gtag__WEBPACK_IMPORTED_MODULE_20__["pageview"](url);
});

var lightTheme = function lightTheme() {
  return _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_19__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_19__["themes"]['light']);
};

var darkTheme = function darkTheme() {
  return _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_19__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_19__["themes"]['dark']);
};

var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp, _App);

  function MyApp(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp).call(this, props));

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
      return _this.setState({
        isHeb: !_this.state.isHeb
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

    _this.myRef = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
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

      var themeButton = isLight && __jsx(_components_Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_18__["MoonIcon"], {
        onClick: this.setDarkTheme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }) || __jsx(_components_Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_18__["SunIcon"], {
        onClick: this.setLightTheme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
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
          lineNumber: 60
        },
        __self: this
      }, __jsx(_Global__WEBPACK_IMPORTED_MODULE_12__["default"], {
        isHeb: isHeb,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "nCorona",
        isHeb: isHeb,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx(_components_Burger__WEBPACK_IMPORTED_MODULE_16__["default"], {
        setOpen: this.toggleMenu,
        open: this.state.menuOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_17__["default"], {
        setOpen: this.toggleMenu,
        open: this.state.menuOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("a", {
        onClick: isLight ? this.setDarkTheme : this.setLightTheme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, isLight ? '🌒' : '🌞'), isLight ? isHeb && 'מצב לילה' || 'Dark Mode' : isHeb && 'מצב יום' || 'Light Mode'), __jsx("a", {
        onClick: this.toggleLang,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "\uD83C\uDF10"), displayLang), __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: "/News",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("a", {
        alt: "news",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "\uD83D\uDCF0"), isHeb && 'חדשות' || 'News')))), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        isHeb: isHeb,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);



/***/ }),

/***/ "./utils/useOnClickOutside.js":
/*!************************************!*\
  !*** ./utils/useOnClickOutside.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function useOnClickOutside(ref, handler) {
  useEffect(function () {
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
//# sourceMappingURL=_app.js.cfca34a22116d1783b60.hot-update.js.map