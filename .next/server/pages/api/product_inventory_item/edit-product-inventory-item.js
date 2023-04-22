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
exports.id = "pages/api/product_inventory_item/edit-product-inventory-item";
exports.ids = ["pages/api/product_inventory_item/edit-product-inventory-item"];
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

/***/ "(api)/./src/pages/api/product_inventory_item/edit-product-inventory-item.ts":
/*!*****************************************************************************!*\
  !*** ./src/pages/api/product_inventory_item/edit-product-inventory-item.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../db */ \"(api)/./db.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"PUT\") {\n        const { product_inventory_item_id , product_id , inventory_item_id , quantity  } = req.body;\n        const connection = await (0,_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        await connection.query(\"UPDATE product_inventory_items SET product_id = ?, inventory_item_id = ?, quantity = ? WHERE product_inventory_item_id = ?\", [\n            product_id,\n            inventory_item_id,\n            quantity,\n            product_inventory_item_id\n        ]);\n        await connection.end();\n        res.status(200).json({\n            message: \"Product updated successfully\"\n        });\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Byb2R1Y3RfaW52ZW50b3J5X2l0ZW0vZWRpdC1wcm9kdWN0LWludmVudG9yeS1pdGVtLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ2dDO0FBRWhDLGlFQUFlLE9BQU9DLEtBQXFCQyxNQUF5QjtJQUNsRSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN4QixNQUFNLEVBQUVDLDBCQUF5QixFQUFFQyxXQUFVLEVBQUVDLGtCQUFpQixFQUFFQyxTQUFRLEVBQUUsR0FBR04sSUFBSU8sSUFBSTtRQUV2RixNQUFNQyxhQUFhLE1BQU1ULCtDQUFFQTtRQUMzQixNQUFNUyxXQUFXQyxLQUFLLENBQUMsOEhBQThIO1lBQUNMO1lBQVlDO1lBQW1CQztZQUFVSDtTQUEwQjtRQUN6TixNQUFNSyxXQUFXRSxHQUFHO1FBRXBCVCxJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBK0I7SUFDakUsT0FBTztRQUNMWixJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBcUI7SUFDdkQsQ0FBQztBQUNILEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96YW1hY28vLi9zcmMvcGFnZXMvYXBpL3Byb2R1Y3RfaW52ZW50b3J5X2l0ZW0vZWRpdC1wcm9kdWN0LWludmVudG9yeS1pdGVtLnRzP2NkYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBkYiBmcm9tICcuLi8uLi8uLi8uLi9kYic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BVVCcpIHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdF9pbnZlbnRvcnlfaXRlbV9pZCwgcHJvZHVjdF9pZCwgaW52ZW50b3J5X2l0ZW1faWQsIHF1YW50aXR5IH0gPSByZXEuYm9keTtcclxuXHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgZGIoKTtcclxuICAgIGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ1VQREFURSBwcm9kdWN0X2ludmVudG9yeV9pdGVtcyBTRVQgcHJvZHVjdF9pZCA9ID8sIGludmVudG9yeV9pdGVtX2lkID0gPywgcXVhbnRpdHkgPSA/IFdIRVJFIHByb2R1Y3RfaW52ZW50b3J5X2l0ZW1faWQgPSA/JywgW3Byb2R1Y3RfaWQsIGludmVudG9yeV9pdGVtX2lkLCBxdWFudGl0eSwgcHJvZHVjdF9pbnZlbnRvcnlfaXRlbV9pZF0pO1xyXG4gICAgYXdhaXQgY29ubmVjdGlvbi5lbmQoKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdQcm9kdWN0IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5JyB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KTtcclxuICB9XHJcbn07Il0sIm5hbWVzIjpbImRiIiwicmVxIiwicmVzIiwibWV0aG9kIiwicHJvZHVjdF9pbnZlbnRvcnlfaXRlbV9pZCIsInByb2R1Y3RfaWQiLCJpbnZlbnRvcnlfaXRlbV9pZCIsInF1YW50aXR5IiwiYm9keSIsImNvbm5lY3Rpb24iLCJxdWVyeSIsImVuZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/product_inventory_item/edit-product-inventory-item.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/product_inventory_item/edit-product-inventory-item.ts"));
module.exports = __webpack_exports__;

})();