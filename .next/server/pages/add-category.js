"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/add-category";
exports.ids = ["pages/add-category"];
exports.modules = {

/***/ "./src/pages/add-category.tsx":
/*!************************************!*\
  !*** ./src/pages/add-category.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Container = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`\r\n  background-color: #ede6f5;\r\n  padding: 20px;\r\n`;\nconst Title = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().h1)`\r\n  color: #8447c9;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  margin-bottom: 20px;\r\n`;\nconst FormField = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`\r\n  margin-bottom: 20px;\r\n`;\nconst Label = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().label)`\r\n  display: block;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  margin-bottom: 5px;\r\n`;\nconst Form = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().form)`\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n`;\nconst Input = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().input)`\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n  padding: 10px;\r\n  width: 100%;\r\n`;\nconst AddCategoryPage = ()=>{\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const response = await fetch(\"/api/category/add-category\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                name\n            })\n        });\n        if (response.ok) {\n            router.push(\"/categories\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                children: \"Add New Category\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\add-category.tsx\",\n                lineNumber: 67,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormField, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Label, {\n                                htmlFor: \"name\",\n                                children: \"Name:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\add-category.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 19\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                type: \"text\",\n                                id: \"name\",\n                                value: name,\n                                onChange: (e)=>setName(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\add-category.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 19\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\add-category.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 15\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormField, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Add Category\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\add-category.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 19\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\add-category.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 15\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\add-category.tsx\",\n                lineNumber: 68,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\add-category.tsx\",\n        lineNumber: 66,\n        columnNumber: 7\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddCategoryPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWRkLWNhdGVnb3J5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW1FO0FBQzNCO0FBQ0Q7QUFFdkMsTUFBTUksWUFBWUQsOERBQVUsQ0FBQzs7O0FBRzdCLENBQUM7QUFFRCxNQUFNRyxRQUFRSCw2REFBUyxDQUFDOzs7OztBQUt4QixDQUFDO0FBRUQsTUFBTUssWUFBWUwsOERBQVUsQ0FBQzs7QUFFN0IsQ0FBQztBQUVELE1BQU1NLFFBQVFOLGdFQUFZLENBQUM7Ozs7O0FBSzNCLENBQUM7QUFFRCxNQUFNUSxPQUFPUiwrREFBVyxDQUFDOzs7QUFHekIsQ0FBQztBQUVELE1BQU1VLFFBQVFWLGdFQUFZLENBQUM7Ozs7Ozs7O0FBUTNCLENBQUM7QUFFRCxNQUFNWSxrQkFBNEIsSUFBTTtJQUN0QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1pQixTQUFTaEIsc0RBQVNBO0lBRXhCLE1BQU1pQixlQUFlLE9BQU9DLFFBQXFCO1FBQzdDQSxNQUFNQyxjQUFjO1FBRXBCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSw4QkFBOEI7WUFDdkRDLFFBQVE7WUFDUkMsU0FBUztnQkFDTCxnQkFBZ0I7WUFDcEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNqQlo7WUFDSjtRQUNKO1FBRUEsSUFBSU0sU0FBU08sRUFBRSxFQUFFO1lBQ2JYLE9BQU9ZLElBQUksQ0FBQztRQUNoQixDQUFDO0lBQ0w7SUFFQSxxQkFDSSw4REFBQzFCOzswQkFDRyw4REFBQ0U7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0s7Z0JBQUtvQixVQUFVWjs7a0NBQ1osOERBQUNYOzswQ0FDRyw4REFBQ0M7Z0NBQU11QixTQUFROzBDQUFPOzs7Ozs7MENBQ3RCLDhEQUFDbkI7Z0NBQ0dvQixNQUFLO2dDQUNMQyxJQUFHO2dDQUNIQyxPQUFPbkI7Z0NBQ1BvQixVQUFVLENBQUNDLElBQXVEcEIsUUFBUW9CLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7O2tDQUloRyw4REFBQzNCO2tDQUNHLDRFQUFDK0I7NEJBQU9OLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hDO0FBRUEsaUVBQWVsQixlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemFtYWNvLy4vc3JjL3BhZ2VzL2FkZC1jYXRlZ29yeS50c3g/MzU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRm9ybUV2ZW50LCBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGU2ZjU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxyXG4gIGNvbG9yOiAjODQ0N2M5O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybUZpZWxkID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgQWRkQ2F0ZWdvcnlQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogRm9ybUV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2NhdGVnb3J5L2FkZC1jYXRlZ29yeScsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9jYXRlZ29yaWVzJyk7XHJcbiAgICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPFRpdGxlPkFkZCBOZXcgQ2F0ZWdvcnk8L1RpdGxlPlxyXG4gICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgPEZvcm1GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogeyB0YXJnZXQ6IHsgdmFsdWU6IFNldFN0YXRlQWN0aW9uPHN0cmluZz47IH07IH0pID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICA8Rm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQgQ2F0ZWdvcnk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZENhdGVnb3J5UGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJzdHlsZWQiLCJDb250YWluZXIiLCJkaXYiLCJUaXRsZSIsImgxIiwiRm9ybUZpZWxkIiwiTGFiZWwiLCJsYWJlbCIsIkZvcm0iLCJmb3JtIiwiSW5wdXQiLCJpbnB1dCIsIkFkZENhdGVnb3J5UGFnZSIsIm5hbWUiLCJzZXROYW1lIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsInB1c2giLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJ0eXBlIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/add-category.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/add-category.tsx"));
module.exports = __webpack_exports__;

})();