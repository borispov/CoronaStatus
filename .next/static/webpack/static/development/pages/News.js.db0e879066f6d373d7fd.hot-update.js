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





var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "News__Wrapper",
  componentId: "sc-1dpkj34-0"
})(["margin:0 auto;width:100%;direction:rtl;"]);
var NewsCard = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "News__NewsCard",
  componentId: "sc-1dpkj34-1"
})(["margin:8px 12px;display:flex;flex-direction:row;padding:16px 6px;border:1px solid gray;justify-content:space-between;"]);
var LeftWing = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "News__LeftWing",
  componentId: "sc-1dpkj34-2"
})(["display:flex;"]);
var RightWing = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "News__RightWing",
  componentId: "sc-1dpkj34-3"
})(["display:flex;flex-direction:column;justify-content:flex-end;"]);
var NewsTime = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "News__NewsTime",
  componentId: "sc-1dpkj34-4"
})(["font-weight:700;"]);
var NewsBanner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "News__NewsBanner",
  componentId: "sc-1dpkj34-5"
})(["margin-left:42px;width:48px;height:48px;display:block;border:1px solid gray;"]);

var News = function News(_ref) {
  var theme = _ref.theme,
      isHeb = _ref.isHeb,
      news = _ref.news;
  console.log(news);

  var newsToTemplate = function newsToTemplate(news) {
    return news.map(function (item, idx) {
      return __jsx(NewsCard, {
        key: idx,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx(NewsBanner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("img", {
        width: "64",
        height: "64",
        src: item.image,
        alt: item.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        column: true,
        alignItems: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("a", {
        style: {
          textDecoration: 'none'
        },
        href: item.href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Heading2"], {
        fontSize: "16px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, item.title)), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
        padding: "0",
        noMargin: true,
        fontSize: "12px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, item.description))), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        justify: "flex-end",
        column: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Heading2"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, Object(_utils_dateHeb__WEBPACK_IMPORTED_MODULE_5__["default"])(item.date))));
    });
  };

  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    column: true,
    justify: "baseline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
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
//# sourceMappingURL=News.js.db0e879066f6d373d7fd.hot-update.js.map