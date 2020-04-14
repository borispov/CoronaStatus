webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/sortForChart.js":
/*!*******************************!*\
  !*** ./utils/sortForChart.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


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

var sortForChart = function sortForChart(obj, theme) {
  var _ref;

  var zeroNull = function zeroNull(c) {
    return c === null ? 0 : c;
  };

  var sortedObj = obj.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  var initCasesArray = sortedObj.map(function (o) {
    return o.total_cases;
  });
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
    borderColor: theme && theme.successDefault,
    strokeColor: theme && theme.successDefault,
    pointRadius: 2,
    borderWidth: 4,
    fill: true
  }, (_ref = {
    label: 'deaths',
    data: deaths,
    backgroundColor: 'rgba(29,82,209,1) 100%)'
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "backgroundColor", '#333'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "borderColor", theme && theme.blue), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "strokeColor", theme && theme.blue), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "pointRadius", 2), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "borderWidth", 4), _ref), {
    label: 'cases',
    data: cases,
    backgroundColor: '#2A4561',
    borderColor: theme && theme.primaryLight || '#6200ee',
    strokeColor: theme && theme.primaryLight || '#ADFF2F',
    borderWidth: 5,
    borderCapStyle: 'butt',
    borderJoinStyle: 'miter',
    pointHoverRadius: 5,
    pointHoverBorderWidth: 2,
    pointRadius: 2,
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
//# sourceMappingURL=index.js.fd9a918024e53631edb8.hot-update.js.map