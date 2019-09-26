webpackHotUpdate("static/development/pages/reports/[reportId].js",{

/***/ "./client/Report/index.tsx":
/*!*********************************!*\
  !*** ./client/Report/index.tsx ***!
  \*********************************/
/*! exports provided: ReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPage", function() { return ReportPage; });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _codegen_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../codegen/graphql */ "./client/codegen/graphql.ts");
/* harmony import */ var _components_ErrorBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ErrorBox */ "./client/components/ErrorBox.tsx");
/* harmony import */ var _components_Crumbs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Crumbs */ "./client/components/Crumbs.tsx");
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Slide */ "./client/components/Slide.tsx");


var _jsxFileName = "/Users/andreasmoller/code/reports/client/Report/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var _ref =  false ? undefined : {
  name: "18o8eue-ReportPage",
  styles: "position:absolute;top:16px;left:16px;label:ReportPage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QnNCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSB9IGZyb20gXCIuLi9jb2RlZ2VuL2dyYXBocWxcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgRXJyb3JCb3ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FcnJvckJveFwiO1xuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYlRpdGxlLCBDcnVtYkxpbmsgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHsgU2xpZGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TbGlkZVwiO1xuXG5leHBvcnQgY29uc3QgUmVwb3J0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgcmVwb3J0SWQgPSByb3V0ZXIucXVlcnkucmVwb3J0SWQgYXMgc3RyaW5nXG5cbiAgY29uc29sZS5sb2coeyByZXBvcnRJZCB9KVxuICBjb25zdCByZXBvcnRRdWVyeSA9IHVzZVJlcG9ydEdldFF1ZXJ5KHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkOiByZXBvcnRJZFxuICAgIH1cbiAgfSlcblxuICBjb25zdCByZXBvcnQgPSByZXBvcnRRdWVyeS5kYXRhICYmIHJlcG9ydFF1ZXJ5LmRhdGEucmVwb3J0XG5cbiAgY29uc29sZS5sb2cocmVwb3J0UXVlcnkpXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxDcnVtYnMgY3NzPXtjc3NgXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICBgfT5cbiAgICAgICAgPENydW1iTGluayBocmVmPVwiL3JlcG9ydHNcIj5SZXBvcnRzPC9DcnVtYkxpbms+XG4gICAgICAgIDxDcnVtYlRpdGxlPntyZXBvcnQgPyByZXBvcnQudGl0bGUgOiBcIi4uLlwifTwvQ3J1bWJUaXRsZT5cbiAgICAgIDwvQ3J1bWJzPlxuICAgICAge3JlcG9ydCAmJlxuICAgICAgICA8U2xpZGUgd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cblxuICAgICAgICA8L1NsaWRlPlxuICAgICAgfVxuICAgICAge3JlcG9ydFF1ZXJ5LmVycm9yICYmIDxFcnJvckJveCBlcnJvcj17cmVwb3J0UXVlcnkuZXJyb3J9IC8+fVxuXG4gICAgPC9MYXlvdXQ+XG4gIClcblxufVxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG5gIl19 */"
};

var ReportPage = function ReportPage() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var reportId = router.query.reportId;
  console.log({
    reportId: reportId
  });
  var reportQuery = Object(_codegen_graphql__WEBPACK_IMPORTED_MODULE_5__["useReportGetQuery"])({
    variables: {
      id: reportId
    }
  });
  var report = reportQuery.data && reportQuery.data.report;
  console.log(reportQuery);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Layout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Crumbs__WEBPACK_IMPORTED_MODULE_7__["Crumbs"], {
    css: _ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Crumbs__WEBPACK_IMPORTED_MODULE_7__["CrumbLink"], {
    href: "/reports",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Reports"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Crumbs__WEBPACK_IMPORTED_MODULE_7__["CrumbTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, report ? report.title : "...")), report && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Slide__WEBPACK_IMPORTED_MODULE_8__["Slide"], {
    width: report.width,
    height: report.height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), reportQuery.error && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_ErrorBox__WEBPACK_IMPORTED_MODULE_6__["ErrorBox"], {
    error: reportQuery.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }));
};

var Layout = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("div", {
  target: "esq99oz0",
  label: "Layout"
})( false ? undefined : {
  name: "uhv7oc",
  styles: "display:grid;height:100%;place-content:center center;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q3lCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSB9IGZyb20gXCIuLi9jb2RlZ2VuL2dyYXBocWxcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgRXJyb3JCb3ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FcnJvckJveFwiO1xuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYlRpdGxlLCBDcnVtYkxpbmsgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHsgU2xpZGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TbGlkZVwiO1xuXG5leHBvcnQgY29uc3QgUmVwb3J0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgcmVwb3J0SWQgPSByb3V0ZXIucXVlcnkucmVwb3J0SWQgYXMgc3RyaW5nXG5cbiAgY29uc29sZS5sb2coeyByZXBvcnRJZCB9KVxuICBjb25zdCByZXBvcnRRdWVyeSA9IHVzZVJlcG9ydEdldFF1ZXJ5KHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkOiByZXBvcnRJZFxuICAgIH1cbiAgfSlcblxuICBjb25zdCByZXBvcnQgPSByZXBvcnRRdWVyeS5kYXRhICYmIHJlcG9ydFF1ZXJ5LmRhdGEucmVwb3J0XG5cbiAgY29uc29sZS5sb2cocmVwb3J0UXVlcnkpXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxDcnVtYnMgY3NzPXtjc3NgXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICBgfT5cbiAgICAgICAgPENydW1iTGluayBocmVmPVwiL3JlcG9ydHNcIj5SZXBvcnRzPC9DcnVtYkxpbms+XG4gICAgICAgIDxDcnVtYlRpdGxlPntyZXBvcnQgPyByZXBvcnQudGl0bGUgOiBcIi4uLlwifTwvQ3J1bWJUaXRsZT5cbiAgICAgIDwvQ3J1bWJzPlxuICAgICAge3JlcG9ydCAmJlxuICAgICAgICA8U2xpZGUgd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cblxuICAgICAgICA8L1NsaWRlPlxuICAgICAgfVxuICAgICAge3JlcG9ydFF1ZXJ5LmVycm9yICYmIDxFcnJvckJveCBlcnJvcj17cmVwb3J0UXVlcnkuZXJyb3J9IC8+fVxuXG4gICAgPC9MYXlvdXQ+XG4gIClcblxufVxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG5gIl19 */"
});

/***/ }),

/***/ "./client/components/Slide.tsx":
/*!*************************************!*\
  !*** ./client/components/Slide.tsx ***!
  \*************************************/
/*! exports provided: Slide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_resize_aware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-resize-aware */ "./node_modules/react-resize-aware/dist/index.js");
/* harmony import */ var react_resize_aware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_resize_aware__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme */ "./client/theme.ts");


var _jsxFileName = "/Users/andreasmoller/code/reports/client/components/Slide.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var Slide = function Slide(props) {
  var _useResizeListener = react_resize_aware__WEBPACK_IMPORTED_MODULE_4___default()(),
      _useResizeListener2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useResizeListener, 2),
      resizeListener = _useResizeListener2[0],
      sizes = _useResizeListener2[1];

  var width = props.width,
      height = props.height,
      children = props.children;
  var scale = sizes.width / width;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Background, {
    onClick: props.onClick,
    scale: scale,
    height: height,
    selected: props.selected,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, resizeListener, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Content, {
    height: height,
    width: width,
    scale: scale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, children));
};

var Background = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("section", {
  target: "e1ocvuxq0",
  label: "Background"
})("background:white;position:relative;justify-self:stretch;overflow:hidden;height:", function (p) {
  return p.height * p.scale;
}, "px;box-shadow:0 ", function (p) {
  return 1 + 5 * p.scale;
}, "px ", function (p) {
  return 3 + 10 * p.scale;
}, "px rgba(0,0,0,0.4);border:", function (p) {
  return p.selected ? "1px solid  ".concat(_theme__WEBPACK_IMPORTED_MODULE_5__["colors"].primary) : "1px solid transparent";
}, ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvY29tcG9uZW50cy9TbGlkZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNrRCIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L2NvbXBvbmVudHMvU2xpZGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHVzZVJlc2l6ZUxpc3RlbmVyIGZyb20gXCJyZWFjdC1yZXNpemUtYXdhcmVcIlxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uL3RoZW1lXCJcblxudHlwZSBTbGlkZVByb3BzPENvbXBvbmVudFR5cGUgPSBSZWFjdC5Db21wb25lbnQ+ID0ge1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICB3aWR0aDogbnVtYmVyXG4gIGhlaWdodDogbnVtYmVyXG4gIG9uQ2xpY2s/OiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gdm9pZFxuICBzZWxlY3RlZD86IGJvb2xlYW5cbn1cbmV4cG9ydCBjb25zdCBTbGlkZSA9IChwcm9wczogU2xpZGVQcm9wcykgPT4ge1xuICBjb25zdCBbcmVzaXplTGlzdGVuZXIsIHNpemVzXSA9IHVzZVJlc2l6ZUxpc3RlbmVyKClcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBjaGlsZHJlbiB9ID0gcHJvcHNcbiAgY29uc3Qgc2NhbGUgPSBzaXplcy53aWR0aCAvIHdpZHRoXG4gIHJldHVybiAoXG4gICAgPEJhY2tncm91bmRcbiAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICBzY2FsZT17c2NhbGV9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHNlbGVjdGVkPXtwcm9wcy5zZWxlY3RlZH1cbiAgICA+XG4gICAgICB7cmVzaXplTGlzdGVuZXJ9XG4gICAgICA8Q29udGVudCBoZWlnaHQ9e2hlaWdodH0gd2lkdGg9e3dpZHRofSBzY2FsZT17c2NhbGV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0NvbnRlbnQ+XG4gICAgPC9CYWNrZ3JvdW5kPlxuICApXG59XG50eXBlIEJhY2tncm91bmRQcm9wcyA9IHtcbiAgc2NhbGU6IG51bWJlclxuICBoZWlnaHQ6IG51bWJlclxuICBzZWxlY3RlZDogYm9vbGVhblxufVxuY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5zZWN0aW9uPEJhY2tncm91bmRQcm9wcz5gXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAke3AgPT4gcC5oZWlnaHQgKiBwLnNjYWxlfXB4O1xuICBib3gtc2hhZG93OiAwICR7cCA9PiAxICsgNSAqIHAuc2NhbGV9cHggJHtwID0+IDMgKyAxMCAqIHAuc2NhbGV9cHhcbiAgICByZ2JhKDAsIDAsIDAsIDAuNCk7XG5cbiAgYm9yZGVyOiAke3AgPT5cbiAgICBwLnNlbGVjdGVkID8gYDFweCBzb2xpZCAgJHtjb2xvcnMucHJpbWFyeX1gIDogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIn07XG5gXG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2PHsgc2NhbGU6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IHdpZHRoOiBudW1iZXIgfT5gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodH1weDtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKCR7cCA9PiBwLnNjYWxlfSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuYCJdfQ== */"));

var Content = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("div", {
  target: "e1ocvuxq1",
  label: "Content"
})("position:absolute;left:0;top:0;height:", function (p) {
  return p.height;
}, "px;width:", function (p) {
  return p.width;
}, "px;transform:scale(", function (p) {
  return p.scale;
}, ");transform-origin:top left;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvY29tcG9uZW50cy9TbGlkZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0Q0RSIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L2NvbXBvbmVudHMvU2xpZGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHVzZVJlc2l6ZUxpc3RlbmVyIGZyb20gXCJyZWFjdC1yZXNpemUtYXdhcmVcIlxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uL3RoZW1lXCJcblxudHlwZSBTbGlkZVByb3BzPENvbXBvbmVudFR5cGUgPSBSZWFjdC5Db21wb25lbnQ+ID0ge1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICB3aWR0aDogbnVtYmVyXG4gIGhlaWdodDogbnVtYmVyXG4gIG9uQ2xpY2s/OiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gdm9pZFxuICBzZWxlY3RlZD86IGJvb2xlYW5cbn1cbmV4cG9ydCBjb25zdCBTbGlkZSA9IChwcm9wczogU2xpZGVQcm9wcykgPT4ge1xuICBjb25zdCBbcmVzaXplTGlzdGVuZXIsIHNpemVzXSA9IHVzZVJlc2l6ZUxpc3RlbmVyKClcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBjaGlsZHJlbiB9ID0gcHJvcHNcbiAgY29uc3Qgc2NhbGUgPSBzaXplcy53aWR0aCAvIHdpZHRoXG4gIHJldHVybiAoXG4gICAgPEJhY2tncm91bmRcbiAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICBzY2FsZT17c2NhbGV9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHNlbGVjdGVkPXtwcm9wcy5zZWxlY3RlZH1cbiAgICA+XG4gICAgICB7cmVzaXplTGlzdGVuZXJ9XG4gICAgICA8Q29udGVudCBoZWlnaHQ9e2hlaWdodH0gd2lkdGg9e3dpZHRofSBzY2FsZT17c2NhbGV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0NvbnRlbnQ+XG4gICAgPC9CYWNrZ3JvdW5kPlxuICApXG59XG50eXBlIEJhY2tncm91bmRQcm9wcyA9IHtcbiAgc2NhbGU6IG51bWJlclxuICBoZWlnaHQ6IG51bWJlclxuICBzZWxlY3RlZDogYm9vbGVhblxufVxuY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5zZWN0aW9uPEJhY2tncm91bmRQcm9wcz5gXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAke3AgPT4gcC5oZWlnaHQgKiBwLnNjYWxlfXB4O1xuICBib3gtc2hhZG93OiAwICR7cCA9PiAxICsgNSAqIHAuc2NhbGV9cHggJHtwID0+IDMgKyAxMCAqIHAuc2NhbGV9cHhcbiAgICByZ2JhKDAsIDAsIDAsIDAuNCk7XG5cbiAgYm9yZGVyOiAke3AgPT5cbiAgICBwLnNlbGVjdGVkID8gYDFweCBzb2xpZCAgJHtjb2xvcnMucHJpbWFyeX1gIDogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIn07XG5gXG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2PHsgc2NhbGU6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IHdpZHRoOiBudW1iZXIgfT5gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodH1weDtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKCR7cCA9PiBwLnNjYWxlfSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuYCJdfQ== */"));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/react-resize-aware/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-resize-aware/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e=__webpack_require__(/*! react */ "./node_modules/react/index.js"),t={display:"block",opacity:0,position:"absolute",top:0,left:0,height:"100%",width:"100%",overflow:"hidden",pointerEvents:"none",zIndex:-1},n=function(n){var r=n.onResize,i=e.useRef();return function(t,n){e.useEffect(function(){var e=t.current&&t.current.contentDocument.defaultView;return n(),e&&e.addEventListener("resize",n),function(){e&&"function"==typeof e.removeEventListener&&e.removeEventListener("resize",n)}},[])}(i,function(){return r(i)}),e.createElement("object",{type:"text/html",style:t,data:"about:blank",ref:i,"aria-hidden":!0,"aria-label":"resize-listener",tabIndex:-1})},r=function(e){return{width:null!=e?e.offsetWidth:null,height:null!=e?e.offsetHeight:null}};module.exports=function(t){void 0===t&&(t=r);var i=e.useState({width:null,height:null}),u=i[0],o=i[1],l=e.useCallback(function(e){return o(t(e.current))},[t]);return[e.useMemo(function(){return e.createElement(n,{onResize:l})},[l]),u]};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./server/resolvers/Slide.ts":
false

})
//# sourceMappingURL=[reportId].js.7a380183252c2047b8ab.hot-update.js.map