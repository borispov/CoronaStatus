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
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themes */ "./utils/themes.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var theme = _objectSpread({}, _themes__WEBPACK_IMPORTED_MODULE_1__["themes"]['common'], {}, _themes__WEBPACK_IMPORTED_MODULE_1__["themes"]['light']);

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
    backgroundColor: 'linear-gradient(90deg, #000, #6200EE)',
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
//# sourceMappingURL=index.js.ff66b52c5a4a57c480a1.hot-update.js.map