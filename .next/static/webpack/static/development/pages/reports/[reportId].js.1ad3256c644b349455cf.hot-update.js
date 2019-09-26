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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQnNCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSB9IGZyb20gXCIuLi9jb2RlZ2VuL2dyYXBocWxcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgRXJyb3JCb3ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FcnJvckJveFwiO1xuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYlRpdGxlLCBDcnVtYkxpbmsgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHsgU2xpZGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TbGlkZVwiO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5XCI7XG5cbmV4cG9ydCBjb25zdCBSZXBvcnRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCByZXBvcnRJZCA9IHJvdXRlci5xdWVyeS5yZXBvcnRJZCBhcyBzdHJpbmdcblxuICBjb25zb2xlLmxvZyh7IHJlcG9ydElkIH0pXG4gIGNvbnN0IHJlcG9ydFF1ZXJ5ID0gdXNlUmVwb3J0R2V0UXVlcnkoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWQ6IHJlcG9ydElkXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcG9ydCA9IHJlcG9ydFF1ZXJ5LmRhdGEgJiYgcmVwb3J0UXVlcnkuZGF0YS5yZXBvcnRcblxuICBjb25zb2xlLmxvZyhyZXBvcnRRdWVyeSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPENydW1icyBjc3M9e2Nzc2BcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgbGVmdDogMTZweDtcbiAgICAgIGB9PlxuICAgICAgICA8Q3J1bWJMaW5rIGhyZWY9XCIvcmVwb3J0c1wiPlJlcG9ydHM8L0NydW1iTGluaz5cbiAgICAgICAgPENydW1iVGl0bGU+e3JlcG9ydCA/IHJlcG9ydC50aXRsZSA6IFwiLi4uXCJ9PC9DcnVtYlRpdGxlPlxuICAgICAgPC9DcnVtYnM+XG4gICAgICA8VG9vbGJhciAvPlxuICAgICAge3JlcG9ydCAmJlxuICAgICAgICA8U2xpZGUgd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cbiAgICAgICAgPC9TbGlkZT5cbiAgICAgIH1cblxuICAgICAge3JlcG9ydFF1ZXJ5LmVycm9yICYmIDxFcnJvckJveCBlcnJvcj17cmVwb3J0UXVlcnkuZXJyb3J9IC8+fVxuXG4gICAgPC9MYXlvdXQ+XG4gIClcblxufVxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIHBhZGRpbmc6IDY0cHggNSU7XG4gIGdyaWQtZ2FwOiAzMnB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICBwbGFjZS1jb250ZW50OiBzdGFydCBzdHJldGNoO1xuYFxuXG5jb25zdCBUb29sYmFyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OjYwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG5gIl19 */"
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
      lineNumber: 26
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Crumbs__WEBPACK_IMPORTED_MODULE_7__["Crumbs"], {
    css: _ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Crumbs__WEBPACK_IMPORTED_MODULE_7__["CrumbLink"], {
    href: "/reports",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Reports"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Crumbs__WEBPACK_IMPORTED_MODULE_7__["CrumbTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, report ? report.title : "...")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Toolbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), report && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Slide__WEBPACK_IMPORTED_MODULE_8__["Slide"], {
    width: report.width,
    height: report.height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), reportQuery.error && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_ErrorBox__WEBPACK_IMPORTED_MODULE_6__["ErrorBox"], {
    error: reportQuery.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }));
};

var Layout = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("div", {
  target: "esq99oz0",
  label: "Layout"
})( false ? undefined : {
  name: "1cb5cbx",
  styles: "display:grid;height:100%;padding:64px 5%;grid-gap:32px;grid-template-rows:auto 1fr;place-content:start stretch;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRHlCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSB9IGZyb20gXCIuLi9jb2RlZ2VuL2dyYXBocWxcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgRXJyb3JCb3ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FcnJvckJveFwiO1xuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYlRpdGxlLCBDcnVtYkxpbmsgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHsgU2xpZGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TbGlkZVwiO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5XCI7XG5cbmV4cG9ydCBjb25zdCBSZXBvcnRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCByZXBvcnRJZCA9IHJvdXRlci5xdWVyeS5yZXBvcnRJZCBhcyBzdHJpbmdcblxuICBjb25zb2xlLmxvZyh7IHJlcG9ydElkIH0pXG4gIGNvbnN0IHJlcG9ydFF1ZXJ5ID0gdXNlUmVwb3J0R2V0UXVlcnkoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWQ6IHJlcG9ydElkXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcG9ydCA9IHJlcG9ydFF1ZXJ5LmRhdGEgJiYgcmVwb3J0UXVlcnkuZGF0YS5yZXBvcnRcblxuICBjb25zb2xlLmxvZyhyZXBvcnRRdWVyeSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPENydW1icyBjc3M9e2Nzc2BcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgbGVmdDogMTZweDtcbiAgICAgIGB9PlxuICAgICAgICA8Q3J1bWJMaW5rIGhyZWY9XCIvcmVwb3J0c1wiPlJlcG9ydHM8L0NydW1iTGluaz5cbiAgICAgICAgPENydW1iVGl0bGU+e3JlcG9ydCA/IHJlcG9ydC50aXRsZSA6IFwiLi4uXCJ9PC9DcnVtYlRpdGxlPlxuICAgICAgPC9DcnVtYnM+XG4gICAgICA8VG9vbGJhciAvPlxuICAgICAge3JlcG9ydCAmJlxuICAgICAgICA8U2xpZGUgd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cbiAgICAgICAgPC9TbGlkZT5cbiAgICAgIH1cblxuICAgICAge3JlcG9ydFF1ZXJ5LmVycm9yICYmIDxFcnJvckJveCBlcnJvcj17cmVwb3J0UXVlcnkuZXJyb3J9IC8+fVxuXG4gICAgPC9MYXlvdXQ+XG4gIClcblxufVxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIHBhZGRpbmc6IDY0cHggNSU7XG4gIGdyaWQtZ2FwOiAzMnB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICBwbGFjZS1jb250ZW50OiBzdGFydCBzdHJldGNoO1xuYFxuXG5jb25zdCBUb29sYmFyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OjYwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG5gIl19 */"
});

var Toolbar = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("div", {
  target: "esq99oz1",
  label: "Toolbar"
})( false ? undefined : {
  name: "s6r3iv",
  styles: "height:60px;box-shadow:0 1px 2px rgba(0,0,0,0.25);border-radius:3px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RDBCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSB9IGZyb20gXCIuLi9jb2RlZ2VuL2dyYXBocWxcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgRXJyb3JCb3ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FcnJvckJveFwiO1xuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYlRpdGxlLCBDcnVtYkxpbmsgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHsgU2xpZGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TbGlkZVwiO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5XCI7XG5cbmV4cG9ydCBjb25zdCBSZXBvcnRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCByZXBvcnRJZCA9IHJvdXRlci5xdWVyeS5yZXBvcnRJZCBhcyBzdHJpbmdcblxuICBjb25zb2xlLmxvZyh7IHJlcG9ydElkIH0pXG4gIGNvbnN0IHJlcG9ydFF1ZXJ5ID0gdXNlUmVwb3J0R2V0UXVlcnkoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWQ6IHJlcG9ydElkXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcG9ydCA9IHJlcG9ydFF1ZXJ5LmRhdGEgJiYgcmVwb3J0UXVlcnkuZGF0YS5yZXBvcnRcblxuICBjb25zb2xlLmxvZyhyZXBvcnRRdWVyeSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPENydW1icyBjc3M9e2Nzc2BcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgbGVmdDogMTZweDtcbiAgICAgIGB9PlxuICAgICAgICA8Q3J1bWJMaW5rIGhyZWY9XCIvcmVwb3J0c1wiPlJlcG9ydHM8L0NydW1iTGluaz5cbiAgICAgICAgPENydW1iVGl0bGU+e3JlcG9ydCA/IHJlcG9ydC50aXRsZSA6IFwiLi4uXCJ9PC9DcnVtYlRpdGxlPlxuICAgICAgPC9DcnVtYnM+XG4gICAgICA8VG9vbGJhciAvPlxuICAgICAge3JlcG9ydCAmJlxuICAgICAgICA8U2xpZGUgd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cbiAgICAgICAgPC9TbGlkZT5cbiAgICAgIH1cblxuICAgICAge3JlcG9ydFF1ZXJ5LmVycm9yICYmIDxFcnJvckJveCBlcnJvcj17cmVwb3J0UXVlcnkuZXJyb3J9IC8+fVxuXG4gICAgPC9MYXlvdXQ+XG4gIClcblxufVxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIHBhZGRpbmc6IDY0cHggNSU7XG4gIGdyaWQtZ2FwOiAzMnB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICBwbGFjZS1jb250ZW50OiBzdGFydCBzdHJldGNoO1xuYFxuXG5jb25zdCBUb29sYmFyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OjYwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG5gIl19 */"
});

/***/ })

})
//# sourceMappingURL=[reportId].js.1ad3256c644b349455cf.hot-update.js.map