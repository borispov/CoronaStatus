webpackHotUpdate("static/development/pages/Coffee.js",{

/***/ "./pages/Coffee.js":
/*!*************************!*\
  !*** ./pages/Coffee.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_S__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/S */ "./components/S.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/Coffee.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Heading2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_components_S__WEBPACK_IMPORTED_MODULE_1__["Heading"]).withConfig({
  displayName: "Coffee__Heading2",
  componentId: "wfmxm6-0"
})(["margin-top:8px;font-size:1.6rem;color:", ";"], function (props) {
  return props.theme.color;
});
var Box = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Coffee__Box",
  componentId: "wfmxm6-1"
})(["max-width:620px;width:100%;padding:12px;height:auto;margin:0 auto;background:", "DD;"], function (props) {
  return props.theme.bgColor;
});
var BoxButtons = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Coffee__BoxButtons",
  componentId: "wfmxm6-2"
})(["margin:6px;padding:8px;> button{margin-left:24px;}"]);
var BoxCount = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Coffee__BoxCount",
  componentId: "wfmxm6-3"
})(["display:inline-block;vertical-align:middle;padding:16px;text-align:center;font-size:16px;font-weight:400;margin-left:12px;margin-right:12px;width:80px;height:64px;border:1px solid ", ";background:", ";border-radius:4px;color:", ";border-bottom:4px solid gray;border-top:4px solid gray;border-right:1px solid gray;border-left:1px solid gray;position:relative;"], function (props) {
  return props.theme.color;
}, function (props) {
  return props.theme.bgColor;
}, function (props) {
  return props.theme.color;
});
var ErrorText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "Coffee__ErrorText",
  componentId: "wfmxm6-4"
})(["font-size:16px;font-weigth:600;font-family:monospace;padding:2px 4px;color:", ";"], function (props) {
  return props.theme.color;
});
var hebText = 'שלום ותודה רבה לכם על כך שהנכם שוקלים לבצע תרומה עבור החזקת האתר הזה. אתר זה חינמי ופתוח לשימוש כלל הציבור. היני מודה לכם על זמנכם.';
var engText = 'Hello and thank you for considering purchasing me a coffee in such unpleasant times. This website is free for all. As time allows, I\'ll keep updating and adding features.';
var farewellEng = 'Take care of yourself and your beloved ones.';
var farewellHeb = 'שמרו על עצמכם ועל אהובכם';
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(function (_ref) {
  var isHeb = _ref.isHeb,
      theme = _ref.theme;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(2),
      counter = _useState[0],
      setCounter = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      error = _useState2[0],
      setError = _useState2[1];

  var errorHeb = 'אפילו זוג כפפות עולה יותר מדולר';
  var errorEng = 'C\'mon Even a pair of gloves cost more than 1$...';

  var handlePlusClick = function handlePlusClick(c) {
    setCounter(c + 1);
    setError();
  };

  var handleClick = function handleClick(op) {
    var isPlus = op === 'plus';
    var count = counter;
    isPlus && handlePlusClick(count);

    if (!isPlus && counter === 2) {
      setError(true);
      return;
    }

    !isPlus && setCounter(count - 1);
  };

  return __jsx("simpleWrapper", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    textAlign: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["FadeIn"], {
    duration: "0.5s",
    delay: "0.1s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, isHeb && 'תודה רבה' || 'Thank You!'), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Paragraph"], {
    color: theme.color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, isHeb ? hebText : engText), __jsx(Heading2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, isHeb ? farewellHeb : farewellEng), __jsx(Box, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    fontSize: "18px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, !isHeb ? 'Minimum 2$ Coffee' : 'מינימום 2$ קפה שחור'), __jsx(BoxButtons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    bg: "transparent",
    btnColor: "onBg",
    outline: true,
    onClick: function onClick() {
      return handleClick('plus');
    },
    radius: "8px",
    bold: true,
    link: true,
    bgColor: "#218838",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "+"), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    bg: "transparent",
    btnColor: "onBg",
    outline: true,
    onClick: function onClick() {
      return handleClick('minus');
    },
    radius: "8px",
    bold: true,
    link: true,
    bgColor: "#DC3545",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "-"), __jsx(BoxCount, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, counter, "$")), __jsx(ErrorText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, error ? isHeb && errorHeb || errorEng : '')), __jsx(BoxButtons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    pointer: true,
    bg: "successDefault",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("a", {
    style: {
      textDecoration: 'none',
      color: 'inherit'
    },
    href: 'https://paypal.me/BPov/' + counter,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, isHeb ? 'המשך' : 'Support')), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    pointer: true,
    bg: "transparent",
    outline: true,
    btnColor: "primaryColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("a", {
    style: {
      textDecoration: 'none',
      color: 'inherit'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, isHeb ? 'חזור לאתר' : 'Back')))))));
}));

/***/ })

})
//# sourceMappingURL=Coffee.js.297b48686205176e89b5.hot-update.js.map