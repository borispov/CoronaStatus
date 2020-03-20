webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/LineChart.js":
/*!*********************************!*\
  !*** ./components/LineChart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");

var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/LineChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var popVal = function popVal(o) {
  return Object.values(o)[0];
};

var defaultColors = ['rgba(112, 120, 176, 1)', 'rgba(233,233,100,1)', 'rgba(213, 199, 23, 1)', 'rgba(245, 55, 66, 1)', 'rgba(18, 18, 21, 1)'];
var defaultSettings = {
  // fillColor: "rgba(220,220,220,0.2)",
  strokeColor: "rgba(220,220,220,1)" // pointColor: "rgba(220,220,220,1)",
  // pointStrokeColor: "#fff",
  // pointHighlightFill: "#fff",
  // pointHighlightStroke: "rgba(220,220,220,1)",
  // pointBackgroundColor: '#fff',
  // pointBorderWidth: 1,
  // pointHoverRadius: 5,
  // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  // pointHoverBorderColor: 'rgba(220,220,220,1)',
  // pointHoverBorderWidth: 2,
  // pointRadius: 1,
  // pointHitRadius: 10,

};

var filterBy5 = function filterBy5(x, i) {
  return !(i % 14);
};

var subtractArray = function subtractArray(arr) {
  return arr.filter(filterBy5);
};

var parseDatasets = function parseDatasets(arrayOfSets) {
  return arrayOfSets.map(function (set) {
    return _objectSpread({}, defaultSettings, {}, set, {
      data: subtractArray(set.data)
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var data = {
    labels: subtractArray(props.labels),
    datasets: props.datasets && parseDatasets(props.datasets)
  };
  console.log(data);
  var options = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      easing: 'easeInOutQuad',
      duration: 520
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
          max: 125000,
          min: 0,
          stepSize: 50000
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
      display: true
    },
    tooltips: {
      titleFontFamily: 'Open Sans',
      // backgroundColor: 'rgba(0,0,0,0.3)',
      titleFontColor: 'black',
      caretSize: 5,
      cornerRadius: 3,
      xPadding: 10,
      yPadding: 10
    }
  };
  return __jsx("div", {
    style: {
      marginTop: '32px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("h1", {
    style: {
      fontSize: '1.65rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, props.label), __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Line"], {
    data: data,
    width: 100,
    options: options,
    height: 30,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.3b587df8681b97958017.hot-update.js.map