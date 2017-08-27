/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module_1_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module_1_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__module_1_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_2_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_2_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__module_2_js__);
console.log("hello this is index.js! test 2");




console.log("Message from first module: " + __WEBPACK_IMPORTED_MODULE_0__module_1_js__["componentX"]);
console.log("Message from second module: " + __WEBPACK_IMPORTED_MODULE_1__module_2_js__["componentY"]);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/stevecochrane/Documents/Projects/dungeon-map/js/module-1.js Unexpected token (3:7)\nYou may need an appropriate loader to handle this file type.\n| let componentX = \"foo\";\n| \n| export componentX;\n| ");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/stevecochrane/Documents/Projects/dungeon-map/js/module-2.js Unexpected token (3:7)\nYou may need an appropriate loader to handle this file type.\n| let componentY = \"bar\";\n| \n| export componentY;\n| ");

/***/ })
/******/ ]);