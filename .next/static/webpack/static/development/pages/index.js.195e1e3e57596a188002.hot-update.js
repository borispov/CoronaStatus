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


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// meant for Line Chart Cases/Deaths Chart
var sortForChart = function sortForChart(obj) {
  var zeroNull = function zeroNull(c) {
    return c === null ? 0 : c;
  };

  var sortedObj = obj.map(function (e) {
    return _objectSpread({
      date: new Date(e.date)
    }, e);
  }).sort(function (a, b) {
    return a - b;
  });
  console.log(sortedObj);
  var labels = obj.map(function (o) {
    return o.date;
  });
  var deaths = obj.map(function (o) {
    return zeroNull(o.total_deaths);
  });
  var cases = obj.map(function (o) {
    return zeroNull(o.total_cases);
  });
  var newCases = obj.map(function (o) {
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
    borderWidth: 2
  }, {
    label: 'deaths',
    data: deaths,
    backgroundColor: 'rgba(29,82,209,1) 100%)',
    borderColor: 'rgba(21, 21, 21, 1)',
    strokeColor: "rgba(222, 222, 34, 1)",
    pointRadius: 3,
    borderWidth: 3
  }, {
    label: 'cases',
    data: cases,
    backgroundColor: 'rgba(208,42,144,1)',
    borderColor: 'rgba(186, 50, 213, 1)',
    strokeColor: "rgba(200, 200, 200, 1)",
    pointRadius: 2,
    borderWidth: 2
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
//# sourceMappingURL=index.js.195e1e3e57596a188002.hot-update.js.map