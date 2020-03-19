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
  var label = obj.location;
  var datasets = [{
    label: 'deaths',
    data: deaths,
    fillColor: "rgba(220,220,220,0.2)",
    strokeColor: "rgba(200, 200, 200, 0.3)"
  }, {
    label: 'cases',
    data: cases,
    fillColor: "rgba(230,140,140,0.6)",
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
//# sourceMappingURL=index.js.98f39c9a20b651ce144b.hot-update.js.map