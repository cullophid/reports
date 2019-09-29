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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./pages/api/refresh_token.ts":
/*!************************************!*\
  !*** ./pages/api/refresh_token.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server_helpers_photon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server/helpers/photon */ "./server/helpers/photon.ts");
/* harmony import */ var _server_helpers_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../server/helpers/jwt */ "./server/helpers/jwt.ts");


/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  const refresh_token = req.cookies.refresh_token;
  console.log({
    refresh_token
  });

  if (!refresh_token) {
    return res.status(401).send("Missing refresh token");
  }

  getNewTokens(refresh_token).then(({
    auth_token,
    refreshToken
  }) => {
    res.setHeader("Set-Cookie", `refresh_token=${refreshToken}; Path=/; HttpOnly`);
    res.status(200).send({
      auth_token
    });
  }).catch(err => {
    console.error(err);
    res.status(401).send(err.message);
  });
});

const getNewTokens = async refresh_token => {
  const {
    userId
  } = await Object(_server_helpers_jwt__WEBPACK_IMPORTED_MODULE_1__["verifyRefreshToken"])(refresh_token);

  if (!userId) {
    throw new Error("Token does not contain a userId");
  }

  let user = await _server_helpers_photon__WEBPACK_IMPORTED_MODULE_0__["photon"].users.findOne({
    where: {
      id: userId
    }
  });

  if (!user) {
    throw new Error("User does not exist");
  }

  const auth_token = await Object(_server_helpers_jwt__WEBPACK_IMPORTED_MODULE_1__["createAuthToken"])(user);
  const refreshToken = await Object(_server_helpers_jwt__WEBPACK_IMPORTED_MODULE_1__["createRefreshToken"])(user);
  return {
    auth_token,
    refreshToken
  };
};

/***/ }),

/***/ "./server/helpers/config.ts":
/*!**********************************!*\
  !*** ./server/helpers/config.ts ***!
  \**********************************/
/*! exports provided: JWT_SECRET, GMAIL_PASS, GMAIL_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWT_SECRET", function() { return JWT_SECRET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GMAIL_PASS", function() { return GMAIL_PASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GMAIL_USER", function() { return GMAIL_USER; });
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);


if (true) {
  Object(dotenv__WEBPACK_IMPORTED_MODULE_0__["config"])();
}

const JWT_SECRET = process.env.JWT_SECRET;
const GMAIL_PASS = process.env.GMAIL_PASS;
const GMAIL_USER = process.env.GMAIL_USER;

/***/ }),

/***/ "./server/helpers/jwt.ts":
/*!*******************************!*\
  !*** ./server/helpers/jwt.ts ***!
  \*******************************/
/*! exports provided: createAuthToken, verifyAuthToken, createRefreshToken, verifyRefreshToken, createSigninToken, verifySigninToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAuthToken", function() { return createAuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyAuthToken", function() { return verifyAuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRefreshToken", function() { return createRefreshToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyRefreshToken", function() { return verifyRefreshToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSigninToken", function() { return createSigninToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifySigninToken", function() { return verifySigninToken; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./server/helpers/config.ts");





const sign = (payload, options) => new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a((resolve, reject) => {
  if (!_config__WEBPACK_IMPORTED_MODULE_3__["JWT_SECRET"]) {
    throw new Error("MISSING JWT SECRET");
  }

  jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign(payload, _config__WEBPACK_IMPORTED_MODULE_3__["JWT_SECRET"], options, (err, token) => err ? reject(err) : resolve(token));
});

const verify = token => {
  if (!_config__WEBPACK_IMPORTED_MODULE_3__["JWT_SECRET"]) {
    throw new Error("MISSING JWT SECRET");
  }

  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a((resolve, reject) => {
    jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.verify(token, _config__WEBPACK_IMPORTED_MODULE_3__["JWT_SECRET"], (err, res) => err ? reject(err) : resolve(res));
  });
};

const createAuthToken = user => sign({
  sub: user.id,
  email: user.email,
  iat: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()() / 1000
}, {
  expiresIn: "15m"
});
const verifyAuthToken = token => verify(token);
const createRefreshToken = user => sign({
  userId: user.id
}, {
  expiresIn: "30d"
});
const verifyRefreshToken = token => verify(token);
const createSigninToken = email => sign({
  email
}, {
  expiresIn: "5m"
});
const verifySigninToken = token => verify(token);

/***/ }),

/***/ "./server/helpers/photon.ts":
/*!**********************************!*\
  !*** ./server/helpers/photon.ts ***!
  \**********************************/
/*! exports provided: photon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "photon", function() { return photon; });
/* harmony import */ var _generated_photon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @generated/photon */ "@generated/photon");
/* harmony import */ var _generated_photon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_generated_photon__WEBPACK_IMPORTED_MODULE_0__);

const photon = new _generated_photon__WEBPACK_IMPORTED_MODULE_0__["Photon"]();
photon.connect();

/***/ }),

/***/ 5:
/*!******************************************!*\
  !*** multi ./pages/api/refresh_token.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andreasmoller/code/reports/pages/api/refresh_token.ts */"./pages/api/refresh_token.ts");


/***/ }),

/***/ "@generated/photon":
/*!************************************!*\
  !*** external "@generated/photon" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@generated/photon");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ })

/******/ });
//# sourceMappingURL=refresh_token.js.map