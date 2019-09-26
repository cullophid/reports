webpackHotUpdate("static/development/pages/reports/[reportId].js",{

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
    show: scale != 0,
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
      lineNumber: 26
    },
    __self: this
  }, children));
};

var Background = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("section", {
  target: "e1ocvuxq0",
  label: "Background"
})("opacity:", function (p) {
  return p.show ? 1 : 0;
}, ";transition:3500ms opacity;background:white;position:relative;justify-self:stretch;overflow:hidden;height:", function (p) {
  return p.height * p.scale;
}, "px;box-shadow:0 ", function (p) {
  return 1 + 5 * p.scale;
}, "px ", function (p) {
  return 3 + 10 * p.scale;
}, "px rgba(0,0,0,0.4);border:", function (p) {
  return p.selected ? "1px solid  ".concat(_theme__WEBPACK_IMPORTED_MODULE_5__["colors"].primary) : "1px solid transparent";
}, ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvY29tcG9uZW50cy9TbGlkZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNrRCIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L2NvbXBvbmVudHMvU2xpZGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHVzZVJlc2l6ZUxpc3RlbmVyIGZyb20gXCJyZWFjdC1yZXNpemUtYXdhcmVcIlxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uL3RoZW1lXCJcblxudHlwZSBTbGlkZVByb3BzPENvbXBvbmVudFR5cGUgPSBSZWFjdC5Db21wb25lbnQ+ID0ge1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICB3aWR0aDogbnVtYmVyXG4gIGhlaWdodDogbnVtYmVyXG4gIG9uQ2xpY2s/OiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gdm9pZFxuICBzZWxlY3RlZD86IGJvb2xlYW5cbn1cbmV4cG9ydCBjb25zdCBTbGlkZSA9IChwcm9wczogU2xpZGVQcm9wcykgPT4ge1xuICBjb25zdCBbcmVzaXplTGlzdGVuZXIsIHNpemVzXSA9IHVzZVJlc2l6ZUxpc3RlbmVyKClcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBjaGlsZHJlbiB9ID0gcHJvcHNcbiAgY29uc3Qgc2NhbGUgPSBzaXplcy53aWR0aCAvIHdpZHRoXG4gIHJldHVybiAoXG4gICAgPEJhY2tncm91bmRcbiAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICBzY2FsZT17c2NhbGV9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHNlbGVjdGVkPXtwcm9wcy5zZWxlY3RlZH1cbiAgICAgIHNob3c9e3NjYWxlICE9IDB9XG4gICAgPlxuICAgICAge3Jlc2l6ZUxpc3RlbmVyfVxuICAgICAgPENvbnRlbnQgaGVpZ2h0PXtoZWlnaHR9IHdpZHRoPXt3aWR0aH0gc2NhbGU9e3NjYWxlfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Db250ZW50PlxuICAgIDwvQmFja2dyb3VuZD5cbiAgKVxufVxudHlwZSBCYWNrZ3JvdW5kUHJvcHMgPSB7XG4gIHNjYWxlOiBudW1iZXJcbiAgaGVpZ2h0OiBudW1iZXJcbiAgc2VsZWN0ZWQ6IGJvb2xlYW5cbiAgc2hvdzogYm9vbGVhblxufVxuY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5zZWN0aW9uPEJhY2tncm91bmRQcm9wcz5gXG4gIG9wYWNpdHk6JHtwID0+IHAuc2hvdyA/IDEgOiAwfTtcbiAgdHJhbnNpdGlvbjogMzUwMG1zIG9wYWNpdHk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAke3AgPT4gcC5oZWlnaHQgKiBwLnNjYWxlfXB4O1xuICBib3gtc2hhZG93OiAwICR7cCA9PiAxICsgNSAqIHAuc2NhbGV9cHggJHtwID0+IDMgKyAxMCAqIHAuc2NhbGV9cHhcbiAgICByZ2JhKDAsIDAsIDAsIDAuNCk7XG5cbiAgYm9yZGVyOiAke3AgPT5cbiAgICBwLnNlbGVjdGVkID8gYDFweCBzb2xpZCAgJHtjb2xvcnMucHJpbWFyeX1gIDogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIn07XG5gXG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2PHsgc2NhbGU6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IHdpZHRoOiBudW1iZXIgfT5gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodH1weDtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKCR7cCA9PiBwLnNjYWxlfSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuYCJdfQ== */"));

var Content = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("div", {
  target: "e1ocvuxq1",
  label: "Content"
})("position:absolute;left:0;top:0;height:", function (p) {
  return p.height;
}, "px;width:", function (p) {
  return p.width;
}, "px;transform:scale(", function (p) {
  return p.scale;
}, ");transform-origin:top left;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvY29tcG9uZW50cy9TbGlkZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0Q0RSIsImZpbGUiOiIvVXNlcnMvYW5kcmVhc21vbGxlci9jb2RlL3JlcG9ydHMvY2xpZW50L2NvbXBvbmVudHMvU2xpZGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIlxuaW1wb3J0IHVzZVJlc2l6ZUxpc3RlbmVyIGZyb20gXCJyZWFjdC1yZXNpemUtYXdhcmVcIlxuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcIi4uL3RoZW1lXCJcblxudHlwZSBTbGlkZVByb3BzPENvbXBvbmVudFR5cGUgPSBSZWFjdC5Db21wb25lbnQ+ID0ge1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICB3aWR0aDogbnVtYmVyXG4gIGhlaWdodDogbnVtYmVyXG4gIG9uQ2xpY2s/OiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4gdm9pZFxuICBzZWxlY3RlZD86IGJvb2xlYW5cbn1cbmV4cG9ydCBjb25zdCBTbGlkZSA9IChwcm9wczogU2xpZGVQcm9wcykgPT4ge1xuICBjb25zdCBbcmVzaXplTGlzdGVuZXIsIHNpemVzXSA9IHVzZVJlc2l6ZUxpc3RlbmVyKClcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBjaGlsZHJlbiB9ID0gcHJvcHNcbiAgY29uc3Qgc2NhbGUgPSBzaXplcy53aWR0aCAvIHdpZHRoXG4gIHJldHVybiAoXG4gICAgPEJhY2tncm91bmRcbiAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XG4gICAgICBzY2FsZT17c2NhbGV9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHNlbGVjdGVkPXtwcm9wcy5zZWxlY3RlZH1cbiAgICAgIHNob3c9e3NjYWxlICE9IDB9XG4gICAgPlxuICAgICAge3Jlc2l6ZUxpc3RlbmVyfVxuICAgICAgPENvbnRlbnQgaGVpZ2h0PXtoZWlnaHR9IHdpZHRoPXt3aWR0aH0gc2NhbGU9e3NjYWxlfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Db250ZW50PlxuICAgIDwvQmFja2dyb3VuZD5cbiAgKVxufVxudHlwZSBCYWNrZ3JvdW5kUHJvcHMgPSB7XG4gIHNjYWxlOiBudW1iZXJcbiAgaGVpZ2h0OiBudW1iZXJcbiAgc2VsZWN0ZWQ6IGJvb2xlYW5cbiAgc2hvdzogYm9vbGVhblxufVxuY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5zZWN0aW9uPEJhY2tncm91bmRQcm9wcz5gXG4gIG9wYWNpdHk6JHtwID0+IHAuc2hvdyA/IDEgOiAwfTtcbiAgdHJhbnNpdGlvbjogMzUwMG1zIG9wYWNpdHk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAke3AgPT4gcC5oZWlnaHQgKiBwLnNjYWxlfXB4O1xuICBib3gtc2hhZG93OiAwICR7cCA9PiAxICsgNSAqIHAuc2NhbGV9cHggJHtwID0+IDMgKyAxMCAqIHAuc2NhbGV9cHhcbiAgICByZ2JhKDAsIDAsIDAsIDAuNCk7XG5cbiAgYm9yZGVyOiAke3AgPT5cbiAgICBwLnNlbGVjdGVkID8gYDFweCBzb2xpZCAgJHtjb2xvcnMucHJpbWFyeX1gIDogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIn07XG5gXG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2PHsgc2NhbGU6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IHdpZHRoOiBudW1iZXIgfT5gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodH1weDtcbiAgd2lkdGg6ICR7cCA9PiBwLndpZHRofXB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKCR7cCA9PiBwLnNjYWxlfSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuYCJdfQ== */"));

/***/ })

})
//# sourceMappingURL=[reportId].js.081ff60696ce84634f7d.hot-update.js.map