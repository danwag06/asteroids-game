/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HasteArcadeSDK"] = factory();
	else
		root["HasteArcadeSDK"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/haste-arcade-sdk/dist/GameService.js":
/*!***********************************************************!*\
  !*** ./node_modules/haste-arcade-sdk/dist/GameService.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GameService = void 0;\nvar GameService = /** @class */ (function () {\n    function GameService(gameId, targetOrigin) {\n        this.gameId = gameId;\n        this.targetOrigin = targetOrigin;\n        this.eventHandlers = new Map();\n        this.pendingPromises = new Map();\n    }\n    // General on implementation\n    GameService.prototype.on = function (event, handler) {\n        this.eventHandlers.set(event, handler);\n    };\n    GameService.prototype.sendMessage = function (message) {\n        window.parent.postMessage(message, this.targetOrigin);\n    };\n    GameService.prototype.init = function () {\n        var _this = this;\n        window.addEventListener(\"message\", function (event) {\n            if (event.origin !== _this.targetOrigin &&\n                !event.origin.includes(\"localhost\")) {\n                throw new Error(\"Invalid origin: \".concat(event.origin));\n            }\n            var _a = event.data, type = _a.type, data = _a.data;\n            console.log(\"Received message: \".concat(type));\n            if (_this.eventHandlers.has(type)) {\n                var handler = _this.eventHandlers.get(type);\n                if (handler) {\n                    handler(data);\n                }\n            }\n            else if (_this.pendingPromises.has(type)) {\n                var resolve = _this.pendingPromises.get(type);\n                if (resolve) {\n                    resolve(data);\n                    _this.pendingPromises.delete(type);\n                }\n            }\n            else {\n                console.error(\"Unsupported message type: \".concat(type));\n            }\n        });\n        console.log(\"🕹 Haste Arcade Game Initialized!\");\n    };\n    GameService.prototype.play = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var _this = this;\n            return __generator(this, function (_a) {\n                return [2 /*return*/, new Promise(function (resolve) {\n                        _this.pendingPromises.set(\"play\", resolve);\n                        _this.sendMessage({\n                            type: \"play\",\n                            gameId: _this.gameId,\n                        });\n                    })];\n            });\n        });\n    };\n    GameService.prototype.submitScore = function (playId, score) {\n        return __awaiter(this, void 0, void 0, function () {\n            var _this = this;\n            return __generator(this, function (_a) {\n                return [2 /*return*/, new Promise(function (resolve) {\n                        _this.pendingPromises.set(\"score\", resolve);\n                        _this.sendMessage({\n                            type: \"score\",\n                            gameId: _this.gameId,\n                            score: score,\n                            playId: playId,\n                        });\n                    })];\n            });\n        });\n    };\n    GameService.prototype.getLeaderboard = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var _this = this;\n            return __generator(this, function (_a) {\n                return [2 /*return*/, new Promise(function (resolve) {\n                        _this.pendingPromises.set(\"leaderboard\", resolve);\n                        _this.sendMessage({\n                            type: \"leaderboard\",\n                            gameId: _this.gameId,\n                        });\n                    })];\n            });\n        });\n    };\n    GameService.prototype.transferHst = function (amount) {\n        return __awaiter(this, void 0, void 0, function () {\n            var _this = this;\n            return __generator(this, function (_a) {\n                return [2 /*return*/, new Promise(function (resolve) {\n                        _this.pendingPromises.set(\"transferHst\", resolve);\n                        _this.sendMessage({\n                            type: \"transferHst\",\n                            gameId: _this.gameId,\n                            amount: amount,\n                        });\n                    })];\n            });\n        });\n    };\n    return GameService;\n}());\nexports.GameService = GameService;\n\n\n//# sourceURL=webpack://HasteArcadeSDK/./node_modules/haste-arcade-sdk/dist/GameService.js?");

/***/ }),

/***/ "./node_modules/haste-arcade-sdk/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/haste-arcade-sdk/dist/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./GameService */ \"./node_modules/haste-arcade-sdk/dist/GameService.js\"), exports);\n__exportStar(__webpack_require__(/*! ./types/types */ \"./node_modules/haste-arcade-sdk/dist/types/types.js\"), exports);\n\n\n//# sourceURL=webpack://HasteArcadeSDK/./node_modules/haste-arcade-sdk/dist/index.js?");

/***/ }),

/***/ "./node_modules/haste-arcade-sdk/dist/types/types.js":
/*!***********************************************************!*\
  !*** ./node_modules/haste-arcade-sdk/dist/types/types.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Origin = void 0;\nvar Origin;\n(function (Origin) {\n    Origin[\"PROD\"] = \"https://app.hastearcade.com\";\n    Origin[\"DEV\"] = \"https://dev.hastearcade.com\";\n})(Origin || (exports.Origin = Origin = {}));\n\n\n//# sourceURL=webpack://HasteArcadeSDK/./node_modules/haste-arcade-sdk/dist/types/types.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var haste_arcade_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! haste-arcade-sdk */ \"./node_modules/haste-arcade-sdk/dist/index.js\");\n/* harmony import */ var haste_arcade_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(haste_arcade_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst game = new haste_arcade_sdk__WEBPACK_IMPORTED_MODULE_0__.GameService(\n  \"f8c22e6c-1086-4529-8800-2c72f98b9915\",\n  haste_arcade_sdk__WEBPACK_IMPORTED_MODULE_0__.Origin.DEV\n);\n\nconst startButton = document.getElementById(\"startButton\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  game.init();\n  startButton.addEventListener(\"click\", async () => {\n    console.log(\"start button clicked\");\n    const res = await game.play();\n    console.log(res);\n    localStorage.setItem(\"playId\", res.playId);\n    startButton.classList.add(\"hidden\");\n  });\n});\n\n// Export to make it available globally\nwindow.GameService = haste_arcade_sdk__WEBPACK_IMPORTED_MODULE_0__.GameService;\nwindow.Origin = haste_arcade_sdk__WEBPACK_IMPORTED_MODULE_0__.Origin;\nwindow.HasteGame = game;\n\n\n//# sourceURL=webpack://HasteArcadeSDK/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});