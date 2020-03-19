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
    fillColor: 'rgba(185, 42, 42,1)',
    strokeColor: '#301934',
    pointRadius: 0
  }, {
    label: 'deaths',
    data: deaths,
    // fillColor: "#bb0a1e",
    fillColor: 'linear-gradient(45deg, #cc0404, #000000d6)',
    strokeColor: "rgba(222, 222, 34, 1)",
    pointRadius: 0
  }, {
    label: 'cases',
    data: cases,
    fillColor: "rgba(230,140,140,1)",
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
//# sourceMappingURL=index.js.a3b15e9a16825ec74702.hot-update.js.map