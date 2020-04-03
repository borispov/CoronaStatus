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
  var Tip = isHeb && 'תרומה לכפפות' || 'Gloves Tip';
  return __jsx("div", {
    className: "jsx-3715901487" + " " + "header__wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
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
      lineNumber: 9
    },
    __self: this
  }, __jsx(_S__WEBPACK_IMPORTED_MODULE_2__["SlideInLeft"], {
    duration: "0.75s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-3715901487" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-3715901487" + " " + "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-3715901487" + " " + "nav__list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3715901487",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h1", {
    style: {
      cursor: 'pointer'
    },
    className: "jsx-3715901487",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.title))), __jsx("li", {
    className: "jsx-3715901487" + " " + "nav__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/Coffee",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3715901487",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_S__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    small: true,
    bgColor: "#c82333",
    link: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-3715901487",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, " ", __jsx(_public_coffee_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), " "), Tip)))), __jsx("li", {
    className: "jsx-3715901487" + " " + "nav__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/News",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3715901487",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_S__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    bgColor: "#c8233367",
    small: true,
    link: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "News"))))), __jsx("div", {
    className: "jsx-3715901487" + " " + "nav__side",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
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
        lineNumber: 42
      },
      __self: this
    }, each);
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3715901487",
    __self: this
  }, "i.jsx-3715901487{width:1.3rem;margin:0px 6px 0 0;display:inline-block;vertical-align:middle;font-size:14px;}.header__wrapper.jsx-3715901487{direction:ltr;position:relative;height:64px;width:100%;background:linear-gradient(45deg,#5c0434,#000000d6);border-bottom:1px solid darkblue;margin:0 auto;margin-bottom:48px;}.header.jsx-3715901487{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1.jsx-3715901487{margin-top:10px;color:#e6e6e6;font-size:3.5rem;font-family:'Montserrat';text-align:center;text-shadow:0 1px 35px rgba(5,35,10,0.2);}nav.jsx-3715901487{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:100%;}.nav__list.jsx-3715901487{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nav__item.jsx-3715901487{margin-top:10px;margin-left:40px;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nav__side.jsx-3715901487{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media (max-width:768px){.header.jsx-3715901487{margin-left:12px;margin-right:12px;}h1.jsx-3715901487{font-size:2.5rem;}.nav__item.jsx-3715901487{margin-left:12px;}nav.jsx-3715901487{margin-top:6px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXlwby9EZXNrdG9wL1Byb2plY3Rvcy9Db3JvbmFTdGF0dXMvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RrQixBQUd3QixBQVFDLEFBV0QsQUFNRyxBQVNILEFBUUEsQUFLRyxBQVNILEFBS00sQUFJQSxBQUdBLEFBR0YsYUF0RUUsQ0FRRCxDQStEbEIsQ0E5Q2MsQUFzQkcsQ0FjRyxBQUlwQixBQUdBLGFBMUNpQixFQXpCSSxBQVFULENBdUNJLEVBY2hCLFNBcERXLEdBaUJjLEVBc0JaLElBL0NTLEVBU2dDLGlCQWlCcEMsRUFUWSxBQWVYLEFBUUEsQUFjckIsQ0FyRGlCLGVBQ2pCLEFBeUI4QyxpQkFqQlgsZ0JBc0NILFFBcEJoQyxTQWpCZ0IsY0FDSyxhQXFCVSxBQVEvQixNQTVCQSxnQkFLcUIsaURBK0JBLDRDQTlCckIsUUFlYSxXQUNiLDhCQWVBIiwiZmlsZSI6Ii9Vc2Vycy9yYXlwby9EZXNrdG9wL1Byb2plY3Rvcy9Db3JvbmFTdGF0dXMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgU2xpZGVJbkxlZnQgfSBmcm9tICcuL1MnXG5pbXBvcnQgQ29mZmVlIGZyb20gJy4uL3B1YmxpYy9jb2ZmZWUuc3ZnJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMsIHsgdGl0bGUsIGlzSGViIH0pID0+IHtcbiAgY29uc3QgVGlwID0gaXNIZWIgJiYgJ9eq16jXldee15Qg15zXm9ek16TXldeqJyB8fCAnR2xvdmVzIFRpcCdcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fd3JhcHBlclwiPlxuICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogJzgyMHB4JywgbWFyZ2luOiAnMCBhdXRvJyB9fT5cbiAgICAgICAgPFNsaWRlSW5MZWZ0IGR1cmF0aW9uPScwLjc1cyc+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZfX2xpc3RcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0+e3Byb3BzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvQ29mZmVlJz5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNtYWxsIGJnQ29sb3I9JyNjODIzMzMnIGxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPGk+IDxDb2ZmZWUgLz4gPC9pPlxuICAgICAgICAgICAgICAgICAgICAgIHtUaXB9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9faXRlbVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9OZXdzJz5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJnQ29sb3I9JyNjODIzMzM2Nycgc21hbGwgbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICBOZXdzXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX3NpZGVcIj4gXG4gICAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4ubWFwKGVhY2ggPT4gKCA8bGkgY2xhc3NOYW1lPVwibmF2X19pdGVtXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT57ZWFjaH08L2xpPiApKSB9IFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICA8L1NsaWRlSW5MZWZ0PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGkge1xuICAgICAgICAgIHdpZHRoOiAxLjNyZW07XG4gICAgICAgICAgbWFyZ2luOiAwcHggNnB4IDAgMDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyX193cmFwcGVyIHtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzVjMDQzNCwgIzAwMDAwMGQ2KTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2JsdWU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBjb2xvcjogI2U2ZTZlNjtcbiAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMzVweCByZ2JhKDUsIDM1LCAxMCwgMC4yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cblxuICAgICAgICAubmF2X19saXN0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2X19pdGVtIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZfX3NpZGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdl9faXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXX0= */\n/*@ sourceURL=/Users/raypo/Desktop/Projectos/CoronaStatus/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./public/coffee.svg":
/*!***************************!*\
  !*** ./public/coffee.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  "data-name": "Fill out line"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M440 296a97.839 97.839 0 01-72.85 68.63L352 368l-61.93-87.42L280 266.36l-40-23.87-48-72-13.66-27.33-12.43-24.86a14.928 14.928 0 015.1-19.11 15.167 15.167 0 014.31-1.96 14.579 14.579 0 013.92-.53 14.912 14.912 0 0113.11 7.76l-9.7-17.78a15.174 15.174 0 0126.36-15.03l-10.64-18.24a16.412 16.412 0 0127.8-17.42c.2.29.38.58.56.89l5 8.57a14.26 14.26 0 0124.18-15.1l22.79 34.18 10.56 15.84a14.194 14.194 0 0127.46-3.38L344 152v56z",
  fill: "#65dcff"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M154.32 249.99l-.47.39L152 248z",
  fill: "#3ea7ff"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M154.32 249.99l-.47.39L152 248z",
  fill: "#3ea7ff"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M352 424a143.597 143.597 0 01-88.32 60.51L248 488l-56-136-32-16-32-64-42.13-36.11a16.925 16.925 0 0111.02-29.77 16.48 16.48 0 013.63.4 16.71 16.71 0 017.38 3.68L152 248l1.85 2.38.47-.39L152 248l-46.5-59.79a14.384 14.384 0 1122.71-17.66l4.45 5.73a17.013 17.013 0 0126.59-21.22 17.428 17.428 0 011.08 1.44l6.14 9.2a15.74 15.74 0 0125.94-17.83l14.42 20.36L208 168a48.417 48.417 0 0154.64 30.07L288 264l-16 40z",
  fill: "#65dcff"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M445.406 290.103L352 204.48V152a8.006 8.006 0 00-.481-2.734L324.24 74.254a22.116 22.116 0 00-35.49-9.062l-26.185-39.278a22.26 22.26 0 00-36.33-1.008 24.425 24.425 0 00-35.154 31.86 23.134 23.134 0 00-16.129 32.357 22.896 22.896 0 00-16.2 32.759l.849 1.697 14.31-7.158-.849-1.695a6.933 6.933 0 012.37-8.87 6.924 6.924 0 019.905 2.457l8.465 15.518 14.046-7.662-18.177-33.323a7.175 7.175 0 0112.496-7.051l38.922 66.722a8 8 0 0013.82-8.061l-49.625-85.073a8.412 8.412 0 0114.532-8.477l4.955 8.496.045.076 40.273 69.04a8 8 0 0013.82-8.062l-40.295-69.078a6.26 6.26 0 0110.639-6.589l31.958 47.938c.02.52.046 1.041.104 1.564l5.483 49.348a40.401 40.401 0 0011.544 24.018l11.314-11.314a24.344 24.344 0 01-6.955-14.47l-5.483-49.348a6.231 6.231 0 014.2-6.566 6.167 6.167 0 017.785 3.763L336 153.41V208a8 8 0 002.594 5.897l92.247 84.56a89.76 89.76 0 01-65.43 58.368l-9.956 2.212-47.932-67.662-13.055 9.25 51.004 72a7.996 7.996 0 008.263 3.185l15.146-3.366a105.755 105.755 0 0078.811-74.246 8.001 8.001 0 00-2.286-8.095z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M280.99 303.064l14.438-36.093a7.998 7.998 0 00.039-5.843l-24.929-64.815a57.658 57.658 0 00-60.03-36.73l-11.572-16.338a23.725 23.725 0 00-39.65 1.394 25.012 25.012 0 00-36.756 13.124 22.364 22.364 0 00-23.344 35.363l4.681 6.019a24.908 24.908 0 00-23.2 42.82l40.9 35.057 31.278 62.556a7.997 7.997 0 003.577 3.577l29.321 14.66 54.86 133.23a7.994 7.994 0 009.132 4.765l15.685-3.486a150.894 150.894 0 0093.236-63.886 8 8 0 000-8.875zm-19.04 173.641l-9.115 2.026-53.438-129.777a8 8 0 00-3.82-4.11l-29.614-14.807-30.808-61.615a7.996 7.996 0 00-1.948-2.496l-42.128-36.11a8.92 8.92 0 01-.502-13.08 8.961 8.961 0 0112.113-.465l44.103 37.803a8 8 0 0011.522-10.986l-46.5-59.785a6.385 6.385 0 011.498-9.23 6.41 6.41 0 018.58 1.392l4.47 5.746.065.084 43.191 55.532a8 8 0 0012.63-9.823l-43.219-55.566a9.016 9.016 0 1114.646-10.502l37.866 56.799a8 8 0 0013.313-8.875l-31.732-47.598a7.74 7.74 0 012.478-10.943 7.78 7.78 0 0110.278 2.175l31.216 44.069 16.291 23.938a8 8 0 0013.228-9.002l-16.334-24c-.014-.021-.03-.04-.045-.06s-.026-.042-.04-.063l-8.359-11.8a41.692 41.692 0 0133.768 26.48l23.803 61.887-14.835 37.086a8 8 0 00.772 7.409l76.98 115.47a134.914 134.914 0 01-80.374 52.797z"
}));

function SvgCoffee(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    height: 16,
    width: 16
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgCoffee);

/***/ }),

/***/ "./public/coffee2.svg":
false

})
//# sourceMappingURL=_app.js.2bfcb71a27232934b28a.hot-update.js.map