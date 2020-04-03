webpackHotUpdate("static/development/pages/news.js",{

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
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

var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/news.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var sourceList = {
  maariv: 'מעריב',
  ynet: 'YNET',
  israelhayom: 'ישראל היום'
};
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "news__Wrapper",
  componentId: "sc-1bflqvw-0"
})(["margin:0 auto;width:85%;direction:rtl;transition:all .6s ease-in-out;@media (max-width:768px){width:100%;max-width:100%;}"]);
var NewsCard = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "news__NewsCard",
  componentId: "sc-1bflqvw-1"
})(["display:flex;border-radius:6px;border:1px solid ", "CC;border-top:6px solid ", ";flex-direction:column;width:100%;max-width:100%;justify-content:space-between;margin:16px auto;height:auto;@media (max-width:568px){border:1px solid ", ";border-top:6px solid ", ";}"], function (props) {
  return props.theme.menuBorder;
}, function (props) {
  return props.theme.blueTheme;
}, function (props) {
  return props.theme.blueTheme;
}, function (props) {
  return props.theme.blueTheme;
});
var NewsBanner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "news__NewsBanner",
  componentId: "sc-1bflqvw-2"
})(["display:block;margin-left:8px;width:124px;height:auto;border:0;img{width:124px;height:100%;}"]);
var Source = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "news__Source",
  componentId: "sc-1bflqvw-3"
})(["margin-right:24px;width:100%;display:block;text-align:center;font-size:12px;font-weight:700;color:", ";@media (max-width:768px){padding:0;}"], function (props) {
  return props.theme.test;
});
var Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_components_S__WEBPACK_IMPORTED_MODULE_3__["Heading2"]).withConfig({
  displayName: "news__Title",
  componentId: "sc-1bflqvw-4"
})(["font-weight:700;font-family:'Roboto';color:", ";@media (max-width:768px){max-width:fit-content;}"], function (props) {
  return props.theme.color;
});

var shortenSnippet = function shortenSnippet(text) {
  return text.split(' ').slice(0, 40).join(' ') + '. . .';
};

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
          lineNumber: 89
        },
        __self: this
      }, __jsx("a", {
        style: {
          textDecoration: 'none'
        },
        href: item.href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        justify: "flex-start",
        margin: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx(NewsBanner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("img", {
        src: item.image,
        alt: item.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      })), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        column: true,
        flex: "0 1 80%",
        margin: "12px 0px 18px 6px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx(Title, {
        fontSize: "16px",
        color: "#111",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, item.title), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
        padding: "0",
        noMargin: true,
        fontSize: "12px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, shortenSnippet(item.description))))), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        justify: "space-between",
        bgColor: "inverse",
        margin: "0",
        padding: "0 12px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        justify: "center",
        alignItems: "middle",
        column: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("a", {
        style: {
          textDecoration: 'none',
          textAlign: 'center',
          color: 'white'
        },
        href: item.href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx(Source, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, showSource(item.href)))), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        justify: "flex-end",
        column: true,
        alignItems: "middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Heading2"], {
        color: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, Object(_utils_dateHeb__WEBPACK_IMPORTED_MODULE_5__["default"])(item.date)))));
    });
  };

  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    column: true,
    justify: "baseline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["FadeIn"], {
    duration: "3s",
    delay: "0.1s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, newsToTemplate(news)))));
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
//# sourceMappingURL=news.js.6c673f1d709445e33a3f.hot-update.js.map