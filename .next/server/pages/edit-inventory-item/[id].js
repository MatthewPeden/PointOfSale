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
exports.id = "pages/edit-inventory-item/[id]";
exports.ids = ["pages/edit-inventory-item/[id]"];
exports.modules = {

/***/ "./db.ts":
/*!***************!*\
  !*** ./db.ts ***!
  \***************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n// db.ts\n\nconst connection = async ()=>{\n    return await mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"rootpassword\",\n        database: \"GATS\"\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxRQUFRO0FBQzJCO0FBRW5DLE1BQU1DLGFBQWEsVUFBWTtJQUM3QixPQUFPLE1BQU1ELHNFQUFzQixDQUFDO1FBQ2xDRyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxVQUFVO0lBQ1o7QUFDRjtBQUVBLGlFQUFlTCxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemFtYWNvLy4vZGIudHM/YzQ4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkYi50c1xyXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4gYXdhaXQgbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgIHVzZXI6ICdyb290JyxcclxuICAgIHBhc3N3b3JkOiAncm9vdHBhc3N3b3JkJyxcclxuICAgIGRhdGFiYXNlOiAnR0FUUycsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0aW9uOyJdLCJuYW1lcyI6WyJteXNxbCIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./db.ts\n");

/***/ }),

/***/ "./src/pages/edit-inventory-item.tsx":
/*!*******************************************!*\
  !*** ./src/pages/edit-inventory-item.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../db */ \"./db.ts\");\n\n\n\n\n\nconst Container = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`\r\n  background-color: #ede6f5;\r\n  padding: 20px;\r\n`;\nconst Title = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().h1)`\r\n  color: #8447c9;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  margin-bottom: 20px;\r\n`;\nconst FormField = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`\r\n  margin-bottom: 20px;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n`;\nconst Label = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().label)`\r\n  display: block;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  margin-bottom: 5px;\r\n`;\nconst Form = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().form)`\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n`;\nconst Input = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().input)`\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n  padding: 10px;\r\n  width: 100%;\r\n`;\nconst EditInventoryItemPage = ({ initialItem  })=>{\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialItem.name);\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialItem.price);\n    const [reorderPoint, setReorderPoint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialItem.reorder_point);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const response = await fetch(`/api/inventory_item/edit-inventory-item`, {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                inventory_item_id: initialItem.inventory_item_id,\n                name,\n                price: Number(price),\n                reorder_point: reorderPoint\n            })\n        });\n        if (response.ok) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/inventory_items\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                children: \"Edit Inventory Item\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-inventory-item.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormField, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Label, {\n                                htmlFor: \"name\",\n                                children: \"Name:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-inventory-item.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                type: \"text\",\n                                id: \"name\",\n                                value: name,\n                                onChange: (e)=>setName(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-inventory-item.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-inventory-item.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormField, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Label, {\n                                htmlFor: \"price\",\n                                children: \"Price:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-inventory-item.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                type: \"number\",\n                                id: \"price\",\n                                step: \"0.01\",\n                                value: price,\n                                onChange: (e)=>setPrice(parseFloat(e.target.value))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-inventory-item.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-inventory-item.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormField, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"reorder_point\",\n                                children: \"Reorder Point:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-inventory-item.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-inventory-item.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                id: \"reorder_point\",\n                                defaultValue: reorderPoint,\n                                onChange: (e)=>setReorderPoint(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-inventory-item.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-inventory-item.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FormField, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Update Inventory Item\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-inventory-item.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-inventory-item.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-inventory-item.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-inventory-item.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\nconst getServerSideProps = async (context)=>{\n    const { id  } = context.query;\n    const connection = await (0,_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const [rows] = await connection.query(\"SELECT * FROM inventory_items WHERE inventory_item_id = ?\", [\n        id\n    ]);\n    await connection.end();\n    if (rows.length === 0) {\n        return {\n            notFound: true\n        };\n    }\n    const item = rows[0];\n    item.reorder_point = item.reorder_point;\n    return {\n        props: {\n            initialItem: item\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditInventoryItemPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxHQUFHO0lBRXBCLElBQUlELEtBQUtFLE1BQU0sS0FBSyxHQUFHO1FBQ3JCLE9BQU87WUFDTEMsVUFBVSxJQUFJO1FBQ2hCO0lBQ0YsQ0FBQztJQUVELE1BQU1DLE9BQXNCSixJQUFJLENBQUMsRUFBRTtJQUVuQ0ksS0FBS25DLGFBQWEsR0FBR21DLEtBQUtuQyxhQUFhO0lBRXZDLE9BQU87UUFDTG9DLE9BQU87WUFDTDNDLGFBQWEwQztRQUNmO0lBQ0Y7QUFDRixFQUFFO0FBRUYsaUVBQWUzQyxxQkFBcUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96YW1hY28vLi9zcmMvcGFnZXMvZWRpdC1pbnZlbnRvcnktaXRlbS50c3g/NDRkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGb3JtRXZlbnQsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vLi4vZGInO1xyXG5pbXBvcnQgeyBSb3dEYXRhUGFja2V0IH0gZnJvbSAnbXlzcWwyJztcclxuaW1wb3J0IHsgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGU2ZjU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxyXG4gIGNvbG9yOiAjODQ0N2M5O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybUZpZWxkID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuYDtcclxuXHJcbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuYDtcclxuXHJcbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmludGVyZmFjZSBJbnZlbnRvcnlJdGVtIHtcclxuICBpbnZlbnRvcnlfaXRlbV9pZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwcmljZTogbnVtYmVyO1xyXG4gIHJlb3JkZXJfcG9pbnQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgRWRpdEludmVudG9yeUl0ZW1QYWdlID0gKHsgaW5pdGlhbEl0ZW0gfTogeyBpbml0aWFsSXRlbTogSW52ZW50b3J5SXRlbSB9KSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihpbml0aWFsSXRlbS5uYW1lKTtcclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlPG51bWJlcj4oaW5pdGlhbEl0ZW0ucHJpY2UpO1xyXG4gIGNvbnN0IFtyZW9yZGVyUG9pbnQsIHNldFJlb3JkZXJQb2ludF0gPSB1c2VTdGF0ZTxzdHJpbmc+KGluaXRpYWxJdGVtLnJlb3JkZXJfcG9pbnQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9pbnZlbnRvcnlfaXRlbS9lZGl0LWludmVudG9yeS1pdGVtYCwge1xyXG4gICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGludmVudG9yeV9pdGVtX2lkOiBpbml0aWFsSXRlbS5pbnZlbnRvcnlfaXRlbV9pZCxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHByaWNlOiBOdW1iZXIocHJpY2UpLFxyXG4gICAgICAgIHJlb3JkZXJfcG9pbnQ6IHJlb3JkZXJQb2ludCxcclxuICAgICAgfSksXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9pbnZlbnRvcnlfaXRlbXMnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFRpdGxlPkVkaXQgSW52ZW50b3J5IEl0ZW08L1RpdGxlPlxyXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8Rm9ybUZpZWxkPlxyXG4gICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTo8L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogeyB0YXJnZXQ6IHsgdmFsdWU6IFNldFN0YXRlQWN0aW9uPHN0cmluZz47IH07IH0pID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1GaWVsZD5cclxuXHJcbiAgICAgICAgPEZvcm1GaWVsZD5cclxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwicHJpY2VcIj5QcmljZTo8L0xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBpZD1cInByaWNlXCJcclxuICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJpY2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogeyB0YXJnZXQ6IHsgdmFsdWU6IHN0cmluZyB9OyB9KSA9PiBzZXRQcmljZShwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUZpZWxkPlxyXG5cclxuICAgICAgICA8Rm9ybUZpZWxkPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZW9yZGVyX3BvaW50XCI+UmVvcmRlciBQb2ludDo8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgIGlkPVwicmVvcmRlcl9wb2ludFwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmVvcmRlclBvaW50fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiBzZXRSZW9yZGVyUG9pbnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1GaWVsZD5cclxuXHJcbiAgICAgICAgPEZvcm1GaWVsZD5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlVwZGF0ZSBJbnZlbnRvcnkgSXRlbTwvYnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybUZpZWxkPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG5cclxuICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgZGIoKTtcclxuICBjb25zdCBbcm93c10gPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5PFJvd0RhdGFQYWNrZXRbXT4oXHJcbiAgICAnU0VMRUNUICogRlJPTSBpbnZlbnRvcnlfaXRlbXMgV0hFUkUgaW52ZW50b3J5X2l0ZW1faWQgPSA/JyxcclxuICAgIFtpZF1cclxuICApO1xyXG4gIGF3YWl0IGNvbm5lY3Rpb24uZW5kKCk7XHJcblxyXG4gIGlmIChyb3dzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaXRlbTogSW52ZW50b3J5SXRlbSA9IHJvd3NbMF0gYXMgSW52ZW50b3J5SXRlbTtcclxuXHJcbiAgaXRlbS5yZW9yZGVyX3BvaW50ID0gaXRlbS5yZW9yZGVyX3BvaW50O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgaW5pdGlhbEl0ZW06IGl0ZW0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0SW52ZW50b3J5SXRlbVBhZ2U7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwicm91dGVyIiwic3R5bGVkIiwiZGIiLCJDb250YWluZXIiLCJkaXYiLCJUaXRsZSIsImgxIiwiRm9ybUZpZWxkIiwiTGFiZWwiLCJsYWJlbCIsIkZvcm0iLCJmb3JtIiwiSW5wdXQiLCJpbnB1dCIsIkVkaXRJbnZlbnRvcnlJdGVtUGFnZSIsImluaXRpYWxJdGVtIiwibmFtZSIsInNldE5hbWUiLCJwcmljZSIsInNldFByaWNlIiwicmVvcmRlclBvaW50Iiwic2V0UmVvcmRlclBvaW50IiwicmVvcmRlcl9wb2ludCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnZlbnRvcnlfaXRlbV9pZCIsIk51bWJlciIsIm9rIiwicHVzaCIsIm9uU3VibWl0IiwiaHRtbEZvciIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJzdGVwIiwicGFyc2VGbG9hdCIsImJyIiwiZGVmYXVsdFZhbHVlIiwiYnV0dG9uIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInF1ZXJ5IiwiY29ubmVjdGlvbiIsInJvd3MiLCJlbmQiLCJsZW5ndGgiLCJub3RGb3VuZCIsIml0ZW0iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/edit-inventory-item.tsx\n");

/***/ }),

/***/ "./src/pages/edit-inventory-item/[id].tsx":
/*!************************************************!*\
  !*** ./src/pages/edit-inventory-item/[id].tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../db */ \"./db.ts\");\n/* harmony import */ var _edit_inventory_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-inventory-item */ \"./src/pages/edit-inventory-item.tsx\");\n\n\n\nconst EditInventoryItem = ({ inventory_item  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_edit_inventory_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        initialItem: inventory_item\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\edit-inventory-item\\\\[id].tsx\",\n        lineNumber: 18,\n        columnNumber: 10\n    }, undefined);\n};\nconst getServerSideProps = async (context)=>{\n    const { id  } = context.query;\n    const connection = await (0,_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const [rows] = await connection.query(\"SELECT * FROM inventory_items WHERE inventory_item_id = ?\", [\n        id\n    ]);\n    await connection.end();\n    if (rows.length === 0) {\n        return {\n            notFound: true\n        };\n    }\n    const inventory_item = rows[0];\n    inventory_item.reorder_point = new Date(inventory_item.reorder_point).toISOString();\n    return {\n        props: {\n            inventory_item\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditInventoryItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZWRpdC1pbnZlbnRvcnktaXRlbS9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzZCO0FBRThCO0FBYTNELE1BQU1FLG9CQUFxQyxDQUFDLEVBQUVDLGVBQWMsRUFBRSxHQUFLO0lBQ2pFLHFCQUFPLDhEQUFDRiw0REFBcUJBO1FBQUNHLGFBQWFEOzs7Ozs7QUFDN0M7QUFFTyxNQUFNRSxxQkFBeUMsT0FBT0MsVUFBWTtJQUNyRSxNQUFNLEVBQUVDLEdBQUUsRUFBRSxHQUFHRCxRQUFRRSxLQUFLO0lBRTVCLE1BQU1DLGFBQWEsTUFBTVQsK0NBQUVBO0lBQzNCLE1BQU0sQ0FBQ1UsS0FBSyxHQUFHLE1BQU1ELFdBQVdELEtBQUssQ0FDakMsNkRBQ0E7UUFBQ0Q7S0FBRztJQUVSLE1BQU1FLFdBQVdFLEdBQUc7SUFFcEIsSUFBSUQsS0FBS0UsTUFBTSxLQUFLLEdBQUc7UUFDbkIsT0FBTztZQUNQQyxVQUFVLElBQUk7UUFDZDtJQUNKLENBQUM7SUFFRCxNQUFNVixpQkFBZ0NPLElBQUksQ0FBQyxFQUFFO0lBQzdDUCxlQUFlVyxhQUFhLEdBQUcsSUFBSUMsS0FBS1osZUFBZVcsYUFBYSxFQUFFRSxXQUFXO0lBRWpGLE9BQU87UUFDSEMsT0FBTztZQUNQZDtRQUNBO0lBQ0o7QUFDSixFQUFFO0FBRUYsaUVBQWVELGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3phbWFjby8uL3NyYy9wYWdlcy9lZGl0LWludmVudG9yeS1pdGVtL1tpZF0udHN4PzM0MGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBkYiBmcm9tICcuLi8uLi8uLi9kYic7XHJcbmltcG9ydCB7IFJvd0RhdGFQYWNrZXQgfSBmcm9tICdteXNxbDInO1xyXG5pbXBvcnQgRWRpdEludmVudG9yeUl0ZW1QYWdlIGZyb20gJy4uL2VkaXQtaW52ZW50b3J5LWl0ZW0nO1xyXG5cclxuaW50ZXJmYWNlIEludmVudG9yeUl0ZW0ge1xyXG4gICAgaW52ZW50b3J5X2l0ZW1faWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHByaWNlOiBudW1iZXI7XHJcbiAgICByZW9yZGVyX3BvaW50OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaW52ZW50b3J5X2l0ZW06IEludmVudG9yeUl0ZW07XHJcbn1cclxuXHJcbmNvbnN0IEVkaXRJbnZlbnRvcnlJdGVtOiBOZXh0UGFnZTxQcm9wcz4gPSAoeyBpbnZlbnRvcnlfaXRlbSB9KSA9PiB7XHJcbiAgcmV0dXJuIDxFZGl0SW52ZW50b3J5SXRlbVBhZ2UgaW5pdGlhbEl0ZW09e2ludmVudG9yeV9pdGVtfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBkYigpO1xyXG4gICAgY29uc3QgW3Jvd3NdID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeTxSb3dEYXRhUGFja2V0W10+KFxyXG4gICAgICAgICdTRUxFQ1QgKiBGUk9NIGludmVudG9yeV9pdGVtcyBXSEVSRSBpbnZlbnRvcnlfaXRlbV9pZCA9ID8nLFxyXG4gICAgICAgIFtpZF1cclxuICAgICk7XHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmVuZCgpO1xyXG5cclxuICAgIGlmIChyb3dzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnZlbnRvcnlfaXRlbTogSW52ZW50b3J5SXRlbSA9IHJvd3NbMF0gYXMgSW52ZW50b3J5SXRlbTtcclxuICAgIGludmVudG9yeV9pdGVtLnJlb3JkZXJfcG9pbnQgPSBuZXcgRGF0ZShpbnZlbnRvcnlfaXRlbS5yZW9yZGVyX3BvaW50KS50b0lTT1N0cmluZygpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICBpbnZlbnRvcnlfaXRlbSxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufTsgIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdEludmVudG9yeUl0ZW07Il0sIm5hbWVzIjpbImRiIiwiRWRpdEludmVudG9yeUl0ZW1QYWdlIiwiRWRpdEludmVudG9yeUl0ZW0iLCJpbnZlbnRvcnlfaXRlbSIsImluaXRpYWxJdGVtIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImlkIiwicXVlcnkiLCJjb25uZWN0aW9uIiwicm93cyIsImVuZCIsImxlbmd0aCIsIm5vdEZvdW5kIiwicmVvcmRlcl9wb2ludCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/edit-inventory-item/[id].tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/edit-inventory-item/[id].tsx"));
module.exports = __webpack_exports__;

})();