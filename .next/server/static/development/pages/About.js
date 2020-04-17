module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/HeaderDescription.js":
/*!*****************************************!*\
  !*** ./components/HeaderDescription.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/HeaderDescription.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const descriptionTextEn = 'This website makes use of public health data, specifically www.ourworldindata.org and WHO.int';
const Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "HeaderDescription__Text",
  componentId: "sc-110gwmc-0"
})(["direction:", ";color:", ";font-size:14px;font-family:'Open Sans';line-height:1.5;max-width:520px;text-align:center;margin:0 auto;font-style:", ";@media (max-width:768px){max-width:380px;}@media (max-width:350px){max-width:fit-content;}", ";"], props => props.direction || '', props => props.theme.text.primary, props => props.explanation && 'italic', props => props.secondary && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["font-size:12px;color:props.theme.text.secondary;"]));
const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "HeaderDescription__Wrap",
  componentId: "sc-110gwmc-1"
})(["z-index:9999;position:relative;display:block;width:620px;max-width:620px;margin:0 auto 24px;@media (max-width:768px){width:100%;max-width:380px;}@media (max-width:320px){}"]);
const Href = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "HeaderDescription__Href",
  componentId: "sc-110gwmc-2"
})(["outline:none;text-decoration:none;font-weight:bold;color:", ";"], props => props.theme.primaryVariant); // <Text {...props}>This website makes use of public health data, specifically <Href href="https://www.ourworldindata.org">www.ourworldindata.org</Href> and <Href href="https://WHO.int">WHO.int</Href>
// </Text>
//

/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(Wrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(Text, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), props.txt));
});

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/S.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const Flex = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "S__Flex",
  componentId: "sc-3vwmv4-0"
})(["display:flex;flex-direction:", ";justify-content:", ";margin:", ";color:", ";align-items:", ";flex:", ";background:", ";padding:", ";@media (max-width:768px){flex-direction:", ";}"], props => props.column && 'column' || 'row', props => props.justify || 'center', props => props.margin || '0 2px', props => props.color || '', props => props.alignItems || '', props => props.flex, props => props.bgColor === 'inverse' ? props.theme.color : props.bgColor === 'bg' ? props.theme.bgColor : '', props => props.padding, props => props.mRow ? 'row' : props.mCol ? 'column' : '');
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "S__Heading",
  componentId: "sc-3vwmv4-1"
})(["font-size:", ";color:", ";font-family:", ";line-height:1.5;"], props => props.fontSize || '4.5rem', props => props.color || props.theme.color, props => props.font || 'Montserrat');
const Heading2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "S__Heading2",
  componentId: "sc-3vwmv4-2"
})(["font-size:", ";padding:", ";color:", ";font-family:", ";background:", ";white-space:", ";max-width:100%;text-overflow:", ";@media (max-width:768px){font-size:14px;font-weight:700;max-width:100%;line-height:1.45;}"], props => props.fontSize || '18px', props => props.padding || '', props => props.color || props.theme.color, props => props.font || 'Montserrat', props => props.bg || '', props => props.nowrap || '', props => props.truncate && 'ellipsis');
const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "S__Paragraph",
  componentId: "sc-3vwmv4-3"
})(["text-align:", ";font-size:", ";max-width:", ";margin:", ";line-height:", ";padding:", ";color:", ";direction:", ";@media (max-width:768px){font-size:12px;font-weight:300;margin:0;};", ";"], props => props.center ? 'center' : '', props => props.fontSize || '16px', props => props.mw || 'fit-content', props => props.noMargin && '0' || '0', props => props.lineHeight || 1.5, props => props.padding || '', props => props.secondary ? props.theme.text.secondary : props.theme.text.primary, props => props.direction || 'inherit', props => props.centered && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["margin:0 auto;"]));
const simpleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "S__simpleWrapper",
  componentId: "sc-3vwmv4-4"
})(["background:", ";direction:ltr;"], props => props.theme.bg || props.theme.bgColor);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "S__Container",
  componentId: "sc-3vwmv4-5"
})(["direction:", ";@media (max-width:576px){max-width:540px;max-width:100%;}@media (max-width:768px){}@media (max-width:992px){max-width:960px;}@media (min-width:1200px){max-width:1140px;}transition:all .5s cubic-bezier(.55,0,.1,1);padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;text-align:", ";"], props => props.direction || '', props => props.textAlign && 'center');
const Btn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "S__Btn",
  componentId: "sc-3vwmv4-6"
})(["border-radius:", ";font-size:16px;padding:", ";", ";background:", ";color:", ";border:", ";font-weight:", ";font-family:'Rubik';cursor:", ";outline:none;line-height:1.5;margin:", ";box-shadow:", ";letter-spacing:", ";transition:all 0.3s ease-in-out;&:hover{transform:", ";background:", ";color:", ";}@media (max-width:450px){font-size:12px;font-weight:normal;letter-spacing:0.5px;}@media (max-width:344px){padding:2px 4px;letter-spacing:0.2px;}", ";"], props => props.radius ? props.radius : '4px', props => props.medium && '6px 9px' || props.big && '14px' || '8px 10px', props => props.small && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["font-size:12px;padding:0rem 1rem;"]), props => props.active && props.theme.primaryColor || props.bg && props.theme.general[props.bg] || props.theme[props.bg] || props.theme.primaryColor, props => props.active ? props.theme.onPrimary : props.btnColor && props.theme[props.btnColor] || props.theme.general.white, props => props.outline ? `${props.fat ? '2px' : '1px'} solid ${props.theme[props.outline] || props.theme.primaryColor}` : 'none', props => props.bold && 'bold' || 'normal', props => props.link ? 'pointer' : 'cursor', props => props.margin ? props.margin : '', props => props.theme.shadows[1], props => props.letterSpace ? '1.5px' : '0', props => props.hoverUp ? 'translateY(-5%)' : '', props => !props.active && props.hoverColor && props.theme[props.hoverColor], props => !props.active && props.hoverColor ? props.theme.onPrimary : '', props => props.KoFi && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["font-family:", ";font-weight:700;margin-left:4px;margin-right:4px;padding:0 12px;letter-spacing:1.75px;color:", ";cursor:pointer;background:", ";display:inline-flex;justify-content:space-around;align-items:center;border:none;"], props.fontFamily, props => props.theme.white, props => props.theme.kofi));
const Button = props => __jsx(Btn, _extends({
  onClick: props.onClick
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 155
  },
  __self: undefined
}), props.children);
const BaseAnimation = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "S__BaseAnimation",
  componentId: "sc-3vwmv4-7"
})(["   animation-duration:", ";animation-timing-function:", ";animation-delay:", ";animation-iteration-count:", ";animation-direction:", ";animation-fill-mode:", ";animation-play-state:", ";display:", ";"], props => props.duration, props => props.timingFunction, props => props.delay, props => props.iterationCount, props => props.direction, props => props.fillMode, props => props.playState, props => props.display);
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
const fadeInAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["from{transform:", ";opacity:0;}to{transform:", ";opacity:1;}"], props => props.noScale ? '' : scale(0.5), props => props.noScale ? '' : scale(1));
const FadeIn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(BaseAnimation).withConfig({
  displayName: "S__FadeIn",
  componentId: "sc-3vwmv4-8"
})(["animation-name:", ";"], fadeInAnimation);

/***/ }),

/***/ "./context/LocaleContext.js":
/*!**********************************!*\
  !*** ./context/LocaleContext.js ***!
  \**********************************/
/*! exports provided: LocaleContext, LocaleProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleContext", function() { return LocaleContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleProvider", function() { return LocaleProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/context/LocaleContext.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const LocaleContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const LocaleProvider = props => {
  // Default Setting
  const initialState = 'he';
  const {
    0: locale,
    1: setLocale
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);
  const prev = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (prev.current === undefined && locale === 'he') {
      const readLocal = localStorage.getItem('locale');

      if (readLocal !== 'he') {
        setLocale(readLocal);
        return;
      } else {
        setLocale(readLocal);
      }
    } else {
      localStorage.setItem('locale', locale);
      prev.current = locale;
    }
  }, [locale]);
  return __jsx(LocaleContext.Provider, {
    value: {
      locale,
      setLocale
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, props.children);
};

/***/ }),

/***/ "./hooks/useTranslation.js":
/*!*********************************!*\
  !*** ./hooks/useTranslation.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTranslation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_LocaleContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/LocaleContext */ "./context/LocaleContext.js");
/* harmony import */ var _locales_translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locales/translations */ "./locales/translations.js");
const defaultLocale = 'he';



function useTranslation() {
  const {
    locale
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_LocaleContext__WEBPACK_IMPORTED_MODULE_1__["LocaleContext"]);

  const t = (key, key2) => {
    if (!key2) {
      if (!_locales_translations__WEBPACK_IMPORTED_MODULE_2__["strings"][locale][key]) {
        console.warn(`Translation '${key}' for locale '${locale}' not found.`);
        return;
      }

      return _locales_translations__WEBPACK_IMPORTED_MODULE_2__["strings"][locale][key] || _locales_translations__WEBPACK_IMPORTED_MODULE_2__["strings"][defaultLocale][key] || '';
    }

    if (!_locales_translations__WEBPACK_IMPORTED_MODULE_2__["strings"][locale][key2][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }

    return _locales_translations__WEBPACK_IMPORTED_MODULE_2__["strings"][locale][key2][key] || _locales_translations__WEBPACK_IMPORTED_MODULE_2__["strings"][defaultLocale][key2][key] || '';
  };

  return {
    t,
    locale
  };
}

/***/ }),

/***/ "./locales/translations.js":
/*!*********************************!*\
  !*** ./locales/translations.js ***!
  \*********************************/
/*! exports provided: strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
const strings = {
  he: {
    metaKeywords: "Coronavirus COVID19 C19 Pandemic Statistics Graphs Data Resources Information Prevention",
    metaTitle: 'nCorona! מידע עדכני על נגיף הקורונה',
    metaDescription: 'אתר זה כולל מידע ונתונים עדכניים אודות נגיף הקורונה, כמו כן כולל מידע שימושי עבור כלל הציבור הכולל מידע כללי ומידע ממשרדי הבריאות מהעולם, מידע שימושי ויעיל להתמודדות עם המצב כגון פעילויות עם הילדים, לימודים מקוונים ועוד',
    links: {
      news: 'חדשות',
      about: 'אודות',
      statistics: 'נתונים'
    },
    labels: {
      cases: 'מאומתים',
      todayCases: 'מקרים חדשים',
      deaths: 'נפטרו',
      recovered: 'החלימו',
      active: 'פעילים',
      affectedCountries: 'מדינות נגועות'
    },
    chartLabels: {
      'new cases': 'חדשים',
      'cases': 'נדבקים',
      'deaths': 'נפטרים'
    },
    coffeePage: {
      heading: 'תודה רבה!',
      description: 'שלום ותודה רבה לכם על כך שהנכם שוקלים לבצע תרומה עבור החזקת האתר הזה. אתר זה חינמי ופתוח לשימוש כלל הציבור. היני מודה לכם על זמנכם.',
      farewell: 'שמרו על עצמכם ועל אהובכם',
      instructions: ['תרומה דרך ממשק של ko-fi.com. הנכם תהיו מועברים לדף ה״קופי״ שלי, דרכו תוכלו להשאיר טיפ עם הודעה. שימו לב, ניתן לתרום ללא הרשמה! כשתועברו לדף של פייפאל ותתבקשו להירשם, ליחצו על כפתור ההרשמה - אתם תועברו לדף של ביצוע תשלום.', 'העברת טיפ ישירות דרך paypal. תוכלו לבחור כל סכום, אך ללא הודעה. \n* אני ממליץ להשתמש בממשק ko-fi.com. אפשרות התרומה דרך פייפאל מוצגת כאן עבור אלו שאינם מסתדרים עם תשלום דרך ko-fi.com'],
      kofiButton: 'לתרום עם ko-fi.com',
      paypalButton: 'לתרום עם PayPal',
      error: 'אפילו זוג כפפות עולה יותר מדולר'
    },
    coronaApp: {
      selectHeader: 'נתונים לפי מדינה:',
      graphExplanation: `הגרפים מציגים את שיעור הצמיחה של נגיף הקורונה, אינם מתעדכנים בזמן אמת ולכן ייתכן פער של בין יום לשלושה ימים.
      המידע המוצג מחוץ לגרפים הינו עדכני ומתעדכן כל 15-30 דקות.`
    },
    tipButton: '- השאר טיפ ל',
    tipFont: 'Rubik',
    aboutPage: {
      welcome: 'מטרת הפרויקט הזה הינה לספק משאבים ומידע עבור אנשים להתמודדות יומיומית עם נגיף הקורונה והשלכותיו, היה זה בדמוי רעיונות ולינקים לפעילויות, חדשות חשובות, טכניקות לוויסות החרדה והתמודדות עם חוסר ודאות וחוסר אונים.',
      overview: '<p> כל המידע המסופק באתר מגיע ממקורות כגון: <strong><em><small>WHO.int, worldometers, ourwourldindata.org</small></em></strong> ואתרים ממשלתיים שונים. מאגר המידע מוזרם מקובץ csv שיתופי אשר עובר בין אנשים. אם ברשותכם מידע שתרצו לשתף, צרו קשר בכדי לקבל קישור לקובץ. נוסף לכך, הינכם מוזמנים לקחת חלק בפרויקט ולתרום את חלקיכם ע״י השארת פידבק, השארת טיפ דרך עמוד התרומה, או לעזור עם אחזקת האתר.</p>',
      contact: 'ניתן ליצור קשר דרך המייל: <a href="mailto:nCoronaLive@gmail.com>nCoronaLive@gmail.com</a>',
      bio: 'אתר זה נועד להוות מקום מאורגן עבור כל המידע המוזרם בקבוצות הוואטסאפ בימים אלו שנוטה ללכת לאיבוד לאחר מספר דקות. נוסף לכך, אתר זה מספק נתונים עדכניים של נגיף הקורונה בארץ ובעולם וזאת על מנת להקנות יכולת לשלוט במינון הצפייה בחדשות, להעלאת מודעות למצב ולחשיבות הקפדה על ההנחיות.'
    }
  },
  en: {
    metaKeywords: "Coronavirus COVID19 C19 Pandemic Statistics Graphs Data Resources Information Prevention",
    metaTitle: 'nCorona - C19 Data & Information for Raising awareness and coping techniques',
    metaDescription: "nCorona provides updated Coronavirus informative statistics as well as a resourceful list that includes general information for the public, methods & techniques for coping, activities for individuals, families and children, etc",
    links: {
      news: 'News',
      about: 'About',
      statistics: 'Statistics'
    },
    labels: {
      cases: 'Confirmed',
      todayCases: 'New Cases',
      deaths: 'Deaths',
      recovered: 'Recovered',
      active: 'Active',
      affectedCountries: 'Infected Countries'
    },
    chartLabels: {
      'new cases': 'new cases',
      'cases': 'cases',
      'deaths': 'deaths'
    },
    coffeePage: {
      heading: 'Thank You!',
      description: 'Hello and thank you for considering purchasing me a coffee in such unpleasant times. This website is free for all. As time allows, I\'ll keep updating and adding features.',
      farewell: 'Take care of yourself and your beloved ones.',
      instructions: [' via ko-fi.com, you can donate in 2$ increments and leave a message ( Feedback, Suggestions, Feature Request... ). ATTENTION: You can tip without registration to PayPal. Even if you are prompted with Sign up message instead of Pay with Credit Card, just click on sign up and it\'ll first let you to complete the transaction. '],
      kofiButton: 'via ko-Fi.com',
      paypalButton: 'via PayPal',
      error: 'C\'mon Even a pair of gloves cost more than 1$...'
    },
    coronaApp: {
      selectHeader: 'Data For Country: ',
      graphExplanation: `The Data illustrates Novel Coronavirus growth rate, 
      there is usually a difference of 1-3 days between the data shown and the current day. The stats shown outside the graphs are updated every 15-35 minutes`
    },
    tipButton: 'Buy Me A Mask',
    tipFont: 'Quicksand',
    aboutPage: {
      welcome: 'The goal of this project is to provide resources for people to cope with Coronavirus, be it link for online activities, important news, psychological methods to help with regulating anxiety and overwhelming emotions.',
      overview: `<>All information provided is legal.
              The data is gathered through free sources like:<br/> <strong>WHO</strong>, <strong>worldometers</strong>, <strong>ourwourldindata</strong> and government health ministry websites.</>`,
      contact: 'You can contact me by email: <a href="mailto:nCoronaLive@gmail.com>nCoronaLive@gmail.com</a>',
      bio: `This website was created out of a need for an organized source of useful information nowadays, living in the shadow of Coronavirus. 
      Plenty of useful shareable links are streamed through WhatsApp groups that are lost within minutes. Beside that, 
      I find that having one place to look at and catch up with updated data regarding Covid19 casualties and recoveries is key to avoid unnecessary stress related with watching the News channels non-stop.`
    }
  }
};

/***/ }),

/***/ "./pages/About.js":
/*!************************!*\
  !*** ./pages/About.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_S__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/S */ "./components/S.js");
/* harmony import */ var _components_HeaderDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HeaderDescription */ "./components/HeaderDescription.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useTranslation */ "./hooks/useTranslation.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/About.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    t,
    locale
  } = Object(_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const overview = {
    dangerouslySetInnerHTML: {
      __html: t('overview', 'aboutPage')
    }
  };
  const bio = {
    dangerouslySetInnerHTML: {
      __html: t('bio', 'aboutPage')
    }
  };
  const contact = {
    dangerouslySetInnerHTML: {
      __html: t('contact', 'aboutPage')
    }
  };
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["FadeIn"], {
    duration: "0.2s",
    delay: "0.1s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    style: {
      marginBottom: '62px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, " Bonjour!"), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_1__["Paragraph"], {
    mw: "720px",
    style: {
      margin: '32px auto 0'
    },
    direction: locale === 'he' ? 'rtl' : 'ltr',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, t('welcome', 'aboutPage')), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), __jsx("div", _extends({}, overview, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  })), __jsx("div", _extends({}, contact, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx("h1", {
    style: {
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, " nCorona's BIO"), __jsx("div", _extends({}, bio, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  })), __jsx(_components_HeaderDescription__WEBPACK_IMPORTED_MODULE_2__["default"], {
    secondary: true,
    txt: 'This website is created by Boris Povolotsky',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })));
});

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/About.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raypo/Desktop/Projectos/CoronaStatus/pages/About.js */"./pages/About.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=About.js.map