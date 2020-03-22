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

const Btn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
  border-radius: 4px;
  padding: 8px 14px;
  font-size: 16px;
  background: lightblue;
  color: ${props => props.theme.color};
  font-family: 'Sans'
  :hover & {
    background: ${props => props.theme.color};
    color: ${props => props.theme.bgColor};
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (props => __jsx(Btn, {
  onClick: props.onClick,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
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









const baseURL = `http://covid19.borisky.me:3003/api/v1/alltime/`;

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

const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
`;
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
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_11__);
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
  const url = 'http://covid19.borisky.me:3003/api/v1/';
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
      lineNumber: 73
    },
    __self: undefined
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "Covid19 Feed"), __jsx(_HeaderDescription__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }), __jsx(_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, countryStats && __jsx(_Chart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isHeb: lang === 'heb',
    type: "line",
    labels: countryStats.labels,
    data: countryStats.datasets.filter(a => a.label === 'cases'),
    label: country || 'israel',
    theme: theme,
    fill: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cn: country || todayStats && todayStats.country,
    todayStats: todayStatsSorted,
    isHeb: lang === 'heb',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
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
      lineNumber: 99
    },
    __self: undefined
  }, __jsx("label", {
    style: {
      fontSize: '16px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, lang === 'eng' ? `Search For Country:` : `חיפוש לפי מדינה`), __jsx(react_select__WEBPACK_IMPORTED_MODULE_11___default.a, {
    options: selectOptions,
    value: country,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  })), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cn: 'World',
    todayWorld: worldTodaySorted,
    isHeb: lang === 'heb',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }), __jsx(_CaseChart__WEBPACK_IMPORTED_MODULE_10__["default"], {
    showWorld: showWorld,
    theme: theme,
    country: country,
    isHeb: lang === 'heb',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
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

const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  align-self: center;
  color: #e6e6e6;
  font-size: 4rem;
  font-family: monospace;
  text-align: center;
`;
const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 82px;
  width: 100%;
  background: linear-gradient(45deg, #cc0404, #000000d6);
  text-align: center;
  border-bottom: 1px solid darkblue;
  margin: 0 auto;
  margin-bottom: 48px;
`;
/* harmony default export */ __webpack_exports__["default"] = (({
  children
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
}, children)));

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
const Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  color: ${props => props.theme.categoryColor};
  font-size: 14px;
  font-family: 'Open Sans';
  line-height: 1.6;
  max-width: 520px;
  text-align: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 380px;
  }

`;
const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: block;
  width: 620px;
  max-width: 620px;
  margin: 0 auto 24px;
  @media (max-width: 768px) {
    width: 320px;
    max-width: 380px;
  }

`;
const Href = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a`
  outline: none;
  text-decoration: none;
  font-weight: bold;
  color: ${props => props.theme.categoryHoverColor};
`;
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


const Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input`
  outline: none;
  max-width: 420px;
  width: ${props => props.btn ? '62px' : '85%'};
  margin: ${props => props.btn ? '0 8px' : 0};
  text-align: center;
  border-radius: 6px;
  background: ${props => props.theme.categoryColor};
  font-size: 1.1rem;
  padding: 8px 4px;
`;
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
  const data = {
    labels: props.labels.length > 30 ? subtractArray(props.labels) : props.labels,
    datasets: parseDatasets(props.data, props.fill)
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
      display: true,
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
        display: true,
        // color: '#292929CC',
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
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("h1", {
    style: {
      fontSize: '1.65rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
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
      lineNumber: 90
    },
    __self: undefined
  }));
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


const Block = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
  margin: 0;
  padding: 16px 12px;
  background: ${props => props.theme.bgColor};
  font-size: 18px;
  text-align: center;
  border-radius: 6px;
  align-content: center;
  justify-content: space-between;
  // box-shadow: 0 1px 12px 2px rgba(20,20,20,0.1);
  color: ${props => props.theme.color};
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3`
  font: 'Helvetica';
  text-decoration: underline;
  letter-spacing: 1px;
  color: ${props => props.theme.textColor};
  margin-bottom: 6px;
`;

const StatBlock = ({
  title,
  data
}) => {
  return __jsx(Block, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, title, ":"), __jsx("span", {
    style: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '12px 0 0 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
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
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Stats.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








const Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  max-width: 760px;
  margin: 24px auto 0;
  text-align: center;
  margin-top: 16px;
`;
const Flex = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  display: flex;
  justify-content: space-evenly;
  background-color: ${props => props.bg || ''};
  border-radius: 12px;
  & > div {
    background-color: ${props => props.bg || ''};
  }
`;
function Stats({
  cn = '',
  todayWorld,
  todayStats,
  isHeb
}) {
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
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
      lineNumber: 34
    },
    __self: this
  }, __jsx("h1", {
    style: {
      fontSize: '20px'
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
  }, " ", cn)), __jsx(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: isHeb && 'נדבקים' || "Infected",
    data: todayStats.cases,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: isHeb && 'החלימו' || "Recovered",
    data: todayStats.recovered,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: isHeb && 'מקרי מוות' || "Total Deaths",
    data: todayStats.deaths,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: isHeb && 'מקרים חדשים' || "New Cases Today",
    data: todayStats.todayCases,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))) || todayWorld && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("h1", {
    style: {
      fontSize: '20px',
      backgroundColor: 'beige',
      paddingTop: '18px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, isHeb && 'המצב ב: ' || 'Status for: ', __jsx("span", {
    style: {
      fontWeight: 'bold',
      textDecoration: 'underline'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, " ", cn)), __jsx(Flex, {
    bg: "beige",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: isHeb && 'נדבקים' || "Infected",
    data: todayWorld.cases,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: isHeb && 'החלימו' || "Recovered",
    data: todayWorld.recovered,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: isHeb && 'מקרי מוות' || "Total Deaths",
    data: todayWorld.deaths,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
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
  }


  .div.span.h3 {
    font-family: 'Roboto'
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CoronaApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CoronaApp */ "./components/CoronaApp.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Global */ "./pages/Global.js");
/* harmony import */ var _utils_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/themes */ "./utils/themes.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const lightTheme = () => _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_4__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_4__["themes"]['light']);

const darkTheme = () => _objectSpread({}, _utils_themes__WEBPACK_IMPORTED_MODULE_4__["themes"]['common'], {}, _utils_themes__WEBPACK_IMPORTED_MODULE_4__["themes"]['dark']);

const Btn = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button`
  color: ${props => props.theme.bgColor};
  background-color: ${props => props.theme.color};
  border-radius: 50%;
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  left: ${props => props.left};
  padding: 6px 2px;
  outline: none;
`;
const LangBtn = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button`
  background: ${props => props.theme.searchBgColor};
  color: ${props => props.theme.color};
  font-size: 14px;
  font-weight: 600;
  padding: 6px 10px;
  width: 45px;
  outline: none;
  text-align: center;
  border: none;
  border-radius: 6px;
  @media (max-width: 768px) {
    width: 30px;
    font-size: 12px;
    font-weight: 400;
    padding: 4px 6px;
  }

`;
const BtnContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  position: absolute;
  top: 5%;
  right: 3%;
  padding: 0 12px;
  @media (max-width: 768px) {
    right: 0%;
    top: 8%;
    padding: 0;
  }
`;
function IndexPage() {
  const {
    0: theme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(lightTheme());

  const setDarkTheme = () => setTheme(darkTheme());

  const setLightTheme = () => setTheme(lightTheme());

  const {
    0: lang,
    1: setLang
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('heb');

  const setHeb = () => setLang('heb');

  const setEng = () => setLang('eng');

  const isLight = theme.type === 'light';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_Global__WEBPACK_IMPORTED_MODULE_3__["default"], {
    lang: lang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx(_components_CoronaApp__WEBPACK_IMPORTED_MODULE_1__["default"], {
    theme: theme,
    lang: lang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(BtnContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
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
      lineNumber: 78
    },
    __self: this
  }, "En"), __jsx(LangBtn, {
    onClick: lang === 'eng' ? setHeb : () => {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "\u05E2\u05D1\u05E8"))));
}

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
    borderWidth: 2,
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
    pointRadius: 3,
    borderWidth: 3,
    datalabels: {
      display: ctx => ctx.dataIndex % 2,
      align: 'end',
      anchor: 'end'
    }
  }, {
    label: 'cases',
    data: cases,
    backgroundColor: 'rgba(208,42,55,1)',
    borderColor: 'rgba(210, 50, 120, 1)',
    strokeColor: "rgba(200, 200, 200, 1)",
    pointBorderColor: 'rgba(75,10,192,1)',
    pointBackgroundColor: '#fff',
    pointHoverBackgroundColor: 'rgba(45, 20, 19, 1)',
    pointRadius: 2,
    borderWidth: 3,
    fillColor: 'rgba(230, 15, 66, 1)',
    datalabels: {
      display: ctx => ctx.dataIndex % 2,
      align: 'end',
      anchor: 'end'
    }
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
    color: '#3E4C59',
    searchBgColor: '#E4E7EB',
    boxShadow: '0.8rem 0.8rem 1.5rem gray',
    categoryColor: '#999',
    categoryHoverColor: '#333',
    textColor: '#ED3833'
  },
  dark: {
    type: 'dark',
    bgColor: '#1F2933',
    headerBg: '#3d444b',
    color: '#E4E7EB',
    searchBgColor: '#E4E7EB',
    boxShadow: '0.4rem 0.4rem 1.5rem #11111111',
    categoryColor: '#CBD2D9',
    categoryHoverColor: '#9AA5B1',
    textColor: '#ED3833'
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


const baseURL = `http://covid19.borisky.me:3003/api/v1/countries`;

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



const baseURL = `http://covid19.borisky.me:3003/api/v1/alltime/`;

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