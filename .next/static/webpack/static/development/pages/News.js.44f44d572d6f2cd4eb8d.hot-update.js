webpackHotUpdate("static/development/pages/News.js",{

/***/ "./pages/News.js":
/*!***********************!*\
  !*** ./pages/News.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_S__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/S */ "./components/S.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_dateHeb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/dateHeb */ "./utils/dateHeb.js");

var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/News.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var sourceList = {
  maariv: 'מעריב',
  ynet: 'YNET',
  israelhayom: 'ישראל היום'
};
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "News__Wrapper",
  componentId: "sc-1dpkj34-0"
})(["margin:0 auto;width:85%;direction:rtl;@media (max-width:768px){width:100%;max-width:100%;}"]);
var NewsCard = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "News__NewsCard",
  componentId: "sc-1dpkj34-1"
})(["margin:8px 12px;display:flex;flex-direction:row;padding:16px 6px;border:1px solid gray;justify-content:space-between;@media (max-width:768px){width:100%;max-width:100%;flex-direction:column;padding:0;margin:0;}"]);
var NewsBanner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "News__NewsBanner",
  componentId: "sc-1dpkj34-2"
})(["margin-left:42px;width:48px;height:48px;display:block;border:1px solid gray;@media (max-width:768px){margin:0;visibility:hidden;}"]);
var Source = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "News__Source",
  componentId: "sc-1dpkj34-3"
})(["font-size:12px;font-weight:700;padding-bottom:8px;transform:rotate(-15deg);@media (max-width:768px){transform:rotate(0);padding:0;}"]);

var showSource = function showSource(url) {
  return sourceList[url.split('.')[1]];
};

var News = function News(_ref) {
  var theme = _ref.theme,
      isHeb = _ref.isHeb,
      news = _ref.news;

  var newsToTemplate = function newsToTemplate(news) {
    return news.map(function (item, idx) {
      return __jsx(NewsCard, {
        key: idx,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("a", {
        style: {
          textDecoration: 'none'
        },
        href: item.href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx(NewsBanner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("img", {
        width: "64",
        height: "64",
        src: item.image,
        alt: item.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        column: true,
        alignItems: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Heading2"], {
        truncate: true,
        nowrap: true,
        fontSize: "16px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, item.title), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
        padding: "0",
        noMargin: true,
        fontSize: "12px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, item.description)))), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        justify: "space-evenly",
        margin: "12px 0 0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        justify: "center",
        alignItems: true,
        column: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx("a", {
        style: {
          textDecoration: 'none'
        },
        href: item.href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx(Source, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, showSource(item.href)))), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        justify: "flex-end",
        column: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Heading2"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, Object(_utils_dateHeb__WEBPACK_IMPORTED_MODULE_5__["default"])(item.date)))));
    });
  };

  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    column: true,
    justify: "baseline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, newsToTemplate(news))));
};

News.getInitialProps = function _callee(ctx) {
  var _ref2, data, news;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://ncorona.live/api/v1/news/heb'));

        case 2:
          _ref2 = _context.sent;
          data = _ref2.data;
          news = data.data.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
          });
          return _context.abrupt("return", {
            news: news
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ })

})
//# sourceMappingURL=News.js.44f44d572d6f2cd4eb8d.hot-update.js.map