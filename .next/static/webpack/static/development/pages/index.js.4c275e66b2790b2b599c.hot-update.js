webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/LineChart.js":
/*!*********************************!*\
  !*** ./components/LineChart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/LineChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var filterBy5 = function filterBy5(x, i) {
  return !(i % 2);
};

var subtractArray = function subtractArray(arr) {
  return arr.filter(filterBy5);
};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  console.log(props);
  var data = {
    labels: props.labels.length > 40 ? subtractArray(props.labels) : props.labels,
    datasets: props.data
  };
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
    }
  };
  return __jsx("div", {
    style: {
      marginTop: '32px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("h1", {
    style: {
      fontSize: '1.65rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, props.label), __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    label: props.label,
    data: data,
    width: 100,
    options: options,
    height: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.4c275e66b2790b2b599c.hot-update.js.map