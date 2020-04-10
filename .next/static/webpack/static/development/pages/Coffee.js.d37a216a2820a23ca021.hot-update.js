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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(2),
      counter = _useState[0],
      setCounter = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      error = _useState2[0],
      setError = _useState2[1];

  var errorHeb = 'אפילו זוג כפפות עולה יותר מדולר';
  var errorEng = 'C\'mon Even a pair of gloves cost more than 1$...';
  var instructionsEng = [' via ko-fi.com, you can donate in 2$ increments and leave a message ( Feedback, Suggestions, Feature Request... ). ATTENTION: You can tip without registration to PayPal. Even if you are prompted with Sign up message instead of Pay with Credit Card, just click on sign up and it\'ll first let you to complete the transaction. '];
  var instructionsHeb = ['תרומה דרך ממשק של ko-fi.com. הנכם תהיו מועברים לדף ה״קופי״ שלי, דרכו תוכלו להשאיר טיפ עם הודעה. שימו לב, ניתן לתרום ללא הרשמה! כשתועברו לדף של פייפאל ותתבקשו להירשם, ליחצו על כפתור ההרשמה - אתם תועברו לדף של ביצוע תשלום.', 'העברת טיפ ישירות דרך paypal. תוכלו לבחור כל סכום, אך ללא הודעה. \n* אני ממליץ להשתמש בממשק ko-fi.com. אפשרות התרומה דרך פייפאל מוצגת כאן עבור אלו שאינם מסתדרים עם תשלום דרך ko-fi.com'];

  var instructions = function instructions(ins) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ol", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, ins.map(function (opt, index) {
      return __jsx("li", {
        key: index + 'instruction',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, opt);
    })));
  };

  var instructionToRender = isHeb && instructions(instructionsHeb) || instructions(instructionsEng);

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
      lineNumber: 168
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    textAlign: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["FadeIn"], {
    duration: "0.5s",
    delay: "0.1s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, isHeb && 'תודה רבה' || 'Thank You!'), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Paragraph"], {
    color: theme.color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, isHeb ? hebText : engText), __jsx(Heading2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, isHeb ? farewellHeb : farewellEng), __jsx(Box, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx(BoxButtons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
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
      lineNumber: 178
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
      lineNumber: 179
    },
    __self: this
  }, "-"), __jsx(BoxCount, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, counter, "$")), __jsx(ErrorText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, error ? isHeb && errorHeb || errorEng : '')), __jsx(BoxButtons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx(BoxFlex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    pointer: true,
    hoverUp: true,
    hoverColor: "primaryLight",
    bg: "primaryColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
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
      lineNumber: 194
    },
    __self: this
  }, isHeb ? 'עם ko-fi' : 'Support via ko-fi.com')), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    pointer: true,
    bg: "primaryVariant",
    hoverUp: true,
    hoverColor: "primaryLight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx("a", {
    style: {
      textDecoration: 'none',
      color: 'inherit'
    },
    href: koFi + counter,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, isHeb ? 'עם PayPal' : 'Support via ko-fi.com'))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    pointer: true,
    bg: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
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
//# sourceMappingURL=Coffee.js.d37a216a2820a23ca021.hot-update.js.map