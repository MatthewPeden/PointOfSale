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
exports.id = "pages/edit-product-inventory-item/[id]";
exports.ids = ["pages/edit-product-inventory-item/[id]"];
exports.modules = {

/***/ "./db.ts":
/*!***************!*\
  !*** ./db.ts ***!
  \***************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n// db.ts\n\nconst connection = async ()=>{\n    return await mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"rootpassword\",\n        database: \"GATS\"\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxRQUFRO0FBQzJCO0FBRW5DLE1BQU1DLGFBQWEsVUFBWTtJQUM3QixPQUFPLE1BQU1ELHNFQUFzQixDQUFDO1FBQ2xDRyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxVQUFVO0lBQ1o7QUFDRjtBQUVBLGlFQUFlTCxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemFtYWNvLy4vZGIudHM/YzQ4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkYi50c1xyXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4gYXdhaXQgbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgIHVzZXI6ICdyb290JyxcclxuICAgIHBhc3N3b3JkOiAncm9vdHBhc3N3b3JkJyxcclxuICAgIGRhdGFiYXNlOiAnR0FUUycsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0aW9uOyJdLCJuYW1lcyI6WyJteXNxbCIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./db.ts\n");

/***/ }),

/***/ "./src/pages/edit-product-inventory-item.tsx":
/*!***************************************************!*\
  !*** ./src/pages/edit-product-inventory-item.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../db */ \"./db.ts\");\n\n\n\n\n\nconst Container = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`\r\n  background-color: #ede6f5;\r\n  padding: 20px;\r\n`;\nconst Title = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().h1)`\r\n  color: #8447c9;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  margin-bottom: 20px;\r\n`;\nconst FormField = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`\r\n  margin-bottom: 20px;\r\n`;\nconst Label = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().label)`\r\n  display: block;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  margin-bottom: 5px;\r\n`;\nconst Form = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().form)`\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n`;\nconst Input = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().input)`\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n  padding: 10px;\r\n  width: 100%;\r\n`;\nconst EditProductInventoryItemPage = ({ initialProductItem  })=>{\n    const [productId, setProductId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialProductItem.product_id);\n    const [inventoryItemId, setInventoryItemId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialProductItem.inventory_item_id);\n    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialProductItem.quantity);\n    const [products_list, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [inventory_items_list, setInventoryItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchProducts = async ()=>{\n        const response = await fetch(\"/api/product_inventory_item/get-products\");\n        const data = await response.json();\n        setProducts(data);\n    };\n    const fetchInventoryItems = async ()=>{\n        const response = await fetch(\"/api/product_inventory_item/get-inventory-items\");\n        const data = await response.json();\n        setInventoryItems(data);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const response = await fetch(`/api/product_inventory_item/edit-product-inventory-item`, {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                product_inventory_item_id: initialProductItem.product_inventory_item_id,\n                product_id: Number(productId),\n                inventory_item_id: Number(inventoryItemId),\n                quantity: Number(quantity)\n            })\n        });\n        if (response.ok) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/product_inventory_items\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchProducts();\n        fetchInventoryItems();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                children: \"Edit Product Item\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-product-inventory-item.tsx\",\n                lineNumber: 115,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormField, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Label, {\n                                htmlFor: \"product\",\n                                children: \"Product:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-product-inventory-item.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                id: \"product_id\",\n                                name: \"product_id\",\n                                value: productId,\n                                onChange: (e)=>setProductId(parseInt(e.target.value)),\n                                required: true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"Select a product\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-product-inventory-item.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    products_list.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: product.product_id,\n                                            children: product.name\n                                        }, product.product_id, false, {\n                                            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-product-inventory-item.tsx\",\n                                            lineNumber: 128,\n                                            columnNumber: 29\n                                        }, undefined))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-product-inventory-item.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-product-inventory-item.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormField, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Label, {\n                                htmlFor: \"inventory_item\",\n                                children: \"Inventory Item:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-product-inventory-item.tsx\",\n                                lineNumber: 136,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                id: \"inventory_item_id\",\n                                name: \"inventory_item_id\",\n                                value: inventoryItemId,\n                                onChange: (e)=>setInventoryItemId(parseInt(e.target.value)),\n                                required: true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"Select an inventory item\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-product-inventory-item.tsx\",\n                                        lineNumber: 144,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    inventory_items_list.map((inventory_item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: inventory_item.inventory_item_id,\n                                            children: inventory_item.name\n                                        }, inventory_item.inventory_item_id, false, {\n                                            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-product-inventory-item.tsx\",\n                                            lineNumber: 146,\n                                            columnNumber: 29\n                                        }, undefined))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-product-inventory-item.tsx\",\n                                lineNumber: 137,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-product-inventory-item.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormField, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Label, {\n                                htmlFor: \"quantity\",\n                                children: \"Quantity:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-product-inventory-item.tsx\",\n                                lineNumber: 154,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                type: \"number\",\n                                id: \"quantity\",\n                                step: \"0.01\",\n                                value: quantity,\n                                onChange: (e)=>setQuantity(parseInt(e.target.value))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-product-inventory-item.tsx\",\n                                lineNumber: 155,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-product-inventory-item.tsx\",\n                        lineNumber: 153,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormField, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Update Product Item\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-product-inventory-item.tsx\",\n                            lineNumber: 165,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-product-inventory-item.tsx\",\n                        lineNumber: 164,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-product-inventory-item.tsx\",\n                lineNumber: 116,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-product-inventory-item.tsx\",\n        lineNumber: 114,\n        columnNumber: 9\n    }, undefined);\n};\nconst getServerSideProps = async (context)=>{\n    const { id  } = context.query;\n    const connection = await (0,_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const [rows] = await connection.query(\"SELECT * FROM product_inventory_items WHERE product_inventory_item_id = ?\", [\n        id\n    ]);\n    await connection.end();\n    if (rows.length === 0) {\n        return {\n            notFound: true\n        };\n    }\n    const product_inventory_item = rows[0];\n    return {\n        props: {\n            product_inventory_item\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditProductInventoryItemPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZWRpdC1wcm9kdWN0LWludmVudG9yeS1pdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUU7QUFDdkI7QUFDVDtBQUViO0FBRzFCLE1BQU1LLFlBQVlGLDhEQUFVLENBQUM7OztBQUc3QixDQUFDO0FBRUQsTUFBTUksUUFBUUosNkRBQVMsQ0FBQzs7Ozs7QUFLeEIsQ0FBQztBQUVELE1BQU1NLFlBQVlOLDhEQUFVLENBQUM7O0FBRTdCLENBQUM7QUFFRCxNQUFNTyxRQUFRUCxnRUFBWSxDQUFDOzs7OztBQUszQixDQUFDO0FBRUQsTUFBTVMsT0FBT1QsK0RBQVcsQ0FBQzs7O0FBR3pCLENBQUM7QUFFRCxNQUFNVyxRQUFRWCxnRUFBWSxDQUFDOzs7Ozs7OztBQVEzQixDQUFDO0FBd0JELE1BQU1hLCtCQUErQixDQUFDLEVBQUVDLG1CQUFrQixFQUFnRCxHQUFLO0lBQzNHLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHbkIsK0NBQVFBLENBQVNpQixtQkFBbUJHLFVBQVU7SUFDaEYsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHdEIsK0NBQVFBLENBQVNpQixtQkFBbUJNLGlCQUFpQjtJQUNuRyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR3pCLCtDQUFRQSxDQUFTaUIsbUJBQW1CTyxRQUFRO0lBQzVFLE1BQU0sQ0FBQ0UsZUFBZUMsWUFBWSxHQUFHM0IsK0NBQVFBLENBQVksRUFBRTtJQUMzRCxNQUFNLENBQUM0QixzQkFBc0JDLGtCQUFrQixHQUFHN0IsK0NBQVFBLENBQWtCLEVBQUU7SUFFOUUsTUFBTThCLGdCQUFnQixVQUFZO1FBQzlCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtRQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7UUFDaENQLFlBQVlNO0lBQ2hCO0lBRUEsTUFBTUUsc0JBQXNCLFVBQVk7UUFDcEMsTUFBTUosV0FBVyxNQUFNQyxNQUFNO1FBQzdCLE1BQU1DLE9BQU8sTUFB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SjtJQUNKO0FBQ0osRUFBRTtBQUVGLGlFQUFlekQsNEJBQTRCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemFtYWNvLy4vc3JjL3BhZ2VzL2VkaXQtcHJvZHVjdC1pbnZlbnRvcnktaXRlbS50c3g/YmI2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGb3JtRXZlbnQsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vLi4vZGInO1xyXG5pbXBvcnQgeyBSb3dEYXRhUGFja2V0IH0gZnJvbSAnbXlzcWwyJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZTZmNTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgY29sb3I6ICM4NDQ3Yzk7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtRmllbGQgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdEludmVudG9yeUl0ZW0ge1xyXG4gICAgcHJvZHVjdF9pbnZlbnRvcnlfaXRlbV9pZDogbnVtYmVyO1xyXG4gICAgcHJvZHVjdF9pZDogbnVtYmVyO1xyXG4gICAgaW52ZW50b3J5X2l0ZW1faWQ6IG51bWJlcjtcclxuICAgIHF1YW50aXR5OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9kdWN0IHtcclxuICAgIHByb2R1Y3RfaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeV9pZDogbnVtYmVyO1xyXG4gICAgcHJpY2U6IG51bWJlcjtcclxufVxyXG4gIFxyXG5pbnRlcmZhY2UgSW52ZW50b3J5SXRlbSB7XHJcbiAgICBpbnZlbnRvcnlfaXRlbV9pZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpY2U6IG51bWJlcjtcclxuICAgIHJlb3JkZXJfcG9pbnQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgRWRpdFByb2R1Y3RJbnZlbnRvcnlJdGVtUGFnZSA9ICh7IGluaXRpYWxQcm9kdWN0SXRlbSB9OiB7IGluaXRpYWxQcm9kdWN0SXRlbTogUHJvZHVjdEludmVudG9yeUl0ZW0gfSkgPT4ge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RJZCwgc2V0UHJvZHVjdElkXSA9IHVzZVN0YXRlPG51bWJlcj4oaW5pdGlhbFByb2R1Y3RJdGVtLnByb2R1Y3RfaWQpO1xyXG4gICAgY29uc3QgW2ludmVudG9yeUl0ZW1JZCwgc2V0SW52ZW50b3J5SXRlbUlkXSA9IHVzZVN0YXRlPG51bWJlcj4oaW5pdGlhbFByb2R1Y3RJdGVtLmludmVudG9yeV9pdGVtX2lkKTtcclxuICAgIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGU8bnVtYmVyPihpbml0aWFsUHJvZHVjdEl0ZW0ucXVhbnRpdHkpO1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzX2xpc3QsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oW10pO1xyXG4gICAgY29uc3QgW2ludmVudG9yeV9pdGVtc19saXN0LCBzZXRJbnZlbnRvcnlJdGVtc10gPSB1c2VTdGF0ZTxJbnZlbnRvcnlJdGVtW10+KFtdKTtcclxuICBcclxuICAgIGNvbnN0IGZldGNoUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9wcm9kdWN0X2ludmVudG9yeV9pdGVtL2dldC1wcm9kdWN0cycpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0UHJvZHVjdHMoZGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZldGNoSW52ZW50b3J5SXRlbXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9wcm9kdWN0X2ludmVudG9yeV9pdGVtL2dldC1pbnZlbnRvcnktaXRlbXMnKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldEludmVudG9yeUl0ZW1zKGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogRm9ybUV2ZW50KSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9wcm9kdWN0X2ludmVudG9yeV9pdGVtL2VkaXQtcHJvZHVjdC1pbnZlbnRvcnktaXRlbWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9pbnZlbnRvcnlfaXRlbV9pZDogaW5pdGlhbFByb2R1Y3RJdGVtLnByb2R1Y3RfaW52ZW50b3J5X2l0ZW1faWQsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOiBOdW1iZXIocHJvZHVjdElkKSxcclxuICAgICAgICAgICAgICAgIGludmVudG9yeV9pdGVtX2lkOiBOdW1iZXIoaW52ZW50b3J5SXRlbUlkKSxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiBOdW1iZXIocXVhbnRpdHkpLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2R1Y3RfaW52ZW50b3J5X2l0ZW1zJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoUHJvZHVjdHMoKTtcclxuICAgICAgICBmZXRjaEludmVudG9yeUl0ZW1zKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8VGl0bGU+RWRpdCBQcm9kdWN0IEl0ZW08L1RpdGxlPlxyXG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJwcm9kdWN0XCI+UHJvZHVjdDo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcm9kdWN0X2lkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZHVjdElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByb2R1Y3RJZChwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgYSBwcm9kdWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0c19saXN0Lm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3Byb2R1Y3QucHJvZHVjdF9pZH0gdmFsdWU9e3Byb2R1Y3QucHJvZHVjdF9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm1GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImludmVudG9yeV9pdGVtXCI+SW52ZW50b3J5IEl0ZW06PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW52ZW50b3J5X2l0ZW1faWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW52ZW50b3J5X2l0ZW1faWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW52ZW50b3J5SXRlbUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEludmVudG9yeUl0ZW1JZChwYXJzZUludChlLnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgYW4gaW52ZW50b3J5IGl0ZW08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ludmVudG9yeV9pdGVtc19saXN0Lm1hcCgoaW52ZW50b3J5X2l0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbnZlbnRvcnlfaXRlbS5pbnZlbnRvcnlfaXRlbV9pZH0gdmFsdWU9e2ludmVudG9yeV9pdGVtLmludmVudG9yeV9pdGVtX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnZlbnRvcnlfaXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm1GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInF1YW50aXR5XCI+UXVhbnRpdHk6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicXVhbnRpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdWFudGl0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiB7IHRhcmdldDogeyB2YWx1ZTogc3RyaW5nIH07IH0pID0+IHNldFF1YW50aXR5KHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+VXBkYXRlIFByb2R1Y3QgSXRlbTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeTtcclxuXHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IFtyb3dzXSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnk8Um93RGF0YVBhY2tldFtdPihcclxuICAgICAgICAnU0VMRUNUICogRlJPTSBwcm9kdWN0X2ludmVudG9yeV9pdGVtcyBXSEVSRSBwcm9kdWN0X2ludmVudG9yeV9pdGVtX2lkID0gPycsXHJcbiAgICAgICAgW2lkXVxyXG4gICAgKTtcclxuICAgIGF3YWl0IGNvbm5lY3Rpb24uZW5kKCk7XHJcblxyXG4gICAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2R1Y3RfaW52ZW50b3J5X2l0ZW06IFByb2R1Y3RJbnZlbnRvcnlJdGVtID0gcm93c1swXSBhcyBQcm9kdWN0SW52ZW50b3J5SXRlbTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RfaW52ZW50b3J5X2l0ZW0sXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0UHJvZHVjdEludmVudG9yeUl0ZW1QYWdlOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInJvdXRlciIsInN0eWxlZCIsImRiIiwiQ29udGFpbmVyIiwiZGl2IiwiVGl0bGUiLCJoMSIsIkZvcm1GaWVsZCIsIkxhYmVsIiwibGFiZWwiLCJGb3JtIiwiZm9ybSIsIklucHV0IiwiaW5wdXQiLCJFZGl0UHJvZHVjdEludmVudG9yeUl0ZW1QYWdlIiwiaW5pdGlhbFByb2R1Y3RJdGVtIiwicHJvZHVjdElkIiwic2V0UHJvZHVjdElkIiwicHJvZHVjdF9pZCIsImludmVudG9yeUl0ZW1JZCIsInNldEludmVudG9yeUl0ZW1JZCIsImludmVudG9yeV9pdGVtX2lkIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsInByb2R1Y3RzX2xpc3QiLCJzZXRQcm9kdWN0cyIsImludmVudG9yeV9pdGVtc19saXN0Iiwic2V0SW52ZW50b3J5SXRlbXMiLCJmZXRjaFByb2R1Y3RzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZmV0Y2hJbnZlbnRvcnlJdGVtcyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2R1Y3RfaW52ZW50b3J5X2l0ZW1faWQiLCJOdW1iZXIiLCJvayIsInB1c2giLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJzZWxlY3QiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsIm9wdGlvbiIsIm1hcCIsInByb2R1Y3QiLCJpbnZlbnRvcnlfaXRlbSIsInR5cGUiLCJzdGVwIiwiYnV0dG9uIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInF1ZXJ5IiwiY29ubmVjdGlvbiIsInJvd3MiLCJlbmQiLCJsZW5ndGgiLCJub3RGb3VuZCIsInByb2R1Y3RfaW52ZW50b3J5X2l0ZW0iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/edit-product-inventory-item.tsx\n");

/***/ }),

/***/ "./src/pages/edit-product-inventory-item/[id].tsx":
/*!********************************************************!*\
  !*** ./src/pages/edit-product-inventory-item/[id].tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../db */ \"./db.ts\");\n/* harmony import */ var _edit_product_inventory_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-product-inventory-item */ \"./src/pages/edit-product-inventory-item.tsx\");\n\n\n\nconst EditProductInventoryItem = ({ product_inventory_item  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_edit_product_inventory_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        initialProductItem: product_inventory_item\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-product-inventory-item\\\\[id].tsx\",\n        lineNumber: 19,\n        columnNumber: 10\n    }, undefined);\n};\nconst getServerSideProps = async (context)=>{\n    const { id  } = context.query;\n    const connection = await (0,_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const [rows] = await connection.query(\"SELECT * FROM product_inventory_items WHERE product_inventory_item_id = ?\", [\n        id\n    ]);\n    await connection.end();\n    if (rows.length === 0) {\n        return {\n            notFound: true\n        };\n    }\n    const product_inventory_item = rows[0];\n    return {\n        props: {\n            product_inventory_item\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditProductInventoryItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZWRpdC1wcm9kdWN0LWludmVudG9yeS1pdGVtL1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNkI7QUFFNkM7QUFhMUUsTUFBTUUsMkJBQTRDLENBQUMsRUFBRUMsdUJBQXNCLEVBQUUsR0FBSztJQUNoRixxQkFBTyw4REFBQ0Ysb0VBQTRCQTtRQUFDRyxvQkFBb0JEOzs7Ozs7QUFDM0Q7QUFFTyxNQUFNRSxxQkFBeUMsT0FBT0MsVUFBWTtJQUNyRSxNQUFNLEVBQUVDLEdBQUUsRUFBRSxHQUFHRCxRQUFRRSxLQUFLO0lBRTVCLE1BQU1DLGFBQWEsTUFBTVQsK0NBQUVBO0lBQzNCLE1BQU0sQ0FBQ1UsS0FBSyxHQUFHLE1BQU1ELFdBQVdELEtBQUssQ0FDakMsNkVBQ0E7UUFBQ0Q7S0FBRztJQUVSLE1BQU1FLFdBQVdFLEdBQUc7SUFFcEIsSUFBSUQsS0FBS0UsTUFBTSxLQUFLLEdBQUc7UUFDbkIsT0FBTztZQUNIQyxVQUFVLElBQUk7UUFDbEI7SUFDSixDQUFDO0lBRUQsTUFBTVYseUJBQStDTyxJQUFJLENBQUMsRUFBRTtJQUU1RCxPQUFPO1FBQ0hJLE9BQU87WUFDSFg7UUFDSjtJQUNKO0FBQ0osRUFBRTtBQUVGLGlFQUFlRCx3QkFBd0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96YW1hY28vLi9zcmMvcGFnZXMvZWRpdC1wcm9kdWN0LWludmVudG9yeS1pdGVtL1tpZF0udHN4P2JlNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBFZGl0UHJvZHVjdFBhZ2UgZnJvbSAnLi4vZWRpdC1wcm9kdWN0JztcclxuaW1wb3J0IGRiIGZyb20gJy4uLy4uLy4uL2RiJztcclxuaW1wb3J0IHsgUm93RGF0YVBhY2tldCB9IGZyb20gJ215c3FsMic7XHJcbmltcG9ydCBFZGl0UHJvZHVjdEludmVudG9yeUl0ZW1QYWdlIGZyb20gJy4uL2VkaXQtcHJvZHVjdC1pbnZlbnRvcnktaXRlbSc7XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdEludmVudG9yeUl0ZW0ge1xyXG4gICAgcHJvZHVjdF9pbnZlbnRvcnlfaXRlbV9pZDogbnVtYmVyO1xyXG4gICAgcHJvZHVjdF9pZDogbnVtYmVyO1xyXG4gICAgaW52ZW50b3J5X2l0ZW1faWQ6IG51bWJlcjtcclxuICAgIHF1YW50aXR5OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgcHJvZHVjdF9pbnZlbnRvcnlfaXRlbTogUHJvZHVjdEludmVudG9yeUl0ZW07XHJcbn1cclxuXHJcbmNvbnN0IEVkaXRQcm9kdWN0SW52ZW50b3J5SXRlbTogTmV4dFBhZ2U8UHJvcHM+ID0gKHsgcHJvZHVjdF9pbnZlbnRvcnlfaXRlbSB9KSA9PiB7XHJcbiAgcmV0dXJuIDxFZGl0UHJvZHVjdEludmVudG9yeUl0ZW1QYWdlIGluaXRpYWxQcm9kdWN0SXRlbT17cHJvZHVjdF9pbnZlbnRvcnlfaXRlbX0gLz47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeTtcclxuXHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgZGIoKTtcclxuICAgIGNvbnN0IFtyb3dzXSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnk8Um93RGF0YVBhY2tldFtdPihcclxuICAgICAgICAnU0VMRUNUICogRlJPTSBwcm9kdWN0X2ludmVudG9yeV9pdGVtcyBXSEVSRSBwcm9kdWN0X2ludmVudG9yeV9pdGVtX2lkID0gPycsXHJcbiAgICAgICAgW2lkXVxyXG4gICAgKTtcclxuICAgIGF3YWl0IGNvbm5lY3Rpb24uZW5kKCk7XHJcblxyXG4gICAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcm9kdWN0X2ludmVudG9yeV9pdGVtOiBQcm9kdWN0SW52ZW50b3J5SXRlbSA9IHJvd3NbMF0gYXMgUHJvZHVjdEludmVudG9yeUl0ZW07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwcm9kdWN0X2ludmVudG9yeV9pdGVtLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdFByb2R1Y3RJbnZlbnRvcnlJdGVtOyJdLCJuYW1lcyI6WyJkYiIsIkVkaXRQcm9kdWN0SW52ZW50b3J5SXRlbVBhZ2UiLCJFZGl0UHJvZHVjdEludmVudG9yeUl0ZW0iLCJwcm9kdWN0X2ludmVudG9yeV9pdGVtIiwiaW5pdGlhbFByb2R1Y3RJdGVtIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImlkIiwicXVlcnkiLCJjb25uZWN0aW9uIiwicm93cyIsImVuZCIsImxlbmd0aCIsIm5vdEZvdW5kIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/edit-product-inventory-item/[id].tsx\n");

/***/ }),

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/edit-product-inventory-item/[id].tsx"));
module.exports = __webpack_exports__;

})();