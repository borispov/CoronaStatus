webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/Global.js":
/*!*************************!*\
  !*** ./pages/Global.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-normalize */ "./node_modules/styled-normalize/dist/index.js");
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  *, *::before, *::after {\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n  }\n\n  html, body {\n      position: relative;\n      min-height: 100%;\n      max-width: 100%;\n      font-size: 62.5%;\n      background-color: ", ";\n      color: ", ";\n      font-family: ", ";\n      direction: ", ";\n  }\n\n  .Select {\n    color: black !important;\n    font-size: 17px;\n    font-family: 'Rubik, Arial';\n    z-index: 999999;\n  }\n\n\n  .div.span.h3 {\n    font-family: 'Rubik';\n  }\n\n  h1 {\n    font-family: 'Rubik';\n    font-weight: 400;\n  }\n\n  h1,h2,h3,h4,h5,h6 {\n    margin-bottom: 0.5rem;\n    font-weight: 500;\n    line-height: 1.2;\n  }\n  h3 {\n    font-family: 'Rubik';\n    font-size: 1.75rem;\n  }\n\n  .loader-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n    background-color: #ededed;\n  }\n\n  .loader {\n    max-width: 15rem;\n    width: 100%;\n    height: auto;\n    stroke-linecap: round;\n  }\n\n  circle {\n    fill: none;\n    stroke-width: 3.5;\n    animation-name: preloader;\n    animation-duration: 3s;\n    animation-iteration-count: infinite;\n    animation-timing-function: ease-in-out;\n    transform-origin: 170px 170px;\n    will-change: transform;\n\n    &:nth-of-type(1) {\n      stroke-dasharray: 550px;\n    }\n\n    &:nth-of-type(2) {\n      stroke-dasharray: 500px;\n    }\n\n    &:nth-of-type(3) {\n      stroke-dasharray: 450px;\n    }\n\n    &:nth-of-type(4) {\n      stroke-dasharray: 300px;\n    }\n\n    @for $i from 1 through 4 {\n      &:nth-of-type(#{$i}) {\n        animation-delay: -#{$i * 0.15}s;\n      }\n    }\n  }\n\n  img {\n    vertical-align: middle;\n  }\n\n  @keyframes preloader {\n    50% {\n      transform: rotate(360deg);\n    }\n  }\n\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), styled_normalize__WEBPACK_IMPORTED_MODULE_2__["normalize"], function (props) {
  return props.theme.bgColor;
}, function (props) {
  return props.theme.text.primary;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.isHeb && 'rtl' || '';
});
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ })

})
//# sourceMappingURL=_app.js.570cf6339dcf86631cb0.hot-update.js.map