module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/Report/index.tsx":
/*!*********************************!*\
  !*** ./client/Report/index.tsx ***!
  \*********************************/
/*! exports provided: ReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPage", function() { return ReportPage; });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _codegen_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../codegen/graphql */ "./client/codegen/graphql.ts");
/* harmony import */ var _components_ErrorBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ErrorBox */ "./client/components/ErrorBox.tsx");
/* harmony import */ var _components_Crumbs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Crumbs */ "./client/components/Crumbs.tsx");
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Slide */ "./client/components/Slide.tsx");


var _jsxFileName = "/Users/andreasmoller/code/reports/client/Report/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var _ref =  false ? undefined : {
  name: "1vys469-ReportPage",
  styles: "position:absolute;top:32px;left:32px;label:ReportPage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQnNCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSB9IGZyb20gXCIuLi9jb2RlZ2VuL2dyYXBocWxcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgRXJyb3JCb3ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FcnJvckJveFwiO1xuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYlRpdGxlLCBDcnVtYkxpbmsgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHsgU2xpZGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TbGlkZVwiO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5XCI7XG5cbmV4cG9ydCBjb25zdCBSZXBvcnRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCByZXBvcnRJZCA9IHJvdXRlci5xdWVyeS5yZXBvcnRJZCBhcyBzdHJpbmdcblxuICBjb25zb2xlLmxvZyh7IHJlcG9ydElkIH0pXG4gIGNvbnN0IHJlcG9ydFF1ZXJ5ID0gdXNlUmVwb3J0R2V0UXVlcnkoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWQ6IHJlcG9ydElkXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcG9ydCA9IHJlcG9ydFF1ZXJ5LmRhdGEgJiYgcmVwb3J0UXVlcnkuZGF0YS5yZXBvcnRcblxuICBjb25zb2xlLmxvZyhyZXBvcnRRdWVyeSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPENydW1icyBjc3M9e2Nzc2BcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHRvcDogMzJweDtcbiAgICAgICAgbGVmdDogMzJweDtcbiAgICAgIGB9PlxuICAgICAgICA8Q3J1bWJMaW5rIGhyZWY9XCIvcmVwb3J0c1wiPlJlcG9ydHM8L0NydW1iTGluaz5cbiAgICAgICAgPENydW1iVGl0bGU+e3JlcG9ydCA/IHJlcG9ydC50aXRsZSA6IFwiLi4uXCJ9PC9DcnVtYlRpdGxlPlxuICAgICAgPC9DcnVtYnM+XG4gICAgICA8VG9vbGJhciAvPlxuICAgICAge3JlcG9ydCAmJlxuICAgICAgICA8U2xpZGUgd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cbiAgICAgICAgPC9TbGlkZT5cbiAgICAgIH1cblxuICAgICAge3JlcG9ydFF1ZXJ5LmVycm9yICYmIDxFcnJvckJveCBlcnJvcj17cmVwb3J0UXVlcnkuZXJyb3J9IC8+fVxuXG4gICAgPC9MYXlvdXQ+XG4gIClcblxufVxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIHBhZGRpbmc6IDk2cHggMTAlO1xuICBncmlkLWdhcDogMzJweDtcbiAgYmFja2dyb3VuZDojZjVmNWY1O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICBwbGFjZS1jb250ZW50OiBzdGFydCBzdHJldGNoO1xuYFxuXG5jb25zdCBUb29sYmFyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OjYwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsMCwwLDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6d2hpdGU7XG5gIl19 */"
};

const ReportPage = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const reportId = router.query.reportId;
  console.log({
    reportId
  });
  const reportQuery = Object(_codegen_graphql__WEBPACK_IMPORTED_MODULE_5__["useReportGetQuery"])({
    variables: {
      id: reportId
    }
  });
  const report = reportQuery.data && reportQuery.data.report;
  console.log(reportQuery);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Layout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Crumbs__WEBPACK_IMPORTED_MODULE_7__["Crumbs"], {
    css: _ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Crumbs__WEBPACK_IMPORTED_MODULE_7__["CrumbLink"], {
    href: "/reports",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Reports"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Crumbs__WEBPACK_IMPORTED_MODULE_7__["CrumbTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, report ? report.title : "...")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Toolbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), report && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Slide__WEBPACK_IMPORTED_MODULE_8__["Slide"], {
    width: report.width,
    height: report.height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), reportQuery.error && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_ErrorBox__WEBPACK_IMPORTED_MODULE_6__["ErrorBox"], {
    error: reportQuery.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }));
};

const Layout = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "esq99oz0",
  label: "Layout"
})( false ? undefined : {
  name: "1wflmdr",
  styles: "display:grid;height:100%;padding:96px 10%;grid-gap:32px;background:#f5f5f5;grid-template-rows:auto 1fr;place-content:start stretch;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRHlCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSB9IGZyb20gXCIuLi9jb2RlZ2VuL2dyYXBocWxcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgRXJyb3JCb3ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FcnJvckJveFwiO1xuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYlRpdGxlLCBDcnVtYkxpbmsgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHsgU2xpZGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TbGlkZVwiO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5XCI7XG5cbmV4cG9ydCBjb25zdCBSZXBvcnRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCByZXBvcnRJZCA9IHJvdXRlci5xdWVyeS5yZXBvcnRJZCBhcyBzdHJpbmdcblxuICBjb25zb2xlLmxvZyh7IHJlcG9ydElkIH0pXG4gIGNvbnN0IHJlcG9ydFF1ZXJ5ID0gdXNlUmVwb3J0R2V0UXVlcnkoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWQ6IHJlcG9ydElkXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcG9ydCA9IHJlcG9ydFF1ZXJ5LmRhdGEgJiYgcmVwb3J0UXVlcnkuZGF0YS5yZXBvcnRcblxuICBjb25zb2xlLmxvZyhyZXBvcnRRdWVyeSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPENydW1icyBjc3M9e2Nzc2BcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHRvcDogMzJweDtcbiAgICAgICAgbGVmdDogMzJweDtcbiAgICAgIGB9PlxuICAgICAgICA8Q3J1bWJMaW5rIGhyZWY9XCIvcmVwb3J0c1wiPlJlcG9ydHM8L0NydW1iTGluaz5cbiAgICAgICAgPENydW1iVGl0bGU+e3JlcG9ydCA/IHJlcG9ydC50aXRsZSA6IFwiLi4uXCJ9PC9DcnVtYlRpdGxlPlxuICAgICAgPC9DcnVtYnM+XG4gICAgICA8VG9vbGJhciAvPlxuICAgICAge3JlcG9ydCAmJlxuICAgICAgICA8U2xpZGUgd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cbiAgICAgICAgPC9TbGlkZT5cbiAgICAgIH1cblxuICAgICAge3JlcG9ydFF1ZXJ5LmVycm9yICYmIDxFcnJvckJveCBlcnJvcj17cmVwb3J0UXVlcnkuZXJyb3J9IC8+fVxuXG4gICAgPC9MYXlvdXQ+XG4gIClcblxufVxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIHBhZGRpbmc6IDk2cHggMTAlO1xuICBncmlkLWdhcDogMzJweDtcbiAgYmFja2dyb3VuZDojZjVmNWY1O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICBwbGFjZS1jb250ZW50OiBzdGFydCBzdHJldGNoO1xuYFxuXG5jb25zdCBUb29sYmFyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OjYwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsMCwwLDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6d2hpdGU7XG5gIl19 */"
});

const Toolbar = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "esq99oz1",
  label: "Toolbar"
})( false ? undefined : {
  name: "n8j8yq",
  styles: "height:60px;box-shadow:0 1px 4px rgba(0,0,0,0.25);border-radius:3px;background:white;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRDBCIiwiZmlsZSI6Ii9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSB9IGZyb20gXCIuLi9jb2RlZ2VuL2dyYXBocWxcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgRXJyb3JCb3ggfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FcnJvckJveFwiO1xuaW1wb3J0IHsgQ3J1bWJzLCBDcnVtYlRpdGxlLCBDcnVtYkxpbmsgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DcnVtYnNcIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHsgU2xpZGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TbGlkZVwiO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5XCI7XG5cbmV4cG9ydCBjb25zdCBSZXBvcnRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCByZXBvcnRJZCA9IHJvdXRlci5xdWVyeS5yZXBvcnRJZCBhcyBzdHJpbmdcblxuICBjb25zb2xlLmxvZyh7IHJlcG9ydElkIH0pXG4gIGNvbnN0IHJlcG9ydFF1ZXJ5ID0gdXNlUmVwb3J0R2V0UXVlcnkoe1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWQ6IHJlcG9ydElkXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcG9ydCA9IHJlcG9ydFF1ZXJ5LmRhdGEgJiYgcmVwb3J0UXVlcnkuZGF0YS5yZXBvcnRcblxuICBjb25zb2xlLmxvZyhyZXBvcnRRdWVyeSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPENydW1icyBjc3M9e2Nzc2BcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHRvcDogMzJweDtcbiAgICAgICAgbGVmdDogMzJweDtcbiAgICAgIGB9PlxuICAgICAgICA8Q3J1bWJMaW5rIGhyZWY9XCIvcmVwb3J0c1wiPlJlcG9ydHM8L0NydW1iTGluaz5cbiAgICAgICAgPENydW1iVGl0bGU+e3JlcG9ydCA/IHJlcG9ydC50aXRsZSA6IFwiLi4uXCJ9PC9DcnVtYlRpdGxlPlxuICAgICAgPC9DcnVtYnM+XG4gICAgICA8VG9vbGJhciAvPlxuICAgICAge3JlcG9ydCAmJlxuICAgICAgICA8U2xpZGUgd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cbiAgICAgICAgPC9TbGlkZT5cbiAgICAgIH1cblxuICAgICAge3JlcG9ydFF1ZXJ5LmVycm9yICYmIDxFcnJvckJveCBlcnJvcj17cmVwb3J0UXVlcnkuZXJyb3J9IC8+fVxuXG4gICAgPC9MYXlvdXQ+XG4gIClcblxufVxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIHBhZGRpbmc6IDk2cHggMTAlO1xuICBncmlkLWdhcDogMzJweDtcbiAgYmFja2dyb3VuZDojZjVmNWY1O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICBwbGFjZS1jb250ZW50OiBzdGFydCBzdHJldGNoO1xuYFxuXG5jb25zdCBUb29sYmFyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OjYwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsMCwwLDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6d2hpdGU7XG5gIl19 */"
});

/***/ }),

/***/ "./client/codegen/graphql.ts":
/*!***********************************!*\
  !*** ./client/codegen/graphql.ts ***!
  \***********************************/
/*! exports provided: ReportFragmentDoc, ReportListReportFragmentDoc, SignInDocument, useSignInMutation, ReportGetDocument, useReportGetQuery, useReportGetLazyQuery, ReportListGetDocument, useReportListGetQuery, useReportListGetLazyQuery, ReportListCreateReportDocument, useReportListCreateReportMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportFragmentDoc", function() { return ReportFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportListReportFragmentDoc", function() { return ReportListReportFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInDocument", function() { return SignInDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSignInMutation", function() { return useSignInMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportGetDocument", function() { return ReportGetDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReportGetQuery", function() { return useReportGetQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReportGetLazyQuery", function() { return useReportGetLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportListGetDocument", function() { return ReportListGetDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReportListGetQuery", function() { return useReportListGetQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReportListGetLazyQuery", function() { return useReportListGetLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportListCreateReportDocument", function() { return ReportListCreateReportDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReportListCreateReportMutation", function() { return useReportListCreateReportMutation; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);


const ReportFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    fragment Report on Report {
  id
  title
  width
  height
  slides {
    id
  }
}
    `;
const ReportListReportFragmentDoc = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    fragment ReportListReport on Report {
  id
  title
  width
  height
}
    `;
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
})("display:grid;grid-auto-flow:column;grid-column-gap:8px;place-content:center start;& > *{position:relative;::before{content:\"/\";margin-right:8px;color:", _theme__WEBPACK_IMPORTED_MODULE_3__["colors"].text, ";}}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvY29tcG9uZW50cy9DcnVtYnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFnQyIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L2NvbXBvbmVudHMvQ3J1bWJzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IHsgVGV4dCwgVGl0bGUgfSBmcm9tIFwiLi9UeXBvZ3JhcGh5XCJcblxuXG5leHBvcnQgY29uc3QgQ3J1bWJzID0gc3R5bGVkLm5hdmBcbmRpc3BsYXk6Z3JpZDtcbmdyaWQtYXV0by1mbG93OiBjb2x1bW47XG5ncmlkLWNvbHVtbi1nYXA6IDhweDtcbnBsYWNlLWNvbnRlbnQ6IGNlbnRlciBzdGFydDtcblxuJiA+ICoge1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6XCIvXCI7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgY29sb3I6ICR7Y29sb3JzLnRleHR9O1xuICB9XG59XG5gXG5cbnR5cGUgQ3J1bWJMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cbmV4cG9ydCBjb25zdCBDcnVtYkxpbmsgPSAocHJvcHM6IENydW1iTGlua1Byb3BzKSA9PlxuICA8TGluayBocmVmPXtwcm9wcy5ocmVmfT5cbiAgICA8YT5cbiAgICAgIDxUZXh0IGNvbG9yPXtjb2xvcnMucHJpbWFyeX0gZm9udFNpemU9XCIxcmVtO1wiPntwcm9wcy5jaGlsZHJlbn08L1RleHQ+XG4gICAgPC9hPlxuICA8L0xpbms+XG5cblxuZXhwb3J0IGNvbnN0IENydW1iVGl0bGUgPSAocHJvcHM6IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSA9PlxuICA8VGl0bGUgYXM9XCJoMVwiIGZvbnRTaXplPVwiMXJlbVwiPntwcm9wcy5jaGlsZHJlbn08L1RpdGxlPiJdfQ== */"));
const CrumbLink = props => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
  href: props.href,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Typography__WEBPACK_IMPORTED_MODULE_5__["Text"], {
  color: _theme__WEBPACK_IMPORTED_MODULE_3__["colors"].primary,
  fontSize: "1rem;",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, props.children)));
const CrumbTitle = props => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Typography__WEBPACK_IMPORTED_MODULE_5__["Title"], {
  as: "h1",
  fontSize: "1rem",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, props.children);

/***/ }),

/***/ "./client/components/ErrorBox.tsx":
/*!****************************************!*\
  !*** ./client/components/ErrorBox.tsx ***!
  \****************************************/
/*! exports provided: ErrorBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorBox", function() { return ErrorBox; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/andreasmoller/code/reports/client/components/ErrorBox.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const ErrorBox = props => {
  const {
    error
  } = props;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Box, {
    role: "alert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, error.graphQLErrors.map(err => err.message));
};

const Box = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1lqkvrt0",
  label: "Box"
})( false ? undefined : {
  name: "45odyd",
  styles: "padding:32px;background:#f0f0f0;border:1px solid #ddd;border-radius:3px;color:#414141;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvY29tcG9uZW50cy9FcnJvckJveC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJzQiIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L2NvbXBvbmVudHMvRXJyb3JCb3gudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvRXJyb3IgfSBmcm9tIFwiYXBvbGxvLWJvb3N0XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBlcnJvcjogQXBvbGxvRXJyb3Jcbn1cblxuZXhwb3J0IGNvbnN0IEVycm9yQm94ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IGVycm9yLCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHJvbGU9XCJhbGVydFwiPlxuICAgICAge2Vycm9yLmdyYXBoUUxFcnJvcnMubWFwKGVyciA9PlxuICAgICAgICBlcnIubWVzc2FnZVxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKVxufVxuXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiNmMGYwZjA7XG4gIGJvcmRlcjoxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb2xvcjojNDE0MTQxO1xuYCJdfQ== */"
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




const Slide = props => {
  const [resizeListener, sizes] = react_resize_aware__WEBPACK_IMPORTED_MODULE_3___default()();
  const {
    width,
    height,
    children
  } = props;
  const scale = sizes.width / width;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Background, {
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
      lineNumber: 26
    },
    __self: undefined
  }, children));
};

const Background = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("section", {
  target: "e1ocvuxq0",
  label: "Background"
})("opacity:", p => p.show ? 1 : 0, ";transition:600ms opacity;background:white;position:relative;justify-self:stretch;overflow:hidden;height:", p => p.height * p.scale, "px;box-shadow:0 ", p => 1 + 2 * p.scale, "px ", p => 1 + 8 * p.scale, "px rgba(0,0,0,0.4);border:", p => p.selected ? `1px solid  ${_theme__WEBPACK_IMPORTED_MODULE_4__["colors"].primary}` : "1px solid transparent", ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvY29tcG9uZW50cy9TbGlkZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNrRCIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L2NvbXBvbmVudHMvU2xpZGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHVzZVJlc2l6ZUxpc3RlbmVyIGZyb20gXCJyZWFjdC1yZXNpemUtYXdhcmVcIlxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uL3RoZW1lXCJcblxudHlwZSBTbGlkZVByb3BzPENvbXBvbmVudFR5cGUgPSBSZWFjdC5Db21wb25lbnQ+ID0ge1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICB3aWR0aDogbnVtYmVyXG4gIGhlaWdodDogbnVtYmVyXG4gIG9uQ2xpY2s/OiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gdm9pZFxuICBzZWxlY3RlZD86IGJvb2xlYW5cbn1cbmV4cG9ydCBjb25zdCBTbGlkZSA9IChwcm9wczogU2xpZGVQcm9wcykgPT4ge1xuICBjb25zdCBbcmVzaXplTGlzdGVuZXIsIHNpemVzXSA9IHVzZVJlc2l6ZUxpc3RlbmVyKClcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBjaGlsZHJlbiB9ID0gcHJvcHNcbiAgY29uc3Qgc2NhbGUgPSBzaXplcy53aWR0aCAvIHdpZHRoXG4gIHJldHVybiAoXG4gICAgPEJhY2tncm91bmRcbiAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICBzY2FsZT17c2NhbGV9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHNlbGVjdGVkPXtwcm9wcy5zZWxlY3RlZH1cbiAgICAgIHNob3c9e3NjYWxlICE9IDB9XG4gICAgPlxuICAgICAge3Jlc2l6ZUxpc3RlbmVyfVxuICAgICAgPENvbnRlbnQgaGVpZ2h0PXtoZWlnaHR9IHdpZHRoPXt3aWR0aH0gc2NhbGU9e3NjYWxlfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Db250ZW50PlxuICAgIDwvQmFja2dyb3VuZD5cbiAgKVxufVxudHlwZSBCYWNrZ3JvdW5kUHJvcHMgPSB7XG4gIHNjYWxlOiBudW1iZXJcbiAgaGVpZ2h0OiBudW1iZXJcbiAgc2VsZWN0ZWQ6IGJvb2xlYW5cbiAgc2hvdzogYm9vbGVhblxufVxuY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5zZWN0aW9uPEJhY2tncm91bmRQcm9wcz5gXG4gIG9wYWNpdHk6JHtwID0+IHAuc2hvdyA/IDEgOiAwfTtcbiAgdHJhbnNpdGlvbjogNjAwbXMgb3BhY2l0eTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodCAqIHAuc2NhbGV9cHg7XG4gIGJveC1zaGFkb3c6IDAgJHtwID0+IDEgKyAyICogcC5zY2FsZX1weCAke3AgPT4gMSArIDggKiBwLnNjYWxlfXB4XG4gICAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuXG4gIGJvcmRlcjogJHtwID0+XG4gICAgcC5zZWxlY3RlZCA/IGAxcHggc29saWQgICR7Y29sb3JzLnByaW1hcnl9YCA6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCJ9O1xuYFxuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdjx7IHNjYWxlOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyB3aWR0aDogbnVtYmVyIH0+YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAke3AgPT4gcC5oZWlnaHR9cHg7XG4gIHdpZHRoOiAke3AgPT4gcC53aWR0aH1weDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgke3AgPT4gcC5zY2FsZX0pO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbmAiXX0= */"));

const Content = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1ocvuxq1",
  label: "Content"
})("position:absolute;left:0;top:0;height:", p => p.height, "px;width:", p => p.width, "px;transform:scale(", p => p.scale, ");transform-origin:top left;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvY29tcG9uZW50cy9TbGlkZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0Q0RSIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L2NvbXBvbmVudHMvU2xpZGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHVzZVJlc2l6ZUxpc3RlbmVyIGZyb20gXCJyZWFjdC1yZXNpemUtYXdhcmVcIlxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uL3RoZW1lXCJcblxudHlwZSBTbGlkZVByb3BzPENvbXBvbmVudFR5cGUgPSBSZWFjdC5Db21wb25lbnQ+ID0ge1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICB3aWR0aDogbnVtYmVyXG4gIGhlaWdodDogbnVtYmVyXG4gIG9uQ2xpY2s/OiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gdm9pZFxuICBzZWxlY3RlZD86IGJvb2xlYW5cbn1cbmV4cG9ydCBjb25zdCBTbGlkZSA9IChwcm9wczogU2xpZGVQcm9wcykgPT4ge1xuICBjb25zdCBbcmVzaXplTGlzdGVuZXIsIHNpemVzXSA9IHVzZVJlc2l6ZUxpc3RlbmVyKClcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBjaGlsZHJlbiB9ID0gcHJvcHNcbiAgY29uc3Qgc2NhbGUgPSBzaXplcy53aWR0aCAvIHdpZHRoXG4gIHJldHVybiAoXG4gICAgPEJhY2tncm91bmRcbiAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICBzY2FsZT17c2NhbGV9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHNlbGVjdGVkPXtwcm9wcy5zZWxlY3RlZH1cbiAgICAgIHNob3c9e3NjYWxlICE9IDB9XG4gICAgPlxuICAgICAge3Jlc2l6ZUxpc3RlbmVyfVxuICAgICAgPENvbnRlbnQgaGVpZ2h0PXtoZWlnaHR9IHdpZHRoPXt3aWR0aH0gc2NhbGU9e3NjYWxlfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Db250ZW50PlxuICAgIDwvQmFja2dyb3VuZD5cbiAgKVxufVxudHlwZSBCYWNrZ3JvdW5kUHJvcHMgPSB7XG4gIHNjYWxlOiBudW1iZXJcbiAgaGVpZ2h0OiBudW1iZXJcbiAgc2VsZWN0ZWQ6IGJvb2xlYW5cbiAgc2hvdzogYm9vbGVhblxufVxuY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5zZWN0aW9uPEJhY2tncm91bmRQcm9wcz5gXG4gIG9wYWNpdHk6JHtwID0+IHAuc2hvdyA/IDEgOiAwfTtcbiAgdHJhbnNpdGlvbjogNjAwbXMgb3BhY2l0eTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodCAqIHAuc2NhbGV9cHg7XG4gIGJveC1zaGFkb3c6IDAgJHtwID0+IDEgKyAyICogcC5zY2FsZX1weCAke3AgPT4gMSArIDggKiBwLnNjYWxlfXB4XG4gICAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuXG4gIGJvcmRlcjogJHtwID0+XG4gICAgcC5zZWxlY3RlZCA/IGAxcHggc29saWQgICR7Y29sb3JzLnByaW1hcnl9YCA6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCJ9O1xuYFxuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdjx7IHNjYWxlOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyB3aWR0aDogbnVtYmVyIH0+YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAke3AgPT4gcC5oZWlnaHR9cHg7XG4gIHdpZHRoOiAke3AgPT4gcC53aWR0aH1weDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgke3AgPT4gcC5zY2FsZX0pO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbmAiXX0= */"));

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

/***/ "./pages/reports/[reportId].tsx":
/*!**************************************!*\
  !*** ./pages/reports/[reportId].tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client_Report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client/Report */ "./client/Report/index.tsx");
/* harmony import */ var _client_components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client/components/Page */ "./client/components/Page.tsx");
var _jsxFileName = "/Users/andreasmoller/code/reports/pages/reports/[reportId].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (() => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_client_components_Page__WEBPACK_IMPORTED_MODULE_3__["Page"], {
  requireAuth: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_client_Report__WEBPACK_IMPORTED_MODULE_2__["ReportPage"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
})));

/***/ }),

/***/ 3:
/*!********************************************!*\
  !*** multi ./pages/reports/[reportId].tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andreasmoller/code/reports/pages/reports/[reportId].tsx */"./pages/reports/[reportId].tsx");


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

/***/ "@emotion/css":
/*!*******************************!*\
  !*** external "@emotion/css" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/css");

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
//# sourceMappingURL=[reportId].js.map