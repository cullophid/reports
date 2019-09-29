module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/Home/index.tsx":
/*!*******************************!*\
  !*** ./client/Home/index.tsx ***!
  \*******************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Typography */ "./client/components/Typography.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _codegen_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../codegen/graphql */ "./client/codegen/graphql.ts");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Button */ "./client/components/Button.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Slide */ "./client/components/Slide.tsx");
/* harmony import */ var _components_Crumbs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Crumbs */ "./client/components/Crumbs.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Header */ "./client/components/Header.tsx");

var _jsxFileName = "/Users/andreasmoller/code/reports/client/Home/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const HomePage = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const reportsRequest = Object(_codegen_graphql__WEBPACK_IMPORTED_MODULE_5__["useReportListGetQuery"])();
  const [createReport, createReportRequest] = Object(_codegen_graphql__WEBPACK_IMPORTED_MODULE_5__["useReportListCreateReportMutation"])({
    onCompleted: res => {
      router.push(`/reports/${res.createReport.id}`);
    }
  });
  const reports = reportsRequest.data && reportsRequest.data.reports;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Layout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_Header__WEBPACK_IMPORTED_MODULE_10__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_Crumbs__WEBPACK_IMPORTED_MODULE_9__["Crumbs"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_Crumbs__WEBPACK_IMPORTED_MODULE_9__["CrumbLink"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Home"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_Crumbs__WEBPACK_IMPORTED_MODULE_9__["CrumbTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Reports")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(CreateReportButton, {
    disabled: createReportRequest.loading,
    onClick: () => createReport({
      variables: {
        title: "Untitled"
      }
    }),
    name: "CreateReport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "New")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, reportsRequest.loading && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "..."), reports && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, reports.map(report => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Report, {
    key: report.id,
    onClick: e => {
      const location = `/reports/${report.id}`;

      if (e.nativeEvent.metaKey || e.nativeEvent.ctrlKey) {
        window.open(location);
      } else {
        router.push(location);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_Slide__WEBPACK_IMPORTED_MODULE_8__["Slide"], {
    width: report.width,
    height: report.height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(ReportActions, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: `/reports/${report.id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    color: "white",
    fontWeight: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, report.title)))))))));
};

const CreateReportButton =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(_components_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
  target: "e107jnen0",
  label: "CreateReportButton"
})( false ? undefined : {
  name: "v1pv54",
  styles: "justify-self:end;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvSG9tZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0V5QyIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L0hvbWUvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJlcG9ydExpc3RHZXRRdWVyeSwgdXNlUmVwb3J0TGlzdENyZWF0ZVJlcG9ydE11dGF0aW9uIH0gZnJvbSBcIi4uL2NvZGVnZW4vZ3JhcGhxbFwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGVcIlxuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYkxpbmssIENydW1iVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIlxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcbmV4cG9ydCBjb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcmVwb3J0c1JlcXVlc3QgPSB1c2VSZXBvcnRMaXN0R2V0UXVlcnkoKTtcblxuICBjb25zdCBbY3JlYXRlUmVwb3J0LCBjcmVhdGVSZXBvcnRSZXF1ZXN0XSA9IHVzZVJlcG9ydExpc3RDcmVhdGVSZXBvcnRNdXRhdGlvbih7XG4gICAgb25Db21wbGV0ZWQ6IChyZXMpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKGAvcmVwb3J0cy8ke3Jlcy5jcmVhdGVSZXBvcnQuaWR9YClcbiAgICB9XG4gIH0pXG4gIGNvbnN0IHJlcG9ydHMgPSByZXBvcnRzUmVxdWVzdC5kYXRhICYmIHJlcG9ydHNSZXF1ZXN0LmRhdGEucmVwb3J0c1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkZXI+XG4gICAgICAgIDxDcnVtYnM+XG4gICAgICAgICAgPENydW1iTGluayBocmVmPVwiL1wiPkhvbWU8L0NydW1iTGluaz5cbiAgICAgICAgICA8Q3J1bWJUaXRsZT5SZXBvcnRzPC9DcnVtYlRpdGxlPlxuICAgICAgICA8L0NydW1icz5cbiAgICAgICAgPENyZWF0ZVJlcG9ydEJ1dHRvbiBkaXNhYmxlZD17Y3JlYXRlUmVwb3J0UmVxdWVzdC5sb2FkaW5nfSBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgIGNyZWF0ZVJlcG9ydCh7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiVW50aXRsZWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gbmFtZT1cIkNyZWF0ZVJlcG9ydFwiPk5ldzwvQ3JlYXRlUmVwb3J0QnV0dG9uPlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8TWFpbj5cbiAgICAgICAge3JlcG9ydHNSZXF1ZXN0LmxvYWRpbmcgJiYgPFRleHQ+Li4uPC9UZXh0Pn1cbiAgICAgICAge3JlcG9ydHMgJiYgKFxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAge3JlcG9ydHMubWFwKHJlcG9ydCA9PlxuICAgICAgICAgICAgICA8UmVwb3J0IGtleT17cmVwb3J0LmlkfSBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGAvcmVwb3J0cy8ke3JlcG9ydC5pZH1gXG4gICAgICAgICAgICAgICAgaWYgKGUubmF0aXZlRXZlbnQubWV0YUtleSB8fCBlLm5hdGl2ZUV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGxvY2F0aW9uKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChsb2NhdGlvbilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxTbGlkZSB3aWR0aD17cmVwb3J0LndpZHRofSBoZWlnaHQ9e3JlcG9ydC5oZWlnaHR9PlxuICAgICAgICAgICAgICAgIDwvU2xpZGU+XG4gICAgICAgICAgICAgICAgPFJlcG9ydEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3JlcG9ydHMvJHtyZXBvcnQuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZSBjb2xvcj1cIndoaXRlXCIgZm9udFdlaWdodD1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXBvcnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvUmVwb3J0QWN0aW9ucz5cbiAgICAgICAgICAgICAgPC9SZXBvcnQ+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9MaXN0ID5cbiAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L01haW4+XG4gICAgPC9MYXlvdXQgPlxuICApXG59XG5cbmNvbnN0IENyZWF0ZVJlcG9ydEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICBqdXN0aWZ5LXNlbGY6ZW5kO1xuICAgIGBcblxuY29uc3QgTGF5b3V0ID0gc3R5bGVkLmRpdmBcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgICAgIGJhY2tncm91bmQ6I2Y1ZjVmNTtcbiAgICAgIGBcbmNvbnN0IE1haW4gPSBzdHlsZWQubWFpbmBcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBwYWRkaW5nOiA2NHB4IDUlO1xuICAgICAgYFxuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICAgICAgICBkaXNwbGF5OmdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMHB4LCA0MDBweCkpO1xuICAgICAgICBwbGFjZS1jb250ZW50OiBzdGFydCBjZW50ZXI7XG4gICAgICAgIGdyaWQtZ2FwOiA1JTtcbiAgICAgICAgcGFkZGluZzowO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGBcblxuY29uc3QgUmVwb3J0ID0gc3R5bGVkLmxpYFxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgYFxuXG5jb25zdCBSZXBvcnRBY3Rpb25zID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGJvdHRvbTowO1xuICBsZWZ0OjA7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIHdpZHRoOjEwMCU7XG4gIG1hcmdpbjowO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOyAqL1xuICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IGJsYWNrO1xuICAgICAgXG5gIl19 */"
});

const Layout = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e107jnen1",
  label: "Layout"
})( false ? undefined : {
  name: "4phgo3",
  styles: "display:grid;height:100%;grid-template-rows:auto 1fr;background:#f5f5f5;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvSG9tZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEV5QiIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L0hvbWUvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJlcG9ydExpc3RHZXRRdWVyeSwgdXNlUmVwb3J0TGlzdENyZWF0ZVJlcG9ydE11dGF0aW9uIH0gZnJvbSBcIi4uL2NvZGVnZW4vZ3JhcGhxbFwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGVcIlxuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYkxpbmssIENydW1iVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIlxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcbmV4cG9ydCBjb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcmVwb3J0c1JlcXVlc3QgPSB1c2VSZXBvcnRMaXN0R2V0UXVlcnkoKTtcblxuICBjb25zdCBbY3JlYXRlUmVwb3J0LCBjcmVhdGVSZXBvcnRSZXF1ZXN0XSA9IHVzZVJlcG9ydExpc3RDcmVhdGVSZXBvcnRNdXRhdGlvbih7XG4gICAgb25Db21wbGV0ZWQ6IChyZXMpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKGAvcmVwb3J0cy8ke3Jlcy5jcmVhdGVSZXBvcnQuaWR9YClcbiAgICB9XG4gIH0pXG4gIGNvbnN0IHJlcG9ydHMgPSByZXBvcnRzUmVxdWVzdC5kYXRhICYmIHJlcG9ydHNSZXF1ZXN0LmRhdGEucmVwb3J0c1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkZXI+XG4gICAgICAgIDxDcnVtYnM+XG4gICAgICAgICAgPENydW1iTGluayBocmVmPVwiL1wiPkhvbWU8L0NydW1iTGluaz5cbiAgICAgICAgICA8Q3J1bWJUaXRsZT5SZXBvcnRzPC9DcnVtYlRpdGxlPlxuICAgICAgICA8L0NydW1icz5cbiAgICAgICAgPENyZWF0ZVJlcG9ydEJ1dHRvbiBkaXNhYmxlZD17Y3JlYXRlUmVwb3J0UmVxdWVzdC5sb2FkaW5nfSBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgIGNyZWF0ZVJlcG9ydCh7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiVW50aXRsZWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gbmFtZT1cIkNyZWF0ZVJlcG9ydFwiPk5ldzwvQ3JlYXRlUmVwb3J0QnV0dG9uPlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8TWFpbj5cbiAgICAgICAge3JlcG9ydHNSZXF1ZXN0LmxvYWRpbmcgJiYgPFRleHQ+Li4uPC9UZXh0Pn1cbiAgICAgICAge3JlcG9ydHMgJiYgKFxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAge3JlcG9ydHMubWFwKHJlcG9ydCA9PlxuICAgICAgICAgICAgICA8UmVwb3J0IGtleT17cmVwb3J0LmlkfSBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGAvcmVwb3J0cy8ke3JlcG9ydC5pZH1gXG4gICAgICAgICAgICAgICAgaWYgKGUubmF0aXZlRXZlbnQubWV0YUtleSB8fCBlLm5hdGl2ZUV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGxvY2F0aW9uKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChsb2NhdGlvbilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxTbGlkZSB3aWR0aD17cmVwb3J0LndpZHRofSBoZWlnaHQ9e3JlcG9ydC5oZWlnaHR9PlxuICAgICAgICAgICAgICAgIDwvU2xpZGU+XG4gICAgICAgICAgICAgICAgPFJlcG9ydEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3JlcG9ydHMvJHtyZXBvcnQuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZSBjb2xvcj1cIndoaXRlXCIgZm9udFdlaWdodD1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXBvcnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvUmVwb3J0QWN0aW9ucz5cbiAgICAgICAgICAgICAgPC9SZXBvcnQ+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9MaXN0ID5cbiAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L01haW4+XG4gICAgPC9MYXlvdXQgPlxuICApXG59XG5cbmNvbnN0IENyZWF0ZVJlcG9ydEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICBqdXN0aWZ5LXNlbGY6ZW5kO1xuICAgIGBcblxuY29uc3QgTGF5b3V0ID0gc3R5bGVkLmRpdmBcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgICAgIGJhY2tncm91bmQ6I2Y1ZjVmNTtcbiAgICAgIGBcbmNvbnN0IE1haW4gPSBzdHlsZWQubWFpbmBcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBwYWRkaW5nOiA2NHB4IDUlO1xuICAgICAgYFxuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICAgICAgICBkaXNwbGF5OmdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMHB4LCA0MDBweCkpO1xuICAgICAgICBwbGFjZS1jb250ZW50OiBzdGFydCBjZW50ZXI7XG4gICAgICAgIGdyaWQtZ2FwOiA1JTtcbiAgICAgICAgcGFkZGluZzowO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGBcblxuY29uc3QgUmVwb3J0ID0gc3R5bGVkLmxpYFxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgYFxuXG5jb25zdCBSZXBvcnRBY3Rpb25zID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGJvdHRvbTowO1xuICBsZWZ0OjA7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIHdpZHRoOjEwMCU7XG4gIG1hcmdpbjowO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOyAqL1xuICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IGJsYWNrO1xuICAgICAgXG5gIl19 */"
});

const Main = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("main", {
  target: "e107jnen2",
  label: "Main"
})( false ? undefined : {
  name: "1coc1rl",
  styles: "display:grid;padding:64px 5%;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvSG9tZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0Z3QiIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L0hvbWUvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJlcG9ydExpc3RHZXRRdWVyeSwgdXNlUmVwb3J0TGlzdENyZWF0ZVJlcG9ydE11dGF0aW9uIH0gZnJvbSBcIi4uL2NvZGVnZW4vZ3JhcGhxbFwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGVcIlxuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYkxpbmssIENydW1iVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIlxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcbmV4cG9ydCBjb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcmVwb3J0c1JlcXVlc3QgPSB1c2VSZXBvcnRMaXN0R2V0UXVlcnkoKTtcblxuICBjb25zdCBbY3JlYXRlUmVwb3J0LCBjcmVhdGVSZXBvcnRSZXF1ZXN0XSA9IHVzZVJlcG9ydExpc3RDcmVhdGVSZXBvcnRNdXRhdGlvbih7XG4gICAgb25Db21wbGV0ZWQ6IChyZXMpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKGAvcmVwb3J0cy8ke3Jlcy5jcmVhdGVSZXBvcnQuaWR9YClcbiAgICB9XG4gIH0pXG4gIGNvbnN0IHJlcG9ydHMgPSByZXBvcnRzUmVxdWVzdC5kYXRhICYmIHJlcG9ydHNSZXF1ZXN0LmRhdGEucmVwb3J0c1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkZXI+XG4gICAgICAgIDxDcnVtYnM+XG4gICAgICAgICAgPENydW1iTGluayBocmVmPVwiL1wiPkhvbWU8L0NydW1iTGluaz5cbiAgICAgICAgICA8Q3J1bWJUaXRsZT5SZXBvcnRzPC9DcnVtYlRpdGxlPlxuICAgICAgICA8L0NydW1icz5cbiAgICAgICAgPENyZWF0ZVJlcG9ydEJ1dHRvbiBkaXNhYmxlZD17Y3JlYXRlUmVwb3J0UmVxdWVzdC5sb2FkaW5nfSBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgIGNyZWF0ZVJlcG9ydCh7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiVW50aXRsZWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gbmFtZT1cIkNyZWF0ZVJlcG9ydFwiPk5ldzwvQ3JlYXRlUmVwb3J0QnV0dG9uPlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8TWFpbj5cbiAgICAgICAge3JlcG9ydHNSZXF1ZXN0LmxvYWRpbmcgJiYgPFRleHQ+Li4uPC9UZXh0Pn1cbiAgICAgICAge3JlcG9ydHMgJiYgKFxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAge3JlcG9ydHMubWFwKHJlcG9ydCA9PlxuICAgICAgICAgICAgICA8UmVwb3J0IGtleT17cmVwb3J0LmlkfSBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGAvcmVwb3J0cy8ke3JlcG9ydC5pZH1gXG4gICAgICAgICAgICAgICAgaWYgKGUubmF0aXZlRXZlbnQubWV0YUtleSB8fCBlLm5hdGl2ZUV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGxvY2F0aW9uKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChsb2NhdGlvbilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxTbGlkZSB3aWR0aD17cmVwb3J0LndpZHRofSBoZWlnaHQ9e3JlcG9ydC5oZWlnaHR9PlxuICAgICAgICAgICAgICAgIDwvU2xpZGU+XG4gICAgICAgICAgICAgICAgPFJlcG9ydEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3JlcG9ydHMvJHtyZXBvcnQuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZSBjb2xvcj1cIndoaXRlXCIgZm9udFdlaWdodD1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXBvcnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvUmVwb3J0QWN0aW9ucz5cbiAgICAgICAgICAgICAgPC9SZXBvcnQ+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9MaXN0ID5cbiAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L01haW4+XG4gICAgPC9MYXlvdXQgPlxuICApXG59XG5cbmNvbnN0IENyZWF0ZVJlcG9ydEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICBqdXN0aWZ5LXNlbGY6ZW5kO1xuICAgIGBcblxuY29uc3QgTGF5b3V0ID0gc3R5bGVkLmRpdmBcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgICAgIGJhY2tncm91bmQ6I2Y1ZjVmNTtcbiAgICAgIGBcbmNvbnN0IE1haW4gPSBzdHlsZWQubWFpbmBcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBwYWRkaW5nOiA2NHB4IDUlO1xuICAgICAgYFxuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICAgICAgICBkaXNwbGF5OmdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMHB4LCA0MDBweCkpO1xuICAgICAgICBwbGFjZS1jb250ZW50OiBzdGFydCBjZW50ZXI7XG4gICAgICAgIGdyaWQtZ2FwOiA1JTtcbiAgICAgICAgcGFkZGluZzowO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGBcblxuY29uc3QgUmVwb3J0ID0gc3R5bGVkLmxpYFxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgYFxuXG5jb25zdCBSZXBvcnRBY3Rpb25zID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGJvdHRvbTowO1xuICBsZWZ0OjA7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIHdpZHRoOjEwMCU7XG4gIG1hcmdpbjowO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOyAqL1xuICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IGJsYWNrO1xuICAgICAgXG5gIl19 */"
});

const List = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("ul", {
  target: "e107jnen3",
  label: "List"
})( false ? undefined : {
  name: "1y8rfwa",
  styles: "display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,400px));place-content:start center;grid-gap:5%;padding:0;width:100%;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvSG9tZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZzQiIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L0hvbWUvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJlcG9ydExpc3RHZXRRdWVyeSwgdXNlUmVwb3J0TGlzdENyZWF0ZVJlcG9ydE11dGF0aW9uIH0gZnJvbSBcIi4uL2NvZGVnZW4vZ3JhcGhxbFwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGVcIlxuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYkxpbmssIENydW1iVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIlxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcbmV4cG9ydCBjb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcmVwb3J0c1JlcXVlc3QgPSB1c2VSZXBvcnRMaXN0R2V0UXVlcnkoKTtcblxuICBjb25zdCBbY3JlYXRlUmVwb3J0LCBjcmVhdGVSZXBvcnRSZXF1ZXN0XSA9IHVzZVJlcG9ydExpc3RDcmVhdGVSZXBvcnRNdXRhdGlvbih7XG4gICAgb25Db21wbGV0ZWQ6IChyZXMpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKGAvcmVwb3J0cy8ke3Jlcy5jcmVhdGVSZXBvcnQuaWR9YClcbiAgICB9XG4gIH0pXG4gIGNvbnN0IHJlcG9ydHMgPSByZXBvcnRzUmVxdWVzdC5kYXRhICYmIHJlcG9ydHNSZXF1ZXN0LmRhdGEucmVwb3J0c1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkZXI+XG4gICAgICAgIDxDcnVtYnM+XG4gICAgICAgICAgPENydW1iTGluayBocmVmPVwiL1wiPkhvbWU8L0NydW1iTGluaz5cbiAgICAgICAgICA8Q3J1bWJUaXRsZT5SZXBvcnRzPC9DcnVtYlRpdGxlPlxuICAgICAgICA8L0NydW1icz5cbiAgICAgICAgPENyZWF0ZVJlcG9ydEJ1dHRvbiBkaXNhYmxlZD17Y3JlYXRlUmVwb3J0UmVxdWVzdC5sb2FkaW5nfSBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgIGNyZWF0ZVJlcG9ydCh7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiVW50aXRsZWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gbmFtZT1cIkNyZWF0ZVJlcG9ydFwiPk5ldzwvQ3JlYXRlUmVwb3J0QnV0dG9uPlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8TWFpbj5cbiAgICAgICAge3JlcG9ydHNSZXF1ZXN0LmxvYWRpbmcgJiYgPFRleHQ+Li4uPC9UZXh0Pn1cbiAgICAgICAge3JlcG9ydHMgJiYgKFxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAge3JlcG9ydHMubWFwKHJlcG9ydCA9PlxuICAgICAgICAgICAgICA8UmVwb3J0IGtleT17cmVwb3J0LmlkfSBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGAvcmVwb3J0cy8ke3JlcG9ydC5pZH1gXG4gICAgICAgICAgICAgICAgaWYgKGUubmF0aXZlRXZlbnQubWV0YUtleSB8fCBlLm5hdGl2ZUV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGxvY2F0aW9uKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChsb2NhdGlvbilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxTbGlkZSB3aWR0aD17cmVwb3J0LndpZHRofSBoZWlnaHQ9e3JlcG9ydC5oZWlnaHR9PlxuICAgICAgICAgICAgICAgIDwvU2xpZGU+XG4gICAgICAgICAgICAgICAgPFJlcG9ydEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3JlcG9ydHMvJHtyZXBvcnQuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZSBjb2xvcj1cIndoaXRlXCIgZm9udFdlaWdodD1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXBvcnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvUmVwb3J0QWN0aW9ucz5cbiAgICAgICAgICAgICAgPC9SZXBvcnQ+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9MaXN0ID5cbiAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L01haW4+XG4gICAgPC9MYXlvdXQgPlxuICApXG59XG5cbmNvbnN0IENyZWF0ZVJlcG9ydEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICBqdXN0aWZ5LXNlbGY6ZW5kO1xuICAgIGBcblxuY29uc3QgTGF5b3V0ID0gc3R5bGVkLmRpdmBcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgICAgIGJhY2tncm91bmQ6I2Y1ZjVmNTtcbiAgICAgIGBcbmNvbnN0IE1haW4gPSBzdHlsZWQubWFpbmBcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBwYWRkaW5nOiA2NHB4IDUlO1xuICAgICAgYFxuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICAgICAgICBkaXNwbGF5OmdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMHB4LCA0MDBweCkpO1xuICAgICAgICBwbGFjZS1jb250ZW50OiBzdGFydCBjZW50ZXI7XG4gICAgICAgIGdyaWQtZ2FwOiA1JTtcbiAgICAgICAgcGFkZGluZzowO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGBcblxuY29uc3QgUmVwb3J0ID0gc3R5bGVkLmxpYFxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgYFxuXG5jb25zdCBSZXBvcnRBY3Rpb25zID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGJvdHRvbTowO1xuICBsZWZ0OjA7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIHdpZHRoOjEwMCU7XG4gIG1hcmdpbjowO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOyAqL1xuICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IGJsYWNrO1xuICAgICAgXG5gIl19 */"
});

const Report = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("li", {
  target: "e107jnen4",
  label: "Report"
})( false ? undefined : {
  name: "9e6kxj",
  styles: "list-style-type:none;position:relative;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvSG9tZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEZ3QiIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L0hvbWUvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJlcG9ydExpc3RHZXRRdWVyeSwgdXNlUmVwb3J0TGlzdENyZWF0ZVJlcG9ydE11dGF0aW9uIH0gZnJvbSBcIi4uL2NvZGVnZW4vZ3JhcGhxbFwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGVcIlxuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYkxpbmssIENydW1iVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIlxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcbmV4cG9ydCBjb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcmVwb3J0c1JlcXVlc3QgPSB1c2VSZXBvcnRMaXN0R2V0UXVlcnkoKTtcblxuICBjb25zdCBbY3JlYXRlUmVwb3J0LCBjcmVhdGVSZXBvcnRSZXF1ZXN0XSA9IHVzZVJlcG9ydExpc3RDcmVhdGVSZXBvcnRNdXRhdGlvbih7XG4gICAgb25Db21wbGV0ZWQ6IChyZXMpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKGAvcmVwb3J0cy8ke3Jlcy5jcmVhdGVSZXBvcnQuaWR9YClcbiAgICB9XG4gIH0pXG4gIGNvbnN0IHJlcG9ydHMgPSByZXBvcnRzUmVxdWVzdC5kYXRhICYmIHJlcG9ydHNSZXF1ZXN0LmRhdGEucmVwb3J0c1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkZXI+XG4gICAgICAgIDxDcnVtYnM+XG4gICAgICAgICAgPENydW1iTGluayBocmVmPVwiL1wiPkhvbWU8L0NydW1iTGluaz5cbiAgICAgICAgICA8Q3J1bWJUaXRsZT5SZXBvcnRzPC9DcnVtYlRpdGxlPlxuICAgICAgICA8L0NydW1icz5cbiAgICAgICAgPENyZWF0ZVJlcG9ydEJ1dHRvbiBkaXNhYmxlZD17Y3JlYXRlUmVwb3J0UmVxdWVzdC5sb2FkaW5nfSBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgIGNyZWF0ZVJlcG9ydCh7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiVW50aXRsZWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gbmFtZT1cIkNyZWF0ZVJlcG9ydFwiPk5ldzwvQ3JlYXRlUmVwb3J0QnV0dG9uPlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8TWFpbj5cbiAgICAgICAge3JlcG9ydHNSZXF1ZXN0LmxvYWRpbmcgJiYgPFRleHQ+Li4uPC9UZXh0Pn1cbiAgICAgICAge3JlcG9ydHMgJiYgKFxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAge3JlcG9ydHMubWFwKHJlcG9ydCA9PlxuICAgICAgICAgICAgICA8UmVwb3J0IGtleT17cmVwb3J0LmlkfSBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGAvcmVwb3J0cy8ke3JlcG9ydC5pZH1gXG4gICAgICAgICAgICAgICAgaWYgKGUubmF0aXZlRXZlbnQubWV0YUtleSB8fCBlLm5hdGl2ZUV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGxvY2F0aW9uKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChsb2NhdGlvbilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxTbGlkZSB3aWR0aD17cmVwb3J0LndpZHRofSBoZWlnaHQ9e3JlcG9ydC5oZWlnaHR9PlxuICAgICAgICAgICAgICAgIDwvU2xpZGU+XG4gICAgICAgICAgICAgICAgPFJlcG9ydEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3JlcG9ydHMvJHtyZXBvcnQuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZSBjb2xvcj1cIndoaXRlXCIgZm9udFdlaWdodD1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXBvcnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvUmVwb3J0QWN0aW9ucz5cbiAgICAgICAgICAgICAgPC9SZXBvcnQ+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9MaXN0ID5cbiAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L01haW4+XG4gICAgPC9MYXlvdXQgPlxuICApXG59XG5cbmNvbnN0IENyZWF0ZVJlcG9ydEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICBqdXN0aWZ5LXNlbGY6ZW5kO1xuICAgIGBcblxuY29uc3QgTGF5b3V0ID0gc3R5bGVkLmRpdmBcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgICAgIGJhY2tncm91bmQ6I2Y1ZjVmNTtcbiAgICAgIGBcbmNvbnN0IE1haW4gPSBzdHlsZWQubWFpbmBcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBwYWRkaW5nOiA2NHB4IDUlO1xuICAgICAgYFxuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICAgICAgICBkaXNwbGF5OmdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMHB4LCA0MDBweCkpO1xuICAgICAgICBwbGFjZS1jb250ZW50OiBzdGFydCBjZW50ZXI7XG4gICAgICAgIGdyaWQtZ2FwOiA1JTtcbiAgICAgICAgcGFkZGluZzowO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGBcblxuY29uc3QgUmVwb3J0ID0gc3R5bGVkLmxpYFxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgYFxuXG5jb25zdCBSZXBvcnRBY3Rpb25zID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGJvdHRvbTowO1xuICBsZWZ0OjA7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIHdpZHRoOjEwMCU7XG4gIG1hcmdpbjowO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOyAqL1xuICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IGJsYWNrO1xuICAgICAgXG5gIl19 */"
});

const ReportActions = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e107jnen5",
  label: "ReportActions"
})( false ? undefined : {
  name: "1omd0tn",
  styles: "position:absolute;bottom:0;left:0;display:block;width:100%;margin:0;padding:8px 16px;box-sizing:border-box;text-shadow:0 1px 3px black;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvSG9tZS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUdnQyIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L0hvbWUvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJlcG9ydExpc3RHZXRRdWVyeSwgdXNlUmVwb3J0TGlzdENyZWF0ZVJlcG9ydE11dGF0aW9uIH0gZnJvbSBcIi4uL2NvZGVnZW4vZ3JhcGhxbFwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGVcIlxuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYkxpbmssIENydW1iVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIlxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcbmV4cG9ydCBjb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcmVwb3J0c1JlcXVlc3QgPSB1c2VSZXBvcnRMaXN0R2V0UXVlcnkoKTtcblxuICBjb25zdCBbY3JlYXRlUmVwb3J0LCBjcmVhdGVSZXBvcnRSZXF1ZXN0XSA9IHVzZVJlcG9ydExpc3RDcmVhdGVSZXBvcnRNdXRhdGlvbih7XG4gICAgb25Db21wbGV0ZWQ6IChyZXMpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKGAvcmVwb3J0cy8ke3Jlcy5jcmVhdGVSZXBvcnQuaWR9YClcbiAgICB9XG4gIH0pXG4gIGNvbnN0IHJlcG9ydHMgPSByZXBvcnRzUmVxdWVzdC5kYXRhICYmIHJlcG9ydHNSZXF1ZXN0LmRhdGEucmVwb3J0c1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkZXI+XG4gICAgICAgIDxDcnVtYnM+XG4gICAgICAgICAgPENydW1iTGluayBocmVmPVwiL1wiPkhvbWU8L0NydW1iTGluaz5cbiAgICAgICAgICA8Q3J1bWJUaXRsZT5SZXBvcnRzPC9DcnVtYlRpdGxlPlxuICAgICAgICA8L0NydW1icz5cbiAgICAgICAgPENyZWF0ZVJlcG9ydEJ1dHRvbiBkaXNhYmxlZD17Y3JlYXRlUmVwb3J0UmVxdWVzdC5sb2FkaW5nfSBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgIGNyZWF0ZVJlcG9ydCh7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiVW50aXRsZWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gbmFtZT1cIkNyZWF0ZVJlcG9ydFwiPk5ldzwvQ3JlYXRlUmVwb3J0QnV0dG9uPlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8TWFpbj5cbiAgICAgICAge3JlcG9ydHNSZXF1ZXN0LmxvYWRpbmcgJiYgPFRleHQ+Li4uPC9UZXh0Pn1cbiAgICAgICAge3JlcG9ydHMgJiYgKFxuICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAge3JlcG9ydHMubWFwKHJlcG9ydCA9PlxuICAgICAgICAgICAgICA8UmVwb3J0IGtleT17cmVwb3J0LmlkfSBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGAvcmVwb3J0cy8ke3JlcG9ydC5pZH1gXG4gICAgICAgICAgICAgICAgaWYgKGUubmF0aXZlRXZlbnQubWV0YUtleSB8fCBlLm5hdGl2ZUV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGxvY2F0aW9uKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChsb2NhdGlvbilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxTbGlkZSB3aWR0aD17cmVwb3J0LndpZHRofSBoZWlnaHQ9e3JlcG9ydC5oZWlnaHR9PlxuICAgICAgICAgICAgICAgIDwvU2xpZGU+XG4gICAgICAgICAgICAgICAgPFJlcG9ydEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3JlcG9ydHMvJHtyZXBvcnQuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZSBjb2xvcj1cIndoaXRlXCIgZm9udFdlaWdodD1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXBvcnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvUmVwb3J0QWN0aW9ucz5cbiAgICAgICAgICAgICAgPC9SZXBvcnQ+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9MaXN0ID5cbiAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L01haW4+XG4gICAgPC9MYXlvdXQgPlxuICApXG59XG5cbmNvbnN0IENyZWF0ZVJlcG9ydEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICBqdXN0aWZ5LXNlbGY6ZW5kO1xuICAgIGBcblxuY29uc3QgTGF5b3V0ID0gc3R5bGVkLmRpdmBcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gICAgICAgIGJhY2tncm91bmQ6I2Y1ZjVmNTtcbiAgICAgIGBcbmNvbnN0IE1haW4gPSBzdHlsZWQubWFpbmBcbiAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICBwYWRkaW5nOiA2NHB4IDUlO1xuICAgICAgYFxuXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxuICAgICAgICBkaXNwbGF5OmdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMHB4LCA0MDBweCkpO1xuICAgICAgICBwbGFjZS1jb250ZW50OiBzdGFydCBjZW50ZXI7XG4gICAgICAgIGdyaWQtZ2FwOiA1JTtcbiAgICAgICAgcGFkZGluZzowO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGBcblxuY29uc3QgUmVwb3J0ID0gc3R5bGVkLmxpYFxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgYFxuXG5jb25zdCBSZXBvcnRBY3Rpb25zID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGJvdHRvbTowO1xuICBsZWZ0OjA7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIHdpZHRoOjEwMCU7XG4gIG1hcmdpbjowO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpOyAqL1xuICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IGJsYWNrO1xuICAgICAgXG5gIl19 */"
});

/***/ }),

/***/ "./client/codegen/graphql.ts":
/*!***********************************!*\
  !*** ./client/codegen/graphql.ts ***!
  \***********************************/
/*! exports provided: ReportListReportFragmentDoc, ChartFragmentDoc, ReportFragmentDoc, ReportListGetDocument, useReportListGetQuery, useReportListGetLazyQuery, ReportListCreateReportDocument, useReportListCreateReportMutation, SignInDocument, useSignInMutation, ReportGetDocument, useReportGetQuery, useReportGetLazyQuery, ReportUpdateDocument, useReportUpdateMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportListReportFragmentDoc", function() { return ReportListReportFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartFragmentDoc", function() { return ChartFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportFragmentDoc", function() { return ReportFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportListGetDocument", function() { return ReportListGetDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReportListGetQuery", function() { return useReportListGetQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReportListGetLazyQuery", function() { return useReportListGetLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportListCreateReportDocument", function() { return ReportListCreateReportDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReportListCreateReportMutation", function() { return useReportListCreateReportMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInDocument", function() { return SignInDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSignInMutation", function() { return useSignInMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportGetDocument", function() { return ReportGetDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReportGetQuery", function() { return useReportGetQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReportGetLazyQuery", function() { return useReportGetLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportUpdateDocument", function() { return ReportUpdateDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReportUpdateMutation", function() { return useReportUpdateMutation; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);


const ReportListReportFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    fragment ReportListReport on Report {
  id
  title
  width
  height
}
    `;
const ChartFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    fragment Chart on Chart {
  id
  x
  y
  width
  height
}
    `;
const ReportFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    fragment Report on Report {
  id
  title
  width
  height
  slides {
    id
    charts {
      ...Chart
    }
  }
}
    ${ChartFragmentDoc}`;
const ReportListGetDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query ReportListGet {
  reports {
    ...ReportListReport
  }
}
    ${ReportListReportFragmentDoc}`;
function useReportListGetQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"](ReportListGetDocument, baseOptions);
}
function useReportListGetLazyQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](ReportListGetDocument, baseOptions);
}
const ReportListCreateReportDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation ReportListCreateReport($title: String!) {
  createReport(title: $title) {
    ...ReportListReport
  }
}
    ${ReportListReportFragmentDoc}`;
function useReportListCreateReportMutation(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"](ReportListCreateReportDocument, baseOptions);
}
const SignInDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation SignIn($email: String!) {
  signin(email: $email)
}
    `;
function useSignInMutation(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"](SignInDocument, baseOptions);
}
const ReportGetDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query ReportGet($id: ID!) {
  report(id: $id) {
    ...Report
  }
}
    ${ReportFragmentDoc}`;
function useReportGetQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"](ReportGetDocument, baseOptions);
}
function useReportGetLazyQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](ReportGetDocument, baseOptions);
}
const ReportUpdateDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation ReportUpdate($report: ReportInput!) {
  updateReport(report: $report) {
    id
  }
}
    `;
function useReportUpdateMutation(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"](ReportUpdateDocument, baseOptions);
}

/***/ }),

/***/ "./client/components/Button.tsx":
/*!**************************************!*\
  !*** ./client/components/Button.tsx ***!
  \**************************************/
/*! exports provided: Button, FlatButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatButton", function() { return FlatButton; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./client/theme.ts");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);




const Button = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("button", {
  target: "enyfv4v0",
  label: "Button"
})(styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], " ", styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], " ", styled_system__WEBPACK_IMPORTED_MODULE_1__["layout"], " background:linear-gradient(180deg,#EF536F 0%,#CC475F 100%);color:white;border:none;height:40px;padding:0 32px;font-family:'Montserrat',sans-serif;font-size:1rem;box-shadow:0 1px 4px rgba(0,0,0,0.4);&:focus{box-shadow:0 4px 8px rgba(0,0,0,0.4);outline:none;}&:active{box-shadow:0 1px 2px rgba(0,0,0,0.2);}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvY29tcG9uZW50cy9CdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdrRiIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L2NvbXBvbmVudHMvQnV0dG9uLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgY29sb3IsIHNwYWNlLCBsYXlvdXQsIENvbG9yUHJvcHMsIFNwYWNlUHJvcHMsIExheW91dFByb3BzIH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcbmltcG9ydCB7IFJlYWN0Q2hpbGQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Q2hpbGQsXG4gIG5hbWU6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbjxQcm9wcyAmIENvbG9yUHJvcHMgJiBTcGFjZVByb3BzICYgTGF5b3V0UHJvcHM+YFxuICAke2NvbG9yfVxuICAke3NwYWNlfVxuICAke2xheW91dH1cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0VGNTM2RiAwJSwgI0NDNDc1RiAxMDAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6bm9uZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDMycHg7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgJjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBvdXRsaW5lOm5vbmU7XG4gIH1cbiAgJjphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIH1cblxuYFxuXG5leHBvcnQgY29uc3QgRmxhdEJ1dHRvbiA9IHN0eWxlZC5idXR0b248UHJvcHMgJiBDb2xvclByb3BzICYgU3BhY2VQcm9wcyAmIExheW91dFByb3BzICYgeyBhY3RpdmU/OiBib29sZWFuIH0+YFxuICBsaW5lLWhlaWdodDowO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogJHtjb2xvcnMudGV4dH07XG4gIGJvcmRlcjpub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6I2RlZGVkZTtcbiAgICBvdXRsaW5lOm5vbmU7XG4gIH1cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6I0M0QzRDNDtcbiAgfVxuICAke3AgPT4gcC5hY3RpdmUgJiYgY3NzYFxuICAgIGJhY2tncm91bmQ6I2M0YzRjNCAhaW1wb3J0YW50O1xuICBgfVxuICAke2NvbG9yfVxuICAke3NwYWNlfVxuICAke2xheW91dH1cblxuYCJdfQ== */"));

var _ref =  false ? undefined : {
  name: "1po6p59-FlatButton",
  styles: "background:#c4c4c4 !important;label:FlatButton;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvY29tcG9uZW50cy9CdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEd0IiLCJmaWxlIjoiL1VzZXJzL2FuZHJlYXNtb2xsZXIvY29kZS9yZXBvcnRzL2NsaWVudC9jb21wb25lbnRzL0J1dHRvbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IGNvbG9yLCBzcGFjZSwgbGF5b3V0LCBDb2xvclByb3BzLCBTcGFjZVByb3BzLCBMYXlvdXRQcm9wcyB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5pbXBvcnQgeyBSZWFjdENoaWxkIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tIFwiLi4vdGhlbWVcIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdENoaWxkLFxuICBuYW1lOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b248UHJvcHMgJiBDb2xvclByb3BzICYgU3BhY2VQcm9wcyAmIExheW91dFByb3BzPmBcbiAgJHtjb2xvcn1cbiAgJHtzcGFjZX1cbiAgJHtsYXlvdXR9XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNFRjUzNkYgMCUsICNDQzQ3NUYgMTAwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOm5vbmU7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMCAzMnB4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgb3V0bGluZTpub25lO1xuICB9XG4gICY6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IEZsYXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uPFByb3BzICYgQ29sb3JQcm9wcyAmIFNwYWNlUHJvcHMgJiBMYXlvdXRQcm9wcyAmIHsgYWN0aXZlPzogYm9vbGVhbiB9PmBcbiAgbGluZS1oZWlnaHQ6MDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICR7Y29sb3JzLnRleHR9O1xuICBib3JkZXI6bm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcblxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiNkZWRlZGU7XG4gICAgb3V0bGluZTpub25lO1xuICB9XG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiNDNEM0QzQ7XG4gIH1cbiAgJHtwID0+IHAuYWN0aXZlICYmIGNzc2BcbiAgICBiYWNrZ3JvdW5kOiNjNGM0YzQgIWltcG9ydGFudDtcbiAgYH1cbiAgJHtjb2xvcn1cbiAgJHtzcGFjZX1cbiAgJHtsYXlvdXR9XG5cbmAiXX0= */"
};

const FlatButton = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("button", {
  target: "enyfv4v1",
  label: "FlatButton"
})("line-height:0;background:none;color:", _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].text, ";border:none;border-radius:5px;padding:4px;font-family:'Montserrat',sans-serif;font-size:1rem;&:focus{background:#dedede;outline:none;}&:active{background:#C4C4C4;}", p => p.active &&
/*#__PURE__*/
_ref, " ", styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], " ", styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], " ", styled_system__WEBPACK_IMPORTED_MODULE_1__["layout"],  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvY29tcG9uZW50cy9CdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDNkciLCJmaWxlIjoiL1VzZXJzL2FuZHJlYXNtb2xsZXIvY29kZS9yZXBvcnRzL2NsaWVudC9jb21wb25lbnRzL0J1dHRvbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IGNvbG9yLCBzcGFjZSwgbGF5b3V0LCBDb2xvclByb3BzLCBTcGFjZVByb3BzLCBMYXlvdXRQcm9wcyB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5pbXBvcnQgeyBSZWFjdENoaWxkIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tIFwiLi4vdGhlbWVcIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdENoaWxkLFxuICBuYW1lOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b248UHJvcHMgJiBDb2xvclByb3BzICYgU3BhY2VQcm9wcyAmIExheW91dFByb3BzPmBcbiAgJHtjb2xvcn1cbiAgJHtzcGFjZX1cbiAgJHtsYXlvdXR9XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNFRjUzNkYgMCUsICNDQzQ3NUYgMTAwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOm5vbmU7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMCAzMnB4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICY6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgb3V0bGluZTpub25lO1xuICB9XG4gICY6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IEZsYXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uPFByb3BzICYgQ29sb3JQcm9wcyAmIFNwYWNlUHJvcHMgJiBMYXlvdXRQcm9wcyAmIHsgYWN0aXZlPzogYm9vbGVhbiB9PmBcbiAgbGluZS1oZWlnaHQ6MDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICR7Y29sb3JzLnRleHR9O1xuICBib3JkZXI6bm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcblxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiNkZWRlZGU7XG4gICAgb3V0bGluZTpub25lO1xuICB9XG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiNDNEM0QzQ7XG4gIH1cbiAgJHtwID0+IHAuYWN0aXZlICYmIGNzc2BcbiAgICBiYWNrZ3JvdW5kOiNjNGM0YzQgIWltcG9ydGFudDtcbiAgYH1cbiAgJHtjb2xvcn1cbiAgJHtzcGFjZX1cbiAgJHtsYXlvdXR9XG5cbmAiXX0= */");

/***/ }),

/***/ "./client/components/Crumbs.tsx":
/*!**************************************!*\
  !*** ./client/components/Crumbs.tsx ***!
  \**************************************/
/*! exports provided: Crumbs, CrumbLink, CrumbTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crumbs", function() { return Crumbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrumbLink", function() { return CrumbLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrumbTitle", function() { return CrumbTitle; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ "./client/theme.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Typography */ "./client/components/Typography.tsx");

var _jsxFileName = "/Users/andreasmoller/code/reports/client/components/Crumbs.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Crumbs = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("nav", {
  target: "e10se7y30",
  label: "Crumbs"
})("display:grid;grid-auto-flow:column;grid-column-gap:8px;place-content:center start;& > *{position:relative;::before{content:\"/\";margin-right:8px;color:", _theme__WEBPACK_IMPORTED_MODULE_3__["colors"].text, ";}:first-child::before{content:none;}}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvY29tcG9uZW50cy9DcnVtYnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFnQyIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L2NvbXBvbmVudHMvQ3J1bWJzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IHsgVGV4dCwgVGl0bGUgfSBmcm9tIFwiLi9UeXBvZ3JhcGh5XCJcblxuXG5leHBvcnQgY29uc3QgQ3J1bWJzID0gc3R5bGVkLm5hdmBcbmRpc3BsYXk6Z3JpZDtcbmdyaWQtYXV0by1mbG93OiBjb2x1bW47XG5ncmlkLWNvbHVtbi1nYXA6IDhweDtcbnBsYWNlLWNvbnRlbnQ6IGNlbnRlciBzdGFydDtcblxuJiA+ICoge1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6XCIvXCI7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgY29sb3I6ICR7Y29sb3JzLnRleHR9O1xuICB9XG4gIDpmaXJzdC1jaGlsZDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBub25lO1xuICB9XG59XG5gXG5cbnR5cGUgQ3J1bWJMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cbmV4cG9ydCBjb25zdCBDcnVtYkxpbmsgPSAocHJvcHM6IENydW1iTGlua1Byb3BzKSA9PlxuICA8TGluayBocmVmPXtwcm9wcy5ocmVmfT5cbiAgICA8YT5cbiAgICAgIDxUZXh0IGNvbG9yPXtjb2xvcnMucHJpbWFyeX0gZm9udFNpemU9XCIxcmVtO1wiPntwcm9wcy5jaGlsZHJlbn08L1RleHQ+XG4gICAgPC9hPlxuICA8L0xpbms+XG5cblxuZXhwb3J0IGNvbnN0IENydW1iVGl0bGUgPSAocHJvcHM6IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSA9PlxuICA8VGl0bGUgYXM9XCJoMVwiIGZvbnRTaXplPVwiMXJlbVwiPntwcm9wcy5jaGlsZHJlbn08L1RpdGxlPlxuXG4iXX0= */"));
const CrumbLink = props => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
  href: props.href,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Typography__WEBPACK_IMPORTED_MODULE_5__["Text"], {
  color: _theme__WEBPACK_IMPORTED_MODULE_3__["colors"].primary,
  fontSize: "1rem;",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, props.children)));
const CrumbTitle = props => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Typography__WEBPACK_IMPORTED_MODULE_5__["Title"], {
  as: "h1",
  fontSize: "1rem",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, props.children);

/***/ }),

/***/ "./client/components/Header.tsx":
/*!**************************************!*\
  !*** ./client/components/Header.tsx ***!
  \**************************************/
/*! exports provided: Header, HeaderSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSection", function() { return HeaderSection; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);

const Header = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("header", {
  target: "ewukv3f0",
  label: "Header"
})( false ? undefined : {
  name: "11y20pc",
  styles: "width:100%;height:60px;display:grid;justify-content:space-between;align-content:center;grid-auto-flow:column;padding:0 32px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvY29tcG9uZW50cy9IZWFkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVtQyIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDo2MHB4O1xuICBkaXNwbGF5OmdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24tY29udGVudDpjZW50ZXI7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIHBhZGRpbmc6IDAgMzJweDtcbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRlclNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OmdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6Y2VudGVyO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBncmlkLWdhcDogMTZweDtcbiAgYCJdfQ== */"
});
const HeaderSection = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "ewukv3f1",
  label: "HeaderSection"
})( false ? undefined : {
  name: "1r7y8xx",
  styles: "display:grid;justify-content:start;align-content:center;grid-auto-flow:column;grid-gap:16px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvY29tcG9uZW50cy9IZWFkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVl1QyIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDo2MHB4O1xuICBkaXNwbGF5OmdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24tY29udGVudDpjZW50ZXI7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIHBhZGRpbmc6IDAgMzJweDtcbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRlclNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OmdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6Y2VudGVyO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBncmlkLWdhcDogMTZweDtcbiAgYCJdfQ== */"
});

/***/ }),

/***/ "./client/components/Page.tsx":
/*!************************************!*\
  !*** ./client/components/Page.tsx ***!
  \************************************/
/*! exports provided: fetchAuthToken, Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAuthToken", function() { return fetchAuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/andreasmoller/code/reports/client/components/Page.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;








const globalStyles =
/*#__PURE__*/
 false ? undefined : {
  name: "j8dkh7-globalStyles",
  styles: "html,body,#__next{margin:0;padding:0;height:100%;}a,a:hover,a:visited{text-decoration:none;color:inherit;}*{box-sizing:border-box;}label:globalStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvY29tcG9uZW50cy9QYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRd0IiLCJmaWxlIjoiL1VzZXJzL2FuZHJlYXNtb2xsZXIvY29kZS9yZXBvcnRzL2NsaWVudC9jb21wb25lbnRzL1BhZ2UudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBPcGVyYXRpb24sIEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiYXBvbGxvLWJvb3N0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIjtcbmltcG9ydCB7IFJlYWN0Q2hpbGQsIHVzZU1lbW8sIGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgZ2xvYmFsU3R5bGVzID0gY3NzYFxuICBodG1sLCBib2R5LCAjX19uZXh0IHtcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7XG4gICAgaGVpZ2h0OjEwMCU7XG4gIH1cbiAgYSwgYTpob3ZlciwgYTp2aXNpdGVkIHtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICBjb2xvcjppbmhlcml0O1xuICAgIFxuICB9XG4gICoge1xuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbiAgfVxuYFxuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3RDaGlsZDtcbiAgcmVxdWlyZUF1dGg6IGJvb2xlYW5cbn1cblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PHN0cmluZyB8IG51bGw+KHVuZGVmaW5lZClcblxuXG5cbmV4cG9ydCBjb25zdCBmZXRjaEF1dGhUb2tlbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL3JlZnJlc2hfdG9rZW5cIilcbiAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCkge1xuICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXG4gIH1cbiAgY29uc3QgeyBhdXRoX3Rva2VuIH0gPSBhd2FpdCByZXMuanNvbigpXG4gIGNvbnNvbGUubG9nKHsgYXV0aF90b2tlbiB9KVxuICByZXR1cm4gYXV0aF90b2tlblxufVxuXG5jb25zdCBqd3RQcm9taXNlID0gZmV0Y2hBdXRoVG9rZW4oKVxuXG5leHBvcnQgY29uc3QgUGFnZSA9ICh7IHJlcXVpcmVBdXRoLCBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xuXG4gIGNvbnN0IFthdXRoVG9rZW4sIHNldEF1dGhUb2tlbl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgand0UHJvbWlzZVxuICAgICAgLnRoZW4oc2V0QXV0aFRva2VuKVxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgZmV0Y2hBdXRoVG9rZW4oKVxuICAgICAgICAudGhlbihzZXRBdXRoVG9rZW4pXG4gICAgfSwgNSAqIDYwICogMTAwMClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICB9XG4gIH0sIFtdKVxuXG5cbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gdXNlTWVtbygoKSA9PiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICB1cmk6IFwiL2FwaS9ncmFwaHFsXCIsXG4gICAgcmVxdWVzdDogYXN5bmMgKG9wZXJhdGlvbjogT3BlcmF0aW9uKSA9PiB7XG4gICAgICBpZiAoYXV0aFRva2VuKSB7XG4gICAgICAgIG9wZXJhdGlvbi5zZXRDb250ZXh0KHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aFRva2VufWBcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChyZXF1aXJlQXV0aCkge1xuICAgICAgICBjb25zdCBhdXRoVG9rZW4gPSBhd2FpdCBqd3RQcm9taXNlXG4gICAgICAgIG9wZXJhdGlvbi5zZXRDb250ZXh0KHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aFRva2VufWBcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgb25FcnJvcjogKHsgcmVzcG9uc2UsIG9wZXJhdGlvbiB9KSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuZXJyb3JzKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UsIG9wZXJhdGlvbik7XG4gICAgICB9XG4gICAgfSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe1xuICAgICAgZGF0YUlkRnJvbU9iamVjdDogb2JqZWN0ID0+IG9iamVjdC5pZCxcbiAgICB9KSxcbiAgICBmZXRjaCxcbiAgfSksIFthdXRoVG9rZW5dKVxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YXV0aFRva2VufT5cbiAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb0NsaWVudH0+XG4gICAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxTdHlsZXN9IC8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQXBvbGxvUHJvdmlkZXIgPlxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cbiJdfQ== */"
};
const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["createContext"])(undefined);
const fetchAuthToken = async () => {
  const res = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()("/api/refresh_token");

  if (res.status !== 200) {
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/login");
  }

  const {
    auth_token
  } = await res.json();
  console.log({
    auth_token
  });
  return auth_token;
};
const jwtPromise = fetchAuthToken();
const Page = ({
  requireAuth,
  children
}) => {
  const {
    0: authToken,
    1: setAuthToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    jwtPromise.then(setAuthToken);
    const interval = setInterval(() => {
      fetchAuthToken().then(setAuthToken);
    }, 5 * 60 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const apolloClient = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(() => new apollo_boost__WEBPACK_IMPORTED_MODULE_1___default.a({
    uri: "/api/graphql",
    request: async operation => {
      if (authToken) {
        operation.setContext({
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
      } else if (requireAuth) {
        const authToken = await jwtPromise;
        operation.setContext({
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
      }
    },
    onError: ({
      response,
      operation
    }) => {
      if (response && response.errors) {
        console.error(response, operation);
      }
    },
    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]({
      dataIdFromObject: object => object.id
    }),
    fetch: (isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default())
  }), [authToken]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(AuthContext.Provider, {
    value: authToken,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
    client: apolloClient,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["Global"], {
    styles: globalStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }), children));
};

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
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_resize_aware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-resize-aware */ "react-resize-aware");
/* harmony import */ var react_resize_aware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_resize_aware__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./client/theme.ts");

var _jsxFileName = "/Users/andreasmoller/code/reports/client/components/Slide.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const Slide = Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => {
  const [resizeListener, sizes] = react_resize_aware__WEBPACK_IMPORTED_MODULE_3___default()();
  const {
    width,
    height,
    children
  } = props;
  const scale = sizes.width / width;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Background, {
    ref: ref,
    onClick: props.onClick,
    scale: scale,
    height: height,
    selected: props.selected,
    show: scale != 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, resizeListener, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Content, {
    height: height,
    width: width,
    scale: scale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, children));
});

const Background = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("section", {
  target: "e1ocvuxq0",
  label: "Background"
})("opacity:", p => p.show ? 1 : 0, ";transition:600ms opacity;background:white;position:relative;justify-self:stretch;overflow:hidden;height:", p => p.height * p.scale, "px;box-shadow:0 ", p => 1 + 2 * p.scale, "px ", p => 1 + 8 * p.scale, "px rgba(0,0,0,0.4);border:", p => p.selected ? `1px solid  ${_theme__WEBPACK_IMPORTED_MODULE_4__["colors"].primary}` : "1px solid transparent", ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvY29tcG9uZW50cy9TbGlkZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NrRCIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L2NvbXBvbmVudHMvU2xpZGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIFJlZiwgUmVmT2JqZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgdXNlUmVzaXplTGlzdGVuZXIgZnJvbSBcInJlYWN0LXJlc2l6ZS1hd2FyZVwiXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tIFwiLi4vdGhlbWVcIlxuXG50eXBlIFNsaWRlUHJvcHMgPSB7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIHdpZHRoOiBudW1iZXJcbiAgaGVpZ2h0OiBudW1iZXJcbiAgb25DbGljaz86IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB2b2lkXG4gIHNlbGVjdGVkPzogYm9vbGVhblxufVxuZXhwb3J0IGNvbnN0IFNsaWRlID0gZm9yd2FyZFJlZigocHJvcHM6IFNsaWRlUHJvcHMsIHJlZjogUmVmT2JqZWN0PEhUTUxFbGVtZW50PikgPT4ge1xuICBjb25zdCBbcmVzaXplTGlzdGVuZXIsIHNpemVzXSA9IHVzZVJlc2l6ZUxpc3RlbmVyKClcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBjaGlsZHJlbiB9ID0gcHJvcHNcbiAgY29uc3Qgc2NhbGUgPSBzaXplcy53aWR0aCAvIHdpZHRoXG4gIHJldHVybiAoXG4gICAgPEJhY2tncm91bmRcbiAgICAgIHJlZj17cmVmfVxuICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cbiAgICAgIHNjYWxlPXtzY2FsZX1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgc2VsZWN0ZWQ9e3Byb3BzLnNlbGVjdGVkfVxuICAgICAgc2hvdz17c2NhbGUgIT0gMH1cbiAgICA+XG4gICAgICB7cmVzaXplTGlzdGVuZXJ9XG4gICAgICA8Q29udGVudCBoZWlnaHQ9e2hlaWdodH0gd2lkdGg9e3dpZHRofSBzY2FsZT17c2NhbGV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0NvbnRlbnQ+XG4gICAgPC9CYWNrZ3JvdW5kPlxuICApXG59KVxudHlwZSBCYWNrZ3JvdW5kUHJvcHMgPSB7XG4gIHNjYWxlOiBudW1iZXJcbiAgaGVpZ2h0OiBudW1iZXJcbiAgc2VsZWN0ZWQ6IGJvb2xlYW5cbiAgc2hvdzogYm9vbGVhblxufVxuY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5zZWN0aW9uPEJhY2tncm91bmRQcm9wcz5gXG4gIG9wYWNpdHk6JHtwID0+IHAuc2hvdyA/IDEgOiAwfTtcbiAgdHJhbnNpdGlvbjogNjAwbXMgb3BhY2l0eTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodCAqIHAuc2NhbGV9cHg7XG4gIGJveC1zaGFkb3c6IDAgJHtwID0+IDEgKyAyICogcC5zY2FsZX1weCAke3AgPT4gMSArIDggKiBwLnNjYWxlfXB4XG4gICAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuXG4gIGJvcmRlcjogJHtwID0+XG4gICAgcC5zZWxlY3RlZCA/IGAxcHggc29saWQgICR7Y29sb3JzLnByaW1hcnl9YCA6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCJ9O1xuYFxuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdjx7IHNjYWxlOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyB3aWR0aDogbnVtYmVyIH0+YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAke3AgPT4gcC5oZWlnaHR9cHg7XG4gIHdpZHRoOiAke3AgPT4gcC53aWR0aH1weDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgke3AgPT4gcC5zY2FsZX0pO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbmAiXX0= */"));

const Content = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1ocvuxq1",
  label: "Content"
})("position:absolute;left:0;top:0;height:", p => p.height, "px;width:", p => p.width, "px;transform:scale(", p => p.scale, ");transform-origin:top left;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvY29tcG9uZW50cy9TbGlkZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUQ0RSIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L2NvbXBvbmVudHMvU2xpZGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIFJlZiwgUmVmT2JqZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiXG5pbXBvcnQgdXNlUmVzaXplTGlzdGVuZXIgZnJvbSBcInJlYWN0LXJlc2l6ZS1hd2FyZVwiXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tIFwiLi4vdGhlbWVcIlxuXG50eXBlIFNsaWRlUHJvcHMgPSB7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIHdpZHRoOiBudW1iZXJcbiAgaGVpZ2h0OiBudW1iZXJcbiAgb25DbGljaz86IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB2b2lkXG4gIHNlbGVjdGVkPzogYm9vbGVhblxufVxuZXhwb3J0IGNvbnN0IFNsaWRlID0gZm9yd2FyZFJlZigocHJvcHM6IFNsaWRlUHJvcHMsIHJlZjogUmVmT2JqZWN0PEhUTUxFbGVtZW50PikgPT4ge1xuICBjb25zdCBbcmVzaXplTGlzdGVuZXIsIHNpemVzXSA9IHVzZVJlc2l6ZUxpc3RlbmVyKClcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBjaGlsZHJlbiB9ID0gcHJvcHNcbiAgY29uc3Qgc2NhbGUgPSBzaXplcy53aWR0aCAvIHdpZHRoXG4gIHJldHVybiAoXG4gICAgPEJhY2tncm91bmRcbiAgICAgIHJlZj17cmVmfVxuICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cbiAgICAgIHNjYWxlPXtzY2FsZX1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgc2VsZWN0ZWQ9e3Byb3BzLnNlbGVjdGVkfVxuICAgICAgc2hvdz17c2NhbGUgIT0gMH1cbiAgICA+XG4gICAgICB7cmVzaXplTGlzdGVuZXJ9XG4gICAgICA8Q29udGVudCBoZWlnaHQ9e2hlaWdodH0gd2lkdGg9e3dpZHRofSBzY2FsZT17c2NhbGV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0NvbnRlbnQ+XG4gICAgPC9CYWNrZ3JvdW5kPlxuICApXG59KVxudHlwZSBCYWNrZ3JvdW5kUHJvcHMgPSB7XG4gIHNjYWxlOiBudW1iZXJcbiAgaGVpZ2h0OiBudW1iZXJcbiAgc2VsZWN0ZWQ6IGJvb2xlYW5cbiAgc2hvdzogYm9vbGVhblxufVxuY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5zZWN0aW9uPEJhY2tncm91bmRQcm9wcz5gXG4gIG9wYWNpdHk6JHtwID0+IHAuc2hvdyA/IDEgOiAwfTtcbiAgdHJhbnNpdGlvbjogNjAwbXMgb3BhY2l0eTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodCAqIHAuc2NhbGV9cHg7XG4gIGJveC1zaGFkb3c6IDAgJHtwID0+IDEgKyAyICogcC5zY2FsZX1weCAke3AgPT4gMSArIDggKiBwLnNjYWxlfXB4XG4gICAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuXG4gIGJvcmRlcjogJHtwID0+XG4gICAgcC5zZWxlY3RlZCA/IGAxcHggc29saWQgICR7Y29sb3JzLnByaW1hcnl9YCA6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCJ9O1xuYFxuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdjx7IHNjYWxlOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyB3aWR0aDogbnVtYmVyIH0+YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAke3AgPT4gcC5oZWlnaHR9cHg7XG4gIHdpZHRoOiAke3AgPT4gcC53aWR0aH1weDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgke3AgPT4gcC5zY2FsZX0pO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbmAiXX0= */"));

/***/ }),

/***/ "./client/components/Typography.tsx":
/*!******************************************!*\
  !*** ./client/components/Typography.tsx ***!
  \******************************************/
/*! exports provided: Text, Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./client/theme.ts");



const Text =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("span", {
  target: "ey4wj5c0",
  label: "Text"
})("font-family:'Montserrat',sans-serif;text-decoration:none;", styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], " ", styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], " ", styled_system__WEBPACK_IMPORTED_MODULE_1__["typography"],  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvY29tcG9uZW50cy9UeXBvZ3JhcGh5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLcUYiLCJmaWxlIjoiL1VzZXJzL2FuZHJlYXNtb2xsZXIvY29kZS9yZXBvcnRzL2NsaWVudC9jb21wb25lbnRzL1R5cG9ncmFwaHkudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcbmltcG9ydCB7IENvbG9yUHJvcHMsIFR5cG9ncmFwaHlQcm9wcywgU3BhY2VQcm9wcywgc3BhY2UsIGNvbG9yLCB0eXBvZ3JhcGh5IH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIlxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uL3RoZW1lXCJcblxuXG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZDxcInNwYW5cIiwgQ29sb3JQcm9wcyAmIFR5cG9ncmFwaHlQcm9wcyAmIFNwYWNlUHJvcHM+KFwic3BhblwiKWBcblxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICR7c3BhY2V9XG4gICR7Y29sb3J9XG4gICR7dHlwb2dyYXBoeX1cbmBcbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZDxcImgyXCIsIENvbG9yUHJvcHMgJiBUeXBvZ3JhcGh5UHJvcHMgJiBTcGFjZVByb3BzPihcImgyXCIpYFxuIFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbWFyZ2luOjA7XG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogJHtjb2xvcnMudGV4dH07XG4gICR7c3BhY2V9XG4gICR7Y29sb3J9XG4gICR7dHlwb2dyYXBoeX1cbmAiXX0= */");
const Title =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("h2", {
  target: "ey4wj5c1",
  label: "Title"
})("font-family:'Montserrat',sans-serif;font-size:1.4rem;margin:0;font-weight:normal;text-decoration:none;color:", _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].text, ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], " ", styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], " ", styled_system__WEBPACK_IMPORTED_MODULE_1__["typography"],  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvY29tcG9uZW50cy9UeXBvZ3JhcGh5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFha0YiLCJmaWxlIjoiL1VzZXJzL2FuZHJlYXNtb2xsZXIvY29kZS9yZXBvcnRzL2NsaWVudC9jb21wb25lbnRzL1R5cG9ncmFwaHkudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCJcbmltcG9ydCB7IENvbG9yUHJvcHMsIFR5cG9ncmFwaHlQcm9wcywgU3BhY2VQcm9wcywgc3BhY2UsIGNvbG9yLCB0eXBvZ3JhcGh5IH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIlxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uL3RoZW1lXCJcblxuXG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZDxcInNwYW5cIiwgQ29sb3JQcm9wcyAmIFR5cG9ncmFwaHlQcm9wcyAmIFNwYWNlUHJvcHM+KFwic3BhblwiKWBcblxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICR7c3BhY2V9XG4gICR7Y29sb3J9XG4gICR7dHlwb2dyYXBoeX1cbmBcbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZDxcImgyXCIsIENvbG9yUHJvcHMgJiBUeXBvZ3JhcGh5UHJvcHMgJiBTcGFjZVByb3BzPihcImgyXCIpYFxuIFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbWFyZ2luOjA7XG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogJHtjb2xvcnMudGV4dH07XG4gICR7c3BhY2V9XG4gICR7Y29sb3J9XG4gICR7dHlwb2dyYXBoeX1cbmAiXX0= */");

/***/ }),

/***/ "./client/theme.ts":
/*!*************************!*\
  !*** ./client/theme.ts ***!
  \*************************/
/*! exports provided: colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
const colors = {
  primary: "#EF536F",
  text: "#414141"
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/Home */ "./client/Home/index.tsx");
/* harmony import */ var _client_components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/components/Page */ "./client/components/Page.tsx");
var _jsxFileName = "/Users/andreasmoller/code/reports/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (() => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_client_components_Page__WEBPACK_IMPORTED_MODULE_3__["Page"], {
  requireAuth: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_client_Home__WEBPACK_IMPORTED_MODULE_2__["HomePage"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
})));

/***/ }),

/***/ 7:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andreasmoller/code/reports/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "@emotion/styled-base":
/*!***************************************!*\
  !*** external "@emotion/styled-base" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled-base");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-resize-aware":
/*!*************************************!*\
  !*** external "react-resize-aware" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-resize-aware");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map