webpackHotUpdate("static/development/pages/_app.js",{

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
  return props.bgColor === 'inverse' ? props.theme.color : props.bgColor === 'bg' ? props.theme.bgColor : '';
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
})(["text-align:", ";font-size:", ";max-width:", ";margin:", ";line-height:", ";padding:", ";color:", ";direction:", ";@media (max-width:768px){font-size:12px;font-weight:300;margin:0;}"], function (props) {
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
}, function (props) {
  return props.rtl ? 'rtl' : 'inherit';
});
var simpleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "S__simpleWrapper",
  componentId: "sc-3vwmv4-4"
})(["background:", ";direction:ltr;"], function (props) {
  return props.theme.bg || props.theme.bgColor;
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "S__Container",
  componentId: "sc-3vwmv4-5"
})(["@media (max-width:576px){max-width:540px;max-width:100%;}@media (max-width:768px){}@media (max-width:992px){max-width:960px;}@media (min-width:1200px){max-width:1140px;}transition:all .5s cubic-bezier(.55,0,.1,1);padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;text-align:", ";"], function (props) {
  return props.textAlign && 'center';
});
var Btn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "S__Btn",
  componentId: "sc-3vwmv4-6"
})(["border-radius:", ";font-size:16px;padding:", ";", ";background:", ";color:", ";border:", ";font-weight:", ";font-family:'Rubik';cursor:", ";outline:none;line-height:1.5;margin:", ";box-shadow:", ";letter-spacing:", ";transition:all 0.3s ease-in-out;&:hover{transform:", ";background:", ";color:", ";}@media (max-width:450px){font-size:12px;font-weight:normal;letter-spacing:0.5px;}@media (max-width:344px){padding:2px 4px;letter-spacing:0.2px;}"], function (props) {
  return props.radius ? props.radius : '4px';
}, function (props) {
  return props.medium && '6px 9px' || props.big && '14px' || '10px 14px';
}, function (props) {
  return props.small && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["font-size:12px;padding:.375rem .75rem;"]);
}, function (props) {
  return props.active && props.theme.primaryColor || props.bg && props.theme.general[props.bg] || props.theme[props.bg] || props.theme.primaryColor;
}, function (props) {
  return props.active ? props.theme.onPrimary : props.btnColor && props.theme[props.btnColor] || props.theme.general.white;
}, function (props) {
  return props.outline ? "".concat(props.fat ? '2px' : '1px', " solid ").concat(props.theme[props.outline] || props.theme.primaryColor) : 'none';
}, function (props) {
  return props.bold && 'bold' || 'normal';
}, function (props) {
  return props.link ? 'pointer' : 'cursor';
}, function (props) {
  return props.margin ? props.margin : '';
}, function (props) {
  return props.theme.shadows[1];
}, function (props) {
  return props.letterSpace ? '1.5px' : '0';
}, function (props) {
  return props.hoverUp ? 'translateY(-5%)' : '';
}, function (props) {
  return !props.active && props.hoverColor && props.theme[props.hoverColor];
}, function (props) {
  return !props.active && props.hoverColor ? props.theme.onPrimary : '';
});
var Button = function Button(props) {
  return __jsx(Btn, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onClick: props.onClick
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), props.children);
};
var BaseAnimation = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "S__BaseAnimation",
  componentId: "sc-3vwmv4-7"
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
  timingFunction: 'ease-in-out',
  delay: '0s',
  iterationCount: '1',
  direction: 'normal',
  fillMode: 'both',
  playState: 'running',
  display: 'block'
};
var fadeInAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["from{transform:", ";opacity:0;}to{transform:", ";opacity:1;}"], function (props) {
  return props.noScale ? '' : scale(0.5);
}, function (props) {
  return props.noScale ? '' : scale(1);
});
var FadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(BaseAnimation).withConfig({
  displayName: "S__FadeIn",
  componentId: "sc-3vwmv4-8"
})(["animation-name:", ";"], fadeInAnimation);

/***/ }),

/***/ "./utils/themes.js":
/*!*************************!*\
  !*** ./utils/themes.js ***!
  \*************************/
/*! exports provided: themes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return themes; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


var _general;

var themes = {
  common: {
    fontFamily: "Rubik, Montserrat, -apple-system, 'Segoe UI', 'Helvetica Neue', sans-serif",
    menuBorder: '#232F34',
    menuBg: '#344955',
    menuColor: '#4A6572',
    menuHover: '#F9AA33',
    headerBg: '#364F9F',
    white: '#FFF',
    black: '#000',
    kofi: '#FF5E5B',
    dark: '#343a40',
    blue: '#007bff',
    danger: '#dc3545',
    light: '#f8f9fa',
    secondary: '#303f9f',
    shadows: {
      0: "none",
      1: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
      2: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
      3: "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
      4: "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)"
    },
    general: (_general = {
      primaryDark: '#31000d',
      primaryColor: '#5C0434',
      primaryLight: 'rgb(124,54,92)',
      primaryVariant: '#B8004B',
      analogous: '#58045c',
      grey: '#d2d2d2',
      bgColor: '#F5F5F5',
      successDefault: '#4caf50',
      secondaryColor: '#6646EE',
      secondaryDark: '#303f9f',
      secondaryVariant: '#3700B3',
      complementary: '#BC85F9',
      error: '#b00020',
      error2: '#ee5f02',
      transparent: 'transparent',
      white: '#FFF'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_general, "analogous", '#58045c'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_general, "CTA", '#d0021c'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_general, "CTAHOVER", '#8A0011'), _general)
  },
  mobile: '660px',
  red: {
    type: 'red',
    primaryColor: '#5C0434',
    primaryDark: '#31000d',
    primaryVariant: '#B8004B',
    primaryLight: '#8c385e',
    complementary: '#045c2c',
    bgColor: '#F5F5F5',
    text: {
      primary: 'hsl(207, 0%, 87%)',
      secondary: 'hsl(207, 0%, 60%)',
      disabled: 'hsl(207, 0%, 38%)'
    },
    onPrimary: '#000',
    onBg: '#FFF',
    onError: '#000',
    color: 'hsl(207, 0%, 87%)',
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c'
    }
  },
  light: {
    type: 'light',
    CTAHOVER: '#8A0011',
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.60)',
      disabled: 'rgba(0,0,0,0.38)'
    },
    primaryDark: '#31000d',
    primaryColor: '#5C0434',
    // Red
    // primaryLight: '#8c385e',
    primaryLight: 'rgb(124,54,92)',
    primaryVariant: '#B8004B',
    analogous: '#58045c',
    complementary: '#1d8c4a',
    // primaryColor: '#6646EE', // Main Purple
    // primaryDark: '#303f9f',
    // primaryVariant: '#3700B3',
    // complementary: '#BC85F9',
    purpleComp: '#BC85F9',
    purpleVariant: '#3700B3',
    purple: '#6646EE',
    // Main Purple
    bgColor: '#F5F5F5',
    // bgColor: '#FFF',
    error: '#b00020',
    error2: '#ee5f02',
    hover: 'rgba(0,0,0,0.4)',
    hoverOpacity: 0.04,
    active: 'rgba(0,0,0,0.54)',
    active2: '#dc3545',
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    successDefault: '#4caf50',
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c'
    },
    color: '#121212',
    onPrimary: '#FFFFFF',
    onBg: '#000000',
    onError: '#FFFFFF',
    boxShadow: '0.8rem 0.8rem 1.5rem gray',
    btnBg: '#344955',
    btnColor: '#fff'
  },
  dark: {
    type: 'dark',
    // primaryColor: '#BB86FC',
    // primaryColor: '#BC85F9',
    primaryDark: '#BB86FC',
    primaryVariant: '#3700B3',
    primaryColor: '#8c385e',
    complementary: '#6646EE',
    bgColor: '#1B1B12',
    error: '#CF6679',
    error2: '#ee5f02',
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c'
    },
    onPrimary: '#FFF',
    onBg: '#FFF',
    onError: '#000',
    primaryHover: '#BF96FD',
    text: {
      primary: 'hsl(207, 0%, 87%)',
      secondary: 'hsl(207, 0%, 60%)',
      disabled: 'hsl(207, 0%, 38%)'
    },
    hover: 'rgba(255,255,255,0.4)',
    hoverOpacity: 0.04,
    active: 'rgba(255,255,255,255.54)',
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    color: '#B8004B',
    // color: '#8c385e',
    // color: 'hsl(207, 0%, 87%)',
    boxShadow: '0.4rem 0.4rem 1.5rem #11111111',
    categoryColor: '#CBD2D9',
    categoryHoverColor: '#9AA5B1',
    btnBg: '#344955'
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.704be39d28581783a120.hot-update.js.map