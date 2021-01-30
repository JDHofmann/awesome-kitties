module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./content/home.md":
/*!*************************!*\
  !*** ./content/home.md ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const React = __webpack_require__(/*! react */ \"react\")\n\nmodule.exports = { \n      attributes: {\"title\":\"Awesome kitties\",\"date\":\"2019-03-17T19:31:20.591Z\",\"cats\":[{\"description\":\"Maru is a Scottish Fold from Japan, and he loves boxes.\",\"name\":\"Maru (まる)\"},{\"description\":\"Lil Bub is an American celebrity cat known for her unique appearance.\",\"name\":\"Lil Bub\"},{\"description\":\"Grumpy cat is an American celebrity cat known for her grumpy appearance.\",\"name\":\"Grumpy cat (Tardar Sauce)\"},{\"description\":\"Tom is a chonk, part horse, part bear\",\"name\":\"Tom\"}]},\n    \n      react: \n      function (props) {\n        Object.keys(props).forEach(function (key) {\n          this[key] = props[key]\n        })\n        const markdown = /*#__PURE__*/React.createElement(\"div\", {\n  className: \"frontmatter-markdown\"\n}, /*#__PURE__*/React.createElement(\"p\", null, \"Welcome to my awesome page about cats of the internet.\"), /*#__PURE__*/React.createElement(\"p\", null, \"This is a test\"));\n        return markdown\n      }\n    ,\n     }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZW50L2hvbWUubWQ/Nzk1YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLG1CQUFPLENBQUMsb0JBQU87O0FBRTdCLGtCO0FBQ0EsbUJBQW1CLHFFQUFxRSwyRkFBMkYsRUFBRSx1R0FBdUcsRUFBRSw0SEFBNEgsRUFBRSxtRUFBbUUsRUFBRTs7QUFFamU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbnRlbnQvaG9tZS5tZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgXG4gICAgICBhdHRyaWJ1dGVzOiB7XCJ0aXRsZVwiOlwiQXdlc29tZSBraXR0aWVzXCIsXCJkYXRlXCI6XCIyMDE5LTAzLTE3VDE5OjMxOjIwLjU5MVpcIixcImNhdHNcIjpbe1wiZGVzY3JpcHRpb25cIjpcIk1hcnUgaXMgYSBTY290dGlzaCBGb2xkIGZyb20gSmFwYW4sIGFuZCBoZSBsb3ZlcyBib3hlcy5cIixcIm5hbWVcIjpcIk1hcnUgKOOBvuOCiylcIn0se1wiZGVzY3JpcHRpb25cIjpcIkxpbCBCdWIgaXMgYW4gQW1lcmljYW4gY2VsZWJyaXR5IGNhdCBrbm93biBmb3IgaGVyIHVuaXF1ZSBhcHBlYXJhbmNlLlwiLFwibmFtZVwiOlwiTGlsIEJ1YlwifSx7XCJkZXNjcmlwdGlvblwiOlwiR3J1bXB5IGNhdCBpcyBhbiBBbWVyaWNhbiBjZWxlYnJpdHkgY2F0IGtub3duIGZvciBoZXIgZ3J1bXB5IGFwcGVhcmFuY2UuXCIsXCJuYW1lXCI6XCJHcnVtcHkgY2F0IChUYXJkYXIgU2F1Y2UpXCJ9LHtcImRlc2NyaXB0aW9uXCI6XCJUb20gaXMgYSBjaG9uaywgcGFydCBob3JzZSwgcGFydCBiZWFyXCIsXCJuYW1lXCI6XCJUb21cIn1dfSxcbiAgICBcbiAgICAgIHJlYWN0OiBcbiAgICAgIGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgdGhpc1trZXldID0gcHJvcHNba2V5XVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBtYXJrZG93biA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgY2xhc3NOYW1lOiBcImZyb250bWF0dGVyLW1hcmtkb3duXCJcbn0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIldlbGNvbWUgdG8gbXkgYXdlc29tZSBwYWdlIGFib3V0IGNhdHMgb2YgdGhlIGludGVybmV0LlwiKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiVGhpcyBpcyBhIHRlc3RcIikpO1xuICAgICAgICByZXR1cm4gbWFya2Rvd25cbiAgICAgIH1cbiAgICAsXG4gICAgIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./content/home.md\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/home.md */ \"./content/home.md\");\n/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_home_md__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/jdbrewer-hofmann/Development/code/tara/awesome-kitties/pages/index.js\";\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_2__[\"Component\"] {\n  render() {\n    let {\n      title,\n      cats\n    } = _content_home_md__WEBPACK_IMPORTED_MODULE_3__[\"attributes\"];\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n          src: \"https://identity.netlify.com/v1/netlify-identity-widget.js\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_content_home_md__WEBPACK_IMPORTED_MODULE_3__[\"react\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n          children: cats.map((cat, k) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: cat.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: cat.description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 17\n            }, this)]\n          }, k, true, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 15\n          }, this))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJ0aXRsZSIsImNhdHMiLCJhdHRyaWJ1dGVzIiwibWFwIiwiY2F0IiwiayIsIm5hbWUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLE1BQU1BLElBQU4sU0FBbUJDLCtDQUFuQixDQUE2QjtBQUMxQ0MsUUFBTSxHQUFHO0FBQ1AsUUFBSTtBQUFFQyxXQUFGO0FBQVNDO0FBQVQsUUFBa0JDLDJEQUF0QjtBQUNBLHdCQUNFO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSwrQkFDRTtBQUFRLGFBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFBLGdDQUNFO0FBQUEsb0JBQUtGO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBLG9CQUNHQyxJQUFJLENBQUNFLEdBQUwsQ0FBUyxDQUFDQyxHQUFELEVBQU1DLENBQU4sa0JBQ1I7QUFBQSxvQ0FDRTtBQUFBLHdCQUFLRCxHQUFHLENBQUNFO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQUEsd0JBQUlGLEdBQUcsQ0FBQ0c7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUEsYUFBU0YsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBLG9CQURGO0FBbUJEOztBQXRCeUMiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBhdHRyaWJ1dGVzLCByZWFjdCBhcyBIb21lQ29udGVudCB9IGZyb20gJy4uL2NvbnRlbnQvaG9tZS5tZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgdGl0bGUsIGNhdHMgfSA9IGF0dHJpYnV0ZXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9pZGVudGl0eS5uZXRsaWZ5LmNvbS92MS9uZXRsaWZ5LWlkZW50aXR5LXdpZGdldC5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICA8SG9tZUNvbnRlbnQgLz5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7Y2F0cy5tYXAoKGNhdCwgaykgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtrfT5cbiAgICAgICAgICAgICAgICA8aDI+e2NhdC5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+e2NhdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8Lz5cbiAgICApXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });