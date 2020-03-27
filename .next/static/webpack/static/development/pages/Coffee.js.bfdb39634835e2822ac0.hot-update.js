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
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var _utils_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/themes */ "./utils/themes.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/Coffee.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Coffee__Wrapper",
  componentId: "wfmxm6-0"
})(["background:", ";color:", ";"], function (props) {
  return props.theme.bgColor;
}, function (props) {
  return props.theme.color;
});
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].h1.withConfig({
  displayName: "Coffee__Heading",
  componentId: "wfmxm6-1"
})(["font-size:4.5rem;color:", ";font-family:'Montserrat';line-height:1.5;"], function (props) {
  return props.theme.color;
});
var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].p.withConfig({
  displayName: "Coffee__Paragraph",
  componentId: "wfmxm6-2"
})(["font-size:16px;max-width:480px;margin:0 auto;line-height:1.5;padding:2px;color:", ";"], function (props) {
  return props.theme.lightColor;
});
var Heading2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(Heading).withConfig({
  displayName: "Coffee__Heading2",
  componentId: "wfmxm6-3"
})(["margin-top:8px;font-size:1.6rem;color:", ";"], function (props) {
  return props.theme.color;
});
var Box = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Coffee__Box",
  componentId: "wfmxm6-4"
})(["max-width:620px;width:100%;padding:12px;height:auto;margin:0 auto;background:", "DD;"], function (props) {
  return props.theme.bgColor;
});
var BoxTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(Heading).withConfig({
  displayName: "Coffee__BoxTitle",
  componentId: "wfmxm6-5"
})(["font-size:18px;line-height:1.2;"]);
var BoxButtons = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Coffee__BoxButtons",
  componentId: "wfmxm6-6"
})(["margin:6px;padding:8px;> button{margin-left:12px;}"]);
var BoxCount = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "Coffee__BoxCount",
  componentId: "wfmxm6-7"
})(["display:inline-block;padding:6px;text-align:center;font-size:16px;font-weight:bold;margin-left:12px;width:62px;border-radius:16px;background:", ";color:", ";"], function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.headerBg;
});
var hebText = 'שלום ותודה רבה לכם על כך שהנכם שוקלים לבצע תרומה עבור החזקת האתר הזה. אתר זה חינמי ופתוח לשימוש כלל הציבור. היני מודה לכם על זמנכם.';
var engText = 'Hello and thank you for considering purchasing me a coffee in such unpleasant times. This website is free for all. As time allows, I\'ll keep updating and adding features.';
var farewellEng = 'Take care of yourself and your beloved ones.';
var farewellHeb = 'שמרו על עצמכם ועל אהובכם';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var theme = _utils_themes__WEBPACK_IMPORTED_MODULE_5__["themes"].light;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  var isHeb = router.query.isHeb;
  console.log(router.query.isHeb);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(2),
      counter = _useState[0],
      setCounter = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      error = _useState2[0],
      setError = _useState2[1];

  var errorHeb = 'אפילו זוג כפפות עולה יותר מדולר';
  var errorEng = 'C\'mon Even a pair of gloves cost more than 1$...';

  var handleClick = function handleClick(op) {
    var isPlus = op === 'plus';
    var count = counter;
    isPlus && setCounter(count + 1);

    if (!isPlus && counter === 2) {
      setError(true);
      return;
    }

    !isPlus && setCounter(count - 1);
  };

  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(Heading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, isHeb && 'תודה רבה!' || 'Thank You!'), __jsx(Paragraph, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, isHeb ? hebText : engText), __jsx(Heading2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, isHeb ? farewellHeb : farewellEng), __jsx(Box, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(BoxTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, !isHeb ? 'Minimum 2$ Coffee' : 'מינימום 2$ קפה שחור'), __jsx(BoxButtons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      lineNumber: 111
    },
    __self: this
  }, "+"), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      lineNumber: 112
    },
    __self: this
  }, "-"), __jsx(BoxCount, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, counter, "$"))), __jsx(BoxButtons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pointer: true,
    bgColor: "#218838",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
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
      lineNumber: 118
    },
    __self: this
  }, isHeb ? 'המשך' : 'Support')), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pointer: true,
    bgColor: "#218838",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("a", {
    style: {
      textDecoration: 'none',
      color: 'inherit'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, isHeb ? 'חזור לאתר' : 'Back'))))));
});

/***/ })

})
//# sourceMappingURL=Coffee.js.bfdb39634835e2822ac0.hot-update.js.map