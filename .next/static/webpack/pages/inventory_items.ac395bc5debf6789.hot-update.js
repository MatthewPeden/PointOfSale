"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/inventory_items",{

/***/ "./src/pages/inventory_items.tsx":
/*!***************************************!*\
  !*** ./src/pages/inventory_items.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background-color: #ede6f5;\\n  padding: 20px;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  color: #8447c9;\\n  font-size: 28px;\\n  font-weight: bold;\\n  margin-bottom: 20px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  border-collapse: collapse;\\n  width: 100%;\\n\\n  th, td {\\n    border: 1px solid #ddd;\\n    padding: 12px;\\n    text-align: left;\\n  }\\n\\n  th {\\n    background-color: #5f4b8b;\\n    color: #ede6f5;\\n    font-weight: bold;\\n  }\\n\\n  tbody tr:nth-child(even) {\\n    background-color: #d7c3eb;\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: block;\\n  width: 160px;\\n  height: 35px;\\n  background-color: #5f4b8b;\\n  color: white;\\n  text-align: center;\\n  line-height: 40px;\\n  font-size: 14px;\\n  border-radius: 30px;\\n  text-decoration: none;\\n  &:hover {\\n    background-color: #7d6ba0;\\n  }\\n  &:first-of-type {\\n    margin-top: 0;\\n  }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = Container;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1(_templateObject1());\n_c1 = Title;\nconst Table = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].table(_templateObject2());\n_c2 = Table;\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a(_templateObject3());\n_c3 = Button;\nconst handleAdd = (event)=>{\n    event.preventDefault();\n    next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/add-inventory-item\");\n};\nconst handleDelete = async (id)=>{\n    const response = await fetch(\"/api/inventory_item/delete-inventory-item?id=\".concat(id), {\n        method: \"DELETE\"\n    });\n    if (response.ok) {\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/inventory_items\");\n    }\n};\nconst handleEditButtonClick = (id)=>{\n    next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/edit-inventory-item/\".concat(id));\n};\nconst formatDate = (dateString)=>{\n    const date = new Date(dateString);\n    return new Intl.DateTimeFormat(\"en-US\", {\n        year: \"numeric\",\n        month: \"long\",\n        day: \"numeric\"\n    }).format(date);\n};\nconst ManageInventoryItemsPage = (param)=>{\n    let { inventory_items  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            style: {\n                marginTop: \"60px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Title, {\n                    children: \"Manage Inventory Items\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                    onClick: ()=>handleAdd,\n                    children: \"Add New Inventory Item\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Table, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        children: \"ID\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        children: \"Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        children: \"Price\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        children: \"Reorder Point\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        children: \"Actions\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n                            children: inventory_items.map((inventory_item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            children: inventory_item.inventory_item_id\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                            lineNumber: 119,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            children: inventory_item.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                            lineNumber: 120,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            children: inventory_item.price\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                            lineNumber: 121,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            children: formatDate(inventory_item.reorder_point)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                            lineNumber: 122,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                    onClick: ()=>handleEditButtonClick(inventory_item.inventory_item_id),\n                                                    children: \"Edit\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                                    lineNumber: 124,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                \" | \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                    onClick: ()=>handleDelete(inventory_item.inventory_item_id),\n                                                    children: \"Delete\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                                    lineNumber: 126,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                            lineNumber: 123,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, inventory_item.inventory_item_id, true, {\n                                    fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n            lineNumber: 103,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, undefined);\n};\n_c4 = ManageInventoryItemsPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageInventoryItemsPage);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"Title\");\n$RefreshReg$(_c2, \"Table\");\n$RefreshReg$(_c3, \"Button\");\n$RefreshReg$(_c4, \"ManageInventoryItemsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW52ZW50b3J5X2l0ZW1zLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUM7QUFLTjtBQUVqQyxNQUFNRSxZQUFZRiw2REFBVTtLQUF0QkU7QUFLTixNQUFNRSxRQUFRSiw0REFBUztNQUFqQkk7QUFPTixNQUFNRSxRQUFRTiwrREFBWTtNQUFwQk07QUFxQk4sTUFBTUUsU0FBU1IsMkRBQVE7TUFBakJRO0FBOEJOLE1BQU1FLFlBQVksQ0FBQ0MsUUFBK0M7SUFDaEVBLE1BQU1DLGNBQWM7SUFDcEJYLHVEQUFXLENBQUM7QUFDZDtBQUVBLE1BQU1hLGVBQWUsT0FBT0MsS0FBZTtJQUN6QyxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sZ0RBQW1ELE9BQUhGLEtBQU07UUFDL0VHLFFBQVE7SUFDWjtJQUVBLElBQUlGLFNBQVNHLEVBQUUsRUFBRTtRQUNibEIsdURBQVcsQ0FBQztJQUNoQixDQUFDO0FBQ0g7QUFFQSxNQUFNbUIsd0JBQXdCLENBQUNMLEtBQWU7SUFDNUNkLHVEQUFXLENBQUMsd0JBQTJCLE9BQUhjO0FBQ3RDO0FBRUEsTUFBTU0sYUFBYSxDQUFDQyxhQUErQjtJQUNqRCxNQUFNQyxPQUFPLElBQUlDLEtBQUtGO0lBQ3RCLE9BQU8sSUFBSUcsS0FBS0MsY0FBYyxDQUFDLFNBQVM7UUFDdENDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxLQUFLO0lBQ1AsR0FBR0MsTUFBTSxDQUFDUDtBQUNaO0FBRUEsTUFBTVEsMkJBQW9FLFNBQXlCO1FBQXhCLEVBQUVDLGdCQUFlLEVBQUU7SUFDNUYscUJBQ0UsOERBQUM5QjtrQkFDQyw0RUFBQ0M7WUFBSThCLE9BQU87Z0JBQUVDLFdBQVc7WUFBTzs7OEJBQzlCLDhEQUFDOUI7OEJBQU07Ozs7Ozs4QkFDUCw4REFBQ0k7b0JBQU8yQixTQUFTLElBQU16Qjs4QkFBVzs7Ozs7OzhCQUNsQyw4REFBQ0o7O3NDQUNDLDhEQUFDOEI7c0NBQ0MsNEVBQUNDOztrREFDQyw4REFBQ0M7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0E7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0E7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0E7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0E7a0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUdSLDhEQUFDQztzQ0FDRVAsZ0JBQWdCUSxHQUFHLENBQUMsQ0FBQ0MsK0JBQ3BCLDhEQUFDSjs7c0RBQ0MsOERBQUNLO3NEQUFJRCxlQUFlRSxpQkFBaUI7Ozs7OztzREFDckMsOERBQUNEO3NEQUFJRCxlQUFlRyxJQUFJOzs7Ozs7c0RBQ3hCLDhEQUFDRjtzREFBSUQsZUFBZUksS0FBSzs7Ozs7O3NEQUN6Qiw4REFBQ0g7c0RBQUlyQixXQUFXb0IsZUFBZUssYUFBYTs7Ozs7O3NEQUM1Qyw4REFBQ0o7OzhEQUNDLDhEQUFDSztvREFBT1osU0FBUyxJQUFNZixzQkFBc0JxQixlQUFlRSxpQkFBaUI7OERBQUc7Ozs7OztnREFDL0U7OERBQ0QsOERBQUNJO29EQUFPWixTQUFTLElBQU1yQixhQUFhMkIsZUFBZUUsaUJBQWlCOzhEQUFHOzs7Ozs7Ozs7Ozs7O21DQVJsRUYsZUFBZUUsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnZEO01BbkNNWjs7QUFpRU4sK0RBQWVBLHdCQUF3QkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW52ZW50b3J5X2l0ZW1zLnRzeD8xNDE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB3aXRoUGFnZUF1dGhSZXF1aXJlZCB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vLi4vZGInO1xyXG5pbXBvcnQgeyBSb3dEYXRhUGFja2V0IH0gZnJvbSAnbXlzcWwyJztcclxuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGU2ZjU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxyXG4gIGNvbG9yOiAjODQ0N2M5O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGFibGUgPSBzdHlsZWQudGFibGVgXHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgdGgsIHRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIHRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjRiOGI7XHJcbiAgICBjb2xvcjogI2VkZTZmNTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgdGJvZHkgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2MzZWI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmFgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY0YjhiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdkNmJhMDtcclxuICB9XHJcbiAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5gXHJcbiAgXHJcbmludGVyZmFjZSBJbnZlbnRvcnlJdGVtIHtcclxuICAgIGludmVudG9yeV9pdGVtX2lkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcmljZTogbnVtYmVyO1xyXG4gICAgcmVvcmRlcl9wb2ludDogc3RyaW5nO1xyXG59XHJcbiAgXHJcbmludGVyZmFjZSBNYW5hZ2VJbnZlbnRvcnlJdGVtc1BhZ2VQcm9wcyB7XHJcbiAgICBpbnZlbnRvcnlfaXRlbXM6IEludmVudG9yeUl0ZW1bXTtcclxufVxyXG5cclxuY29uc3QgaGFuZGxlQWRkID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgcm91dGVyLnB1c2goJy9hZGQtaW52ZW50b3J5LWl0ZW0nKTtcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9pbnZlbnRvcnlfaXRlbS9kZWxldGUtaW52ZW50b3J5LWl0ZW0/aWQ9JHtpZH1gLCB7XHJcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgfSk7XHJcbiAgXHJcbiAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvaW52ZW50b3J5X2l0ZW1zJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlRWRpdEJ1dHRvbkNsaWNrID0gKGlkOiBudW1iZXIpID0+IHtcclxuICByb3V0ZXIucHVzaChgL2VkaXQtaW52ZW50b3J5LWl0ZW0vJHtpZH1gKTtcclxufTtcclxuXHJcbmNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZVN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XHJcbiAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHtcclxuICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICBkYXk6ICdudW1lcmljJyxcclxuICB9KS5mb3JtYXQoZGF0ZSk7XHJcbn07XHJcblxyXG5jb25zdCBNYW5hZ2VJbnZlbnRvcnlJdGVtc1BhZ2U6IFJlYWN0LkZDPE1hbmFnZUludmVudG9yeUl0ZW1zUGFnZVByb3BzPiA9ICh7IGludmVudG9yeV9pdGVtcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNjBweCcgfX0+XHJcbiAgICAgICAgPFRpdGxlPk1hbmFnZSBJbnZlbnRvcnkgSXRlbXM8L1RpdGxlPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQWRkfT5BZGQgTmV3IEludmVudG9yeSBJdGVtPC9CdXR0b24+XHJcbiAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPklEPC90aD5cclxuICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cclxuICAgICAgICAgICAgICA8dGg+UmVvcmRlciBQb2ludDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge2ludmVudG9yeV9pdGVtcy5tYXAoKGludmVudG9yeV9pdGVtOiBJbnZlbnRvcnlJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPHRyIGtleT17aW52ZW50b3J5X2l0ZW0uaW52ZW50b3J5X2l0ZW1faWR9PlxyXG4gICAgICAgICAgICAgICAgPHRkPntpbnZlbnRvcnlfaXRlbS5pbnZlbnRvcnlfaXRlbV9pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntpbnZlbnRvcnlfaXRlbS5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2ludmVudG9yeV9pdGVtLnByaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2Zvcm1hdERhdGUoaW52ZW50b3J5X2l0ZW0ucmVvcmRlcl9wb2ludCl9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0QnV0dG9uQ2xpY2soaW52ZW50b3J5X2l0ZW0uaW52ZW50b3J5X2l0ZW1faWQpfT5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIHsnIHwgJ31cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoaW52ZW50b3J5X2l0ZW0uaW52ZW50b3J5X2l0ZW1faWQpfT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3aXRoUGFnZUF1dGhSZXF1aXJlZCh7XHJcbiAgYXN5bmMgZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBkYigpO1xyXG5cclxuICAgIGNvbnN0IFtpbnZlbnRvcnlJdGVtUm93c10gPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KGBcclxuICAgICAgU0VMRUNUIGludmVudG9yeV9pdGVtX2lkLCBuYW1lLCBwcmljZSwgcmVvcmRlcl9wb2ludFxyXG4gICAgICBGUk9NIGludmVudG9yeV9pdGVtc1xyXG4gICAgYCk7XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdGlvbi5lbmQoKTtcclxuXHJcbiAgICBjb25zdCBpbnZlbnRvcnlfaXRlbXM6IEludmVudG9yeUl0ZW1bXSA9IChpbnZlbnRvcnlJdGVtUm93cyBhcyBSb3dEYXRhUGFja2V0W10pLm1hcCgocm93OiBhbnkpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpbnZlbnRvcnlfaXRlbV9pZDogcm93LmludmVudG9yeV9pdGVtX2lkLFxyXG4gICAgICAgIG5hbWU6IHJvdy5uYW1lLFxyXG4gICAgICAgIHByaWNlOiByb3cucHJpY2UsXHJcbiAgICAgICAgcmVvcmRlcl9wb2ludDogcm93LnJlb3JkZXJfcG9pbnQudG9JU09TdHJpbmcoKVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBpbnZlbnRvcnlfaXRlbXM6IGludmVudG9yeV9pdGVtcyxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VJbnZlbnRvcnlJdGVtc1BhZ2U7Il0sIm5hbWVzIjpbInN0eWxlZCIsInJvdXRlciIsIkNvbnRhaW5lciIsImRpdiIsIlRpdGxlIiwiaDEiLCJUYWJsZSIsInRhYmxlIiwiQnV0dG9uIiwiYSIsImhhbmRsZUFkZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwib2siLCJoYW5kbGVFZGl0QnV0dG9uQ2xpY2siLCJmb3JtYXREYXRlIiwiZGF0ZVN0cmluZyIsImRhdGUiLCJEYXRlIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiZm9ybWF0IiwiTWFuYWdlSW52ZW50b3J5SXRlbXNQYWdlIiwiaW52ZW50b3J5X2l0ZW1zIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJvbkNsaWNrIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJpbnZlbnRvcnlfaXRlbSIsInRkIiwiaW52ZW50b3J5X2l0ZW1faWQiLCJuYW1lIiwicHJpY2UiLCJyZW9yZGVyX3BvaW50IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/inventory_items.tsx\n"));

/***/ })

});