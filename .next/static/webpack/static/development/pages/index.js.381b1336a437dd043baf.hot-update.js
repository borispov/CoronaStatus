webpackHotUpdate("static/development/pages/index.js",{

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


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n  *, *::before, *::after {\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n  }\n\n  html, body {\n      position: relative;\n      height: 100vh;\n      max-width: 100%;\n      font-size: 62.5%;\n      background-color: ", ";\n      color: ", ";\n      font-family: ", ";\n      direction: ", ";\n      // background: ", ";\n  }\n\n\n  .div.span.h3 {\n    font-family: 'Roboto'\n  }\nh3 {\n  font-size: 1.75rem;\n}\n  .lds-hourglass {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  .lds-hourglass:after {\n    content: \" \";\n    display: block;\n    border-radius: 50%;\n    width: 0;\n    height: 0;\n    margin: 8px;\n    box-sizing: border-box;\n    border: 32px solid #fff;\n    border-color: #fff transparent #fff transparent;\n    animation: lds-hourglass 1.2s infinite;\n  }\n  @keyframes lds-hourglass {\n    0% {\n      transform: rotate(0);\n      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    }\n    50% {\n      transform: rotate(900deg);\n      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    }\n    100% {\n      transform: rotate(1800deg);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), function (props) {
  return props.theme.bgColor;
}, function (props) {
  return props.theme.color;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.lang === 'heb' ? 'rtl' : '';
}, function (props) {
  return props.theme.test;
});
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ })

})
//# sourceMappingURL=index.js.381b1336a437dd043baf.hot-update.js.map