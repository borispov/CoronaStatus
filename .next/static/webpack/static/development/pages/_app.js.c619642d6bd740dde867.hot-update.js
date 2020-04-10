webpackHotUpdate("static/development/pages/_app.js",{

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
    dark: '#343a40',
    blue: '#007bff',
    danger: '#dc3545',
    light: 'f8f9fa',
    secondary: '#303f9f',
    shadows: {
      0: "none",
      1: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
      2: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
      3: "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
      4: "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)"
    },
    general: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      primaryDark: '#31000d',
      primaryColor: '#5C0434',
      // Red
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
    }, "analogous", '#58045c')
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
    primaryColor: '#BC85F9',
    primaryDark: '#BB86FC',
    primaryVariant: '#3700B3',
    complementary: '#6646EE',
    bgColor: '#1B1B12',
    error: '#CF6679',
    error2: '#ee5f02',
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c'
    },
    onPrimary: '#000',
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
    color: 'hsl(207, 0%, 87%)',
    boxShadow: '0.4rem 0.4rem 1.5rem #11111111',
    categoryColor: '#CBD2D9',
    categoryHoverColor: '#9AA5B1',
    btnBg: '#344955'
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.c619642d6bd740dde867.hot-update.js.map