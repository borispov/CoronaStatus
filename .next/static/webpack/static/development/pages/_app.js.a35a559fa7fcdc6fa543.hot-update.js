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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Global */ "./pages/Global.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_S__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/S */ "./components/S.js");
/* harmony import */ var _components_Burger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Burger */ "./components/Burger/index.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu/index.js");
/* harmony import */ var _components_Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Icons/ThemeIcon */ "./components/Icons/ThemeIcon.js");
/* harmony import */ var _utils_themes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/themes */ "./utils/themes.js");
/* harmony import */ var _utils_gtag__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/gtag */ "./utils/gtag.js");








var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












next_router__WEBPACK_IMPORTED_MODULE_11___default.a.events.on('routeChangeComplete', function (url) {
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

      var themeButton = isLight && __jsx("div", {
        className: "jsx-3798960801",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx(_components_Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_18__["MoonIcon"], {
        onClick: this.setDarkTheme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), __jsx("span", {
        className: "jsx-3798960801",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Dark Mode"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "3798960801",
        __self: this
      }, "span.jsx-3798960801{color:#191919;font-size:12px;padding:0 2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXlwby9EZXNrdG9wL1Byb2plY3Rvcy9Db3JvbmFTdGF0dXMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRHdCLEFBRytCLGNBQ0MsZUFDRCxjQUNoQiIsImZpbGUiOiIvVXNlcnMvcmF5cG8vRGVza3RvcC9Qcm9qZWN0b3MvQ29yb25hU3RhdHVzL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tICcuL0dsb2JhbCdcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvUydcblxuaW1wb3J0IEJ1cmdlciBmcm9tICcuLi9jb21wb25lbnRzL0J1cmdlcic7XG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnO1xuXG5pbXBvcnQgeyBNb29uSWNvbiwgU3VuSWNvbiwgV29ybGRJY29uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9JY29ucy9UaGVtZUljb24nXG5pbXBvcnQgeyB0aGVtZXMgfSBmcm9tICcuLi91dGlscy90aGVtZXMnXG5pbXBvcnQgKiBhcyBndGFnIGZyb20gJy4uL3V0aWxzL2d0YWcnXG5cblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCB1cmwgPT4gZ3RhZy5wYWdldmlldyh1cmwpKVxuXG5jb25zdCBsaWdodFRoZW1lID0gKCkgPT4gKHtcbiAgLi4udGhlbWVzWydjb21tb24nXSxcbiAgLi4udGhlbWVzWydsaWdodCddLFxufSlcblxuY29uc3QgZGFya1RoZW1lID0gKCkgPT4gKHtcbiAgLi4udGhlbWVzWydjb21tb24nXSxcbiAgLi4udGhlbWVzWydkYXJrJ10sXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG5cbiAgc3RhdGUgPSB7XG4gICAgdGhlbWU6IGxpZ2h0VGhlbWUoKSxcbiAgICBpc0hlYjogdHJ1ZSxcbiAgICBtZW51T3BlbjogZmFsc2VcbiAgfVxuXG4gIHRvZ2dsZU1lbnUgICAgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgbWVudU9wZW46ICF0aGlzLnN0YXRlLm1lbnVPcGVuIH0pXG4gIC8vIHRvZ2dsZUxhbmcgICAgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoeyAuLi5wcmV2U3RhdGUsIGlzSGViOiAhcHJldlN0YXRlLmlzSGViIH0pKVxuICB0b2dnbGVMYW5nICAgID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzSGViOiAhdGhpcy5zdGF0ZS5pc0hlYiB9KVxuICBzZXREYXJrVGhlbWUgID0gKCkgPT4gdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHsgLi4ucHJldlN0YXRlLCB0aGVtZTogZGFya1RoZW1lKCkgfSkpXG4gIHNldExpZ2h0VGhlbWUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoeyAuLi5wcmV2U3RhdGUsIHRoZW1lOiBsaWdodFRoZW1lKCkgfSkpXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIGlzSGViIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgZGlzcGxheUxhbmcgPSBpc0hlYiA/ICdFbmdsaXNoJyA6ICfXoteR16jXmdeqJ1xuICAgIGNvbnN0IGlzTGlnaHQgPSB0aGVtZS50eXBlID09PSAnbGlnaHQnXG4gICAgY29uc3QgdGhlbWVCdXR0b24gPSAoaXNMaWdodCAmJiBcbiAgICAgIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TW9vbkljb24gb25DbGljaz17dGhpcy5zZXREYXJrVGhlbWV9IC8+XG4gICAgICAgICAgICA8c3Bhbj5EYXJrIE1vZGU8L3NwYW4+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTkxOTE5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDJweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpXG4gICAgICB8fCA8U3VuSWNvbiBvbkNsaWNrPXt0aGlzLnNldExpZ2h0VGhlbWV9IC8+XG5cbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPEdsb2JhbFN0eWxlIGlzSGViPXtpc0hlYn0vPlxuICAgICAgICA8SGVhZGVyIHRpdGxlPSduQ29yb25hJyBpc0hlYj17aXNIZWJ9PlxuICAgICAgICAgIDxCdXJnZXIgc2V0T3Blbj17dGhpcy50b2dnbGVNZW51fSBvcGVuPXt0aGlzLnN0YXRlLm1lbnVPcGVufSAvPlxuICAgICAgICAgIDxNZW51IHNldE9wZW49e3RoaXMudG9nZ2xlTWVudX0gb3Blbj17dGhpcy5zdGF0ZS5tZW51T3Blbn0gPlxuICAgICAgICAgICAgeyB0aGVtZUJ1dHRvbiB9XG4gICAgICAgICAgICA8QnV0dG9uIGxhbmdCdG4gb25DbGljaz17dGhpcy50b2dnbGVMYW5nfT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICB7ZGlzcGxheUxhbmd9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBpc0hlYj17aXNIZWJ9Lz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/raypo/Desktop/Projectos/CoronaStatus/pages/_app.js */")) || __jsx(_components_Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_18__["SunIcon"], {
        onClick: this.setLightTheme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      });

      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_12__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx(_Global__WEBPACK_IMPORTED_MODULE_13__["default"], {
        isHeb: isHeb,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "nCorona",
        isHeb: isHeb,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx(_components_Burger__WEBPACK_IMPORTED_MODULE_16__["default"], {
        setOpen: this.toggleMenu,
        open: this.state.menuOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_17__["default"], {
        setOpen: this.toggleMenu,
        open: this.state.menuOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, themeButton, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        langBtn: true,
        onClick: this.toggleLang,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("div", {
        style: {
          display: 'flex',
          alignItems: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, displayLang)))), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        isHeb: isHeb,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_10___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.a35a559fa7fcdc6fa543.hot-update.js.map