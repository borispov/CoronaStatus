webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/sortForChart.js":
/*!*******************************!*\
  !*** ./utils/sortForChart.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// meant for Line Chart Cases/Deaths Chart
var sortForChart = function sortForChart(obj) {
  var labels = obj.map(function (o) {
    return o.date;
  });
  var deaths = obj.map(function (o) {
    return o.total_deaths;
  });
  var cases = obj.map(function (o) {
    return o.total_cases;
  });
  var newCases = obj.map(function (o) {
    return o.new_cases;
  });
  var label = obj.location;
  var datasets = [{
    label: 'new cases',
    data: newCases,
    backgroundColor: '#fcfb11',
    strokeColor: '#301934',
    pointRadius: 0
  }, {
    label: 'deaths',
    data: deaths,
    backgroundColor: "#992323",
    strokeColor: "rgba(222, 222, 34, 1)",
    pointRadius: 0
  }, {
    label: 'cases',
    data: cases,
    backgroundColor: 'rgba(208,42,144,1)',
    // 'rgba(29,82,209,1) 100%)',
    strokeColor: "rgba(200, 200, 200, 0.3)",
    pointRadius: 0
  }];
  return {
    datasets: datasets,
    labels: labels,
    label: label
  };
};

/* harmony default export */ __webpack_exports__["default"] = (sortForChart);

/***/ })

})
//# sourceMappingURL=index.js.6941fb85bc9a23d42d20.hot-update.js.map