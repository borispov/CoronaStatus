webpackHotUpdate("static/development/pages/Coffee.js",{

/***/ "./components/S.js":
/*!*************************!*\
  !*** ./components/S.js ***!
  \*************************/
/*! exports provided: Flex, Heading, Heading2, Paragraph, simpleWrapper, Container, Button, FadeIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return Flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading2", function() { return Heading2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return Paragraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleWrapper", function() { return simpleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FadeIn", function() { return FadeIn; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/S.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Flex = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "S__Flex",
  componentId: "sc-3vwmv4-0"
})(["display:flex;flex-direction:", ";justify-content:", ";margin:", ";color:", ";align-items:", ";flex:", ";background:", ";padding:", ";@media (max-width:768px){flex-direction:", ";}"], function (props) {
  return props.column && 'column' || 'row';
}, function (props) {
  return props.justify || 'center';
}, function (props) {
  return props.margin || '0 2px';
}, function (props) {
  return props.color || '';
}, function (props) {
  return props.alignItems || '';
}, function (props) {
  return props.flex;
}, function (props) {
  return props.bgColor === 'inverse' ? props.theme.color : props.bGcolor === 'bg' ? props.theme.bgColor : '';
}, function (props) {
  return props.padding;
}, function (props) {
  return props.mRow ? 'row' : props.mCol ? 'column' : '';
});
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "S__Heading",
  componentId: "sc-3vwmv4-1"
})(["font-size:", ";color:", ";font-family:", ";line-height:1.5;"], function (props) {
  return props.fontSize || '4.5rem';
}, function (props) {
  return props.color || props.theme.color;
}, function (props) {
  return props.font || 'Montserrat';
});
var Heading2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "S__Heading2",
  componentId: "sc-3vwmv4-2"
})(["font-size:", ";padding:", ";color:", ";font-family:", ";background:", ";white-space:", ";max-width:100%;text-overflow:", ";@media (max-width:768px){font-size:14px;font-weight:700;max-width:100%;line-height:1.45;}"], function (props) {
  return props.fontSize || '18px';
}, function (props) {
  return props.padding || '';
}, function (props) {
  return props.color || props.theme.color;
}, function (props) {
  return props.font || 'Montserrat';
}, function (props) {
  return props.bg || '';
}, function (props) {
  return props.nowrap || '';
}, function (props) {
  return props.truncate && 'ellipsis';
});
var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "S__Paragraph",
  componentId: "sc-3vwmv4-3"
})(["text-align:", ";font-size:", ";max-width:", ";margin:", ";line-height:", ";padding:", ";color:", ";@media (max-width:768px){font-size:12px;font-weight:300;margin:0;}"], function (props) {
  return props.center ? 'center' : '';
}, function (props) {
  return props.fontSize || '16px';
}, function (props) {
  return props.mw || 'fit-content';
}, function (props) {
  return props.noMargin && '0' || '0';
}, function (props) {
  return props.lineHeight || 1.5;
}, function (props) {
  return props.padding || '';
}, function (props) {
  return props.secondary ? props.theme.text.secondary : props.theme.text.primary;
});
var simpleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "S__simpleWrapper",
  componentId: "sc-3vwmv4-4"
})(["background:", ";color:", ";direction:ltr;"], function (props) {
  return props.theme.bgColor;
}, function (props) {
  return props.theme.color;
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "S__Container",
  componentId: "sc-3vwmv4-5"
})(["@media (max-width:576px){max-width:540px;max-width:100%;}@media (max-width:768px){}@media (max-width:992px){max-width:960px;}@media (min-width:1200px){max-width:1140px;}transition:all .5s cubic-bezier(.55,0,.1,1);width:85%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;text-align:", ";"], function (props) {
  return props.textAlign && 'center';
});
var Btn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "S__Btn",
  componentId: "sc-3vwmv4-6"
})(["border-radius:", ";padding:", ";font-size:", ";background:", ";color:", ";border:", ";font-family:'Sans';font-weight:", ";cursor:", ";outline:none;line-height:1.5;margin:", ";box-shadow:", ";&:hover{background:", ";}@media (max-width:450px){font-size:12px;font-weight:normal;}"], function (props) {
  return props.radius ? props.radius : '4px';
}, function (props) {
  return props.small && '.375rem .75rem' || props.medium && '6px 9px' || props.big && '14px' || '10px 14px';
}, function (props) {
  return props.small ? '12px' : '16px';
}, function (props) {
  return props.bg && props.theme.general[props.bg] || props.theme.primaryColor;
}, function (props) {
  return props.btnColor && props.theme[props.btnColor] || props.theme.onPrimary;
}, function (props) {
  return props.outline ? "1px solid ".concat(props.theme[props.btnColor] || props.theme.primaryColor) : '';
}, function (props) {
  return props.bold && 'bold' || 'normal';
}, function (props) {
  return props.link ? 'pointer' : 'cursor';
}, function (props) {
  return props.margin ? props.margin : '';
}, function (props) {
  return props.theme.shadows[1];
}, function (props) {
  return props.theme.hover;
});
var LangBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Btn).withConfig({
  displayName: "S__LangBtn",
  componentId: "sc-3vwmv4-7"
})(["position:relative;background:lightblue;color:#111;padding:0.54rem 0.85rem;font-size:12px;font-weight:400;font-family:'Roboto';outline:none;text-align:center;border:none;border-radius:6px;margin:0 6px;margin-left:16px;z-index:1;"]);
var Button = function Button(props) {
  return props.langBtn && __jsx(LangBtn, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), props.children) || __jsx(Btn, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onClick: props.onClick
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), props.children);
};
var BaseAnimation = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "S__BaseAnimation",
  componentId: "sc-3vwmv4-8"
})(["   animation-duration:", ";animation-timing-function:", ";animation-delay:", ";animation-iteration-count:", ";animation-direction:", ";animation-fill-mode:", ";animation-play-state:", ";display:", ";"], function (props) {
  return props.duration;
}, function (props) {
  return props.timingFunction;
}, function (props) {
  return props.delay;
}, function (props) {
  return props.iterationCount;
}, function (props) {
  return props.direction;
}, function (props) {
  return props.fillMode;
}, function (props) {
  return props.playState;
}, function (props) {
  return props.display;
});
BaseAnimation.defaultProps = {
  duration: '1s',
  timingFunction: 'ease',
  delay: '0s',
  iterationCount: '1',
  direction: 'normal',
  fillMode: 'both',
  playState: 'running',
  display: 'block'
};
var fadeInAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["from{transform:scale(0.5);opacity:0;}to{transform:scale(1);opacity:1;}"]);
var FadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(BaseAnimation).withConfig({
  displayName: "S__FadeIn",
  componentId: "sc-3vwmv4-9"
})(["animation-name:", ";"], fadeInAnimation);

/***/ }),

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
})(["margin:6px;padding:8px;> button{margin-left:12px;}"]);
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
//# sourceMappingURL=Coffee.js.ccd870ea70b4643368a6.hot-update.js.map