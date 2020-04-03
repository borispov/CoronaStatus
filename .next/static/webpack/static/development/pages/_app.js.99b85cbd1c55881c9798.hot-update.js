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
    timingFunction: "cubic-bezier(0, 0.2, 1.5, 1)",
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
  }, "i.jsx-3715901487{width:1.3rem;margin:0px 6px 0 0;display:inline-block;vertical-align:middle;font-size:14px;}.header__wrapper.jsx-3715901487{direction:ltr;position:relative;height:64px;width:100%;background:linear-gradient(45deg,#5c0434,#000000d6);border-bottom:1px solid darkblue;margin:0 auto;margin-bottom:48px;}.header.jsx-3715901487{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1.jsx-3715901487{margin-top:10px;color:#e6e6e6;font-size:3.5rem;font-family:'Montserrat';text-align:center;text-shadow:0 1px 35px rgba(5,35,10,0.2);}nav.jsx-3715901487{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:100%;}.nav__list.jsx-3715901487{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nav__item.jsx-3715901487{margin-top:10px;margin-left:40px;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nav__side.jsx-3715901487{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media (max-width:768px){.header.jsx-3715901487{margin-left:12px;margin-right:12px;}h1.jsx-3715901487{font-size:2.5rem;}.nav__item.jsx-3715901487{margin-left:12px;}nav.jsx-3715901487{margin-top:6px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXlwby9EZXNrdG9wL1Byb2plY3Rvcy9Db3JvbmFTdGF0dXMvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NrQixBQUd3QixBQVFDLEFBV0QsQUFNRyxBQVNILEFBUUEsQUFLRyxBQVNILEFBS00sQUFJQSxBQUdBLEFBR0YsYUF0RUUsQ0FRRCxDQStEbEIsQ0E5Q2MsQUFzQkcsQ0FjRyxBQUlwQixBQUdBLGFBMUNpQixFQXpCSSxBQVFULENBdUNJLEVBY2hCLFNBcERXLEdBaUJjLEVBc0JaLElBL0NTLEVBU2dDLGlCQWlCcEMsRUFUWSxBQWVYLEFBUUEsQUFjckIsQ0FyRGlCLGVBQ2pCLEFBeUI4QyxpQkFqQlgsZ0JBc0NILFFBcEJoQyxTQWpCZ0IsY0FDSyxhQXFCVSxBQVEvQixNQTVCQSxnQkFLcUIsaURBK0JBLDRDQTlCckIsUUFlYSxXQUNiLDhCQWVBIiwiZmlsZSI6Ii9Vc2Vycy9yYXlwby9EZXNrdG9wL1Byb2plY3Rvcy9Db3JvbmFTdGF0dXMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgU2xpZGVJbkxlZnQgfSBmcm9tICcuL1MnXG5pbXBvcnQgQ29mZmVlIGZyb20gJy4uL3B1YmxpYy9jb2ZmZWUuc3ZnJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMsIHsgdGl0bGUsIGlzSGViIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fd3JhcHBlclwiPlxuICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogJzgyMHB4JywgbWFyZ2luOiAnMCBhdXRvJyB9fT5cbiAgICAgICAgPFNsaWRlSW5MZWZ0IGR1cmF0aW9uPScwLjVzJyBkZWxheT0nMC43cycgdGltaW5nRnVuY3Rpb249J2N1YmljLWJlemllcigwLCAwLjIsIDEuNSwgMSknID5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdl9fbGlzdFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fT57cHJvcHMudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9faXRlbVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9Db2ZmZWUnPlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc21hbGwgYmdDb2xvcj0nI2M4MjMzMycgbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8aT4gPENvZmZlZSAvPiA8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgQnV5IE1lIEEgQ29mZml4XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9faXRlbVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9OZXdzJz5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJnQ29sb3I9JyNjODIzMzM2Nycgc21hbGwgbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICBOZXdzXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX3NpZGVcIj4gXG4gICAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4ubWFwKGVhY2ggPT4gKCA8bGkgY2xhc3NOYW1lPVwibmF2X19pdGVtXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT57ZWFjaH08L2xpPiApKSB9IFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICA8L1NsaWRlSW5MZWZ0PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGkge1xuICAgICAgICAgIHdpZHRoOiAxLjNyZW07XG4gICAgICAgICAgbWFyZ2luOiAwcHggNnB4IDAgMDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyX193cmFwcGVyIHtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzVjMDQzNCwgIzAwMDAwMGQ2KTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2JsdWU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBjb2xvcjogI2U2ZTZlNjtcbiAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMzVweCByZ2JhKDUsIDM1LCAxMCwgMC4yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cblxuICAgICAgICAubmF2X19saXN0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2X19pdGVtIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZfX3NpZGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdl9faXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXX0= */\n/*@ sourceURL=/Users/raypo/Desktop/Projectos/CoronaStatus/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.99b85cbd1c55881c9798.hot-update.js.map