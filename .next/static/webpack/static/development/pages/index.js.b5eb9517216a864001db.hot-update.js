webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CoronaApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CoronaApp */ "./components/CoronaApp.js");
/* harmony import */ var _components_InfoSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/InfoSection */ "./components/InfoSection.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_S__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/S */ "./components/S.js");
/* harmony import */ var _utils_useWorldData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useWorldData */ "./utils/useWorldData.js");
/* harmony import */ var _context_proxy_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/proxy-context */ "./context/proxy-context.js");

var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










function IndexPage(_ref) {
  var isHeb = _ref.isHeb,
      newProxy = _ref.newProxy,
      worldTime = _ref.worldTime,
      yesterdayGlobal = _ref.yesterdayGlobal;
  console.log(isHeb);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_proxy_context__WEBPACK_IMPORTED_MODULE_9__["ProxyContext"]),
      proxy = _useContext[0],
      setProxy = _useContext[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var ignore = false;

    if (newProxy && !ignore) {
      setProxy(newProxy);
    }

    return function () {
      ignore: true;
    };
  }, [newProxy]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "nCorona - Novel Coronavirus Statistics & Resources for Coping")), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_7__["FadeIn"], {
    delay: "0.5s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_components_CoronaApp__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isHeb: isHeb,
    userLocation: proxy.countryName,
    worldTime: worldTime,
    yesterdayGlobal: yesterdayGlobal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(_components_InfoSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })));
}

IndexPage.getInitialProps = function _callee(ctx) {
  var worldTime, globalData, yesterdayGlobal;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_utils_useWorldData__WEBPACK_IMPORTED_MODULE_8__["default"])());

        case 2:
          worldTime = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://corona.lmao.ninja/v2/all?yesterday=true'));

        case 5:
          globalData = _context.sent;
          yesterdayGlobal = {
            active: globalData.data.active,
            critical: globalData.data.critical,
            cases: globalData.data.cases,
            todayCases: globalData.data.todayCases,
            recovered: globalData.data.recovered,
            deaths: globalData.data.deaths,
            country: globalData.data.country,
            affectedCountries: globalData.data.affectedCountries
          };
          return _context.abrupt("return", {
            yesterdayGlobal: yesterdayGlobal,
            worldTime: worldTime
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.b5eb9517216a864001db.hot-update.js.map