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
exports.id = "pages/api/category/add-category";
exports.ids = ["pages/api/category/add-category"];
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

/***/ "(api)/./src/pages/api/category/add-category.ts":
/*!************************************************!*\
  !*** ./src/pages/api/category/add-category.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../db */ \"(api)/./db.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const { name  } = req.body;\n        const connection = await (0,_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const [result] = await connection.query(\"INSERT INTO categories (name) VALUES (?)\", [\n            name\n        ]);\n        await connection.end();\n        res.status(200).json({\n            message: \"Category added successfully\",\n            id: result.insertId\n        });\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NhdGVnb3J5L2FkZC1jYXRlZ29yeS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUVnQztBQUVoQyxpRUFBZSxPQUFPQyxLQUFxQkMsTUFBeUI7SUFDbEUsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBR0gsSUFBSUksSUFBSTtRQUV6QixNQUFNQyxhQUFhLE1BQU1OLCtDQUFFQTtRQUMzQixNQUFNLENBQUNPLE9BQU8sR0FBRyxNQUFNRCxXQUFXRSxLQUFLLENBQUMsNENBQTRDO1lBQUNKO1NBQUs7UUFDMUYsTUFBTUUsV0FBV0csR0FBRztRQUVwQlAsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1lBQStCQyxJQUFJLE9BQXFCQyxRQUFRO1FBQUM7SUFDbkcsT0FBTztRQUNMWixJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBcUI7SUFDdkQsQ0FBQztBQUNILEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96YW1hY28vLi9zcmMvcGFnZXMvYXBpL2NhdGVnb3J5L2FkZC1jYXRlZ29yeS50cz8xYmRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBPa1BhY2tldCB9IGZyb20gJ215c3FsMic7XHJcbmltcG9ydCBkYiBmcm9tICcuLi8uLi8uLi8uLi9kYic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICBjb25zdCB7IG5hbWUgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBkYigpO1xyXG4gICAgY29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdJTlNFUlQgSU5UTyBjYXRlZ29yaWVzIChuYW1lKSBWQUxVRVMgKD8pJywgW25hbWVdKTtcclxuICAgIGF3YWl0IGNvbm5lY3Rpb24uZW5kKCk7XHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnQ2F0ZWdvcnkgYWRkZWQgc3VjY2Vzc2Z1bGx5JywgaWQ6IChyZXN1bHQgYXMgT2tQYWNrZXQpLmluc2VydElkIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xyXG4gIH1cclxufTsiXSwibmFtZXMiOlsiZGIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJuYW1lIiwiYm9keSIsImNvbm5lY3Rpb24iLCJyZXN1bHQiLCJxdWVyeSIsImVuZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiaWQiLCJpbnNlcnRJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/category/add-category.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/category/add-category.ts"));
module.exports = __webpack_exports__;

})();