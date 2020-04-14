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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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
      lineNumber: 43
    },
    __self: undefined
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
    data: data,
    width: 4,
    height: 1,
    options: options,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }));
});

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
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./S */ "./components/S.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_sortForChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/sortForChart */ "./utils/sortForChart.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/CaseChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const baseURL = `https://nCorona.live/api/v1/alltime/`;

const worldTimeData = async theme => {
  const data = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(baseURL);
  const dataRes = await Object(_utils_sortForChart__WEBPACK_IMPORTED_MODULE_3__["default"])(data.data, theme);
  return dataRes;
};

class CaseChart extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "present", val => {
      this.setState({
        dataToPresent: val,
        active: val
      });
    });

    this.state = {
      active: 'worldCases',
      dataToPresent: 'worldCases',
      worldData: [],
      worldLabels: [],
      worldCases: [],
      deathCases: [],
      newCases: [],
      showWorld: true,
      loading: false
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true
    });

    try {
      const timeStats = await worldTimeData(this.props.theme);
      const worldCases = timeStats && timeStats.datasets.filter(a => a.label === 'cases');
      const deathCases = timeStats && timeStats.datasets.filter(a => a.label === 'deaths');
      const newCases = timeStats && timeStats.datasets.filter(a => a.label === 'new cases');
      const worldLabels = timeStats && timeStats.labels;
      this.setState({
        worldData: timeStats,
        worldCases,
        deathCases,
        newCases,
        timeStats,
        worldLabels,
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
      return __jsx(_S__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Loading Data . . ."));
    }

    if (this.state.error) {
      return __jsx(_S__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, ' error occured:' + this.state.error));
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_S__WEBPACK_IMPORTED_MODULE_1__["Paragraph"], {
      mw: "auto",
      center: true,
      secondary: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, this.props.isHeb && 'להלן: שיעור התפשטות הנגיף בעולם לפי: מקרי מוות ומסרים מקרים חדשים ליום' || 'Growth Rate of the virus in the world, including deaths and new cases'), __jsx("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '34px 32px 8px 32px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), this.state.worldData && __jsx(_Chart__WEBPACK_IMPORTED_MODULE_4__["default"], {
      legend: false,
      type: "line",
      labels: this.state.worldLabels // data={this.state[this.state.dataToPresent]}
      ,
      data: [...this.state.worldCases, ...this.state.deathCases, ...this.state.newCases],
      label: this.props.isHeb ? 'נתונים מהעולם' : 'Global',
      theme: this.props.theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }) || __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, " Loading Charts ... "));
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
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stats */ "./components/Stats.js");
/* harmony import */ var _utils_useTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useTime */ "./utils/useTime.js");
/* harmony import */ var _utils_useTodayStats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useTodayStats */ "./utils/useTodayStats.js");
/* harmony import */ var _utils_useCountries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useCountries */ "./utils/useCountries.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./S */ "./components/S.js");
/* harmony import */ var _HeaderDescription__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HeaderDescription */ "./components/HeaderDescription.js");
/* harmony import */ var _CaseChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CaseChart */ "./components/CaseChart.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/CoronaApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const calcDiff = current => prev => current !== 0 ? (current - prev) / 100 * 100 : 0;

const CoronaApp = ({
  isHeb,
  theme,
  userLocation,
  yesterdayCn,
  yesterdayGlobal
}) => {
  const {
    0: showWorld,
    1: setShowWorld
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: country,
    1: setCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(userLocation);
  const {
    0: inputValue,
    1: setInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const url = 'https://nCorona.live/api/v1/';
  const url2 = 'https://corona.lmao.ninja/countries/';
  const worldUrl = 'https://corona.lmao.ninja/all';
  const {
    countryStats
  } = Object(_utils_useTime__WEBPACK_IMPORTED_MODULE_2__["default"])(country, theme);
  const {
    todayStats
  } = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_3__["default"])(url, country);
  const worldToday = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_3__["default"])(url, 'world').todayStats;
  const {
    countries
  } = Object(_utils_useCountries__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const worldTodaySorted = worldToday && {
    cases: worldToday.cases,
    active: worldToday.active,
    recovered: worldToday.recovered,
    deaths: worldToday.deaths,
    todayCases: worldToday.todayCases,
    affectedCountries: yesterdayGlobal.affectedCountries
  } || '';
  const yesterdayStatsSorted = yesterdayCn && {
    cases: yesterdayCn.cases,
    todayCases: yesterdayCn.todayCases,
    recovered: yesterdayCn.recovered,
    deaths: yesterdayCn.deaths
  } || '';
  const yesterdayGlobalSorted = yesterdayGlobal && {
    cases: yesterdayGlobal.cases,
    active: yesterdayGlobal.active,
    deaths: yesterdayGlobal.deaths,
    todayCases: yesterdayGlobal.todayCases,
    recovered: yesterdayGlobal.recovered,
    affectedCountries: yesterdayGlobal.affectedCountries
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
      lineNumber: 77
    },
    __self: undefined
  }, __jsx(_S__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx("form", {
    style: {
      maxWidth: '520px',
      margin: '54px auto 12px',
      textAlign: 'center'
    },
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("label", {
    style: {
      fontSize: '16px',
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, isHeb ? `נתונים לפי מדינה` : `Data For Country:`), __jsx(react_select__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: 'Select',
    options: selectOptions,
    value: country === 'Israel' && isHeb ? 'ישראל' : country,
    onChange: handleChange,
    placeholder: country || 'ישראל',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  })), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cn: country || todayStats && todayStats.country,
    todayStats: todayStatsSorted,
    yesteryday: yesterdayStatsSorted,
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }), countryStats && __jsx(_Chart__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isHeb: isHeb,
    type: "line",
    labels: countryStats.labels // data={countryStats.datasets.filter(a => a.label === 'cases')}
    ,
    data: countryStats.datasets,
    label: country || 'israel',
    fill: false,
    stops: 3,
    showLegend: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cn: 'World',
    todayWorld: worldTodaySorted,
    yesteryday: yesterdayGlobalSorted,
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }), __jsx(_HeaderDescription__WEBPACK_IMPORTED_MODULE_7__["default"], {
    txt: "* \u05D2\u05E8\u05E4\u05D9\u05DD \u05D4\u05DE\u05E6\u05D9\u05D2\u05D9\u05DD \u05D0\u05EA \u05E9\u05D9\u05E2\u05D5\u05E8 \u05D4\u05E6\u05DE\u05D9\u05D7\u05D4 \u05E9\u05DC \u05E0\u05D2\u05D9\u05E3 \u05D4\u05E7\u05D5\u05E8\u05D5\u05E0\u05D4, \u05D0\u05D9\u05E0\u05DD \u05DE\u05EA\u05E2\u05D3\u05DB\u05E0\u05D9\u05DD \u05D1\u05D6\u05DE\u05DF \u05D0\u05DE\u05EA \u05D5\u05DC\u05DB\u05DF \u05D0\u05D9\u05E0\u05DD \u05DE\u05E9\u05E7\u05E4\u05D9\u05DD \u05D0\u05EA \u05D4\u05D9\u05D5\u05DD \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9. \u05D1\u05D3\u05E8\u05DA-\u05DB\u05DC\u05DC \u05DE\u05EA\u05E7\u05D9\u05D9\u05DD \u05E4\u05E2\u05E8 \u05E9\u05DC \u05D9\u05D5\u05DD, \u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC\u05D5\u05E9\u05D4 \u05D9\u05DE\u05D9\u05DD. \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05D4\u05DE\u05D5\u05E6\u05D2\u05D9\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05D2\u05E8\u05E4\u05D9\u05DD \u05DE\u05E9\u05E7\u05E4\u05D9\u05DD \u05D0\u05EA \u05D4\u05D6\u05DE\u05DF \u05D4\u05E0\u05EA\u05D5\u05DF \u05D1\u05E8\u05D2\u05E2 \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9 \u05D5\u05DE\u05EA\u05E2\u05D3\u05DB\u05E0\u05D9\u05DD \u05D1\u05E2\u05E8\u05DA \u05D0\u05D7\u05EA \u05DC\u05D7\u05E6\u05D9 \u05E9\u05E2\u05D4.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }), __jsx(_CaseChart__WEBPACK_IMPORTED_MODULE_8__["default"], {
    showWorld: showWorld,
    country: country,
    isHeb: isHeb,
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["withTheme"])(CoronaApp));

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Wrapper",
  componentId: "u34t4c-0"
})(["clear:both;position:fixed;bottom:0;height:3.5rem;width:50%;background:#202124;color:#6BA5ED;margin-top:-3.5rem;"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Content",
  componentId: "u34t4c-1"
})(["text-align:center;"]);
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(Wrapper, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx(Content, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "DO THE FIVE. ", __jsx("small", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "Help stop coronavirus")))));

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
})(["color:", ";font-size:14px;font-family:'Open Sans';line-height:1.5;max-width:520px;text-align:center;margin:0 auto;@media (max-width:768px){max-width:380px;}@media (max-width:350px){max-width:fit-content;}"], props => props.theme.text.primary);
const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "HeaderDescription__Wrap",
  componentId: "sc-110gwmc-1"
})(["z-index:9999;position:relative;display:block;width:620px;max-width:620px;margin:0 auto 24px;@media (max-width:768px){width:100%;max-width:380px;}@media (max-width:320px){}"]);
const Href = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "HeaderDescription__Href",
  componentId: "sc-110gwmc-2"
})(["outline:none;text-decoration:none;font-weight:bold;color:", ";"], props => props.theme.primaryVariant);
/* harmony default export */ __webpack_exports__["default"] = (({
  txt
}) => {
  const toShow = txt ? __jsx(Text, {
    secondary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, txt) : __jsx(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "This website makes use of public health data, specifically ", __jsx(Href, {
    href: "https://www.ourworldindata.org",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "www.ourworldindata.org"), " and ", __jsx(Href, {
    href: "https://WHO.int",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "WHO.int"));
  return __jsx(Wrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, toShow);
});

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
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./S */ "./components/S.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/InfoSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "InfoSection__Wrapper",
  componentId: "sc-1anhjcp-0"
})(["text-align:none;display:flex;flex-wrap:wrap;justify-content:center;font-family:Rubik;margin-left:15px;margin-right:15px;margin-bottom:32px;@media (max-width:768px){flex-direction:column;align-content:center;}"]);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "InfoSection__Section",
  componentId: "sc-1anhjcp-1"
})(["border-radius:4px;flex:0 0 50%;max-width:33%;position:relative;width:100%;border:1px solid;border-color:", ";background:", ";margin-left:8px;margin-right:8px;margin-top:16px;margin-bottom:16px;@media (max-width:768px){flex-direction:column;flex:0 0 100%;max-width:85%;}"], props => props.theme.primaryColor, props => props.theme.bgColor);
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h2.withConfig({
  displayName: "InfoSection__SectionTitle",
  componentId: "sc-1anhjcp-2"
})(["color:", ";background:", ";font-size:20px;padding:4px 8px;margin-bottom:8px;border-bottom:1px solid black;"], props => props.theme.onPrimary, props => props.theme.primaryColor);
const Link = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a.withConfig({
  displayName: "InfoSection__Link",
  componentId: "sc-1anhjcp-3"
})(["text-decoration:none;color:", ";font-weight:500;font-family:'Rubik';font-size:18px;line-height:1.8;padding:6px 4px 2px 4px;transition:color 0.15s ease-in-out;&:hover{color:", ";}@media (max-width:768px){font-size:16px;}"], props => props.theme.primaryDark, props => props.theme.primaryLight);
const Desc = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p.withConfig({
  displayName: "InfoSection__Desc",
  componentId: "sc-1anhjcp-4"
})(["font-size:16px;line-height:1.3;color:", ";padding:0 4px;padding-bottom:12px;@media (max-width:768px){font-size:14px;}"], props => props.theme.text.secondary);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h1.withConfig({
  displayName: "InfoSection__Title",
  componentId: "sc-1anhjcp-5"
})(["font-size:28px;margin:128px 12px auto;text-shadow:0 2px 6px rgba(0,0,0,0.16);text-align:center;color:", ";"], props => props.theme.onBg);

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
      lineNumber: 93
    },
    __self: undefined
  }, __jsx(Link, {
    href: item.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, item.subject), __jsx(Desc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, item.description));
};

const renderSection = secData => {
  return secData.map((it, ix) => __jsx(Section, {
    key: ix,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx(SectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
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
        } = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://nCorona.live/api/data/resources');
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
        lineNumber: 138
      },
      __self: undefined
    }, " Received Error Fetching Information ... Let Me Know About This: boristofu@gmail.com");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, "Resources"), __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, data && renderSection(data)));
});

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
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./S */ "./components/S.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/LineChart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["defaults"].global.defaultFontFamily = "'PT Sans', sans-serif";
const Div = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "LineChart__Div",
  componentId: "sc-9esmyi-0"
})(["margin-top:32px;margin-left:auto;margin-right:auto;margin-bottom:48px;height:375px;text-align:center;width:80%;direction:rtl;> *{direction:rtl;}h1{text-shadow:", ";}canvas{border-radius:8px;}@media (max-width:560px){height:40vh;margin-bottom:48px;width:100vw;max-width:100%;}"], ({
  theme
}) => theme.shadows[1]);
const noChartDisplaySettings = {
  // backgroundColor: 'transparent',
  // strokeColor: 'transparent',
  // borderColor: 'transparent',
  showLine: false,
  borderWidth: 0,
  pointHitRadius: 0,
  pointHoverRadius: 0,
  pointHoverBorderWidth: 0,
  pointRadius: 0,
  pointHitRadius: 0,
  fill: false
};

const cutCaseCount = ({
  data
}) => data.length > 30 ? subtractArray(data) : data;

const displayOnChart = dset => _objectSpread({}, dset, {
  data: cutCaseCount(dset),
  fill: false
});

const dontDisplayOnChart = dset => _objectSpread({}, dset, {
  data: cutCaseCount(dset)
}, noChartDisplaySettings);

const sortForDisplay = dset => {
  return dset.label !== 'cases' ? dontDisplayOnChart(dset) : displayOnChart(dset);
};

const filterBy5 = (x, i) => !(i % 8);

const subtractArray = arr => arr.filter(filterBy5).concat(arr[arr.length - 1]);

const parseDatasets = (arrayOfSets, fill) => {
  return arrayOfSets.map(sortForDisplay); // return arrayOfSets.map(set => ({
  //   ...set,
  //   data: set.data.length > 30 ? subtractArray(set.data) : set.data,
  //   fill: fill || false,
  // }))
};

const LineChart = (props, {
  theme
}) => {
  const chartRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const data2 = {
    labels: props.labels.length > 30 ? subtractArray(props.labels) : props.labels,
    datasets: parseDatasets(props.data, props.fill)
  };

  const data = canvas => {
    const ctx = canvas.getContext('2d');
    return _objectSpread({}, data2);
  };

  var options = {
    responsive: true,
    maintainAspectRatio: false,
    onAnimationComplete: function () {
      this.showTooltip(this.datasets[0].points, true);
    },
    layout: {
      padding: {
        left: 5,
        right: 15,
        top: 15,
        bottom: 15
      }
    },
    animation: {
      easing: 'easeInOutQuad',
      duration: 999
    },
    scales: {
      xAxes: [{
        gridLines: {
          backgroundColor: props.theme.analogous,
          display: false,
          drawBorder: true,
          drawTicks: true,
          color: 'rgba(0, 0, 0, 0.05)',
          lineWidth: 1,
          zeroLineWidth: 1
        }
      }],
      yAxes: [{
        ticks: {
          display: true,
          maxTicksLimit: 6
        },
        gridLines: {
          backgroundColor: props.theme.primaryVariant,
          display: false,
          drawBorder: false,
          // drawBorder: true,
          drawTicks: true,
          color: 'rgba(0, 0, 0, 0.05)',
          lineWidth: 1,
          zeroLineWidth: 1
        }
      }]
    },
    elements: {
      line: {
        tension: 0.5
      }
    },
    legend: {
      display: props.showLegend !== undefined ? false : true,
      position: 'bottom'
    },
    tooltips: {
      displayColors: true,
      mode: 'index',
      titleAlign: 'center',
      position: 'nearest',
      intersect: false,
      bodySpacing: 4,
      padding: 15,
      titleFontFamily: 'Rubik',
      backgroundColor: props.theme.dark,
      titleFontColor: '#f9f9f9',
      xPadding: 24,
      yPadding: 14
    },
    hover: {
      mode: 'index',
      intersect: false
    },
    plugins: {
      datalabels: {
        display: ctx => {
          let i = ctx.dataIndex;
          if (ctx.dataset.label !== 'cases') return 0;
          return i === Math.floor(ctx.dataset.data.length / 3) || i === Math.floor(ctx.dataset.data.length * 0.66) || i === ctx.dataset.data.length - 1; // return i === 0 || i === (ctx.dataset.data.length - 1) || !(i % 4)
        },
        align: ctx => {
          return ctx.dataIndex === ctx.dataset.data.length - 1 ? 'end' : 'end';
        },
        anchor: 'end',
        padding: {
          left: 0,
          right: -50,
          top: -5,
          bottom: 0
        },
        color: props.theme.color,
        labels: {
          title: {
            font: {
              weight: 'bold',
              style: 'italic',
              family: 'Rubik'
            }
          }
        }
      }
    }
  };
  return __jsx(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    label: props.label,
    data: data,
    width: 100,
    options: options // height={40}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["withTheme"])(LineChart));

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
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./S */ "./components/S.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/QuickStats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const formatNumber = x => x.toString().split('').reverse().map((x, i) => i % 3 === 0 ? x + ',' : x).reverse().join('').slice(0, -1);

const Column = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "QuickStats__Column",
  componentId: "lmgi17-0"
})(["display:flex;flex-flow:column wrap;direction:", ";align-items:start;width:100%;background:#fafafa;padding:16px 3em 12px;border-radius:2px;border-bottom:1px solid #e4e7eb;@media (min-width:660px){box-shadow:none;border:1px solid #e4e7eb;height:auto;flex:1 0 ", ";}&:last-child{border-bottom:none;}"], props => props.ltr ? 'ltr' : 'rtl', props => props.world ? '249px' : '235px');
const InRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "QuickStats__InRow",
  componentId: "lmgi17-1"
})(["display:flex;flex-flow:row wrap;font-weight:700;color:", ";justify-content:", ";width:100%;line-height:1.45;"], props => props.theme.primaryColor, props => props.justify || 'space-between');
const TheRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "QuickStats__TheRow",
  componentId: "lmgi17-2"
})(["display:flex;flex-flow:column wrap;justify-content:center;box-shadow:", ";margin-bottom:28px;border-radius:8px;border:1px solid #e4e7eb;margin-left:auto;margin-right:auto;@media (min-width:660px) and (max-width:920px){max-width:620px;flex-flow:", ";}@media (min-width:921px) and (max-width:1023px){max-width:", ";flex-flow:", ";}@media (min-width:1024px){max-width:1064px;flex-flow:", ";}"], props => props.theme.shadows[1], props => props.world ? 'row wrap' : 'row wrap', props => props.world ? '900px' : '620px', props => props.world ? 'row wrap' : 'row wrap', props => props.world ? 'row wrap' : 'row wrap');
const Percentage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "QuickStats__Percentage",
  componentId: "lmgi17-3"
})(["font-size:10px;font-weight:500;color:", ";align-self:flex-end;padding-bottom:2px;border-radius:12px;background:#DFF7EC;padding:0.5em 1em;span{font-family:'Verdana';background:#DFF7EC;color:", ";}@media (min-width:350px){font-size:12px;}"], props => props.theme.text.secondary, props => props.theme.primaryLight);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "QuickStats__Header",
  componentId: "lmgi17-4"
})(["font-size:20px;font-weight:500;color:", ";width:auto;letter-spacing:0.1px;line-height:1.85;@media (min-width:660px) and (max-width:920px){font-size:12px;line-height:1.65;letter-spacing:0.025px;}@media (min-width:921px) and (max-width:1023px){font-size:14px;}@media (min-width:1024px){font-size:16x;}"], props => props.theme.text.primary);
const Number = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "QuickStats__Number",
  componentId: "lmgi17-5"
})(["font-size:24px;font-weight:700;color:", ";letter-spacing:1.2px;font-family:'Montserrat';padding:0;margin:0;line-height:1.65;span{font-size:10px;font-family:'Verdana';letter-spacing:0px;color:#717171;margin-left:1em;margin-right:1em;margin-bottom:4px;}@media (min-width:660px) and (max-width:920px){h1{font-size:14px;line-height:1.65;letter-spacing:0.5px;}}@media (min-width:921px) and (max-width:1023px){h1{font-size:12px;letter-spacing:0.8px;}}@media (min-width:1024px){h1{font-size:16px;}}"], props => props.theme.primaryVariant);

const isPercentDown = x => x < 0;

const showPercent = x => x !== 0;

const calcDiff = current => prev => current !== 0 ? ((current - prev) / prev * 100).toFixed(2) : 0; // Percentage of increase = |100 - 150|/100 = 50/100 = 0.5 = 50%


const labels = {
  cases: {
    heb: 'מאומתים',
    eng: 'Confirmed'
  },
  todayCases: {
    heb: 'מקרים חדשים',
    eng: 'New Cases'
  },
  deaths: {
    heb: 'נפטרו',
    eng: 'Deaths'
  },
  recovered: {
    heb: 'החלימו',
    eng: 'Recovered'
  },
  active: {
    heb: 'פעילים',
    eng: 'Active'
  },
  affectedCountries: {
    heb: 'מדינות נגועות',
    eng: 'Infected Countries'
  }
};

const engLbl = k => labels[k]['eng'];

const hebLbl = k => labels[k]['heb'];

const putLabel = (heb, k) => heb && hebLbl(k) || engLbl(k);

/* harmony default export */ __webpack_exports__["default"] = (({
  S,
  country,
  isHeb,
  yday,
  comparison = true
}) => {
  return __jsx(_S__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  }, __jsx(TheRow, {
    world: country.toLowerCase() === 'world',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }, Object.keys(S).map((k, i) => {
    return __jsx(Column, {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: undefined
    }, __jsx(Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: undefined
    }, " ", putLabel(isHeb, k)), __jsx(InRow, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: undefined
    }, __jsx(Number, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: undefined
    }, S[k] && formatNumber(S[k]), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: undefined
    }, comparison && country !== 'world' && country !== 'World' && `(${formatNumber(yday[k])})`)), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: undefined
    }), comparison && __jsx(Percentage, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: undefined
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: undefined
    }, calcDiff(S[k])(yday[k]) < 0 && "\u2B07" || '\u2B06'), "%", Math.abs(calcDiff(S[k])(yday[k])))));
  })));
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
})(["text-align:", ";font-size:", ";max-width:", ";margin:", ";line-height:", ";padding:", ";color:", ";direction:", ";@media (max-width:768px){font-size:12px;font-weight:300;margin:0;}"], props => props.center ? 'center' : '', props => props.fontSize || '16px', props => props.mw || 'fit-content', props => props.noMargin && '0' || '0', props => props.lineHeight || 1.5, props => props.padding || '', props => props.secondary ? props.theme.text.secondary : props.theme.text.primary, props => props.rtl ? 'rtl' : 'inherit');
const simpleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "S__simpleWrapper",
  componentId: "sc-3vwmv4-4"
})(["background:", ";direction:ltr;"], props => props.theme.bg || props.theme.bgColor);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "S__Container",
  componentId: "sc-3vwmv4-5"
})(["@media (max-width:576px){max-width:540px;max-width:100%;}@media (max-width:768px){}@media (max-width:992px){max-width:960px;}@media (min-width:1200px){max-width:1140px;}transition:all .5s cubic-bezier(.55,0,.1,1);padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;text-align:", ";"], props => props.textAlign && 'center');
const Btn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "S__Btn",
  componentId: "sc-3vwmv4-6"
})(["border-radius:", ";font-size:16px;padding:", ";", ";background:", ";color:", ";border:", ";font-weight:", ";font-family:'Rubik';cursor:", ";outline:none;line-height:1.5;margin:", ";box-shadow:", ";letter-spacing:", ";transition:all 0.3s ease-in-out;&:hover{transform:", ";background:", ";color:", ";}@media (max-width:450px){font-size:12px;font-weight:normal;letter-spacing:0.5px;}@media (max-width:344px){padding:2px 4px;letter-spacing:0.2px;}", ";"], props => props.radius ? props.radius : '4px', props => props.medium && '6px 9px' || props.big && '14px' || '8px 10px', props => props.small && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["font-size:12px;padding:0rem 1rem;"]), props => props.active && props.theme.primaryColor || props.bg && props.theme.general[props.bg] || props.theme[props.bg] || props.theme.primaryColor, props => props.active ? props.theme.onPrimary : props.btnColor && props.theme[props.btnColor] || props.theme.general.white, props => props.outline ? `${props.fat ? '2px' : '1px'} solid ${props.theme[props.outline] || props.theme.primaryColor}` : 'none', props => props.bold && 'bold' || 'normal', props => props.link ? 'pointer' : 'cursor', props => props.margin ? props.margin : '', props => props.theme.shadows[1], props => props.letterSpace ? '1.5px' : '0', props => props.hoverUp ? 'translateY(-5%)' : '', props => !props.active && props.hoverColor && props.theme[props.hoverColor], props => !props.active && props.hoverColor ? props.theme.onPrimary : '', props => props.KoFi && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["font-family:", ";font-weight:700;margin-left:4px;margin-right:4px;padding:0 12px;letter-spacing:1.75px;color:", ";cursor:pointer;background:", ";"], props.fontFamily, props => props.theme.white, props => props.theme.kofi));
const Button = props => __jsx(Btn, _extends({
  onClick: props.onClick
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146
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

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _QuickStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuickStats */ "./components/QuickStats.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Stats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Stats__Container",
  componentId: "tjczhx-0"
})(["max-width:1140px;margin:8px auto 0;text-align:center;"]);
function Stats({
  cn = '',
  todayWorld,
  todayStats,
  isHeb,
  yesteryday
}) {
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, todayWorld && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    style: {
      fontSize: '20px',
      paddingTop: '18px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, isHeb && 'המצב הנוכחי ב' || 'Status for: ', __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, cn === 'World' && isHeb && 'עולם' || cn)), __jsx(_QuickStats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    country: cn,
    yday: yesteryday,
    S: todayWorld,
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), todayStats && __jsx(_QuickStats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    country: cn,
    yday: yesteryday,
    S: todayStats,
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CoronaApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CoronaApp */ "./components/CoronaApp.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_S__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/S */ "./components/S.js");
/* harmony import */ var _components_InfoSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InfoSection */ "./components/InfoSection.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function IndexPage({
  isHeb,
  userLocation,
  yesterdayCn,
  yesterdayGlobal
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "nCorona - Novel Coronavirus Statistics & Resources for Coping")), __jsx(_components_S__WEBPACK_IMPORTED_MODULE_3__["FadeIn"], {
    delay: "0.5s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_components_CoronaApp__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isHeb: isHeb,
    userLocation: userLocation,
    yesterdayCn: yesterdayCn,
    yesterdayGlobal: yesterdayGlobal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_components_InfoSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })));
}

IndexPage.getInitialProps = async ctx => {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://corona.lmao.ninja/v2/countries/israel?yesterday=true');
  const globalData = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://corona.lmao.ninja/v2/all?yesterday=true');
  const yesterdayGlobal = {
    active: globalData.data.active,
    critical: globalData.data.critical,
    cases: globalData.data.cases,
    todayCases: globalData.data.todayCases,
    recovered: globalData.data.recovered,
    deaths: globalData.data.deaths,
    country: globalData.data.country,
    affectedCountries: globalData.data.affectedCountries
  };
  const yesterdayCn = {
    active: data.active,
    cases: data.cases,
    todayCases: data.todayCases,
    recovered: data.recovered,
    deaths: data.deaths,
    country: data.country
  };
  return {
    yesterdayCn,
    yesterdayGlobal
  };
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./utils/sortExternalApi.js":
/*!**********************************!*\
  !*** ./utils/sortExternalApi.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

const sortForChart = (obj, theme) => {
  const zeroNull = c => c === null ? 0 : c;

  const sortedObj = obj.sort((a, b) => new Date(a.date) - new Date(b.date));
  const initCasesArray = sortedObj.map(o => o.confirmed);
  const firstNumIndex = firstWhole(initCasesArray);
  const fObj = sortedObj.slice(firstNumIndex);
  const cases = fObj.map(o => o.confirmed);
  const labels = fObj.map(o => parseLabel(o.date));
  const deaths = fObj.map(o => zeroNull(o.deaths));
  const label = obj[0].location;
  const datasets = [{
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
    borderColor: theme && theme.analogous || '#6200ee',
    strokeColor: "#ADFF2F",
    pointBorderColor: 'rgba(75,10,192,0)',
    pointBackgroundColor: '#fff',
    pointHoverBackgroundColor: 'rgba(45, 20, 19, 0)',
    borderWidth: 5,
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointRadius: 1,
    pointHitRadius: 10
  }];
  return {
    datasets,
    labels,
    label
  };
};

/* harmony default export */ __webpack_exports__["default"] = (sortForChart);

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

const sortForChart = (obj, theme) => {
  const zeroNull = c => c === null ? 0 : c;

  const sortedObj = obj.sort((a, b) => new Date(a.date) - new Date(b.date));
  const initCasesArray = sortedObj.map(o => o.total_cases);
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
    borderColor: theme && theme.successDefault,
    strokeColor: theme && theme.successDefault,
    pointRadius: 2,
    borderWidth: 4,
    fill: true
  }, {
    label: 'deaths',
    data: deaths,
    backgroundColor: 'rgba(29,82,209,1) 100%)',
    backgroundColor: '#333',
    borderColor: theme && theme.blue,
    strokeColor: theme && theme.blue,
    pointRadius: 2,
    borderWidth: 4
  }, {
    label: 'cases',
    data: cases,
    backgroundColor: '#2A4561',
    borderColor: theme && theme.primaryLight || '#6200ee',
    strokeColor: theme && theme.primaryLight || '#ADFF2F',
    borderWidth: 5,
    borderCapStyle: 'butt',
    borderJoinStyle: 'miter',
    pointHoverRadius: 5,
    pointHoverBorderWidth: 2,
    pointRadius: 2,
    pointHitRadius: 10
  }];
  return {
    datasets,
    labels,
    label
  };
};

/* harmony default export */ __webpack_exports__["default"] = (sortForChart);

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


const baseURL = `https://nCorona.live/api/v1/countries`;

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
/* harmony import */ var _sortExternalApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortExternalApi */ "./utils/sortExternalApi.js");




const baseURL = `https://nCorona.live/api/v1/alltime/`;
const baseURLv2 = 'https://pomber.github.io/covid19/timeseries.json';

async function currentCountry() {
  return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://extreme-ip-lookup.com/json/').then(res => res.data.country).catch(e => 'israel');
} // function useTime(loc, url = baseURL) {


function useTime(loc, theme = {}) {
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
      const data = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(URL).then(res => res.data).catch(err => setError(err)); // const data = await axios.get(baseURLv2)
      //   .then(res => res.data[country])
      //   .catch(err => setError(err))
      // const timeStats = sortExternalApi(data);

      const timeStats = Object(_sortForChart__WEBPACK_IMPORTED_MODULE_2__["default"])(data, theme);
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
  return str === 'usa' || str === 'Usa' || str === 'United States' ? 'USA' : str === 'Uk' || str === 'England' || str === 'United Kingdom' || str == 'great britain' ? 'UK' : str.toLowerCase();
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
      setLoading(true);
      setError();
      let searchCountry = country || (await currentCountry());
      const parsedCountry = parseCn(searchCountry);
      const URL = url + 'today/' + parsedCountry.toLowerCase(); // const URL = url + (country === 'world' ? '' : searchCountry)

      try {
        // const data = await fetch(URL)
        //     .then(res => res.json())
        //     .catch(err => setError(err))
        const {
          data
        } = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(URL);
        const relevant = {
          active: data.active,
          cases: data.cases,
          todayCases: data.todayCases,
          recovered: data.recovered,
          deaths: data.deaths,
          country: data.country
        };
        setStats(relevant);
        setLoading(false);
      } catch (e) {
        setError(e);
      }
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

/***/ 4:
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