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
    labels: props.info.map(popKey),
    datasets: [{
      label: props.label,
      backgroundColor: ['rgba(112, 120, 176, 0.7)', 'rgba(233,233,100,0.7)', 'rgba(213, 199, 23, 0.7)', 'rgba(245, 55, 66, 0.7)', 'rgba(18, 18, 21, 1)'],
      borderColor: 'rgba(255,99,132,0.8)',
      borderWidth: 1.5,
      barPercentage: 0.9,
      categoryPercentage: 1,
      minBarLength: 10,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: props.info.map(popVal)
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
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
    data: data,
    width: 4,
    height: 1,
    options: options,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }));
});

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
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(Container, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}));

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
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Container */ "./components/Container.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/CoronaApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







/* harmony default export */ __webpack_exports__["default"] = (() => {
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
    worldStats,
    timeError,
    timeLoading
  } = Object(_utils_useTime__WEBPACK_IMPORTED_MODULE_4__["default"])(); // <Chart type='bar' info={organizedData} label={country + '\'s Outbreak Over Time'} />

  const handleChange = e => setInput(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    setCountry(inputValue);
  };

  const sortTimeStats = worldStats;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Covid19 Feed"), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: url,
    cn: country,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), __jsx("form", {
    style: {
      width: '100%',
      margin: '54px 0 auto',
      display: 'flex',
      justifyContent: 'center'
    },
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("label", {
    style: {
      fontSize: '16px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Search For Country:", __jsx(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "text",
    value: inputValue,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  })), __jsx("input", {
    type: "submit",
    value: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
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

const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1`
  align-self: center;
  padding-top: 6px;
  color: #e6e6e6;
`;
const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
  height: 64px;
  width: 100%;
  background: linear-gradient(45deg, #cc0404, #000000d6);
  text-align: center;
  border-bottom: 1px solid darkblue;
  margin-bottom: 48px;
`;
/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => __jsx(Wrap, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx(Title, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, children)));

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
  margin: 0 auto;
margin: 12px;
  outline: none;
  max-width: 720px;
  width: 100%;
  text-align: center;
  border-radius: 6px;
  background: #f1f1f1;
  font-size: 1.1rem;
  padding: 8px 4px;
`;
/* harmony default export */ __webpack_exports__["default"] = (props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx(Input, _extends({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}))));

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
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/LineChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const popVal = o => Object.values(o)[0];

/* harmony default export */ __webpack_exports__["default"] = (({
  info
}) => {
  const data = {
    labels: ['Infected', 'new', 'recovered', 'critical', 'deaths'],
    datasets: [{
      label: 'Outbreak info',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      backgroundColor: ['rgba(112, 120, 176, 1)', 'rgba(233,233,100,1)', 'rgba(213, 199, 23, 1)', 'rgba(245, 55, 66, 1)', 'rgba(18, 18, 21, 1)'],
      borderColor: ['rgba(75,192,192,1)'],
      borderCapStyle: 'butt',
      options: {
        scales: {
          yAxes: [{
            stacked: true
          }]
        }
      },
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: info.map(popVal)
    }]
  };
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Line Example"), __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    data: data,
    width: 40,
    height: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
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
  margin: 0;
  padding: 0;
  background: grey;
  font-size: 1rem;
  text-align: center;
  border-radius: 8px;
  max-width: 10rem;
  align-content: center;
  justify-content: center;
  background: #d9d9d9;
  color: #014014;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3`
  font: 'Helvetica';
  letter-spacing: 1px;
`;

const StatBlock = ({
  title,
  data
}) => {
  return __jsx(Block, {
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
  }, title, ":"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
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
/* harmony import */ var _LineChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LineChart */ "./components/LineChart.js");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Chart */ "./components/Chart.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Stats.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









const vocab = {
  'cases': 'infected',
  'recovered': 'recovered',
  'country': 'country',
  'deaths': 'deaths',
  'todayCases': 'new today'
};

const prop = o => k => o[k];

const switchToVocab = word => vocab[word];

const Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
`;
const Grid = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
`;
function Stats({
  url,
  cn = '',
  search
}) {
  const {
    todayStats,
    error,
    loading
  } = Object(_utils_useTodayStats__WEBPACK_IMPORTED_MODULE_0__["default"])(url, cn);
  const {
    worldStats
  } = Object(_utils_useTime__WEBPACK_IMPORTED_MODULE_1__["default"])();
  if (error) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, " We've encountered an Error. Maybe you typed wrong country");
  if (!todayStats) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
  const {
    country,
    cases,
    recovered,
    deaths,
    todayCases
  } = todayStats;
  const o = {
    cases,
    todayCases,
    recovered,
    deaths
  };

  const organizeData = d => {
    const mapToKeyword = k => ({
      [switchToVocab(k)]: prop(d)(k)
    });

    return Object.keys(d).map(mapToKeyword);
  };

  const organizedData = organizeData(o);
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("h1", {
    style: {
      fontSize: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Status for:   ", __jsx("span", {
    style: {
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, country)), __jsx(_Chart__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "bar",
    info: organizedData,
    label: country + '\'s Outbreak',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx(Grid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Infected",
    data: cases,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Recovered",
    data: recovered,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Total Deaths",
    data: deaths,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx(_StatBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "New Cases Today",
    data: todayCases,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })));
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
      height: 100vh;
      max-width: 100%;
      font-size: 62.5%;
      background-color: ${props => props.theme.bgColor};
      color: ${props => props.theme.color};
      font-family: ${props => props.theme.fontFamily};
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
  top: 5%;
  left: 1%;
  padding: 6px 2px;
  outline: none;
`;
function IndexPage() {
  const {
    0: theme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(darkTheme());

  const setDarkTheme = () => setTheme(darkTheme());

  const setLightTheme = () => setTheme(lightTheme());

  const isLight = theme.type === 'light';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_Global__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(_components_CoronaApp__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(Btn, {
    onClick: !isLight ? setLightTheme : setDarkTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, !isLight ? 'Light' : 'Dark')));
}

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
    categoryHoverColor: '#333'
  },
  dark: {
    type: 'dark',
    bgColor: '#1F2933',
    headerBg: '#3d444b',
    color: '#E4E7EB',
    searchBgColor: '#E4E7EB',
    boxShadow: '0.4rem 0.4rem 1.5rem #111111',
    categoryColor: '#CBD2D9',
    categoryHoverColor: '#9AA5B1'
  }
};

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


const baseURL = `http://46.101.156.51:3003/api/v1/alltime/`;

async function currentCountry() {
  return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://extreme-ip-lookup.com/json/').then(res => res.data.country).catch(e => 'Israel');
}

function useTime(url = baseURL, country = 'world') {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: timeLoading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: timeError,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function fetchData() {
      setLoading(true);
      setError();
      const URL = country === 'world' ? baseURL : baseURL + country;
      const data = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(URL).then(res => res.data).catch(err => setError(err));
      setData(data);
      setLoading(false);
    }

    fetchData();
  }, [country]);
  const worldStats = data;
  return {
    worldStats,
    timeLoading,
    timeError
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
  return str === 'usa' || str === 'Usa' ? 'USA' : str === 'Uk' || str === 'England' || str === 'United Kingdom' || str == 'great britain' ? 'UK' : capitalize(str);
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
      const URL = url + 'today/' + searchCountry;
      console.log(URL);
      const data = await fetch(URL).then(res => res.json()).catch(err => setError(err));
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