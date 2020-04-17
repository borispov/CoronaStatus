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
/* harmony import */ var _hooks_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useTranslation */ "./hooks/useTranslation.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/Coffee.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var paypalMe = 'https://paypal.me/BPov/';
var paypalDonate = 'https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=boristofu%40gmail.com&item_name=donations+for+maintaining+informational+website+regarding+Coronavirus&currency_code=USD&source=url&amount=';
var koFi = 'https://ko-fi.com/borispov';
var Message = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_components_S__WEBPACK_IMPORTED_MODULE_1__["Heading"]).withConfig({
  displayName: "Coffee__Message",
  componentId: "wfmxm6-0"
})(["font-size:16px;background:", ";color:", ";width:fit-content;margin:0 auto;padding:6px 12px;border-radius:8px;margin-top:28px;"], function (props) {
  return props.theme.primaryLight;
}, function (props) {
  return props.theme.onPrimary;
});
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "Coffee__Text",
  componentId: "wfmxm6-1"
})(["text-align:start;padding:4px;font-size:12px;color:", ";margin-top 16px;line-height:1.65;li{padding:6px;}"], function (props) {
  return props.theme.text.secondary;
});
var Heading2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_components_S__WEBPACK_IMPORTED_MODULE_1__["Heading"]).withConfig({
  displayName: "Coffee__Heading2",
  componentId: "wfmxm6-2"
})(["margin-top:14px;font-size:1.6rem;color:", ";"], function (props) {
  return props.theme.color;
});
var Box = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Coffee__Box",
  componentId: "wfmxm6-3"
})(["max-width:620px;width:100%;padding:12px;height:auto;margin:0 auto;background:", "DD;"], function (props) {
  return props.theme.bgColor;
});
var BoxButtons = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Coffee__BoxButtons",
  componentId: "wfmxm6-4"
})(["margin:6px;padding:8px;> button{margin-left:12px;}"]);
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Coffee__Flex",
  componentId: "wfmxm6-5"
})(["display:flex;"]);
var BoxFlex = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Flex).withConfig({
  displayName: "Coffee__BoxFlex",
  componentId: "wfmxm6-6"
})(["margin-top:24px;flex-direction:column;justify-content:space-between;margin-left:auto;margin-right:auto;> div{margin:6px;}> div > button{margin:4px 18px;}@media (min-width:660px){justify-content:space-around;}"]);
var BoxCount = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Coffee__BoxCount",
  componentId: "wfmxm6-7"
})(["display:inline-block;vertical-align:middle;padding:16px;text-align:center;font-size:22px;font-weight:500;margin-left:18px;margin-right:18px;width:80px;height:64px;border:1px solid ", ";background:", ";border-radius:4px;color:", ";border-bottom:4px solid gray;border-top:4px solid gray;border-right:1px solid gray;border-left:1px solid gray;position:relative;text-shadow:0px 1px 3px rgba(0,0,0,0.16) 1px 2px 4px rgba(0,0,0,0.26);"], function (props) {
  return props.theme.color;
}, function (props) {
  return props.theme.bgColor;
}, function (props) {
  return props.theme.color;
});
var ErrorText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "Coffee__ErrorText",
  componentId: "wfmxm6-8"
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

  var _useTranslation = Object(_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(2),
      counter = _useState[0],
      setCounter = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      error = _useState2[0],
      setError = _useState2[1];

  var instructions = function instructions(ins) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ol", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, ins.map(function (opt, index) {
      return __jsx("li", {
        key: index + 'instruction',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, opt);
    })));
  };

  var instructionToRender = instructions(t('instructions', 'coffeePage'));

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
      lineNumber: 163
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    textAlign: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["FadeIn"], {
    duration: "0.5s",
    delay: "0.1s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, t('heading', 'coffeePage')), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Paragraph"], {
    color: theme.color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, isHeb ? hebText : engText), __jsx(Heading2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, t('farewell', 'coffeePage')), __jsx(Box, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx(BoxButtons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
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
      lineNumber: 173
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
      lineNumber: 174
    },
    __self: this
  }, "-"), __jsx(BoxCount, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, counter, "$")), __jsx(ErrorText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, error ? t('error', 'coffeePage') : '')), __jsx(BoxButtons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx(BoxFlex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx("a", {
    style: {
      cursor: 'pointer',
      padding: 'inherit',
      margin: 'inherit',
      textDecoration: 'none',
      color: 'inherit'
    },
    href: koFi,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    pointer: true,
    link: true,
    hoverUp: true,
    hoverColor: "primaryLight",
    bg: "primaryColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, isHeb ? 'עם ko-fi' : 'via ko-fi.com (recommended)')), __jsx("a", {
    style: {
      cursor: 'pointer',
      padding: 'inherit',
      margin: 'inherit',
      textDecoration: 'none',
      color: 'inherit'
    },
    href: paypalDonate + counter,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    link: true,
    pointer: true,
    bg: "primaryVariant",
    hoverUp: true,
    hoverColor: "primaryLight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, isHeb ? 'עם PayPal' : 'PayPal Donate'))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    pointer: true,
    bg: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
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
      lineNumber: 206
    },
    __self: this
  }, isHeb ? 'חזור' : 'Back')))))), __jsx(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, instructionToRender))));
}));

/***/ })

})
//# sourceMappingURL=Coffee.js.2a54cc2bcbf29fb8f8e3.hot-update.js.map