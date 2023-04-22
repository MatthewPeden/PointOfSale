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
exports.id = "pages/api/product/add-product";
exports.ids = ["pages/api/product/add-product"];
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

/***/ "(api)/./src/pages/api/product/add-product.ts":
/*!**********************************************!*\
  !*** ./src/pages/api/product/add-product.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../db */ \"(api)/./db.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const { name , description , category_id , price  } = req.body;\n        const connection = await (0,_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const [result] = await connection.query(\"INSERT INTO products (name, description, category_id, price) VALUES (?, ?, ?, ?)\", [\n            name,\n            description,\n            category_id,\n            price\n        ]);\n        await connection.end();\n        res.status(200).json({\n            message: \"Product added successfully\",\n            id: result.insertId\n        });\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Byb2R1Y3QvYWRkLXByb2R1Y3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFZ0M7QUFFaEMsaUVBQWUsT0FBT0MsS0FBcUJDLE1BQXlCO0lBQ2xFLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxZQUFXLEVBQUVDLFlBQVcsRUFBRUMsTUFBSyxFQUFFLEdBQUdOLElBQUlPLElBQUk7UUFFMUQsTUFBTUMsYUFBYSxNQUFNVCwrQ0FBRUE7UUFDM0IsTUFBTSxDQUFDVSxPQUFPLEdBQUcsTUFBTUQsV0FBV0UsS0FBSyxDQUFDLG9GQUFvRjtZQUFDUDtZQUFNQztZQUFhQztZQUFhQztTQUFNO1FBQ25LLE1BQU1FLFdBQVdHLEdBQUc7UUFFcEJWLElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztZQUE4QkMsSUFBSSxPQUFxQkMsUUFBUTtRQUFDO0lBQ2xHLE9BQU87UUFDTGYsSUFBSVcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXFCO0lBQ3ZELENBQUM7QUFDSCxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemFtYWNvLy4vc3JjL3BhZ2VzL2FwaS9wcm9kdWN0L2FkZC1wcm9kdWN0LnRzP2UwMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IE9rUGFja2V0IH0gZnJvbSAnbXlzcWwyJztcclxuaW1wb3J0IGRiIGZyb20gJy4uLy4uLy4uLy4uL2RiJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5X2lkLCBwcmljZSB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IGRiKCk7XHJcbiAgICBjb25zdCBbcmVzdWx0XSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ0lOU0VSVCBJTlRPIHByb2R1Y3RzIChuYW1lLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnlfaWQsIHByaWNlKSBWQUxVRVMgKD8sID8sID8sID8pJywgW25hbWUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeV9pZCwgcHJpY2VdKTtcclxuICAgIGF3YWl0IGNvbm5lY3Rpb24uZW5kKCk7XHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnUHJvZHVjdCBhZGRlZCBzdWNjZXNzZnVsbHknLCBpZDogKHJlc3VsdCBhcyBPa1BhY2tldCkuaW5zZXJ0SWQgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSk7XHJcbiAgfVxyXG59OyJdLCJuYW1lcyI6WyJkYiIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5X2lkIiwicHJpY2UiLCJib2R5IiwiY29ubmVjdGlvbiIsInJlc3VsdCIsInF1ZXJ5IiwiZW5kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJpZCIsImluc2VydElkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/product/add-product.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/product/add-product.ts"));
module.exports = __webpack_exports__;

})();