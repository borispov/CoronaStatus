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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/icons/sun.svg":
/*!******************************!*\
  !*** ./assets/icons/sun.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "currentColor",
  d: "M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
});

function SvgSun(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "sun",
    className: "sun_svg__svg-inline--fa sun_svg__fa-sun sun_svg__fa-w-16 sun_svg__fa-lg",
    viewBox: "0 0 512 512",
    color: "#F1D600"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgSun);

/***/ }),

/***/ "./components/Bar.js":
/*!***************************!*\
  !*** ./components/Bar.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Bar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["defaults"].global.animation = false;
react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["defaults"].global.defaultFontFamily = "'PT Sans', sans-serif";

const prop = o => k => o[k];

const popVal = o => Object.values(o)[0];

const popKey = o => Object.keys(o)[0];

/* harmony default export */ __webpack_exports__["default"] = (props => {
  const data = {
    labels: Object.keys(props.info),
    datasets: [{
      label: props.label,
      backgroundColor: ['rgba(112, 120, 176, 0.7)', 'rgba(233,233,100,0.7)', 'rgba(213, 199, 23, 0.7)', 'rgba(245, 55, 66, 0.7)', 'rgba(18, 18, 21, 1)'],
      borderColor: 'rgba(255,99,132,0.8)',
      borderWidth: 1.5,
      barPercentage: 0.9,
      categoryPercentage: 1,
      minBarLength: 0,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      // data: props.info.map(popVal)
      data: Object.values(props.info)
    }]
  };
  const options = {
    defaultFontFamily: "monospace",
    legend: {
      display: true,
      position: 'right'
    }
  };
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
    data: data,
    width: 4,
    height: 1,
    options: options,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }));
});

/***/ }),

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Btn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button__Btn",
  componentId: "sc-1h1khwv-0"
})(["border-radius:4px;padding:10px 14px;font-size:16px;background:", ";color:", ";font-family:'Sans'"], props => props.theme.btnBg, props => props.theme.btnColor);
/* harmony default export */ __webpack_exports__["default"] = (props => __jsx(Btn, {
  onClick: props.onClick,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, props.children));

/***/ }),

/***/ "./components/CaseChart.js":
/*!*********************************!*\
  !*** ./components/CaseChart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_useTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useTime */ "./utils/useTime.js");
/* harmony import */ var _utils_sortForChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/sortForChart */ "./utils/sortForChart.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Container */ "./components/Container.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/CaseChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const baseURL = `https://covid19.borisky.me/api/v1/alltime/`;

const countryTimeData = async cn => {
  console.log('fetchinGGGGG');
  const loc = cn || (await currentCountry());
  const data = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(baseURL + loc);
  const dataRes = await Object(_utils_sortForChart__WEBPACK_IMPORTED_MODULE_4__["default"])(data.data);
  return dataRes;
};

const worldTimeData = async () => {
  const data = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(baseURL);
  const dataRes = await Object(_utils_sortForChart__WEBPACK_IMPORTED_MODULE_4__["default"])(data.data);
  return dataRes;
};

async function currentCountry() {
  return await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://extreme-ip-lookup.com/json/').then(res => res.data.country).catch(e => 'israel');
}

class CaseChart extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "present", val => this.setState({
      dataToPresent: val
    }));

    this.state = {
      dataToPresent: 'worldCases',
      worldData: [],
      countryData: [],
      worldLabels: [],
      countryLabels: [],
      worldCases: [],
      deathCases: [],
      newCases: [],
      countryCases: [],
      showWorld: true,
      loading: false
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true
    });
    console.log(this.props);

    try {
      const timeStats = await worldTimeData();
      const countryStats = await countryTimeData(this.props.country);
      const worldCases = timeStats && timeStats.datasets.filter(a => a.label === 'cases');
      const deathCases = timeStats && timeStats.datasets.filter(a => a.label === 'deaths');
      const newCases = timeStats && timeStats.datasets.filter(a => a.label === 'new cases');
      const countryCases = countryStats && countryStats.datasets.filter(a => a.label === 'cases');
      const countryLabels = countryStats && countryStats.labels;
      const worldLabels = timeStats && timeStats.labels;
      const worldDeaths = timeStats && timeStats.datasets.filter(a => a.label === 'deaths');
      this.setState({
        worldData: timeStats,
        countryData: countryStats,
        worldCases,
        deathCases,
        newCases,
        countryCases,
        worldLabels,
        countryLabels,
        loading: false
      });
    } catch (err) {
      this.setState({
        loading: false,
        error: err
      });
    }
  }

  render() {
    if (this.state.loading) {
      return __jsx(_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Loading Data . . ."));
    }

    if (this.state.error) {
      return __jsx(_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, this.state.error));
    } // console.log(this.state.worldCases);


    return __jsx(_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("p", {
      style: {
        margin: '82px 0 0 0'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, this.props.isHeb && 'שיעור התפשטות הנגיף בעולם, מקרי מוות ומסרים מקרים חדשים ליום' || 'Growth Rate of the virus in the world, including deaths and new cases'), this.state.worldData && __jsx(_Chart__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "line",
      labels: this.state.worldLabels,
      data: this.state[this.state.dataToPresent],
      label: "Global Statistics",
      theme: this.props.theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }) || __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, " Loading Charts ... "), __jsx("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '34px 32px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: () => this.present('worldCases'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, this.props.isHeb && 'נדבקים' || 'Cases'), __jsx(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: () => this.present('deathCases'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, this.props.isHeb && 'מקרי מוות' || 'Deaths'), __jsx(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: () => this.present('newCases'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, this.props.isHeb && 'מקרים חדשים' || 'New cases')));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CaseChart);

/***/ }),

/***/ "./components/Chart.js":
/*!*****************************!*\
  !*** ./components/Chart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bar */ "./components/Bar.js");
/* harmony import */ var _LineChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LineChart */ "./components/LineChart.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Chart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* harmony default export */ __webpack_exports__["default"] = (props => {
  const {
    type
  } = props;
  const rend = type === 'bar' ? __jsx(_Bar__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })) : __jsx(_LineChart__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));
  return rend;
});

/***/ }),

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Container.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Container",
  componentId: "sc-1p5fd2u-0"
})(["max-width:992px;margin:0 auto;text-align:center;"]);
/* harmony default export */ __webpack_exports__["default"] = (props => __jsx(Container, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, props.children));

/***/ }),

/***/ "./components/CoronaApp.js":
/*!*********************************!*\
  !*** ./components/CoronaApp.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "./components/Input.js");
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stats */ "./components/Stats.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _utils_useTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useTime */ "./utils/useTime.js");
/* harmony import */ var _utils_useTodayStats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useTodayStats */ "./utils/useTodayStats.js");
/* harmony import */ var _utils_useCountries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useCountries */ "./utils/useCountries.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Container */ "./components/Container.js");
/* harmony import */ var _HeaderDescription__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeaderDescription */ "./components/HeaderDescription.js");
/* harmony import */ var _CaseChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CaseChart */ "./components/CaseChart.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/CoronaApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const allCountries = {
  israel: '',
  usa: '',
  uk: '',
  france: '',
  lebanon: '',
  germany: '',
  poland: '',
  russia: '',
  india: '',
  ukraine: '',
  moldova: '',
  spain: '',
  italy: ''
};

const translateCountries = countries => cn => countries[Object.keys(countries).filter(c => c === 'cn')];

/* harmony default export */ __webpack_exports__["default"] = (({
  theme,
  lang
}) => {
  const {
    0: showWorld,
    1: setShowWorld
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: country,
    1: setCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: inputValue,
    1: setInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const url = 'https://covid19.borisky.me/api/v1/';
  const {
    countryStats
  } = Object(_utils_useTime__WEBPACK_IMPORTED_MODULE_4__["default"])(country);
  const {
    todayStats
  } = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_5__["default"])(url, country);
  const worldToday = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_5__["default"])(url, 'world').todayStats;
  const {
    countries
  } = Object(_utils_useCountries__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const worldTodaySorted = worldToday && {
    cases: worldToday.cases,
    todayCases: worldToday.todayCases,
    recovered: worldToday.recovered,
    deaths: worldToday.deaths
  } || '';
  const todayStatsSorted = todayStats && {
    cases: todayStats.cases,
    todayCases: todayStats.todayCases,
    recovered: todayStats.recovered,
    deaths: todayStats.deaths
  } || '';

  const handleChange = selected => {
    setCountry(selected.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setCountry(inputValue);
  };

  const selectOptions = countries && countries.map(a => ({
    value: a,
    label: a
  }));
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Covid19 Status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }), __jsx(_HeaderDescription__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), __jsx(_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, countryStats && __jsx(_Chart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isHeb: lang === 'heb',
    type: "line",
    labels: countryStats.labels,
    data: countryStats.datasets.filter(a => a.label === 'cases'),
    label: country || 'israel',
    theme: theme,
    fill: false,
    stops: 3,
    showLegend: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cn: country || todayStats && todayStats.country,
    todayStats: todayStatsSorted,
    isHeb: lang === 'heb',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }), __jsx("form", {
    style: {
      maxWidth: '520px',
      margin: '54px auto'
    },
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx("label", {
    style: {
      fontSize: '16px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, lang === 'eng' ? `Search For Country:` : `חיפוש לפי מדינה`), __jsx(react_select__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: 'Select',
    options: selectOptions,
    value: country,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  })), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cn: 'World',
    todayWorld: worldTodaySorted,
    isHeb: lang === 'heb',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }), __jsx(_CaseChart__WEBPACK_IMPORTED_MODULE_10__["default"], {
    showWorld: showWorld,
    theme: theme,
    country: country,
    isHeb: lang === 'heb',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  })));
});

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Header__Title",
  componentId: "sc-1yguf34-0"
})(["align-self:center;color:#e6e6e6;font-size:4rem;font-family:monospace;text-align:center;text-shadow:0 1px 35px rgba(5,35,10,0.2);"]);
const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Header__Wrap",
  componentId: "sc-1yguf34-1"
})(["display:flex;justify-content:center;position:relative;height:82px;width:100%;background:linear-gradient(45deg,#5c0434,#000000d6);border-bottom:1px solid darkblue;margin:0 auto;margin-bottom:48px;"]);
/* harmony default export */ __webpack_exports__["default"] = (({
  title
}) => __jsx(Wrap, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx(Title, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, title)));

/***/ }),

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

const descriptionTextEn = 'This website makes use of public health data, specifically www.ourworldindata.org and WHO.int';
const Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "HeaderDescription__Text",
  componentId: "sc-110gwmc-0"
})(["color:", ";font-size:14px;font-family:'Open Sans';line-height:1.6;max-width:520px;text-align:center;margin:0 auto;@media (max-width:768px){max-width:380px;}"], props => props.theme.categoryColor);
const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "HeaderDescription__Wrap",
  componentId: "sc-110gwmc-1"
})(["display:block;width:620px;max-width:620px;margin:0 auto 24px;@media (max-width:768px){width:320px;max-width:380px;}"]);
const Href = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "HeaderDescription__Href",
  componentId: "sc-110gwmc-2"
})(["outline:none;text-decoration:none;font-weight:bold;color:", ";"], props => props.theme.categoryHoverColor);
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(Wrap, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx(Text, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "This website makes use of public health data, specifically ", __jsx(Href, {
  href: "https://www.ourworldindata.org",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "www.ourworldindata.org"), " and ", __jsx(Href, {
  href: "https://WHO.int",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "WHO.int"))));

/***/ }),

/***/ "./components/InfoSection.js":
/*!***********************************!*\
  !*** ./components/InfoSection.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ "./components/Container.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/InfoSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "InfoSection__Wrapper",
  componentId: "sc-1anhjcp-0"
})(["text-align:none;display:flex;flex-wrap:wrap;justify-content:center;margin-left:15px;margin-right:15px;margin-bottom:32px;@media (max-width:768px){flex-direction:column;align-content:center;}"]);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "InfoSection__Section",
  componentId: "sc-1anhjcp-1"
})(["border-radius:4px;background:", ";color:", ";flex:0 0 50%;max-width:33%;position:relative;width:100%;border:1px solid;border-color:", ";margin:2px;@media (max-width:768px){flex-direction:column;flex:0 0 100%;max-width:85%;}"], props => props.theme.bgColor, props => props.theme.color, props => props.theme.statColor);
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h2.withConfig({
  displayName: "InfoSection__SectionTitle",
  componentId: "sc-1anhjcp-2"
})(["color:", ";background:", ";font-size:20px;padding:4px 8px;border-bottom:1px solid black;"], props => props.theme.btnColor, props => props.theme.boxBg);
const Link = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a.withConfig({
  displayName: "InfoSection__Link",
  componentId: "sc-1anhjcp-3"
})(["text-decoration:none;color:", ";font-weight:700;font-size:18px;line-height:1.5;padding:0 4px;"], props => props.theme.statColor);
const Desc = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p.withConfig({
  displayName: "InfoSection__Desc",
  componentId: "sc-1anhjcp-4"
})(["font-size:16px;line-height:1.22;color:", ";padding:0 4px;"], props => props.theme.color);

const reduceToCat = (a, _ref) => {
  let {
    category
  } = _ref,
      x = _objectWithoutProperties(_ref, ["category"]);

  return {
    category,
    data: a['data'].concat(x)
  };
};

const init = {
  category: '',
  data: []
}; // RENDERING functions

const mapDataToSection = (item, idx) => {
  return __jsx("div", {
    key: idx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx(Link, {
    href: item.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, item.subject), __jsx(Desc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, item.description));
};

const renderSection = secData => {
  return secData.map((it, ix) => __jsx(Section, {
    key: ix,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx(SectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, it.category), it.data.map(mapDataToSection)));
};

/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchData() {
      setError();

      try {
        const {
          data
        } = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://covid19.borisky.me/api/data/resources');
        const datakeys = [...new Set(data.map(i => i.category))];
        const d = datakeys.map(key => data.filter(i => i.category === key)).map(each => each.reduce(reduceToCat, init));
        setData(d);
      } catch (e) {
        setError(e);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: undefined
    }, " Received Error Fetching Information ... Let Me Know About This: boristofu@gmail.com");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    style: {
      marginBot: '12px',
      fontSize: '24px',
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, "Useful Information For All"), __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, data && renderSection(data)));
});

/***/ }),

/***/ "./components/Input.js":
/*!*****************************!*\
  !*** ./components/Input.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Input.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "Input",
  componentId: "sc-1hzri75-0"
})(["outline:none;max-width:420px;width:", ";margin:", ";text-align:center;border-radius:6px;background:", ";font-size:1.1rem;padding:8px 4px;"], props => props.btn ? '62px' : '85%', props => props.btn ? '0 8px' : 0, props => props.theme.categoryColor);
/* harmony default export */ __webpack_exports__["default"] = (props => __jsx(Input, _extends({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
})));

/***/ }),

/***/ "./components/LineChart.js":
/*!*********************************!*\
  !*** ./components/LineChart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-plugin-datalabels */ "chartjs-plugin-datalabels");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/LineChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const filterBy5 = (x, i) => !(i % 4);

const subtractArray = arr => arr.filter(filterBy5);

const subCases = arr => arr[0];

const defaultSettings = {
  fill: true
};

const parseDatasets = (arrayOfSets, fill) => {
  return arrayOfSets.map(set => _objectSpread({}, set, {
    data: set.data.length > 30 ? subtractArray(set.data) : set.data,
    fill: fill || false
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (props => {
  const data2 = {
    labels: props.labels.length > 30 ? subtractArray(props.labels) : props.labels,
    datasets: parseDatasets(props.data, props.fill)
  };

  const data = canvas => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 100, 0);
    return _objectSpread({}, data2, {
      background: gradient
    });
  };

  var options = {
    responsive: true,
    maintainAspectRatio: true,
    onAnimationComplete: function () {
      this.showTooltip(this.datasets[0].points, true);
    },
    animation: {
      easing: 'easeInOutQuad',
      duration: 1050
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: 'rgba(200, 200, 200, 0.05)',
          lineWidth: 1
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 6
        },
        gridLines: {
          color: 'rgba(200, 200, 200, 0.08)',
          lineWidth: 1
        }
      }]
    },
    elements: {
      line: {
        tension: 0.4
      }
    },
    legend: {
      display: props.showLegend !== undefined ? false : true,
      position: 'bottom'
    },
    tooltips: {
      titleFontFamily: 'Open Sans',
      backgroundColor: 'rgba(20,20,20, 0.3)',
      titleFontColor: '#fff',
      caretSize: 10,
      cornerRadius: 5,
      xPadding: 15,
      yPadding: 15
    },
    plugins: {
      datalabels: {
        // display: ,
        display: ctx => {
          let i = ctx.dataIndex;
          return i === 0 || i === ctx.dataset.data.length - 1 || !(i % 3);
        },
        // color: '#292929CC',
        align: 'end',
        anchor: 'end',
        color: props.theme.color,
        labels: {
          title: {
            font: {
              weight: 'bold',
              style: 'italic',
              family: 'monospace'
            }
          }
        }
      }
    }
  };
  return __jsx("div", {
    style: {
      marginTop: '32px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, __jsx("h1", {
    style: {
      fontSize: '1.65rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, props.label), __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    label: props.label,
    data: data,
    width: 100,
    options: options,
    height: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }));
});

/***/ }),

/***/ "./components/QuickStats.js":
/*!**********************************!*\
  !*** ./components/QuickStats.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/QuickStats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "QuickStats__Container",
  componentId: "lmgi17-0"
})(["@media (max-width:576px){max-width:540px;}@media (max-width:768px){}@media (max-width:992px){max-width:960px;}@media (min-width:1200px){max-width:1140px;}transition:all .5s cubic-bezier(.55,0,.1,1);width:85%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;"]);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "QuickStats__Row",
  componentId: "lmgi17-1"
})(["display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px;"]);
const Col = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "QuickStats__Col",
  componentId: "lmgi17-2"
})(["text-align:center;padding:8px 10px;font-weight:700;border-right-width:1px;border-left:2px solid #38383b;border-bottom:2px solid #38383b;border-right-color:2px solid #38383b;border-top:2px solid #38383b;color:", ";background-color:", ";flex:0 0 20%;max-width:20%;position:relative;width:100%;"], props => props.theme.statColor, props => props.theme.bgColor);
/* harmony default export */ __webpack_exports__["default"] = (({
  S,
  country
}) => {
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx(Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(Col, {
    style: {
      borderRight: '2px solid #38383b',
      borderTopRightRadius: '5px',
      borderBottomRightRadius: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("h3", {
    style: {
      fontWeight: 'bold',
      display: 'inline-block',
      paddingTop: '8px',
      fontSize: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, country)), __jsx(Col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, S.cases, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "\u05E0\u05D3\u05D1\u05E7\u05D9\u05DD"))), __jsx(Col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, S.recovered, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "\u05D4\u05D7\u05DC\u05D9\u05DE\u05D5"))), __jsx(Col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, S.deaths, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, "\u05DE\u05E7\u05E8\u05D9 \u05DE\u05D5\u05D5\u05EA"))), __jsx(Col, {
    style: {
      borderLeft: '2px solid #38383b',
      borderTopLeftRadius: '5px',
      borderBottomLeftRadius: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, S.todayCases, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, "\u05DE\u05E7\u05E8\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD")))));
});

/***/ }),

/***/ "./components/Spinner.js":
/*!*******************************!*\
  !*** ./components/Spinner.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Spinner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  className: "hourglass",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
})); // <div class="lds-hourglass"></div>

/***/ }),

/***/ "./components/StatBlock.js":
/*!*********************************!*\
  !*** ./components/StatBlock.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/StatBlock.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Block = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "StatBlock__Block",
  componentId: "rmn7zo-0"
})(["position:relative;margin:0;padding:16px 12px;background:", ";font-size:18px;text-align:center;border-radius:6px;align-content:center;justify-content:space-between;color:", ";"], props => props.theme.bgColor, props => props.theme.color);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "StatBlock__Title",
  componentId: "rmn7zo-1"
})(["font:'Helvetica';text-decoration:underline;letter-spacing:1px;color:", ";margin-bottom:6px;"], props => props.theme.textColor);
const Span = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "StatBlock__Span",
  componentId: "rmn7zo-2"
})(["font-size:18px;font-weight:700;margin:12px 0 0 0;color:", ""], props => props.theme.color);

const StatBlock = ({
  title,
  data
}) => {
  return __jsx(Block, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, title, ":"), __jsx(Span, {
    style: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '12px 0 0 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, data));
};

/* harmony default export */ __webpack_exports__["default"] = (StatBlock);

/***/ }),

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/* harmony import */ var _utils_useTodayStats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/useTodayStats */ "./utils/useTodayStats.js");
/* harmony import */ var _utils_useTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useTime */ "./utils/useTime.js");
/* harmony import */ var _StatBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatBlock */ "./components/StatBlock.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Spinner */ "./components/Spinner.js");
/* harmony import */ var _Bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Bar */ "./components/Bar.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
/* harmony import */ var _QuickStats__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./QuickStats */ "./components/QuickStats.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Stats.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









const Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Stats__Container",
  componentId: "tjczhx-0"
})(["max-width:1140px;margin:24px auto 0;text-align:center;margin-top:16px;"]);
const Flex = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Stats__Flex",
  componentId: "tjczhx-1"
})(["display:flex;justify-content:space-evenly;background-color:", ";border-radius:12px;& > div{background-color:", ";}"], props => props.bg || props.theme.bgColor, props => props.bg || props.theme.bgColor);
function Stats({
  cn = '',
  todayWorld,
  todayStats,
  isHeb
}) {
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, todayStats && __jsx("div", {
    style: {
      border: '1px solid rgba(255, 60, 60, 0.022)',
      borderRadius: '6px',
      marginBottom: '16px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_QuickStats__WEBPACK_IMPORTED_MODULE_8__["default"], {
    country: cn,
    S: todayStats,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })) || todayWorld && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("h1", {
    style: {
      fontSize: '20px',
      paddingTop: '18px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, isHeb && 'המצב ב: ' || 'Status for: ', __jsx("span", {
    style: {
      fontWeight: 'bold',
      textDecoration: 'underline'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, " ", cn)), __jsx(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: isHeb && 'נדבקים' || "Infected",
    data: todayWorld.cases,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: isHeb && 'החלימו' || "Recovered",
    data: todayWorld.recovered,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: isHeb && 'מקרי מוות' || "Total Deaths",
    data: todayWorld.deaths,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./pages/Global.js":
/*!*************************!*\
  !*** ./pages/Global.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`

  *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  html, body {
      position: relative;
      height: 100vh;
      max-width: 100%;
      font-size: 62.5%;
      background-color: ${props => props.theme.bgColor};
      color: ${props => props.theme.color};
      font-family: ${props => props.theme.fontFamily};
      direction: ${props => props.lang === 'heb' ? 'rtl' : ''};
      // background: ${props => props.theme.test};
  }

  .Select {
    color: black !important;
    font-size: 17px;
  }


  .div.span.h3 {
    font-family: 'Roboto'
  }

  h1,h2,h3,h4,h5,h6 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }
  h3 {
    font-size: 1.75rem;
  }
  .lds-hourglass {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-hourglass:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var _components_CoronaApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/CoronaApp */ "./components/CoronaApp.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Global */ "./pages/Global.js");
/* harmony import */ var _utils_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/themes */ "./utils/themes.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_moon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/moon.svg */ "./utils/moon.svg");
/* harmony import */ var _assets_icons_sun_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/sun.svg */ "./assets/icons/sun.svg");
/* harmony import */ var _components_InfoSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/InfoSection */ "./components/InfoSection.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // const Moon = () => <MoonSVG />

const lightTheme = () => _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_3__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_3__["themes"]['light']);

const darkTheme = () => _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_3__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_3__["themes"]['dark']);

const ThemeIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["width:3rem;height:3rem;margin-left:auto;cursor:pointer;"]);
const MoonIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_utils_moon_svg__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "pages__MoonIcon",
  componentId: "sc-1t8jk7a-0"
})(["", ""], ThemeIcon);
const SunIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_assets_icons_sun_svg__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "pages__SunIcon",
  componentId: "sc-1t8jk7a-1"
})(["", ""], ThemeIcon);
const Btn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "pages__Btn",
  componentId: "sc-1t8jk7a-2"
})(["color:", ";background-color:", ";border-radius:50%;position:absolute;top:", ";right:", ";left:", ";padding:6px 2px;outline:none;"], props => props.theme.bgColor, props => props.theme.color, props => props.top, props => props.right, props => props.left);
const LangBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "pages__LangBtn",
  componentId: "sc-1t8jk7a-3"
})(["background:", ";color:", ";font-size:14px;font-weight:600;padding:6px 10px;width:45px;outline:none;text-align:center;border:none;border-radius:6px;@media (max-width:768px){width:30px;font-size:12px;font-weight:400;padding:4px 6px;}"], props => props.theme.bgColor, props => props.theme.color);
const BtnContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__BtnContainer",
  componentId: "sc-1t8jk7a-4"
})(["position:absolute;top:5%;right:3%;padding:0 12px;@media (max-width:768px){right:0%;top:8%;padding:0;}"]);
function IndexPage() {
  const {
    0: theme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(lightTheme());

  const setDarkTheme = () => setTheme(darkTheme());

  const setLightTheme = () => setTheme(lightTheme());

  const {
    0: lang,
    1: setLang
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('heb');

  const setHeb = () => setLang('heb');

  const setEng = () => setLang('eng');

  const isLight = theme.type === 'light';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_Global__WEBPACK_IMPORTED_MODULE_2__["default"], {
    lang: lang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx(_components_CoronaApp__WEBPACK_IMPORTED_MODULE_0__["default"], {
    theme: theme,
    lang: lang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx(_components_InfoSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx(BtnContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(LangBtn, {
    style: {
      position: 'relative',
      margin: '0 12px'
    },
    onClick: lang === 'heb' ? setEng : () => {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "En"), __jsx(LangBtn, {
    onClick: lang === 'eng' ? setHeb : () => {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "\u05E2\u05D1\u05E8")), __jsx("div", {
    style: {
      position: 'absolute',
      top: '5%',
      left: '2%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, theme.type === 'light' && __jsx(MoonIcon, {
    onClick: setDarkTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), theme.type === 'dark' && __jsx(SunIcon, {
    onClick: setLightTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./utils/moon.svg":
/*!************************!*\
  !*** ./utils/moon.svg ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fill: "currentColor",
  d: "M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 00283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
});

function SvgMoon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "moon",
    className: "moon_svg__svg-inline--fa moon_svg__fa-moon moon_svg__fa-w-16 moon_svg__fa-lg",
    viewBox: "0 0 512 512",
    color: "#666"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgMoon);

/***/ }),

/***/ "./utils/sortForChart.js":
/*!*******************************!*\
  !*** ./utils/sortForChart.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// meant for Line Chart Cases/Deaths Chart
const firstWhole = (arr, n = 0) => {
  if (arr[n] > 0) return n;
  if (arr[n] == undefined) return 0;
  n++;
  return firstWhole(arr, n);
};

const parseLabel = label => {
  let d = new Date(label);
  return d.getDate() + '.' + ('0' + (d.getMonth() + 1)).toString();
};

const sortForChart = obj => {
  const zeroNull = c => c === null ? 0 : c;

  const sortedObj = obj.sort((a, b) => new Date(a.date) - new Date(b.date));
  const initCasesArray = sortedObj.map(o => o.total_cases); // console.log(initCasesArray);

  const firstNumIndex = firstWhole(initCasesArray);
  const fObj = sortedObj.slice(firstNumIndex);
  const cases = fObj.map(o => o.total_cases);
  const labels = fObj.map(o => parseLabel(o.date));
  const deaths = fObj.map(o => zeroNull(o.total_deaths));
  const newCases = fObj.map(o => zeroNull(o.new_cases));
  const label = obj[0].location;
  const datasets = [{
    label: 'new cases',
    data: newCases,
    backgroundColor: '#fc3111',
    borderColor: '#fc3111',
    strokeColor: '#301934',
    pointRadius: 2,
    borderWidth: 4,
    fill: true,
    datalabels: {
      display: ctx => ctx.dataIndex % 2,
      align: 'end',
      anchor: 'end'
    }
  }, {
    label: 'deaths',
    data: deaths,
    backgroundColor: 'rgba(29,82,209,1) 100%)',
    borderColor: 'rgba(21, 21, 21, 1)',
    strokeColor: "rgba(222, 222, 34, 1)",
    pointRadius: 1,
    borderWidth: 4,
    datalabels: {
      display: ctx => ctx.dataIndex % 2,
      align: 'end',
      anchor: 'end'
    }
  }, {
    label: 'cases',
    data: cases,
    backgroundColor: '#2A4561',
    // backgroundColor: 'rgb(235, 65, 15)',
    borderColor: 'rgb(235, 65, 15)',
    // borderColor: '#97D3ED',
    strokeColor: "#ADFF2F",
    pointBorderColor: 'rgba(75,10,192,0)',
    pointBackgroundColor: '#fff',
    pointHoverBackgroundColor: 'rgba(45, 20, 19, 0)',
    pointRadius: 0,
    borderWidth: 5 // datalabels: {
    // display: ctx => !(ctx.dataIndex % 5),
    //   display: 'auto',
    //   align: 'end',
    //   anchor: 'end'
    // }

  }];
  return {
    datasets,
    labels,
    label
  };
};

/* harmony default export */ __webpack_exports__["default"] = (sortForChart);

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
const themes = {
  common: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
  },
  light: {
    type: 'light',
    bgColor: 'rgb(250, 250, 252)',
    headerBg: 'rgb(250, 250, 252)',
    boxBg: 'rgba(50, 150, 252, 0.8)',
    color: '#3E4C59',
    searchBgColor: '#E4E7EB',
    boxShadow: '0.8rem 0.8rem 1.5rem gray',
    categoryColor: '#999',
    categoryHoverColor: '#333',
    textColor: '#ED3833',
    test: 'linear-gradient(45deg, #cc0404, #000000d6)',
    btnBg: '#344955',
    btnColor: '#fff',
    statColor: '#1A74D6'
  },
  dark: {
    type: 'dark',
    // bgColor: '#1F2933',
    bgColor: '#364061',
    headerBg: '#3d444b',
    color: '#E4E7EB',
    searchBgColor: '#E4E7EB',
    boxShadow: '0.4rem 0.4rem 1.5rem #11111111',
    categoryColor: '#CBD2D9',
    categoryHoverColor: '#9AA5B1',
    textColor: '#ED3833',
    test: 'linear-gradient(45deg, #cc0404, #000000d6)',
    btnBg: '#344955',
    btnColor: '#fff',
    statColor: '#1A74D6'
  }
};

/***/ }),

/***/ "./utils/useCountries.js":
/*!*******************************!*\
  !*** ./utils/useCountries.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const baseURL = `https://covid19.borisky.me/api/v1/countries`;

function useCountries() {
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: countries,
    1: setCountries
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchData() {
      setError();
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(baseURL);
      setCountries(data.data);
    }

    fetchData();
  }, []);
  return {
    countries,
    error
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useCountries);

/***/ }),

/***/ "./utils/useTime.js":
/*!**************************!*\
  !*** ./utils/useTime.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sortForChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sortForChart */ "./utils/sortForChart.js");



const baseURL = `https://covid19.borisky.me/api/v1/alltime/`;

async function currentCountry() {
  return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://extreme-ip-lookup.com/json/').then(res => res.data.country).catch(e => 'israel');
} // function useTime(loc, url = baseURL) {


function useTime(loc, getCountryList) {
  const {
    0: countryStats,
    1: setCountryStats
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: countries,
    1: setCountries
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchData(cn) {
      setLoading(true);
      setError();
      const country = loc || (await currentCountry());
      const URL = baseURL + country;
      const data = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(URL).then(res => res.data).catch(err => setError(err));
      const timeStats = Object(_sortForChart__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
      setCountryStats(timeStats);
      setLoading(false);
    }

    fetchData(loc);
  }, [loc]);
  return {
    countryStats,
    loading,
    error,
    countries
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useTime);

/***/ }),

/***/ "./utils/useTodayStats.js":
/*!********************************!*\
  !*** ./utils/useTodayStats.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



const capitalize = str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);

const parseCn = str => {
  return str === 'usa' || str === 'Usa' ? 'USA' : str === 'Uk' || str === 'England' || str === 'United Kingdom' || str == 'great britain' ? 'UK' : str.toLowerCase();
};

function getCountry(list) {
  return function (queryCountry) {
    return list.reduce((a, c) => c.country === queryCountry ? c : a, {});
  };
}

async function currentCountry() {
  return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://extreme-ip-lookup.com/json/').then(res => res.data.country).catch(e => 'israel');
}

function useTodayStats(url, country) {
  const {
    0: todayStats,
    1: setStats
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchData() {
      console.log('fetching data');
      setLoading(true);
      setError();
      let searchCountry = country || (await currentCountry());
      const parsedCountry = parseCn(searchCountry);
      const URL = url + 'today/' + searchCountry.toLowerCase();
      console.log(URL);
      const data = await fetch(URL).then(res => res.json()).catch(err => setError(err));
      const relevant = {
        cases: data.cases,
        todayCases: data.todayCases,
        recovered: data.recovered,
        deaths: data.deaths,
        country: data.country
      };
      setStats(relevant);
      setLoading(false);
    }

    fetchData();
  }, [country]);
  return {
    todayStats,
    loading,
    error
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useTodayStats);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raypo/Desktop/Projectos/CoronaStatus/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "chartjs-plugin-datalabels":
/*!********************************************!*\
  !*** external "chartjs-plugin-datalabels" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chartjs-plugin-datalabels");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

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
//# sourceMappingURL=index.js.map