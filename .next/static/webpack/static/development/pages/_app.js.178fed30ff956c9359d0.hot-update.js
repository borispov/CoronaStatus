webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _S__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./S */ "./components/S.js");
/* harmony import */ var _public_coffee_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/coffee.svg */ "./public/coffee.svg");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Header = function Header(props, _ref) {
  var title = _ref.title,
      isHeb = _ref.isHeb;
  return __jsx("div", {
    className: "jsx-3715901487" + " " + "header__wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    style: {
      maxWidth: '820px',
      margin: '0 auto'
    },
    className: "jsx-3715901487",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_S__WEBPACK_IMPORTED_MODULE_2__["SlideInLeft"], {
    duration: "0.5s",
    delay: "0.7s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-3715901487" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-3715901487" + " " + "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-3715901487" + " " + "nav__list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3715901487",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h1", {
    style: {
      cursor: 'pointer'
    },
    className: "jsx-3715901487",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, props.title))), __jsx("li", {
    className: "jsx-3715901487" + " " + "nav__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/Coffee",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3715901487",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_S__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    small: true,
    bgColor: "#c82333",
    link: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-3715901487",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, " ", __jsx(_public_coffee_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), " "), "Buy Me A Coffix")))), __jsx("li", {
    className: "jsx-3715901487" + " " + "nav__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/News",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3715901487",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_S__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    bgColor: "#c8233367",
    small: true,
    link: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "News"))))), __jsx("div", {
    className: "jsx-3715901487" + " " + "nav__side",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, props.children.map(function (each) {
    return __jsx("li", {
      style: {
        marginLeft: '15px'
      },
      className: "jsx-3715901487" + " " + "nav__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, each);
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3715901487",
    __self: this
  }, "i.jsx-3715901487{width:1.3rem;margin:0px 6px 0 0;display:inline-block;vertical-align:middle;font-size:14px;}.header__wrapper.jsx-3715901487{direction:ltr;position:relative;height:64px;width:100%;background:linear-gradient(45deg,#5c0434,#000000d6);border-bottom:1px solid darkblue;margin:0 auto;margin-bottom:48px;}.header.jsx-3715901487{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1.jsx-3715901487{margin-top:10px;color:#e6e6e6;font-size:3.5rem;font-family:'Montserrat';text-align:center;text-shadow:0 1px 35px rgba(5,35,10,0.2);}nav.jsx-3715901487{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:100%;}.nav__list.jsx-3715901487{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nav__item.jsx-3715901487{margin-top:10px;margin-left:40px;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nav__side.jsx-3715901487{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media (max-width:768px){.header.jsx-3715901487{margin-left:12px;margin-right:12px;}h1.jsx-3715901487{font-size:2.5rem;}.nav__item.jsx-3715901487{margin-left:12px;}nav.jsx-3715901487{margin-top:6px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXlwby9EZXNrdG9wL1Byb2plY3Rvcy9Db3JvbmFTdGF0dXMvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NrQixBQUd3QixBQVFDLEFBV0QsQUFNRyxBQVNILEFBUUEsQUFLRyxBQVNILEFBS00sQUFJQSxBQUdBLEFBR0YsYUF0RUUsQ0FRRCxDQStEbEIsQ0E5Q2MsQUFzQkcsQ0FjRyxBQUlwQixBQUdBLGFBMUNpQixFQXpCSSxBQVFULENBdUNJLEVBY2hCLFNBcERXLEdBaUJjLEVBc0JaLElBL0NTLEVBU2dDLGlCQWlCcEMsRUFUWSxBQWVYLEFBUUEsQUFjckIsQ0FyRGlCLGVBQ2pCLEFBeUI4QyxpQkFqQlgsZ0JBc0NILFFBcEJoQyxTQWpCZ0IsY0FDSyxhQXFCVSxBQVEvQixNQTVCQSxnQkFLcUIsaURBK0JBLDRDQTlCckIsUUFlYSxXQUNiLDhCQWVBIiwiZmlsZSI6Ii9Vc2Vycy9yYXlwby9EZXNrdG9wL1Byb2plY3Rvcy9Db3JvbmFTdGF0dXMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgU2xpZGVJbkxlZnQgfSBmcm9tICcuL1MnXG5pbXBvcnQgQ29mZmVlIGZyb20gJy4uL3B1YmxpYy9jb2ZmZWUuc3ZnJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMsIHsgdGl0bGUsIGlzSGViIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fd3JhcHBlclwiPlxuICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogJzgyMHB4JywgbWFyZ2luOiAnMCBhdXRvJyB9fT5cbiAgICAgICAgPFNsaWRlSW5MZWZ0IGR1cmF0aW9uPScwLjVzJyBkZWxheT0nMC43cyc+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZfX2xpc3RcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0+e3Byb3BzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvQ29mZmVlJz5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNtYWxsIGJnQ29sb3I9JyNjODIzMzMnIGxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPGk+IDxDb2ZmZWUgLz4gPC9pPlxuICAgICAgICAgICAgICAgICAgICAgIEJ1eSBNZSBBIENvZmZpeFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvTmV3cyc+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBiZ0NvbG9yPScjYzgyMzMzNjcnIHNtYWxsIGxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgTmV3c1xuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X19zaWRlXCI+IFxuICAgICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuLm1hcChlYWNoID0+ICggPGxpIGNsYXNzTmFtZT1cIm5hdl9faXRlbVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+e2VhY2h9PC9saT4gKSkgfSBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgPC9TbGlkZUluTGVmdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBpIHtcbiAgICAgICAgICB3aWR0aDogMS4zcmVtO1xuICAgICAgICAgIG1hcmdpbjogMHB4IDZweCAwIDA7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlcl9fd3JhcHBlciB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM1YzA0MzQsICMwMDAwMDBkNik7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtibHVlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgY29sb3I6ICNlNmU2ZTY7XG4gICAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDM1cHggcmdiYSg1LCAzNSwgMTAsIDAuMik7XG4gICAgICAgIH1cblxuICAgICAgICBuYXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLm5hdl9fbGlzdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdl9faXRlbSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2X19zaWRlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZfX2l0ZW0ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl19 */\n/*@ sourceURL=/Users/raypo/Desktop/Projectos/CoronaStatus/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/S.js":
/*!*************************!*\
  !*** ./components/S.js ***!
  \*************************/
/*! exports provided: Flex, Heading, Heading2, Paragraph, simpleWrapper, Container, Button, FadeIn, SlideInLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return Flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading2", function() { return Heading2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return Paragraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleWrapper", function() { return simpleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FadeIn", function() { return FadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideInLeft", function() { return SlideInLeft; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/S.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Flex = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "S__Flex",
  componentId: "sc-3vwmv4-0"
})(["display:flex;flex-direction:", ";justify-content:", ";margin:", ";color:", ";align-items:", ";flex:", ";background:", ";padding:", ";@media (max-width:768px){flex-direction:", ";}"], function (props) {
  return props.column && 'column' || 'row';
}, function (props) {
  return props.justify || 'center';
}, function (props) {
  return props.margin || '0 2px';
}, function (props) {
  return props.color || '';
}, function (props) {
  return props.alignItems || '';
}, function (props) {
  return props.flex;
}, function (props) {
  return props.bgColor === 'inverse' ? props.theme.color : props.bGcolor === 'bg' ? props.theme.bgColor : '';
}, function (props) {
  return props.padding;
}, function (props) {
  return props.mRow ? 'row' : props.mCol ? 'column' : '';
});
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "S__Heading",
  componentId: "sc-3vwmv4-1"
})(["font-size:", ";color:", ";font-family:", ";line-height:1.5;"], function (props) {
  return props.fontSize || '4.5rem';
}, function (props) {
  return props.color || props.theme.color;
}, function (props) {
  return props.font || 'Montserrat';
});
var Heading2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "S__Heading2",
  componentId: "sc-3vwmv4-2"
})(["font-size:", ";padding:", ";color:", ";font-family:", ";background:", ";white-space:", ";max-width:100%;text-overflow:", ";@media (max-width:768px){font-size:14px;font-weight:700;max-width:100%;line-height:1.45;}"], function (props) {
  return props.fontSize || '18px';
}, function (props) {
  return props.padding || '';
}, function (props) {
  return props.color || props.theme.color;
}, function (props) {
  return props.font || 'Montserrat';
}, function (props) {
  return props.bg || '';
}, function (props) {
  return props.nowrap || '';
}, function (props) {
  return props.truncate && 'ellipsis';
});
var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "S__Paragraph",
  componentId: "sc-3vwmv4-3"
})(["font-size:", ";max-width:fit-content;margin:", ";line-height:", ";padding:", ";color:", ";@media (max-width:768px){font-size:12px;font-weight:300;margin:0;}"], function (props) {
  return props.fontSize || '16px';
}, function (props) {
  return props.noMargin && '0' || '0';
}, function (props) {
  return props.lineHeight || 1.5;
}, function (props) {
  return props.padding || '';
}, function (props) {
  return props.color || props.theme.color;
});
var simpleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "S__simpleWrapper",
  componentId: "sc-3vwmv4-4"
})(["background:", ";color:", ";direction:ltr;"], function (props) {
  return props.theme.bgColor;
}, function (props) {
  return props.theme.color;
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "S__Container",
  componentId: "sc-3vwmv4-5"
})(["@media (max-width:576px){max-width:540px;}@media (max-width:768px){max-width:640px;}@media (max-width:992px){max-width:960px;}@media (min-width:1200px){max-width:1140px;}transition:all .5s cubic-bezier(.55,0,.1,1);width:85%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;text-align:", ";"], function (props) {
  return props.textAlign && 'center';
});
var Btn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "S__Btn",
  componentId: "sc-3vwmv4-6"
})(["border-radius:", ";padding:", ";font-size:", ";background:", ";color:", ";font-family:'Sans';border:", ";font-weight:", ";cursor:", ";outline:none;line-height:1.5;margin:", ";@media (max-width:450px){font-size:12px;font-weight:normal;padding:0.210rem 0.45rem;}"], function (props) {
  return props.radius ? props.radius : '4px';
}, function (props) {
  return props.small && '.375rem .75rem' || '10px 14px';
}, function (props) {
  return props.small ? '12px' : '16px';
}, function (props) {
  return props.bgColor && props.bgColor || props.theme.btnBg;
}, function (props) {
  return props.btnColor && props.btnColor || props.theme.btnColor;
}, function (props) {
  return props.border ? props.border : 'none';
}, function (props) {
  return props.bold && 'bold' || 'normal';
}, function (props) {
  return props.link ? 'pointer' : 'cursor';
}, function (props) {
  return props.margin ? props.margin : '';
});
var LangBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Btn).withConfig({
  displayName: "S__LangBtn",
  componentId: "sc-3vwmv4-7"
})(["position:relative;background:lightblue;color:#111;padding:0.54rem 0.85rem;font-size:12px;font-weight:400;font-family:'Roboto';outline:none;text-align:center;border:none;border-radius:6px;margin:0 6px;margin-left:16px;"]);
var Button = function Button(props) {
  return props.langBtn && __jsx(LangBtn, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), props.children) || __jsx(Btn, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onClick: props.onClick
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), props.children);
};
var BaseAnimation = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "S__BaseAnimation",
  componentId: "sc-3vwmv4-8"
})(["   animation-duration:", ";animation-timing-function:", ";animation-delay:", ";animation-iteration-count:", ";animation-direction:", ";animation-fill-mode:", ";animation-play-state:", ";display:", ";"], function (props) {
  return props.duration;
}, function (props) {
  return props.timingFunction;
}, function (props) {
  return props.delay;
}, function (props) {
  return props.iterationCount;
}, function (props) {
  return props.direction;
}, function (props) {
  return props.fillMode;
}, function (props) {
  return props.playState;
}, function (props) {
  return props.display;
});
BaseAnimation.defaultProps = {
  duration: '1s',
  timingFunction: 'ease',
  delay: '0s',
  iterationCount: '1',
  direction: 'normal',
  fillMode: 'both',
  playState: 'running',
  display: 'block'
};
var fadeInAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["from{transform:scale(.5);opacity:0;}to{transform:scale(1);opacity:1;}"]);
var FadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(BaseAnimation).withConfig({
  displayName: "S__FadeIn",
  componentId: "sc-3vwmv4-9"
})(["animation-name:", ";"], fadeInAnimation);
var slideInLeftAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["from{-webkit-transform:translate3d(-150%,0,0);transform:translate3d(-150%,0,0);visibility:visible;}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}"]);
var SlideInLeft = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(BaseAnimation).withConfig({
  displayName: "S__SlideInLeft",
  componentId: "sc-3vwmv4-10"
})(["animation-name:", ";animation-timing-function:cubic-bezier(0.4,0.2,0.2,1);"], slideInLeftAnimation);

/***/ })

})
//# sourceMappingURL=_app.js.178fed30ff956c9359d0.hot-update.js.map