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
/* harmony import */ var _hooks_useTranslation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useTranslation */ "./hooks/useTranslation.js");


var _noChartDisplaySettin,
    _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/LineChart.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["defaults"].global.defaultFontFamily = "'PT Sans', sans-serif";
var Div = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "LineChart__Div",
  componentId: "sc-9esmyi-0"
})(["margin-top:32px;margin-left:auto;margin-right:auto;margin-bottom:48px;height:375px;text-align:center;width:80%;direction:rtl;> *{direction:rtl;}h1{text-shadow:", ";}canvas{border-radius:8px;}@media (max-width:560px){height:40vh;margin-bottom:48px;width:100vw;max-width:100%;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.shadows[1];
});
var noChartDisplaySettings = (_noChartDisplaySettin = {
  // backgroundColor: 'transparent',
  // strokeColor: 'transparent',
  // borderColor: 'transparent',
  showLine: false,
  borderWidth: 0,
  pointHitRadius: 0,
  pointHoverRadius: 0,
  pointHoverBorderWidth: 0,
  pointRadius: 0
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_noChartDisplaySettin, "pointHitRadius", 0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_noChartDisplaySettin, "fill", false), _noChartDisplaySettin);

var cutCaseCount = function cutCaseCount(_ref2) {
  var data = _ref2.data;
  return data.length > 30 ? subtractArray(data) : data;
};

var displayOnChart = function displayOnChart(dset) {
  return _objectSpread({}, dset, {
    data: cutCaseCount(dset),
    fill: false
  });
};

var dontDisplayOnChart = function dontDisplayOnChart(dset) {
  return _objectSpread({}, dset, {
    data: cutCaseCount(dset)
  }, noChartDisplaySettings);
};

var sortForDisplay = function sortForDisplay(dset) {
  return dset.label !== 'cases' && dset.label !== 'נדבקים' ? dontDisplayOnChart(dset) : displayOnChart(dset);
};

var filterBy5 = function filterBy5(x, i) {
  return !(i % 8);
};

var subtractArray = function subtractArray(arr) {
  return arr.filter(filterBy5).concat(arr[arr.length - 1]);
};

var parseDatasets = function parseDatasets(arrayOfSets, fill) {
  return arrayOfSets.map(sortForDisplay); // return arrayOfSets.map(set => ({
  //   ...set,
  //   data: set.data.length > 30 ? subtractArray(set.data) : set.data,
  //   fill: fill || false,
  // }))
};

var LineChart = function LineChart(props, _ref3) {
  var theme = _ref3.theme;

  var _useTranslation = Object(_hooks_useTranslation__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      t = _useTranslation.t;

  var chartRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var data2 = {
    labels: props.labels.length > 30 ? subtractArray(props.labels) : props.labels,
    datasets: parseDatasets(props.data, props.fill)
  };

  var data = function data(canvas) {
    var ctx = canvas.getContext('2d');
    return _objectSpread({}, data2);
  };

  var options = {
    responsive: true,
    maintainAspectRatio: false,
    onAnimationComplete: function onAnimationComplete() {
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
      display: props.showLegend && true,
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
        display: function display(ctx) {
          var i = ctx.dataIndex;
          if (ctx.dataset.label !== 'cases') return 0;
          return i === Math.floor(ctx.dataset.data.length / 3) || i === Math.floor(ctx.dataset.data.length * 0.66) || i === ctx.dataset.data.length - 1; // return i === 0 || i === (ctx.dataset.data.length - 1) || !(i % 4)
        },
        align: function align(ctx) {
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
      lineNumber: 199
    },
    __self: this
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Line"], {
    label: props.label,
    data: data,
    width: 100,
    options: options // height={40}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["withTheme"])(LineChart));

/***/ })

})
//# sourceMappingURL=index.js.517f8a0d75bd7462e236.hot-update.js.map