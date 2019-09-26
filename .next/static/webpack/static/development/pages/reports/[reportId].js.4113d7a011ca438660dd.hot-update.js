webpackHotUpdate("static/development/pages/reports/[reportId].js",{

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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/Users/andreasmoller/code/reports/client/components/Page.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;








var globalStyles =
/*#__PURE__*/
 false ? undefined : {
  name: "j8dkh7-globalStyles",
  styles: "html,body,#__next{margin:0;padding:0;height:100%;}a,a:hover,a:visited{text-decoration:none;color:inherit;}*{box-sizing:border-box;}label:globalStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZWFzbW9sbGVyL2NvZGUvcmVwb3J0cy9jbGllbnQvY29tcG9uZW50cy9QYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRd0IiLCJmaWxlIjoiL1VzZXJzL2FuZHJlYXNtb2xsZXIvY29kZS9yZXBvcnRzL2NsaWVudC9jb21wb25lbnRzL1BhZ2UudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBPcGVyYXRpb24sIEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiYXBvbGxvLWJvb3N0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIjtcbmltcG9ydCB7IFJlYWN0Q2hpbGQsIHVzZU1lbW8sIGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgZ2xvYmFsU3R5bGVzID0gY3NzYFxuICBodG1sLCBib2R5LCAjX19uZXh0IHtcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7XG4gICAgaGVpZ2h0OjEwMCU7XG4gIH1cbiAgYSwgYTpob3ZlciwgYTp2aXNpdGVkIHtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICBjb2xvcjppbmhlcml0O1xuICAgIFxuICB9XG4gICoge1xuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbiAgfVxuYFxuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3RDaGlsZDtcbiAgcmVxdWlyZUF1dGg6IGJvb2xlYW5cbn1cblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PHN0cmluZyB8IG51bGw+KHVuZGVmaW5lZClcblxuXG5cbmV4cG9ydCBjb25zdCBmZXRjaEF1dGhUb2tlbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL3JlZnJlc2hfdG9rZW5cIilcbiAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCkge1xuICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXG4gIH1cbiAgY29uc3QgeyBhdXRoX3Rva2VuIH0gPSBhd2FpdCByZXMuanNvbigpXG4gIGNvbnNvbGUubG9nKHsgYXV0aF90b2tlbiB9KVxuICByZXR1cm4gYXV0aF90b2tlblxufVxuXG5jb25zdCBqd3RQcm9taXNlID0gZmV0Y2hBdXRoVG9rZW4oKVxuXG5leHBvcnQgY29uc3QgUGFnZSA9ICh7IHJlcXVpcmVBdXRoLCBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xuXG4gIGNvbnN0IFthdXRoVG9rZW4sIHNldEF1dGhUb2tlbl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgand0UHJvbWlzZVxuICAgICAgLnRoZW4oc2V0QXV0aFRva2VuKVxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgZmV0Y2hBdXRoVG9rZW4oKVxuICAgICAgICAudGhlbihzZXRBdXRoVG9rZW4pXG4gICAgfSwgNSAqIDYwICogMTAwMClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICB9XG4gIH0sIFtdKVxuXG5cbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gdXNlTWVtbygoKSA9PiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICB1cmk6IFwiL2FwaS9ncmFwaHFsXCIsXG4gICAgcmVxdWVzdDogYXN5bmMgKG9wZXJhdGlvbjogT3BlcmF0aW9uKSA9PiB7XG4gICAgICBpZiAoYXV0aFRva2VuKSB7XG4gICAgICAgIG9wZXJhdGlvbi5zZXRDb250ZXh0KHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aFRva2VufWBcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChyZXF1aXJlQXV0aCkge1xuICAgICAgICBjb25zdCBhdXRoVG9rZW4gPSBhd2FpdCBqd3RQcm9taXNlXG4gICAgICAgIG9wZXJhdGlvbi5zZXRDb250ZXh0KHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aFRva2VufWBcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgb25FcnJvcjogKHsgcmVzcG9uc2UsIG9wZXJhdGlvbiB9KSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuZXJyb3JzKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UsIG9wZXJhdGlvbik7XG4gICAgICB9XG4gICAgfSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe1xuICAgICAgZGF0YUlkRnJvbU9iamVjdDogb2JqZWN0ID0+IG9iamVjdC5pZCxcbiAgICB9KSxcbiAgICBmZXRjaCxcbiAgfSksIFthdXRoVG9rZW5dKVxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YXV0aFRva2VufT5cbiAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb0NsaWVudH0+XG4gICAgICAgIDxHbG9iYWwgc3R5bGVzPXtnbG9iYWxTdHlsZXN9IC8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQXBvbGxvUHJvdmlkZXIgPlxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cbiJdfQ== */"
};
var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_6__["createContext"])(undefined);
var fetchAuthToken =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var res, _ref2, auth_token;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default()("/api/refresh_token");

          case 2:
            res = _context.sent;

            if (res.status !== 200) {
              next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/login");
            }

            _context.next = 6;
            return res.json();

          case 6:
            _ref2 = _context.sent;
            auth_token = _ref2.auth_token;
            console.log({
              auth_token: auth_token
            });
            return _context.abrupt("return", auth_token);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchAuthToken() {
    return _ref.apply(this, arguments);
  };
}();
var jwtPromise = fetchAuthToken();
var Page = function Page(_ref3) {
  var requireAuth = _ref3.requireAuth,
      children = _ref3.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      authToken = _useState[0],
      setAuthToken = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    jwtPromise.then(setAuthToken);
    var interval = setInterval(function () {
      fetchAuthToken().then(setAuthToken);
    }, 5 * 60 * 1000);
    return function () {
      clearInterval(interval);
    };
  }, []);
  var apolloClient = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
    return new apollo_boost__WEBPACK_IMPORTED_MODULE_3__["default"]({
      uri: "/api/graphql",
      request: function () {
        var _request = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(operation) {
          var _authToken;

          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!authToken) {
                    _context2.next = 4;
                    break;
                  }

                  operation.setContext({
                    headers: {
                      Authorization: "Bearer ".concat(authToken)
                    }
                  });
                  _context2.next = 9;
                  break;

                case 4:
                  if (!requireAuth) {
                    _context2.next = 9;
                    break;
                  }

                  _context2.next = 7;
                  return jwtPromise;

                case 7:
                  _authToken = _context2.sent;
                  operation.setContext({
                    headers: {
                      Authorization: "Bearer ".concat(_authToken)
                    }
                  });

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function request(_x) {
          return _request.apply(this, arguments);
        }

        return request;
      }(),
      onError: function onError(_ref4) {
        var response = _ref4.response,
            operation = _ref4.operation;

        if (response && response.errors) {
          console.error(response, operation);
        }
      },
      cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]({
        dataIdFromObject: function dataIdFromObject(object) {
          return object.id;
        }
      }),
      fetch: isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default.a
    });
  }, [authToken]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(AuthContext.Provider, {
    value: authToken,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["ApolloProvider"], {
    client: apolloClient,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["Global"], {
    styles: globalStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), children));
};

/***/ })

})
//# sourceMappingURL=[reportId].js.4113d7a011ca438660dd.hot-update.js.map