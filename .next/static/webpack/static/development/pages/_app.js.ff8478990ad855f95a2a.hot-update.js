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
/* harmony import */ var _public_world_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/world.svg */ "./public/world.svg");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Global */ "./pages/Global.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_S__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/S */ "./components/S.js");
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
      isHeb: true
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
          lineNumber: 41
        },
        __self: this
      }) || __jsx(_components_Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_16__["SunIcon"], {
        onClick: this.setLightTheme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
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
          lineNumber: 45
        },
        __self: this
      }, __jsx(_Global__WEBPACK_IMPORTED_MODULE_13__["default"], {
        isHeb: isHeb,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "nCorona",
        isHeb: isHeb,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, themeButton, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        langBtn: true,
        onClick: this.toggleLang,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx(_public_world_svg__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), displayLang)), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        isHeb: isHeb,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);



/***/ }),

/***/ "./public/world.svg":
/*!**************************!*\
  !*** ./public/world.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M35.432 10.815l.047.361-.541.112-.072.769h.648l.862-.083.445-.529-.473-.184-.259-.298-.389-.63-.186-.891-.731.149-.205.314v.354l.352.241z"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M34.809 11.111l.039-.482-.429-.185-.6.139-.445.714v.463h.519zM22.459 13.158l-.132.34h-.639v.33h.152l.022.162.392-.033.245-.152.064-.307.317-.027.125-.258-.291-.06-.255.005zM20.812 13.757l-.025.323.463-.039.048-.324-.278-.219z"
});

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M48.619 24.061a24.552 24.552 0 00-.11-2.112 24.165 24.165 0 00-1.609-6.62c-.062-.155-.119-.312-.185-.465a24.341 24.341 0 00-4.939-7.441 24.19 24.19 0 00-1.11-1.086A24.22 24.22 0 0024.312 0c-6.345 0-12.126 2.445-16.46 6.44a24.6 24.6 0 00-2.78 3.035A24.18 24.18 0 000 24.312c0 13.407 10.907 24.313 24.313 24.313 9.43 0 17.617-5.4 21.647-13.268a24.081 24.081 0 002.285-6.795c.245-1.381.379-2.801.379-4.25.001-.084-.004-.167-.005-.251zm-4.576-9.717l.141-.158c.185.359.358.724.523 1.094l-.23-.009-.434.06v-.987zm-3.513-4.242l.004-1.086c.382.405.75.822 1.102 1.254l-.438.652-1.531-.014-.096-.319.959-.487zM11.202 7.403v-.041h.487l.042-.167h.797v.348l-.229.306h-1.098l.001-.446zm.778 1.085s.487-.083.529-.083 0 .486 0 .486l-1.098.069-.209-.25.778-.222zm33.612 9.651h-1.779l-1.084-.807-1.141.111v.696h-.361l-.39-.278-1.976-.501v-1.28l-2.504.195-.776.417h-.994l-.487-.049-1.207.67v1.261l-2.467 1.78.205.76h.5l-.131.724-.352.129-.019 1.892 2.132 2.428h.928l.056-.148h1.668l.481-.445h.946l.519.52 1.41.146-.187 1.875 1.565 2.763-.824 1.575.056.742.649.647v1.784l.852 1.146v1.482h.736c-4.096 5.029-10.33 8.25-17.305 8.25C12.009 46.625 2 36.615 2 24.312c0-3.097.636-6.049 1.781-8.732v-.696l.798-.969c.277-.523.574-1.033.891-1.53l.036.405-.926 1.125a22.14 22.14 0 00-.798 1.665v1.27l.927.446v1.765l.889 1.517.723.111.093-.52-.853-1.316-.167-1.279h.5l.211 1.316 1.233 1.799-.318.581.784 1.199 1.947.482v-.315l.779.111-.074.556.612.112.945.258 1.335 1.521 1.705.129.167 1.391-1.167.816-.055 1.242-.167.76 1.688 2.113.129.724s.612.166.687.166c.074 0 1.372.983 1.372.983v3.819l.463.13-.315 1.762.779 1.039-.144 1.746 1.029 1.809 1.321 1.154 1.328.024.13-.427-.976-.822.056-.408.175-.5.037-.51-.66-.02-.333-.418.548-.527.074-.398-.612-.175.036-.37.872-.132 1.326-.637.445-.816 1.391-1.78-.316-1.392.427-.741 1.279.039.861-.682.278-2.686.955-1.213.167-.779-.871-.279-.575-.943-1.965-.02-1.558-.594-.074-1.111-.52-.909-1.409-.021-.814-1.278-.723-.353-.037.39-1.316.078-.482-.671-1.373-.279-1.131 1.307-1.78-.302-.129-2.006-1.299-.222.521-.984-.149-.565-1.707 1.141-1.074-.131-.383-.839.234-.865.592-1.091 1.363-.69 2.632-.001-.007.803.946.44-.075-1.372.682-.686 1.376-.904.094-.636 1.372-1.428 1.459-.808-.129-.106.988-.93.362.096.166.208.375-.416.092-.041-.411-.058-.417-.139v-.4l.221-.181h.487l.223.098.193.39.236-.036v-.034l.068.023.684-.105.097-.334.39.098v.362l-.362.249h.001l.053.397 1.239.382.003.015.285-.024.019-.537-.982-.447-.056-.258.815-.278.036-.78-.852-.519-.056-1.315-1.168.574h-.426l.112-1.001-1.59-.375-.658.497v1.516l-1.183.375-.474.988-.514.083v-1.264l-1.112-.154-.556-.362-.224-.819 1.989-1.164.973-.296.098.654.542-.028.042-.329.567-.081.01-.115-.244-.101-.056-.348.697-.059.421-.438.023-.032.005.002.128-.132 1.465-.185.648.55-1.699.905 2.162.51.28-.723h.945l.334-.63-.668-.167v-.797l-2.095-.928-1.446.167-.816.427.056 1.038-.853-.13-.131-.574.817-.742-1.483-.074-.426.129-.185.5.556.094-.111.556-.945.056-.148.37-1.371.038s-.038-.778-.093-.778l1.075-.019.817-.798-.446-.223-.593.576-.984-.056-.593-.816h-1.261l-1.316.983h1.206l.11.353-.313.291 1.335.037.204.482-1.503-.056-.073-.371-.945-.204-.501-.278-1.125.009A22.188 22.188 0 0124.312 2c5.642 0 10.797 2.109 14.73 5.574l-.265.474-1.029.403-.434.471.1.549.531.074.32.8.916-.369.151 1.07h-.276l-.752-.111-.834.14-.807 1.14-1.154.181-.167.988.487.115-.141.635-1.146-.23-1.051.23-.223.585.182 1.228.617.289 1.035-.006.699-.063.213-.556 1.092-1.419.719.147.708-.64.132.5 1.742 1.175-.213.286-.785-.042.302.428.483.106.566-.236-.012-.682.251-.126-.202-.214-1.162-.648-.306-.861h.966l.309.306.832.717.035.867.862.918.321-1.258.597-.326.112 1.029.583.64 1.163-.02c.225.579.427 1.168.604 1.769l-.121.112zm-32.331-7.093l.584-.278.528.126-.182.709-.57.181-.36-.738zm3.099 1.669v.459h-1.334l-.5-.139.125-.32.641-.265h.876v.265h.192zm.614.64v.445l-.334.215-.416.077v-.737h.75zm-.376-.181v-.529l.459.418-.459.111zm.209 1.07v.433l-.319.32h-.709l.111-.486.335-.029.069-.167.513-.071zm-1.766-.889h.737l-.945 1.321-.39-.209.084-.556.514-.556zm3.018.737v.432h-.709l-.194-.28v-.402h.056l.847.25zm-.655-.594l.202-.212.341.212-.273.225-.27-.225zm28.55 5.767l.07-.082c.029.126.06.252.088.38l-.158-.298z"
});

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M3.782 14.884v.696c.243-.568.511-1.122.798-1.665l-.798.969z"
});

function SvgWorld(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 48.625,
    height: 48.625
  }, props), _ref, _ref2, _ref3, _ref4);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgWorld);

/***/ })

})
//# sourceMappingURL=_app.js.ff8478990ad855f95a2a.hot-update.js.map