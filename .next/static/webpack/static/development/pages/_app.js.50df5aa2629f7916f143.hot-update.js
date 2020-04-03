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
/* harmony import */ var _Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/ThemeIcon */ "./components/Icons/ThemeIcon.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/raypo/Desktop/Projectos/CoronaStatus/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Header = function Header(props, _ref) {
  var title = _ref.title;
  var Tip = props.isHeb && 'תרומה לכפפות' || 'Gloves Tip';
  return __jsx("div", {
    className: "jsx-805557135" + " " + "header__wrapper",
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
    className: "jsx-805557135",
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
    className: "jsx-805557135" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-805557135" + " " + "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-805557135" + " " + "nav__list",
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
    className: "jsx-805557135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h1", {
    style: {
      cursor: 'pointer'
    },
    className: "jsx-805557135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.title))), __jsx("li", {
    className: "jsx-805557135" + " " + "nav__item",
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
    className: "jsx-805557135",
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
    className: "jsx-805557135",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, " ", __jsx(_Icons_ThemeIcon__WEBPACK_IMPORTED_MODULE_3__["Coffee"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), " "), Tip)))), __jsx("li", {
    className: "jsx-805557135" + " " + "nav__item",
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
    className: "jsx-805557135",
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
    className: "jsx-805557135" + " " + "nav__side",
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
      className: "jsx-805557135" + " " + "nav__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, each);
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "805557135",
    __self: this
  }, "i.jsx-805557135{width:1.3rem;margin:0px 6px 0 0;display:inline-block;vertical-align:middle;font-size:14px;}.header__wrapper.jsx-805557135{direction:ltr;position:relative;height:64px;width:100%;background:linear-gradient(45deg,#5c0434,#000000d6);border-bottom:1px solid darkblue;margin:0 auto;margin-bottom:48px;}.header.jsx-805557135{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1.jsx-805557135{margin-top:10px;color:#e6e6e6;font-size:3.5rem;font-family:'Montserrat';text-align:center;text-shadow:0 1px 35px rgba(5,35,10,0.2);}nav.jsx-805557135{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:100%;}.nav__list.jsx-805557135{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nav__item.jsx-805557135{margin-top:10px;margin-left:40px;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nav__side.jsx-805557135{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}@media (max-width:768px){.header.jsx-805557135{margin-left:12px;margin-right:12px;}h1.jsx-805557135{font-size:2.5rem;}.nav__item.jsx-805557135{margin-left:6px;}nav.jsx-805557135{margin-top:6px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXlwby9EZXNrdG9wL1Byb2plY3Rvcy9Db3JvbmFTdGF0dXMvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RrQixBQUd3QixBQVFDLEFBV0QsQUFNRyxBQVNILEFBUUEsQUFLRyxBQVNILEFBTU0sQUFJQSxBQUdELEFBR0QsYUF2RUUsQ0FRRCxDQWdFbEIsQ0EvQ2MsQUFzQkcsQUFzQmpCLENBUG9CLEFBSXBCLGFBeENpQixFQXpCSSxBQVFULENBdUNJLEVBZWhCLFNBckRXLEdBaUJjLEVBc0JaLElBL0NTLEVBU2dDLGlCQWlCcEMsRUFUWSxBQWVYLEFBUUEsQUFjSSxDQXJEUixlQUNqQixBQXlCOEMsaUJBakJYLGdCQXNDSCxRQXBCaEMsU0FqQmdCLGNBQ0ssYUFxQlUsQUFRL0IsTUE1QkEsQUEwQ0EsZ0JBckNxQixpREErQkEsNENBOUJyQixRQWVhLFdBQ2IsOEJBZUEiLCJmaWxlIjoiL1VzZXJzL3JheXBvL0Rlc2t0b3AvUHJvamVjdG9zL0Nvcm9uYVN0YXR1cy9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBTbGlkZUluTGVmdCB9IGZyb20gJy4vUydcbmltcG9ydCB7IENvZmZlZSB9IGZyb20gJy4vSWNvbnMvVGhlbWVJY29uJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMsIHsgdGl0bGUgfSkgPT4ge1xuICBjb25zdCBUaXAgPSBwcm9wcy5pc0hlYiAmJiAn16rXqNeV157XlCDXnNeb16TXpNeV16onIHx8ICdHbG92ZXMgVGlwJ1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX193cmFwcGVyXCI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiAnODIwcHgnLCBtYXJnaW46ICcwIGF1dG8nIH19PlxuICAgICAgICA8U2xpZGVJbkxlZnQgZHVyYXRpb249JzAuNzVzJz5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdl9fbGlzdFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fT57cHJvcHMudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9faXRlbVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9Db2ZmZWUnPlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc21hbGwgYmdDb2xvcj0nI2M4MjMzMycgbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8aT4gPENvZmZlZSAvPiA8L2k+XG4gICAgICAgICAgICAgICAgICAgICAge1RpcH1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL05ld3MnPlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYmdDb2xvcj0nI2M4MjMzMzY3JyBzbWFsbCBsaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIE5ld3NcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9fc2lkZVwiPiBcbiAgICAgICAgICAgICAgeyBwcm9wcy5jaGlsZHJlbi5tYXAoZWFjaCA9PiAoIDxsaSBjbGFzc05hbWU9XCJuYXZfX2l0ZW1cIiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxNXB4J319PntlYWNofTwvbGk+ICkpIH0gXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgIDwvU2xpZGVJbkxlZnQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaSB7XG4gICAgICAgICAgd2lkdGg6IDEuM3JlbTtcbiAgICAgICAgICBtYXJnaW46IDBweCA2cHggMCAwO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXJfX3dyYXBwZXIge1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNWMwNDM0LCAjMDAwMDAwZDYpO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrYmx1ZTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiAjZTZlNmU2O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAzNXB4IHJnYmEoNSwgMzUsIDEwLCAwLjIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC5uYXZfX2xpc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZfX2l0ZW0ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdl9fc2lkZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2X19pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl19 */\n/*@ sourceURL=/Users/raypo/Desktop/Projectos/CoronaStatus/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.50df5aa2629f7916f143.hot-update.js.map