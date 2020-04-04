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
var firstWhole = function firstWhole(arr) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (arr[n] > 0) return n;
  if (arr[n] == undefined) return 0;
  n++;
  return firstWhole(arr, n);
};

var parseLabel = function parseLabel(label) {
  var d = new Date(label);
  return d.getDate() + '.' + ('0' + (d.getMonth() + 1)).toString();
};

var sortForChart = function sortForChart(obj) {
  var zeroNull = function zeroNull(c) {
    return c === null ? 0 : c;
  };

  var sortedObj = obj.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  var initCasesArray = sortedObj.map(function (o) {
    return o.total_cases;
  }); // console.log(initCasesArray);

  var firstNumIndex = firstWhole(initCasesArray);
  var fObj = sortedObj.slice(firstNumIndex);
  var cases = fObj.map(function (o) {
    return o.total_cases;
  });
  var labels = fObj.map(function (o) {
    return parseLabel(o.date);
  });
  var deaths = fObj.map(function (o) {
    return zeroNull(o.total_deaths);
  });
  var newCases = fObj.map(function (o) {
    return zeroNull(o.new_cases);
  });
  var label = obj[0].location;
  var datasets = [{
    label: 'new cases',
    data: newCases,
    backgroundColor: '#fc3111',
    borderColor: '#fc3111',
    strokeColor: '#301934',
    pointRadius: 2,
    borderWidth: 4,
    fill: true
  }, {
    label: 'deaths',
    data: deaths,
    backgroundColor: 'rgba(29,82,209,1) 100%)',
    borderColor: '#b00020',
    strokeColor: "rgba(222, 222, 34, 1)",
    pointRadius: 1,
    borderWidth: 4
  }, {
    label: 'cases',
    data: cases,
    backgroundColor: '#2A4561',
    borderColor: '#6200EE',
    strokeColor: "#ADFF2F",
    borderWidth: 5,
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: '#3700B3',
    pointHoverBorderColor: '#3700B399',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10
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
//# sourceMappingURL=index.js.e17c21c43b1056e3cea7.hot-update.js.map