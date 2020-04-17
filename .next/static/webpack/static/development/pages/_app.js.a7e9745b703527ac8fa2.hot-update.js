webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _context_LocaleContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/LocaleContext */ "./context/LocaleContext.js");
/* harmony import */ var _context_proxy_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../context/proxy-context */ "./context/proxy-context.js");
/* harmony import */ var _hooks_useOutSide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/useOutSide */ "./hooks/useOutSide.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Global */ "./pages/Global.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_Burger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Burger */ "./components/Burger/index.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu/index.js");
/* harmony import */ var _utils_themes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/themes */ "./utils/themes.js");
/* harmony import */ var _utils_gtag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/gtag */ "./utils/gtag.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");



var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















var getCountryFromData = function getCountryFromData(response) {
  return response.data.country;
};

var currentCountry = function currentCountry(url) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function currentCountry$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(url).then(getCountryFromData)["catch"](function (e) {
            return 'israel';
          }));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

next_router__WEBPACK_IMPORTED_MODULE_5___default.a.events.on('routeChangeComplete', function (url) {
  return _utils_gtag__WEBPACK_IMPORTED_MODULE_17__["pageview"](url);
});

var lightTheme = function lightTheme() {
  return _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_16__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_16__["themes"]['light']);
};

var darkTheme = function darkTheme() {
  return _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_16__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_16__["themes"]['dark']);
};

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      newProxy = _ref.newProxy;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(lightTheme()),
      theme = _useState[0],
      setTheme = _useState[1];

  var setDarkTheme = function setDarkTheme() {
    closeMenu(), setTheme(darkTheme());
  };

  var setLightTheme = function setLightTheme() {
    closeMenu(), setTheme(lightTheme());
  };

  var isLight = theme.type === 'light';
  return __jsx(_context_proxy_context__WEBPACK_IMPORTED_MODULE_10__["ProxyContextProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_7__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_Global__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(_context_LocaleContext__WEBPACK_IMPORTED_MODULE_9__["LocaleProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_18__["default"], {
    newProxy: newProxy,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    isHeb: isHeb,
    newProxy: newProxy,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))))));
}

MyApp.getInitialProps = function _callee(appContext) {
  var appProps, proxyUrl, req, ipAddress, localAddresses, countryName, newProxy;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(next_app__WEBPACK_IMPORTED_MODULE_4___default.a.getInitialProps(appContext));

        case 2:
          appProps = _context2.sent;
          req = appContext.ctx && appContext.ctx.req;

          if (!req) {
            _context2.next = 19;
            break;
          }

          // grab client's ip address
          ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
          localAddresses = ['::1', '127.0.0.1', 'localhost']; // Construct URL with IP ADDRESS

          if (!localAddresses.includes(ipAddress)) {
            proxyUrl = "https://extreme-ip-lookup.com/json/".concat(ipAddress);
          }

          _context2.prev = 8;
          _context2.next = 11;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(currentCountry(proxyUrl));

        case 11:
          countryName = _context2.sent;
          newProxy = {
            countryName: countryName,
            ipAddress: ipAddress
          };
          return _context2.abrupt("return", _objectSpread({
            newProxy: newProxy
          }, appProps));

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](8);
          return _context2.abrupt("return", _objectSpread({
            errorCode: _context2.t0.code,
            errorMessage: _context2.t0.message
          }, appProps));

        case 19:
          return _context2.abrupt("return", _objectSpread({}, appProps, {
            newProxy: null
          }));

        case 20:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[8, 16]], Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.a7e9745b703527ac8fa2.hot-update.js.map