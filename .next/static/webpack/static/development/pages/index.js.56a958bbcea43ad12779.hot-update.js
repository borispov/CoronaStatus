webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/QuickStats/QuickStats.utils.js":
/*!***************************************************!*\
  !*** ./components/QuickStats/QuickStats.utils.js ***!
  \***************************************************/
/*! exports provided: F */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return F; });
var formatNumber = function formatNumber(x) {
  return x.toString().split('').reverse().map(function (x, i) {
    return i % 3 === 0 ? x + ',' : x;
  }).reverse().join('').slice(0, -1);
};

var calcDiff = function calcDiff(current) {
  return function (prev) {
    return current !== 0 ? ((current - prev) / prev * 100).toFixed(2) : 0;
  };
};

var F = {
  formatNumber: formatNumber,
  calcDiff: calcDiff
};

/***/ })

})
//# sourceMappingURL=index.js.56a958bbcea43ad12779.hot-update.js.map