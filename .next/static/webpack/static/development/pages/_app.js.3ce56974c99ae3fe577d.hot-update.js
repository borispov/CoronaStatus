webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_useOutSide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useOutSide */ "./utils/useOutSide.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Global */ "./pages/Global.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_S__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/S */ "./components/S.js");
/* harmony import */ var _components_Burger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Burger */ "./components/Burger/index.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu/index.js");
/* harmony import */ var _components_Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Icons/ThemeIcon */ "./components/Icons/ThemeIcon.js");
/* harmony import */ var _utils_themes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/themes */ "./utils/themes.js");
/* harmony import */ var _utils_gtag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/gtag */ "./utils/gtag.js");


var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeComplete', function (url) {
  return _utils_gtag__WEBPACK_IMPORTED_MODULE_15__["pageview"](url);
});

var lightTheme = function lightTheme() {
  return _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_14__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_14__["themes"]['light']);
};

var darkTheme = function darkTheme() {
  return _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_14__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_14__["themes"]['dark']);
};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(lightTheme()),
      theme = _useState[0],
      setTheme = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      isHeb = _useState2[0],
      setHeb = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      menuOpen = _useState3[0],
      setOpen = _useState3[1];

  var toggleMenu = function toggleMenu() {
    return setOpen(!menuOpen);
  };

  var toggleLang = function toggleLang() {
    return setHeb(!isHeb);
  };

  var setDarkTheme = function setDarkTheme() {
    return setTheme(setDarkTheme());
  };

  var setLightTheme = function setLightTheme() {
    return setTheme(setLightTheme());
  };

  var node = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(_utils_useOutSide__WEBPACK_IMPORTED_MODULE_7__["default"])(node, function () {
    return setOpen(false);
  });
  var displayLang = isHeb ? 'English' : 'עברית';
  var isLight = theme.type === 'light';

  var themeButton = isLight && __jsx(_components_Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_13__["MoonIcon"], {
    onClick: setDarkTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }) || __jsx(_components_Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_13__["SunIcon"], {
    onClick: setLightTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  });

  var Component = props.Component,
      pageProps = props.pageProps;
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_Global__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "nCorona",
    isHeb: isHeb,
    ref: node,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_components_Burger__WEBPACK_IMPORTED_MODULE_11__["default"], {
    setOpen: toggleMenu,
    open: menuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setOpen: toggleMenu,
    open: menuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("a", {
    onClick: isLight ? setDarkTheme : setLightTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, isLight ? '🌒' : '🌞'), isLight ? isHeb && 'מצב לילה' || 'Dark Mode' : isHeb && 'מצב יום' || 'Light Mode'), __jsx("a", {
    onClick: toggleLang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "\uD83C\uDF10"), displayLang), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/News",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("a", {
    alt: "news",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "\uD83D\uDCF0"), isHeb && 'חדשות' || 'News')))), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })));
}); // export default class MyApp extends App {
//
//   state = {
//     theme: lightTheme(),
//     isHeb: true,
//     menuOpen: false
//   }
//
//   toggleMenu    = () => this.setState({ menuOpen: !this.state.menuOpen })
//   toggleLang    = () => this.setState({ isHeb: !this.state.isHeb })
//   setDarkTheme  = () => this.setState(prevState => ({ ...prevState, theme: darkTheme() }))
//   setLightTheme = () => this.setState(prevState => ({ ...prevState, theme: lightTheme() }))
//
//   render() {
//     const { theme, isHeb }  = this.state
//     const displayLang       = isHeb ? 'English' : 'עברית'
//     const isLight           = theme.type === 'light'
//     const themeButton       = isLight
//       && <MoonIcon onClick={this.setDarkTheme} />
//       || <SunIcon onClick={this.setLightTheme} />
//
//     const { Component, pageProps } = this.props
//
//     return (
//       <ThemeProvider theme={theme}>
//         <GlobalStyle isHeb={isHeb}/>
//         <Header title='nCorona' isHeb={isHeb} closeMenu={this.closeMenu}>
//           <Burger setOpen={this.toggleMenu} open={this.state.menuOpen} />
//           <Menu setOpen={this.toggleMenu} open={this.state.menuOpen} >
//             <a onClick={isLight ? this.setDarkTheme : this.setLightTheme}>
//               <span>{ isLight ? '🌒' : '🌞'}</span>
//               {
//                 isLight
//                   ? (isHeb && 'מצב לילה' || 'Dark Mode')
//                   : (isHeb && 'מצב יום' || 'Light Mode')
//               }
//             </a>
//             <a onClick={this.toggleLang}>
//               <span>&#127760;</span>
//               {displayLang}
//             </a>
//             <Link href="/News">
//               <a alt="news">
//                 <span>&#128240;</span>
//                 { isHeb && 'חדשות' || 'News' }
//               </a>
//             </Link>
//
//           </Menu>
//
//         </Header>
//         <Component {...pageProps} isHeb={isHeb}/>
//       </ThemeProvider>
//     )
//   }
// }

/***/ })

})
//# sourceMappingURL=_app.js.3ce56974c99ae3fe577d.hot-update.js.map