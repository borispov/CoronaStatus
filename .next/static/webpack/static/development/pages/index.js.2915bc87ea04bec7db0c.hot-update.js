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
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartjs-plugin-datalabels */ "./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./S */ "./components/S.js");

var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/LineChart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["defaults"].global.animation = true;
react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["defaults"].global.defaultFontFamily = "'PT Sans', sans-serif";
react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["defaults"].global.hover.mode = 'nearest';
react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["defaults"].global.hover.axis = 'xy';
var Div = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "LineChart__Div",
  componentId: "sc-9esmyi-0"
})(["margin-top:32px;margin-left:auto;margin-right:auto;margin-bottom:48px;height:375px;text-align:center;width:80%;direction:rtl;> *{direction:rtl;}h1{text-shadow:", ";}@media (max-width:768px){height:40vh;margin-bottom:48px;width:80vw;max-width:80%;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.shadows[1];
});

var filterBy5 = function filterBy5(x, i) {
  return !(i % 4);
};

var subtractArray = function subtractArray(arr) {
  return arr.filter(filterBy5);
};

var parseDatasets = function parseDatasets(arrayOfSets, fill) {
  return arrayOfSets.map(function (set) {
    return _objectSpread({}, set, {
      data: set.data.length > 30 ? subtractArray(set.data) : set.data,
      fill: fill || false
    });
  });
};

var LineChart = function LineChart(props, _ref2) {
  var theme = _ref2.theme;
  var data2 = {
    labels: props.labels.length > 30 ? subtractArray(props.labels) : props.labels,
    datasets: parseDatasets(props.data, props.fill)
  };

  var data = function data(canvas) {
    var ctx = canvas.getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, 100, 0);
    return _objectSpread({}, data2, {
      background: gradient
    });
  };

  var options = {
    responsive: true,
    maintainAspectRatio: false,
    onAnimationComplete: function onAnimationComplete() {
      this.showTooltip(this.datasets[0].points, true);
    },
    animation: {
      easing: 'easeInOutQuad',
      duration: 1050
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
        display: function display(ctx) {
          var i = ctx.dataIndex;
          return i === 0 || i === ctx.dataset.data.length - 1 || !(i % 5);
        },
        align: function align(ctx) {
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
    __self: this
  }, __jsx("h1", {
    style: {
      fontSize: '1.85rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "\u05E2\u05E7\u05D5\u05DE\u05EA \u05D4\u05E6\u05DE\u05D9\u05D7\u05D4"), __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Line"], {
    label: props.label,
    data: data,
    width: 100,
    options: options // height={40}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["withTheme"])(LineChart));

/***/ })

})
//# sourceMappingURL=index.js.2915bc87ea04bec7db0c.hot-update.js.map