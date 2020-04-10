webpackHotUpdate("static/development/pages/About.js",{

/***/ "./pages/About.js":
/*!************************!*\
  !*** ./pages/About.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_S__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/S */ "./components/S.js");
/* harmony import */ var _components_HeaderDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HeaderDescription */ "./components/HeaderDescription.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/About.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // const someHeader = `When I am not practicing web development and doing geeky stuff, I am usually concerned with either work or family. I am a father of a wonderful little girl whose at the moment of writing is 1y10m old, and a Husband with a lovely, supporting and loving wife who has been a part of assembling this project from day [0]. At work, I'm practicing as a social worker in the mental health field, a place that reminds me the importance of humility`

var welcomeEng = 'The goal of this project is to provide resources for people to cope with Coronavirus, be it link for online activities, important news, psychological methods to help with regulating anxiety and overwhelming emotions.';
var welcomeHeb = 'מטרת הפרויקט הזה הינה לספק משאבים ומידע עבור אנשים להתמודדות יומיומית עם נגיף הקורונה והשלכותיו, היה זה בדמוי רעיונות ולינקים לפעילויות, חדשות חשובות, טכניקות לוויסות החרדה והתמודדות עם חוסר ודאות וחוסר אונים.';

var renderPara = function renderPara(content) {
  return __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Paragraph"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, content);
};

var firstParaEng = renderPara("\nAll information provided is legal.\nThe data is gathered through free sources like:<br/> <strong>WHO</strong>, <strong>worldometers</strong>, <strong>ourwourldindata</strong> and government health ministry websites.");
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var isHeb = _ref.isHeb;
  var welcome = isHeb && welcomeHeb || welcomeEng;
  return __jsx("div", {
    style: {
      backgroundColor: '#d9d9d933'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["FadeIn"], {
    duration: "0.2s",
    delay: "0.1s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    style: {
      direction: 'ltr',
      marginBottom: '42px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, " Bonjour!"), __jsx(_components_HeaderDescription__WEBPACK_IMPORTED_MODULE_2__["default"], {
    txt: welcome,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_components_HeaderDescription__WEBPACK_IMPORTED_MODULE_2__["default"], {
    txt: 'This website is created by Boris Povolotsky',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Paragraph"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, firstParaEng, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), "Resources section is a handmade csv file shared between colleagues and people with valuable information to share. ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), "If you have something valuable to contribute to this list, please let me know via ", __jsx("a", {
    href: "mailto:boristofu@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, " email "), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), "If you like to contribute, say hi or leave feedback you can accomplish that either by ", __jsx("a", {
    href: "https://ncorona.live/Coffee",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Supporting"), " or email. Let me know what you like and don't like. You can ", __jsx("a", {
    href: "mailto:boristofu@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, " Mail Me "), "."), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_components_HeaderDescription__WEBPACK_IMPORTED_MODULE_2__["default"], {
    txt: 'A little bit about me',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Paragraph"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "This website was created out of a need for an organized source of useful information nowadays, living in the shadow of Coronavirus. Plenty of useful shareable links are streamed through WhatsApp groups that are lost within minutes. Beside that, I find that having one place to look at and catch up with updated data regarding Covid19 casualties and recoveries is key to avoid unnecessary stress related with watching the News channels non-stop."))));
});

/***/ })

})
//# sourceMappingURL=About.js.4b61c718a6519bb6c136.hot-update.js.map