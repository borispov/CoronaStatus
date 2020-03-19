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
    fillColor: 'rgba(165, 42, 42,1)',
    strokeColor: '#301934'
  }, {
    label: 'deaths',
    data: deaths,
    fillColor: "#bb0a1e",
    strokeColor: "rgba(200, 200, 200, 1)"
  }, {
    label: 'cases',
    data: cases,
    fillColor: "rgba(230,140,140,1)",
    strokeColor: "rgba(200, 200, 200, 0.3)"
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
//# sourceMappingURL=index.js.cb5fe017c46b6eb4b0a2.hot-update.js.map