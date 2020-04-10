webpackHotUpdate("static/development/pages/Statistics.js",{

/***/ "./components/Table/Table.js":
/*!***********************************!*\
  !*** ./components/Table/Table.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cell */ "./components/Table/Cell.js");
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../S */ "./components/S.js");
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Table/Table.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ScrollTable = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Table__ScrollTable",
  componentId: "sc-135jno9-0"
})(["overflow-x:auto;"]);
var DataTable = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Table__DataTable",
  componentId: "sc-135jno9-1"
})(["max-width:100%;"]);
var Table = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].table.withConfig({
  displayName: "Table",
  componentId: "sc-135jno9-2"
})(["position:relative;clear:both;border-collapse:separate;margin:0 auto;border-spacing:0px;background:#fff;box-shadow:0 1px 0 0 rgba(22,29,37,0.05);width:auto;"]);
var colors = {
  0: 'onPrimary',
  1: 'successDefault',
  2: 'error2',
  3: 'active2',
  4: 'error',
  5: 'purpleComp',
  6: 'menuColor',
  7: 'menuColor'
};
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var headings = _ref.headings,
      theme = _ref.theme,
      isHeb = _ref.isHeb,
      rows = _ref.rows;

  var renderHeadingRow = function renderHeadingRow(_cell, cellIndex) {
    return __jsx(_Cell__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: "heading-".concat(cellIndex),
      content: headings[cellIndex],
      header: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    });
  };

  var renderRow = function renderRow(_row, rowIndex) {
    return __jsx("tr", {
      key: "row-".concat(rowIndex),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, rows[rowIndex].map(function (_cell, cellIndex) {
      return __jsx(_Cell__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: "".concat(rowIndex, "-").concat(cellIndex),
        cellColor: colors[cellIndex] || 'onPrimary',
        content: cellIndex === 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
          width: "24",
          height: "24",
          src: rows[rowIndex][cellIndex]['flag'],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }), __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, rows[rowIndex][cellIndex]['country'])) : rows[rowIndex][cellIndex] // content={rows[rowIndex][cellIndex]}
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      });
    }));
  };

  var theadMarkup = __jsx("tr", {
    role: "row",
    key: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, headings.map(renderHeadingRow));

  var tbodyMarkup = rows.map(renderRow);
  return __jsx(DataTable, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_S__WEBPACK_IMPORTED_MODULE_3__["FadeIn"], {
    duration: "0.5s",
    delay: "0.1s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(ScrollTable, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(Table, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, theadMarkup), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, tbodyMarkup)))));
});

/***/ })

})
//# sourceMappingURL=Statistics.js.1d7cd854f0876eaf0b93.hot-update.js.map