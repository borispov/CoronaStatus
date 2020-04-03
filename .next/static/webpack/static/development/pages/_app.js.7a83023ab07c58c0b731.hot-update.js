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
    className: "jsx-2703025036" + " " + "header__wrapper",
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
    className: "jsx-2703025036",
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
    className: "jsx-2703025036" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-2703025036" + " " + "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-2703025036" + " " + "nav__list",
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
    className: "jsx-2703025036",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h1", {
    style: {
      cursor: 'pointer'
    },
    className: "jsx-2703025036",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.title))), __jsx("li", {
    className: "jsx-2703025036" + " " + "nav__item",
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
    className: "jsx-2703025036",
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
    className: "jsx-2703025036",
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
    className: "jsx-2703025036" + " " + "nav__item",
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
    className: "jsx-2703025036",
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
    className: "jsx-2703025036" + " " + "nav__side",
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
      className: "jsx-2703025036" + " " + "nav__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, each);
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2703025036",
    __self: this
  }, "i.jsx-2703025036{width:1.3rem;margin:0px 6px 0 0;display:inline-block;vertical-align:middle;font-size:14px;}.header__wrapper.jsx-2703025036{direction:ltr;position:relative;height:64px;z-index:1;width:100%;background:linear-gradient(45deg,#5c0434,#000000d6);border-bottom:1px solid darkblue;margin:0 auto;margin-bottom:48px;}.header.jsx-2703025036{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1.jsx-2703025036{margin-top:10px;color:#e6e6e6;font-size:3.5rem;font-family:'Montserrat';text-align:center;text-shadow:0 1px 35px rgba(5,35,10,0.2);}nav.jsx-2703025036{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:100%;}.nav__list.jsx-2703025036{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nav__item.jsx-2703025036{margin-top:10px;margin-left:40px;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nav__side.jsx-2703025036{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media (max-width:768px){.header.jsx-2703025036{margin-left:12px;margin-right:12px;}h1.jsx-2703025036{font-size:2.5rem;}.nav__item.jsx-2703025036{margin-left:8px;}nav.jsx-2703025036{margin-top:6px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYXlwby9EZXNrdG9wL1Byb2plY3Rvcy9Db3JvbmFTdGF0dXMvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RrQixBQUd3QixBQVFDLEFBWUQsQUFNRyxBQVNILEFBUUEsQUFLRyxBQVNILEFBS00sQUFJQSxBQUdELEFBR0QsYUF2RUUsQ0FRRCxDQWdFbEIsQ0E5Q2MsQUFzQkcsQUFxQmpCLENBUG9CLEFBSXBCLGFBdkNpQixFQTFCSSxBQVFULENBd0NJLEVBY2hCLFNBckRVLEdBa0JlLEVBc0JaLElBaERTLENBU1gsV0FDMkMsT0FpQnBDLEVBVFksQUFlWCxBQVFBLEFBY3JCLENBdERpQixlQUNqQixBQTBCOEMsMkJBakJYLE1Bc0NILFFBcEJoQyxtQkFqQmdCLGNBQ0ssR0FxQlUsQUFRL0IsZ0JBNUJBLE1BS3FCLGlEQStCQSw0Q0E5QnJCLFFBZWEsV0FDYiw4QkFlQSIsImZpbGUiOiIvVXNlcnMvcmF5cG8vRGVza3RvcC9Qcm9qZWN0b3MvQ29yb25hU3RhdHVzL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIFNsaWRlSW5MZWZ0IH0gZnJvbSAnLi9TJ1xuaW1wb3J0IHsgQ29mZmVlIH0gZnJvbSAnLi9JY29ucy9UaGVtZUljb24nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcywgeyB0aXRsZSB9KSA9PiB7XG4gIGNvbnN0IFRpcCA9IHByb3BzLmlzSGViICYmICfXqteo15XXnteUINec15vXpNek15XXqicgfHwgJ0dsb3ZlcyBUaXAnXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3dyYXBwZXJcIj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGg6ICc4MjBweCcsIG1hcmdpbjogJzAgYXV0bycgfX0+XG4gICAgICAgIDxTbGlkZUluTGVmdCBkdXJhdGlvbj0nMC43NXMnPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2X19saXN0XCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tjdXJzb3I6ICdwb2ludGVyJ319Pntwcm9wcy50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL0NvZmZlZSc+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzbWFsbCBiZ0NvbG9yPScjYzgyMzMzJyBsaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDxpPiA8Q29mZmVlIC8+IDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICB7VGlwfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvTmV3cyc+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBiZ0NvbG9yPScjYzgyMzMzNjcnIHNtYWxsIGxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgTmV3c1xuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X19zaWRlXCI+IFxuICAgICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuLm1hcChlYWNoID0+ICggPGxpIGNsYXNzTmFtZT1cIm5hdl9faXRlbVwiIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+e2VhY2h9PC9saT4gKSkgfSBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgPC9TbGlkZUluTGVmdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBpIHtcbiAgICAgICAgICB3aWR0aDogMS4zcmVtO1xuICAgICAgICAgIG1hcmdpbjogMHB4IDZweCAwIDA7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlcl9fd3JhcHBlciB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzVjMDQzNCwgIzAwMDAwMGQ2KTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2JsdWU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBjb2xvcjogI2U2ZTZlNjtcbiAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMzVweCByZ2JhKDUsIDM1LCAxMCwgMC4yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cblxuICAgICAgICAubmF2X19saXN0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2X19pdGVtIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZfX3NpZGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdl9faXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdfQ== */\n/*@ sourceURL=/Users/raypo/Desktop/Projectos/CoronaStatus/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.7a83023ab07c58c0b731.hot-update.js.map