webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/InfoSection.js":
/*!***********************************!*\
  !*** ./components/InfoSection.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Container */ "./components/Container.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/InfoSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



 // URL for getting the CSV data.

var baseURL = '';
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "InfoSection__Wrapper",
  componentId: "sc-1anhjcp-0"
})(["text-align:none;display:flex;flex-wrap:wrap;justify-content:center;margin-left:15px;margin-right:15px;margin-bottom:32px;"]);
var Section = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "InfoSection__Section",
  componentId: "sc-1anhjcp-1"
})(["border-radius:4px;background:", ";color:", ";flex:0 0 50%;max-width:33%;position:relative;width:100%;border:1px solid;border-color:", ";margin:2px;"], function (props) {
  return props.theme.bgColor;
}, function (props) {
  return props.theme.color;
}, function (props) {
  return props.theme.statColor;
});
var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].h2.withConfig({
  displayName: "InfoSection__SectionTitle",
  componentId: "sc-1anhjcp-2"
})(["color:", ";background:", ";font-size:20px;padding:4px 8px;border-bottom:1px solid black;"], function (props) {
  return props.theme.btnColor;
}, function (props) {
  return props.theme.boxBg;
});
var Link = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].a.withConfig({
  displayName: "InfoSection__Link",
  componentId: "sc-1anhjcp-3"
})(["text-decoration:none;color:", ";font-weight:700;font-size:18px;line-height:1.5;padding:0 4px;"], function (props) {
  return props.theme.statColor;
});
var Desc = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].p.withConfig({
  displayName: "InfoSection__Desc",
  componentId: "sc-1anhjcp-4"
})(["font-size:16px;line-height:1.22;color:", ";padding:0 4px;"], function (props) {
  return props.theme.color;
});
var categories = ['health', 'education', 'activity'];

var reduceToCat = function reduceToCat(a, _ref) {
  var category = _ref.category,
      x = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["category"]);

  return {
    category: category,
    data: a['data'].concat(x)
  };
};

var initObj = {
  category: '',
  data: []
};

var mapCat = function mapCat(i) {
  return i.reduce(reduceToCat, initObj);
};

var mapDataToSection = function mapDataToSection(item, idx) {
  return __jsx("div", {
    key: idx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(Link, {
    href: item.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, item.subject), __jsx(Desc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, item.description));
};

var renderSection = function renderSection(secData) {
  return secData.map(function (it, ix) {
    return __jsx(Section, {
      key: ix,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx(SectionTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, it.category), it.data.map(mapDataToSection));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      error = _useState2[0],
      setError = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function fetchData() {
      var init, _ref2, _data, datakeys, arr;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setError();
              _context.prev = 1;
              init = {
                category: '',
                data: []
              };
              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://covid19.borisky.me/api/data/resources'));

            case 5:
              _ref2 = _context.sent;
              _data = _ref2.data;
              datakeys = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(_data.map(function (i) {
                return i.category;
              })));
              arr = datakeys.map(function (key) {
                return _data.filter(function (i) {
                  return i.category === key;
                });
              }); // console.log(arr.map( eachArray => ({ ...eachArray.reduce(reduceToCat, init) }) ))

              console.log(arr.map(function (eachArray) {
                return eachArray.reduce(reduceToCat, init);
              })); // const d = Object
              //   .keys(data)
              //   .map(key => data[key].reduce(reduceToCat, init))
              // setData(d)

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              setError(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 12]], Promise);
    }

    fetchData();
  }, []);

  if (error) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, " Received Error Fetching Information ... Let Me Know About This: boristofu@gmail.com");
  }

  console.log(data && data);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("h1", {
    style: {
      fontSize: '24px',
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Useful Information For All"), __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, data && renderSection(data)));
});

/***/ })

})
//# sourceMappingURL=index.js.285208185c67d26bce26.hot-update.js.map