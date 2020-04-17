webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/themes */ "./utils/themes.js");
/* harmony import */ var _components_Burger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Burger */ "./components/Burger/index.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _context_proxy_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/proxy-context */ "./context/proxy-context.js");
/* harmony import */ var _context_LocaleContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/LocaleContext */ "./context/LocaleContext.js");
/* harmony import */ var _hooks_useOutSide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useOutSide */ "./hooks/useOutSide.js");
/* harmony import */ var _hooks_useTranslation_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/useTranslation.js */ "./hooks/useTranslation.js");
/* harmony import */ var _locales_getInitialLocale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../locales/getInitialLocale */ "./locales/getInitialLocale.js");

var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // Components



 // Context & Hooks





 // Functions for changing themes

var lightTheme = function lightTheme() {
  return _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_4__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_4__["themes"]['light']);
};

var darkTheme = function darkTheme() {
  return _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_4__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_4__["themes"]['dark']);
};

var langs = ['he', 'en'];

var Layout = function Layout(_ref) {
  var children = _ref.children,
      newProxy = _ref.newProxy;

  var _useTranslation = Object(_hooks_useTranslation_js__WEBPACK_IMPORTED_MODULE_11__["default"])(),
      t = _useTranslation.t;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_proxy_context__WEBPACK_IMPORTED_MODULE_8__["ProxyContext"]),
      proxy = _useContext[0],
      setProxy = _useContext[1];

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_LocaleContext__WEBPACK_IMPORTED_MODULE_9__["LocaleContext"]),
      locale = _useContext2.locale,
      setLocale = _useContext2.setLocale;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      ig = _useState[0],
      setIgnore = _useState[1]; // Initiation of Context API's


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (locale && !ig) {
      console.log(ig);
      var loc = Object(_locales_getInitialLocale__WEBPACK_IMPORTED_MODULE_12__["getInitialLocale"])(proxy && proxy.countryName);
      setLocale(loc);
    }

    return function () {
      setIgnore(true);
    };
  }, [locale]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var ignore = false;

    if (newProxy && !ignore) {
      setProxy(newProxy);
    }

    return function () {
      ignore: true;
    };
  }, [newProxy]); // setting locale. not  sure yet if I use it or context API only

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      menuOpen = _useState2[0],
      setOpen = _useState2[1];

  var closeMenu = function closeMenu() {
    return setOpen(false);
  };

  var toggleMenu = function toggleMenu() {
    return setOpen(!menuOpen);
  };

  var toggleLang = function toggleLang() {
    closeMenu();
    var newLocale = langs[+!langs.indexOf(locale)];
    setLocale(newLocale);
  };

  var node = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(_hooks_useOutSide__WEBPACK_IMPORTED_MODULE_10__["default"])(node, closeMenu);
  var displayLang = locale === 'heb' ? 'English' : 'עברית';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, t('metaTitle')), __jsx("meta", {
    name: "description",
    content: t('metaDescription'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("meta", {
    name: "keywords",
    content: t('metaKeywords'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    ref: node,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_components_Burger__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setOpen: toggleMenu,
    open: menuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setOpen: toggleMenu,
    open: menuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/News",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("a", {
    alt: "news",
    onClick: function onClick() {
      return closeMenu();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "\uD83D\uDCF0"), t('news', 'links'))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/Statistics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("a", {
    alt: "stats",
    onClick: function onClick() {
      return closeMenu();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, " \uD83D\uDDFA"), t('statistics', 'links'))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("a", {
    alt: "about",
    onClick: function onClick() {
      return closeMenu();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, " \uD83D\uDDFA"), t('about', 'links'))), __jsx("a", {
    onClick: toggleLang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "\uD83C\uDF10"), displayLang)))), children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=_app.js.000f197b581e165533c6.hot-update.js.map