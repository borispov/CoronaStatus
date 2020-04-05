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
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Spinner */ "./components/Spinner.js");
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
          lineNumber: 66
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Loading Data . . ."));
    }

    if (this.state.error) {
      return __jsx(_S__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
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
        lineNumber: 74
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
        lineNumber: 80
      },
      __self: this
    }, __jsx(_S__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      active: this.state.active === 'worldCases',
      bg: "transparent",
      fat: true,
      outline: "primaryDark",
      btnColor: "onBg",
      medium: true,
      onClick: () => this.present('worldCases'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, this.props.isHeb && 'נדבקים' || 'Cases'), __jsx(_S__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      active: this.state.active === 'deathCases',
      bg: "transparent",
      fat: true,
      outline: "primaryDark",
      btnColor: "onBg",
      medium: true,
      onClick: () => this.present('deathCases'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, this.props.isHeb && 'מקרי מוות' || 'Deaths'), __jsx(_S__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      active: this.state.active === 'newCases',
      bg: "transparent",
      fat: true,
      outline: "primaryDark",
      btnColor: "onBg",
      medium: true,
      onClick: () => this.present('newCases'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, this.props.isHeb && 'מקרים חדשים' || 'New cases')), this.state.worldData && __jsx(_Chart__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "line",
      labels: this.state.worldLabels,
      data: this.state[this.state.dataToPresent],
      label: this.props.isHeb ? 'נתונים מהעולם' : 'Global',
      theme: this.props.theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }) || __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
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
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "./components/Input.js");
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stats */ "./components/Stats.js");
/* harmony import */ var _utils_useTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useTime */ "./utils/useTime.js");
/* harmony import */ var _utils_useTodayStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useTodayStats */ "./utils/useTodayStats.js");
/* harmony import */ var _utils_useCountries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useCountries */ "./utils/useCountries.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./S */ "./components/S.js");
/* harmony import */ var _HeaderDescription__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HeaderDescription */ "./components/HeaderDescription.js");
/* harmony import */ var _CaseChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CaseChart */ "./components/CaseChart.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/CoronaApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const CoronaApp = ({
  isHeb,
  theme
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
  const url = 'https://nCorona.live/api/v1/';
  const url2 = 'https://corona.lmao.ninja/countries/';
  const worldUrl = 'https://corona.lmao.ninja/all';
  const {
    countryStats
  } = Object(_utils_useTime__WEBPACK_IMPORTED_MODULE_3__["default"])(country, theme);
  const {
    todayStats
  } = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_4__["default"])(url, country);
  const worldToday = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_4__["default"])(url, 'world').todayStats;
  const {
    countries
  } = Object(_utils_useCountries__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const worldTodaySorted = worldToday && {
    active: worldToday.active,
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
      lineNumber: 59
    },
    __self: undefined
  }, __jsx(_HeaderDescription__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), __jsx(_S__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, countryStats && __jsx(_Chart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isHeb: isHeb,
    type: "line",
    labels: countryStats.labels,
    data: countryStats.datasets.filter(a => a.label === 'cases'),
    label: country || 'israel',
    fill: false,
    stops: 3,
    showLegend: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cn: country || todayStats && todayStats.country,
    todayStats: todayStatsSorted,
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }), __jsx("form", {
    style: {
      maxWidth: '520px',
      margin: '54px auto',
      textAlign: 'center'
    },
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx("label", {
    style: {
      fontSize: '16px',
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, isHeb ? `נתונים לפי מדינה` : `Data For Country:`), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: 'Select',
    options: selectOptions,
    value: country,
    onChange: handleChange,
    placeholder: country || 'ישראל',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  })), __jsx(_HeaderDescription__WEBPACK_IMPORTED_MODULE_8__["default"], {
    txt: "* \u05D2\u05E8\u05E4\u05D9\u05DD \u05D4\u05DE\u05E6\u05D9\u05D2\u05D9\u05DD \u05D0\u05EA \u05E9\u05D9\u05E2\u05D5\u05E8 \u05D4\u05E6\u05DE\u05D9\u05D7\u05D4 \u05E9\u05DC \u05E0\u05D2\u05D9\u05E3 \u05D4\u05E7\u05D5\u05E8\u05D5\u05E0\u05D4, \u05D0\u05D9\u05E0\u05DD \u05DE\u05EA\u05E2\u05D3\u05DB\u05E0\u05D9\u05DD \u05D1\u05D6\u05DE\u05DF \u05D0\u05DE\u05EA \u05D5\u05DC\u05DB\u05DF \u05D0\u05D9\u05E0\u05DD \u05DE\u05E9\u05E7\u05E4\u05D9\u05DD \u05D0\u05EA \u05D4\u05D9\u05D5\u05DD \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9. \u05D1\u05D3\u05E8\u05DA-\u05DB\u05DC\u05DC \u05DE\u05EA\u05E7\u05D9\u05D9\u05DD \u05E4\u05E2\u05E8 \u05E9\u05DC \u05D9\u05D5\u05DD, \u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC\u05D5\u05E9\u05D4 \u05D9\u05DE\u05D9\u05DD. \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05D4\u05DE\u05D5\u05E6\u05D2\u05D9\u05DD \u05DE\u05D7\u05D5\u05E5 \u05DC\u05D2\u05E8\u05E4\u05D9\u05DD \u05DE\u05E9\u05E7\u05E4\u05D9\u05DD \u05D0\u05EA \u05D4\u05D6\u05DE\u05DF \u05D4\u05E0\u05EA\u05D5\u05DF \u05D1\u05E8\u05D2\u05E2 \u05D4\u05E0\u05D5\u05DB\u05D7\u05D9 \u05D5\u05DE\u05EA\u05E2\u05D3\u05DB\u05E0\u05D9\u05DD \u05D1\u05E2\u05E8\u05DA \u05D0\u05D7\u05EA \u05DC\u05D7\u05E6\u05D9 \u05E9\u05E2\u05D4.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cn: 'World',
    todayWorld: worldTodaySorted,
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }), __jsx(_CaseChart__WEBPACK_IMPORTED_MODULE_9__["default"], {
    showWorld: showWorld,
    country: country,
    isHeb: isHeb,
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_11__["withTheme"])(CoronaApp));

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
})(["color:", ";font-size:14px;font-family:'Open Sans';line-height:1.5;max-width:520px;text-align:center;margin:0 auto;@media (max-width:768px){max-width:380px;}@media (max-width:320px){max-width:88%;}"], props => props.secondary ? props.theme.text.secondary : props.theme.text.primary);
const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "HeaderDescription__Wrap",
  componentId: "sc-110gwmc-1"
})(["z-index:-1;position:relative;display:block;width:620px;max-width:620px;margin:0 auto 24px;@media (max-width:768px){width:320px;max-width:380px;}@media (max-width:320px){max-width:fit-content;}"]);
const Href = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "HeaderDescription__Href",
  componentId: "sc-110gwmc-2"
})(["outline:none;text-decoration:none;font-weight:bold;color:", ";"], props => props.theme.primaryVariant);
/* harmony default export */ __webpack_exports__["default"] = (({
  txt
}) => __jsx(Wrap, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, txt && __jsx(Text, {
  secondary: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, txt) || __jsx(Text, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, "This website makes use of public health data, specifically ", __jsx(Href, {
  href: "https://www.ourworldindata.org",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, "www.ourworldindata.org"), " and ", __jsx(Href, {
  href: "https://WHO.int",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
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
})(["text-align:none;display:flex;flex-wrap:wrap;justify-content:center;font-family:Roboto;margin-left:15px;margin-right:15px;margin-bottom:32px;@media (max-width:768px){flex-direction:column;align-content:center;}"]);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "InfoSection__Section",
  componentId: "sc-1anhjcp-1"
})(["border-radius:4px;flex:0 0 50%;max-width:33%;position:relative;width:100%;border:1px solid;border-color:", ";background:", ";margin-left:8px;margin-right:8px;margin-top:16px;margin-bottom:16px;@media (max-width:768px){flex-direction:column;flex:0 0 100%;max-width:85%;}"], props => props.theme.primaryColor, props => props.theme.bgColor);
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h2.withConfig({
  displayName: "InfoSection__SectionTitle",
  componentId: "sc-1anhjcp-2"
})(["color:", ";background:", ";font-size:20px;padding:4px 8px;margin-bottom:8px;border-bottom:1px solid black;"], props => props.theme.onPrimary, props => props.theme.primaryLight);
const Link = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a.withConfig({
  displayName: "InfoSection__Link",
  componentId: "sc-1anhjcp-3"
})(["text-decoration:none;color:", ";font-weight:700 !important;font-family:'Roboto' !important;font-size:18px;line-height:1.8;padding:6px 4px 2px 4px;@media (max-width:768px){font-size:16px;}"], props => props.theme.primaryColor);
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
      lineNumber: 89
    },
    __self: undefined
  }, __jsx(Link, {
    href: item.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, item.subject), __jsx(Desc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, item.description));
};

const renderSection = secData => {
  return secData.map((it, ix) => __jsx(Section, {
    key: ix,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, __jsx(SectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
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
        lineNumber: 134
      },
      __self: undefined
    }, " Received Error Fetching Information ... Let Me Know About This: boristofu@gmail.com");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, "Resources"), __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
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
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./S */ "./components/S.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/LineChart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["defaults"].global.defaultFontFamily = "'PT Sans', sans-serif";
react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["defaults"].global.hover.mode = 'nearest';
react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["defaults"].global.hover.axis = 'xy';
react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["defaults"].global.hover.intersect = false;
const Div = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "LineChart__Div",
  componentId: "sc-9esmyi-0"
})(["margin-top:32px;margin-left:auto;margin-right:auto;margin-bottom:48px;height:375px;text-align:center;width:80%;direction:rtl;> *{direction:rtl;}h1{text-shadow:", ";}@media (max-width:768px){height:40vh;margin-bottom:48px;width:100vw;max-width:100%;}"], ({
  theme
}) => theme.shadows[1]);

const filterBy5 = (x, i) => !(i % 4);

const subtractArray = arr => arr.filter(filterBy5);

const parseDatasets = (arrayOfSets, fill) => {
  return arrayOfSets.map(set => _objectSpread({}, set, {
    data: set.data.length > 30 ? subtractArray(set.data) : set.data,
    fill: fill || false
  }));
};

const LineChart = (props, {
  theme
}) => {
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
    maintainAspectRatio: false,
    onAnimationComplete: function () {
      this.showTooltip(this.datasets[0].points, true);
    },
    animation: {
      easing: 'easeInOutQuad',
      duration: 100
    },
    scales: {
      xAxes: [{
        gridLines: {
          drawBorder: true,
          drawTicks: true,
          color: 'rgba(0, 0, 0, 0.05)',
          lineWidth: 1,
          zeroLineWidth: 0.2
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 6
        },
        gridLines: {
          drawBorder: true,
          drawTicks: true,
          zeroLineWidth: 0.2,
          color: 'rgba(0, 0, 0, 0.05)',
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
      titleFontFamily: 'Roboto',
      backgroundColor: 'rgba(20,20,20, 1)',
      titleFontColor: '#f9f9f9'
    },
    plugins: {
      datalabels: {
        display: ctx => {
          let i = ctx.dataIndex;
          return i === 0 || i === ctx.dataset.data.length - 1 || !(i % 5);
        },
        align: ctx => {
          return ctx.dataIndex === ctx.dataset.data.length - 1 ? 'start' : 'end';
        },
        anchor: 'end',
        color: props.theme.color,
        labels: {
          title: {
            font: {
              weight: 'bold',
              style: 'italic',
              family: 'Roboto'
            }
          }
        }
      }
    }
  };
  return __jsx(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
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
      lineNumber: 131
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


const Row = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "QuickStats__Row",
  componentId: "lmgi17-0"
})(["display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px;"]);
const Col = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "QuickStats__Col",
  componentId: "lmgi17-1"
})(["text-align:center;padding:8px 10px;font-weight:700;flex:0 0 20%;max-width:20%;position:relative;width:100%;display:flex;flex-direction:column;background:", ";color:", ";justify-content:center;@media (max-width:768px){padding:8px 12px;}"], props => props.bg && props.theme.general[props.bg] || props.theme.primaryColor, props => props.theme.onPrimary);
const Country = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "QuickStats__Country",
  componentId: "lmgi17-2"
})(["font-size:18px;font-weight:bold;align-self:center;color:", ";@media (max-width:768px){font-size:14px;}"], props => props.theme.onPrimary);
const Div = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "QuickStats__Div",
  componentId: "lmgi17-3"
})(["box-shadow:", ";border-radius:6px;margin-bottom:16px;"], props => props.theme.shadows[2]);
/* harmony default export */ __webpack_exports__["default"] = (({
  S,
  country,
  isHeb
}) => {
  return __jsx(_S__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(Col, {
    style: {
      borderRight: 'none',
      borderTopRightRadius: '5px',
      borderBottomRightRadius: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(Country, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, " ", country, " ")), __jsx(Col, {
    bg: "primaryVariant",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(Country, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, S.cases, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, isHeb ? 'נדבקים' : 'Infected'))), __jsx(Col, {
    bg: "successDefault",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(Country, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, S.recovered, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, isHeb ? 'החלימו' : 'Recovered'))), __jsx(Col, {
    bg: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx(Country, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, S.deaths, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, isHeb ? 'מקרי מוות' : 'Deaths'))), __jsx(Col, {
    bg: "error2",
    style: {
      borderLeft: 'none',
      borderTopLeftRadius: '5px',
      borderBottomLeftRadius: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx(Country, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, S.todayCases, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, isHeb ? 'מקרים חדשים' : 'Today Cases'))))));
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
})(["display:flex;flex-direction:", ";justify-content:", ";margin:", ";color:", ";align-items:", ";flex:", ";background:", ";padding:", ";@media (max-width:768px){flex-direction:", ";}"], props => props.column && 'column' || 'row', props => props.justify || 'center', props => props.margin || '0 2px', props => props.color || '', props => props.alignItems || '', props => props.flex, props => props.bgColor === 'inverse' ? props.theme.color : props.bGcolor === 'bg' ? props.theme.bgColor : '', props => props.padding, props => props.mRow ? 'row' : props.mCol ? 'column' : '');
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
})(["text-align:", ";font-size:", ";max-width:", ";margin:", ";line-height:", ";padding:", ";color:", ";@media (max-width:768px){font-size:12px;font-weight:300;margin:0;}"], props => props.center ? 'center' : '', props => props.fontSize || '16px', props => props.mw || 'fit-content', props => props.noMargin && '0' || '0', props => props.lineHeight || 1.5, props => props.padding || '', props => props.secondary ? props.theme.text.secondary : props.theme.text.primary);
const simpleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "S__simpleWrapper",
  componentId: "sc-3vwmv4-4"
})(["background:", ";color:", ";direction:ltr;"], props => props.theme.bgColor, props => props.theme.color);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "S__Container",
  componentId: "sc-3vwmv4-5"
})(["@media (max-width:576px){max-width:540px;max-width:100%;}@media (max-width:768px){}@media (max-width:992px){max-width:960px;}@media (min-width:1200px){max-width:1140px;}transition:all .5s cubic-bezier(.55,0,.1,1);width:85%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;text-align:", ";"], props => props.textAlign && 'center');
const Btn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "S__Btn",
  componentId: "sc-3vwmv4-6"
})(["border-radius:", ";padding:", ";font-size:", ";background:", ";color:", ";border:", ";font-family:'Sans';font-weight:", ";cursor:", ";outline:none;line-height:1.5;margin:", ";box-shadow:", ";transition:all 0.3s ease-in-out;&:hover{transform:", ";background:", ";}@media (max-width:450px){font-size:12px;font-weight:normal;}"], props => props.radius ? props.radius : '4px', props => props.small && '.375rem .75rem' || props.medium && '6px 9px' || props.big && '14px' || '10px 14px', props => props.small ? '12px' : '16px', props => props.active && props.theme.primaryColor || props.bg && props.theme.general[props.bg] || props.theme.primaryColor, props => props.active ? props.theme.onPrimary : props.btnColor && props.theme[props.btnColor] || props.theme.onPrimary, props => props.outline ? `${props.fat ? '2px' : '1px'} solid ${props.theme[props.outline] || props.theme.primaryColor}` : 'none', props => props.bold && 'bold' || 'normal', props => props.link ? 'pointer' : 'cursor', props => props.margin ? props.margin : '', props => props.theme.shadows[1], props => props.hoverUp ? 'translateY(-5%)' : '', props => props.hoverColor && props.theme[props.hoverColor]);
const LangBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Btn).withConfig({
  displayName: "S__LangBtn",
  componentId: "sc-3vwmv4-7"
})(["position:relative;background:lightblue;color:#111;padding:0.54rem 0.85rem;font-size:12px;font-weight:400;font-family:'Roboto';outline:none;text-align:center;border:none;border-radius:6px;margin:0 6px;margin-left:16px;z-index:1;"]);
const Button = props => props.langBtn && __jsx(LangBtn, _extends({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 138
  },
  __self: undefined
}), props.children) || __jsx(Btn, _extends({
  onClick: props.onClick
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 139
  },
  __self: undefined
}), props.children);
const BaseAnimation = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "S__BaseAnimation",
  componentId: "sc-3vwmv4-8"
})(["   animation-duration:", ";animation-timing-function:", ";animation-delay:", ";animation-iteration-count:", ";animation-direction:", ";animation-fill-mode:", ";animation-play-state:", ";display:", ";"], props => props.duration, props => props.timingFunction, props => props.delay, props => props.iterationCount, props => props.direction, props => props.fillMode, props => props.playState, props => props.display);
BaseAnimation.defaultProps = {
  duration: '1s',
  timingFunction: 'ease',
  delay: '0s',
  iterationCount: '1',
  direction: 'normal',
  fillMode: 'both',
  playState: 'running',
  display: 'block'
};
const fadeInAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["from{transform:scale(0.5);opacity:0;}to{transform:scale(1);opacity:1;}"]);
const FadeIn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(BaseAnimation).withConfig({
  displayName: "S__FadeIn",
  componentId: "sc-3vwmv4-9"
})(["animation-name:", ";"], fadeInAnimation);

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
  class: "loader-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("svg", {
  class: "loader",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 340 340",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("circle", {
  cx: "170",
  cy: "170",
  r: "160",
  stroke: "#E2007C",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), __jsx("circle", {
  cx: "170",
  cy: "170",
  r: "135",
  stroke: "#404041",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx("circle", {
  cx: "170",
  cy: "170",
  r: "110",
  stroke: "#E2007C",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("circle", {
  cx: "170",
  cy: "170",
  r: "85",
  stroke: "#404041",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}))));

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
})(["position:relative;margin:0;padding:16px 8px;text-align:center;border-radius:6px;align-content:center;justify-content:space-between;color:", ";"], props => props.theme.onBg);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "StatBlock__Title",
  componentId: "rmn7zo-1"
})(["font-weight:400;font-size:18px;text-decoration:underline;letter-spacing:1px;color:", ";margin-bottom:6px;"], props => props.theme.onBg);
const Span = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "StatBlock__Span",
  componentId: "rmn7zo-2"
})(["font-size:16px;font-weight:700;margin:12px 0 0 0;color:", ""], props => props.theme.color);

const StatBlock = ({
  title,
  data
}) => {
  return __jsx(Block, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, title), __jsx(Span, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
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
})(["max-width:1140px;margin:24px auto 0;text-align:center;margin-top:32px;"]);
const Flex = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Stats__Flex",
  componentId: "tjczhx-1"
})(["display:flex;justify-content:space-evenly;background-color:", ";border-radius:12px;"], props => props.bg || props.theme.bgColor);
function Stats({
  cn = '',
  todayWorld,
  todayStats,
  isHeb
}) {
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, todayStats && __jsx(_QuickStats__WEBPACK_IMPORTED_MODULE_8__["default"], {
    country: cn,
    S: todayStats,
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }) || todayWorld && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("h1", {
    style: {
      fontSize: '20px',
      paddingTop: '18px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, isHeb && 'המצב ב: ' || 'Status for: ', __jsx("span", {
    style: {
      fontWeight: 'bold',
      textDecoration: 'underline'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, " ", cn === 'World' && isHeb && 'עולם' || cn)), __jsx(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: isHeb && 'סך נדבקים' || "Total Confirmed",
    data: todayWorld.cases,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: isHeb && 'פעילים' || "Active",
    data: todayWorld.active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: isHeb && 'החלימו' || "Recovered",
    data: todayWorld.recovered,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: isHeb && 'מקרי מוות' || "Total Deaths",
    data: todayWorld.deaths,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }))));
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CoronaApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CoronaApp */ "./components/CoronaApp.js");
/* harmony import */ var _components_S__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/S */ "./components/S.js");
/* harmony import */ var _components_InfoSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/InfoSection */ "./components/InfoSection.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function IndexPage({
  isHeb
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_S__WEBPACK_IMPORTED_MODULE_2__["FadeIn"], {
    delay: "0.5s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_components_CoronaApp__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_components_InfoSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })));
}

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

const sortForChart = obj => {
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
    // backgroundColor: 'rgb(235, 65, 15)',
    borderColor: 'rgb(235, 65, 15)',
    // borderColor: '#97D3ED',
    strokeColor: "#ADFF2F",
    pointBorderColor: 'rgba(75,10,192,0)',
    pointBackgroundColor: '#fff',
    pointHoverBackgroundColor: 'rgba(45, 20, 19, 0)',
    pointRadius: 0,
    borderWidth: 5
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
    fill: true
  }, {
    label: 'deaths',
    data: deaths,
    backgroundColor: 'rgba(29,82,209,1) 100%)',
    borderColor: '#b00020',
    strokeColor: "rgba(222, 222, 34, 1)",
    pointRadius: 1,
    borderWidth: 4
  }, {
    label: 'cases',
    data: cases,
    backgroundColor: '#2A4561',
    borderColor: theme && theme.primaryDark || '#6200ee',
    strokeColor: "#ADFF2F",
    borderWidth: 5,
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: '#3700B3',
    pointHoverBorderColor: '#3700B399',
    pointHoverBorderWidth: 2,
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
      setLoading(true);
      setError();
      let searchCountry = country || (await currentCountry());
      const parsedCountry = parseCn(searchCountry);
      const URL = url + 'today/' + searchCountry.toLowerCase(); // const URL = url + (country === 'world' ? '' : searchCountry)

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