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
exports.id = "pages/api/inventory_item/edit-inventory-item";
exports.ids = ["pages/api/inventory_item/edit-inventory-item"];
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

/***/ "(api)/./src/pages/api/inventory_item/edit-inventory-item.ts":
/*!*************************************************************!*\
  !*** ./src/pages/api/inventory_item/edit-inventory-item.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../db */ \"(api)/./db.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"PUT\") {\n        const { inventory_item_id , name , price , reorder_point  } = req.body;\n        const connection = await (0,_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        await connection.query(\"UPDATE inventory_items SET name = ?, price = ?, reorder_point = ? WHERE inventory_item_id = ?\", [\n            name,\n            price,\n            reorder_point,\n            inventory_item_id\n        ]);\n        await connection.end();\n        res.status(200).json({\n            message: \"Inventory item updated successfully\"\n        });\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2ludmVudG9yeV9pdGVtL2VkaXQtaW52ZW50b3J5LWl0ZW0udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDZ0M7QUFFaEMsaUVBQWUsT0FBT0MsS0FBcUJDLE1BQXlCO0lBQ2xFLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLE1BQU0sRUFBRUMsa0JBQWlCLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxjQUFhLEVBQUUsR0FBR04sSUFBSU8sSUFBSTtRQUVsRSxNQUFNQyxhQUFhLE1BQU1ULCtDQUFFQTtRQUMzQixNQUFNUyxXQUFXQyxLQUFLLENBQUMsaUdBQWlHO1lBQUNMO1lBQU1DO1lBQU9DO1lBQWVIO1NBQWtCO1FBQ3ZLLE1BQU1LLFdBQVdFLEdBQUc7UUFFcEJULElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFzQztJQUN4RSxPQUFPO1FBQ0xaLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFxQjtJQUN2RCxDQUFDO0FBQ0gsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3phbWFjby8uL3NyYy9wYWdlcy9hcGkvaW52ZW50b3J5X2l0ZW0vZWRpdC1pbnZlbnRvcnktaXRlbS50cz80MGVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vLi4vLi4vLi4vZGInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQVVQnKSB7XHJcbiAgICBjb25zdCB7IGludmVudG9yeV9pdGVtX2lkLCBuYW1lLCBwcmljZSwgcmVvcmRlcl9wb2ludCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IGRiKCk7XHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdVUERBVEUgaW52ZW50b3J5X2l0ZW1zIFNFVCBuYW1lID0gPywgcHJpY2UgPSA/LCByZW9yZGVyX3BvaW50ID0gPyBXSEVSRSBpbnZlbnRvcnlfaXRlbV9pZCA9ID8nLCBbbmFtZSwgcHJpY2UsIHJlb3JkZXJfcG9pbnQsIGludmVudG9yeV9pdGVtX2lkXSk7XHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmVuZCgpO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ0ludmVudG9yeSBpdGVtIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5JyB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KTtcclxuICB9XHJcbn07Il0sIm5hbWVzIjpbImRiIiwicmVxIiwicmVzIiwibWV0aG9kIiwiaW52ZW50b3J5X2l0ZW1faWQiLCJuYW1lIiwicHJpY2UiLCJyZW9yZGVyX3BvaW50IiwiYm9keSIsImNvbm5lY3Rpb24iLCJxdWVyeSIsImVuZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/inventory_item/edit-inventory-item.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/inventory_item/edit-inventory-item.ts"));
module.exports = __webpack_exports__;

})();