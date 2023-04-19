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
exports.id = "pages/api/product/edit-product";
exports.ids = ["pages/api/product/edit-product"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./db.ts":
/*!***************!*\
  !*** ./db.ts ***!
  \***************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n// db.ts\n\nconst connection = async ()=>{\n    return await mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"rootpassword\",\n        database: \"GATS\"\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxRQUFRO0FBQzJCO0FBRW5DLE1BQU1DLGFBQWEsVUFBWTtJQUM3QixPQUFPLE1BQU1ELHNFQUFzQixDQUFDO1FBQ2xDRyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxVQUFVO0lBQ1o7QUFDRjtBQUVBLGlFQUFlTCxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemFtYWNvLy4vZGIudHM/YzQ4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkYi50c1xyXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4gYXdhaXQgbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgIHVzZXI6ICdyb290JyxcclxuICAgIHBhc3N3b3JkOiAncm9vdHBhc3N3b3JkJyxcclxuICAgIGRhdGFiYXNlOiAnR0FUUycsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0aW9uOyJdLCJuYW1lcyI6WyJteXNxbCIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./db.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/product/edit-product.ts":
/*!***********************************************!*\
  !*** ./src/pages/api/product/edit-product.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../db */ \"(api)/./db.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"PUT\") {\n        const { product_id , name , description , category_id , wholesale_price , retail_price , quantity  } = req.body;\n        const connection = await (0,_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        await connection.query(\"UPDATE products SET name = ?, description = ?, category_id = ?, wholesale_price = ?, retail_price = ?, quantity = ? WHERE product_id = ?\", [\n            name,\n            description,\n            category_id,\n            wholesale_price,\n            retail_price,\n            quantity,\n            product_id\n        ]);\n        await connection.end();\n        res.status(200).json({\n            message: \"Product updated successfully\"\n        });\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Byb2R1Y3QvZWRpdC1wcm9kdWN0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ2dDO0FBRWhDLGlFQUFlLE9BQU9DLEtBQXFCQyxNQUF5QjtJQUNsRSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN4QixNQUFNLEVBQUVDLFdBQVUsRUFBRUMsS0FBSSxFQUFFQyxZQUFXLEVBQUVDLFlBQVcsRUFBRUMsZ0JBQWUsRUFBRUMsYUFBWSxFQUFFQyxTQUFRLEVBQUUsR0FBR1QsSUFBSVUsSUFBSTtRQUV4RyxNQUFNQyxhQUFhLE1BQU1aLCtDQUFFQTtRQUMzQixNQUFNWSxXQUFXQyxLQUFLLENBQUMsNElBQTRJO1lBQUNSO1lBQU1DO1lBQWFDO1lBQWFDO1lBQWlCQztZQUFjQztZQUFVTjtTQUFXO1FBQ3hQLE1BQU1RLFdBQVdFLEdBQUc7UUFFcEJaLElBQUlhLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUErQjtJQUNqRSxPQUFPO1FBQ0xmLElBQUlhLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFxQjtJQUN2RCxDQUFDO0FBQ0gsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3phbWFjby8uL3NyYy9wYWdlcy9hcGkvcHJvZHVjdC9lZGl0LXByb2R1Y3QudHM/NjAxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IGRiIGZyb20gJy4uLy4uLy4uLy4uL2RiJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUFVUJykge1xyXG4gICAgY29uc3QgeyBwcm9kdWN0X2lkLCBuYW1lLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnlfaWQsIHdob2xlc2FsZV9wcmljZSwgcmV0YWlsX3ByaWNlLCBxdWFudGl0eSB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IGRiKCk7XHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdVUERBVEUgcHJvZHVjdHMgU0VUIG5hbWUgPSA/LCBkZXNjcmlwdGlvbiA9ID8sIGNhdGVnb3J5X2lkID0gPywgd2hvbGVzYWxlX3ByaWNlID0gPywgcmV0YWlsX3ByaWNlID0gPywgcXVhbnRpdHkgPSA/IFdIRVJFIHByb2R1Y3RfaWQgPSA/JywgW25hbWUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeV9pZCwgd2hvbGVzYWxlX3ByaWNlLCByZXRhaWxfcHJpY2UsIHF1YW50aXR5LCBwcm9kdWN0X2lkXSk7XHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmVuZCgpO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ1Byb2R1Y3QgdXBkYXRlZCBzdWNjZXNzZnVsbHknIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImRiIiwicmVxIiwicmVzIiwibWV0aG9kIiwicHJvZHVjdF9pZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5X2lkIiwid2hvbGVzYWxlX3ByaWNlIiwicmV0YWlsX3ByaWNlIiwicXVhbnRpdHkiLCJib2R5IiwiY29ubmVjdGlvbiIsInF1ZXJ5IiwiZW5kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/product/edit-product.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/product/edit-product.ts"));
module.exports = __webpack_exports__;

})();