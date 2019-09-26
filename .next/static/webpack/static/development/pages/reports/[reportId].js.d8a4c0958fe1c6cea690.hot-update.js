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
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Typography */ "./client/components/Typography.tsx");


var _jsxFileName = "/Users/andreasmoller/code/reports/client/Report/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var _ref =  false ? undefined : {
  name: "18o8eue-ReportPage",
  styles: "position:absolute;top:16px;left:16px;label:ReportPage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQnNCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSB9IGZyb20gXCIuLi9jb2RlZ2VuL2dyYXBocWxcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgRXJyb3JCb3ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FcnJvckJveFwiO1xuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYlRpdGxlLCBDcnVtYkxpbmsgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHsgU2xpZGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TbGlkZVwiO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5XCI7XG5cbmV4cG9ydCBjb25zdCBSZXBvcnRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCByZXBvcnRJZCA9IHJvdXRlci5xdWVyeS5yZXBvcnRJZCBhcyBzdHJpbmdcblxuICBjb25zb2xlLmxvZyh7IHJlcG9ydElkIH0pXG4gIGNvbnN0IHJlcG9ydFF1ZXJ5ID0gdXNlUmVwb3J0R2V0UXVlcnkoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWQ6IHJlcG9ydElkXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcG9ydCA9IHJlcG9ydFF1ZXJ5LmRhdGEgJiYgcmVwb3J0UXVlcnkuZGF0YS5yZXBvcnRcblxuICBjb25zb2xlLmxvZyhyZXBvcnRRdWVyeSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPENydW1icyBjc3M9e2Nzc2BcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgbGVmdDogMTZweDtcbiAgICAgIGB9PlxuICAgICAgICA8Q3J1bWJMaW5rIGhyZWY9XCIvcmVwb3J0c1wiPlJlcG9ydHM8L0NydW1iTGluaz5cbiAgICAgICAgPENydW1iVGl0bGU+e3JlcG9ydCA/IHJlcG9ydC50aXRsZSA6IFwiLi4uXCJ9PC9DcnVtYlRpdGxlPlxuICAgICAgPC9DcnVtYnM+XG4gICAgICB7cmVwb3J0ICYmXG4gICAgICAgIDxTbGlkZSB3aWR0aD17cmVwb3J0LndpZHRofSBoZWlnaHQ9e3JlcG9ydC5oZWlnaHR9PlxuICAgICAgICAgIDxUaXRsZT57cmVwb3J0LnRpdGxlfTwvVGl0bGU+XG4gICAgICAgIDwvU2xpZGU+XG4gICAgICB9XG4gICAgICB7cmVwb3J0UXVlcnkuZXJyb3IgJiYgPEVycm9yQm94IGVycm9yPXtyZXBvcnRRdWVyeS5lcnJvcn0gLz59XG5cbiAgICA8L0xheW91dD5cbiAgKVxuXG59XG5cblxuY29uc3QgTGF5b3V0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTpncmlkO1xuICBoZWlnaHQ6MTAwJTtcbiAgcGxhY2UtY29udGVudDogc3RhcnQgc3RyZXRjaDtcbmAiXX0= */"
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
  }, report ? report.title : "...")), report && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Slide__WEBPACK_IMPORTED_MODULE_8__["Slide"], {
    width: report.width,
    height: report.height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Typography__WEBPACK_IMPORTED_MODULE_9__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, report.title)), reportQuery.error && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_ErrorBox__WEBPACK_IMPORTED_MODULE_6__["ErrorBox"], {
    error: reportQuery.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
};

var Layout = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("div", {
  target: "esq99oz0",
  label: "Layout"
})( false ? undefined : {
  name: "kdqck5",
  styles: "display:grid;height:100%;place-content:start stretch;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ3lCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSB9IGZyb20gXCIuLi9jb2RlZ2VuL2dyYXBocWxcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgRXJyb3JCb3ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FcnJvckJveFwiO1xuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYlRpdGxlLCBDcnVtYkxpbmsgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHsgU2xpZGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TbGlkZVwiO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5XCI7XG5cbmV4cG9ydCBjb25zdCBSZXBvcnRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCByZXBvcnRJZCA9IHJvdXRlci5xdWVyeS5yZXBvcnRJZCBhcyBzdHJpbmdcblxuICBjb25zb2xlLmxvZyh7IHJlcG9ydElkIH0pXG4gIGNvbnN0IHJlcG9ydFF1ZXJ5ID0gdXNlUmVwb3J0R2V0UXVlcnkoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWQ6IHJlcG9ydElkXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcG9ydCA9IHJlcG9ydFF1ZXJ5LmRhdGEgJiYgcmVwb3J0UXVlcnkuZGF0YS5yZXBvcnRcblxuICBjb25zb2xlLmxvZyhyZXBvcnRRdWVyeSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPENydW1icyBjc3M9e2Nzc2BcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgbGVmdDogMTZweDtcbiAgICAgIGB9PlxuICAgICAgICA8Q3J1bWJMaW5rIGhyZWY9XCIvcmVwb3J0c1wiPlJlcG9ydHM8L0NydW1iTGluaz5cbiAgICAgICAgPENydW1iVGl0bGU+e3JlcG9ydCA/IHJlcG9ydC50aXRsZSA6IFwiLi4uXCJ9PC9DcnVtYlRpdGxlPlxuICAgICAgPC9DcnVtYnM+XG4gICAgICB7cmVwb3J0ICYmXG4gICAgICAgIDxTbGlkZSB3aWR0aD17cmVwb3J0LndpZHRofSBoZWlnaHQ9e3JlcG9ydC5oZWlnaHR9PlxuICAgICAgICAgIDxUaXRsZT57cmVwb3J0LnRpdGxlfTwvVGl0bGU+XG4gICAgICAgIDwvU2xpZGU+XG4gICAgICB9XG4gICAgICB7cmVwb3J0UXVlcnkuZXJyb3IgJiYgPEVycm9yQm94IGVycm9yPXtyZXBvcnRRdWVyeS5lcnJvcn0gLz59XG5cbiAgICA8L0xheW91dD5cbiAgKVxuXG59XG5cblxuY29uc3QgTGF5b3V0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTpncmlkO1xuICBoZWlnaHQ6MTAwJTtcbiAgcGxhY2UtY29udGVudDogc3RhcnQgc3RyZXRjaDtcbmAiXX0= */"
});

/***/ })

})
//# sourceMappingURL=[reportId].js.d8a4c0958fe1c6cea690.hot-update.js.map