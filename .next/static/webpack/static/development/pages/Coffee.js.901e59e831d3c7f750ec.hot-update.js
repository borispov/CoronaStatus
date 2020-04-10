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




var paypalMe = 'https://paypal.me/BPov/';
var paypalDonate = 'https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=boristofu%40gmail.com&item_name=donations+for+maintaining+informational+website+regarding+Coronavirus&currency_code=USD&source=url&amount=';
var koFi = 'https://ko-fi.com/borispov/';
var Message = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_components_S__WEBPACK_IMPORTED_MODULE_1__["Heading"]).withConfig({
  displayName: "Coffee__Message",
  componentId: "wfmxm6-0"
})(["font-size:16px;background:", ";color:", ";width:fit-content;margin:0 auto;padding:6px 12px;border-radius:8px;margin-top:28px;"], function (props) {
  return props.theme.primaryLight;
}, function (props) {
  return props.theme.onPrimary;
});
var Heading2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_components_S__WEBPACK_IMPORTED_MODULE_1__["Heading"]).withConfig({
  displayName: "Coffee__Heading2",
  componentId: "wfmxm6-1"
})(["margin-top:14px;font-size:1.6rem;color:", ";"], function (props) {
  return props.theme.color;
});
var Box = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Coffee__Box",
  componentId: "wfmxm6-2"
})(["max-width:620px;width:100%;padding:12px;height:auto;margin:0 auto;background:", "DD;"], function (props) {
  return props.theme.bgColor;
});
var BoxButtons = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Coffee__BoxButtons",
  componentId: "wfmxm6-3"
})(["margin:6px;padding:8px;> button{margin-left:12px;}"]);
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Coffee__Flex",
  componentId: "wfmxm6-4"
})(["display:flex;"]);
var BoxFlex = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Flex).withConfig({
  displayName: "Coffee__BoxFlex",
  componentId: "wfmxm6-5"
})(["margin-top:24px;flex-direction:column;justify-content:space-between;margin-left:auto;margin-right:auto;> button{max-width:max-content;}@media (min-width:660px){justify-content:space-around;}"]);
var BoxCount = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Coffee__BoxCount",
  componentId: "wfmxm6-6"
})(["display:inline-block;vertical-align:middle;padding:16px;text-align:center;font-size:22px;font-weight:500;margin-left:18px;margin-right:18px;width:80px;height:64px;border:1px solid ", ";background:", ";border-radius:4px;color:", ";border-bottom:4px solid gray;border-top:4px solid gray;border-right:1px solid gray;border-left:1px solid gray;position:relative;text-shadow:0px 1px 3px rgba(0,0,0,0.16) 1px 2px 4px rgba(0,0,0,0.26);"], function (props) {
  return props.theme.color;
}, function (props) {
  return props.theme.bgColor;
}, function (props) {
  return props.theme.color;
});
var ErrorText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "Coffee__ErrorText",
  componentId: "wfmxm6-7"
})(["font-size:16px;font-weigth:600;font-family:monospace;padding:2px 4px;color:", ";transition:all 0.3s ease-in-out;"], function (props) {
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
      lineNumber: 130
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    textAlign: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["FadeIn"], {
    duration: "0.5s",
    delay: "0.1s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, isHeb && 'תודה רבה' || 'Thank You!'), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Paragraph"], {
    color: theme.color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, isHeb ? hebText : engText), __jsx(Heading2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, isHeb ? farewellHeb : farewellEng), __jsx(Box, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(BoxButtons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
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
      lineNumber: 140
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
      lineNumber: 141
    },
    __self: this
  }, "-"), __jsx(BoxCount, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, counter, "$")), __jsx(ErrorText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, error ? isHeb && errorHeb || errorEng : '')), __jsx(BoxButtons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(BoxFlex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    pointer: true,
    bg: "primaryColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("a", {
    style: {
      textDecoration: 'none',
      color: 'inherit'
    },
    href: paypalDonate + counter,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, isHeb ? 'עם ko-fi' : 'Support via ko-fi.com')), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    pointer: true,
    bg: "primaryVariant",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx("a", {
    style: {
      textDecoration: 'none',
      color: 'inherit'
    },
    href: paypalDonate + counter,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, isHeb ? 'עם PayPal' : 'Support via ko-fi.com'))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    pointer: true,
    bg: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("a", {
    style: {
      textDecoration: 'none',
      color: '#797979',
      marginTop: '32px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, isHeb ? 'חזור' : 'Back')))))))));
}));

/***/ })

})
//# sourceMappingURL=Coffee.js.901e59e831d3c7f750ec.hot-update.js.map