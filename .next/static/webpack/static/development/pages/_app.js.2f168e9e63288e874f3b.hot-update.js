webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/S.js":
/*!*************************!*\
  !*** ./components/S.js ***!
  \*************************/
/*! exports provided: Flex, Heading, Heading2, Paragraph, simpleWrapper, Container, Button, FadeIn, SlideInLeft */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideInLeft", function() { return SlideInLeft; });
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
})(["font-size:", ";max-width:fit-content;margin:", ";line-height:", ";padding:", ";color:", ";@media (max-width:768px){font-size:12px;font-weight:300;margin:0;}"], function (props) {
  return props.fontSize || '16px';
}, function (props) {
  return props.noMargin && '0' || '0';
}, function (props) {
  return props.lineHeight || 1.5;
}, function (props) {
  return props.padding || '';
}, function (props) {
  return props.color || props.theme.color;
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
})(["@media (max-width:576px){max-width:540px;}@media (max-width:768px){max-width:640px;}@media (max-width:992px){max-width:960px;}@media (min-width:1200px){max-width:1140px;}transition:all .5s cubic-bezier(.55,0,.1,1);width:85%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;text-align:", ";"], function (props) {
  return props.textAlign && 'center';
});
var Btn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "S__Btn",
  componentId: "sc-3vwmv4-6"
})(["border-radius:", ";padding:", ";font-size:", ";background:", ";color:", ";font-family:'Sans';border:", ";font-weight:", ";cursor:", ";outline:none;line-height:1.5;margin:", ";@media (max-width:450px){font-size:12px;font-weight:normal;padding:0.210rem 0.45rem;}"], function (props) {
  return props.radius ? props.radius : '4px';
}, function (props) {
  return props.small && '.375rem .75rem' || '10px 14px';
}, function (props) {
  return props.small ? '12px' : '16px';
}, function (props) {
  return props.bgColor && props.bgColor || props.theme.btnBg;
}, function (props) {
  return props.btnColor && props.btnColor || props.theme.btnColor;
}, function (props) {
  return props.border ? props.border : 'none';
}, function (props) {
  return props.bold && 'bold' || 'normal';
}, function (props) {
  return props.link ? 'pointer' : 'cursor';
}, function (props) {
  return props.margin ? props.margin : '';
});
var LangBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Btn).withConfig({
  displayName: "S__LangBtn",
  componentId: "sc-3vwmv4-7"
})(["position:relative;background:lightblue;color:#111;padding:0.54rem 0.85rem;font-size:12px;font-weight:400;font-family:'Roboto';outline:none;text-align:center;border:none;border-radius:6px;margin:0 6px;margin-left:16px;"]);
var Button = function Button(props) {
  return props.langBtn && __jsx(LangBtn, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), props.children) || __jsx(Btn, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onClick: props.onClick
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
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
var fadeInAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["from{transform:scale(.5);opacity:0;}to{transform:scale(1);opacity:1;}"]);
var FadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(BaseAnimation).withConfig({
  displayName: "S__FadeIn",
  componentId: "sc-3vwmv4-9"
})(["animation-name:", ";"], fadeInAnimation);
var slideInLeftAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["from{-webkit-transform:translate3d(-150%,0,0);transform:translate3d(-150%,0,0);visibility:visible;}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}"]);
var SlideInLeft = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(BaseAnimation).withConfig({
  displayName: "S__SlideInLeft",
  componentId: "sc-3vwmv4-10"
})(["animation-name:", ";animation-timing-function:cubic-bezier(0.24,-0.1,0.34,2.6);"], slideInLeftAnimation);

/***/ })

})
//# sourceMappingURL=_app.js.2f168e9e63288e874f3b.hot-update.js.map