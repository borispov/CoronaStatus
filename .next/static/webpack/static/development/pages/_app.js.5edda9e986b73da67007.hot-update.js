webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./context/proxy-context.js":
/*!**********************************!*\
  !*** ./context/proxy-context.js ***!
  \**********************************/
/*! exports provided: ProxyContext, ProxyContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyContext", function() { return ProxyContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyContextProvider", function() { return ProxyContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/context/proxy-context.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var ProxyContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
var ProxyContextProvider = function ProxyContextProvider(props) {
  var initialState = {
    ipAddress: 'localhost',
    countryName: 'israel'
  }; // Declare shareable proxy state

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState),
      proxy = _useState[0],
      setProxy = _useState[1];

  var prev = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // Read and Write Proxy State to Local Storage

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (proxy.countryName == 'israel') {
      var localState = JSON.parse(localStorage.getItem('ip2proxy'));

      if (localState) {
        console.info('reading local storage');
        prev.current = localState.ipAddress;
        setProxy(localState);
      }
    } else if (prev.current !== proxy.ipAddress) {
      console.info('writing local storage');
      localStorage.setItem('ip2proxy', JSON.stringify(proxy));
    }
  }, [proxy]);
  return __jsx(ProxyContext.Provider, {
    value: [proxy, setProxy],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, props.children);
};

/***/ })

})
//# sourceMappingURL=_app.js.5edda9e986b73da67007.hot-update.js.map