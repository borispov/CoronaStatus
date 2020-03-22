webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/mapDataForTodayGraph.js":
/*!***************************************!*\
  !*** ./utils/mapDataForTodayGraph.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

var vocab = {
  'cases': 'נדבקים',
  'recovered': 'recovered',
  'country': 'country',
  'deaths': 'deaths',
  'todayCases': 'today'
};

var prop = function prop(o) {
  return function (k) {
    return o[k];
  };
};

var switchToVocab = function switchToVocab(word) {
  return vocab[word];
};

var mapDataForTodayGraph = function mapDataForTodayGraph(d) {
  var mapToKeyword = function mapToKeyword(k) {
    return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, switchToVocab(k), prop(d)(k));
  };

  return Object.keys(d).map(mapToKeyword);
};

/* harmony default export */ __webpack_exports__["default"] = (mapDataForTodayGraph);

/***/ })

})
//# sourceMappingURL=index.js.1873f844b63e75ceb227.hot-update.js.map