webpackHotUpdate("static/development/pages/reports.js",{

/***/ "./client/ReportList/index.tsx":
/*!*************************************!*\
  !*** ./client/ReportList/index.tsx ***!
  \*************************************/
/*! exports provided: ReportListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportListPage", function() { return ReportListPage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Typography */ "./client/components/Typography.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _codegen_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../codegen/graphql */ "./client/codegen/graphql.ts");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Button */ "./client/components/Button.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Slide */ "./client/components/Slide.tsx");
/* harmony import */ var _components_Crumbs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Crumbs */ "./client/components/Crumbs.tsx");


var _jsxFileName = "/Users/andreasmoller/code/reports/client/ReportList/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var _ref =  false ? undefined : {
  name: "gr7wsp-ReportListPage",
  styles: "position:absolute;top:16px;left:16px;label:ReportListPage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0TGlzdC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJzQiIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L1JlcG9ydExpc3QvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJlcG9ydExpc3RHZXRRdWVyeSwgdXNlUmVwb3J0TGlzdENyZWF0ZVJlcG9ydE11dGF0aW9uIH0gZnJvbSBcIi4uL2NvZGVnZW4vZ3JhcGhxbFwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGVcIlxuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYkxpbmssIENydW1iVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIlxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uL3RoZW1lXCJcbmV4cG9ydCBjb25zdCBSZXBvcnRMaXN0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcmVwb3J0c1JlcXVlc3QgPSB1c2VSZXBvcnRMaXN0R2V0UXVlcnkoKTtcblxuICBjb25zdCBbY3JlYXRlUmVwb3J0LCBjcmVhdGVSZXBvcnRSZXF1ZXN0XSA9IHVzZVJlcG9ydExpc3RDcmVhdGVSZXBvcnRNdXRhdGlvbih7XG4gICAgb25Db21wbGV0ZWQ6IChyZXMpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKGAvcmVwb3J0cy8ke3Jlcy5jcmVhdGVSZXBvcnQuaWR9YClcbiAgICB9XG4gIH0pXG4gIGNvbnN0IHJlcG9ydHMgPSByZXBvcnRzUmVxdWVzdC5kYXRhICYmIHJlcG9ydHNSZXF1ZXN0LmRhdGEucmVwb3J0c1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxDcnVtYnMgY3NzPXtjc3NgXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICBgfT5cbiAgICAgICAgPENydW1iVGl0bGU+UmVwb3J0czwvQ3J1bWJUaXRsZT5cbiAgICAgIDwvQ3J1bWJzPlxuICAgICAgPENyZWF0ZVJlcG9ydEJ1dHRvbiBkaXNhYmxlZD17Y3JlYXRlUmVwb3J0UmVxdWVzdC5sb2FkaW5nfSBvbkNsaWNrPXsoKSA9PlxuICAgICAgICBjcmVhdGVSZXBvcnQoe1xuICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiVW50aXRsZWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gbmFtZT1cIkNyZWF0ZVJlcG9ydFwiPk5ldzwvQ3JlYXRlUmVwb3J0QnV0dG9uPlxuICAgICAge3JlcG9ydHNSZXF1ZXN0LmxvYWRpbmcgJiYgPFRleHQ+Li4uPC9UZXh0Pn1cbiAgICAgIHtyZXBvcnRzICYmIChcbiAgICAgICAgPExpc3Q+XG4gICAgICAgICAge3JlcG9ydHMubWFwKHJlcG9ydCA9PlxuICAgICAgICAgICAgPFJlcG9ydCBrZXk9e3JlcG9ydC5pZH0gb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gYC9yZXBvcnRzLyR7cmVwb3J0LmlkfWBcbiAgICAgICAgICAgICAgaWYgKGUubmF0aXZlRXZlbnQubWV0YUtleSB8fCBlLm5hdGl2ZUV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbihsb2NhdGlvbilcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChsb2NhdGlvbilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxTbGlkZSB3aWR0aD17cmVwb3J0LndpZHRofSBoZWlnaHQ9e3JlcG9ydC5oZWlnaHR9PlxuICAgICAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICAgICAgICA8UmVwb3J0QWN0aW9ucz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3JlcG9ydHMvJHtyZXBvcnQuaWR9YH0+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlIGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIjJyZW1cIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtyZXBvcnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L1JlcG9ydEFjdGlvbnM+XG4gICAgICAgICAgICA8L1JlcG9ydD5cbiAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L0xpc3QgPlxuICAgICAgKVxuICAgICAgfVxuICAgIDwvTGF5b3V0ID5cbiAgKVxufVxuXG5jb25zdCBDcmVhdGVSZXBvcnRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICBgXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiA2NHB4IDUlO1xuICAgICAgICBiYWNrZ3JvdW5kOiNmNWY1ZjU7XG4gICAgICBgXG5cbmNvbnN0IExpc3QgPSBzdHlsZWQudWxgXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTUwcHgsIDQwMHB4KSk7XG4gICAgICAgIHBsYWNlLWNvbnRlbnQ6IHN0YXJ0IGNlbnRlcjtcbiAgICAgICAgZ3JpZC1nYXA6IDUlO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYFxuXG5jb25zdCBSZXBvcnQgPSBzdHlsZWQubGlgXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICBgXG5cbmNvbnN0IFJlcG9ydEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgYm90dG9tOjA7XG4gIGxlZnQ6MDtcbiAgZGlzcGxheTpibG9jaztcbiAgd2lkdGg6MTAwJTtcbiAgbWFyZ2luOjA7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7ICovXG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggYmxhY2s7XG4gICAgICBcbmAiXX0= */"
};

var ReportListPage = function ReportListPage() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  var reportsRequest = Object(_codegen_graphql__WEBPACK_IMPORTED_MODULE_6__["useReportListGetQuery"])();

  var _useReportListCreateR = Object(_codegen_graphql__WEBPACK_IMPORTED_MODULE_6__["useReportListCreateReportMutation"])({
    onCompleted: function onCompleted(res) {
      router.push("/reports/".concat(res.createReport.id));
    }
  }),
      _useReportListCreateR2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReportListCreateR, 2),
      createReport = _useReportListCreateR2[0],
      createReportRequest = _useReportListCreateR2[1];

  var reports = reportsRequest.data && reportsRequest.data.reports;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Layout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Crumbs__WEBPACK_IMPORTED_MODULE_10__["Crumbs"], {
    css:
    /*#__PURE__*/
    _ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Crumbs__WEBPACK_IMPORTED_MODULE_10__["CrumbTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Reports")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(CreateReportButton, {
    disabled: createReportRequest.loading,
    onClick: function onClick() {
      return createReport({
        variables: {
          title: "Untitled"
        }
      });
    },
    name: "CreateReport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "New"), reportsRequest.loading && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Typography__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "..."), reports && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, reports.map(function (report) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Report, {
      key: report.id,
      onClick: function onClick(e) {
        var location = "/reports/".concat(report.id);

        if (e.nativeEvent.metaKey || e.nativeEvent.ctrlKey) {
          window.open(location);
        } else {
          router.push(location);
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Slide__WEBPACK_IMPORTED_MODULE_9__["Slide"], {
      width: report.width,
      height: report.height,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ReportActions, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/reports/".concat(report.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Typography__WEBPACK_IMPORTED_MODULE_4__["Title"], {
      color: "white",
      fontSize: "2rem",
      fontWeight: "bold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, report.title)))));
  })));
};

var CreateReportButton =
/*#__PURE__*/
Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
  target: "etk64p90",
  label: "CreateReportButton"
})( false ? undefined : {
  name: "10pt21e",
  styles: "position:absolute;right:16px;top:16px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0TGlzdC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0V5QyIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L1JlcG9ydExpc3QvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJlcG9ydExpc3RHZXRRdWVyeSwgdXNlUmVwb3J0TGlzdENyZWF0ZVJlcG9ydE11dGF0aW9uIH0gZnJvbSBcIi4uL2NvZGVnZW4vZ3JhcGhxbFwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGVcIlxuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYkxpbmssIENydW1iVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIlxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uL3RoZW1lXCJcbmV4cG9ydCBjb25zdCBSZXBvcnRMaXN0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcmVwb3J0c1JlcXVlc3QgPSB1c2VSZXBvcnRMaXN0R2V0UXVlcnkoKTtcblxuICBjb25zdCBbY3JlYXRlUmVwb3J0LCBjcmVhdGVSZXBvcnRSZXF1ZXN0XSA9IHVzZVJlcG9ydExpc3RDcmVhdGVSZXBvcnRNdXRhdGlvbih7XG4gICAgb25Db21wbGV0ZWQ6IChyZXMpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKGAvcmVwb3J0cy8ke3Jlcy5jcmVhdGVSZXBvcnQuaWR9YClcbiAgICB9XG4gIH0pXG4gIGNvbnN0IHJlcG9ydHMgPSByZXBvcnRzUmVxdWVzdC5kYXRhICYmIHJlcG9ydHNSZXF1ZXN0LmRhdGEucmVwb3J0c1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxDcnVtYnMgY3NzPXtjc3NgXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICBgfT5cbiAgICAgICAgPENydW1iVGl0bGU+UmVwb3J0czwvQ3J1bWJUaXRsZT5cbiAgICAgIDwvQ3J1bWJzPlxuICAgICAgPENyZWF0ZVJlcG9ydEJ1dHRvbiBkaXNhYmxlZD17Y3JlYXRlUmVwb3J0UmVxdWVzdC5sb2FkaW5nfSBvbkNsaWNrPXsoKSA9PlxuICAgICAgICBjcmVhdGVSZXBvcnQoe1xuICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiVW50aXRsZWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gbmFtZT1cIkNyZWF0ZVJlcG9ydFwiPk5ldzwvQ3JlYXRlUmVwb3J0QnV0dG9uPlxuICAgICAge3JlcG9ydHNSZXF1ZXN0LmxvYWRpbmcgJiYgPFRleHQ+Li4uPC9UZXh0Pn1cbiAgICAgIHtyZXBvcnRzICYmIChcbiAgICAgICAgPExpc3Q+XG4gICAgICAgICAge3JlcG9ydHMubWFwKHJlcG9ydCA9PlxuICAgICAgICAgICAgPFJlcG9ydCBrZXk9e3JlcG9ydC5pZH0gb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gYC9yZXBvcnRzLyR7cmVwb3J0LmlkfWBcbiAgICAgICAgICAgICAgaWYgKGUubmF0aXZlRXZlbnQubWV0YUtleSB8fCBlLm5hdGl2ZUV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbihsb2NhdGlvbilcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChsb2NhdGlvbilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxTbGlkZSB3aWR0aD17cmVwb3J0LndpZHRofSBoZWlnaHQ9e3JlcG9ydC5oZWlnaHR9PlxuICAgICAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICAgICAgICA8UmVwb3J0QWN0aW9ucz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3JlcG9ydHMvJHtyZXBvcnQuaWR9YH0+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlIGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIjJyZW1cIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtyZXBvcnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L1JlcG9ydEFjdGlvbnM+XG4gICAgICAgICAgICA8L1JlcG9ydD5cbiAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L0xpc3QgPlxuICAgICAgKVxuICAgICAgfVxuICAgIDwvTGF5b3V0ID5cbiAgKVxufVxuXG5jb25zdCBDcmVhdGVSZXBvcnRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICBgXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiA2NHB4IDUlO1xuICAgICAgICBiYWNrZ3JvdW5kOiNmNWY1ZjU7XG4gICAgICBgXG5cbmNvbnN0IExpc3QgPSBzdHlsZWQudWxgXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTUwcHgsIDQwMHB4KSk7XG4gICAgICAgIHBsYWNlLWNvbnRlbnQ6IHN0YXJ0IGNlbnRlcjtcbiAgICAgICAgZ3JpZC1nYXA6IDUlO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYFxuXG5jb25zdCBSZXBvcnQgPSBzdHlsZWQubGlgXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICBgXG5cbmNvbnN0IFJlcG9ydEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgYm90dG9tOjA7XG4gIGxlZnQ6MDtcbiAgZGlzcGxheTpibG9jaztcbiAgd2lkdGg6MTAwJTtcbiAgbWFyZ2luOjA7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7ICovXG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggYmxhY2s7XG4gICAgICBcbmAiXX0= */"
});

var Layout = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("div", {
  target: "etk64p91",
  label: "Layout"
})( false ? undefined : {
  name: "1mphghz",
  styles: "display:grid;height:100%;padding:64px 5%;background:#f5f5f5;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0TGlzdC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEV5QiIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L1JlcG9ydExpc3QvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJlcG9ydExpc3RHZXRRdWVyeSwgdXNlUmVwb3J0TGlzdENyZWF0ZVJlcG9ydE11dGF0aW9uIH0gZnJvbSBcIi4uL2NvZGVnZW4vZ3JhcGhxbFwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGVcIlxuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYkxpbmssIENydW1iVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIlxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uL3RoZW1lXCJcbmV4cG9ydCBjb25zdCBSZXBvcnRMaXN0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcmVwb3J0c1JlcXVlc3QgPSB1c2VSZXBvcnRMaXN0R2V0UXVlcnkoKTtcblxuICBjb25zdCBbY3JlYXRlUmVwb3J0LCBjcmVhdGVSZXBvcnRSZXF1ZXN0XSA9IHVzZVJlcG9ydExpc3RDcmVhdGVSZXBvcnRNdXRhdGlvbih7XG4gICAgb25Db21wbGV0ZWQ6IChyZXMpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKGAvcmVwb3J0cy8ke3Jlcy5jcmVhdGVSZXBvcnQuaWR9YClcbiAgICB9XG4gIH0pXG4gIGNvbnN0IHJlcG9ydHMgPSByZXBvcnRzUmVxdWVzdC5kYXRhICYmIHJlcG9ydHNSZXF1ZXN0LmRhdGEucmVwb3J0c1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxDcnVtYnMgY3NzPXtjc3NgXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICBgfT5cbiAgICAgICAgPENydW1iVGl0bGU+UmVwb3J0czwvQ3J1bWJUaXRsZT5cbiAgICAgIDwvQ3J1bWJzPlxuICAgICAgPENyZWF0ZVJlcG9ydEJ1dHRvbiBkaXNhYmxlZD17Y3JlYXRlUmVwb3J0UmVxdWVzdC5sb2FkaW5nfSBvbkNsaWNrPXsoKSA9PlxuICAgICAgICBjcmVhdGVSZXBvcnQoe1xuICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiVW50aXRsZWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gbmFtZT1cIkNyZWF0ZVJlcG9ydFwiPk5ldzwvQ3JlYXRlUmVwb3J0QnV0dG9uPlxuICAgICAge3JlcG9ydHNSZXF1ZXN0LmxvYWRpbmcgJiYgPFRleHQ+Li4uPC9UZXh0Pn1cbiAgICAgIHtyZXBvcnRzICYmIChcbiAgICAgICAgPExpc3Q+XG4gICAgICAgICAge3JlcG9ydHMubWFwKHJlcG9ydCA9PlxuICAgICAgICAgICAgPFJlcG9ydCBrZXk9e3JlcG9ydC5pZH0gb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gYC9yZXBvcnRzLyR7cmVwb3J0LmlkfWBcbiAgICAgICAgICAgICAgaWYgKGUubmF0aXZlRXZlbnQubWV0YUtleSB8fCBlLm5hdGl2ZUV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbihsb2NhdGlvbilcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChsb2NhdGlvbilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxTbGlkZSB3aWR0aD17cmVwb3J0LndpZHRofSBoZWlnaHQ9e3JlcG9ydC5oZWlnaHR9PlxuICAgICAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICAgICAgICA8UmVwb3J0QWN0aW9ucz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3JlcG9ydHMvJHtyZXBvcnQuaWR9YH0+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlIGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIjJyZW1cIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtyZXBvcnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L1JlcG9ydEFjdGlvbnM+XG4gICAgICAgICAgICA8L1JlcG9ydD5cbiAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L0xpc3QgPlxuICAgICAgKVxuICAgICAgfVxuICAgIDwvTGF5b3V0ID5cbiAgKVxufVxuXG5jb25zdCBDcmVhdGVSZXBvcnRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICBgXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiA2NHB4IDUlO1xuICAgICAgICBiYWNrZ3JvdW5kOiNmNWY1ZjU7XG4gICAgICBgXG5cbmNvbnN0IExpc3QgPSBzdHlsZWQudWxgXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTUwcHgsIDQwMHB4KSk7XG4gICAgICAgIHBsYWNlLWNvbnRlbnQ6IHN0YXJ0IGNlbnRlcjtcbiAgICAgICAgZ3JpZC1nYXA6IDUlO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYFxuXG5jb25zdCBSZXBvcnQgPSBzdHlsZWQubGlgXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICBgXG5cbmNvbnN0IFJlcG9ydEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgYm90dG9tOjA7XG4gIGxlZnQ6MDtcbiAgZGlzcGxheTpibG9jaztcbiAgd2lkdGg6MTAwJTtcbiAgbWFyZ2luOjA7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7ICovXG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggYmxhY2s7XG4gICAgICBcbmAiXX0= */"
});

var List = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("ul", {
  target: "etk64p92",
  label: "List"
})( false ? undefined : {
  name: "171vtem",
  styles: "display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,400px));place-content:start center;grid-gap:5%;padding:0;width:100%;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0TGlzdC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUZzQiIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L1JlcG9ydExpc3QvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJlcG9ydExpc3RHZXRRdWVyeSwgdXNlUmVwb3J0TGlzdENyZWF0ZVJlcG9ydE11dGF0aW9uIH0gZnJvbSBcIi4uL2NvZGVnZW4vZ3JhcGhxbFwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGVcIlxuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYkxpbmssIENydW1iVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIlxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uL3RoZW1lXCJcbmV4cG9ydCBjb25zdCBSZXBvcnRMaXN0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcmVwb3J0c1JlcXVlc3QgPSB1c2VSZXBvcnRMaXN0R2V0UXVlcnkoKTtcblxuICBjb25zdCBbY3JlYXRlUmVwb3J0LCBjcmVhdGVSZXBvcnRSZXF1ZXN0XSA9IHVzZVJlcG9ydExpc3RDcmVhdGVSZXBvcnRNdXRhdGlvbih7XG4gICAgb25Db21wbGV0ZWQ6IChyZXMpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKGAvcmVwb3J0cy8ke3Jlcy5jcmVhdGVSZXBvcnQuaWR9YClcbiAgICB9XG4gIH0pXG4gIGNvbnN0IHJlcG9ydHMgPSByZXBvcnRzUmVxdWVzdC5kYXRhICYmIHJlcG9ydHNSZXF1ZXN0LmRhdGEucmVwb3J0c1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxDcnVtYnMgY3NzPXtjc3NgXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICBgfT5cbiAgICAgICAgPENydW1iVGl0bGU+UmVwb3J0czwvQ3J1bWJUaXRsZT5cbiAgICAgIDwvQ3J1bWJzPlxuICAgICAgPENyZWF0ZVJlcG9ydEJ1dHRvbiBkaXNhYmxlZD17Y3JlYXRlUmVwb3J0UmVxdWVzdC5sb2FkaW5nfSBvbkNsaWNrPXsoKSA9PlxuICAgICAgICBjcmVhdGVSZXBvcnQoe1xuICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiVW50aXRsZWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gbmFtZT1cIkNyZWF0ZVJlcG9ydFwiPk5ldzwvQ3JlYXRlUmVwb3J0QnV0dG9uPlxuICAgICAge3JlcG9ydHNSZXF1ZXN0LmxvYWRpbmcgJiYgPFRleHQ+Li4uPC9UZXh0Pn1cbiAgICAgIHtyZXBvcnRzICYmIChcbiAgICAgICAgPExpc3Q+XG4gICAgICAgICAge3JlcG9ydHMubWFwKHJlcG9ydCA9PlxuICAgICAgICAgICAgPFJlcG9ydCBrZXk9e3JlcG9ydC5pZH0gb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gYC9yZXBvcnRzLyR7cmVwb3J0LmlkfWBcbiAgICAgICAgICAgICAgaWYgKGUubmF0aXZlRXZlbnQubWV0YUtleSB8fCBlLm5hdGl2ZUV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbihsb2NhdGlvbilcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChsb2NhdGlvbilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxTbGlkZSB3aWR0aD17cmVwb3J0LndpZHRofSBoZWlnaHQ9e3JlcG9ydC5oZWlnaHR9PlxuICAgICAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICAgICAgICA8UmVwb3J0QWN0aW9ucz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3JlcG9ydHMvJHtyZXBvcnQuaWR9YH0+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlIGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIjJyZW1cIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtyZXBvcnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L1JlcG9ydEFjdGlvbnM+XG4gICAgICAgICAgICA8L1JlcG9ydD5cbiAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L0xpc3QgPlxuICAgICAgKVxuICAgICAgfVxuICAgIDwvTGF5b3V0ID5cbiAgKVxufVxuXG5jb25zdCBDcmVhdGVSZXBvcnRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICBgXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiA2NHB4IDUlO1xuICAgICAgICBiYWNrZ3JvdW5kOiNmNWY1ZjU7XG4gICAgICBgXG5cbmNvbnN0IExpc3QgPSBzdHlsZWQudWxgXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTUwcHgsIDQwMHB4KSk7XG4gICAgICAgIHBsYWNlLWNvbnRlbnQ6IHN0YXJ0IGNlbnRlcjtcbiAgICAgICAgZ3JpZC1nYXA6IDUlO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYFxuXG5jb25zdCBSZXBvcnQgPSBzdHlsZWQubGlgXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICBgXG5cbmNvbnN0IFJlcG9ydEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgYm90dG9tOjA7XG4gIGxlZnQ6MDtcbiAgZGlzcGxheTpibG9jaztcbiAgd2lkdGg6MTAwJTtcbiAgbWFyZ2luOjA7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7ICovXG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggYmxhY2s7XG4gICAgICBcbmAiXX0= */"
});

var Report = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("li", {
  target: "etk64p93",
  label: "Report"
})( false ? undefined : {
  name: "9e6kxj",
  styles: "list-style-type:none;position:relative;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0TGlzdC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEZ3QiIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L1JlcG9ydExpc3QvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJlcG9ydExpc3RHZXRRdWVyeSwgdXNlUmVwb3J0TGlzdENyZWF0ZVJlcG9ydE11dGF0aW9uIH0gZnJvbSBcIi4uL2NvZGVnZW4vZ3JhcGhxbFwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGVcIlxuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYkxpbmssIENydW1iVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIlxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uL3RoZW1lXCJcbmV4cG9ydCBjb25zdCBSZXBvcnRMaXN0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcmVwb3J0c1JlcXVlc3QgPSB1c2VSZXBvcnRMaXN0R2V0UXVlcnkoKTtcblxuICBjb25zdCBbY3JlYXRlUmVwb3J0LCBjcmVhdGVSZXBvcnRSZXF1ZXN0XSA9IHVzZVJlcG9ydExpc3RDcmVhdGVSZXBvcnRNdXRhdGlvbih7XG4gICAgb25Db21wbGV0ZWQ6IChyZXMpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKGAvcmVwb3J0cy8ke3Jlcy5jcmVhdGVSZXBvcnQuaWR9YClcbiAgICB9XG4gIH0pXG4gIGNvbnN0IHJlcG9ydHMgPSByZXBvcnRzUmVxdWVzdC5kYXRhICYmIHJlcG9ydHNSZXF1ZXN0LmRhdGEucmVwb3J0c1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxDcnVtYnMgY3NzPXtjc3NgXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICBgfT5cbiAgICAgICAgPENydW1iVGl0bGU+UmVwb3J0czwvQ3J1bWJUaXRsZT5cbiAgICAgIDwvQ3J1bWJzPlxuICAgICAgPENyZWF0ZVJlcG9ydEJ1dHRvbiBkaXNhYmxlZD17Y3JlYXRlUmVwb3J0UmVxdWVzdC5sb2FkaW5nfSBvbkNsaWNrPXsoKSA9PlxuICAgICAgICBjcmVhdGVSZXBvcnQoe1xuICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiVW50aXRsZWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gbmFtZT1cIkNyZWF0ZVJlcG9ydFwiPk5ldzwvQ3JlYXRlUmVwb3J0QnV0dG9uPlxuICAgICAge3JlcG9ydHNSZXF1ZXN0LmxvYWRpbmcgJiYgPFRleHQ+Li4uPC9UZXh0Pn1cbiAgICAgIHtyZXBvcnRzICYmIChcbiAgICAgICAgPExpc3Q+XG4gICAgICAgICAge3JlcG9ydHMubWFwKHJlcG9ydCA9PlxuICAgICAgICAgICAgPFJlcG9ydCBrZXk9e3JlcG9ydC5pZH0gb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gYC9yZXBvcnRzLyR7cmVwb3J0LmlkfWBcbiAgICAgICAgICAgICAgaWYgKGUubmF0aXZlRXZlbnQubWV0YUtleSB8fCBlLm5hdGl2ZUV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbihsb2NhdGlvbilcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChsb2NhdGlvbilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxTbGlkZSB3aWR0aD17cmVwb3J0LndpZHRofSBoZWlnaHQ9e3JlcG9ydC5oZWlnaHR9PlxuICAgICAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICAgICAgICA8UmVwb3J0QWN0aW9ucz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3JlcG9ydHMvJHtyZXBvcnQuaWR9YH0+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlIGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIjJyZW1cIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtyZXBvcnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L1JlcG9ydEFjdGlvbnM+XG4gICAgICAgICAgICA8L1JlcG9ydD5cbiAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L0xpc3QgPlxuICAgICAgKVxuICAgICAgfVxuICAgIDwvTGF5b3V0ID5cbiAgKVxufVxuXG5jb25zdCBDcmVhdGVSZXBvcnRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICBgXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiA2NHB4IDUlO1xuICAgICAgICBiYWNrZ3JvdW5kOiNmNWY1ZjU7XG4gICAgICBgXG5cbmNvbnN0IExpc3QgPSBzdHlsZWQudWxgXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTUwcHgsIDQwMHB4KSk7XG4gICAgICAgIHBsYWNlLWNvbnRlbnQ6IHN0YXJ0IGNlbnRlcjtcbiAgICAgICAgZ3JpZC1nYXA6IDUlO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYFxuXG5jb25zdCBSZXBvcnQgPSBzdHlsZWQubGlgXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICBgXG5cbmNvbnN0IFJlcG9ydEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgYm90dG9tOjA7XG4gIGxlZnQ6MDtcbiAgZGlzcGxheTpibG9jaztcbiAgd2lkdGg6MTAwJTtcbiAgbWFyZ2luOjA7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7ICovXG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggYmxhY2s7XG4gICAgICBcbmAiXX0= */"
});

var ReportActions = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("div", {
  target: "etk64p94",
  label: "ReportActions"
})( false ? undefined : {
  name: "pfi18n",
  styles: "position:absolute;bottom:0;left:0;display:block;width:100%;margin:0;padding:8px 16px;box-sizing:border-box;text-shadow:0 1px 2px black;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0TGlzdC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUdnQyIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L1JlcG9ydExpc3QvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJlcG9ydExpc3RHZXRRdWVyeSwgdXNlUmVwb3J0TGlzdENyZWF0ZVJlcG9ydE11dGF0aW9uIH0gZnJvbSBcIi4uL2NvZGVnZW4vZ3JhcGhxbFwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGVcIlxuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYkxpbmssIENydW1iVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIlxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uL3RoZW1lXCJcbmV4cG9ydCBjb25zdCBSZXBvcnRMaXN0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcmVwb3J0c1JlcXVlc3QgPSB1c2VSZXBvcnRMaXN0R2V0UXVlcnkoKTtcblxuICBjb25zdCBbY3JlYXRlUmVwb3J0LCBjcmVhdGVSZXBvcnRSZXF1ZXN0XSA9IHVzZVJlcG9ydExpc3RDcmVhdGVSZXBvcnRNdXRhdGlvbih7XG4gICAgb25Db21wbGV0ZWQ6IChyZXMpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKGAvcmVwb3J0cy8ke3Jlcy5jcmVhdGVSZXBvcnQuaWR9YClcbiAgICB9XG4gIH0pXG4gIGNvbnN0IHJlcG9ydHMgPSByZXBvcnRzUmVxdWVzdC5kYXRhICYmIHJlcG9ydHNSZXF1ZXN0LmRhdGEucmVwb3J0c1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxDcnVtYnMgY3NzPXtjc3NgXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICBgfT5cbiAgICAgICAgPENydW1iVGl0bGU+UmVwb3J0czwvQ3J1bWJUaXRsZT5cbiAgICAgIDwvQ3J1bWJzPlxuICAgICAgPENyZWF0ZVJlcG9ydEJ1dHRvbiBkaXNhYmxlZD17Y3JlYXRlUmVwb3J0UmVxdWVzdC5sb2FkaW5nfSBvbkNsaWNrPXsoKSA9PlxuICAgICAgICBjcmVhdGVSZXBvcnQoe1xuICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgdGl0bGU6IFwiVW50aXRsZWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gbmFtZT1cIkNyZWF0ZVJlcG9ydFwiPk5ldzwvQ3JlYXRlUmVwb3J0QnV0dG9uPlxuICAgICAge3JlcG9ydHNSZXF1ZXN0LmxvYWRpbmcgJiYgPFRleHQ+Li4uPC9UZXh0Pn1cbiAgICAgIHtyZXBvcnRzICYmIChcbiAgICAgICAgPExpc3Q+XG4gICAgICAgICAge3JlcG9ydHMubWFwKHJlcG9ydCA9PlxuICAgICAgICAgICAgPFJlcG9ydCBrZXk9e3JlcG9ydC5pZH0gb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gYC9yZXBvcnRzLyR7cmVwb3J0LmlkfWBcbiAgICAgICAgICAgICAgaWYgKGUubmF0aXZlRXZlbnQubWV0YUtleSB8fCBlLm5hdGl2ZUV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbihsb2NhdGlvbilcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChsb2NhdGlvbilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIDxTbGlkZSB3aWR0aD17cmVwb3J0LndpZHRofSBoZWlnaHQ9e3JlcG9ydC5oZWlnaHR9PlxuICAgICAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICAgICAgICA8UmVwb3J0QWN0aW9ucz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3JlcG9ydHMvJHtyZXBvcnQuaWR9YH0+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlIGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIjJyZW1cIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtyZXBvcnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L1JlcG9ydEFjdGlvbnM+XG4gICAgICAgICAgICA8L1JlcG9ydD5cbiAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L0xpc3QgPlxuICAgICAgKVxuICAgICAgfVxuICAgIDwvTGF5b3V0ID5cbiAgKVxufVxuXG5jb25zdCBDcmVhdGVSZXBvcnRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICBgXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiA2NHB4IDUlO1xuICAgICAgICBiYWNrZ3JvdW5kOiNmNWY1ZjU7XG4gICAgICBgXG5cbmNvbnN0IExpc3QgPSBzdHlsZWQudWxgXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTUwcHgsIDQwMHB4KSk7XG4gICAgICAgIHBsYWNlLWNvbnRlbnQ6IHN0YXJ0IGNlbnRlcjtcbiAgICAgICAgZ3JpZC1nYXA6IDUlO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYFxuXG5jb25zdCBSZXBvcnQgPSBzdHlsZWQubGlgXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICBgXG5cbmNvbnN0IFJlcG9ydEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgYm90dG9tOjA7XG4gIGxlZnQ6MDtcbiAgZGlzcGxheTpibG9jaztcbiAgd2lkdGg6MTAwJTtcbiAgbWFyZ2luOjA7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7ICovXG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggYmxhY2s7XG4gICAgICBcbmAiXX0= */"
});

/***/ })

})
//# sourceMappingURL=reports.js.c8878c26f74217b2a38e.hot-update.js.map