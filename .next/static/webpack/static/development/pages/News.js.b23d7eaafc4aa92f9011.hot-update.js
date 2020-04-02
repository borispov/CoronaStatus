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

var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/News.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "News__Wrapper",
  componentId: "sc-1dpkj34-0"
})(["margin:0 auto;width:100%;direction:ltr;"]);
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "News__Flex",
  componentId: "sc-1dpkj34-1"
})(["display:flex;flex-direction:column;margin:0 auto;"]);
var NewsCard = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "News__NewsCard",
  componentId: "sc-1dpkj34-2"
})(["margin:8px 12px;display:flex;flex-direction:row;padding:16px 6px;border:1px solid gray;justify-content:space-between;"]);
var LeftWing = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "News__LeftWing",
  componentId: "sc-1dpkj34-3"
})(["display:flex;"]);
var RightWing = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "News__RightWing",
  componentId: "sc-1dpkj34-4"
})(["display:flex;flex-direction:column;justify-content:flex-end;"]);
var NewsTime = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "News__NewsTime",
  componentId: "sc-1dpkj34-5"
})(["font-weight:700;"]);
var NewsBanner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "News__NewsBanner",
  componentId: "sc-1dpkj34-6"
})(["width:48px;height:48px;display:block;border:1px solid gray;"]);
var Col = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "News__Col",
  componentId: "sc-1dpkj34-7"
})(["display:flex;flex-direction:column;align-items:start;"]); // const sortIsoDateToRecent = 

var News = function News(_ref) {
  var theme = _ref.theme,
      isHeb = _ref.isHeb,
      news = _ref.news;
  console.log(news);

  var newsToTemplate = function newsToTemplate(news) {
    news.map(function (item) {
      return __jsx(NewsCard, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx(NewsBanner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("img", {
        src: item.image,
        alt: item.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        column: true,
        alignItems: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Heading2"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, item.title), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, item.contentSnippet))), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        justify: "flex-end",
        column: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Heading2"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, item.data)));
    });
  };

  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(NewsCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(LeftWing, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(NewsBanner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx(Col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Heading2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Breaking News"), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Coronavirus has affectd millions of families leaving mothers and fathers unemployed having to feed their kids mouths"))), __jsx(RightWing, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Heading2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, " 9 days ago "))), __jsx(NewsCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(LeftWing, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(NewsBanner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx(Col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(NewsTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Breaking News"), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["Paragraph"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Coronavirus has affectd millions of families leaving mothers and fathers unemployed having to feed their kids mouths"))), __jsx(RightWing, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(NewsTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, " 9 days ago "))))));
};

News.getInitialProps = function _callee(ctx) {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://ncorona.live/api/v1/news/heb'));

        case 2:
          data = _context.sent;
          console.log(data);
          return _context.abrupt("return", data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ })

})
//# sourceMappingURL=News.js.b23d7eaafc4aa92f9011.hot-update.js.map