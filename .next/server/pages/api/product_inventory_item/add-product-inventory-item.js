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
exports.id = "pages/api/product_inventory_item/add-product-inventory-item";
exports.ids = ["pages/api/product_inventory_item/add-product-inventory-item"];
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

/***/ "(api)/./src/pages/api/product_inventory_item/add-product-inventory-item.ts":
/*!****************************************************************************!*\
  !*** ./src/pages/api/product_inventory_item/add-product-inventory-item.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../db */ \"(api)/./db.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const { product_id , inventory_item_id , quantity  } = req.body;\n        const connection = await (0,_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const [result] = await connection.query(\"INSERT INTO product_inventory_items (product_id, inventory_item_id, quantity) VALUES (?, ?, ?)\", [\n            product_id,\n            inventory_item_id,\n            quantity\n        ]);\n        await connection.end();\n        res.status(200).json({\n            message: \"Product added successfully\",\n            id: result.insertId\n        });\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Byb2R1Y3RfaW52ZW50b3J5X2l0ZW0vYWRkLXByb2R1Y3QtaW52ZW50b3J5LWl0ZW0udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFZ0M7QUFFaEMsaUVBQWUsT0FBT0MsS0FBcUJDLE1BQXlCO0lBQ2xFLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRUMsV0FBVSxFQUFFQyxrQkFBaUIsRUFBRUMsU0FBUSxFQUFFLEdBQUdMLElBQUlNLElBQUk7UUFFNUQsTUFBTUMsYUFBYSxNQUFNUiwrQ0FBRUE7UUFDM0IsTUFBTSxDQUFDUyxPQUFPLEdBQUcsTUFBTUQsV0FBV0UsS0FBSyxDQUFDLGtHQUFrRztZQUFDTjtZQUFZQztZQUFtQkM7U0FBUztRQUNuTCxNQUFNRSxXQUFXRyxHQUFHO1FBRXBCVCxJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7WUFBOEJDLElBQUksT0FBcUJDLFFBQVE7UUFBQztJQUNsRyxPQUFPO1FBQ0xkLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFxQjtJQUN2RCxDQUFDO0FBQ0gsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3phbWFjby8uL3NyYy9wYWdlcy9hcGkvcHJvZHVjdF9pbnZlbnRvcnlfaXRlbS9hZGQtcHJvZHVjdC1pbnZlbnRvcnktaXRlbS50cz80ZWY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBPa1BhY2tldCB9IGZyb20gJ215c3FsMic7XHJcbmltcG9ydCBkYiBmcm9tICcuLi8uLi8uLi8uLi9kYic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICBjb25zdCB7IHByb2R1Y3RfaWQsIGludmVudG9yeV9pdGVtX2lkLCBxdWFudGl0eSB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IGRiKCk7XHJcbiAgICBjb25zdCBbcmVzdWx0XSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ0lOU0VSVCBJTlRPIHByb2R1Y3RfaW52ZW50b3J5X2l0ZW1zIChwcm9kdWN0X2lkLCBpbnZlbnRvcnlfaXRlbV9pZCwgcXVhbnRpdHkpIFZBTFVFUyAoPywgPywgPyknLCBbcHJvZHVjdF9pZCwgaW52ZW50b3J5X2l0ZW1faWQsIHF1YW50aXR5XSk7XHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmVuZCgpO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ1Byb2R1Y3QgYWRkZWQgc3VjY2Vzc2Z1bGx5JywgaWQ6IChyZXN1bHQgYXMgT2tQYWNrZXQpLmluc2VydElkIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xyXG4gIH1cclxufTsiXSwibmFtZXMiOlsiZGIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJwcm9kdWN0X2lkIiwiaW52ZW50b3J5X2l0ZW1faWQiLCJxdWFudGl0eSIsImJvZHkiLCJjb25uZWN0aW9uIiwicmVzdWx0IiwicXVlcnkiLCJlbmQiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImlkIiwiaW5zZXJ0SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/product_inventory_item/add-product-inventory-item.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/product_inventory_item/add-product-inventory-item.ts"));
module.exports = __webpack_exports__;

})();