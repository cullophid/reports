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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/Report/Report.tsx":
/*!**********************************!*\
  !*** ./client/Report/Report.tsx ***!
  \**********************************/
/*! exports provided: ReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPage", function() { return ReportPage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _codegen_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../codegen/graphql */ "./client/codegen/graphql.ts");
/* harmony import */ var _components_ErrorBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ErrorBox */ "./client/components/ErrorBox.tsx");
/* harmony import */ var _components_Crumbs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Crumbs */ "./client/components/Crumbs.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Header */ "./client/components/Header.tsx");
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Icon */ "./client/components/Icon.tsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Button */ "./client/components/Button.tsx");
/* harmony import */ var _hooks_drag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hooks/drag */ "./client/hooks/drag.ts");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../theme */ "./client/theme.ts");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! cuid */ "cuid");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_15__);





var _jsxFileName = "/Users/andreasmoller/code/reports/client/Report/Report.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;













const removeTypename = report => {
  const {
    __typename,
    slides
  } = report,
        reportData = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(report, ["__typename", "slides"]);

  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, reportData, {
    slides: slides.map((_ref2) => {
      let {
        __typename,
        charts
      } = _ref2,
          slideData = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref2, ["__typename", "charts"]);

      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, slideData, {
        charts: charts.map((_ref3) => {
          let {
            __typename
          } = _ref3,
              chartData = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref3, ["__typename"]);

          return chartData;
        })
      });
    })
  });
};

const getModifiers = e => new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_1___default.a([e.nativeEvent.metaKey && "meta", e.nativeEvent.ctrlKey && "ctrl", e.nativeEvent.altKey && "alt", e.nativeEvent.shiftKey && "shift"].filter(Boolean));

const ReportPage = props => {
  const {
    0: scale,
    1: setScale
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(1);
  const {
    0: tool,
    1: setTool
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("select");
  const {
    0: selection,
    1: setSelection
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]);
  const {
    0: undoHistory,
    1: setUndoHistory
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]);
  const {
    0: undoHistoryIndex,
    1: setUndoHistoryIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0);
  const reportQuery = Object(_codegen_graphql__WEBPACK_IMPORTED_MODULE_7__["useReportGetQuery"])({
    variables: {
      id: props.id
    },
    onCompleted: ({
      report
    }) => {
      setScale(window.innerWidth * 0.8 / report.width);
    }
  });
  const report = reportQuery.data && reportQuery.data.report;
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    if (report && undoHistory.length === 0) {
      setUndoHistory([report]);
    }
  }, [report]);
  const [_updateReport, updateReportQuery] = Object(_codegen_graphql__WEBPACK_IMPORTED_MODULE_7__["useReportUpdateMutation"])();

  const updateReport = (report, isUndo = false) => {
    if (!isUndo) {
      setUndoHistory([...undoHistory.slice(0, undoHistoryIndex + 1), report]);
      setUndoHistoryIndex(undoHistoryIndex + 1);
    }

    reportQuery.client.writeQuery({
      query: _codegen_graphql__WEBPACK_IMPORTED_MODULE_7__["ReportGetDocument"],
      variables: {
        id: report.id
      },
      data: {
        report
      }
    });
    return _updateReport({
      variables: {
        report: removeTypename(report)
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    const handler = () => {
      if (report) {
        setScale(window.innerWidth * 0.8 / report.width);
      }
    };

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [report]);
  const selectedSlide = report && (report.slides.find(s => s.id === props.slide) || report.slides[0]);

  const getDragBox = (pos, origin) => {
    return {
      x: Math.min(pos.x, origin.x) / scale,
      y: Math.min(pos.y, origin.y) / scale,
      width: Math.abs(pos.x - origin.x) / scale,
      height: Math.abs(pos.y - origin.y) / scale
    };
  };

  const {
    dragHandlers,
    dragPos,
    dragOrigin,
    isDragging,
    parentRef
  } = Object(_hooks_drag__WEBPACK_IMPORTED_MODULE_13__["useMouseDrag"])({
    onDragEnd: (pos, origin) => {
      const box = getDragBox(pos, origin);

      switch (tool) {
        case "insert_chart":
          {
            const newChart = {
              id: cuid__WEBPACK_IMPORTED_MODULE_15___default()(),
              x: Math.round(box.x),
              y: Math.round(box.y),
              width: Math.round(box.width),
              height: Math.round(box.height),
              __typename: "Chart"
            };

            const newReport = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, report, {
              slides: report.slides.map(slide => {
                if (slide.id === selectedSlide.id) {
                  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, slide, {
                    charts: [...slide.charts, newChart]
                  });
                } else {
                  return slide;
                }
              })
            });

            updateReport(newReport);
            setTool("select");
            setSelection([newChart]);
          }
      }
    }
  });
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Layout, {
    tabIndex: -1,
    onKeyDown: e => {
      const modifiers = getModifiers(e);

      switch (e.key) {
        case "Escape":
          setTool("select");

          if (tool === "select") {
            setSelection([]);
          }

          return e.preventDefault();

        case "c":
          if (modifiers.size === 0) {
            setTool("insert_chart");
            return e.preventDefault();
          }

        case "i":
          if (modifiers.size === 0) {
            setTool("insert_image");
            return e.preventDefault();
          }

        case "t":
          if (modifiers.size === 0) {
            setTool("insert_text");
            return e.preventDefault();
          }

        case "Backspace":
          {
            updateReport(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, report, {
              slides: report.slides.map(slide => Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, slide, {
                charts: slide.charts.filter(chart => selection.some(selection => selection.id === chart.id) === false)
              }))
            }));
          }

        case "z":
          if (modifiers.has("meta") && modifiers.has("shift")) {
            // Redo
            if (undoHistory.length <= undoHistoryIndex + 1) {
              return;
            }

            const newIndex = undoHistoryIndex + 1;
            updateReport(undoHistory[newIndex], true);
            setUndoHistoryIndex(newIndex);
            return e.preventDefault();
          }

          if (modifiers.has("meta")) {
            // undo
            if (undoHistoryIndex === 0) {
              return;
            }

            const newIndex = undoHistoryIndex - 1;
            updateReport(undoHistory[newIndex], true);
            setUndoHistoryIndex(newIndex);
            return e.preventDefault();
          }

      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }, (reportQuery.loading || updateReportQuery.loading) && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(LoadingIndicator, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: undefined
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Header__WEBPACK_IMPORTED_MODULE_10__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Header__WEBPACK_IMPORTED_MODULE_10__["HeaderSection"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Crumbs__WEBPACK_IMPORTED_MODULE_9__["Crumbs"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Crumbs__WEBPACK_IMPORTED_MODULE_9__["CrumbLink"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  }, "Home"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Crumbs__WEBPACK_IMPORTED_MODULE_9__["CrumbLink"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }, "Reports"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Crumbs__WEBPACK_IMPORTED_MODULE_9__["CrumbTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  }, report ? report.title : "...")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(NewElements, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Button__WEBPACK_IMPORTED_MODULE_12__["FlatButton"], {
    name: "insert_chart",
    onClick: () => setTool("insert_chart"),
    active: tool === "insert_chart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
    icon: "insert_chart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: undefined
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Button__WEBPACK_IMPORTED_MODULE_12__["FlatButton"], {
    name: "insert_image",
    onClick: () => setTool("insert_image"),
    active: tool === "insert_image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
    icon: "insert_photo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: undefined
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Button__WEBPACK_IMPORTED_MODULE_12__["FlatButton"], {
    name: "insert_text",
    onClick: () => setTool("insert_text"),
    active: tool === "insert_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
    icon: "insert_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: undefined
  }))))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    style: {
      position: "absolute",
      bottom: 16,
      right: 16
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: undefined
  }, scale), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Stage, {
    tool: tool,
    scale: scale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: undefined
  }, selectedSlide && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Slide, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: parentRef
  }, dragHandlers, {
    width: report.width,
    height: report.height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: undefined
  }), ["insert_chart", "insert_image", "insert_text"].includes(tool) && isDragging && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(DragBox, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getDragBox(dragPos, dragOrigin), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  })), selectedSlide.charts.map(chart => {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Chart, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: chart.id,
      selected: selection.some(s => s.id === chart.id)
    }, chart, {
      onClick: e => {
        if (tool === "select") {
          setSelection(e.nativeEvent.shiftKey ? [...selection, chart] : [chart]);
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: undefined
    }));
  })), report && !selectedSlide && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Center, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_Button__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    name: "create slide",
    onClick: () => {
      updateReport(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, report, {
        slides: [...report.slides, {
          id: cuid__WEBPACK_IMPORTED_MODULE_15___default()(),
          charts: []
        }]
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: undefined
  }, "Create You first Slide")), reportQuery.error && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_components_ErrorBox__WEBPACK_IMPORTED_MODULE_8__["ErrorBox"], {
    error: reportQuery.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: undefined
  })));
};

const Chart = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_4___default()("div", {
  target: "e1nne1bm0",
  label: "Chart"
})("position:absolute;left:", p => p.x, "px;top:", p => p.y, "px;width:", p => p.width, "px;height:", p => p.height, "px;background:#f0f0f0;border:1px solid #dedede;", p => p.selected &&
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["css"])("border:1px dashed ", _theme__WEBPACK_IMPORTED_MODULE_14__["colors"].primary, ";label:Chart;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L1JlcG9ydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNFIwQiIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L1JlcG9ydC9SZXBvcnQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSwgdXNlUmVwb3J0VXBkYXRlTXV0YXRpb24sIENoYXJ0RnJhZ21lbnQsIFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzLCBSZXBvcnRGcmFnbWVudCwgUmVwb3J0R2V0RG9jdW1lbnQgfSBmcm9tIFwiLi4vY29kZWdlbi9ncmFwaHFsXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEVycm9yQm94IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRXJyb3JCb3hcIjtcbmltcG9ydCB7IENydW1icywgQ3J1bWJUaXRsZSwgQ3J1bWJMaW5rIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3J1bWJzXCI7XG5pbXBvcnQgeyBIZWFkZXIsIEhlYWRlclNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uXCI7XG5pbXBvcnQgeyBGbGF0QnV0dG9uLCBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBLZXlib2FyZEV2ZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IHVzZU1vdXNlRHJhZywgUG9zIH0gZnJvbSBcIi4uL2hvb2tzL2RyYWdcIjtcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IGN1aWQgZnJvbSBcImN1aWRcIlxuXG50eXBlIFRvb2wgPVxuICB8IFwiaW5zZXJ0X2NoYXJ0XCJcbiAgfCBcImluc2VydF9pbWFnZVwiXG4gIHwgXCJpbnNlcnRfdGV4dFwiXG4gIHwgXCJzZWxlY3RcIlxuXG5cbnR5cGUgU2VsZWN0aW9uID0gQ2hhcnRGcmFnbWVudFxuXG5cbmNvbnN0IHJlbW92ZVR5cGVuYW1lID0gKHJlcG9ydDogUmVwb3J0RnJhZ21lbnQpOiBSZXBvcnRVcGRhdGVNdXRhdGlvblZhcmlhYmxlc1tcInJlcG9ydFwiXSA9PiB7XG4gIGNvbnN0IHsgX190eXBlbmFtZSwgc2xpZGVzLCAuLi5yZXBvcnREYXRhIH0gPSByZXBvcnQ7XG4gIHJldHVybiB7XG4gICAgLi4ucmVwb3J0RGF0YSxcbiAgICBzbGlkZXM6IHNsaWRlcy5tYXAoKHsgX190eXBlbmFtZSwgY2hhcnRzLCAuLi5zbGlkZURhdGEgfSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2xpZGVEYXRhLFxuICAgICAgICBjaGFydHM6IGNoYXJ0cy5tYXAoKHsgX190eXBlbmFtZSwgLi4uY2hhcnREYXRhIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY2hhcnREYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBnZXRNb2RpZmllcnMgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT5cbiAgbmV3IFNldChbXG4gICAgZS5uYXRpdmVFdmVudC5tZXRhS2V5ICYmIFwibWV0YVwiLFxuICAgIGUubmF0aXZlRXZlbnQuY3RybEtleSAmJiBcImN0cmxcIixcbiAgICBlLm5hdGl2ZUV2ZW50LmFsdEtleSAmJiBcImFsdFwiLFxuICAgIGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgJiYgXCJzaGlmdFwiLFxuICBdLmZpbHRlcihCb29sZWFuKVxuICApXG5cbmV4cG9ydCBjb25zdCBSZXBvcnRQYWdlID0gKHByb3BzOiB7IGlkOiBzdHJpbmcsIHNsaWRlPzogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZSgxKVxuXG5cbiAgY29uc3QgW3Rvb2wsIHNldFRvb2xdID0gdXNlU3RhdGU8VG9vbD4oXCJzZWxlY3RcIilcbiAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlPFNlbGVjdGlvbltdPihbXSlcblxuICBjb25zdCBbdW5kb0hpc3RvcnksIHNldFVuZG9IaXN0b3J5XSA9IHVzZVN0YXRlPFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzW1wicmVwb3J0XCJdW10+KFtdKVxuICBjb25zdCBbdW5kb0hpc3RvcnlJbmRleCwgc2V0VW5kb0hpc3RvcnlJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cbiAgY29uc3QgcmVwb3J0UXVlcnkgPSB1c2VSZXBvcnRHZXRRdWVyeSh7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBpZDogcHJvcHMuaWRcbiAgICB9LFxuICAgIG9uQ29tcGxldGVkOiAoeyByZXBvcnQgfSkgPT4ge1xuICAgICAgc2V0U2NhbGUod2luZG93LmlubmVyV2lkdGggKiAwLjggLyByZXBvcnQud2lkdGgpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcG9ydCA9IHJlcG9ydFF1ZXJ5LmRhdGEgJiYgcmVwb3J0UXVlcnkuZGF0YS5yZXBvcnRcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZXBvcnQgJiYgdW5kb0hpc3RvcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRVbmRvSGlzdG9yeShbcmVwb3J0XSlcbiAgICB9XG4gIH0sIFtyZXBvcnRdKVxuXG4gIGNvbnN0IFtfdXBkYXRlUmVwb3J0LCB1cGRhdGVSZXBvcnRRdWVyeV0gPSB1c2VSZXBvcnRVcGRhdGVNdXRhdGlvbigpXG5cbiAgY29uc3QgdXBkYXRlUmVwb3J0ID0gKHJlcG9ydDogUmVwb3J0VXBkYXRlTXV0YXRpb25WYXJpYWJsZXNbXCJyZXBvcnRcIl0sIGlzVW5kbyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKCFpc1VuZG8pIHtcbiAgICAgIHNldFVuZG9IaXN0b3J5KFsuLi51bmRvSGlzdG9yeS5zbGljZSgwLCB1bmRvSGlzdG9yeUluZGV4ICsgMSksIHJlcG9ydF0pXG4gICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KHVuZG9IaXN0b3J5SW5kZXggKyAxKVxuXG4gICAgfVxuICAgIHJlcG9ydFF1ZXJ5LmNsaWVudC53cml0ZVF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBSZXBvcnRHZXREb2N1bWVudCxcbiAgICAgIHZhcmlhYmxlczogeyBpZDogcmVwb3J0LmlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHJlcG9ydFxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIF91cGRhdGVSZXBvcnQoe1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHJlcG9ydDogcmVtb3ZlVHlwZW5hbWUocmVwb3J0IGFzIFJlcG9ydEZyYWdtZW50KVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHJlcG9ydCkge1xuXG4gICAgICAgIHNldFNjYWxlKHdpbmRvdy5pbm5lcldpZHRoICogMC44IC8gcmVwb3J0LndpZHRoKVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlcilcbiAgfSwgW3JlcG9ydF0pXG5cbiAgY29uc3Qgc2VsZWN0ZWRTbGlkZSA9IHJlcG9ydCAmJiAocmVwb3J0LnNsaWRlcy5maW5kKHMgPT4gcy5pZCA9PT0gcHJvcHMuc2xpZGUpIHx8IHJlcG9ydC5zbGlkZXNbMF0pO1xuXG4gIGNvbnN0IGdldERyYWdCb3ggPSAocG9zOiBQb3MsIG9yaWdpbjogUG9zKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE1hdGgubWluKHBvcy54LCBvcmlnaW4ueCkgLyBzY2FsZSxcbiAgICAgIHk6IE1hdGgubWluKHBvcy55LCBvcmlnaW4ueSkgLyBzY2FsZSxcbiAgICAgIHdpZHRoOiBNYXRoLmFicyhwb3MueCAtIG9yaWdpbi54KSAvIHNjYWxlLFxuICAgICAgaGVpZ2h0OiBNYXRoLmFicyhwb3MueSAtIG9yaWdpbi55KSAvIHNjYWxlLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgZHJhZ0hhbmRsZXJzLCBkcmFnUG9zLCBkcmFnT3JpZ2luLCBpc0RyYWdnaW5nLCBwYXJlbnRSZWYgfSA9IHVzZU1vdXNlRHJhZyh7XG4gICAgb25EcmFnRW5kOiAocG9zLCBvcmlnaW4pID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGdldERyYWdCb3gocG9zLCBvcmlnaW4pO1xuICAgICAgc3dpdGNoICh0b29sKSB7XG4gICAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjoge1xuXG4gICAgICAgICAgY29uc3QgbmV3Q2hhcnQgPSB7XG4gICAgICAgICAgICBpZDogY3VpZCgpLFxuICAgICAgICAgICAgeDogTWF0aC5yb3VuZChib3gueCksXG4gICAgICAgICAgICB5OiBNYXRoLnJvdW5kKGJveC55KSxcbiAgICAgICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKGJveC53aWR0aCksXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQoYm94LmhlaWdodCksXG4gICAgICAgICAgICBfX3R5cGVuYW1lOiBcIkNoYXJ0XCIgYXMgXCJDaGFydFwiXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbmV3UmVwb3J0ID0ge1xuICAgICAgICAgICAgLi4ucmVwb3J0LFxuICAgICAgICAgICAgc2xpZGVzOiByZXBvcnQuc2xpZGVzLm1hcChzbGlkZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzbGlkZS5pZCA9PT0gc2VsZWN0ZWRTbGlkZS5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAuLi5zbGlkZSxcbiAgICAgICAgICAgICAgICAgIGNoYXJ0czogWy4uLnNsaWRlLmNoYXJ0cywgbmV3Q2hhcnRdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzbGlkZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVSZXBvcnQobmV3UmVwb3J0KVxuICAgICAgICAgIHNldFRvb2woXCJzZWxlY3RcIik7XG4gICAgICAgICAgc2V0U2VsZWN0aW9uKFtuZXdDaGFydF0pXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGFiSW5kZXg9ey0xfSBvbktleURvd249e2UgPT4ge1xuICAgICAgY29uc3QgbW9kaWZpZXJzID0gZ2V0TW9kaWZpZXJzKGUpO1xuICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgICAgc2V0VG9vbChcInNlbGVjdFwiKVxuICAgICAgICAgIGlmICh0b29sID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3Rpb24oW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjYXNlIFwiY1wiOlxuICAgICAgICAgIGlmIChtb2RpZmllcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgc2V0VG9vbChcImluc2VydF9jaGFydFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJpXCI6XG4gICAgICAgICAgaWYgKG1vZGlmaWVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBzZXRUb29sKFwiaW5zZXJ0X2ltYWdlXCIpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcInRcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHNldFRvb2woXCJpbnNlcnRfdGV4dFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjoge1xuICAgICAgICAgIHVwZGF0ZVJlcG9ydCh7XG4gICAgICAgICAgICAuLi5yZXBvcnQsXG4gICAgICAgICAgICBzbGlkZXM6IHJlcG9ydC5zbGlkZXMubWFwKHNsaWRlID0+ICh7XG4gICAgICAgICAgICAgIC4uLnNsaWRlLFxuICAgICAgICAgICAgICBjaGFydHM6IHNsaWRlLmNoYXJ0cy5maWx0ZXIoY2hhcnQgPT4gc2VsZWN0aW9uLnNvbWUoc2VsZWN0aW9uID0+IHNlbGVjdGlvbi5pZCA9PT0gY2hhcnQuaWQpID09PSBmYWxzZSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikgJiYgbW9kaWZpZXJzLmhhcyhcInNoaWZ0XCIpKSB7IC8vIFJlZG9cbiAgICAgICAgICAgIGlmICh1bmRvSGlzdG9yeS5sZW5ndGggPD0gdW5kb0hpc3RvcnlJbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHVuZG9IaXN0b3J5SW5kZXggKyAxO1xuICAgICAgICAgICAgdXBkYXRlUmVwb3J0KHVuZG9IaXN0b3J5W25ld0luZGV4XSwgdHJ1ZSk7XG4gICAgICAgICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KG5ld0luZGV4KVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikpIHsgLy8gdW5kb1xuICAgICAgICAgICAgaWYgKHVuZG9IaXN0b3J5SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdW5kb0hpc3RvcnlJbmRleCAtIDE7XG4gICAgICAgICAgICB1cGRhdGVSZXBvcnQodW5kb0hpc3RvcnlbbmV3SW5kZXhdLCB0cnVlKTtcbiAgICAgICAgICAgIHNldFVuZG9IaXN0b3J5SW5kZXgobmV3SW5kZXgpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgfVxuICAgIH19PlxuICAgICAgeyhyZXBvcnRRdWVyeS5sb2FkaW5nIHx8IHVwZGF0ZVJlcG9ydFF1ZXJ5LmxvYWRpbmcpICYmIDxMb2FkaW5nSW5kaWNhdG9yIC8+fVxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPEhlYWRlclNlY3Rpb24+XG4gICAgICAgICAgPENydW1icz5cbiAgICAgICAgICAgIDxDcnVtYkxpbmsgaHJlZj1cIi9cIj5Ib21lPC9DcnVtYkxpbms+XG4gICAgICAgICAgICA8Q3J1bWJMaW5rIGhyZWY9XCIvXCI+UmVwb3J0czwvQ3J1bWJMaW5rPlxuICAgICAgICAgICAgPENydW1iVGl0bGU+e3JlcG9ydCA/IHJlcG9ydC50aXRsZSA6IFwiLi4uXCJ9PC9DcnVtYlRpdGxlPlxuICAgICAgICAgIDwvQ3J1bWJzID5cbiAgICAgICAgICA8TmV3RWxlbWVudHM+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2NoYXJ0XCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9jaGFydFwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9jaGFydFwifT5cbiAgICAgICAgICAgICAgPEljb24gaWNvbj1cImluc2VydF9jaGFydFwiIC8+XG4gICAgICAgICAgICA8L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2ltYWdlXCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9pbWFnZVwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9pbWFnZVwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3Bob3RvXCIgLz48L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X3RleHRcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb29sKFwiaW5zZXJ0X3RleHRcIil9IGFjdGl2ZT17dG9vbCA9PT0gXCJpbnNlcnRfdGV4dFwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3RleHRcIiAvPjwvRmxhdEJ1dHRvbj5cbiAgICAgICAgICA8L05ld0VsZW1lbnRzPlxuICAgICAgICA8L0hlYWRlclNlY3Rpb24+XG4gICAgICA8L0hlYWRlciA+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGJvdHRvbTogMTYsIHJpZ2h0OiAxNiB9fT57c2NhbGV9PC9kaXY+XG4gICAgICA8U3RhZ2UgdG9vbD17dG9vbH0gc2NhbGU9e3NjYWxlfT5cblxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRTbGlkZSAmJlxuICAgICAgICAgIDxTbGlkZSByZWY9e3BhcmVudFJlZn0gey4uLmRyYWdIYW5kbGVyc30gd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cbiAgICAgICAgICAgIHtbXCJpbnNlcnRfY2hhcnRcIiwgXCJpbnNlcnRfaW1hZ2VcIiwgXCJpbnNlcnRfdGV4dFwiXS5pbmNsdWRlcyh0b29sKSAmJiBpc0RyYWdnaW5nICYmXG4gICAgICAgICAgICAgIDxEcmFnQm94IHsuLi5nZXREcmFnQm94KGRyYWdQb3MsIGRyYWdPcmlnaW4pfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3NlbGVjdGVkU2xpZGUuY2hhcnRzLm1hcChjaGFydCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICA8Q2hhcnQga2V5PXtjaGFydC5pZH0gc2VsZWN0ZWQ9e3NlbGVjdGlvbi5zb21lKHMgPT4gcy5pZCA9PT0gY2hhcnQuaWQpfSB7Li4uY2hhcnR9IG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHRvb2wgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgPyBbLi4uc2VsZWN0aW9uLCBjaGFydF0gOiBbY2hhcnRdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICB9XG4gICAgICAgIHtyZXBvcnQgJiYgIXNlbGVjdGVkU2xpZGUgJiZcbiAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPVwiY3JlYXRlIHNsaWRlXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB1cGRhdGVSZXBvcnQoe1xuICAgICAgICAgICAgICAgIC4uLnJlcG9ydCxcbiAgICAgICAgICAgICAgICBzbGlkZXM6IFtcbiAgICAgICAgICAgICAgICAgIC4uLnJlcG9ydC5zbGlkZXMsXG4gICAgICAgICAgICAgICAgICB7IGlkOiBjdWlkKCksIGNoYXJ0czogW10gfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICBDcmVhdGUgWW91IGZpcnN0IFNsaWRlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgfVxuICAgICAgICB7cmVwb3J0UXVlcnkuZXJyb3IgJiYgPEVycm9yQm94IGVycm9yPXtyZXBvcnRRdWVyeS5lcnJvcn0gLz59XG4gICAgICA8L1N0YWdlPlxuXG4gICAgPC9MYXlvdXQgPlxuICApXG59XG5cbmNvbnN0IENoYXJ0ID0gc3R5bGVkLmRpdjxDaGFydEZyYWdtZW50ICYgeyBzZWxlY3RlZDogYm9vbGVhbiB9PmBcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGxlZnQ6ICR7cCA9PiBwLnh9cHg7XG4gIHRvcDogJHtwID0+IHAueX1weDtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodH1weDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgJHtwID0+IHAuc2VsZWN0ZWQgJiYgY3NzYGJvcmRlcjogMXB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtgfTtcbmBcblxuXG5jb25zdCBDZW50ZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6MTAwJTtcbiAgZGlzcGxheTpncmlkO1xuICBwbGFjZS1jb250ZW50OmNlbnRlciBjZW50ZXI7XG4gIGBcblxuXG50eXBlIERyYWdCb3hQcm9wcyA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG5jb25zdCBEcmFnQm94ID0gc3R5bGVkLmRpdjxEcmFnQm94UHJvcHM+YFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgd2lkdGg6JHtwID0+IHAud2lkdGh9cHg7XG4gIGhlaWdodDoke3AgPT4gcC5oZWlnaHR9cHg7XG4gIGxlZnQ6JHtwID0+IHAueH1weDtcbiAgdG9wOiR7cCA9PiBwLnl9cHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtcbmBcblxuY29uc3QgU2xpZGUgPSBzdHlsZWQuc2VjdGlvbjx7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH0+YFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6JHtwID0+IHAuaGVpZ2h0fXB4O1xuYFxuXG5jb25zdCBOZXdFbGVtZW50cyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC1nYXA6IDRweDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIHN0YXJ0O1xuYFxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIGdyaWQtZ2FwOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiNmNWY1ZjU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gIHBsYWNlLWNvbnRlbnQ6IHN0YXJ0IHN0cmV0Y2g7XG4gIG92ZXJmbG93OmhpZGRlbjtcbmBcblxuY29uc3QgU3RhZ2UgPSBzdHlsZWQubWFpbjx7IHRvb2w6IFRvb2wsIHNjYWxlOiBudW1iZXIgfT5gXG4gIGRpc3BsYXk6Z3JpZDtcbiAgd2lkdGg6MTAwJTtcbiAgcGxhY2UtY29udGVudDpjZW50ZXIgY2VudGVyO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gICR7cCA9PiB7XG4gICAgc3dpdGNoIChwLnRvb2wpIHtcbiAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfaW1hZ2VcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfdGV4dFwiOlxuICAgICAgICByZXR1cm4gY3NzYFxuICAgICAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgICAgICAgYFxuICAgIH1cbiAgfX1cbiAgJiA+ICoge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoJHtwID0+IHAuc2NhbGV9KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ0luZGljYXRvciA9ICgpID0+XG4gIDxMb2FkaW5nV3JhcHBlcj5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0+LjwvTG9hZGluZ0RvdD5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MjAwfT4uPC9Mb2FkaW5nRG90PlxuICAgIDxMb2FkaW5nRG90IGRlbGF5PXs0MDB9Pi48L0xvYWRpbmdEb3Q+XG4gIDwvTG9hZGluZ1dyYXBwZXI+XG5cbmNvbnN0IGp1bXBBbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6MDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eToxO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxucG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG5gXG5jb25zdCBMb2FkaW5nRG90ID0gc3R5bGVkLnNwYW48eyBkZWxheTogbnVtYmVyIH0+YFxuICBhbmltYXRpb246JHtqdW1wQW5pbWF0aW9ufSAxcyBlYXNlIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6JHtwID0+IHAuZGVsYXl9bXM7XG5gIl19 */"), "label:Chart;"), ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L1JlcG9ydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb1IrRCIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L1JlcG9ydC9SZXBvcnQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSwgdXNlUmVwb3J0VXBkYXRlTXV0YXRpb24sIENoYXJ0RnJhZ21lbnQsIFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzLCBSZXBvcnRGcmFnbWVudCwgUmVwb3J0R2V0RG9jdW1lbnQgfSBmcm9tIFwiLi4vY29kZWdlbi9ncmFwaHFsXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEVycm9yQm94IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRXJyb3JCb3hcIjtcbmltcG9ydCB7IENydW1icywgQ3J1bWJUaXRsZSwgQ3J1bWJMaW5rIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3J1bWJzXCI7XG5pbXBvcnQgeyBIZWFkZXIsIEhlYWRlclNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uXCI7XG5pbXBvcnQgeyBGbGF0QnV0dG9uLCBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBLZXlib2FyZEV2ZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IHVzZU1vdXNlRHJhZywgUG9zIH0gZnJvbSBcIi4uL2hvb2tzL2RyYWdcIjtcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IGN1aWQgZnJvbSBcImN1aWRcIlxuXG50eXBlIFRvb2wgPVxuICB8IFwiaW5zZXJ0X2NoYXJ0XCJcbiAgfCBcImluc2VydF9pbWFnZVwiXG4gIHwgXCJpbnNlcnRfdGV4dFwiXG4gIHwgXCJzZWxlY3RcIlxuXG5cbnR5cGUgU2VsZWN0aW9uID0gQ2hhcnRGcmFnbWVudFxuXG5cbmNvbnN0IHJlbW92ZVR5cGVuYW1lID0gKHJlcG9ydDogUmVwb3J0RnJhZ21lbnQpOiBSZXBvcnRVcGRhdGVNdXRhdGlvblZhcmlhYmxlc1tcInJlcG9ydFwiXSA9PiB7XG4gIGNvbnN0IHsgX190eXBlbmFtZSwgc2xpZGVzLCAuLi5yZXBvcnREYXRhIH0gPSByZXBvcnQ7XG4gIHJldHVybiB7XG4gICAgLi4ucmVwb3J0RGF0YSxcbiAgICBzbGlkZXM6IHNsaWRlcy5tYXAoKHsgX190eXBlbmFtZSwgY2hhcnRzLCAuLi5zbGlkZURhdGEgfSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2xpZGVEYXRhLFxuICAgICAgICBjaGFydHM6IGNoYXJ0cy5tYXAoKHsgX190eXBlbmFtZSwgLi4uY2hhcnREYXRhIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY2hhcnREYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBnZXRNb2RpZmllcnMgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT5cbiAgbmV3IFNldChbXG4gICAgZS5uYXRpdmVFdmVudC5tZXRhS2V5ICYmIFwibWV0YVwiLFxuICAgIGUubmF0aXZlRXZlbnQuY3RybEtleSAmJiBcImN0cmxcIixcbiAgICBlLm5hdGl2ZUV2ZW50LmFsdEtleSAmJiBcImFsdFwiLFxuICAgIGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgJiYgXCJzaGlmdFwiLFxuICBdLmZpbHRlcihCb29sZWFuKVxuICApXG5cbmV4cG9ydCBjb25zdCBSZXBvcnRQYWdlID0gKHByb3BzOiB7IGlkOiBzdHJpbmcsIHNsaWRlPzogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZSgxKVxuXG5cbiAgY29uc3QgW3Rvb2wsIHNldFRvb2xdID0gdXNlU3RhdGU8VG9vbD4oXCJzZWxlY3RcIilcbiAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlPFNlbGVjdGlvbltdPihbXSlcblxuICBjb25zdCBbdW5kb0hpc3RvcnksIHNldFVuZG9IaXN0b3J5XSA9IHVzZVN0YXRlPFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzW1wicmVwb3J0XCJdW10+KFtdKVxuICBjb25zdCBbdW5kb0hpc3RvcnlJbmRleCwgc2V0VW5kb0hpc3RvcnlJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cbiAgY29uc3QgcmVwb3J0UXVlcnkgPSB1c2VSZXBvcnRHZXRRdWVyeSh7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBpZDogcHJvcHMuaWRcbiAgICB9LFxuICAgIG9uQ29tcGxldGVkOiAoeyByZXBvcnQgfSkgPT4ge1xuICAgICAgc2V0U2NhbGUod2luZG93LmlubmVyV2lkdGggKiAwLjggLyByZXBvcnQud2lkdGgpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcG9ydCA9IHJlcG9ydFF1ZXJ5LmRhdGEgJiYgcmVwb3J0UXVlcnkuZGF0YS5yZXBvcnRcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZXBvcnQgJiYgdW5kb0hpc3RvcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRVbmRvSGlzdG9yeShbcmVwb3J0XSlcbiAgICB9XG4gIH0sIFtyZXBvcnRdKVxuXG4gIGNvbnN0IFtfdXBkYXRlUmVwb3J0LCB1cGRhdGVSZXBvcnRRdWVyeV0gPSB1c2VSZXBvcnRVcGRhdGVNdXRhdGlvbigpXG5cbiAgY29uc3QgdXBkYXRlUmVwb3J0ID0gKHJlcG9ydDogUmVwb3J0VXBkYXRlTXV0YXRpb25WYXJpYWJsZXNbXCJyZXBvcnRcIl0sIGlzVW5kbyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKCFpc1VuZG8pIHtcbiAgICAgIHNldFVuZG9IaXN0b3J5KFsuLi51bmRvSGlzdG9yeS5zbGljZSgwLCB1bmRvSGlzdG9yeUluZGV4ICsgMSksIHJlcG9ydF0pXG4gICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KHVuZG9IaXN0b3J5SW5kZXggKyAxKVxuXG4gICAgfVxuICAgIHJlcG9ydFF1ZXJ5LmNsaWVudC53cml0ZVF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBSZXBvcnRHZXREb2N1bWVudCxcbiAgICAgIHZhcmlhYmxlczogeyBpZDogcmVwb3J0LmlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHJlcG9ydFxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIF91cGRhdGVSZXBvcnQoe1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHJlcG9ydDogcmVtb3ZlVHlwZW5hbWUocmVwb3J0IGFzIFJlcG9ydEZyYWdtZW50KVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHJlcG9ydCkge1xuXG4gICAgICAgIHNldFNjYWxlKHdpbmRvdy5pbm5lcldpZHRoICogMC44IC8gcmVwb3J0LndpZHRoKVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlcilcbiAgfSwgW3JlcG9ydF0pXG5cbiAgY29uc3Qgc2VsZWN0ZWRTbGlkZSA9IHJlcG9ydCAmJiAocmVwb3J0LnNsaWRlcy5maW5kKHMgPT4gcy5pZCA9PT0gcHJvcHMuc2xpZGUpIHx8IHJlcG9ydC5zbGlkZXNbMF0pO1xuXG4gIGNvbnN0IGdldERyYWdCb3ggPSAocG9zOiBQb3MsIG9yaWdpbjogUG9zKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE1hdGgubWluKHBvcy54LCBvcmlnaW4ueCkgLyBzY2FsZSxcbiAgICAgIHk6IE1hdGgubWluKHBvcy55LCBvcmlnaW4ueSkgLyBzY2FsZSxcbiAgICAgIHdpZHRoOiBNYXRoLmFicyhwb3MueCAtIG9yaWdpbi54KSAvIHNjYWxlLFxuICAgICAgaGVpZ2h0OiBNYXRoLmFicyhwb3MueSAtIG9yaWdpbi55KSAvIHNjYWxlLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgZHJhZ0hhbmRsZXJzLCBkcmFnUG9zLCBkcmFnT3JpZ2luLCBpc0RyYWdnaW5nLCBwYXJlbnRSZWYgfSA9IHVzZU1vdXNlRHJhZyh7XG4gICAgb25EcmFnRW5kOiAocG9zLCBvcmlnaW4pID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGdldERyYWdCb3gocG9zLCBvcmlnaW4pO1xuICAgICAgc3dpdGNoICh0b29sKSB7XG4gICAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjoge1xuXG4gICAgICAgICAgY29uc3QgbmV3Q2hhcnQgPSB7XG4gICAgICAgICAgICBpZDogY3VpZCgpLFxuICAgICAgICAgICAgeDogTWF0aC5yb3VuZChib3gueCksXG4gICAgICAgICAgICB5OiBNYXRoLnJvdW5kKGJveC55KSxcbiAgICAgICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKGJveC53aWR0aCksXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQoYm94LmhlaWdodCksXG4gICAgICAgICAgICBfX3R5cGVuYW1lOiBcIkNoYXJ0XCIgYXMgXCJDaGFydFwiXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbmV3UmVwb3J0ID0ge1xuICAgICAgICAgICAgLi4ucmVwb3J0LFxuICAgICAgICAgICAgc2xpZGVzOiByZXBvcnQuc2xpZGVzLm1hcChzbGlkZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzbGlkZS5pZCA9PT0gc2VsZWN0ZWRTbGlkZS5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAuLi5zbGlkZSxcbiAgICAgICAgICAgICAgICAgIGNoYXJ0czogWy4uLnNsaWRlLmNoYXJ0cywgbmV3Q2hhcnRdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzbGlkZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVSZXBvcnQobmV3UmVwb3J0KVxuICAgICAgICAgIHNldFRvb2woXCJzZWxlY3RcIik7XG4gICAgICAgICAgc2V0U2VsZWN0aW9uKFtuZXdDaGFydF0pXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGFiSW5kZXg9ey0xfSBvbktleURvd249e2UgPT4ge1xuICAgICAgY29uc3QgbW9kaWZpZXJzID0gZ2V0TW9kaWZpZXJzKGUpO1xuICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgICAgc2V0VG9vbChcInNlbGVjdFwiKVxuICAgICAgICAgIGlmICh0b29sID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3Rpb24oW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjYXNlIFwiY1wiOlxuICAgICAgICAgIGlmIChtb2RpZmllcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgc2V0VG9vbChcImluc2VydF9jaGFydFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJpXCI6XG4gICAgICAgICAgaWYgKG1vZGlmaWVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBzZXRUb29sKFwiaW5zZXJ0X2ltYWdlXCIpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcInRcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHNldFRvb2woXCJpbnNlcnRfdGV4dFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjoge1xuICAgICAgICAgIHVwZGF0ZVJlcG9ydCh7XG4gICAgICAgICAgICAuLi5yZXBvcnQsXG4gICAgICAgICAgICBzbGlkZXM6IHJlcG9ydC5zbGlkZXMubWFwKHNsaWRlID0+ICh7XG4gICAgICAgICAgICAgIC4uLnNsaWRlLFxuICAgICAgICAgICAgICBjaGFydHM6IHNsaWRlLmNoYXJ0cy5maWx0ZXIoY2hhcnQgPT4gc2VsZWN0aW9uLnNvbWUoc2VsZWN0aW9uID0+IHNlbGVjdGlvbi5pZCA9PT0gY2hhcnQuaWQpID09PSBmYWxzZSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikgJiYgbW9kaWZpZXJzLmhhcyhcInNoaWZ0XCIpKSB7IC8vIFJlZG9cbiAgICAgICAgICAgIGlmICh1bmRvSGlzdG9yeS5sZW5ndGggPD0gdW5kb0hpc3RvcnlJbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHVuZG9IaXN0b3J5SW5kZXggKyAxO1xuICAgICAgICAgICAgdXBkYXRlUmVwb3J0KHVuZG9IaXN0b3J5W25ld0luZGV4XSwgdHJ1ZSk7XG4gICAgICAgICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KG5ld0luZGV4KVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikpIHsgLy8gdW5kb1xuICAgICAgICAgICAgaWYgKHVuZG9IaXN0b3J5SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdW5kb0hpc3RvcnlJbmRleCAtIDE7XG4gICAgICAgICAgICB1cGRhdGVSZXBvcnQodW5kb0hpc3RvcnlbbmV3SW5kZXhdLCB0cnVlKTtcbiAgICAgICAgICAgIHNldFVuZG9IaXN0b3J5SW5kZXgobmV3SW5kZXgpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgfVxuICAgIH19PlxuICAgICAgeyhyZXBvcnRRdWVyeS5sb2FkaW5nIHx8IHVwZGF0ZVJlcG9ydFF1ZXJ5LmxvYWRpbmcpICYmIDxMb2FkaW5nSW5kaWNhdG9yIC8+fVxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPEhlYWRlclNlY3Rpb24+XG4gICAgICAgICAgPENydW1icz5cbiAgICAgICAgICAgIDxDcnVtYkxpbmsgaHJlZj1cIi9cIj5Ib21lPC9DcnVtYkxpbms+XG4gICAgICAgICAgICA8Q3J1bWJMaW5rIGhyZWY9XCIvXCI+UmVwb3J0czwvQ3J1bWJMaW5rPlxuICAgICAgICAgICAgPENydW1iVGl0bGU+e3JlcG9ydCA/IHJlcG9ydC50aXRsZSA6IFwiLi4uXCJ9PC9DcnVtYlRpdGxlPlxuICAgICAgICAgIDwvQ3J1bWJzID5cbiAgICAgICAgICA8TmV3RWxlbWVudHM+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2NoYXJ0XCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9jaGFydFwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9jaGFydFwifT5cbiAgICAgICAgICAgICAgPEljb24gaWNvbj1cImluc2VydF9jaGFydFwiIC8+XG4gICAgICAgICAgICA8L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2ltYWdlXCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9pbWFnZVwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9pbWFnZVwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3Bob3RvXCIgLz48L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X3RleHRcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb29sKFwiaW5zZXJ0X3RleHRcIil9IGFjdGl2ZT17dG9vbCA9PT0gXCJpbnNlcnRfdGV4dFwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3RleHRcIiAvPjwvRmxhdEJ1dHRvbj5cbiAgICAgICAgICA8L05ld0VsZW1lbnRzPlxuICAgICAgICA8L0hlYWRlclNlY3Rpb24+XG4gICAgICA8L0hlYWRlciA+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGJvdHRvbTogMTYsIHJpZ2h0OiAxNiB9fT57c2NhbGV9PC9kaXY+XG4gICAgICA8U3RhZ2UgdG9vbD17dG9vbH0gc2NhbGU9e3NjYWxlfT5cblxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRTbGlkZSAmJlxuICAgICAgICAgIDxTbGlkZSByZWY9e3BhcmVudFJlZn0gey4uLmRyYWdIYW5kbGVyc30gd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cbiAgICAgICAgICAgIHtbXCJpbnNlcnRfY2hhcnRcIiwgXCJpbnNlcnRfaW1hZ2VcIiwgXCJpbnNlcnRfdGV4dFwiXS5pbmNsdWRlcyh0b29sKSAmJiBpc0RyYWdnaW5nICYmXG4gICAgICAgICAgICAgIDxEcmFnQm94IHsuLi5nZXREcmFnQm94KGRyYWdQb3MsIGRyYWdPcmlnaW4pfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3NlbGVjdGVkU2xpZGUuY2hhcnRzLm1hcChjaGFydCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICA8Q2hhcnQga2V5PXtjaGFydC5pZH0gc2VsZWN0ZWQ9e3NlbGVjdGlvbi5zb21lKHMgPT4gcy5pZCA9PT0gY2hhcnQuaWQpfSB7Li4uY2hhcnR9IG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHRvb2wgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgPyBbLi4uc2VsZWN0aW9uLCBjaGFydF0gOiBbY2hhcnRdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICB9XG4gICAgICAgIHtyZXBvcnQgJiYgIXNlbGVjdGVkU2xpZGUgJiZcbiAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPVwiY3JlYXRlIHNsaWRlXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB1cGRhdGVSZXBvcnQoe1xuICAgICAgICAgICAgICAgIC4uLnJlcG9ydCxcbiAgICAgICAgICAgICAgICBzbGlkZXM6IFtcbiAgICAgICAgICAgICAgICAgIC4uLnJlcG9ydC5zbGlkZXMsXG4gICAgICAgICAgICAgICAgICB7IGlkOiBjdWlkKCksIGNoYXJ0czogW10gfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICBDcmVhdGUgWW91IGZpcnN0IFNsaWRlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgfVxuICAgICAgICB7cmVwb3J0UXVlcnkuZXJyb3IgJiYgPEVycm9yQm94IGVycm9yPXtyZXBvcnRRdWVyeS5lcnJvcn0gLz59XG4gICAgICA8L1N0YWdlPlxuXG4gICAgPC9MYXlvdXQgPlxuICApXG59XG5cbmNvbnN0IENoYXJ0ID0gc3R5bGVkLmRpdjxDaGFydEZyYWdtZW50ICYgeyBzZWxlY3RlZDogYm9vbGVhbiB9PmBcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGxlZnQ6ICR7cCA9PiBwLnh9cHg7XG4gIHRvcDogJHtwID0+IHAueX1weDtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodH1weDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgJHtwID0+IHAuc2VsZWN0ZWQgJiYgY3NzYGJvcmRlcjogMXB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtgfTtcbmBcblxuXG5jb25zdCBDZW50ZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6MTAwJTtcbiAgZGlzcGxheTpncmlkO1xuICBwbGFjZS1jb250ZW50OmNlbnRlciBjZW50ZXI7XG4gIGBcblxuXG50eXBlIERyYWdCb3hQcm9wcyA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG5jb25zdCBEcmFnQm94ID0gc3R5bGVkLmRpdjxEcmFnQm94UHJvcHM+YFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgd2lkdGg6JHtwID0+IHAud2lkdGh9cHg7XG4gIGhlaWdodDoke3AgPT4gcC5oZWlnaHR9cHg7XG4gIGxlZnQ6JHtwID0+IHAueH1weDtcbiAgdG9wOiR7cCA9PiBwLnl9cHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtcbmBcblxuY29uc3QgU2xpZGUgPSBzdHlsZWQuc2VjdGlvbjx7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH0+YFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6JHtwID0+IHAuaGVpZ2h0fXB4O1xuYFxuXG5jb25zdCBOZXdFbGVtZW50cyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC1nYXA6IDRweDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIHN0YXJ0O1xuYFxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIGdyaWQtZ2FwOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiNmNWY1ZjU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gIHBsYWNlLWNvbnRlbnQ6IHN0YXJ0IHN0cmV0Y2g7XG4gIG92ZXJmbG93OmhpZGRlbjtcbmBcblxuY29uc3QgU3RhZ2UgPSBzdHlsZWQubWFpbjx7IHRvb2w6IFRvb2wsIHNjYWxlOiBudW1iZXIgfT5gXG4gIGRpc3BsYXk6Z3JpZDtcbiAgd2lkdGg6MTAwJTtcbiAgcGxhY2UtY29udGVudDpjZW50ZXIgY2VudGVyO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gICR7cCA9PiB7XG4gICAgc3dpdGNoIChwLnRvb2wpIHtcbiAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfaW1hZ2VcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfdGV4dFwiOlxuICAgICAgICByZXR1cm4gY3NzYFxuICAgICAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgICAgICAgYFxuICAgIH1cbiAgfX1cbiAgJiA+ICoge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoJHtwID0+IHAuc2NhbGV9KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ0luZGljYXRvciA9ICgpID0+XG4gIDxMb2FkaW5nV3JhcHBlcj5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0+LjwvTG9hZGluZ0RvdD5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MjAwfT4uPC9Mb2FkaW5nRG90PlxuICAgIDxMb2FkaW5nRG90IGRlbGF5PXs0MDB9Pi48L0xvYWRpbmdEb3Q+XG4gIDwvTG9hZGluZ1dyYXBwZXI+XG5cbmNvbnN0IGp1bXBBbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6MDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eToxO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxucG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG5gXG5jb25zdCBMb2FkaW5nRG90ID0gc3R5bGVkLnNwYW48eyBkZWxheTogbnVtYmVyIH0+YFxuICBhbmltYXRpb246JHtqdW1wQW5pbWF0aW9ufSAxcyBlYXNlIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6JHtwID0+IHAuZGVsYXl9bXM7XG5gIl19 */"));

const Center = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_4___default()("div", {
  target: "e1nne1bm1",
  label: "Center"
})( false ? undefined : {
  name: "ieltvz",
  styles: "height:100%;display:grid;place-content:center center;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L1JlcG9ydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ1N5QiIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L1JlcG9ydC9SZXBvcnQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSwgdXNlUmVwb3J0VXBkYXRlTXV0YXRpb24sIENoYXJ0RnJhZ21lbnQsIFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzLCBSZXBvcnRGcmFnbWVudCwgUmVwb3J0R2V0RG9jdW1lbnQgfSBmcm9tIFwiLi4vY29kZWdlbi9ncmFwaHFsXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEVycm9yQm94IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRXJyb3JCb3hcIjtcbmltcG9ydCB7IENydW1icywgQ3J1bWJUaXRsZSwgQ3J1bWJMaW5rIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3J1bWJzXCI7XG5pbXBvcnQgeyBIZWFkZXIsIEhlYWRlclNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uXCI7XG5pbXBvcnQgeyBGbGF0QnV0dG9uLCBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBLZXlib2FyZEV2ZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IHVzZU1vdXNlRHJhZywgUG9zIH0gZnJvbSBcIi4uL2hvb2tzL2RyYWdcIjtcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IGN1aWQgZnJvbSBcImN1aWRcIlxuXG50eXBlIFRvb2wgPVxuICB8IFwiaW5zZXJ0X2NoYXJ0XCJcbiAgfCBcImluc2VydF9pbWFnZVwiXG4gIHwgXCJpbnNlcnRfdGV4dFwiXG4gIHwgXCJzZWxlY3RcIlxuXG5cbnR5cGUgU2VsZWN0aW9uID0gQ2hhcnRGcmFnbWVudFxuXG5cbmNvbnN0IHJlbW92ZVR5cGVuYW1lID0gKHJlcG9ydDogUmVwb3J0RnJhZ21lbnQpOiBSZXBvcnRVcGRhdGVNdXRhdGlvblZhcmlhYmxlc1tcInJlcG9ydFwiXSA9PiB7XG4gIGNvbnN0IHsgX190eXBlbmFtZSwgc2xpZGVzLCAuLi5yZXBvcnREYXRhIH0gPSByZXBvcnQ7XG4gIHJldHVybiB7XG4gICAgLi4ucmVwb3J0RGF0YSxcbiAgICBzbGlkZXM6IHNsaWRlcy5tYXAoKHsgX190eXBlbmFtZSwgY2hhcnRzLCAuLi5zbGlkZURhdGEgfSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2xpZGVEYXRhLFxuICAgICAgICBjaGFydHM6IGNoYXJ0cy5tYXAoKHsgX190eXBlbmFtZSwgLi4uY2hhcnREYXRhIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY2hhcnREYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBnZXRNb2RpZmllcnMgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT5cbiAgbmV3IFNldChbXG4gICAgZS5uYXRpdmVFdmVudC5tZXRhS2V5ICYmIFwibWV0YVwiLFxuICAgIGUubmF0aXZlRXZlbnQuY3RybEtleSAmJiBcImN0cmxcIixcbiAgICBlLm5hdGl2ZUV2ZW50LmFsdEtleSAmJiBcImFsdFwiLFxuICAgIGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgJiYgXCJzaGlmdFwiLFxuICBdLmZpbHRlcihCb29sZWFuKVxuICApXG5cbmV4cG9ydCBjb25zdCBSZXBvcnRQYWdlID0gKHByb3BzOiB7IGlkOiBzdHJpbmcsIHNsaWRlPzogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZSgxKVxuXG5cbiAgY29uc3QgW3Rvb2wsIHNldFRvb2xdID0gdXNlU3RhdGU8VG9vbD4oXCJzZWxlY3RcIilcbiAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlPFNlbGVjdGlvbltdPihbXSlcblxuICBjb25zdCBbdW5kb0hpc3RvcnksIHNldFVuZG9IaXN0b3J5XSA9IHVzZVN0YXRlPFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzW1wicmVwb3J0XCJdW10+KFtdKVxuICBjb25zdCBbdW5kb0hpc3RvcnlJbmRleCwgc2V0VW5kb0hpc3RvcnlJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cbiAgY29uc3QgcmVwb3J0UXVlcnkgPSB1c2VSZXBvcnRHZXRRdWVyeSh7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBpZDogcHJvcHMuaWRcbiAgICB9LFxuICAgIG9uQ29tcGxldGVkOiAoeyByZXBvcnQgfSkgPT4ge1xuICAgICAgc2V0U2NhbGUod2luZG93LmlubmVyV2lkdGggKiAwLjggLyByZXBvcnQud2lkdGgpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcG9ydCA9IHJlcG9ydFF1ZXJ5LmRhdGEgJiYgcmVwb3J0UXVlcnkuZGF0YS5yZXBvcnRcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZXBvcnQgJiYgdW5kb0hpc3RvcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRVbmRvSGlzdG9yeShbcmVwb3J0XSlcbiAgICB9XG4gIH0sIFtyZXBvcnRdKVxuXG4gIGNvbnN0IFtfdXBkYXRlUmVwb3J0LCB1cGRhdGVSZXBvcnRRdWVyeV0gPSB1c2VSZXBvcnRVcGRhdGVNdXRhdGlvbigpXG5cbiAgY29uc3QgdXBkYXRlUmVwb3J0ID0gKHJlcG9ydDogUmVwb3J0VXBkYXRlTXV0YXRpb25WYXJpYWJsZXNbXCJyZXBvcnRcIl0sIGlzVW5kbyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKCFpc1VuZG8pIHtcbiAgICAgIHNldFVuZG9IaXN0b3J5KFsuLi51bmRvSGlzdG9yeS5zbGljZSgwLCB1bmRvSGlzdG9yeUluZGV4ICsgMSksIHJlcG9ydF0pXG4gICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KHVuZG9IaXN0b3J5SW5kZXggKyAxKVxuXG4gICAgfVxuICAgIHJlcG9ydFF1ZXJ5LmNsaWVudC53cml0ZVF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBSZXBvcnRHZXREb2N1bWVudCxcbiAgICAgIHZhcmlhYmxlczogeyBpZDogcmVwb3J0LmlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHJlcG9ydFxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIF91cGRhdGVSZXBvcnQoe1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHJlcG9ydDogcmVtb3ZlVHlwZW5hbWUocmVwb3J0IGFzIFJlcG9ydEZyYWdtZW50KVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHJlcG9ydCkge1xuXG4gICAgICAgIHNldFNjYWxlKHdpbmRvdy5pbm5lcldpZHRoICogMC44IC8gcmVwb3J0LndpZHRoKVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlcilcbiAgfSwgW3JlcG9ydF0pXG5cbiAgY29uc3Qgc2VsZWN0ZWRTbGlkZSA9IHJlcG9ydCAmJiAocmVwb3J0LnNsaWRlcy5maW5kKHMgPT4gcy5pZCA9PT0gcHJvcHMuc2xpZGUpIHx8IHJlcG9ydC5zbGlkZXNbMF0pO1xuXG4gIGNvbnN0IGdldERyYWdCb3ggPSAocG9zOiBQb3MsIG9yaWdpbjogUG9zKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE1hdGgubWluKHBvcy54LCBvcmlnaW4ueCkgLyBzY2FsZSxcbiAgICAgIHk6IE1hdGgubWluKHBvcy55LCBvcmlnaW4ueSkgLyBzY2FsZSxcbiAgICAgIHdpZHRoOiBNYXRoLmFicyhwb3MueCAtIG9yaWdpbi54KSAvIHNjYWxlLFxuICAgICAgaGVpZ2h0OiBNYXRoLmFicyhwb3MueSAtIG9yaWdpbi55KSAvIHNjYWxlLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgZHJhZ0hhbmRsZXJzLCBkcmFnUG9zLCBkcmFnT3JpZ2luLCBpc0RyYWdnaW5nLCBwYXJlbnRSZWYgfSA9IHVzZU1vdXNlRHJhZyh7XG4gICAgb25EcmFnRW5kOiAocG9zLCBvcmlnaW4pID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGdldERyYWdCb3gocG9zLCBvcmlnaW4pO1xuICAgICAgc3dpdGNoICh0b29sKSB7XG4gICAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjoge1xuXG4gICAgICAgICAgY29uc3QgbmV3Q2hhcnQgPSB7XG4gICAgICAgICAgICBpZDogY3VpZCgpLFxuICAgICAgICAgICAgeDogTWF0aC5yb3VuZChib3gueCksXG4gICAgICAgICAgICB5OiBNYXRoLnJvdW5kKGJveC55KSxcbiAgICAgICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKGJveC53aWR0aCksXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQoYm94LmhlaWdodCksXG4gICAgICAgICAgICBfX3R5cGVuYW1lOiBcIkNoYXJ0XCIgYXMgXCJDaGFydFwiXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbmV3UmVwb3J0ID0ge1xuICAgICAgICAgICAgLi4ucmVwb3J0LFxuICAgICAgICAgICAgc2xpZGVzOiByZXBvcnQuc2xpZGVzLm1hcChzbGlkZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzbGlkZS5pZCA9PT0gc2VsZWN0ZWRTbGlkZS5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAuLi5zbGlkZSxcbiAgICAgICAgICAgICAgICAgIGNoYXJ0czogWy4uLnNsaWRlLmNoYXJ0cywgbmV3Q2hhcnRdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzbGlkZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVSZXBvcnQobmV3UmVwb3J0KVxuICAgICAgICAgIHNldFRvb2woXCJzZWxlY3RcIik7XG4gICAgICAgICAgc2V0U2VsZWN0aW9uKFtuZXdDaGFydF0pXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGFiSW5kZXg9ey0xfSBvbktleURvd249e2UgPT4ge1xuICAgICAgY29uc3QgbW9kaWZpZXJzID0gZ2V0TW9kaWZpZXJzKGUpO1xuICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgICAgc2V0VG9vbChcInNlbGVjdFwiKVxuICAgICAgICAgIGlmICh0b29sID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3Rpb24oW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjYXNlIFwiY1wiOlxuICAgICAgICAgIGlmIChtb2RpZmllcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgc2V0VG9vbChcImluc2VydF9jaGFydFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJpXCI6XG4gICAgICAgICAgaWYgKG1vZGlmaWVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBzZXRUb29sKFwiaW5zZXJ0X2ltYWdlXCIpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcInRcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHNldFRvb2woXCJpbnNlcnRfdGV4dFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjoge1xuICAgICAgICAgIHVwZGF0ZVJlcG9ydCh7XG4gICAgICAgICAgICAuLi5yZXBvcnQsXG4gICAgICAgICAgICBzbGlkZXM6IHJlcG9ydC5zbGlkZXMubWFwKHNsaWRlID0+ICh7XG4gICAgICAgICAgICAgIC4uLnNsaWRlLFxuICAgICAgICAgICAgICBjaGFydHM6IHNsaWRlLmNoYXJ0cy5maWx0ZXIoY2hhcnQgPT4gc2VsZWN0aW9uLnNvbWUoc2VsZWN0aW9uID0+IHNlbGVjdGlvbi5pZCA9PT0gY2hhcnQuaWQpID09PSBmYWxzZSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikgJiYgbW9kaWZpZXJzLmhhcyhcInNoaWZ0XCIpKSB7IC8vIFJlZG9cbiAgICAgICAgICAgIGlmICh1bmRvSGlzdG9yeS5sZW5ndGggPD0gdW5kb0hpc3RvcnlJbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHVuZG9IaXN0b3J5SW5kZXggKyAxO1xuICAgICAgICAgICAgdXBkYXRlUmVwb3J0KHVuZG9IaXN0b3J5W25ld0luZGV4XSwgdHJ1ZSk7XG4gICAgICAgICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KG5ld0luZGV4KVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikpIHsgLy8gdW5kb1xuICAgICAgICAgICAgaWYgKHVuZG9IaXN0b3J5SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdW5kb0hpc3RvcnlJbmRleCAtIDE7XG4gICAgICAgICAgICB1cGRhdGVSZXBvcnQodW5kb0hpc3RvcnlbbmV3SW5kZXhdLCB0cnVlKTtcbiAgICAgICAgICAgIHNldFVuZG9IaXN0b3J5SW5kZXgobmV3SW5kZXgpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgfVxuICAgIH19PlxuICAgICAgeyhyZXBvcnRRdWVyeS5sb2FkaW5nIHx8IHVwZGF0ZVJlcG9ydFF1ZXJ5LmxvYWRpbmcpICYmIDxMb2FkaW5nSW5kaWNhdG9yIC8+fVxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPEhlYWRlclNlY3Rpb24+XG4gICAgICAgICAgPENydW1icz5cbiAgICAgICAgICAgIDxDcnVtYkxpbmsgaHJlZj1cIi9cIj5Ib21lPC9DcnVtYkxpbms+XG4gICAgICAgICAgICA8Q3J1bWJMaW5rIGhyZWY9XCIvXCI+UmVwb3J0czwvQ3J1bWJMaW5rPlxuICAgICAgICAgICAgPENydW1iVGl0bGU+e3JlcG9ydCA/IHJlcG9ydC50aXRsZSA6IFwiLi4uXCJ9PC9DcnVtYlRpdGxlPlxuICAgICAgICAgIDwvQ3J1bWJzID5cbiAgICAgICAgICA8TmV3RWxlbWVudHM+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2NoYXJ0XCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9jaGFydFwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9jaGFydFwifT5cbiAgICAgICAgICAgICAgPEljb24gaWNvbj1cImluc2VydF9jaGFydFwiIC8+XG4gICAgICAgICAgICA8L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2ltYWdlXCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9pbWFnZVwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9pbWFnZVwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3Bob3RvXCIgLz48L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X3RleHRcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb29sKFwiaW5zZXJ0X3RleHRcIil9IGFjdGl2ZT17dG9vbCA9PT0gXCJpbnNlcnRfdGV4dFwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3RleHRcIiAvPjwvRmxhdEJ1dHRvbj5cbiAgICAgICAgICA8L05ld0VsZW1lbnRzPlxuICAgICAgICA8L0hlYWRlclNlY3Rpb24+XG4gICAgICA8L0hlYWRlciA+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGJvdHRvbTogMTYsIHJpZ2h0OiAxNiB9fT57c2NhbGV9PC9kaXY+XG4gICAgICA8U3RhZ2UgdG9vbD17dG9vbH0gc2NhbGU9e3NjYWxlfT5cblxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRTbGlkZSAmJlxuICAgICAgICAgIDxTbGlkZSByZWY9e3BhcmVudFJlZn0gey4uLmRyYWdIYW5kbGVyc30gd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cbiAgICAgICAgICAgIHtbXCJpbnNlcnRfY2hhcnRcIiwgXCJpbnNlcnRfaW1hZ2VcIiwgXCJpbnNlcnRfdGV4dFwiXS5pbmNsdWRlcyh0b29sKSAmJiBpc0RyYWdnaW5nICYmXG4gICAgICAgICAgICAgIDxEcmFnQm94IHsuLi5nZXREcmFnQm94KGRyYWdQb3MsIGRyYWdPcmlnaW4pfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3NlbGVjdGVkU2xpZGUuY2hhcnRzLm1hcChjaGFydCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICA8Q2hhcnQga2V5PXtjaGFydC5pZH0gc2VsZWN0ZWQ9e3NlbGVjdGlvbi5zb21lKHMgPT4gcy5pZCA9PT0gY2hhcnQuaWQpfSB7Li4uY2hhcnR9IG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHRvb2wgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgPyBbLi4uc2VsZWN0aW9uLCBjaGFydF0gOiBbY2hhcnRdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICB9XG4gICAgICAgIHtyZXBvcnQgJiYgIXNlbGVjdGVkU2xpZGUgJiZcbiAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPVwiY3JlYXRlIHNsaWRlXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB1cGRhdGVSZXBvcnQoe1xuICAgICAgICAgICAgICAgIC4uLnJlcG9ydCxcbiAgICAgICAgICAgICAgICBzbGlkZXM6IFtcbiAgICAgICAgICAgICAgICAgIC4uLnJlcG9ydC5zbGlkZXMsXG4gICAgICAgICAgICAgICAgICB7IGlkOiBjdWlkKCksIGNoYXJ0czogW10gfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICBDcmVhdGUgWW91IGZpcnN0IFNsaWRlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgfVxuICAgICAgICB7cmVwb3J0UXVlcnkuZXJyb3IgJiYgPEVycm9yQm94IGVycm9yPXtyZXBvcnRRdWVyeS5lcnJvcn0gLz59XG4gICAgICA8L1N0YWdlPlxuXG4gICAgPC9MYXlvdXQgPlxuICApXG59XG5cbmNvbnN0IENoYXJ0ID0gc3R5bGVkLmRpdjxDaGFydEZyYWdtZW50ICYgeyBzZWxlY3RlZDogYm9vbGVhbiB9PmBcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGxlZnQ6ICR7cCA9PiBwLnh9cHg7XG4gIHRvcDogJHtwID0+IHAueX1weDtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodH1weDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgJHtwID0+IHAuc2VsZWN0ZWQgJiYgY3NzYGJvcmRlcjogMXB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtgfTtcbmBcblxuXG5jb25zdCBDZW50ZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6MTAwJTtcbiAgZGlzcGxheTpncmlkO1xuICBwbGFjZS1jb250ZW50OmNlbnRlciBjZW50ZXI7XG4gIGBcblxuXG50eXBlIERyYWdCb3hQcm9wcyA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG5jb25zdCBEcmFnQm94ID0gc3R5bGVkLmRpdjxEcmFnQm94UHJvcHM+YFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgd2lkdGg6JHtwID0+IHAud2lkdGh9cHg7XG4gIGhlaWdodDoke3AgPT4gcC5oZWlnaHR9cHg7XG4gIGxlZnQ6JHtwID0+IHAueH1weDtcbiAgdG9wOiR7cCA9PiBwLnl9cHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtcbmBcblxuY29uc3QgU2xpZGUgPSBzdHlsZWQuc2VjdGlvbjx7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH0+YFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6JHtwID0+IHAuaGVpZ2h0fXB4O1xuYFxuXG5jb25zdCBOZXdFbGVtZW50cyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC1nYXA6IDRweDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIHN0YXJ0O1xuYFxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIGdyaWQtZ2FwOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiNmNWY1ZjU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gIHBsYWNlLWNvbnRlbnQ6IHN0YXJ0IHN0cmV0Y2g7XG4gIG92ZXJmbG93OmhpZGRlbjtcbmBcblxuY29uc3QgU3RhZ2UgPSBzdHlsZWQubWFpbjx7IHRvb2w6IFRvb2wsIHNjYWxlOiBudW1iZXIgfT5gXG4gIGRpc3BsYXk6Z3JpZDtcbiAgd2lkdGg6MTAwJTtcbiAgcGxhY2UtY29udGVudDpjZW50ZXIgY2VudGVyO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gICR7cCA9PiB7XG4gICAgc3dpdGNoIChwLnRvb2wpIHtcbiAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfaW1hZ2VcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfdGV4dFwiOlxuICAgICAgICByZXR1cm4gY3NzYFxuICAgICAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgICAgICAgYFxuICAgIH1cbiAgfX1cbiAgJiA+ICoge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoJHtwID0+IHAuc2NhbGV9KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ0luZGljYXRvciA9ICgpID0+XG4gIDxMb2FkaW5nV3JhcHBlcj5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0+LjwvTG9hZGluZ0RvdD5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MjAwfT4uPC9Mb2FkaW5nRG90PlxuICAgIDxMb2FkaW5nRG90IGRlbGF5PXs0MDB9Pi48L0xvYWRpbmdEb3Q+XG4gIDwvTG9hZGluZ1dyYXBwZXI+XG5cbmNvbnN0IGp1bXBBbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6MDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eToxO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxucG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG5gXG5jb25zdCBMb2FkaW5nRG90ID0gc3R5bGVkLnNwYW48eyBkZWxheTogbnVtYmVyIH0+YFxuICBhbmltYXRpb246JHtqdW1wQW5pbWF0aW9ufSAxcyBlYXNlIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6JHtwID0+IHAuZGVsYXl9bXM7XG5gIl19 */"
});

const DragBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_4___default()("div", {
  target: "e1nne1bm2",
  label: "DragBox"
})("position:absolute;width:", p => p.width, "px;height:", p => p.height, "px;left:", p => p.x, "px;top:", p => p.y, "px;border:2px dashed ", _theme__WEBPACK_IMPORTED_MODULE_14__["colors"].primary, ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L1JlcG9ydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOFN3QyIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L1JlcG9ydC9SZXBvcnQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSwgdXNlUmVwb3J0VXBkYXRlTXV0YXRpb24sIENoYXJ0RnJhZ21lbnQsIFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzLCBSZXBvcnRGcmFnbWVudCwgUmVwb3J0R2V0RG9jdW1lbnQgfSBmcm9tIFwiLi4vY29kZWdlbi9ncmFwaHFsXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEVycm9yQm94IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRXJyb3JCb3hcIjtcbmltcG9ydCB7IENydW1icywgQ3J1bWJUaXRsZSwgQ3J1bWJMaW5rIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3J1bWJzXCI7XG5pbXBvcnQgeyBIZWFkZXIsIEhlYWRlclNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uXCI7XG5pbXBvcnQgeyBGbGF0QnV0dG9uLCBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBLZXlib2FyZEV2ZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IHVzZU1vdXNlRHJhZywgUG9zIH0gZnJvbSBcIi4uL2hvb2tzL2RyYWdcIjtcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IGN1aWQgZnJvbSBcImN1aWRcIlxuXG50eXBlIFRvb2wgPVxuICB8IFwiaW5zZXJ0X2NoYXJ0XCJcbiAgfCBcImluc2VydF9pbWFnZVwiXG4gIHwgXCJpbnNlcnRfdGV4dFwiXG4gIHwgXCJzZWxlY3RcIlxuXG5cbnR5cGUgU2VsZWN0aW9uID0gQ2hhcnRGcmFnbWVudFxuXG5cbmNvbnN0IHJlbW92ZVR5cGVuYW1lID0gKHJlcG9ydDogUmVwb3J0RnJhZ21lbnQpOiBSZXBvcnRVcGRhdGVNdXRhdGlvblZhcmlhYmxlc1tcInJlcG9ydFwiXSA9PiB7XG4gIGNvbnN0IHsgX190eXBlbmFtZSwgc2xpZGVzLCAuLi5yZXBvcnREYXRhIH0gPSByZXBvcnQ7XG4gIHJldHVybiB7XG4gICAgLi4ucmVwb3J0RGF0YSxcbiAgICBzbGlkZXM6IHNsaWRlcy5tYXAoKHsgX190eXBlbmFtZSwgY2hhcnRzLCAuLi5zbGlkZURhdGEgfSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2xpZGVEYXRhLFxuICAgICAgICBjaGFydHM6IGNoYXJ0cy5tYXAoKHsgX190eXBlbmFtZSwgLi4uY2hhcnREYXRhIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY2hhcnREYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBnZXRNb2RpZmllcnMgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT5cbiAgbmV3IFNldChbXG4gICAgZS5uYXRpdmVFdmVudC5tZXRhS2V5ICYmIFwibWV0YVwiLFxuICAgIGUubmF0aXZlRXZlbnQuY3RybEtleSAmJiBcImN0cmxcIixcbiAgICBlLm5hdGl2ZUV2ZW50LmFsdEtleSAmJiBcImFsdFwiLFxuICAgIGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgJiYgXCJzaGlmdFwiLFxuICBdLmZpbHRlcihCb29sZWFuKVxuICApXG5cbmV4cG9ydCBjb25zdCBSZXBvcnRQYWdlID0gKHByb3BzOiB7IGlkOiBzdHJpbmcsIHNsaWRlPzogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZSgxKVxuXG5cbiAgY29uc3QgW3Rvb2wsIHNldFRvb2xdID0gdXNlU3RhdGU8VG9vbD4oXCJzZWxlY3RcIilcbiAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlPFNlbGVjdGlvbltdPihbXSlcblxuICBjb25zdCBbdW5kb0hpc3RvcnksIHNldFVuZG9IaXN0b3J5XSA9IHVzZVN0YXRlPFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzW1wicmVwb3J0XCJdW10+KFtdKVxuICBjb25zdCBbdW5kb0hpc3RvcnlJbmRleCwgc2V0VW5kb0hpc3RvcnlJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cbiAgY29uc3QgcmVwb3J0UXVlcnkgPSB1c2VSZXBvcnRHZXRRdWVyeSh7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBpZDogcHJvcHMuaWRcbiAgICB9LFxuICAgIG9uQ29tcGxldGVkOiAoeyByZXBvcnQgfSkgPT4ge1xuICAgICAgc2V0U2NhbGUod2luZG93LmlubmVyV2lkdGggKiAwLjggLyByZXBvcnQud2lkdGgpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcG9ydCA9IHJlcG9ydFF1ZXJ5LmRhdGEgJiYgcmVwb3J0UXVlcnkuZGF0YS5yZXBvcnRcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZXBvcnQgJiYgdW5kb0hpc3RvcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRVbmRvSGlzdG9yeShbcmVwb3J0XSlcbiAgICB9XG4gIH0sIFtyZXBvcnRdKVxuXG4gIGNvbnN0IFtfdXBkYXRlUmVwb3J0LCB1cGRhdGVSZXBvcnRRdWVyeV0gPSB1c2VSZXBvcnRVcGRhdGVNdXRhdGlvbigpXG5cbiAgY29uc3QgdXBkYXRlUmVwb3J0ID0gKHJlcG9ydDogUmVwb3J0VXBkYXRlTXV0YXRpb25WYXJpYWJsZXNbXCJyZXBvcnRcIl0sIGlzVW5kbyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKCFpc1VuZG8pIHtcbiAgICAgIHNldFVuZG9IaXN0b3J5KFsuLi51bmRvSGlzdG9yeS5zbGljZSgwLCB1bmRvSGlzdG9yeUluZGV4ICsgMSksIHJlcG9ydF0pXG4gICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KHVuZG9IaXN0b3J5SW5kZXggKyAxKVxuXG4gICAgfVxuICAgIHJlcG9ydFF1ZXJ5LmNsaWVudC53cml0ZVF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBSZXBvcnRHZXREb2N1bWVudCxcbiAgICAgIHZhcmlhYmxlczogeyBpZDogcmVwb3J0LmlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHJlcG9ydFxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIF91cGRhdGVSZXBvcnQoe1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHJlcG9ydDogcmVtb3ZlVHlwZW5hbWUocmVwb3J0IGFzIFJlcG9ydEZyYWdtZW50KVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHJlcG9ydCkge1xuXG4gICAgICAgIHNldFNjYWxlKHdpbmRvdy5pbm5lcldpZHRoICogMC44IC8gcmVwb3J0LndpZHRoKVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlcilcbiAgfSwgW3JlcG9ydF0pXG5cbiAgY29uc3Qgc2VsZWN0ZWRTbGlkZSA9IHJlcG9ydCAmJiAocmVwb3J0LnNsaWRlcy5maW5kKHMgPT4gcy5pZCA9PT0gcHJvcHMuc2xpZGUpIHx8IHJlcG9ydC5zbGlkZXNbMF0pO1xuXG4gIGNvbnN0IGdldERyYWdCb3ggPSAocG9zOiBQb3MsIG9yaWdpbjogUG9zKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE1hdGgubWluKHBvcy54LCBvcmlnaW4ueCkgLyBzY2FsZSxcbiAgICAgIHk6IE1hdGgubWluKHBvcy55LCBvcmlnaW4ueSkgLyBzY2FsZSxcbiAgICAgIHdpZHRoOiBNYXRoLmFicyhwb3MueCAtIG9yaWdpbi54KSAvIHNjYWxlLFxuICAgICAgaGVpZ2h0OiBNYXRoLmFicyhwb3MueSAtIG9yaWdpbi55KSAvIHNjYWxlLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgZHJhZ0hhbmRsZXJzLCBkcmFnUG9zLCBkcmFnT3JpZ2luLCBpc0RyYWdnaW5nLCBwYXJlbnRSZWYgfSA9IHVzZU1vdXNlRHJhZyh7XG4gICAgb25EcmFnRW5kOiAocG9zLCBvcmlnaW4pID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGdldERyYWdCb3gocG9zLCBvcmlnaW4pO1xuICAgICAgc3dpdGNoICh0b29sKSB7XG4gICAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjoge1xuXG4gICAgICAgICAgY29uc3QgbmV3Q2hhcnQgPSB7XG4gICAgICAgICAgICBpZDogY3VpZCgpLFxuICAgICAgICAgICAgeDogTWF0aC5yb3VuZChib3gueCksXG4gICAgICAgICAgICB5OiBNYXRoLnJvdW5kKGJveC55KSxcbiAgICAgICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKGJveC53aWR0aCksXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQoYm94LmhlaWdodCksXG4gICAgICAgICAgICBfX3R5cGVuYW1lOiBcIkNoYXJ0XCIgYXMgXCJDaGFydFwiXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbmV3UmVwb3J0ID0ge1xuICAgICAgICAgICAgLi4ucmVwb3J0LFxuICAgICAgICAgICAgc2xpZGVzOiByZXBvcnQuc2xpZGVzLm1hcChzbGlkZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzbGlkZS5pZCA9PT0gc2VsZWN0ZWRTbGlkZS5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAuLi5zbGlkZSxcbiAgICAgICAgICAgICAgICAgIGNoYXJ0czogWy4uLnNsaWRlLmNoYXJ0cywgbmV3Q2hhcnRdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzbGlkZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVSZXBvcnQobmV3UmVwb3J0KVxuICAgICAgICAgIHNldFRvb2woXCJzZWxlY3RcIik7XG4gICAgICAgICAgc2V0U2VsZWN0aW9uKFtuZXdDaGFydF0pXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGFiSW5kZXg9ey0xfSBvbktleURvd249e2UgPT4ge1xuICAgICAgY29uc3QgbW9kaWZpZXJzID0gZ2V0TW9kaWZpZXJzKGUpO1xuICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgICAgc2V0VG9vbChcInNlbGVjdFwiKVxuICAgICAgICAgIGlmICh0b29sID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3Rpb24oW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjYXNlIFwiY1wiOlxuICAgICAgICAgIGlmIChtb2RpZmllcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgc2V0VG9vbChcImluc2VydF9jaGFydFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJpXCI6XG4gICAgICAgICAgaWYgKG1vZGlmaWVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBzZXRUb29sKFwiaW5zZXJ0X2ltYWdlXCIpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcInRcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHNldFRvb2woXCJpbnNlcnRfdGV4dFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjoge1xuICAgICAgICAgIHVwZGF0ZVJlcG9ydCh7XG4gICAgICAgICAgICAuLi5yZXBvcnQsXG4gICAgICAgICAgICBzbGlkZXM6IHJlcG9ydC5zbGlkZXMubWFwKHNsaWRlID0+ICh7XG4gICAgICAgICAgICAgIC4uLnNsaWRlLFxuICAgICAgICAgICAgICBjaGFydHM6IHNsaWRlLmNoYXJ0cy5maWx0ZXIoY2hhcnQgPT4gc2VsZWN0aW9uLnNvbWUoc2VsZWN0aW9uID0+IHNlbGVjdGlvbi5pZCA9PT0gY2hhcnQuaWQpID09PSBmYWxzZSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikgJiYgbW9kaWZpZXJzLmhhcyhcInNoaWZ0XCIpKSB7IC8vIFJlZG9cbiAgICAgICAgICAgIGlmICh1bmRvSGlzdG9yeS5sZW5ndGggPD0gdW5kb0hpc3RvcnlJbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHVuZG9IaXN0b3J5SW5kZXggKyAxO1xuICAgICAgICAgICAgdXBkYXRlUmVwb3J0KHVuZG9IaXN0b3J5W25ld0luZGV4XSwgdHJ1ZSk7XG4gICAgICAgICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KG5ld0luZGV4KVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikpIHsgLy8gdW5kb1xuICAgICAgICAgICAgaWYgKHVuZG9IaXN0b3J5SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdW5kb0hpc3RvcnlJbmRleCAtIDE7XG4gICAgICAgICAgICB1cGRhdGVSZXBvcnQodW5kb0hpc3RvcnlbbmV3SW5kZXhdLCB0cnVlKTtcbiAgICAgICAgICAgIHNldFVuZG9IaXN0b3J5SW5kZXgobmV3SW5kZXgpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgfVxuICAgIH19PlxuICAgICAgeyhyZXBvcnRRdWVyeS5sb2FkaW5nIHx8IHVwZGF0ZVJlcG9ydFF1ZXJ5LmxvYWRpbmcpICYmIDxMb2FkaW5nSW5kaWNhdG9yIC8+fVxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPEhlYWRlclNlY3Rpb24+XG4gICAgICAgICAgPENydW1icz5cbiAgICAgICAgICAgIDxDcnVtYkxpbmsgaHJlZj1cIi9cIj5Ib21lPC9DcnVtYkxpbms+XG4gICAgICAgICAgICA8Q3J1bWJMaW5rIGhyZWY9XCIvXCI+UmVwb3J0czwvQ3J1bWJMaW5rPlxuICAgICAgICAgICAgPENydW1iVGl0bGU+e3JlcG9ydCA/IHJlcG9ydC50aXRsZSA6IFwiLi4uXCJ9PC9DcnVtYlRpdGxlPlxuICAgICAgICAgIDwvQ3J1bWJzID5cbiAgICAgICAgICA8TmV3RWxlbWVudHM+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2NoYXJ0XCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9jaGFydFwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9jaGFydFwifT5cbiAgICAgICAgICAgICAgPEljb24gaWNvbj1cImluc2VydF9jaGFydFwiIC8+XG4gICAgICAgICAgICA8L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2ltYWdlXCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9pbWFnZVwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9pbWFnZVwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3Bob3RvXCIgLz48L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X3RleHRcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb29sKFwiaW5zZXJ0X3RleHRcIil9IGFjdGl2ZT17dG9vbCA9PT0gXCJpbnNlcnRfdGV4dFwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3RleHRcIiAvPjwvRmxhdEJ1dHRvbj5cbiAgICAgICAgICA8L05ld0VsZW1lbnRzPlxuICAgICAgICA8L0hlYWRlclNlY3Rpb24+XG4gICAgICA8L0hlYWRlciA+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGJvdHRvbTogMTYsIHJpZ2h0OiAxNiB9fT57c2NhbGV9PC9kaXY+XG4gICAgICA8U3RhZ2UgdG9vbD17dG9vbH0gc2NhbGU9e3NjYWxlfT5cblxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRTbGlkZSAmJlxuICAgICAgICAgIDxTbGlkZSByZWY9e3BhcmVudFJlZn0gey4uLmRyYWdIYW5kbGVyc30gd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cbiAgICAgICAgICAgIHtbXCJpbnNlcnRfY2hhcnRcIiwgXCJpbnNlcnRfaW1hZ2VcIiwgXCJpbnNlcnRfdGV4dFwiXS5pbmNsdWRlcyh0b29sKSAmJiBpc0RyYWdnaW5nICYmXG4gICAgICAgICAgICAgIDxEcmFnQm94IHsuLi5nZXREcmFnQm94KGRyYWdQb3MsIGRyYWdPcmlnaW4pfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3NlbGVjdGVkU2xpZGUuY2hhcnRzLm1hcChjaGFydCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICA8Q2hhcnQga2V5PXtjaGFydC5pZH0gc2VsZWN0ZWQ9e3NlbGVjdGlvbi5zb21lKHMgPT4gcy5pZCA9PT0gY2hhcnQuaWQpfSB7Li4uY2hhcnR9IG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHRvb2wgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgPyBbLi4uc2VsZWN0aW9uLCBjaGFydF0gOiBbY2hhcnRdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICB9XG4gICAgICAgIHtyZXBvcnQgJiYgIXNlbGVjdGVkU2xpZGUgJiZcbiAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPVwiY3JlYXRlIHNsaWRlXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB1cGRhdGVSZXBvcnQoe1xuICAgICAgICAgICAgICAgIC4uLnJlcG9ydCxcbiAgICAgICAgICAgICAgICBzbGlkZXM6IFtcbiAgICAgICAgICAgICAgICAgIC4uLnJlcG9ydC5zbGlkZXMsXG4gICAgICAgICAgICAgICAgICB7IGlkOiBjdWlkKCksIGNoYXJ0czogW10gfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICBDcmVhdGUgWW91IGZpcnN0IFNsaWRlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgfVxuICAgICAgICB7cmVwb3J0UXVlcnkuZXJyb3IgJiYgPEVycm9yQm94IGVycm9yPXtyZXBvcnRRdWVyeS5lcnJvcn0gLz59XG4gICAgICA8L1N0YWdlPlxuXG4gICAgPC9MYXlvdXQgPlxuICApXG59XG5cbmNvbnN0IENoYXJ0ID0gc3R5bGVkLmRpdjxDaGFydEZyYWdtZW50ICYgeyBzZWxlY3RlZDogYm9vbGVhbiB9PmBcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGxlZnQ6ICR7cCA9PiBwLnh9cHg7XG4gIHRvcDogJHtwID0+IHAueX1weDtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodH1weDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgJHtwID0+IHAuc2VsZWN0ZWQgJiYgY3NzYGJvcmRlcjogMXB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtgfTtcbmBcblxuXG5jb25zdCBDZW50ZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6MTAwJTtcbiAgZGlzcGxheTpncmlkO1xuICBwbGFjZS1jb250ZW50OmNlbnRlciBjZW50ZXI7XG4gIGBcblxuXG50eXBlIERyYWdCb3hQcm9wcyA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG5jb25zdCBEcmFnQm94ID0gc3R5bGVkLmRpdjxEcmFnQm94UHJvcHM+YFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgd2lkdGg6JHtwID0+IHAud2lkdGh9cHg7XG4gIGhlaWdodDoke3AgPT4gcC5oZWlnaHR9cHg7XG4gIGxlZnQ6JHtwID0+IHAueH1weDtcbiAgdG9wOiR7cCA9PiBwLnl9cHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtcbmBcblxuY29uc3QgU2xpZGUgPSBzdHlsZWQuc2VjdGlvbjx7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH0+YFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6JHtwID0+IHAuaGVpZ2h0fXB4O1xuYFxuXG5jb25zdCBOZXdFbGVtZW50cyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC1nYXA6IDRweDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIHN0YXJ0O1xuYFxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIGdyaWQtZ2FwOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiNmNWY1ZjU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gIHBsYWNlLWNvbnRlbnQ6IHN0YXJ0IHN0cmV0Y2g7XG4gIG92ZXJmbG93OmhpZGRlbjtcbmBcblxuY29uc3QgU3RhZ2UgPSBzdHlsZWQubWFpbjx7IHRvb2w6IFRvb2wsIHNjYWxlOiBudW1iZXIgfT5gXG4gIGRpc3BsYXk6Z3JpZDtcbiAgd2lkdGg6MTAwJTtcbiAgcGxhY2UtY29udGVudDpjZW50ZXIgY2VudGVyO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gICR7cCA9PiB7XG4gICAgc3dpdGNoIChwLnRvb2wpIHtcbiAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfaW1hZ2VcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfdGV4dFwiOlxuICAgICAgICByZXR1cm4gY3NzYFxuICAgICAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgICAgICAgYFxuICAgIH1cbiAgfX1cbiAgJiA+ICoge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoJHtwID0+IHAuc2NhbGV9KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ0luZGljYXRvciA9ICgpID0+XG4gIDxMb2FkaW5nV3JhcHBlcj5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0+LjwvTG9hZGluZ0RvdD5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MjAwfT4uPC9Mb2FkaW5nRG90PlxuICAgIDxMb2FkaW5nRG90IGRlbGF5PXs0MDB9Pi48L0xvYWRpbmdEb3Q+XG4gIDwvTG9hZGluZ1dyYXBwZXI+XG5cbmNvbnN0IGp1bXBBbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6MDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eToxO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxucG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG5gXG5jb25zdCBMb2FkaW5nRG90ID0gc3R5bGVkLnNwYW48eyBkZWxheTogbnVtYmVyIH0+YFxuICBhbmltYXRpb246JHtqdW1wQW5pbWF0aW9ufSAxcyBlYXNlIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6JHtwID0+IHAuZGVsYXl9bXM7XG5gIl19 */"));

const Slide = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_4___default()("section", {
  target: "e1nne1bm3",
  label: "Slide"
})("position:relative;background:white;box-shadow:0 1px 4px rgba(0,0,0,0.4);width:", p => p.width, "px;height:", p => p.height, "px;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L1JlcG9ydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdVQrRCIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L1JlcG9ydC9SZXBvcnQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSwgdXNlUmVwb3J0VXBkYXRlTXV0YXRpb24sIENoYXJ0RnJhZ21lbnQsIFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzLCBSZXBvcnRGcmFnbWVudCwgUmVwb3J0R2V0RG9jdW1lbnQgfSBmcm9tIFwiLi4vY29kZWdlbi9ncmFwaHFsXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEVycm9yQm94IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRXJyb3JCb3hcIjtcbmltcG9ydCB7IENydW1icywgQ3J1bWJUaXRsZSwgQ3J1bWJMaW5rIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3J1bWJzXCI7XG5pbXBvcnQgeyBIZWFkZXIsIEhlYWRlclNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uXCI7XG5pbXBvcnQgeyBGbGF0QnV0dG9uLCBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBLZXlib2FyZEV2ZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IHVzZU1vdXNlRHJhZywgUG9zIH0gZnJvbSBcIi4uL2hvb2tzL2RyYWdcIjtcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IGN1aWQgZnJvbSBcImN1aWRcIlxuXG50eXBlIFRvb2wgPVxuICB8IFwiaW5zZXJ0X2NoYXJ0XCJcbiAgfCBcImluc2VydF9pbWFnZVwiXG4gIHwgXCJpbnNlcnRfdGV4dFwiXG4gIHwgXCJzZWxlY3RcIlxuXG5cbnR5cGUgU2VsZWN0aW9uID0gQ2hhcnRGcmFnbWVudFxuXG5cbmNvbnN0IHJlbW92ZVR5cGVuYW1lID0gKHJlcG9ydDogUmVwb3J0RnJhZ21lbnQpOiBSZXBvcnRVcGRhdGVNdXRhdGlvblZhcmlhYmxlc1tcInJlcG9ydFwiXSA9PiB7XG4gIGNvbnN0IHsgX190eXBlbmFtZSwgc2xpZGVzLCAuLi5yZXBvcnREYXRhIH0gPSByZXBvcnQ7XG4gIHJldHVybiB7XG4gICAgLi4ucmVwb3J0RGF0YSxcbiAgICBzbGlkZXM6IHNsaWRlcy5tYXAoKHsgX190eXBlbmFtZSwgY2hhcnRzLCAuLi5zbGlkZURhdGEgfSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2xpZGVEYXRhLFxuICAgICAgICBjaGFydHM6IGNoYXJ0cy5tYXAoKHsgX190eXBlbmFtZSwgLi4uY2hhcnREYXRhIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY2hhcnREYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBnZXRNb2RpZmllcnMgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT5cbiAgbmV3IFNldChbXG4gICAgZS5uYXRpdmVFdmVudC5tZXRhS2V5ICYmIFwibWV0YVwiLFxuICAgIGUubmF0aXZlRXZlbnQuY3RybEtleSAmJiBcImN0cmxcIixcbiAgICBlLm5hdGl2ZUV2ZW50LmFsdEtleSAmJiBcImFsdFwiLFxuICAgIGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgJiYgXCJzaGlmdFwiLFxuICBdLmZpbHRlcihCb29sZWFuKVxuICApXG5cbmV4cG9ydCBjb25zdCBSZXBvcnRQYWdlID0gKHByb3BzOiB7IGlkOiBzdHJpbmcsIHNsaWRlPzogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZSgxKVxuXG5cbiAgY29uc3QgW3Rvb2wsIHNldFRvb2xdID0gdXNlU3RhdGU8VG9vbD4oXCJzZWxlY3RcIilcbiAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlPFNlbGVjdGlvbltdPihbXSlcblxuICBjb25zdCBbdW5kb0hpc3RvcnksIHNldFVuZG9IaXN0b3J5XSA9IHVzZVN0YXRlPFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzW1wicmVwb3J0XCJdW10+KFtdKVxuICBjb25zdCBbdW5kb0hpc3RvcnlJbmRleCwgc2V0VW5kb0hpc3RvcnlJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cbiAgY29uc3QgcmVwb3J0UXVlcnkgPSB1c2VSZXBvcnRHZXRRdWVyeSh7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBpZDogcHJvcHMuaWRcbiAgICB9LFxuICAgIG9uQ29tcGxldGVkOiAoeyByZXBvcnQgfSkgPT4ge1xuICAgICAgc2V0U2NhbGUod2luZG93LmlubmVyV2lkdGggKiAwLjggLyByZXBvcnQud2lkdGgpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcG9ydCA9IHJlcG9ydFF1ZXJ5LmRhdGEgJiYgcmVwb3J0UXVlcnkuZGF0YS5yZXBvcnRcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZXBvcnQgJiYgdW5kb0hpc3RvcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRVbmRvSGlzdG9yeShbcmVwb3J0XSlcbiAgICB9XG4gIH0sIFtyZXBvcnRdKVxuXG4gIGNvbnN0IFtfdXBkYXRlUmVwb3J0LCB1cGRhdGVSZXBvcnRRdWVyeV0gPSB1c2VSZXBvcnRVcGRhdGVNdXRhdGlvbigpXG5cbiAgY29uc3QgdXBkYXRlUmVwb3J0ID0gKHJlcG9ydDogUmVwb3J0VXBkYXRlTXV0YXRpb25WYXJpYWJsZXNbXCJyZXBvcnRcIl0sIGlzVW5kbyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKCFpc1VuZG8pIHtcbiAgICAgIHNldFVuZG9IaXN0b3J5KFsuLi51bmRvSGlzdG9yeS5zbGljZSgwLCB1bmRvSGlzdG9yeUluZGV4ICsgMSksIHJlcG9ydF0pXG4gICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KHVuZG9IaXN0b3J5SW5kZXggKyAxKVxuXG4gICAgfVxuICAgIHJlcG9ydFF1ZXJ5LmNsaWVudC53cml0ZVF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBSZXBvcnRHZXREb2N1bWVudCxcbiAgICAgIHZhcmlhYmxlczogeyBpZDogcmVwb3J0LmlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHJlcG9ydFxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIF91cGRhdGVSZXBvcnQoe1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHJlcG9ydDogcmVtb3ZlVHlwZW5hbWUocmVwb3J0IGFzIFJlcG9ydEZyYWdtZW50KVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHJlcG9ydCkge1xuXG4gICAgICAgIHNldFNjYWxlKHdpbmRvdy5pbm5lcldpZHRoICogMC44IC8gcmVwb3J0LndpZHRoKVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlcilcbiAgfSwgW3JlcG9ydF0pXG5cbiAgY29uc3Qgc2VsZWN0ZWRTbGlkZSA9IHJlcG9ydCAmJiAocmVwb3J0LnNsaWRlcy5maW5kKHMgPT4gcy5pZCA9PT0gcHJvcHMuc2xpZGUpIHx8IHJlcG9ydC5zbGlkZXNbMF0pO1xuXG4gIGNvbnN0IGdldERyYWdCb3ggPSAocG9zOiBQb3MsIG9yaWdpbjogUG9zKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE1hdGgubWluKHBvcy54LCBvcmlnaW4ueCkgLyBzY2FsZSxcbiAgICAgIHk6IE1hdGgubWluKHBvcy55LCBvcmlnaW4ueSkgLyBzY2FsZSxcbiAgICAgIHdpZHRoOiBNYXRoLmFicyhwb3MueCAtIG9yaWdpbi54KSAvIHNjYWxlLFxuICAgICAgaGVpZ2h0OiBNYXRoLmFicyhwb3MueSAtIG9yaWdpbi55KSAvIHNjYWxlLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgZHJhZ0hhbmRsZXJzLCBkcmFnUG9zLCBkcmFnT3JpZ2luLCBpc0RyYWdnaW5nLCBwYXJlbnRSZWYgfSA9IHVzZU1vdXNlRHJhZyh7XG4gICAgb25EcmFnRW5kOiAocG9zLCBvcmlnaW4pID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGdldERyYWdCb3gocG9zLCBvcmlnaW4pO1xuICAgICAgc3dpdGNoICh0b29sKSB7XG4gICAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjoge1xuXG4gICAgICAgICAgY29uc3QgbmV3Q2hhcnQgPSB7XG4gICAgICAgICAgICBpZDogY3VpZCgpLFxuICAgICAgICAgICAgeDogTWF0aC5yb3VuZChib3gueCksXG4gICAgICAgICAgICB5OiBNYXRoLnJvdW5kKGJveC55KSxcbiAgICAgICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKGJveC53aWR0aCksXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQoYm94LmhlaWdodCksXG4gICAgICAgICAgICBfX3R5cGVuYW1lOiBcIkNoYXJ0XCIgYXMgXCJDaGFydFwiXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbmV3UmVwb3J0ID0ge1xuICAgICAgICAgICAgLi4ucmVwb3J0LFxuICAgICAgICAgICAgc2xpZGVzOiByZXBvcnQuc2xpZGVzLm1hcChzbGlkZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzbGlkZS5pZCA9PT0gc2VsZWN0ZWRTbGlkZS5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAuLi5zbGlkZSxcbiAgICAgICAgICAgICAgICAgIGNoYXJ0czogWy4uLnNsaWRlLmNoYXJ0cywgbmV3Q2hhcnRdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzbGlkZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVSZXBvcnQobmV3UmVwb3J0KVxuICAgICAgICAgIHNldFRvb2woXCJzZWxlY3RcIik7XG4gICAgICAgICAgc2V0U2VsZWN0aW9uKFtuZXdDaGFydF0pXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGFiSW5kZXg9ey0xfSBvbktleURvd249e2UgPT4ge1xuICAgICAgY29uc3QgbW9kaWZpZXJzID0gZ2V0TW9kaWZpZXJzKGUpO1xuICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgICAgc2V0VG9vbChcInNlbGVjdFwiKVxuICAgICAgICAgIGlmICh0b29sID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3Rpb24oW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjYXNlIFwiY1wiOlxuICAgICAgICAgIGlmIChtb2RpZmllcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgc2V0VG9vbChcImluc2VydF9jaGFydFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJpXCI6XG4gICAgICAgICAgaWYgKG1vZGlmaWVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBzZXRUb29sKFwiaW5zZXJ0X2ltYWdlXCIpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcInRcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHNldFRvb2woXCJpbnNlcnRfdGV4dFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjoge1xuICAgICAgICAgIHVwZGF0ZVJlcG9ydCh7XG4gICAgICAgICAgICAuLi5yZXBvcnQsXG4gICAgICAgICAgICBzbGlkZXM6IHJlcG9ydC5zbGlkZXMubWFwKHNsaWRlID0+ICh7XG4gICAgICAgICAgICAgIC4uLnNsaWRlLFxuICAgICAgICAgICAgICBjaGFydHM6IHNsaWRlLmNoYXJ0cy5maWx0ZXIoY2hhcnQgPT4gc2VsZWN0aW9uLnNvbWUoc2VsZWN0aW9uID0+IHNlbGVjdGlvbi5pZCA9PT0gY2hhcnQuaWQpID09PSBmYWxzZSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikgJiYgbW9kaWZpZXJzLmhhcyhcInNoaWZ0XCIpKSB7IC8vIFJlZG9cbiAgICAgICAgICAgIGlmICh1bmRvSGlzdG9yeS5sZW5ndGggPD0gdW5kb0hpc3RvcnlJbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHVuZG9IaXN0b3J5SW5kZXggKyAxO1xuICAgICAgICAgICAgdXBkYXRlUmVwb3J0KHVuZG9IaXN0b3J5W25ld0luZGV4XSwgdHJ1ZSk7XG4gICAgICAgICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KG5ld0luZGV4KVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikpIHsgLy8gdW5kb1xuICAgICAgICAgICAgaWYgKHVuZG9IaXN0b3J5SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdW5kb0hpc3RvcnlJbmRleCAtIDE7XG4gICAgICAgICAgICB1cGRhdGVSZXBvcnQodW5kb0hpc3RvcnlbbmV3SW5kZXhdLCB0cnVlKTtcbiAgICAgICAgICAgIHNldFVuZG9IaXN0b3J5SW5kZXgobmV3SW5kZXgpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgfVxuICAgIH19PlxuICAgICAgeyhyZXBvcnRRdWVyeS5sb2FkaW5nIHx8IHVwZGF0ZVJlcG9ydFF1ZXJ5LmxvYWRpbmcpICYmIDxMb2FkaW5nSW5kaWNhdG9yIC8+fVxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPEhlYWRlclNlY3Rpb24+XG4gICAgICAgICAgPENydW1icz5cbiAgICAgICAgICAgIDxDcnVtYkxpbmsgaHJlZj1cIi9cIj5Ib21lPC9DcnVtYkxpbms+XG4gICAgICAgICAgICA8Q3J1bWJMaW5rIGhyZWY9XCIvXCI+UmVwb3J0czwvQ3J1bWJMaW5rPlxuICAgICAgICAgICAgPENydW1iVGl0bGU+e3JlcG9ydCA/IHJlcG9ydC50aXRsZSA6IFwiLi4uXCJ9PC9DcnVtYlRpdGxlPlxuICAgICAgICAgIDwvQ3J1bWJzID5cbiAgICAgICAgICA8TmV3RWxlbWVudHM+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2NoYXJ0XCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9jaGFydFwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9jaGFydFwifT5cbiAgICAgICAgICAgICAgPEljb24gaWNvbj1cImluc2VydF9jaGFydFwiIC8+XG4gICAgICAgICAgICA8L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2ltYWdlXCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9pbWFnZVwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9pbWFnZVwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3Bob3RvXCIgLz48L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X3RleHRcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb29sKFwiaW5zZXJ0X3RleHRcIil9IGFjdGl2ZT17dG9vbCA9PT0gXCJpbnNlcnRfdGV4dFwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3RleHRcIiAvPjwvRmxhdEJ1dHRvbj5cbiAgICAgICAgICA8L05ld0VsZW1lbnRzPlxuICAgICAgICA8L0hlYWRlclNlY3Rpb24+XG4gICAgICA8L0hlYWRlciA+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGJvdHRvbTogMTYsIHJpZ2h0OiAxNiB9fT57c2NhbGV9PC9kaXY+XG4gICAgICA8U3RhZ2UgdG9vbD17dG9vbH0gc2NhbGU9e3NjYWxlfT5cblxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRTbGlkZSAmJlxuICAgICAgICAgIDxTbGlkZSByZWY9e3BhcmVudFJlZn0gey4uLmRyYWdIYW5kbGVyc30gd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cbiAgICAgICAgICAgIHtbXCJpbnNlcnRfY2hhcnRcIiwgXCJpbnNlcnRfaW1hZ2VcIiwgXCJpbnNlcnRfdGV4dFwiXS5pbmNsdWRlcyh0b29sKSAmJiBpc0RyYWdnaW5nICYmXG4gICAgICAgICAgICAgIDxEcmFnQm94IHsuLi5nZXREcmFnQm94KGRyYWdQb3MsIGRyYWdPcmlnaW4pfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3NlbGVjdGVkU2xpZGUuY2hhcnRzLm1hcChjaGFydCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICA8Q2hhcnQga2V5PXtjaGFydC5pZH0gc2VsZWN0ZWQ9e3NlbGVjdGlvbi5zb21lKHMgPT4gcy5pZCA9PT0gY2hhcnQuaWQpfSB7Li4uY2hhcnR9IG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHRvb2wgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgPyBbLi4uc2VsZWN0aW9uLCBjaGFydF0gOiBbY2hhcnRdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICB9XG4gICAgICAgIHtyZXBvcnQgJiYgIXNlbGVjdGVkU2xpZGUgJiZcbiAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPVwiY3JlYXRlIHNsaWRlXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB1cGRhdGVSZXBvcnQoe1xuICAgICAgICAgICAgICAgIC4uLnJlcG9ydCxcbiAgICAgICAgICAgICAgICBzbGlkZXM6IFtcbiAgICAgICAgICAgICAgICAgIC4uLnJlcG9ydC5zbGlkZXMsXG4gICAgICAgICAgICAgICAgICB7IGlkOiBjdWlkKCksIGNoYXJ0czogW10gfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICBDcmVhdGUgWW91IGZpcnN0IFNsaWRlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgfVxuICAgICAgICB7cmVwb3J0UXVlcnkuZXJyb3IgJiYgPEVycm9yQm94IGVycm9yPXtyZXBvcnRRdWVyeS5lcnJvcn0gLz59XG4gICAgICA8L1N0YWdlPlxuXG4gICAgPC9MYXlvdXQgPlxuICApXG59XG5cbmNvbnN0IENoYXJ0ID0gc3R5bGVkLmRpdjxDaGFydEZyYWdtZW50ICYgeyBzZWxlY3RlZDogYm9vbGVhbiB9PmBcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGxlZnQ6ICR7cCA9PiBwLnh9cHg7XG4gIHRvcDogJHtwID0+IHAueX1weDtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodH1weDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgJHtwID0+IHAuc2VsZWN0ZWQgJiYgY3NzYGJvcmRlcjogMXB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtgfTtcbmBcblxuXG5jb25zdCBDZW50ZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6MTAwJTtcbiAgZGlzcGxheTpncmlkO1xuICBwbGFjZS1jb250ZW50OmNlbnRlciBjZW50ZXI7XG4gIGBcblxuXG50eXBlIERyYWdCb3hQcm9wcyA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG5jb25zdCBEcmFnQm94ID0gc3R5bGVkLmRpdjxEcmFnQm94UHJvcHM+YFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgd2lkdGg6JHtwID0+IHAud2lkdGh9cHg7XG4gIGhlaWdodDoke3AgPT4gcC5oZWlnaHR9cHg7XG4gIGxlZnQ6JHtwID0+IHAueH1weDtcbiAgdG9wOiR7cCA9PiBwLnl9cHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtcbmBcblxuY29uc3QgU2xpZGUgPSBzdHlsZWQuc2VjdGlvbjx7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH0+YFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6JHtwID0+IHAuaGVpZ2h0fXB4O1xuYFxuXG5jb25zdCBOZXdFbGVtZW50cyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC1nYXA6IDRweDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIHN0YXJ0O1xuYFxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIGdyaWQtZ2FwOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiNmNWY1ZjU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gIHBsYWNlLWNvbnRlbnQ6IHN0YXJ0IHN0cmV0Y2g7XG4gIG92ZXJmbG93OmhpZGRlbjtcbmBcblxuY29uc3QgU3RhZ2UgPSBzdHlsZWQubWFpbjx7IHRvb2w6IFRvb2wsIHNjYWxlOiBudW1iZXIgfT5gXG4gIGRpc3BsYXk6Z3JpZDtcbiAgd2lkdGg6MTAwJTtcbiAgcGxhY2UtY29udGVudDpjZW50ZXIgY2VudGVyO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gICR7cCA9PiB7XG4gICAgc3dpdGNoIChwLnRvb2wpIHtcbiAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfaW1hZ2VcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfdGV4dFwiOlxuICAgICAgICByZXR1cm4gY3NzYFxuICAgICAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgICAgICAgYFxuICAgIH1cbiAgfX1cbiAgJiA+ICoge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoJHtwID0+IHAuc2NhbGV9KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ0luZGljYXRvciA9ICgpID0+XG4gIDxMb2FkaW5nV3JhcHBlcj5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0+LjwvTG9hZGluZ0RvdD5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MjAwfT4uPC9Mb2FkaW5nRG90PlxuICAgIDxMb2FkaW5nRG90IGRlbGF5PXs0MDB9Pi48L0xvYWRpbmdEb3Q+XG4gIDwvTG9hZGluZ1dyYXBwZXI+XG5cbmNvbnN0IGp1bXBBbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6MDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eToxO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxucG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG5gXG5jb25zdCBMb2FkaW5nRG90ID0gc3R5bGVkLnNwYW48eyBkZWxheTogbnVtYmVyIH0+YFxuICBhbmltYXRpb246JHtqdW1wQW5pbWF0aW9ufSAxcyBlYXNlIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6JHtwID0+IHAuZGVsYXl9bXM7XG5gIl19 */"));

const NewElements = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_4___default()("div", {
  target: "e1nne1bm4",
  label: "NewElements"
})( false ? undefined : {
  name: "ecvamz",
  styles: "display:grid;grid-auto-flow:column;grid-gap:4px;place-content:center start;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L1JlcG9ydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK1Q4QiIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L1JlcG9ydC9SZXBvcnQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSwgdXNlUmVwb3J0VXBkYXRlTXV0YXRpb24sIENoYXJ0RnJhZ21lbnQsIFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzLCBSZXBvcnRGcmFnbWVudCwgUmVwb3J0R2V0RG9jdW1lbnQgfSBmcm9tIFwiLi4vY29kZWdlbi9ncmFwaHFsXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEVycm9yQm94IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRXJyb3JCb3hcIjtcbmltcG9ydCB7IENydW1icywgQ3J1bWJUaXRsZSwgQ3J1bWJMaW5rIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3J1bWJzXCI7XG5pbXBvcnQgeyBIZWFkZXIsIEhlYWRlclNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uXCI7XG5pbXBvcnQgeyBGbGF0QnV0dG9uLCBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBLZXlib2FyZEV2ZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IHVzZU1vdXNlRHJhZywgUG9zIH0gZnJvbSBcIi4uL2hvb2tzL2RyYWdcIjtcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IGN1aWQgZnJvbSBcImN1aWRcIlxuXG50eXBlIFRvb2wgPVxuICB8IFwiaW5zZXJ0X2NoYXJ0XCJcbiAgfCBcImluc2VydF9pbWFnZVwiXG4gIHwgXCJpbnNlcnRfdGV4dFwiXG4gIHwgXCJzZWxlY3RcIlxuXG5cbnR5cGUgU2VsZWN0aW9uID0gQ2hhcnRGcmFnbWVudFxuXG5cbmNvbnN0IHJlbW92ZVR5cGVuYW1lID0gKHJlcG9ydDogUmVwb3J0RnJhZ21lbnQpOiBSZXBvcnRVcGRhdGVNdXRhdGlvblZhcmlhYmxlc1tcInJlcG9ydFwiXSA9PiB7XG4gIGNvbnN0IHsgX190eXBlbmFtZSwgc2xpZGVzLCAuLi5yZXBvcnREYXRhIH0gPSByZXBvcnQ7XG4gIHJldHVybiB7XG4gICAgLi4ucmVwb3J0RGF0YSxcbiAgICBzbGlkZXM6IHNsaWRlcy5tYXAoKHsgX190eXBlbmFtZSwgY2hhcnRzLCAuLi5zbGlkZURhdGEgfSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2xpZGVEYXRhLFxuICAgICAgICBjaGFydHM6IGNoYXJ0cy5tYXAoKHsgX190eXBlbmFtZSwgLi4uY2hhcnREYXRhIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY2hhcnREYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBnZXRNb2RpZmllcnMgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT5cbiAgbmV3IFNldChbXG4gICAgZS5uYXRpdmVFdmVudC5tZXRhS2V5ICYmIFwibWV0YVwiLFxuICAgIGUubmF0aXZlRXZlbnQuY3RybEtleSAmJiBcImN0cmxcIixcbiAgICBlLm5hdGl2ZUV2ZW50LmFsdEtleSAmJiBcImFsdFwiLFxuICAgIGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgJiYgXCJzaGlmdFwiLFxuICBdLmZpbHRlcihCb29sZWFuKVxuICApXG5cbmV4cG9ydCBjb25zdCBSZXBvcnRQYWdlID0gKHByb3BzOiB7IGlkOiBzdHJpbmcsIHNsaWRlPzogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZSgxKVxuXG5cbiAgY29uc3QgW3Rvb2wsIHNldFRvb2xdID0gdXNlU3RhdGU8VG9vbD4oXCJzZWxlY3RcIilcbiAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlPFNlbGVjdGlvbltdPihbXSlcblxuICBjb25zdCBbdW5kb0hpc3RvcnksIHNldFVuZG9IaXN0b3J5XSA9IHVzZVN0YXRlPFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzW1wicmVwb3J0XCJdW10+KFtdKVxuICBjb25zdCBbdW5kb0hpc3RvcnlJbmRleCwgc2V0VW5kb0hpc3RvcnlJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cbiAgY29uc3QgcmVwb3J0UXVlcnkgPSB1c2VSZXBvcnRHZXRRdWVyeSh7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBpZDogcHJvcHMuaWRcbiAgICB9LFxuICAgIG9uQ29tcGxldGVkOiAoeyByZXBvcnQgfSkgPT4ge1xuICAgICAgc2V0U2NhbGUod2luZG93LmlubmVyV2lkdGggKiAwLjggLyByZXBvcnQud2lkdGgpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcG9ydCA9IHJlcG9ydFF1ZXJ5LmRhdGEgJiYgcmVwb3J0UXVlcnkuZGF0YS5yZXBvcnRcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZXBvcnQgJiYgdW5kb0hpc3RvcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRVbmRvSGlzdG9yeShbcmVwb3J0XSlcbiAgICB9XG4gIH0sIFtyZXBvcnRdKVxuXG4gIGNvbnN0IFtfdXBkYXRlUmVwb3J0LCB1cGRhdGVSZXBvcnRRdWVyeV0gPSB1c2VSZXBvcnRVcGRhdGVNdXRhdGlvbigpXG5cbiAgY29uc3QgdXBkYXRlUmVwb3J0ID0gKHJlcG9ydDogUmVwb3J0VXBkYXRlTXV0YXRpb25WYXJpYWJsZXNbXCJyZXBvcnRcIl0sIGlzVW5kbyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKCFpc1VuZG8pIHtcbiAgICAgIHNldFVuZG9IaXN0b3J5KFsuLi51bmRvSGlzdG9yeS5zbGljZSgwLCB1bmRvSGlzdG9yeUluZGV4ICsgMSksIHJlcG9ydF0pXG4gICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KHVuZG9IaXN0b3J5SW5kZXggKyAxKVxuXG4gICAgfVxuICAgIHJlcG9ydFF1ZXJ5LmNsaWVudC53cml0ZVF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBSZXBvcnRHZXREb2N1bWVudCxcbiAgICAgIHZhcmlhYmxlczogeyBpZDogcmVwb3J0LmlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHJlcG9ydFxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIF91cGRhdGVSZXBvcnQoe1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHJlcG9ydDogcmVtb3ZlVHlwZW5hbWUocmVwb3J0IGFzIFJlcG9ydEZyYWdtZW50KVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHJlcG9ydCkge1xuXG4gICAgICAgIHNldFNjYWxlKHdpbmRvdy5pbm5lcldpZHRoICogMC44IC8gcmVwb3J0LndpZHRoKVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlcilcbiAgfSwgW3JlcG9ydF0pXG5cbiAgY29uc3Qgc2VsZWN0ZWRTbGlkZSA9IHJlcG9ydCAmJiAocmVwb3J0LnNsaWRlcy5maW5kKHMgPT4gcy5pZCA9PT0gcHJvcHMuc2xpZGUpIHx8IHJlcG9ydC5zbGlkZXNbMF0pO1xuXG4gIGNvbnN0IGdldERyYWdCb3ggPSAocG9zOiBQb3MsIG9yaWdpbjogUG9zKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE1hdGgubWluKHBvcy54LCBvcmlnaW4ueCkgLyBzY2FsZSxcbiAgICAgIHk6IE1hdGgubWluKHBvcy55LCBvcmlnaW4ueSkgLyBzY2FsZSxcbiAgICAgIHdpZHRoOiBNYXRoLmFicyhwb3MueCAtIG9yaWdpbi54KSAvIHNjYWxlLFxuICAgICAgaGVpZ2h0OiBNYXRoLmFicyhwb3MueSAtIG9yaWdpbi55KSAvIHNjYWxlLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgZHJhZ0hhbmRsZXJzLCBkcmFnUG9zLCBkcmFnT3JpZ2luLCBpc0RyYWdnaW5nLCBwYXJlbnRSZWYgfSA9IHVzZU1vdXNlRHJhZyh7XG4gICAgb25EcmFnRW5kOiAocG9zLCBvcmlnaW4pID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGdldERyYWdCb3gocG9zLCBvcmlnaW4pO1xuICAgICAgc3dpdGNoICh0b29sKSB7XG4gICAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjoge1xuXG4gICAgICAgICAgY29uc3QgbmV3Q2hhcnQgPSB7XG4gICAgICAgICAgICBpZDogY3VpZCgpLFxuICAgICAgICAgICAgeDogTWF0aC5yb3VuZChib3gueCksXG4gICAgICAgICAgICB5OiBNYXRoLnJvdW5kKGJveC55KSxcbiAgICAgICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKGJveC53aWR0aCksXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQoYm94LmhlaWdodCksXG4gICAgICAgICAgICBfX3R5cGVuYW1lOiBcIkNoYXJ0XCIgYXMgXCJDaGFydFwiXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbmV3UmVwb3J0ID0ge1xuICAgICAgICAgICAgLi4ucmVwb3J0LFxuICAgICAgICAgICAgc2xpZGVzOiByZXBvcnQuc2xpZGVzLm1hcChzbGlkZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzbGlkZS5pZCA9PT0gc2VsZWN0ZWRTbGlkZS5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAuLi5zbGlkZSxcbiAgICAgICAgICAgICAgICAgIGNoYXJ0czogWy4uLnNsaWRlLmNoYXJ0cywgbmV3Q2hhcnRdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzbGlkZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVSZXBvcnQobmV3UmVwb3J0KVxuICAgICAgICAgIHNldFRvb2woXCJzZWxlY3RcIik7XG4gICAgICAgICAgc2V0U2VsZWN0aW9uKFtuZXdDaGFydF0pXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGFiSW5kZXg9ey0xfSBvbktleURvd249e2UgPT4ge1xuICAgICAgY29uc3QgbW9kaWZpZXJzID0gZ2V0TW9kaWZpZXJzKGUpO1xuICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgICAgc2V0VG9vbChcInNlbGVjdFwiKVxuICAgICAgICAgIGlmICh0b29sID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3Rpb24oW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjYXNlIFwiY1wiOlxuICAgICAgICAgIGlmIChtb2RpZmllcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgc2V0VG9vbChcImluc2VydF9jaGFydFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJpXCI6XG4gICAgICAgICAgaWYgKG1vZGlmaWVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBzZXRUb29sKFwiaW5zZXJ0X2ltYWdlXCIpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcInRcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHNldFRvb2woXCJpbnNlcnRfdGV4dFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjoge1xuICAgICAgICAgIHVwZGF0ZVJlcG9ydCh7XG4gICAgICAgICAgICAuLi5yZXBvcnQsXG4gICAgICAgICAgICBzbGlkZXM6IHJlcG9ydC5zbGlkZXMubWFwKHNsaWRlID0+ICh7XG4gICAgICAgICAgICAgIC4uLnNsaWRlLFxuICAgICAgICAgICAgICBjaGFydHM6IHNsaWRlLmNoYXJ0cy5maWx0ZXIoY2hhcnQgPT4gc2VsZWN0aW9uLnNvbWUoc2VsZWN0aW9uID0+IHNlbGVjdGlvbi5pZCA9PT0gY2hhcnQuaWQpID09PSBmYWxzZSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikgJiYgbW9kaWZpZXJzLmhhcyhcInNoaWZ0XCIpKSB7IC8vIFJlZG9cbiAgICAgICAgICAgIGlmICh1bmRvSGlzdG9yeS5sZW5ndGggPD0gdW5kb0hpc3RvcnlJbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHVuZG9IaXN0b3J5SW5kZXggKyAxO1xuICAgICAgICAgICAgdXBkYXRlUmVwb3J0KHVuZG9IaXN0b3J5W25ld0luZGV4XSwgdHJ1ZSk7XG4gICAgICAgICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KG5ld0luZGV4KVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikpIHsgLy8gdW5kb1xuICAgICAgICAgICAgaWYgKHVuZG9IaXN0b3J5SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdW5kb0hpc3RvcnlJbmRleCAtIDE7XG4gICAgICAgICAgICB1cGRhdGVSZXBvcnQodW5kb0hpc3RvcnlbbmV3SW5kZXhdLCB0cnVlKTtcbiAgICAgICAgICAgIHNldFVuZG9IaXN0b3J5SW5kZXgobmV3SW5kZXgpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgfVxuICAgIH19PlxuICAgICAgeyhyZXBvcnRRdWVyeS5sb2FkaW5nIHx8IHVwZGF0ZVJlcG9ydFF1ZXJ5LmxvYWRpbmcpICYmIDxMb2FkaW5nSW5kaWNhdG9yIC8+fVxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPEhlYWRlclNlY3Rpb24+XG4gICAgICAgICAgPENydW1icz5cbiAgICAgICAgICAgIDxDcnVtYkxpbmsgaHJlZj1cIi9cIj5Ib21lPC9DcnVtYkxpbms+XG4gICAgICAgICAgICA8Q3J1bWJMaW5rIGhyZWY9XCIvXCI+UmVwb3J0czwvQ3J1bWJMaW5rPlxuICAgICAgICAgICAgPENydW1iVGl0bGU+e3JlcG9ydCA/IHJlcG9ydC50aXRsZSA6IFwiLi4uXCJ9PC9DcnVtYlRpdGxlPlxuICAgICAgICAgIDwvQ3J1bWJzID5cbiAgICAgICAgICA8TmV3RWxlbWVudHM+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2NoYXJ0XCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9jaGFydFwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9jaGFydFwifT5cbiAgICAgICAgICAgICAgPEljb24gaWNvbj1cImluc2VydF9jaGFydFwiIC8+XG4gICAgICAgICAgICA8L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2ltYWdlXCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9pbWFnZVwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9pbWFnZVwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3Bob3RvXCIgLz48L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X3RleHRcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb29sKFwiaW5zZXJ0X3RleHRcIil9IGFjdGl2ZT17dG9vbCA9PT0gXCJpbnNlcnRfdGV4dFwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3RleHRcIiAvPjwvRmxhdEJ1dHRvbj5cbiAgICAgICAgICA8L05ld0VsZW1lbnRzPlxuICAgICAgICA8L0hlYWRlclNlY3Rpb24+XG4gICAgICA8L0hlYWRlciA+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGJvdHRvbTogMTYsIHJpZ2h0OiAxNiB9fT57c2NhbGV9PC9kaXY+XG4gICAgICA8U3RhZ2UgdG9vbD17dG9vbH0gc2NhbGU9e3NjYWxlfT5cblxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRTbGlkZSAmJlxuICAgICAgICAgIDxTbGlkZSByZWY9e3BhcmVudFJlZn0gey4uLmRyYWdIYW5kbGVyc30gd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cbiAgICAgICAgICAgIHtbXCJpbnNlcnRfY2hhcnRcIiwgXCJpbnNlcnRfaW1hZ2VcIiwgXCJpbnNlcnRfdGV4dFwiXS5pbmNsdWRlcyh0b29sKSAmJiBpc0RyYWdnaW5nICYmXG4gICAgICAgICAgICAgIDxEcmFnQm94IHsuLi5nZXREcmFnQm94KGRyYWdQb3MsIGRyYWdPcmlnaW4pfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3NlbGVjdGVkU2xpZGUuY2hhcnRzLm1hcChjaGFydCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICA8Q2hhcnQga2V5PXtjaGFydC5pZH0gc2VsZWN0ZWQ9e3NlbGVjdGlvbi5zb21lKHMgPT4gcy5pZCA9PT0gY2hhcnQuaWQpfSB7Li4uY2hhcnR9IG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHRvb2wgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgPyBbLi4uc2VsZWN0aW9uLCBjaGFydF0gOiBbY2hhcnRdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICB9XG4gICAgICAgIHtyZXBvcnQgJiYgIXNlbGVjdGVkU2xpZGUgJiZcbiAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPVwiY3JlYXRlIHNsaWRlXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB1cGRhdGVSZXBvcnQoe1xuICAgICAgICAgICAgICAgIC4uLnJlcG9ydCxcbiAgICAgICAgICAgICAgICBzbGlkZXM6IFtcbiAgICAgICAgICAgICAgICAgIC4uLnJlcG9ydC5zbGlkZXMsXG4gICAgICAgICAgICAgICAgICB7IGlkOiBjdWlkKCksIGNoYXJ0czogW10gfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICBDcmVhdGUgWW91IGZpcnN0IFNsaWRlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgfVxuICAgICAgICB7cmVwb3J0UXVlcnkuZXJyb3IgJiYgPEVycm9yQm94IGVycm9yPXtyZXBvcnRRdWVyeS5lcnJvcn0gLz59XG4gICAgICA8L1N0YWdlPlxuXG4gICAgPC9MYXlvdXQgPlxuICApXG59XG5cbmNvbnN0IENoYXJ0ID0gc3R5bGVkLmRpdjxDaGFydEZyYWdtZW50ICYgeyBzZWxlY3RlZDogYm9vbGVhbiB9PmBcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGxlZnQ6ICR7cCA9PiBwLnh9cHg7XG4gIHRvcDogJHtwID0+IHAueX1weDtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodH1weDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgJHtwID0+IHAuc2VsZWN0ZWQgJiYgY3NzYGJvcmRlcjogMXB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtgfTtcbmBcblxuXG5jb25zdCBDZW50ZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6MTAwJTtcbiAgZGlzcGxheTpncmlkO1xuICBwbGFjZS1jb250ZW50OmNlbnRlciBjZW50ZXI7XG4gIGBcblxuXG50eXBlIERyYWdCb3hQcm9wcyA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG5jb25zdCBEcmFnQm94ID0gc3R5bGVkLmRpdjxEcmFnQm94UHJvcHM+YFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgd2lkdGg6JHtwID0+IHAud2lkdGh9cHg7XG4gIGhlaWdodDoke3AgPT4gcC5oZWlnaHR9cHg7XG4gIGxlZnQ6JHtwID0+IHAueH1weDtcbiAgdG9wOiR7cCA9PiBwLnl9cHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtcbmBcblxuY29uc3QgU2xpZGUgPSBzdHlsZWQuc2VjdGlvbjx7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH0+YFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6JHtwID0+IHAuaGVpZ2h0fXB4O1xuYFxuXG5jb25zdCBOZXdFbGVtZW50cyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC1nYXA6IDRweDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIHN0YXJ0O1xuYFxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIGdyaWQtZ2FwOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiNmNWY1ZjU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gIHBsYWNlLWNvbnRlbnQ6IHN0YXJ0IHN0cmV0Y2g7XG4gIG92ZXJmbG93OmhpZGRlbjtcbmBcblxuY29uc3QgU3RhZ2UgPSBzdHlsZWQubWFpbjx7IHRvb2w6IFRvb2wsIHNjYWxlOiBudW1iZXIgfT5gXG4gIGRpc3BsYXk6Z3JpZDtcbiAgd2lkdGg6MTAwJTtcbiAgcGxhY2UtY29udGVudDpjZW50ZXIgY2VudGVyO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gICR7cCA9PiB7XG4gICAgc3dpdGNoIChwLnRvb2wpIHtcbiAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfaW1hZ2VcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfdGV4dFwiOlxuICAgICAgICByZXR1cm4gY3NzYFxuICAgICAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgICAgICAgYFxuICAgIH1cbiAgfX1cbiAgJiA+ICoge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoJHtwID0+IHAuc2NhbGV9KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ0luZGljYXRvciA9ICgpID0+XG4gIDxMb2FkaW5nV3JhcHBlcj5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0+LjwvTG9hZGluZ0RvdD5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MjAwfT4uPC9Mb2FkaW5nRG90PlxuICAgIDxMb2FkaW5nRG90IGRlbGF5PXs0MDB9Pi48L0xvYWRpbmdEb3Q+XG4gIDwvTG9hZGluZ1dyYXBwZXI+XG5cbmNvbnN0IGp1bXBBbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6MDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eToxO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxucG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG5gXG5jb25zdCBMb2FkaW5nRG90ID0gc3R5bGVkLnNwYW48eyBkZWxheTogbnVtYmVyIH0+YFxuICBhbmltYXRpb246JHtqdW1wQW5pbWF0aW9ufSAxcyBlYXNlIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6JHtwID0+IHAuZGVsYXl9bXM7XG5gIl19 */"
});

const Layout = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_4___default()("div", {
  target: "e1nne1bm5",
  label: "Layout"
})( false ? undefined : {
  name: "1dsk5u3",
  styles: "display:grid;height:100%;grid-gap:32px;background:#f5f5f5;grid-template-rows:auto 1fr;place-content:start stretch;overflow:hidden;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L1JlcG9ydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdVV5QiIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L1JlcG9ydC9SZXBvcnQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSwgdXNlUmVwb3J0VXBkYXRlTXV0YXRpb24sIENoYXJ0RnJhZ21lbnQsIFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzLCBSZXBvcnRGcmFnbWVudCwgUmVwb3J0R2V0RG9jdW1lbnQgfSBmcm9tIFwiLi4vY29kZWdlbi9ncmFwaHFsXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEVycm9yQm94IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRXJyb3JCb3hcIjtcbmltcG9ydCB7IENydW1icywgQ3J1bWJUaXRsZSwgQ3J1bWJMaW5rIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3J1bWJzXCI7XG5pbXBvcnQgeyBIZWFkZXIsIEhlYWRlclNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uXCI7XG5pbXBvcnQgeyBGbGF0QnV0dG9uLCBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBLZXlib2FyZEV2ZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IHVzZU1vdXNlRHJhZywgUG9zIH0gZnJvbSBcIi4uL2hvb2tzL2RyYWdcIjtcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IGN1aWQgZnJvbSBcImN1aWRcIlxuXG50eXBlIFRvb2wgPVxuICB8IFwiaW5zZXJ0X2NoYXJ0XCJcbiAgfCBcImluc2VydF9pbWFnZVwiXG4gIHwgXCJpbnNlcnRfdGV4dFwiXG4gIHwgXCJzZWxlY3RcIlxuXG5cbnR5cGUgU2VsZWN0aW9uID0gQ2hhcnRGcmFnbWVudFxuXG5cbmNvbnN0IHJlbW92ZVR5cGVuYW1lID0gKHJlcG9ydDogUmVwb3J0RnJhZ21lbnQpOiBSZXBvcnRVcGRhdGVNdXRhdGlvblZhcmlhYmxlc1tcInJlcG9ydFwiXSA9PiB7XG4gIGNvbnN0IHsgX190eXBlbmFtZSwgc2xpZGVzLCAuLi5yZXBvcnREYXRhIH0gPSByZXBvcnQ7XG4gIHJldHVybiB7XG4gICAgLi4ucmVwb3J0RGF0YSxcbiAgICBzbGlkZXM6IHNsaWRlcy5tYXAoKHsgX190eXBlbmFtZSwgY2hhcnRzLCAuLi5zbGlkZURhdGEgfSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2xpZGVEYXRhLFxuICAgICAgICBjaGFydHM6IGNoYXJ0cy5tYXAoKHsgX190eXBlbmFtZSwgLi4uY2hhcnREYXRhIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY2hhcnREYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBnZXRNb2RpZmllcnMgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT5cbiAgbmV3IFNldChbXG4gICAgZS5uYXRpdmVFdmVudC5tZXRhS2V5ICYmIFwibWV0YVwiLFxuICAgIGUubmF0aXZlRXZlbnQuY3RybEtleSAmJiBcImN0cmxcIixcbiAgICBlLm5hdGl2ZUV2ZW50LmFsdEtleSAmJiBcImFsdFwiLFxuICAgIGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgJiYgXCJzaGlmdFwiLFxuICBdLmZpbHRlcihCb29sZWFuKVxuICApXG5cbmV4cG9ydCBjb25zdCBSZXBvcnRQYWdlID0gKHByb3BzOiB7IGlkOiBzdHJpbmcsIHNsaWRlPzogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZSgxKVxuXG5cbiAgY29uc3QgW3Rvb2wsIHNldFRvb2xdID0gdXNlU3RhdGU8VG9vbD4oXCJzZWxlY3RcIilcbiAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlPFNlbGVjdGlvbltdPihbXSlcblxuICBjb25zdCBbdW5kb0hpc3RvcnksIHNldFVuZG9IaXN0b3J5XSA9IHVzZVN0YXRlPFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzW1wicmVwb3J0XCJdW10+KFtdKVxuICBjb25zdCBbdW5kb0hpc3RvcnlJbmRleCwgc2V0VW5kb0hpc3RvcnlJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cbiAgY29uc3QgcmVwb3J0UXVlcnkgPSB1c2VSZXBvcnRHZXRRdWVyeSh7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBpZDogcHJvcHMuaWRcbiAgICB9LFxuICAgIG9uQ29tcGxldGVkOiAoeyByZXBvcnQgfSkgPT4ge1xuICAgICAgc2V0U2NhbGUod2luZG93LmlubmVyV2lkdGggKiAwLjggLyByZXBvcnQud2lkdGgpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcG9ydCA9IHJlcG9ydFF1ZXJ5LmRhdGEgJiYgcmVwb3J0UXVlcnkuZGF0YS5yZXBvcnRcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZXBvcnQgJiYgdW5kb0hpc3RvcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRVbmRvSGlzdG9yeShbcmVwb3J0XSlcbiAgICB9XG4gIH0sIFtyZXBvcnRdKVxuXG4gIGNvbnN0IFtfdXBkYXRlUmVwb3J0LCB1cGRhdGVSZXBvcnRRdWVyeV0gPSB1c2VSZXBvcnRVcGRhdGVNdXRhdGlvbigpXG5cbiAgY29uc3QgdXBkYXRlUmVwb3J0ID0gKHJlcG9ydDogUmVwb3J0VXBkYXRlTXV0YXRpb25WYXJpYWJsZXNbXCJyZXBvcnRcIl0sIGlzVW5kbyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKCFpc1VuZG8pIHtcbiAgICAgIHNldFVuZG9IaXN0b3J5KFsuLi51bmRvSGlzdG9yeS5zbGljZSgwLCB1bmRvSGlzdG9yeUluZGV4ICsgMSksIHJlcG9ydF0pXG4gICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KHVuZG9IaXN0b3J5SW5kZXggKyAxKVxuXG4gICAgfVxuICAgIHJlcG9ydFF1ZXJ5LmNsaWVudC53cml0ZVF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBSZXBvcnRHZXREb2N1bWVudCxcbiAgICAgIHZhcmlhYmxlczogeyBpZDogcmVwb3J0LmlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHJlcG9ydFxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIF91cGRhdGVSZXBvcnQoe1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHJlcG9ydDogcmVtb3ZlVHlwZW5hbWUocmVwb3J0IGFzIFJlcG9ydEZyYWdtZW50KVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHJlcG9ydCkge1xuXG4gICAgICAgIHNldFNjYWxlKHdpbmRvdy5pbm5lcldpZHRoICogMC44IC8gcmVwb3J0LndpZHRoKVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlcilcbiAgfSwgW3JlcG9ydF0pXG5cbiAgY29uc3Qgc2VsZWN0ZWRTbGlkZSA9IHJlcG9ydCAmJiAocmVwb3J0LnNsaWRlcy5maW5kKHMgPT4gcy5pZCA9PT0gcHJvcHMuc2xpZGUpIHx8IHJlcG9ydC5zbGlkZXNbMF0pO1xuXG4gIGNvbnN0IGdldERyYWdCb3ggPSAocG9zOiBQb3MsIG9yaWdpbjogUG9zKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE1hdGgubWluKHBvcy54LCBvcmlnaW4ueCkgLyBzY2FsZSxcbiAgICAgIHk6IE1hdGgubWluKHBvcy55LCBvcmlnaW4ueSkgLyBzY2FsZSxcbiAgICAgIHdpZHRoOiBNYXRoLmFicyhwb3MueCAtIG9yaWdpbi54KSAvIHNjYWxlLFxuICAgICAgaGVpZ2h0OiBNYXRoLmFicyhwb3MueSAtIG9yaWdpbi55KSAvIHNjYWxlLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgZHJhZ0hhbmRsZXJzLCBkcmFnUG9zLCBkcmFnT3JpZ2luLCBpc0RyYWdnaW5nLCBwYXJlbnRSZWYgfSA9IHVzZU1vdXNlRHJhZyh7XG4gICAgb25EcmFnRW5kOiAocG9zLCBvcmlnaW4pID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGdldERyYWdCb3gocG9zLCBvcmlnaW4pO1xuICAgICAgc3dpdGNoICh0b29sKSB7XG4gICAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjoge1xuXG4gICAgICAgICAgY29uc3QgbmV3Q2hhcnQgPSB7XG4gICAgICAgICAgICBpZDogY3VpZCgpLFxuICAgICAgICAgICAgeDogTWF0aC5yb3VuZChib3gueCksXG4gICAgICAgICAgICB5OiBNYXRoLnJvdW5kKGJveC55KSxcbiAgICAgICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKGJveC53aWR0aCksXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQoYm94LmhlaWdodCksXG4gICAgICAgICAgICBfX3R5cGVuYW1lOiBcIkNoYXJ0XCIgYXMgXCJDaGFydFwiXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbmV3UmVwb3J0ID0ge1xuICAgICAgICAgICAgLi4ucmVwb3J0LFxuICAgICAgICAgICAgc2xpZGVzOiByZXBvcnQuc2xpZGVzLm1hcChzbGlkZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzbGlkZS5pZCA9PT0gc2VsZWN0ZWRTbGlkZS5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAuLi5zbGlkZSxcbiAgICAgICAgICAgICAgICAgIGNoYXJ0czogWy4uLnNsaWRlLmNoYXJ0cywgbmV3Q2hhcnRdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzbGlkZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVSZXBvcnQobmV3UmVwb3J0KVxuICAgICAgICAgIHNldFRvb2woXCJzZWxlY3RcIik7XG4gICAgICAgICAgc2V0U2VsZWN0aW9uKFtuZXdDaGFydF0pXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGFiSW5kZXg9ey0xfSBvbktleURvd249e2UgPT4ge1xuICAgICAgY29uc3QgbW9kaWZpZXJzID0gZ2V0TW9kaWZpZXJzKGUpO1xuICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgICAgc2V0VG9vbChcInNlbGVjdFwiKVxuICAgICAgICAgIGlmICh0b29sID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3Rpb24oW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjYXNlIFwiY1wiOlxuICAgICAgICAgIGlmIChtb2RpZmllcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgc2V0VG9vbChcImluc2VydF9jaGFydFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJpXCI6XG4gICAgICAgICAgaWYgKG1vZGlmaWVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBzZXRUb29sKFwiaW5zZXJ0X2ltYWdlXCIpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcInRcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHNldFRvb2woXCJpbnNlcnRfdGV4dFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjoge1xuICAgICAgICAgIHVwZGF0ZVJlcG9ydCh7XG4gICAgICAgICAgICAuLi5yZXBvcnQsXG4gICAgICAgICAgICBzbGlkZXM6IHJlcG9ydC5zbGlkZXMubWFwKHNsaWRlID0+ICh7XG4gICAgICAgICAgICAgIC4uLnNsaWRlLFxuICAgICAgICAgICAgICBjaGFydHM6IHNsaWRlLmNoYXJ0cy5maWx0ZXIoY2hhcnQgPT4gc2VsZWN0aW9uLnNvbWUoc2VsZWN0aW9uID0+IHNlbGVjdGlvbi5pZCA9PT0gY2hhcnQuaWQpID09PSBmYWxzZSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikgJiYgbW9kaWZpZXJzLmhhcyhcInNoaWZ0XCIpKSB7IC8vIFJlZG9cbiAgICAgICAgICAgIGlmICh1bmRvSGlzdG9yeS5sZW5ndGggPD0gdW5kb0hpc3RvcnlJbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHVuZG9IaXN0b3J5SW5kZXggKyAxO1xuICAgICAgICAgICAgdXBkYXRlUmVwb3J0KHVuZG9IaXN0b3J5W25ld0luZGV4XSwgdHJ1ZSk7XG4gICAgICAgICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KG5ld0luZGV4KVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikpIHsgLy8gdW5kb1xuICAgICAgICAgICAgaWYgKHVuZG9IaXN0b3J5SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdW5kb0hpc3RvcnlJbmRleCAtIDE7XG4gICAgICAgICAgICB1cGRhdGVSZXBvcnQodW5kb0hpc3RvcnlbbmV3SW5kZXhdLCB0cnVlKTtcbiAgICAgICAgICAgIHNldFVuZG9IaXN0b3J5SW5kZXgobmV3SW5kZXgpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgfVxuICAgIH19PlxuICAgICAgeyhyZXBvcnRRdWVyeS5sb2FkaW5nIHx8IHVwZGF0ZVJlcG9ydFF1ZXJ5LmxvYWRpbmcpICYmIDxMb2FkaW5nSW5kaWNhdG9yIC8+fVxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPEhlYWRlclNlY3Rpb24+XG4gICAgICAgICAgPENydW1icz5cbiAgICAgICAgICAgIDxDcnVtYkxpbmsgaHJlZj1cIi9cIj5Ib21lPC9DcnVtYkxpbms+XG4gICAgICAgICAgICA8Q3J1bWJMaW5rIGhyZWY9XCIvXCI+UmVwb3J0czwvQ3J1bWJMaW5rPlxuICAgICAgICAgICAgPENydW1iVGl0bGU+e3JlcG9ydCA/IHJlcG9ydC50aXRsZSA6IFwiLi4uXCJ9PC9DcnVtYlRpdGxlPlxuICAgICAgICAgIDwvQ3J1bWJzID5cbiAgICAgICAgICA8TmV3RWxlbWVudHM+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2NoYXJ0XCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9jaGFydFwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9jaGFydFwifT5cbiAgICAgICAgICAgICAgPEljb24gaWNvbj1cImluc2VydF9jaGFydFwiIC8+XG4gICAgICAgICAgICA8L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2ltYWdlXCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9pbWFnZVwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9pbWFnZVwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3Bob3RvXCIgLz48L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X3RleHRcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb29sKFwiaW5zZXJ0X3RleHRcIil9IGFjdGl2ZT17dG9vbCA9PT0gXCJpbnNlcnRfdGV4dFwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3RleHRcIiAvPjwvRmxhdEJ1dHRvbj5cbiAgICAgICAgICA8L05ld0VsZW1lbnRzPlxuICAgICAgICA8L0hlYWRlclNlY3Rpb24+XG4gICAgICA8L0hlYWRlciA+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGJvdHRvbTogMTYsIHJpZ2h0OiAxNiB9fT57c2NhbGV9PC9kaXY+XG4gICAgICA8U3RhZ2UgdG9vbD17dG9vbH0gc2NhbGU9e3NjYWxlfT5cblxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRTbGlkZSAmJlxuICAgICAgICAgIDxTbGlkZSByZWY9e3BhcmVudFJlZn0gey4uLmRyYWdIYW5kbGVyc30gd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cbiAgICAgICAgICAgIHtbXCJpbnNlcnRfY2hhcnRcIiwgXCJpbnNlcnRfaW1hZ2VcIiwgXCJpbnNlcnRfdGV4dFwiXS5pbmNsdWRlcyh0b29sKSAmJiBpc0RyYWdnaW5nICYmXG4gICAgICAgICAgICAgIDxEcmFnQm94IHsuLi5nZXREcmFnQm94KGRyYWdQb3MsIGRyYWdPcmlnaW4pfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3NlbGVjdGVkU2xpZGUuY2hhcnRzLm1hcChjaGFydCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICA8Q2hhcnQga2V5PXtjaGFydC5pZH0gc2VsZWN0ZWQ9e3NlbGVjdGlvbi5zb21lKHMgPT4gcy5pZCA9PT0gY2hhcnQuaWQpfSB7Li4uY2hhcnR9IG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHRvb2wgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgPyBbLi4uc2VsZWN0aW9uLCBjaGFydF0gOiBbY2hhcnRdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICB9XG4gICAgICAgIHtyZXBvcnQgJiYgIXNlbGVjdGVkU2xpZGUgJiZcbiAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPVwiY3JlYXRlIHNsaWRlXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB1cGRhdGVSZXBvcnQoe1xuICAgICAgICAgICAgICAgIC4uLnJlcG9ydCxcbiAgICAgICAgICAgICAgICBzbGlkZXM6IFtcbiAgICAgICAgICAgICAgICAgIC4uLnJlcG9ydC5zbGlkZXMsXG4gICAgICAgICAgICAgICAgICB7IGlkOiBjdWlkKCksIGNoYXJ0czogW10gfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICBDcmVhdGUgWW91IGZpcnN0IFNsaWRlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgfVxuICAgICAgICB7cmVwb3J0UXVlcnkuZXJyb3IgJiYgPEVycm9yQm94IGVycm9yPXtyZXBvcnRRdWVyeS5lcnJvcn0gLz59XG4gICAgICA8L1N0YWdlPlxuXG4gICAgPC9MYXlvdXQgPlxuICApXG59XG5cbmNvbnN0IENoYXJ0ID0gc3R5bGVkLmRpdjxDaGFydEZyYWdtZW50ICYgeyBzZWxlY3RlZDogYm9vbGVhbiB9PmBcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGxlZnQ6ICR7cCA9PiBwLnh9cHg7XG4gIHRvcDogJHtwID0+IHAueX1weDtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodH1weDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgJHtwID0+IHAuc2VsZWN0ZWQgJiYgY3NzYGJvcmRlcjogMXB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtgfTtcbmBcblxuXG5jb25zdCBDZW50ZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6MTAwJTtcbiAgZGlzcGxheTpncmlkO1xuICBwbGFjZS1jb250ZW50OmNlbnRlciBjZW50ZXI7XG4gIGBcblxuXG50eXBlIERyYWdCb3hQcm9wcyA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG5jb25zdCBEcmFnQm94ID0gc3R5bGVkLmRpdjxEcmFnQm94UHJvcHM+YFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgd2lkdGg6JHtwID0+IHAud2lkdGh9cHg7XG4gIGhlaWdodDoke3AgPT4gcC5oZWlnaHR9cHg7XG4gIGxlZnQ6JHtwID0+IHAueH1weDtcbiAgdG9wOiR7cCA9PiBwLnl9cHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtcbmBcblxuY29uc3QgU2xpZGUgPSBzdHlsZWQuc2VjdGlvbjx7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH0+YFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6JHtwID0+IHAuaGVpZ2h0fXB4O1xuYFxuXG5jb25zdCBOZXdFbGVtZW50cyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC1nYXA6IDRweDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIHN0YXJ0O1xuYFxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIGdyaWQtZ2FwOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiNmNWY1ZjU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gIHBsYWNlLWNvbnRlbnQ6IHN0YXJ0IHN0cmV0Y2g7XG4gIG92ZXJmbG93OmhpZGRlbjtcbmBcblxuY29uc3QgU3RhZ2UgPSBzdHlsZWQubWFpbjx7IHRvb2w6IFRvb2wsIHNjYWxlOiBudW1iZXIgfT5gXG4gIGRpc3BsYXk6Z3JpZDtcbiAgd2lkdGg6MTAwJTtcbiAgcGxhY2UtY29udGVudDpjZW50ZXIgY2VudGVyO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gICR7cCA9PiB7XG4gICAgc3dpdGNoIChwLnRvb2wpIHtcbiAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfaW1hZ2VcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfdGV4dFwiOlxuICAgICAgICByZXR1cm4gY3NzYFxuICAgICAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgICAgICAgYFxuICAgIH1cbiAgfX1cbiAgJiA+ICoge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoJHtwID0+IHAuc2NhbGV9KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ0luZGljYXRvciA9ICgpID0+XG4gIDxMb2FkaW5nV3JhcHBlcj5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0+LjwvTG9hZGluZ0RvdD5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MjAwfT4uPC9Mb2FkaW5nRG90PlxuICAgIDxMb2FkaW5nRG90IGRlbGF5PXs0MDB9Pi48L0xvYWRpbmdEb3Q+XG4gIDwvTG9hZGluZ1dyYXBwZXI+XG5cbmNvbnN0IGp1bXBBbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6MDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eToxO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxucG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG5gXG5jb25zdCBMb2FkaW5nRG90ID0gc3R5bGVkLnNwYW48eyBkZWxheTogbnVtYmVyIH0+YFxuICBhbmltYXRpb246JHtqdW1wQW5pbWF0aW9ufSAxcyBlYXNlIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6JHtwID0+IHAuZGVsYXl9bXM7XG5gIl19 */"
});

var _ref =  false ? undefined : {
  name: "gcwr8i-Stage",
  styles: "cursor:crosshair;label:Stage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L1JlcG9ydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMlZrQiIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L1JlcG9ydC9SZXBvcnQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSwgdXNlUmVwb3J0VXBkYXRlTXV0YXRpb24sIENoYXJ0RnJhZ21lbnQsIFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzLCBSZXBvcnRGcmFnbWVudCwgUmVwb3J0R2V0RG9jdW1lbnQgfSBmcm9tIFwiLi4vY29kZWdlbi9ncmFwaHFsXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEVycm9yQm94IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRXJyb3JCb3hcIjtcbmltcG9ydCB7IENydW1icywgQ3J1bWJUaXRsZSwgQ3J1bWJMaW5rIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3J1bWJzXCI7XG5pbXBvcnQgeyBIZWFkZXIsIEhlYWRlclNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uXCI7XG5pbXBvcnQgeyBGbGF0QnV0dG9uLCBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBLZXlib2FyZEV2ZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IHVzZU1vdXNlRHJhZywgUG9zIH0gZnJvbSBcIi4uL2hvb2tzL2RyYWdcIjtcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IGN1aWQgZnJvbSBcImN1aWRcIlxuXG50eXBlIFRvb2wgPVxuICB8IFwiaW5zZXJ0X2NoYXJ0XCJcbiAgfCBcImluc2VydF9pbWFnZVwiXG4gIHwgXCJpbnNlcnRfdGV4dFwiXG4gIHwgXCJzZWxlY3RcIlxuXG5cbnR5cGUgU2VsZWN0aW9uID0gQ2hhcnRGcmFnbWVudFxuXG5cbmNvbnN0IHJlbW92ZVR5cGVuYW1lID0gKHJlcG9ydDogUmVwb3J0RnJhZ21lbnQpOiBSZXBvcnRVcGRhdGVNdXRhdGlvblZhcmlhYmxlc1tcInJlcG9ydFwiXSA9PiB7XG4gIGNvbnN0IHsgX190eXBlbmFtZSwgc2xpZGVzLCAuLi5yZXBvcnREYXRhIH0gPSByZXBvcnQ7XG4gIHJldHVybiB7XG4gICAgLi4ucmVwb3J0RGF0YSxcbiAgICBzbGlkZXM6IHNsaWRlcy5tYXAoKHsgX190eXBlbmFtZSwgY2hhcnRzLCAuLi5zbGlkZURhdGEgfSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2xpZGVEYXRhLFxuICAgICAgICBjaGFydHM6IGNoYXJ0cy5tYXAoKHsgX190eXBlbmFtZSwgLi4uY2hhcnREYXRhIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY2hhcnREYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBnZXRNb2RpZmllcnMgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT5cbiAgbmV3IFNldChbXG4gICAgZS5uYXRpdmVFdmVudC5tZXRhS2V5ICYmIFwibWV0YVwiLFxuICAgIGUubmF0aXZlRXZlbnQuY3RybEtleSAmJiBcImN0cmxcIixcbiAgICBlLm5hdGl2ZUV2ZW50LmFsdEtleSAmJiBcImFsdFwiLFxuICAgIGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgJiYgXCJzaGlmdFwiLFxuICBdLmZpbHRlcihCb29sZWFuKVxuICApXG5cbmV4cG9ydCBjb25zdCBSZXBvcnRQYWdlID0gKHByb3BzOiB7IGlkOiBzdHJpbmcsIHNsaWRlPzogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZSgxKVxuXG5cbiAgY29uc3QgW3Rvb2wsIHNldFRvb2xdID0gdXNlU3RhdGU8VG9vbD4oXCJzZWxlY3RcIilcbiAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlPFNlbGVjdGlvbltdPihbXSlcblxuICBjb25zdCBbdW5kb0hpc3RvcnksIHNldFVuZG9IaXN0b3J5XSA9IHVzZVN0YXRlPFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzW1wicmVwb3J0XCJdW10+KFtdKVxuICBjb25zdCBbdW5kb0hpc3RvcnlJbmRleCwgc2V0VW5kb0hpc3RvcnlJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cbiAgY29uc3QgcmVwb3J0UXVlcnkgPSB1c2VSZXBvcnRHZXRRdWVyeSh7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBpZDogcHJvcHMuaWRcbiAgICB9LFxuICAgIG9uQ29tcGxldGVkOiAoeyByZXBvcnQgfSkgPT4ge1xuICAgICAgc2V0U2NhbGUod2luZG93LmlubmVyV2lkdGggKiAwLjggLyByZXBvcnQud2lkdGgpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcG9ydCA9IHJlcG9ydFF1ZXJ5LmRhdGEgJiYgcmVwb3J0UXVlcnkuZGF0YS5yZXBvcnRcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZXBvcnQgJiYgdW5kb0hpc3RvcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRVbmRvSGlzdG9yeShbcmVwb3J0XSlcbiAgICB9XG4gIH0sIFtyZXBvcnRdKVxuXG4gIGNvbnN0IFtfdXBkYXRlUmVwb3J0LCB1cGRhdGVSZXBvcnRRdWVyeV0gPSB1c2VSZXBvcnRVcGRhdGVNdXRhdGlvbigpXG5cbiAgY29uc3QgdXBkYXRlUmVwb3J0ID0gKHJlcG9ydDogUmVwb3J0VXBkYXRlTXV0YXRpb25WYXJpYWJsZXNbXCJyZXBvcnRcIl0sIGlzVW5kbyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKCFpc1VuZG8pIHtcbiAgICAgIHNldFVuZG9IaXN0b3J5KFsuLi51bmRvSGlzdG9yeS5zbGljZSgwLCB1bmRvSGlzdG9yeUluZGV4ICsgMSksIHJlcG9ydF0pXG4gICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KHVuZG9IaXN0b3J5SW5kZXggKyAxKVxuXG4gICAgfVxuICAgIHJlcG9ydFF1ZXJ5LmNsaWVudC53cml0ZVF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBSZXBvcnRHZXREb2N1bWVudCxcbiAgICAgIHZhcmlhYmxlczogeyBpZDogcmVwb3J0LmlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHJlcG9ydFxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIF91cGRhdGVSZXBvcnQoe1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHJlcG9ydDogcmVtb3ZlVHlwZW5hbWUocmVwb3J0IGFzIFJlcG9ydEZyYWdtZW50KVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHJlcG9ydCkge1xuXG4gICAgICAgIHNldFNjYWxlKHdpbmRvdy5pbm5lcldpZHRoICogMC44IC8gcmVwb3J0LndpZHRoKVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlcilcbiAgfSwgW3JlcG9ydF0pXG5cbiAgY29uc3Qgc2VsZWN0ZWRTbGlkZSA9IHJlcG9ydCAmJiAocmVwb3J0LnNsaWRlcy5maW5kKHMgPT4gcy5pZCA9PT0gcHJvcHMuc2xpZGUpIHx8IHJlcG9ydC5zbGlkZXNbMF0pO1xuXG4gIGNvbnN0IGdldERyYWdCb3ggPSAocG9zOiBQb3MsIG9yaWdpbjogUG9zKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE1hdGgubWluKHBvcy54LCBvcmlnaW4ueCkgLyBzY2FsZSxcbiAgICAgIHk6IE1hdGgubWluKHBvcy55LCBvcmlnaW4ueSkgLyBzY2FsZSxcbiAgICAgIHdpZHRoOiBNYXRoLmFicyhwb3MueCAtIG9yaWdpbi54KSAvIHNjYWxlLFxuICAgICAgaGVpZ2h0OiBNYXRoLmFicyhwb3MueSAtIG9yaWdpbi55KSAvIHNjYWxlLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgZHJhZ0hhbmRsZXJzLCBkcmFnUG9zLCBkcmFnT3JpZ2luLCBpc0RyYWdnaW5nLCBwYXJlbnRSZWYgfSA9IHVzZU1vdXNlRHJhZyh7XG4gICAgb25EcmFnRW5kOiAocG9zLCBvcmlnaW4pID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGdldERyYWdCb3gocG9zLCBvcmlnaW4pO1xuICAgICAgc3dpdGNoICh0b29sKSB7XG4gICAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjoge1xuXG4gICAgICAgICAgY29uc3QgbmV3Q2hhcnQgPSB7XG4gICAgICAgICAgICBpZDogY3VpZCgpLFxuICAgICAgICAgICAgeDogTWF0aC5yb3VuZChib3gueCksXG4gICAgICAgICAgICB5OiBNYXRoLnJvdW5kKGJveC55KSxcbiAgICAgICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKGJveC53aWR0aCksXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQoYm94LmhlaWdodCksXG4gICAgICAgICAgICBfX3R5cGVuYW1lOiBcIkNoYXJ0XCIgYXMgXCJDaGFydFwiXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbmV3UmVwb3J0ID0ge1xuICAgICAgICAgICAgLi4ucmVwb3J0LFxuICAgICAgICAgICAgc2xpZGVzOiByZXBvcnQuc2xpZGVzLm1hcChzbGlkZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzbGlkZS5pZCA9PT0gc2VsZWN0ZWRTbGlkZS5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAuLi5zbGlkZSxcbiAgICAgICAgICAgICAgICAgIGNoYXJ0czogWy4uLnNsaWRlLmNoYXJ0cywgbmV3Q2hhcnRdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzbGlkZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVSZXBvcnQobmV3UmVwb3J0KVxuICAgICAgICAgIHNldFRvb2woXCJzZWxlY3RcIik7XG4gICAgICAgICAgc2V0U2VsZWN0aW9uKFtuZXdDaGFydF0pXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGFiSW5kZXg9ey0xfSBvbktleURvd249e2UgPT4ge1xuICAgICAgY29uc3QgbW9kaWZpZXJzID0gZ2V0TW9kaWZpZXJzKGUpO1xuICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgICAgc2V0VG9vbChcInNlbGVjdFwiKVxuICAgICAgICAgIGlmICh0b29sID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3Rpb24oW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjYXNlIFwiY1wiOlxuICAgICAgICAgIGlmIChtb2RpZmllcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgc2V0VG9vbChcImluc2VydF9jaGFydFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJpXCI6XG4gICAgICAgICAgaWYgKG1vZGlmaWVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBzZXRUb29sKFwiaW5zZXJ0X2ltYWdlXCIpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcInRcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHNldFRvb2woXCJpbnNlcnRfdGV4dFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjoge1xuICAgICAgICAgIHVwZGF0ZVJlcG9ydCh7XG4gICAgICAgICAgICAuLi5yZXBvcnQsXG4gICAgICAgICAgICBzbGlkZXM6IHJlcG9ydC5zbGlkZXMubWFwKHNsaWRlID0+ICh7XG4gICAgICAgICAgICAgIC4uLnNsaWRlLFxuICAgICAgICAgICAgICBjaGFydHM6IHNsaWRlLmNoYXJ0cy5maWx0ZXIoY2hhcnQgPT4gc2VsZWN0aW9uLnNvbWUoc2VsZWN0aW9uID0+IHNlbGVjdGlvbi5pZCA9PT0gY2hhcnQuaWQpID09PSBmYWxzZSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikgJiYgbW9kaWZpZXJzLmhhcyhcInNoaWZ0XCIpKSB7IC8vIFJlZG9cbiAgICAgICAgICAgIGlmICh1bmRvSGlzdG9yeS5sZW5ndGggPD0gdW5kb0hpc3RvcnlJbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHVuZG9IaXN0b3J5SW5kZXggKyAxO1xuICAgICAgICAgICAgdXBkYXRlUmVwb3J0KHVuZG9IaXN0b3J5W25ld0luZGV4XSwgdHJ1ZSk7XG4gICAgICAgICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KG5ld0luZGV4KVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikpIHsgLy8gdW5kb1xuICAgICAgICAgICAgaWYgKHVuZG9IaXN0b3J5SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdW5kb0hpc3RvcnlJbmRleCAtIDE7XG4gICAgICAgICAgICB1cGRhdGVSZXBvcnQodW5kb0hpc3RvcnlbbmV3SW5kZXhdLCB0cnVlKTtcbiAgICAgICAgICAgIHNldFVuZG9IaXN0b3J5SW5kZXgobmV3SW5kZXgpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgfVxuICAgIH19PlxuICAgICAgeyhyZXBvcnRRdWVyeS5sb2FkaW5nIHx8IHVwZGF0ZVJlcG9ydFF1ZXJ5LmxvYWRpbmcpICYmIDxMb2FkaW5nSW5kaWNhdG9yIC8+fVxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPEhlYWRlclNlY3Rpb24+XG4gICAgICAgICAgPENydW1icz5cbiAgICAgICAgICAgIDxDcnVtYkxpbmsgaHJlZj1cIi9cIj5Ib21lPC9DcnVtYkxpbms+XG4gICAgICAgICAgICA8Q3J1bWJMaW5rIGhyZWY9XCIvXCI+UmVwb3J0czwvQ3J1bWJMaW5rPlxuICAgICAgICAgICAgPENydW1iVGl0bGU+e3JlcG9ydCA/IHJlcG9ydC50aXRsZSA6IFwiLi4uXCJ9PC9DcnVtYlRpdGxlPlxuICAgICAgICAgIDwvQ3J1bWJzID5cbiAgICAgICAgICA8TmV3RWxlbWVudHM+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2NoYXJ0XCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9jaGFydFwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9jaGFydFwifT5cbiAgICAgICAgICAgICAgPEljb24gaWNvbj1cImluc2VydF9jaGFydFwiIC8+XG4gICAgICAgICAgICA8L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2ltYWdlXCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9pbWFnZVwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9pbWFnZVwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3Bob3RvXCIgLz48L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X3RleHRcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb29sKFwiaW5zZXJ0X3RleHRcIil9IGFjdGl2ZT17dG9vbCA9PT0gXCJpbnNlcnRfdGV4dFwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3RleHRcIiAvPjwvRmxhdEJ1dHRvbj5cbiAgICAgICAgICA8L05ld0VsZW1lbnRzPlxuICAgICAgICA8L0hlYWRlclNlY3Rpb24+XG4gICAgICA8L0hlYWRlciA+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGJvdHRvbTogMTYsIHJpZ2h0OiAxNiB9fT57c2NhbGV9PC9kaXY+XG4gICAgICA8U3RhZ2UgdG9vbD17dG9vbH0gc2NhbGU9e3NjYWxlfT5cblxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRTbGlkZSAmJlxuICAgICAgICAgIDxTbGlkZSByZWY9e3BhcmVudFJlZn0gey4uLmRyYWdIYW5kbGVyc30gd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cbiAgICAgICAgICAgIHtbXCJpbnNlcnRfY2hhcnRcIiwgXCJpbnNlcnRfaW1hZ2VcIiwgXCJpbnNlcnRfdGV4dFwiXS5pbmNsdWRlcyh0b29sKSAmJiBpc0RyYWdnaW5nICYmXG4gICAgICAgICAgICAgIDxEcmFnQm94IHsuLi5nZXREcmFnQm94KGRyYWdQb3MsIGRyYWdPcmlnaW4pfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3NlbGVjdGVkU2xpZGUuY2hhcnRzLm1hcChjaGFydCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICA8Q2hhcnQga2V5PXtjaGFydC5pZH0gc2VsZWN0ZWQ9e3NlbGVjdGlvbi5zb21lKHMgPT4gcy5pZCA9PT0gY2hhcnQuaWQpfSB7Li4uY2hhcnR9IG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHRvb2wgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgPyBbLi4uc2VsZWN0aW9uLCBjaGFydF0gOiBbY2hhcnRdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICB9XG4gICAgICAgIHtyZXBvcnQgJiYgIXNlbGVjdGVkU2xpZGUgJiZcbiAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPVwiY3JlYXRlIHNsaWRlXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB1cGRhdGVSZXBvcnQoe1xuICAgICAgICAgICAgICAgIC4uLnJlcG9ydCxcbiAgICAgICAgICAgICAgICBzbGlkZXM6IFtcbiAgICAgICAgICAgICAgICAgIC4uLnJlcG9ydC5zbGlkZXMsXG4gICAgICAgICAgICAgICAgICB7IGlkOiBjdWlkKCksIGNoYXJ0czogW10gfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICBDcmVhdGUgWW91IGZpcnN0IFNsaWRlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgfVxuICAgICAgICB7cmVwb3J0UXVlcnkuZXJyb3IgJiYgPEVycm9yQm94IGVycm9yPXtyZXBvcnRRdWVyeS5lcnJvcn0gLz59XG4gICAgICA8L1N0YWdlPlxuXG4gICAgPC9MYXlvdXQgPlxuICApXG59XG5cbmNvbnN0IENoYXJ0ID0gc3R5bGVkLmRpdjxDaGFydEZyYWdtZW50ICYgeyBzZWxlY3RlZDogYm9vbGVhbiB9PmBcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGxlZnQ6ICR7cCA9PiBwLnh9cHg7XG4gIHRvcDogJHtwID0+IHAueX1weDtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodH1weDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgJHtwID0+IHAuc2VsZWN0ZWQgJiYgY3NzYGJvcmRlcjogMXB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtgfTtcbmBcblxuXG5jb25zdCBDZW50ZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6MTAwJTtcbiAgZGlzcGxheTpncmlkO1xuICBwbGFjZS1jb250ZW50OmNlbnRlciBjZW50ZXI7XG4gIGBcblxuXG50eXBlIERyYWdCb3hQcm9wcyA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG5jb25zdCBEcmFnQm94ID0gc3R5bGVkLmRpdjxEcmFnQm94UHJvcHM+YFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgd2lkdGg6JHtwID0+IHAud2lkdGh9cHg7XG4gIGhlaWdodDoke3AgPT4gcC5oZWlnaHR9cHg7XG4gIGxlZnQ6JHtwID0+IHAueH1weDtcbiAgdG9wOiR7cCA9PiBwLnl9cHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtcbmBcblxuY29uc3QgU2xpZGUgPSBzdHlsZWQuc2VjdGlvbjx7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH0+YFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6JHtwID0+IHAuaGVpZ2h0fXB4O1xuYFxuXG5jb25zdCBOZXdFbGVtZW50cyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC1nYXA6IDRweDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIHN0YXJ0O1xuYFxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIGdyaWQtZ2FwOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiNmNWY1ZjU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gIHBsYWNlLWNvbnRlbnQ6IHN0YXJ0IHN0cmV0Y2g7XG4gIG92ZXJmbG93OmhpZGRlbjtcbmBcblxuY29uc3QgU3RhZ2UgPSBzdHlsZWQubWFpbjx7IHRvb2w6IFRvb2wsIHNjYWxlOiBudW1iZXIgfT5gXG4gIGRpc3BsYXk6Z3JpZDtcbiAgd2lkdGg6MTAwJTtcbiAgcGxhY2UtY29udGVudDpjZW50ZXIgY2VudGVyO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gICR7cCA9PiB7XG4gICAgc3dpdGNoIChwLnRvb2wpIHtcbiAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfaW1hZ2VcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfdGV4dFwiOlxuICAgICAgICByZXR1cm4gY3NzYFxuICAgICAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgICAgICAgYFxuICAgIH1cbiAgfX1cbiAgJiA+ICoge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoJHtwID0+IHAuc2NhbGV9KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ0luZGljYXRvciA9ICgpID0+XG4gIDxMb2FkaW5nV3JhcHBlcj5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0+LjwvTG9hZGluZ0RvdD5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MjAwfT4uPC9Mb2FkaW5nRG90PlxuICAgIDxMb2FkaW5nRG90IGRlbGF5PXs0MDB9Pi48L0xvYWRpbmdEb3Q+XG4gIDwvTG9hZGluZ1dyYXBwZXI+XG5cbmNvbnN0IGp1bXBBbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6MDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eToxO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxucG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG5gXG5jb25zdCBMb2FkaW5nRG90ID0gc3R5bGVkLnNwYW48eyBkZWxheTogbnVtYmVyIH0+YFxuICBhbmltYXRpb246JHtqdW1wQW5pbWF0aW9ufSAxcyBlYXNlIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6JHtwID0+IHAuZGVsYXl9bXM7XG5gIl19 */"
};

const Stage = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_4___default()("main", {
  target: "e1nne1bm6",
  label: "Stage"
})("display:grid;width:100%;place-content:center center;overflow:hidden;", p => {
  switch (p.tool) {
    case "insert_chart":
    case "insert_image":
    case "insert_text":
      return (
        /*#__PURE__*/
        _ref
      );
  }
}, " & > *{transform:scale(", p => p.scale, ");transform-origin:50% 50%;}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L1JlcG9ydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaVZ3RCIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L1JlcG9ydC9SZXBvcnQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSwgdXNlUmVwb3J0VXBkYXRlTXV0YXRpb24sIENoYXJ0RnJhZ21lbnQsIFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzLCBSZXBvcnRGcmFnbWVudCwgUmVwb3J0R2V0RG9jdW1lbnQgfSBmcm9tIFwiLi4vY29kZWdlbi9ncmFwaHFsXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEVycm9yQm94IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRXJyb3JCb3hcIjtcbmltcG9ydCB7IENydW1icywgQ3J1bWJUaXRsZSwgQ3J1bWJMaW5rIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3J1bWJzXCI7XG5pbXBvcnQgeyBIZWFkZXIsIEhlYWRlclNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uXCI7XG5pbXBvcnQgeyBGbGF0QnV0dG9uLCBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBLZXlib2FyZEV2ZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IHVzZU1vdXNlRHJhZywgUG9zIH0gZnJvbSBcIi4uL2hvb2tzL2RyYWdcIjtcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IGN1aWQgZnJvbSBcImN1aWRcIlxuXG50eXBlIFRvb2wgPVxuICB8IFwiaW5zZXJ0X2NoYXJ0XCJcbiAgfCBcImluc2VydF9pbWFnZVwiXG4gIHwgXCJpbnNlcnRfdGV4dFwiXG4gIHwgXCJzZWxlY3RcIlxuXG5cbnR5cGUgU2VsZWN0aW9uID0gQ2hhcnRGcmFnbWVudFxuXG5cbmNvbnN0IHJlbW92ZVR5cGVuYW1lID0gKHJlcG9ydDogUmVwb3J0RnJhZ21lbnQpOiBSZXBvcnRVcGRhdGVNdXRhdGlvblZhcmlhYmxlc1tcInJlcG9ydFwiXSA9PiB7XG4gIGNvbnN0IHsgX190eXBlbmFtZSwgc2xpZGVzLCAuLi5yZXBvcnREYXRhIH0gPSByZXBvcnQ7XG4gIHJldHVybiB7XG4gICAgLi4ucmVwb3J0RGF0YSxcbiAgICBzbGlkZXM6IHNsaWRlcy5tYXAoKHsgX190eXBlbmFtZSwgY2hhcnRzLCAuLi5zbGlkZURhdGEgfSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2xpZGVEYXRhLFxuICAgICAgICBjaGFydHM6IGNoYXJ0cy5tYXAoKHsgX190eXBlbmFtZSwgLi4uY2hhcnREYXRhIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY2hhcnREYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBnZXRNb2RpZmllcnMgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT5cbiAgbmV3IFNldChbXG4gICAgZS5uYXRpdmVFdmVudC5tZXRhS2V5ICYmIFwibWV0YVwiLFxuICAgIGUubmF0aXZlRXZlbnQuY3RybEtleSAmJiBcImN0cmxcIixcbiAgICBlLm5hdGl2ZUV2ZW50LmFsdEtleSAmJiBcImFsdFwiLFxuICAgIGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgJiYgXCJzaGlmdFwiLFxuICBdLmZpbHRlcihCb29sZWFuKVxuICApXG5cbmV4cG9ydCBjb25zdCBSZXBvcnRQYWdlID0gKHByb3BzOiB7IGlkOiBzdHJpbmcsIHNsaWRlPzogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZSgxKVxuXG5cbiAgY29uc3QgW3Rvb2wsIHNldFRvb2xdID0gdXNlU3RhdGU8VG9vbD4oXCJzZWxlY3RcIilcbiAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlPFNlbGVjdGlvbltdPihbXSlcblxuICBjb25zdCBbdW5kb0hpc3RvcnksIHNldFVuZG9IaXN0b3J5XSA9IHVzZVN0YXRlPFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzW1wicmVwb3J0XCJdW10+KFtdKVxuICBjb25zdCBbdW5kb0hpc3RvcnlJbmRleCwgc2V0VW5kb0hpc3RvcnlJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cbiAgY29uc3QgcmVwb3J0UXVlcnkgPSB1c2VSZXBvcnRHZXRRdWVyeSh7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBpZDogcHJvcHMuaWRcbiAgICB9LFxuICAgIG9uQ29tcGxldGVkOiAoeyByZXBvcnQgfSkgPT4ge1xuICAgICAgc2V0U2NhbGUod2luZG93LmlubmVyV2lkdGggKiAwLjggLyByZXBvcnQud2lkdGgpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcG9ydCA9IHJlcG9ydFF1ZXJ5LmRhdGEgJiYgcmVwb3J0UXVlcnkuZGF0YS5yZXBvcnRcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZXBvcnQgJiYgdW5kb0hpc3RvcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRVbmRvSGlzdG9yeShbcmVwb3J0XSlcbiAgICB9XG4gIH0sIFtyZXBvcnRdKVxuXG4gIGNvbnN0IFtfdXBkYXRlUmVwb3J0LCB1cGRhdGVSZXBvcnRRdWVyeV0gPSB1c2VSZXBvcnRVcGRhdGVNdXRhdGlvbigpXG5cbiAgY29uc3QgdXBkYXRlUmVwb3J0ID0gKHJlcG9ydDogUmVwb3J0VXBkYXRlTXV0YXRpb25WYXJpYWJsZXNbXCJyZXBvcnRcIl0sIGlzVW5kbyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKCFpc1VuZG8pIHtcbiAgICAgIHNldFVuZG9IaXN0b3J5KFsuLi51bmRvSGlzdG9yeS5zbGljZSgwLCB1bmRvSGlzdG9yeUluZGV4ICsgMSksIHJlcG9ydF0pXG4gICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KHVuZG9IaXN0b3J5SW5kZXggKyAxKVxuXG4gICAgfVxuICAgIHJlcG9ydFF1ZXJ5LmNsaWVudC53cml0ZVF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBSZXBvcnRHZXREb2N1bWVudCxcbiAgICAgIHZhcmlhYmxlczogeyBpZDogcmVwb3J0LmlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHJlcG9ydFxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIF91cGRhdGVSZXBvcnQoe1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHJlcG9ydDogcmVtb3ZlVHlwZW5hbWUocmVwb3J0IGFzIFJlcG9ydEZyYWdtZW50KVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHJlcG9ydCkge1xuXG4gICAgICAgIHNldFNjYWxlKHdpbmRvdy5pbm5lcldpZHRoICogMC44IC8gcmVwb3J0LndpZHRoKVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlcilcbiAgfSwgW3JlcG9ydF0pXG5cbiAgY29uc3Qgc2VsZWN0ZWRTbGlkZSA9IHJlcG9ydCAmJiAocmVwb3J0LnNsaWRlcy5maW5kKHMgPT4gcy5pZCA9PT0gcHJvcHMuc2xpZGUpIHx8IHJlcG9ydC5zbGlkZXNbMF0pO1xuXG4gIGNvbnN0IGdldERyYWdCb3ggPSAocG9zOiBQb3MsIG9yaWdpbjogUG9zKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE1hdGgubWluKHBvcy54LCBvcmlnaW4ueCkgLyBzY2FsZSxcbiAgICAgIHk6IE1hdGgubWluKHBvcy55LCBvcmlnaW4ueSkgLyBzY2FsZSxcbiAgICAgIHdpZHRoOiBNYXRoLmFicyhwb3MueCAtIG9yaWdpbi54KSAvIHNjYWxlLFxuICAgICAgaGVpZ2h0OiBNYXRoLmFicyhwb3MueSAtIG9yaWdpbi55KSAvIHNjYWxlLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgZHJhZ0hhbmRsZXJzLCBkcmFnUG9zLCBkcmFnT3JpZ2luLCBpc0RyYWdnaW5nLCBwYXJlbnRSZWYgfSA9IHVzZU1vdXNlRHJhZyh7XG4gICAgb25EcmFnRW5kOiAocG9zLCBvcmlnaW4pID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGdldERyYWdCb3gocG9zLCBvcmlnaW4pO1xuICAgICAgc3dpdGNoICh0b29sKSB7XG4gICAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjoge1xuXG4gICAgICAgICAgY29uc3QgbmV3Q2hhcnQgPSB7XG4gICAgICAgICAgICBpZDogY3VpZCgpLFxuICAgICAgICAgICAgeDogTWF0aC5yb3VuZChib3gueCksXG4gICAgICAgICAgICB5OiBNYXRoLnJvdW5kKGJveC55KSxcbiAgICAgICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKGJveC53aWR0aCksXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQoYm94LmhlaWdodCksXG4gICAgICAgICAgICBfX3R5cGVuYW1lOiBcIkNoYXJ0XCIgYXMgXCJDaGFydFwiXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbmV3UmVwb3J0ID0ge1xuICAgICAgICAgICAgLi4ucmVwb3J0LFxuICAgICAgICAgICAgc2xpZGVzOiByZXBvcnQuc2xpZGVzLm1hcChzbGlkZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzbGlkZS5pZCA9PT0gc2VsZWN0ZWRTbGlkZS5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAuLi5zbGlkZSxcbiAgICAgICAgICAgICAgICAgIGNoYXJ0czogWy4uLnNsaWRlLmNoYXJ0cywgbmV3Q2hhcnRdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzbGlkZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVSZXBvcnQobmV3UmVwb3J0KVxuICAgICAgICAgIHNldFRvb2woXCJzZWxlY3RcIik7XG4gICAgICAgICAgc2V0U2VsZWN0aW9uKFtuZXdDaGFydF0pXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGFiSW5kZXg9ey0xfSBvbktleURvd249e2UgPT4ge1xuICAgICAgY29uc3QgbW9kaWZpZXJzID0gZ2V0TW9kaWZpZXJzKGUpO1xuICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgICAgc2V0VG9vbChcInNlbGVjdFwiKVxuICAgICAgICAgIGlmICh0b29sID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3Rpb24oW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjYXNlIFwiY1wiOlxuICAgICAgICAgIGlmIChtb2RpZmllcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgc2V0VG9vbChcImluc2VydF9jaGFydFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJpXCI6XG4gICAgICAgICAgaWYgKG1vZGlmaWVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBzZXRUb29sKFwiaW5zZXJ0X2ltYWdlXCIpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcInRcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHNldFRvb2woXCJpbnNlcnRfdGV4dFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjoge1xuICAgICAgICAgIHVwZGF0ZVJlcG9ydCh7XG4gICAgICAgICAgICAuLi5yZXBvcnQsXG4gICAgICAgICAgICBzbGlkZXM6IHJlcG9ydC5zbGlkZXMubWFwKHNsaWRlID0+ICh7XG4gICAgICAgICAgICAgIC4uLnNsaWRlLFxuICAgICAgICAgICAgICBjaGFydHM6IHNsaWRlLmNoYXJ0cy5maWx0ZXIoY2hhcnQgPT4gc2VsZWN0aW9uLnNvbWUoc2VsZWN0aW9uID0+IHNlbGVjdGlvbi5pZCA9PT0gY2hhcnQuaWQpID09PSBmYWxzZSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikgJiYgbW9kaWZpZXJzLmhhcyhcInNoaWZ0XCIpKSB7IC8vIFJlZG9cbiAgICAgICAgICAgIGlmICh1bmRvSGlzdG9yeS5sZW5ndGggPD0gdW5kb0hpc3RvcnlJbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHVuZG9IaXN0b3J5SW5kZXggKyAxO1xuICAgICAgICAgICAgdXBkYXRlUmVwb3J0KHVuZG9IaXN0b3J5W25ld0luZGV4XSwgdHJ1ZSk7XG4gICAgICAgICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KG5ld0luZGV4KVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikpIHsgLy8gdW5kb1xuICAgICAgICAgICAgaWYgKHVuZG9IaXN0b3J5SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdW5kb0hpc3RvcnlJbmRleCAtIDE7XG4gICAgICAgICAgICB1cGRhdGVSZXBvcnQodW5kb0hpc3RvcnlbbmV3SW5kZXhdLCB0cnVlKTtcbiAgICAgICAgICAgIHNldFVuZG9IaXN0b3J5SW5kZXgobmV3SW5kZXgpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgfVxuICAgIH19PlxuICAgICAgeyhyZXBvcnRRdWVyeS5sb2FkaW5nIHx8IHVwZGF0ZVJlcG9ydFF1ZXJ5LmxvYWRpbmcpICYmIDxMb2FkaW5nSW5kaWNhdG9yIC8+fVxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPEhlYWRlclNlY3Rpb24+XG4gICAgICAgICAgPENydW1icz5cbiAgICAgICAgICAgIDxDcnVtYkxpbmsgaHJlZj1cIi9cIj5Ib21lPC9DcnVtYkxpbms+XG4gICAgICAgICAgICA8Q3J1bWJMaW5rIGhyZWY9XCIvXCI+UmVwb3J0czwvQ3J1bWJMaW5rPlxuICAgICAgICAgICAgPENydW1iVGl0bGU+e3JlcG9ydCA/IHJlcG9ydC50aXRsZSA6IFwiLi4uXCJ9PC9DcnVtYlRpdGxlPlxuICAgICAgICAgIDwvQ3J1bWJzID5cbiAgICAgICAgICA8TmV3RWxlbWVudHM+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2NoYXJ0XCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9jaGFydFwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9jaGFydFwifT5cbiAgICAgICAgICAgICAgPEljb24gaWNvbj1cImluc2VydF9jaGFydFwiIC8+XG4gICAgICAgICAgICA8L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2ltYWdlXCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9pbWFnZVwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9pbWFnZVwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3Bob3RvXCIgLz48L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X3RleHRcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb29sKFwiaW5zZXJ0X3RleHRcIil9IGFjdGl2ZT17dG9vbCA9PT0gXCJpbnNlcnRfdGV4dFwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3RleHRcIiAvPjwvRmxhdEJ1dHRvbj5cbiAgICAgICAgICA8L05ld0VsZW1lbnRzPlxuICAgICAgICA8L0hlYWRlclNlY3Rpb24+XG4gICAgICA8L0hlYWRlciA+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGJvdHRvbTogMTYsIHJpZ2h0OiAxNiB9fT57c2NhbGV9PC9kaXY+XG4gICAgICA8U3RhZ2UgdG9vbD17dG9vbH0gc2NhbGU9e3NjYWxlfT5cblxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRTbGlkZSAmJlxuICAgICAgICAgIDxTbGlkZSByZWY9e3BhcmVudFJlZn0gey4uLmRyYWdIYW5kbGVyc30gd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cbiAgICAgICAgICAgIHtbXCJpbnNlcnRfY2hhcnRcIiwgXCJpbnNlcnRfaW1hZ2VcIiwgXCJpbnNlcnRfdGV4dFwiXS5pbmNsdWRlcyh0b29sKSAmJiBpc0RyYWdnaW5nICYmXG4gICAgICAgICAgICAgIDxEcmFnQm94IHsuLi5nZXREcmFnQm94KGRyYWdQb3MsIGRyYWdPcmlnaW4pfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3NlbGVjdGVkU2xpZGUuY2hhcnRzLm1hcChjaGFydCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICA8Q2hhcnQga2V5PXtjaGFydC5pZH0gc2VsZWN0ZWQ9e3NlbGVjdGlvbi5zb21lKHMgPT4gcy5pZCA9PT0gY2hhcnQuaWQpfSB7Li4uY2hhcnR9IG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHRvb2wgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgPyBbLi4uc2VsZWN0aW9uLCBjaGFydF0gOiBbY2hhcnRdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICB9XG4gICAgICAgIHtyZXBvcnQgJiYgIXNlbGVjdGVkU2xpZGUgJiZcbiAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPVwiY3JlYXRlIHNsaWRlXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB1cGRhdGVSZXBvcnQoe1xuICAgICAgICAgICAgICAgIC4uLnJlcG9ydCxcbiAgICAgICAgICAgICAgICBzbGlkZXM6IFtcbiAgICAgICAgICAgICAgICAgIC4uLnJlcG9ydC5zbGlkZXMsXG4gICAgICAgICAgICAgICAgICB7IGlkOiBjdWlkKCksIGNoYXJ0czogW10gfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICBDcmVhdGUgWW91IGZpcnN0IFNsaWRlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgfVxuICAgICAgICB7cmVwb3J0UXVlcnkuZXJyb3IgJiYgPEVycm9yQm94IGVycm9yPXtyZXBvcnRRdWVyeS5lcnJvcn0gLz59XG4gICAgICA8L1N0YWdlPlxuXG4gICAgPC9MYXlvdXQgPlxuICApXG59XG5cbmNvbnN0IENoYXJ0ID0gc3R5bGVkLmRpdjxDaGFydEZyYWdtZW50ICYgeyBzZWxlY3RlZDogYm9vbGVhbiB9PmBcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGxlZnQ6ICR7cCA9PiBwLnh9cHg7XG4gIHRvcDogJHtwID0+IHAueX1weDtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodH1weDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgJHtwID0+IHAuc2VsZWN0ZWQgJiYgY3NzYGJvcmRlcjogMXB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtgfTtcbmBcblxuXG5jb25zdCBDZW50ZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6MTAwJTtcbiAgZGlzcGxheTpncmlkO1xuICBwbGFjZS1jb250ZW50OmNlbnRlciBjZW50ZXI7XG4gIGBcblxuXG50eXBlIERyYWdCb3hQcm9wcyA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG5jb25zdCBEcmFnQm94ID0gc3R5bGVkLmRpdjxEcmFnQm94UHJvcHM+YFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgd2lkdGg6JHtwID0+IHAud2lkdGh9cHg7XG4gIGhlaWdodDoke3AgPT4gcC5oZWlnaHR9cHg7XG4gIGxlZnQ6JHtwID0+IHAueH1weDtcbiAgdG9wOiR7cCA9PiBwLnl9cHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtcbmBcblxuY29uc3QgU2xpZGUgPSBzdHlsZWQuc2VjdGlvbjx7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH0+YFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6JHtwID0+IHAuaGVpZ2h0fXB4O1xuYFxuXG5jb25zdCBOZXdFbGVtZW50cyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC1nYXA6IDRweDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIHN0YXJ0O1xuYFxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIGdyaWQtZ2FwOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiNmNWY1ZjU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gIHBsYWNlLWNvbnRlbnQ6IHN0YXJ0IHN0cmV0Y2g7XG4gIG92ZXJmbG93OmhpZGRlbjtcbmBcblxuY29uc3QgU3RhZ2UgPSBzdHlsZWQubWFpbjx7IHRvb2w6IFRvb2wsIHNjYWxlOiBudW1iZXIgfT5gXG4gIGRpc3BsYXk6Z3JpZDtcbiAgd2lkdGg6MTAwJTtcbiAgcGxhY2UtY29udGVudDpjZW50ZXIgY2VudGVyO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gICR7cCA9PiB7XG4gICAgc3dpdGNoIChwLnRvb2wpIHtcbiAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfaW1hZ2VcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfdGV4dFwiOlxuICAgICAgICByZXR1cm4gY3NzYFxuICAgICAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgICAgICAgYFxuICAgIH1cbiAgfX1cbiAgJiA+ICoge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoJHtwID0+IHAuc2NhbGV9KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ0luZGljYXRvciA9ICgpID0+XG4gIDxMb2FkaW5nV3JhcHBlcj5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0+LjwvTG9hZGluZ0RvdD5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MjAwfT4uPC9Mb2FkaW5nRG90PlxuICAgIDxMb2FkaW5nRG90IGRlbGF5PXs0MDB9Pi48L0xvYWRpbmdEb3Q+XG4gIDwvTG9hZGluZ1dyYXBwZXI+XG5cbmNvbnN0IGp1bXBBbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6MDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eToxO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxucG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG5gXG5jb25zdCBMb2FkaW5nRG90ID0gc3R5bGVkLnNwYW48eyBkZWxheTogbnVtYmVyIH0+YFxuICBhbmltYXRpb246JHtqdW1wQW5pbWF0aW9ufSAxcyBlYXNlIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6JHtwID0+IHAuZGVsYXl9bXM7XG5gIl19 */"));

const LoadingIndicator = () => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(LoadingWrapper, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 361
  },
  __self: undefined
}, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(LoadingDot, {
  delay: 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 362
  },
  __self: undefined
}, "."), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(LoadingDot, {
  delay: 200,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 363
  },
  __self: undefined
}, "."), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(LoadingDot, {
  delay: 400,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 364
  },
  __self: undefined
}, "."));

const jumpAnimation = _emotion_core__WEBPACK_IMPORTED_MODULE_6__["keyframes"]`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`;

const LoadingWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_4___default()("div", {
  target: "e1nne1bm7",
  label: "LoadingWrapper"
})( false ? undefined : {
  name: "qabk88",
  styles: "position:absolute;top:0px;right:32px;font-size:2.5rem;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L1JlcG9ydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd1hpQyIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L1JlcG9ydC9SZXBvcnQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSwgdXNlUmVwb3J0VXBkYXRlTXV0YXRpb24sIENoYXJ0RnJhZ21lbnQsIFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzLCBSZXBvcnRGcmFnbWVudCwgUmVwb3J0R2V0RG9jdW1lbnQgfSBmcm9tIFwiLi4vY29kZWdlbi9ncmFwaHFsXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEVycm9yQm94IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRXJyb3JCb3hcIjtcbmltcG9ydCB7IENydW1icywgQ3J1bWJUaXRsZSwgQ3J1bWJMaW5rIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3J1bWJzXCI7XG5pbXBvcnQgeyBIZWFkZXIsIEhlYWRlclNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uXCI7XG5pbXBvcnQgeyBGbGF0QnV0dG9uLCBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBLZXlib2FyZEV2ZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IHVzZU1vdXNlRHJhZywgUG9zIH0gZnJvbSBcIi4uL2hvb2tzL2RyYWdcIjtcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IGN1aWQgZnJvbSBcImN1aWRcIlxuXG50eXBlIFRvb2wgPVxuICB8IFwiaW5zZXJ0X2NoYXJ0XCJcbiAgfCBcImluc2VydF9pbWFnZVwiXG4gIHwgXCJpbnNlcnRfdGV4dFwiXG4gIHwgXCJzZWxlY3RcIlxuXG5cbnR5cGUgU2VsZWN0aW9uID0gQ2hhcnRGcmFnbWVudFxuXG5cbmNvbnN0IHJlbW92ZVR5cGVuYW1lID0gKHJlcG9ydDogUmVwb3J0RnJhZ21lbnQpOiBSZXBvcnRVcGRhdGVNdXRhdGlvblZhcmlhYmxlc1tcInJlcG9ydFwiXSA9PiB7XG4gIGNvbnN0IHsgX190eXBlbmFtZSwgc2xpZGVzLCAuLi5yZXBvcnREYXRhIH0gPSByZXBvcnQ7XG4gIHJldHVybiB7XG4gICAgLi4ucmVwb3J0RGF0YSxcbiAgICBzbGlkZXM6IHNsaWRlcy5tYXAoKHsgX190eXBlbmFtZSwgY2hhcnRzLCAuLi5zbGlkZURhdGEgfSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2xpZGVEYXRhLFxuICAgICAgICBjaGFydHM6IGNoYXJ0cy5tYXAoKHsgX190eXBlbmFtZSwgLi4uY2hhcnREYXRhIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY2hhcnREYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBnZXRNb2RpZmllcnMgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT5cbiAgbmV3IFNldChbXG4gICAgZS5uYXRpdmVFdmVudC5tZXRhS2V5ICYmIFwibWV0YVwiLFxuICAgIGUubmF0aXZlRXZlbnQuY3RybEtleSAmJiBcImN0cmxcIixcbiAgICBlLm5hdGl2ZUV2ZW50LmFsdEtleSAmJiBcImFsdFwiLFxuICAgIGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgJiYgXCJzaGlmdFwiLFxuICBdLmZpbHRlcihCb29sZWFuKVxuICApXG5cbmV4cG9ydCBjb25zdCBSZXBvcnRQYWdlID0gKHByb3BzOiB7IGlkOiBzdHJpbmcsIHNsaWRlPzogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZSgxKVxuXG5cbiAgY29uc3QgW3Rvb2wsIHNldFRvb2xdID0gdXNlU3RhdGU8VG9vbD4oXCJzZWxlY3RcIilcbiAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlPFNlbGVjdGlvbltdPihbXSlcblxuICBjb25zdCBbdW5kb0hpc3RvcnksIHNldFVuZG9IaXN0b3J5XSA9IHVzZVN0YXRlPFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzW1wicmVwb3J0XCJdW10+KFtdKVxuICBjb25zdCBbdW5kb0hpc3RvcnlJbmRleCwgc2V0VW5kb0hpc3RvcnlJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cbiAgY29uc3QgcmVwb3J0UXVlcnkgPSB1c2VSZXBvcnRHZXRRdWVyeSh7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBpZDogcHJvcHMuaWRcbiAgICB9LFxuICAgIG9uQ29tcGxldGVkOiAoeyByZXBvcnQgfSkgPT4ge1xuICAgICAgc2V0U2NhbGUod2luZG93LmlubmVyV2lkdGggKiAwLjggLyByZXBvcnQud2lkdGgpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcG9ydCA9IHJlcG9ydFF1ZXJ5LmRhdGEgJiYgcmVwb3J0UXVlcnkuZGF0YS5yZXBvcnRcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZXBvcnQgJiYgdW5kb0hpc3RvcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRVbmRvSGlzdG9yeShbcmVwb3J0XSlcbiAgICB9XG4gIH0sIFtyZXBvcnRdKVxuXG4gIGNvbnN0IFtfdXBkYXRlUmVwb3J0LCB1cGRhdGVSZXBvcnRRdWVyeV0gPSB1c2VSZXBvcnRVcGRhdGVNdXRhdGlvbigpXG5cbiAgY29uc3QgdXBkYXRlUmVwb3J0ID0gKHJlcG9ydDogUmVwb3J0VXBkYXRlTXV0YXRpb25WYXJpYWJsZXNbXCJyZXBvcnRcIl0sIGlzVW5kbyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKCFpc1VuZG8pIHtcbiAgICAgIHNldFVuZG9IaXN0b3J5KFsuLi51bmRvSGlzdG9yeS5zbGljZSgwLCB1bmRvSGlzdG9yeUluZGV4ICsgMSksIHJlcG9ydF0pXG4gICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KHVuZG9IaXN0b3J5SW5kZXggKyAxKVxuXG4gICAgfVxuICAgIHJlcG9ydFF1ZXJ5LmNsaWVudC53cml0ZVF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBSZXBvcnRHZXREb2N1bWVudCxcbiAgICAgIHZhcmlhYmxlczogeyBpZDogcmVwb3J0LmlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHJlcG9ydFxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIF91cGRhdGVSZXBvcnQoe1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHJlcG9ydDogcmVtb3ZlVHlwZW5hbWUocmVwb3J0IGFzIFJlcG9ydEZyYWdtZW50KVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHJlcG9ydCkge1xuXG4gICAgICAgIHNldFNjYWxlKHdpbmRvdy5pbm5lcldpZHRoICogMC44IC8gcmVwb3J0LndpZHRoKVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlcilcbiAgfSwgW3JlcG9ydF0pXG5cbiAgY29uc3Qgc2VsZWN0ZWRTbGlkZSA9IHJlcG9ydCAmJiAocmVwb3J0LnNsaWRlcy5maW5kKHMgPT4gcy5pZCA9PT0gcHJvcHMuc2xpZGUpIHx8IHJlcG9ydC5zbGlkZXNbMF0pO1xuXG4gIGNvbnN0IGdldERyYWdCb3ggPSAocG9zOiBQb3MsIG9yaWdpbjogUG9zKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE1hdGgubWluKHBvcy54LCBvcmlnaW4ueCkgLyBzY2FsZSxcbiAgICAgIHk6IE1hdGgubWluKHBvcy55LCBvcmlnaW4ueSkgLyBzY2FsZSxcbiAgICAgIHdpZHRoOiBNYXRoLmFicyhwb3MueCAtIG9yaWdpbi54KSAvIHNjYWxlLFxuICAgICAgaGVpZ2h0OiBNYXRoLmFicyhwb3MueSAtIG9yaWdpbi55KSAvIHNjYWxlLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgZHJhZ0hhbmRsZXJzLCBkcmFnUG9zLCBkcmFnT3JpZ2luLCBpc0RyYWdnaW5nLCBwYXJlbnRSZWYgfSA9IHVzZU1vdXNlRHJhZyh7XG4gICAgb25EcmFnRW5kOiAocG9zLCBvcmlnaW4pID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGdldERyYWdCb3gocG9zLCBvcmlnaW4pO1xuICAgICAgc3dpdGNoICh0b29sKSB7XG4gICAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjoge1xuXG4gICAgICAgICAgY29uc3QgbmV3Q2hhcnQgPSB7XG4gICAgICAgICAgICBpZDogY3VpZCgpLFxuICAgICAgICAgICAgeDogTWF0aC5yb3VuZChib3gueCksXG4gICAgICAgICAgICB5OiBNYXRoLnJvdW5kKGJveC55KSxcbiAgICAgICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKGJveC53aWR0aCksXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQoYm94LmhlaWdodCksXG4gICAgICAgICAgICBfX3R5cGVuYW1lOiBcIkNoYXJ0XCIgYXMgXCJDaGFydFwiXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbmV3UmVwb3J0ID0ge1xuICAgICAgICAgICAgLi4ucmVwb3J0LFxuICAgICAgICAgICAgc2xpZGVzOiByZXBvcnQuc2xpZGVzLm1hcChzbGlkZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzbGlkZS5pZCA9PT0gc2VsZWN0ZWRTbGlkZS5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAuLi5zbGlkZSxcbiAgICAgICAgICAgICAgICAgIGNoYXJ0czogWy4uLnNsaWRlLmNoYXJ0cywgbmV3Q2hhcnRdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzbGlkZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVSZXBvcnQobmV3UmVwb3J0KVxuICAgICAgICAgIHNldFRvb2woXCJzZWxlY3RcIik7XG4gICAgICAgICAgc2V0U2VsZWN0aW9uKFtuZXdDaGFydF0pXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGFiSW5kZXg9ey0xfSBvbktleURvd249e2UgPT4ge1xuICAgICAgY29uc3QgbW9kaWZpZXJzID0gZ2V0TW9kaWZpZXJzKGUpO1xuICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgICAgc2V0VG9vbChcInNlbGVjdFwiKVxuICAgICAgICAgIGlmICh0b29sID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3Rpb24oW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjYXNlIFwiY1wiOlxuICAgICAgICAgIGlmIChtb2RpZmllcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgc2V0VG9vbChcImluc2VydF9jaGFydFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJpXCI6XG4gICAgICAgICAgaWYgKG1vZGlmaWVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBzZXRUb29sKFwiaW5zZXJ0X2ltYWdlXCIpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcInRcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHNldFRvb2woXCJpbnNlcnRfdGV4dFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjoge1xuICAgICAgICAgIHVwZGF0ZVJlcG9ydCh7XG4gICAgICAgICAgICAuLi5yZXBvcnQsXG4gICAgICAgICAgICBzbGlkZXM6IHJlcG9ydC5zbGlkZXMubWFwKHNsaWRlID0+ICh7XG4gICAgICAgICAgICAgIC4uLnNsaWRlLFxuICAgICAgICAgICAgICBjaGFydHM6IHNsaWRlLmNoYXJ0cy5maWx0ZXIoY2hhcnQgPT4gc2VsZWN0aW9uLnNvbWUoc2VsZWN0aW9uID0+IHNlbGVjdGlvbi5pZCA9PT0gY2hhcnQuaWQpID09PSBmYWxzZSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikgJiYgbW9kaWZpZXJzLmhhcyhcInNoaWZ0XCIpKSB7IC8vIFJlZG9cbiAgICAgICAgICAgIGlmICh1bmRvSGlzdG9yeS5sZW5ndGggPD0gdW5kb0hpc3RvcnlJbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHVuZG9IaXN0b3J5SW5kZXggKyAxO1xuICAgICAgICAgICAgdXBkYXRlUmVwb3J0KHVuZG9IaXN0b3J5W25ld0luZGV4XSwgdHJ1ZSk7XG4gICAgICAgICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KG5ld0luZGV4KVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikpIHsgLy8gdW5kb1xuICAgICAgICAgICAgaWYgKHVuZG9IaXN0b3J5SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdW5kb0hpc3RvcnlJbmRleCAtIDE7XG4gICAgICAgICAgICB1cGRhdGVSZXBvcnQodW5kb0hpc3RvcnlbbmV3SW5kZXhdLCB0cnVlKTtcbiAgICAgICAgICAgIHNldFVuZG9IaXN0b3J5SW5kZXgobmV3SW5kZXgpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgfVxuICAgIH19PlxuICAgICAgeyhyZXBvcnRRdWVyeS5sb2FkaW5nIHx8IHVwZGF0ZVJlcG9ydFF1ZXJ5LmxvYWRpbmcpICYmIDxMb2FkaW5nSW5kaWNhdG9yIC8+fVxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPEhlYWRlclNlY3Rpb24+XG4gICAgICAgICAgPENydW1icz5cbiAgICAgICAgICAgIDxDcnVtYkxpbmsgaHJlZj1cIi9cIj5Ib21lPC9DcnVtYkxpbms+XG4gICAgICAgICAgICA8Q3J1bWJMaW5rIGhyZWY9XCIvXCI+UmVwb3J0czwvQ3J1bWJMaW5rPlxuICAgICAgICAgICAgPENydW1iVGl0bGU+e3JlcG9ydCA/IHJlcG9ydC50aXRsZSA6IFwiLi4uXCJ9PC9DcnVtYlRpdGxlPlxuICAgICAgICAgIDwvQ3J1bWJzID5cbiAgICAgICAgICA8TmV3RWxlbWVudHM+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2NoYXJ0XCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9jaGFydFwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9jaGFydFwifT5cbiAgICAgICAgICAgICAgPEljb24gaWNvbj1cImluc2VydF9jaGFydFwiIC8+XG4gICAgICAgICAgICA8L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2ltYWdlXCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9pbWFnZVwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9pbWFnZVwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3Bob3RvXCIgLz48L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X3RleHRcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb29sKFwiaW5zZXJ0X3RleHRcIil9IGFjdGl2ZT17dG9vbCA9PT0gXCJpbnNlcnRfdGV4dFwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3RleHRcIiAvPjwvRmxhdEJ1dHRvbj5cbiAgICAgICAgICA8L05ld0VsZW1lbnRzPlxuICAgICAgICA8L0hlYWRlclNlY3Rpb24+XG4gICAgICA8L0hlYWRlciA+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGJvdHRvbTogMTYsIHJpZ2h0OiAxNiB9fT57c2NhbGV9PC9kaXY+XG4gICAgICA8U3RhZ2UgdG9vbD17dG9vbH0gc2NhbGU9e3NjYWxlfT5cblxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRTbGlkZSAmJlxuICAgICAgICAgIDxTbGlkZSByZWY9e3BhcmVudFJlZn0gey4uLmRyYWdIYW5kbGVyc30gd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cbiAgICAgICAgICAgIHtbXCJpbnNlcnRfY2hhcnRcIiwgXCJpbnNlcnRfaW1hZ2VcIiwgXCJpbnNlcnRfdGV4dFwiXS5pbmNsdWRlcyh0b29sKSAmJiBpc0RyYWdnaW5nICYmXG4gICAgICAgICAgICAgIDxEcmFnQm94IHsuLi5nZXREcmFnQm94KGRyYWdQb3MsIGRyYWdPcmlnaW4pfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3NlbGVjdGVkU2xpZGUuY2hhcnRzLm1hcChjaGFydCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICA8Q2hhcnQga2V5PXtjaGFydC5pZH0gc2VsZWN0ZWQ9e3NlbGVjdGlvbi5zb21lKHMgPT4gcy5pZCA9PT0gY2hhcnQuaWQpfSB7Li4uY2hhcnR9IG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHRvb2wgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgPyBbLi4uc2VsZWN0aW9uLCBjaGFydF0gOiBbY2hhcnRdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICB9XG4gICAgICAgIHtyZXBvcnQgJiYgIXNlbGVjdGVkU2xpZGUgJiZcbiAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPVwiY3JlYXRlIHNsaWRlXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB1cGRhdGVSZXBvcnQoe1xuICAgICAgICAgICAgICAgIC4uLnJlcG9ydCxcbiAgICAgICAgICAgICAgICBzbGlkZXM6IFtcbiAgICAgICAgICAgICAgICAgIC4uLnJlcG9ydC5zbGlkZXMsXG4gICAgICAgICAgICAgICAgICB7IGlkOiBjdWlkKCksIGNoYXJ0czogW10gfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICBDcmVhdGUgWW91IGZpcnN0IFNsaWRlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgfVxuICAgICAgICB7cmVwb3J0UXVlcnkuZXJyb3IgJiYgPEVycm9yQm94IGVycm9yPXtyZXBvcnRRdWVyeS5lcnJvcn0gLz59XG4gICAgICA8L1N0YWdlPlxuXG4gICAgPC9MYXlvdXQgPlxuICApXG59XG5cbmNvbnN0IENoYXJ0ID0gc3R5bGVkLmRpdjxDaGFydEZyYWdtZW50ICYgeyBzZWxlY3RlZDogYm9vbGVhbiB9PmBcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGxlZnQ6ICR7cCA9PiBwLnh9cHg7XG4gIHRvcDogJHtwID0+IHAueX1weDtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodH1weDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgJHtwID0+IHAuc2VsZWN0ZWQgJiYgY3NzYGJvcmRlcjogMXB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtgfTtcbmBcblxuXG5jb25zdCBDZW50ZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6MTAwJTtcbiAgZGlzcGxheTpncmlkO1xuICBwbGFjZS1jb250ZW50OmNlbnRlciBjZW50ZXI7XG4gIGBcblxuXG50eXBlIERyYWdCb3hQcm9wcyA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG5jb25zdCBEcmFnQm94ID0gc3R5bGVkLmRpdjxEcmFnQm94UHJvcHM+YFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgd2lkdGg6JHtwID0+IHAud2lkdGh9cHg7XG4gIGhlaWdodDoke3AgPT4gcC5oZWlnaHR9cHg7XG4gIGxlZnQ6JHtwID0+IHAueH1weDtcbiAgdG9wOiR7cCA9PiBwLnl9cHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtcbmBcblxuY29uc3QgU2xpZGUgPSBzdHlsZWQuc2VjdGlvbjx7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH0+YFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6JHtwID0+IHAuaGVpZ2h0fXB4O1xuYFxuXG5jb25zdCBOZXdFbGVtZW50cyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC1nYXA6IDRweDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIHN0YXJ0O1xuYFxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIGdyaWQtZ2FwOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiNmNWY1ZjU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gIHBsYWNlLWNvbnRlbnQ6IHN0YXJ0IHN0cmV0Y2g7XG4gIG92ZXJmbG93OmhpZGRlbjtcbmBcblxuY29uc3QgU3RhZ2UgPSBzdHlsZWQubWFpbjx7IHRvb2w6IFRvb2wsIHNjYWxlOiBudW1iZXIgfT5gXG4gIGRpc3BsYXk6Z3JpZDtcbiAgd2lkdGg6MTAwJTtcbiAgcGxhY2UtY29udGVudDpjZW50ZXIgY2VudGVyO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gICR7cCA9PiB7XG4gICAgc3dpdGNoIChwLnRvb2wpIHtcbiAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfaW1hZ2VcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfdGV4dFwiOlxuICAgICAgICByZXR1cm4gY3NzYFxuICAgICAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgICAgICAgYFxuICAgIH1cbiAgfX1cbiAgJiA+ICoge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoJHtwID0+IHAuc2NhbGV9KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ0luZGljYXRvciA9ICgpID0+XG4gIDxMb2FkaW5nV3JhcHBlcj5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0+LjwvTG9hZGluZ0RvdD5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MjAwfT4uPC9Mb2FkaW5nRG90PlxuICAgIDxMb2FkaW5nRG90IGRlbGF5PXs0MDB9Pi48L0xvYWRpbmdEb3Q+XG4gIDwvTG9hZGluZ1dyYXBwZXI+XG5cbmNvbnN0IGp1bXBBbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6MDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eToxO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxucG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG5gXG5jb25zdCBMb2FkaW5nRG90ID0gc3R5bGVkLnNwYW48eyBkZWxheTogbnVtYmVyIH0+YFxuICBhbmltYXRpb246JHtqdW1wQW5pbWF0aW9ufSAxcyBlYXNlIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6JHtwID0+IHAuZGVsYXl9bXM7XG5gIl19 */"
});

const LoadingDot = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_4___default()("span", {
  target: "e1nne1bm8",
  label: "LoadingDot"
})("animation:", jumpAnimation, " 1s ease infinite;animation-delay:", p => p.delay, "ms;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvUmVwb3J0L1JlcG9ydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOFhpRCIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L1JlcG9ydC9SZXBvcnQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VSZXBvcnRHZXRRdWVyeSwgdXNlUmVwb3J0VXBkYXRlTXV0YXRpb24sIENoYXJ0RnJhZ21lbnQsIFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzLCBSZXBvcnRGcmFnbWVudCwgUmVwb3J0R2V0RG9jdW1lbnQgfSBmcm9tIFwiLi4vY29kZWdlbi9ncmFwaHFsXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7IEVycm9yQm94IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRXJyb3JCb3hcIjtcbmltcG9ydCB7IENydW1icywgQ3J1bWJUaXRsZSwgQ3J1bWJMaW5rIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3J1bWJzXCI7XG5pbXBvcnQgeyBIZWFkZXIsIEhlYWRlclNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29uXCI7XG5pbXBvcnQgeyBGbGF0QnV0dG9uLCBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBLZXlib2FyZEV2ZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IHVzZU1vdXNlRHJhZywgUG9zIH0gZnJvbSBcIi4uL2hvb2tzL2RyYWdcIjtcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IGN1aWQgZnJvbSBcImN1aWRcIlxuXG50eXBlIFRvb2wgPVxuICB8IFwiaW5zZXJ0X2NoYXJ0XCJcbiAgfCBcImluc2VydF9pbWFnZVwiXG4gIHwgXCJpbnNlcnRfdGV4dFwiXG4gIHwgXCJzZWxlY3RcIlxuXG5cbnR5cGUgU2VsZWN0aW9uID0gQ2hhcnRGcmFnbWVudFxuXG5cbmNvbnN0IHJlbW92ZVR5cGVuYW1lID0gKHJlcG9ydDogUmVwb3J0RnJhZ21lbnQpOiBSZXBvcnRVcGRhdGVNdXRhdGlvblZhcmlhYmxlc1tcInJlcG9ydFwiXSA9PiB7XG4gIGNvbnN0IHsgX190eXBlbmFtZSwgc2xpZGVzLCAuLi5yZXBvcnREYXRhIH0gPSByZXBvcnQ7XG4gIHJldHVybiB7XG4gICAgLi4ucmVwb3J0RGF0YSxcbiAgICBzbGlkZXM6IHNsaWRlcy5tYXAoKHsgX190eXBlbmFtZSwgY2hhcnRzLCAuLi5zbGlkZURhdGEgfSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2xpZGVEYXRhLFxuICAgICAgICBjaGFydHM6IGNoYXJ0cy5tYXAoKHsgX190eXBlbmFtZSwgLi4uY2hhcnREYXRhIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY2hhcnREYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBnZXRNb2RpZmllcnMgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT5cbiAgbmV3IFNldChbXG4gICAgZS5uYXRpdmVFdmVudC5tZXRhS2V5ICYmIFwibWV0YVwiLFxuICAgIGUubmF0aXZlRXZlbnQuY3RybEtleSAmJiBcImN0cmxcIixcbiAgICBlLm5hdGl2ZUV2ZW50LmFsdEtleSAmJiBcImFsdFwiLFxuICAgIGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgJiYgXCJzaGlmdFwiLFxuICBdLmZpbHRlcihCb29sZWFuKVxuICApXG5cbmV4cG9ydCBjb25zdCBSZXBvcnRQYWdlID0gKHByb3BzOiB7IGlkOiBzdHJpbmcsIHNsaWRlPzogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZSgxKVxuXG5cbiAgY29uc3QgW3Rvb2wsIHNldFRvb2xdID0gdXNlU3RhdGU8VG9vbD4oXCJzZWxlY3RcIilcbiAgY29uc3QgW3NlbGVjdGlvbiwgc2V0U2VsZWN0aW9uXSA9IHVzZVN0YXRlPFNlbGVjdGlvbltdPihbXSlcblxuICBjb25zdCBbdW5kb0hpc3RvcnksIHNldFVuZG9IaXN0b3J5XSA9IHVzZVN0YXRlPFJlcG9ydFVwZGF0ZU11dGF0aW9uVmFyaWFibGVzW1wicmVwb3J0XCJdW10+KFtdKVxuICBjb25zdCBbdW5kb0hpc3RvcnlJbmRleCwgc2V0VW5kb0hpc3RvcnlJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG5cbiAgY29uc3QgcmVwb3J0UXVlcnkgPSB1c2VSZXBvcnRHZXRRdWVyeSh7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBpZDogcHJvcHMuaWRcbiAgICB9LFxuICAgIG9uQ29tcGxldGVkOiAoeyByZXBvcnQgfSkgPT4ge1xuICAgICAgc2V0U2NhbGUod2luZG93LmlubmVyV2lkdGggKiAwLjggLyByZXBvcnQud2lkdGgpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlcG9ydCA9IHJlcG9ydFF1ZXJ5LmRhdGEgJiYgcmVwb3J0UXVlcnkuZGF0YS5yZXBvcnRcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZXBvcnQgJiYgdW5kb0hpc3RvcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRVbmRvSGlzdG9yeShbcmVwb3J0XSlcbiAgICB9XG4gIH0sIFtyZXBvcnRdKVxuXG4gIGNvbnN0IFtfdXBkYXRlUmVwb3J0LCB1cGRhdGVSZXBvcnRRdWVyeV0gPSB1c2VSZXBvcnRVcGRhdGVNdXRhdGlvbigpXG5cbiAgY29uc3QgdXBkYXRlUmVwb3J0ID0gKHJlcG9ydDogUmVwb3J0VXBkYXRlTXV0YXRpb25WYXJpYWJsZXNbXCJyZXBvcnRcIl0sIGlzVW5kbyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKCFpc1VuZG8pIHtcbiAgICAgIHNldFVuZG9IaXN0b3J5KFsuLi51bmRvSGlzdG9yeS5zbGljZSgwLCB1bmRvSGlzdG9yeUluZGV4ICsgMSksIHJlcG9ydF0pXG4gICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KHVuZG9IaXN0b3J5SW5kZXggKyAxKVxuXG4gICAgfVxuICAgIHJlcG9ydFF1ZXJ5LmNsaWVudC53cml0ZVF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBSZXBvcnRHZXREb2N1bWVudCxcbiAgICAgIHZhcmlhYmxlczogeyBpZDogcmVwb3J0LmlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHJlcG9ydFxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIF91cGRhdGVSZXBvcnQoe1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHJlcG9ydDogcmVtb3ZlVHlwZW5hbWUocmVwb3J0IGFzIFJlcG9ydEZyYWdtZW50KVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHJlcG9ydCkge1xuXG4gICAgICAgIHNldFNjYWxlKHdpbmRvdy5pbm5lcldpZHRoICogMC44IC8gcmVwb3J0LndpZHRoKVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlcilcbiAgfSwgW3JlcG9ydF0pXG5cbiAgY29uc3Qgc2VsZWN0ZWRTbGlkZSA9IHJlcG9ydCAmJiAocmVwb3J0LnNsaWRlcy5maW5kKHMgPT4gcy5pZCA9PT0gcHJvcHMuc2xpZGUpIHx8IHJlcG9ydC5zbGlkZXNbMF0pO1xuXG4gIGNvbnN0IGdldERyYWdCb3ggPSAocG9zOiBQb3MsIG9yaWdpbjogUG9zKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE1hdGgubWluKHBvcy54LCBvcmlnaW4ueCkgLyBzY2FsZSxcbiAgICAgIHk6IE1hdGgubWluKHBvcy55LCBvcmlnaW4ueSkgLyBzY2FsZSxcbiAgICAgIHdpZHRoOiBNYXRoLmFicyhwb3MueCAtIG9yaWdpbi54KSAvIHNjYWxlLFxuICAgICAgaGVpZ2h0OiBNYXRoLmFicyhwb3MueSAtIG9yaWdpbi55KSAvIHNjYWxlLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHsgZHJhZ0hhbmRsZXJzLCBkcmFnUG9zLCBkcmFnT3JpZ2luLCBpc0RyYWdnaW5nLCBwYXJlbnRSZWYgfSA9IHVzZU1vdXNlRHJhZyh7XG4gICAgb25EcmFnRW5kOiAocG9zLCBvcmlnaW4pID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGdldERyYWdCb3gocG9zLCBvcmlnaW4pO1xuICAgICAgc3dpdGNoICh0b29sKSB7XG4gICAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjoge1xuXG4gICAgICAgICAgY29uc3QgbmV3Q2hhcnQgPSB7XG4gICAgICAgICAgICBpZDogY3VpZCgpLFxuICAgICAgICAgICAgeDogTWF0aC5yb3VuZChib3gueCksXG4gICAgICAgICAgICB5OiBNYXRoLnJvdW5kKGJveC55KSxcbiAgICAgICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKGJveC53aWR0aCksXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQoYm94LmhlaWdodCksXG4gICAgICAgICAgICBfX3R5cGVuYW1lOiBcIkNoYXJ0XCIgYXMgXCJDaGFydFwiXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbmV3UmVwb3J0ID0ge1xuICAgICAgICAgICAgLi4ucmVwb3J0LFxuICAgICAgICAgICAgc2xpZGVzOiByZXBvcnQuc2xpZGVzLm1hcChzbGlkZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzbGlkZS5pZCA9PT0gc2VsZWN0ZWRTbGlkZS5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAuLi5zbGlkZSxcbiAgICAgICAgICAgICAgICAgIGNoYXJ0czogWy4uLnNsaWRlLmNoYXJ0cywgbmV3Q2hhcnRdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzbGlkZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVSZXBvcnQobmV3UmVwb3J0KVxuICAgICAgICAgIHNldFRvb2woXCJzZWxlY3RcIik7XG4gICAgICAgICAgc2V0U2VsZWN0aW9uKFtuZXdDaGFydF0pXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGFiSW5kZXg9ey0xfSBvbktleURvd249e2UgPT4ge1xuICAgICAgY29uc3QgbW9kaWZpZXJzID0gZ2V0TW9kaWZpZXJzKGUpO1xuICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgICAgc2V0VG9vbChcInNlbGVjdFwiKVxuICAgICAgICAgIGlmICh0b29sID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgICBzZXRTZWxlY3Rpb24oW10pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjYXNlIFwiY1wiOlxuICAgICAgICAgIGlmIChtb2RpZmllcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgc2V0VG9vbChcImluc2VydF9jaGFydFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJpXCI6XG4gICAgICAgICAgaWYgKG1vZGlmaWVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBzZXRUb29sKFwiaW5zZXJ0X2ltYWdlXCIpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcInRcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHNldFRvb2woXCJpbnNlcnRfdGV4dFwiKVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjoge1xuICAgICAgICAgIHVwZGF0ZVJlcG9ydCh7XG4gICAgICAgICAgICAuLi5yZXBvcnQsXG4gICAgICAgICAgICBzbGlkZXM6IHJlcG9ydC5zbGlkZXMubWFwKHNsaWRlID0+ICh7XG4gICAgICAgICAgICAgIC4uLnNsaWRlLFxuICAgICAgICAgICAgICBjaGFydHM6IHNsaWRlLmNoYXJ0cy5maWx0ZXIoY2hhcnQgPT4gc2VsZWN0aW9uLnNvbWUoc2VsZWN0aW9uID0+IHNlbGVjdGlvbi5pZCA9PT0gY2hhcnQuaWQpID09PSBmYWxzZSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikgJiYgbW9kaWZpZXJzLmhhcyhcInNoaWZ0XCIpKSB7IC8vIFJlZG9cbiAgICAgICAgICAgIGlmICh1bmRvSGlzdG9yeS5sZW5ndGggPD0gdW5kb0hpc3RvcnlJbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHVuZG9IaXN0b3J5SW5kZXggKyAxO1xuICAgICAgICAgICAgdXBkYXRlUmVwb3J0KHVuZG9IaXN0b3J5W25ld0luZGV4XSwgdHJ1ZSk7XG4gICAgICAgICAgICBzZXRVbmRvSGlzdG9yeUluZGV4KG5ld0luZGV4KVxuICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobW9kaWZpZXJzLmhhcyhcIm1ldGFcIikpIHsgLy8gdW5kb1xuICAgICAgICAgICAgaWYgKHVuZG9IaXN0b3J5SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdW5kb0hpc3RvcnlJbmRleCAtIDE7XG4gICAgICAgICAgICB1cGRhdGVSZXBvcnQodW5kb0hpc3RvcnlbbmV3SW5kZXhdLCB0cnVlKTtcbiAgICAgICAgICAgIHNldFVuZG9IaXN0b3J5SW5kZXgobmV3SW5kZXgpXG4gICAgICAgICAgICByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgfVxuICAgIH19PlxuICAgICAgeyhyZXBvcnRRdWVyeS5sb2FkaW5nIHx8IHVwZGF0ZVJlcG9ydFF1ZXJ5LmxvYWRpbmcpICYmIDxMb2FkaW5nSW5kaWNhdG9yIC8+fVxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPEhlYWRlclNlY3Rpb24+XG4gICAgICAgICAgPENydW1icz5cbiAgICAgICAgICAgIDxDcnVtYkxpbmsgaHJlZj1cIi9cIj5Ib21lPC9DcnVtYkxpbms+XG4gICAgICAgICAgICA8Q3J1bWJMaW5rIGhyZWY9XCIvXCI+UmVwb3J0czwvQ3J1bWJMaW5rPlxuICAgICAgICAgICAgPENydW1iVGl0bGU+e3JlcG9ydCA/IHJlcG9ydC50aXRsZSA6IFwiLi4uXCJ9PC9DcnVtYlRpdGxlPlxuICAgICAgICAgIDwvQ3J1bWJzID5cbiAgICAgICAgICA8TmV3RWxlbWVudHM+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2NoYXJ0XCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9jaGFydFwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9jaGFydFwifT5cbiAgICAgICAgICAgICAgPEljb24gaWNvbj1cImluc2VydF9jaGFydFwiIC8+XG4gICAgICAgICAgICA8L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X2ltYWdlXCIgb25DbGljaz17KCkgPT4gc2V0VG9vbChcImluc2VydF9pbWFnZVwiKX0gYWN0aXZlPXt0b29sID09PSBcImluc2VydF9pbWFnZVwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3Bob3RvXCIgLz48L0ZsYXRCdXR0b24+XG4gICAgICAgICAgICA8RmxhdEJ1dHRvbiBuYW1lPVwiaW5zZXJ0X3RleHRcIiBvbkNsaWNrPXsoKSA9PiBzZXRUb29sKFwiaW5zZXJ0X3RleHRcIil9IGFjdGl2ZT17dG9vbCA9PT0gXCJpbnNlcnRfdGV4dFwifT48SWNvbiBpY29uPVwiaW5zZXJ0X3RleHRcIiAvPjwvRmxhdEJ1dHRvbj5cbiAgICAgICAgICA8L05ld0VsZW1lbnRzPlxuICAgICAgICA8L0hlYWRlclNlY3Rpb24+XG4gICAgICA8L0hlYWRlciA+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGJvdHRvbTogMTYsIHJpZ2h0OiAxNiB9fT57c2NhbGV9PC9kaXY+XG4gICAgICA8U3RhZ2UgdG9vbD17dG9vbH0gc2NhbGU9e3NjYWxlfT5cblxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRTbGlkZSAmJlxuICAgICAgICAgIDxTbGlkZSByZWY9e3BhcmVudFJlZn0gey4uLmRyYWdIYW5kbGVyc30gd2lkdGg9e3JlcG9ydC53aWR0aH0gaGVpZ2h0PXtyZXBvcnQuaGVpZ2h0fT5cbiAgICAgICAgICAgIHtbXCJpbnNlcnRfY2hhcnRcIiwgXCJpbnNlcnRfaW1hZ2VcIiwgXCJpbnNlcnRfdGV4dFwiXS5pbmNsdWRlcyh0b29sKSAmJiBpc0RyYWdnaW5nICYmXG4gICAgICAgICAgICAgIDxEcmFnQm94IHsuLi5nZXREcmFnQm94KGRyYWdQb3MsIGRyYWdPcmlnaW4pfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3NlbGVjdGVkU2xpZGUuY2hhcnRzLm1hcChjaGFydCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICA8Q2hhcnQga2V5PXtjaGFydC5pZH0gc2VsZWN0ZWQ9e3NlbGVjdGlvbi5zb21lKHMgPT4gcy5pZCA9PT0gY2hhcnQuaWQpfSB7Li4uY2hhcnR9IG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHRvb2wgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0aW9uKGUubmF0aXZlRXZlbnQuc2hpZnRLZXkgPyBbLi4uc2VsZWN0aW9uLCBjaGFydF0gOiBbY2hhcnRdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICB9XG4gICAgICAgIHtyZXBvcnQgJiYgIXNlbGVjdGVkU2xpZGUgJiZcbiAgICAgICAgICA8Q2VudGVyPlxuICAgICAgICAgICAgPEJ1dHRvbiBuYW1lPVwiY3JlYXRlIHNsaWRlXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB1cGRhdGVSZXBvcnQoe1xuICAgICAgICAgICAgICAgIC4uLnJlcG9ydCxcbiAgICAgICAgICAgICAgICBzbGlkZXM6IFtcbiAgICAgICAgICAgICAgICAgIC4uLnJlcG9ydC5zbGlkZXMsXG4gICAgICAgICAgICAgICAgICB7IGlkOiBjdWlkKCksIGNoYXJ0czogW10gfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICBDcmVhdGUgWW91IGZpcnN0IFNsaWRlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgfVxuICAgICAgICB7cmVwb3J0UXVlcnkuZXJyb3IgJiYgPEVycm9yQm94IGVycm9yPXtyZXBvcnRRdWVyeS5lcnJvcn0gLz59XG4gICAgICA8L1N0YWdlPlxuXG4gICAgPC9MYXlvdXQgPlxuICApXG59XG5cbmNvbnN0IENoYXJ0ID0gc3R5bGVkLmRpdjxDaGFydEZyYWdtZW50ICYgeyBzZWxlY3RlZDogYm9vbGVhbiB9PmBcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGxlZnQ6ICR7cCA9PiBwLnh9cHg7XG4gIHRvcDogJHtwID0+IHAueX1weDtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodH1weDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgJHtwID0+IHAuc2VsZWN0ZWQgJiYgY3NzYGJvcmRlcjogMXB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtgfTtcbmBcblxuXG5jb25zdCBDZW50ZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6MTAwJTtcbiAgZGlzcGxheTpncmlkO1xuICBwbGFjZS1jb250ZW50OmNlbnRlciBjZW50ZXI7XG4gIGBcblxuXG50eXBlIERyYWdCb3hQcm9wcyA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG5jb25zdCBEcmFnQm94ID0gc3R5bGVkLmRpdjxEcmFnQm94UHJvcHM+YFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgd2lkdGg6JHtwID0+IHAud2lkdGh9cHg7XG4gIGhlaWdodDoke3AgPT4gcC5oZWlnaHR9cHg7XG4gIGxlZnQ6JHtwID0+IHAueH1weDtcbiAgdG9wOiR7cCA9PiBwLnl9cHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAke2NvbG9ycy5wcmltYXJ5fTtcbmBcblxuY29uc3QgU2xpZGUgPSBzdHlsZWQuc2VjdGlvbjx7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH0+YFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICBoZWlnaHQ6JHtwID0+IHAuaGVpZ2h0fXB4O1xuYFxuXG5jb25zdCBOZXdFbGVtZW50cyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC1nYXA6IDRweDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIHN0YXJ0O1xuYFxuXG5cbmNvbnN0IExheW91dCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OjEwMCU7XG4gIGdyaWQtZ2FwOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiNmNWY1ZjU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XG4gIHBsYWNlLWNvbnRlbnQ6IHN0YXJ0IHN0cmV0Y2g7XG4gIG92ZXJmbG93OmhpZGRlbjtcbmBcblxuY29uc3QgU3RhZ2UgPSBzdHlsZWQubWFpbjx7IHRvb2w6IFRvb2wsIHNjYWxlOiBudW1iZXIgfT5gXG4gIGRpc3BsYXk6Z3JpZDtcbiAgd2lkdGg6MTAwJTtcbiAgcGxhY2UtY29udGVudDpjZW50ZXIgY2VudGVyO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gICR7cCA9PiB7XG4gICAgc3dpdGNoIChwLnRvb2wpIHtcbiAgICAgIGNhc2UgXCJpbnNlcnRfY2hhcnRcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfaW1hZ2VcIjpcbiAgICAgIGNhc2UgXCJpbnNlcnRfdGV4dFwiOlxuICAgICAgICByZXR1cm4gY3NzYFxuICAgICAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgICAgICAgYFxuICAgIH1cbiAgfX1cbiAgJiA+ICoge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoJHtwID0+IHAuc2NhbGV9KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ0luZGljYXRvciA9ICgpID0+XG4gIDxMb2FkaW5nV3JhcHBlcj5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0+LjwvTG9hZGluZ0RvdD5cbiAgICA8TG9hZGluZ0RvdCBkZWxheT17MjAwfT4uPC9Mb2FkaW5nRG90PlxuICAgIDxMb2FkaW5nRG90IGRlbGF5PXs0MDB9Pi48L0xvYWRpbmdEb3Q+XG4gIDwvTG9hZGluZ1dyYXBwZXI+XG5cbmNvbnN0IGp1bXBBbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6MDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eToxO1xuICB9XG5gXG5cblxuY29uc3QgTG9hZGluZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxucG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG5gXG5jb25zdCBMb2FkaW5nRG90ID0gc3R5bGVkLnNwYW48eyBkZWxheTogbnVtYmVyIH0+YFxuICBhbmltYXRpb246JHtqdW1wQW5pbWF0aW9ufSAxcyBlYXNlIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6JHtwID0+IHAuZGVsYXl9bXM7XG5gIl19 */"));

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

/***/ "./client/components/Icon.tsx":
/*!************************************!*\
  !*** ./client/components/Icon.tsx ***!
  \************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./client/theme.ts");
var _jsxFileName = "/Users/andreasmoller/code/reports/client/components/Icon.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Icon = props => {
  const {
    color = _theme__WEBPACK_IMPORTED_MODULE_2__["colors"].text,
    size = 24,
    icon
  } = props;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, icons[icon]);
};
const icons = {
  insert_chart: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    fill: "none",
    d: "M0 0h24v24H0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })),
  insert_photo: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  })),
  insert_text: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M5 4v3h5.5v12h3V7H19V4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }))
};

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

/***/ "./client/hooks/drag.ts":
/*!******************************!*\
  !*** ./client/hooks/drag.ts ***!
  \******************************/
/*! exports provided: useMouseDrag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMouseDrag", function() { return useMouseDrag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useMouseDrag = (config = {}) => {
  const {
    parentRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])()
  } = config;

  const calculatePos = e => {
    const box = parentRef.current && parentRef.current.getBoundingClientRect();
    return {
      x: e.clientX - (box ? box.left : 0),
      y: e.clientY - (box ? box.top : 0)
    };
  };

  const {
    0: dragOrigin,
    1: setDragOrigin
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: dragPos,
    1: setDragPos
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handler = () => {
      if (dragPos && config.onDragEnd) {
        config.onDragEnd(dragPos, dragOrigin);
      }

      setDragPos(undefined);
      setDragOrigin(undefined);
    };

    window.addEventListener("mouseup", handler);
    return () => window.removeEventListener("mouseup", handler);
  }, [dragPos, config.onDragEnd]);
  return {
    dragHandlers: {
      onMouseDown: e => {
        setDragOrigin(calculatePos(e));
      },
      onMouseMove: e => {
        if (dragOrigin) {
          setDragPos(calculatePos(e));

          if (dragPos) {
            config.onDragStart && config.onDragStart(dragPos, dragOrigin);
          }

          config.onDrag && config.onDrag(dragPos, dragOrigin);
        }
      }
    },
    isDragging: !!dragPos,
    dragPos,
    dragOrigin: dragPos && dragOrigin,
    parentRef
  };
};

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/set */ "core-js/library/fn/set");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

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
/* harmony import */ var _client_Report_Report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client/Report/Report */ "./client/Report/Report.tsx");
/* harmony import */ var _client_components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client/components/Page */ "./client/components/Page.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/andreasmoller/code/reports/pages/reports/[reportId].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (() => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    reportId,
    slide
  } = router.query;

  if (!reportId) {
    return null;
  }

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_client_components_Page__WEBPACK_IMPORTED_MODULE_3__["Page"], {
    requireAuth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_client_Report_Report__WEBPACK_IMPORTED_MODULE_2__["ReportPage"], {
    id: reportId,
    slide: slide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }));
});

/***/ }),

/***/ 4:
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

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/set":
/*!*****************************************!*\
  !*** external "core-js/library/fn/set" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/set");

/***/ }),

/***/ "cuid":
/*!***********************!*\
  !*** external "cuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cuid");

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