webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Menu/Menu.styled.js":
/*!****************************************!*\
  !*** ./components/Menu/Menu.styled.js ***!
  \****************************************/
/*! exports provided: StyledMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledMenu", function() { return StyledMenu; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var openStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media (min-width:961px){display:none;}display:flex;flex-direction:column;justify-content:center;background:#3f172b;color:", ";height:auto;position:absolute;z-index:999;top:0;right:50%;direction:rtl;width:220px;border-bottom-left-radius:6px;border-bottom:2px solid;border-bottom-color:{$props => props.theme.menuBorder};border-bottom-right-radius:6px;border-top:none;transition:transform 0.22s ease-in-out;opacity:", ";transform:", " translateX(50%);@media (max-width:660px){width:100%;}.divv{z-index:9999;display:flex:flex-direction:row;justify-content:flex-start;padding:10px 6px;text-align:right;@media (max-width:660px){margin:0 auto;padding:16px;text-align:center;}}span{margin-right:18px;margin-left:18px;font-size:12px;color:", ";@media (max-width:660px){font-size:12px;}}a{padding:4px;cursor:pointer;font-size:18px;font-weight:500;letter-spacing:0.15rem;color:#F1F1F1;text-decoration:none;transition:color 0.15s linear;@media (max-width:660px){font-size:12px;}&:hover{color:", ";}}"], function (props) {
  return props.theme.onPrimary;
}, function (_ref) {
  var open = _ref.open;
  return open ? '1' : '0';
}, function (_ref2) {
  var open = _ref2.open;
  return open ? 'translateY(63px)' : 'translateY(-140%)';
}, function (props) {
  return props.theme.menuColor;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.menuHover;
});
var closeStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media (max-width:960px){display:none;}display:flex;width:auto;flex-flow:row;justify-content:flex-start;display:flex;justify-content:space-around;margin:12px 0 0;.divv{font-size:16px;color:white;cursor:pointer;&:hover{color:", ";}}a{font-family:'Rubik';padding:0px 20px;text-decoration:none;color:", ";transition:all 0.15s ease-in-out;&:hover{color:", ";}}span{display:none;}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.menuHover;
}, function (props) {
  return props.theme.light;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.menuHover;
});
var StyledMenu = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "Menustyled__StyledMenu",
  componentId: "sc-1p59uup-0"
})(["@media (max-width:960px){", "}@media (min-width:961px){", "}"], openStyle, closeStyle);

/***/ })

})
//# sourceMappingURL=_app.js.8c31e072a84aa22429ae.hot-update.js.map