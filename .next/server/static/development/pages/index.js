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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const Btn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button__Btn",
  componentId: "sc-1h1khwv-0"
})(["border-radius:", ";padding:", ";font-size:", ";background:", ";color:", ";font-family:'Sans';border:", ";font-weight:", ";cursor:", ";line-height:1.5;"], props => props.radius ? props.radius : '4px', props => props.small && '.375rem .75rem' || '10px 14px', props => props.small ? '14px' : '16px', props => props.bgColor && props.bgColor || props.theme.btnBg, props => props.btnColor && props.btnColor || props.theme.btnColor, props => props.border ? props.border : 'none', props => props.bold && 'bold' || 'normal', props => props.link ? 'pointer' : 'cursor');
const LangBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button__LangBtn",
  componentId: "sc-1h1khwv-1"
})(["position:relative;background:", ";color:", ";font-size:14px;font-weight:600;font-family:'Sans';padding:8px 10px;width:100%;outline:none;text-align:center;border:none;border-radius:6px;margin:0 6px;margin-left:16px;@media (max-width:768px){font-size:12px;font-weight:400;padding:4px 6px;}"], props => props.theme.bgColor, props => props.theme.color);
/* harmony default export */ __webpack_exports__["default"] = (props => props.langBtn && __jsx(LangBtn, _extends({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}), props.children) || __jsx(Btn, _extends({
  onClick: props.onClick
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}), props.children));

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
/* harmony import */ var _utils_sortForChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/sortForChart */ "./utils/sortForChart.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Container */ "./components/Container.js");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Spinner */ "./components/Spinner.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/CaseChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const baseURL = `https://nCorona.live/api/v1/alltime/`;

const worldTimeData = async () => {
  const data = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(baseURL);
  const dataRes = await Object(_utils_sortForChart__WEBPACK_IMPORTED_MODULE_3__["default"])(data.data);
  console.log(dataRes);
  return dataRes;
};

class CaseChart extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "present", val => this.setState({
      dataToPresent: val
    }));

    this.state = {
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
      const timeStats = await worldTimeData();
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
      return __jsx(_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      return __jsx(_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
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

    return __jsx(_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("p", {
      style: {
        margin: '82px 0 0 0'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, this.props.isHeb && 'שיעור התפשטות הנגיף בעולם, מקרי מוות ומסרים מקרים חדשים ליום' || 'Growth Rate of the virus in the world, including deaths and new cases'), this.state.worldData && __jsx(_Chart__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "line",
      labels: this.state.worldLabels,
      data: this.state[this.state.dataToPresent],
      label: "Global Statistics",
      theme: this.props.theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }) || __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
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
        lineNumber: 89
      },
      __self: this
    }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: () => this.present('worldCases'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, this.props.isHeb && 'נדבקים' || 'Cases'), __jsx(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: () => this.present('deathCases'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, this.props.isHeb && 'מקרי מוות' || 'Deaths'), __jsx(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: () => this.present('newCases'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
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
})(["max-width:", ";margin:0 auto;text-align:center;"], props => props.mw ? props.mw : '992px');
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
/* harmony import */ var _utils_useTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useTime */ "./utils/useTime.js");
/* harmony import */ var _utils_useTodayStats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useTodayStats */ "./utils/useTodayStats.js");
/* harmony import */ var _utils_useCountries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useCountries */ "./utils/useCountries.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Container */ "./components/Container.js");
/* harmony import */ var _HeaderDescription__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HeaderDescription */ "./components/HeaderDescription.js");
/* harmony import */ var _CaseChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CaseChart */ "./components/CaseChart.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/CoronaApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const CoronaApp = ({
  isHeb
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
  } = Object(_utils_useTime__WEBPACK_IMPORTED_MODULE_3__["default"])(country);
  const {
    todayStats
  } = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_4__["default"])(url, country);
  const worldToday = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_4__["default"])(url, 'world').todayStats;
  const {
    countries
  } = Object(_utils_useCountries__WEBPACK_IMPORTED_MODULE_5__["default"])();
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
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(_HeaderDescription__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx(_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
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
      lineNumber: 65
    },
    __self: undefined
  }), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cn: country || todayStats && todayStats.country,
    todayStats: todayStatsSorted,
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
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
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("label", {
    style: {
      fontSize: '16px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, isHeb ? `נתונים לפי מדינה` : `Data For Country:`), __jsx(react_select__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: 'Select',
    options: selectOptions,
    value: country,
    onChange: handleChange,
    placeholder: country || 'Get Country Stats',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  })), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cn: 'World',
    todayWorld: worldTodaySorted,
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }), __jsx(_CaseChart__WEBPACK_IMPORTED_MODULE_9__["default"], {
    showWorld: showWorld,
    country: country,
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CoronaApp);

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
})(["border-radius:4px;background:", ";color:", ";flex:0 0 50%;max-width:33%;position:relative;width:100%;border:1px solid;border-color:", ";margin-left:8px;margin-right:8px;margin-top:16px;margin-bottom:16px;@media (max-width:768px){flex-direction:column;flex:0 0 100%;max-width:85%;}"], props => props.theme.bgColor, props => props.theme.color, props => props.theme.statColor);
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h2.withConfig({
  displayName: "InfoSection__SectionTitle",
  componentId: "sc-1anhjcp-2"
})(["color:", ";background:", ";font-size:20px;padding:4px 8px;margin-bottom:8px;border-bottom:1px solid black;"], props => props.theme.btnColor, props => props.theme.boxBg);
const Link = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a.withConfig({
  displayName: "InfoSection__Link",
  componentId: "sc-1anhjcp-3"
})(["text-decoration:none;color:", ";font-weight:700;font-size:18px;line-height:1.5;padding:6px 4px 2px 4px;@media (max-width:768px){font-size:16px;}"], props => props.theme.statColor);
const Desc = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p.withConfig({
  displayName: "InfoSection__Desc",
  componentId: "sc-1anhjcp-4"
})(["font-size:16px;line-height:1.3;color:", ";padding:0 4px;padding-bottom:12px;@media (max-width:768px){font-size:14px;}"], props => props.theme.color);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h1.withConfig({
  displayName: "InfoSection__Title",
  componentId: "sc-1anhjcp-5"
})(["font-size:28px;margin:36px auto;text-shadow:0 2px 6px rgba(0,0,0,0.16);text-align:center;"]);

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
      lineNumber: 87
    },
    __self: undefined
  }, __jsx(Link, {
    href: item.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, item.subject), __jsx(Desc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, item.description));
};

const renderSection = secData => {
  return secData.map((it, ix) => __jsx(Section, {
    key: ix,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx(SectionTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
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
        lineNumber: 132
      },
      __self: undefined
    }, " Received Error Fetching Information ... Let Me Know About This: boristofu@gmail.com");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: undefined
  }, "Resources"), __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
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

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Layout",
  componentId: "zt7gb0-0"
})(["margin:0 auto;"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Layout__Content",
  componentId: "zt7gb0-1"
})(["max-width:1200px;margin:0 auto;"]);
/* harmony default export */ __webpack_exports__["default"] = (props => __jsx(Layout, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, props.title)), __jsx(Header, {
  title: props.title,
  theme: props.theme,
  isHeb: isHeb,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("main", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, props.children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
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




const Div = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "LineChart__Div",
  componentId: "sc-9esmyi-0"
})(["margin-top:32px;margin-left:auto;margin-right:auto;margin-bottom:48px;height:375px;width:80%;direction:rtl;> *{direction:rtl;}@media (max-width:768px){height:40vh;margin-bottom:48px;width:85vw;}"]);

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
          maxTicksLimit: 5
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
              family: 'monospace'
            }
          }
        }
      }
    }
  };
  return __jsx(Div, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx("h1", {
    style: {
      fontSize: '1.65rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, props.label), __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    label: props.label,
    data: data,
    width: 100,
    options: options // height={40}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
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
})(["text-align:center;padding:8px 10px;font-weight:700;border-right-width:1px;border-left:2px solid #38383b;border-bottom:2px solid #38383b;border-right-color:2px solid #38383b;border-top:2px solid #38383b;color:", ";background-color:", ";flex:0 0 20%;max-width:20%;position:relative;width:100%;display:flex;flex-direction:column;justify-content:center;"], props => props.theme.statColor, props => props.theme.bgColor);
const Country = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "QuickStats__Country",
  componentId: "lmgi17-3"
})(["font-size:18px;font-weight:bold;align-self:center;"]);
/* harmony default export */ __webpack_exports__["default"] = (({
  S,
  country,
  isHeb
}) => {
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx(Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
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
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(Country, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, " ", country, " ")), __jsx(Col, {
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
  }, S.cases, __jsx("br", {
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
  }, isHeb ? 'נדבקים' : 'Infected'))), __jsx(Col, {
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
  }, S.recovered, __jsx("br", {
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
  }, isHeb ? 'החלימו' : 'Recovered'))), __jsx(Col, {
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
  }, S.deaths, __jsx("br", {
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
  }, isHeb ? 'מקרי מוות' : 'Deaths'))), __jsx(Col, {
    style: {
      borderLeft: '2px solid #38383b',
      borderTopLeftRadius: '5px',
      borderBottomLeftRadius: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, S.todayCases, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, isHeb ? 'מקרים חדשים' : 'Today Cases')))));
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
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })) || todayWorld && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("h1", {
    style: {
      fontSize: '20px',
      paddingTop: '18px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, isHeb && 'המצב ב: ' || 'Status for: ', __jsx("span", {
    style: {
      fontWeight: 'bold',
      textDecoration: 'underline'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, " ", cn === 'World' && isHeb && 'עולם' || cn)), __jsx(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: isHeb && 'נדבקים' || "Infected",
    data: todayWorld.cases,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: isHeb && 'החלימו' || "Recovered",
    data: todayWorld.recovered,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: isHeb && 'מקרי מוות' || "Total Deaths",
    data: todayWorld.deaths,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
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
      min-height: 100%;
      max-width: 100%;
      font-size: 62.5%;
      background-color: ${props => props.theme.bgColor};
      color: ${props => props.theme.color};
      font-family: ${props => props.theme.fontFamily};
      direction: ${props => props.isHeb ? 'rtl' : ''};
      // background: ${props => props.theme.test};
  }

  .Select {
    color: black !important;
    font-size: 17px;
    font-family: 'Montserrat';
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

  .loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #ededed;
  }

  .loader {
    max-width: 15rem;
    width: 100%;
    height: auto;
    stroke-linecap: round;
  }

  circle {
    fill: none;
    stroke-width: 3.5;
    animation-name: preloader;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    transform-origin: 170px 170px;
    will-change: transform;

    &:nth-of-type(1) {
      stroke-dasharray: 550px;
    }

    &:nth-of-type(2) {
      stroke-dasharray: 500px;
    }

    &:nth-of-type(3) {
      stroke-dasharray: 450px;
    }

    &:nth-of-type(4) {
      stroke-dasharray: 300px;
    }

    @for $i from 1 through 4 {
      &:nth-of-type(#{$i}) {
        animation-delay: -#{$i * 0.15}s;
      }
    }
  }

  @keyframes preloader {
    50% {
      transform: rotate(360deg);
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
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Global */ "./pages/Global.js");
/* harmony import */ var _utils_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/themes */ "./utils/themes.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_CoronaApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CoronaApp */ "./components/CoronaApp.js");
/* harmony import */ var _components_InfoSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/InfoSection */ "./components/InfoSection.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







function IndexPage({
  isHeb
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_CoronaApp__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isHeb: isHeb,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(_components_InfoSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
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
    statColor: '#1A74D6',
    lightColor: '#767676'
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
    statColor: '#1A74D6',
    lightColor: '#919695'
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
      const data = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(URL).then(res => res.data).catch(err => setError(err)); // const data = await axios.get(baseURLv2)
      //   .then(res => res.data[country])
      //   .catch(err => setError(err))
      // const timeStats = sortExternalApi(data);

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
        console.log(data);
        const relevant = {
          cases: data.cases,
          todayCases: data.todayCases,
          recovered: data.recovered,
          deaths: data.deaths,
          country: data.country
        };
        setStats(relevant);
        setLoading(false);
      } catch (e) {
        console.log('error getting today data', e);
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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

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

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map