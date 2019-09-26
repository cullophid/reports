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
/* harmony import */ var _server_resolvers_Slide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../server/resolvers/Slide */ "./server/resolvers/Slide.ts");


var _jsxFileName = "/Users/andreasmoller/code/reports/client/Report/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var _ref =  false ? undefined : {
  name: "18o8eue-ReportPage",
  styles: "position:absolute;top:16px;left:16px;label:ReportPage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QnNCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSB9IGZyb20gXCIuLi9jb2RlZ2VuL2dyYXBocWxcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgRXJyb3JCb3ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FcnJvckJveFwiO1xuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYlRpdGxlLCBDcnVtYkxpbmsgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHsgU2xpZGUgfSBmcm9tIFwiLi4vLi4vc2VydmVyL3Jlc29sdmVycy9TbGlkZVwiO1xuXG5leHBvcnQgY29uc3QgUmVwb3J0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgcmVwb3J0SWQgPSByb3V0ZXIucXVlcnkucmVwb3J0SWQgYXMgc3RyaW5nXG5cbiAgY29uc29sZS5sb2coeyByZXBvcnRJZCB9KVxuICBjb25zdCByZXBvcnRRdWVyeSA9IHVzZVJlcG9ydEdldFF1ZXJ5KHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkOiByZXBvcnRJZFxuICAgIH1cbiAgfSlcblxuICBjb25zdCByZXBvcnQgPSByZXBvcnRRdWVyeS5kYXRhICYmIHJlcG9ydFF1ZXJ5LmRhdGEucmVwb3J0XG5cbiAgY29uc29sZS5sb2cocmVwb3J0UXVlcnkpXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxDcnVtYnMgY3NzPXtjc3NgXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICBgfT5cbiAgICAgICAgPENydW1iTGluayBocmVmPVwiL3JlcG9ydHNcIj5SZXBvcnRzPC9DcnVtYkxpbms+XG4gICAgICAgIDxDcnVtYlRpdGxlPntyZXBvcnQgPyByZXBvcnQudGl0bGUgOiBcIi4uLlwifTwvQ3J1bWJUaXRsZT5cbiAgICAgIDwvQ3J1bWJzPlxuICAgICAge3JlcG9ydCAmJlxuICAgICAgICA8U2xpZGUgd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cblxuICAgICAgICA8L1NsaWRlPlxuICAgICAgfVxuICAgICAge3JlcG9ydFF1ZXJ5LmVycm9yICYmIDxFcnJvckJveCBlcnJvcj17cmVwb3J0UXVlcnkuZXJyb3J9IC8+fVxuXG4gICAgPC9MYXlvdXQ+XG4gIClcblxufVxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG5gIl19 */"
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
  }, report ? report.title : "...")), report && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_server_resolvers_Slide__WEBPACK_IMPORTED_MODULE_8__["Slide"], {
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q3lCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSB9IGZyb20gXCIuLi9jb2RlZ2VuL2dyYXBocWxcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgRXJyb3JCb3ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FcnJvckJveFwiO1xuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYlRpdGxlLCBDcnVtYkxpbmsgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHsgU2xpZGUgfSBmcm9tIFwiLi4vLi4vc2VydmVyL3Jlc29sdmVycy9TbGlkZVwiO1xuXG5leHBvcnQgY29uc3QgUmVwb3J0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgcmVwb3J0SWQgPSByb3V0ZXIucXVlcnkucmVwb3J0SWQgYXMgc3RyaW5nXG5cbiAgY29uc29sZS5sb2coeyByZXBvcnRJZCB9KVxuICBjb25zdCByZXBvcnRRdWVyeSA9IHVzZVJlcG9ydEdldFF1ZXJ5KHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkOiByZXBvcnRJZFxuICAgIH1cbiAgfSlcblxuICBjb25zdCByZXBvcnQgPSByZXBvcnRRdWVyeS5kYXRhICYmIHJlcG9ydFF1ZXJ5LmRhdGEucmVwb3J0XG5cbiAgY29uc29sZS5sb2cocmVwb3J0UXVlcnkpXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxDcnVtYnMgY3NzPXtjc3NgXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICBgfT5cbiAgICAgICAgPENydW1iTGluayBocmVmPVwiL3JlcG9ydHNcIj5SZXBvcnRzPC9DcnVtYkxpbms+XG4gICAgICAgIDxDcnVtYlRpdGxlPntyZXBvcnQgPyByZXBvcnQudGl0bGUgOiBcIi4uLlwifTwvQ3J1bWJUaXRsZT5cbiAgICAgIDwvQ3J1bWJzPlxuICAgICAge3JlcG9ydCAmJlxuICAgICAgICA8U2xpZGUgd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cblxuICAgICAgICA8L1NsaWRlPlxuICAgICAgfVxuICAgICAge3JlcG9ydFF1ZXJ5LmVycm9yICYmIDxFcnJvckJveCBlcnJvcj17cmVwb3J0UXVlcnkuZXJyb3J9IC8+fVxuXG4gICAgPC9MYXlvdXQ+XG4gIClcblxufVxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XG5gIl19 */"
});

/***/ })

})
//# sourceMappingURL=[reportId].js.6a2face115cc95f8aeca.hot-update.js.map