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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

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

/***/ "./pages/api/graphql.ts":
/*!******************************!*\
  !*** ./pages/api/graphql.ts ***!
  \******************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ "apollo-server-micro");
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schema_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../schema.graphql */ "./schema.graphql");
/* harmony import */ var _server_helpers_photon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../server/helpers/photon */ "./server/helpers/photon.ts");
/* harmony import */ var _server_resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../server/resolvers */ "./server/resolvers/index.ts");
/* harmony import */ var _server_helpers_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../server/helpers/jwt */ "./server/helpers/jwt.ts");





const config = {
  api: {
    bodyParser: false
  }
};
const apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"]({
  typeDefs: _schema_graphql__WEBPACK_IMPORTED_MODULE_1__["default"],
  resolvers: _server_resolvers__WEBPACK_IMPORTED_MODULE_3__["resolvers"],
  context: async ({
    req
  }) => {
    let session = {};

    if (req.headers.authorization) {
      const auth_token = req.headers.authorization.split(/\s/)[1];

      if (auth_token) {
        session.user = await Object(_server_helpers_jwt__WEBPACK_IMPORTED_MODULE_4__["verifyAuthToken"])(auth_token);
      }
    }

    return {
      photon: _server_helpers_photon__WEBPACK_IMPORTED_MODULE_2__["photon"],
      session
    };
  }
});
/* harmony default export */ __webpack_exports__["default"] = (apolloServer.createHandler({
  path: "/api/graphql"
}));

/***/ }),

/***/ "./schema.graphql":
/*!************************!*\
  !*** ./schema.graphql ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("scalar Date\n\ntype Query {  \n  currentUser: User\n  reports: [Report!]!\n  report(id:ID!): Report!\n}\n\ntype Mutation {\n  signin(email:String!): String!\n  createReport(title:String!): Report!\n  updateReport(report:ReportInput): Report!\n}\n\n\ntype User {\n  id: ID!\n  createdAt:Date!\n  email:String!\n  firstName:String!\n  lastName:String!\n  reports:[Report!]!\n}\n\ntype Report {\n  id: ID!\n  owner:User!\n  width: Int!\n  height: Int!\n  title: String!\n  slides: [Slide!]!\n}\n\ntype Slide {\n  id:ID!\n  charts: [Chart!]!\n}\n\ntype Chart {\n  id:ID!\n  slide:Slide!\n  x:Int!\n  y:Int!\n  width:Int!\n  height:Int!\n}\n\ninput ReportInput {\n  id:ID!\n  title: String!\n  width: Int!\n  height: Int!\n  slides: [SlideInput!]!\n}\n\ninput SlideInput {\n  id:ID\n  charts: [ChartInput!]!\n}\n\ninput ChartInput {\n  id:ID\n  x:Int!\n  y:Int!\n  width:Int!\n  height:Int!\n}\n\n");

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

/***/ "./server/resolvers/Chart.ts":
/*!***********************************!*\
  !*** ./server/resolvers/Chart.ts ***!
  \***********************************/
/*! exports provided: Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart; });
const Chart = {
  id: chart => chart.id,
  x: chart => chart.x,
  y: chart => chart.y,
  width: chart => chart.width,
  height: chart => chart.height,
  slide: ({
    id
  }, _, ctx) => ctx.photon.charts.findOne({
    where: {
      id
    }
  }).slide()
};

/***/ }),

/***/ "./server/resolvers/Mutation/createReport.ts":
/*!***************************************************!*\
  !*** ./server/resolvers/Mutation/createReport.ts ***!
  \***************************************************/
/*! exports provided: createReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReport", function() { return createReport; });
/* harmony import */ var apollo_server_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-core */ "apollo-server-core");
/* harmony import */ var apollo_server_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_core__WEBPACK_IMPORTED_MODULE_0__);

const createReport = async (_, {
  title
}, ctx) => {
  if (!ctx.session.user) {
    throw new apollo_server_core__WEBPACK_IMPORTED_MODULE_0__["AuthenticationError"]("You are not logged in");
  }

  return ctx.photon.reports.create({
    data: {
      title,
      width: 1280,
      height: 720,
      owner: {
        connect: {
          id: ctx.session.user.sub
        }
      }
    }
  });
};

/***/ }),

/***/ "./server/resolvers/Mutation/index.ts":
/*!********************************************!*\
  !*** ./server/resolvers/Mutation/index.ts ***!
  \********************************************/
/*! exports provided: Mutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mutation", function() { return Mutation; });
/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin */ "./server/resolvers/Mutation/signin.ts");
/* harmony import */ var _createReport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createReport */ "./server/resolvers/Mutation/createReport.ts");
/* harmony import */ var _updateReport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateReport */ "./server/resolvers/Mutation/updateReport.ts");



const Mutation = {
  signin: _signin__WEBPACK_IMPORTED_MODULE_0__["signin"],
  createReport: _createReport__WEBPACK_IMPORTED_MODULE_1__["createReport"],
  updateReport: _updateReport__WEBPACK_IMPORTED_MODULE_2__["updateReport"]
};

/***/ }),

/***/ "./server/resolvers/Mutation/signin.ts":
/*!*********************************************!*\
  !*** ./server/resolvers/Mutation/signin.ts ***!
  \*********************************************/
/*! exports provided: signin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ "nodemailer");
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/config */ "./server/helpers/config.ts");
/* harmony import */ var _helpers_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/jwt */ "./server/helpers/jwt.ts");



const signin = async (_, {
  email
}) => {
  const emailTransport = Object(nodemailer__WEBPACK_IMPORTED_MODULE_0__["createTransport"])({
    service: 'gmail',
    auth: {
      user: _helpers_config__WEBPACK_IMPORTED_MODULE_1__["GMAIL_USER"],
      pass: _helpers_config__WEBPACK_IMPORTED_MODULE_1__["GMAIL_PASS"]
    }
  });
  const signin_token = await Object(_helpers_jwt__WEBPACK_IMPORTED_MODULE_2__["createSigninToken"])(email);
  console.log({
    signin_token
  });
  const res = await emailTransport.sendMail({
    from: 'andreas.moller@gmail.com',
    to: email,
    subject: 'Sign in to Reports',
    // Subject line
    html: `
      <a href="http://localhost:3000/api/auth?signin_token=${signin_token}">Sign In</a>
    ` // plain text body

  });
  console.log({
    res
  });
  return "OK";
};

/***/ }),

/***/ "./server/resolvers/Mutation/updateReport.ts":
/*!***************************************************!*\
  !*** ./server/resolvers/Mutation/updateReport.ts ***!
  \***************************************************/
/*! exports provided: updateReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateReport", function() { return updateReport; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

const updateReport = async (_, {
  report
}, ctx) => {
  if (!ctx.session.user) {
    throw new Error("You must be authenticated");
  }

  const current = await ctx.photon.reports.findOne({
    where: {
      id: report.id
    },
    include: {
      owner: true
    }
  });

  if (current.owner.id !== ctx.session.user.sub) {
    throw new Error("Report does not exist");
  }

  return ctx.photon.reports.update({
    where: {
      id: report.id
    },
    data: {
      title: report.title,
      slides: {
        upsert: report.slides.map(slide => ({
          where: {
            id: slide.id
          },
          update: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, slide, {
            charts: {
              upsert: slide.charts.map(chart => ({
                where: {
                  id: chart.id
                },
                update: chart,
                create: chart
              })),
              deleteMany: {
                id: {
                  notIn: slide.charts.map(c => c.id)
                }
              }
            }
          }),
          create: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, slide, {
            charts: {
              create: slide.charts
            }
          })
        })),
        deleteMany: {
          id: {
            notIn: report.slides.map(s => s.id)
          }
        }
      }
    }
  });
};

/***/ }),

/***/ "./server/resolvers/Query.ts":
/*!***********************************!*\
  !*** ./server/resolvers/Query.ts ***!
  \***********************************/
/*! exports provided: Query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return Query; });
/* harmony import */ var apollo_server_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-core */ "apollo-server-core");
/* harmony import */ var apollo_server_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_core__WEBPACK_IMPORTED_MODULE_0__);

const Query = {
  currentUser: ({}, {}, ctx) => {
    if (!ctx.session.user) {
      throw new apollo_server_core__WEBPACK_IMPORTED_MODULE_0__["AuthenticationError"]("You are not authenticated");
    }

    return ctx.photon.users.findOne({
      where: {
        id: ctx.session.user.sub
      }
    });
  },
  reports: (_, {}, ctx) => {
    if (!ctx.session.user) {
      throw new apollo_server_core__WEBPACK_IMPORTED_MODULE_0__["AuthenticationError"]("You must be authenticated");
    }

    return ctx.photon.users.findOne({
      where: {
        id: ctx.session.user.sub
      }
    }).reports();
  },
  report: async (_, {
    id
  }, ctx) => {
    const {
      user
    } = ctx.session;

    if (!user) {
      throw new apollo_server_core__WEBPACK_IMPORTED_MODULE_0__["AuthenticationError"]("You are not authenticated");
    }

    const [report] = await ctx.photon.reports.findMany({
      where: {
        id,
        owner: {
          id: user.sub
        }
      }
    });

    if (!report) {
      throw new Error("Could not find a report with that id");
    }

    return report;
  }
};

/***/ }),

/***/ "./server/resolvers/Report.ts":
/*!************************************!*\
  !*** ./server/resolvers/Report.ts ***!
  \************************************/
/*! exports provided: Report */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Report", function() { return Report; });
const Report = {
  id: report => report.id,
  title: report => report.title,
  width: report => report.width,
  height: report => report.height,
  owner: ({
    id
  }, _, ctx) => ctx.photon.reports.findOne({
    where: {
      id
    }
  }).owner(),
  slides: ({
    id
  }, _, ctx) => ctx.photon.reports.findOne({
    where: {
      id
    }
  }).slides()
};

/***/ }),

/***/ "./server/resolvers/Slide.ts":
/*!***********************************!*\
  !*** ./server/resolvers/Slide.ts ***!
  \***********************************/
/*! exports provided: Slide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
const Slide = {
  id: slide => slide.id,
  charts: ({
    id
  }, _, ctx) => ctx.photon.slides.findOne({
    where: {
      id
    }
  }).charts()
};

/***/ }),

/***/ "./server/resolvers/User.ts":
/*!**********************************!*\
  !*** ./server/resolvers/User.ts ***!
  \**********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
const User = {
  id: user => user.id,
  firstName: user => user.firstName,
  lastName: user => user.lastName,
  email: user => user.email,
  createdAt: user => user.createdAt,
  reports: (user, _, ctx) => ctx.photon.users.findOne({
    where: {
      id: user.id
    }
  }).reports()
};

/***/ }),

/***/ "./server/resolvers/index.ts":
/*!***********************************!*\
  !*** ./server/resolvers/index.ts ***!
  \***********************************/
/*! exports provided: resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var _Query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Query */ "./server/resolvers/Query.ts");
/* harmony import */ var _Mutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mutation */ "./server/resolvers/Mutation/index.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./server/resolvers/User.ts");
/* harmony import */ var _Report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Report */ "./server/resolvers/Report.ts");
/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Slide */ "./server/resolvers/Slide.ts");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Chart */ "./server/resolvers/Chart.ts");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_6__);







const resolvers = {
  Query: _Query__WEBPACK_IMPORTED_MODULE_0__["Query"],
  Mutation: _Mutation__WEBPACK_IMPORTED_MODULE_1__["Mutation"],
  User: _User__WEBPACK_IMPORTED_MODULE_2__["User"],
  Report: _Report__WEBPACK_IMPORTED_MODULE_3__["Report"],
  Slide: _Slide__WEBPACK_IMPORTED_MODULE_4__["Slide"],
  Chart: _Chart__WEBPACK_IMPORTED_MODULE_5__["Chart"],
  Date: new graphql__WEBPACK_IMPORTED_MODULE_6__["GraphQLScalarType"]({
    name: 'Date',
    description: 'Date custom scalar type',

    parseValue(value) {
      return new Date(value); // value from the client
    },

    serialize(value) {
      return value.getTime(); // value sent to the client
    },

    parseLiteral(ast) {
      if (ast.kind === graphql__WEBPACK_IMPORTED_MODULE_6__["Kind"].INT) {
        return new Date(ast.value); // ast value is always in string format
      }

      return null;
    }

  })
};

/***/ }),

/***/ 6:
/*!************************************!*\
  !*** multi ./pages/api/graphql.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andreasmoller/code/reports/pages/api/graphql.ts */"./pages/api/graphql.ts");


/***/ }),

/***/ "@generated/photon":
/*!************************************!*\
  !*** external "@generated/photon" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@generated/photon");

/***/ }),

/***/ "apollo-server-core":
/*!*************************************!*\
  !*** external "apollo-server-core" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-core");

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

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

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ })

/******/ });
//# sourceMappingURL=graphql.js.map