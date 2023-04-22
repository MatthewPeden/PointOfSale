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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background-color: #ede6f5;\\n  padding: 20px;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  color: #8447c9;\\n  font-size: 28px;\\n  font-weight: bold;\\n  margin-bottom: 20px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  border-collapse: collapse;\\n  width: 100%;\\n\\n  th, td {\\n    border: 1px solid #ddd;\\n    padding: 12px;\\n    text-align: left;\\n  }\\n\\n  th {\\n    background-color: #5f4b8b;\\n    color: #ede6f5;\\n    font-weight: bold;\\n  }\\n\\n  tbody tr:nth-child(even) {\\n    background-color: #d7c3eb;\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: block;\\n  width: 160px;\\n  height: 35px;\\n  background-color: #5f4b8b;\\n  color: white;\\n  text-align: center;\\n  line-height: 35px;\\n  font-size: 16px;\\n  border-radius: 30px;\\n  margin-bottom: 5px;\\n  cursor: pointer;\\n  text-decoration: none;\\n  &:hover {\\n    background-color: #7d6ba0;\\n  }\\n  &:first-of-type {\\n    margin-top: 0;\\n  }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = Container;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1(_templateObject1());\n_c1 = Title;\nconst Table = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].table(_templateObject2());\n_c2 = Table;\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a(_templateObject3());\n_c3 = Button;\nconst handleAdd = ()=>{\n    next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/add-inventory-item\");\n};\nconst handleDelete = async (id)=>{\n    const response = await fetch(\"/api/inventory_item/delete-inventory-item?id=\".concat(id), {\n        method: \"DELETE\"\n    });\n    if (response.ok) {\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/inventory_items\");\n    }\n};\nconst handleEditButtonClick = (id)=>{\n    next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/edit-inventory-item/\".concat(id));\n};\nconst formatDate = (dateString)=>{\n    const date = new Date(dateString);\n    return new Intl.DateTimeFormat(\"en-US\", {\n        year: \"numeric\",\n        month: \"long\",\n        day: \"numeric\"\n    }).format(date);\n};\nconst ManageInventoryItemsPage = (param)=>{\n    let { inventory_items  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            style: {\n                marginTop: \"60px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Title, {\n                    children: \"Manage Inventory Items\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                    onClick: ()=>handleAdd(),\n                    children: \"Add New Inventory Item\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Table, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        children: \"ID\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        children: \"Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        children: \"Price\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        children: \"Reorder Point\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                        children: \"Actions\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n                            children: inventory_items.map((inventory_item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            children: inventory_item.inventory_item_id\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                            lineNumber: 120,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            children: inventory_item.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                            lineNumber: 121,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            children: inventory_item.price\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                            lineNumber: 122,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            children: formatDate(inventory_item.reorder_point)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                            lineNumber: 123,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                    onClick: ()=>handleEditButtonClick(inventory_item.inventory_item_id),\n                                                    children: \"Edit\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                                    lineNumber: 125,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                \" | \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                    onClick: ()=>handleDelete(inventory_item.inventory_item_id),\n                                                    children: \"Delete\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                                    lineNumber: 127,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                            lineNumber: 124,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, inventory_item.inventory_item_id, true, {\n                                    fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n            lineNumber: 104,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Matthew\\\\PointOfSale\\\\src\\\\pages\\\\inventory_items.tsx\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, undefined);\n};\n_c4 = ManageInventoryItemsPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageInventoryItemsPage);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"Title\");\n$RefreshReg$(_c2, \"Table\");\n$RefreshReg$(_c3, \"Button\");\n$RefreshReg$(_c4, \"ManageInventoryItemsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW52ZW50b3J5X2l0ZW1zLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUM7QUFLTjtBQUVqQyxNQUFNRSxZQUFZRiw2REFBVTtLQUF0QkU7QUFLTixNQUFNRSxRQUFRSiw0REFBUztNQUFqQkk7QUFPTixNQUFNRSxRQUFRTiwrREFBWTtNQUFwQk07QUFxQk4sTUFBTUUsU0FBU1IsMkRBQVE7TUFBakJRO0FBZ0NOLE1BQU1FLFlBQVksSUFBTTtJQUN0QlQsdURBQVcsQ0FBQztBQUNkO0FBRUEsTUFBTVcsZUFBZSxPQUFPQyxLQUFlO0lBQ3pDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxnREFBbUQsT0FBSEYsS0FBTTtRQUMvRUcsUUFBUTtJQUNaO0lBRUEsSUFBSUYsU0FBU0csRUFBRSxFQUFFO1FBQ2JoQix1REFBVyxDQUFDO0lBQ2hCLENBQUM7QUFDSDtBQUVBLE1BQU1pQix3QkFBd0IsQ0FBQ0wsS0FBZTtJQUM1Q1osdURBQVcsQ0FBQyx3QkFBMkIsT0FBSFk7QUFDdEM7QUFFQSxNQUFNTSxhQUFhLENBQUNDLGFBQStCO0lBQ2pELE1BQU1DLE9BQU8sSUFBSUMsS0FBS0Y7SUFDdEIsT0FBTyxJQUFJRyxLQUFLQyxjQUFjLENBQUMsU0FBUztRQUN0Q0MsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLEtBQUs7SUFDUCxHQUFHQyxNQUFNLENBQUNQO0FBQ1o7QUFFQSxNQUFNUSwyQkFBb0UsU0FBeUI7UUFBeEIsRUFBRUMsZ0JBQWUsRUFBRTtJQUM1RixxQkFDRSw4REFBQzVCO2tCQUNDLDRFQUFDQztZQUFJNEIsT0FBTztnQkFBRUMsV0FBVztZQUFPOzs4QkFDOUIsOERBQUM1Qjs4QkFBTTs7Ozs7OzhCQUNQLDhEQUFDSTtvQkFBT3lCLFNBQVMsSUFBTXZCOzhCQUFhOzs7Ozs7OEJBQ3BDLDhEQUFDSjs7c0NBQ0MsOERBQUM0QjtzQ0FDQyw0RUFBQ0M7O2tEQUNDLDhEQUFDQztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQTtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQTtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQTtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQTtrREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR1IsOERBQUNDO3NDQUNFUCxnQkFBZ0JRLEdBQUcsQ0FBQyxDQUFDQywrQkFDcEIsOERBQUNKOztzREFDQyw4REFBQ0s7c0RBQUlELGVBQWVFLGlCQUFpQjs7Ozs7O3NEQUNyQyw4REFBQ0Q7c0RBQUlELGVBQWVHLElBQUk7Ozs7OztzREFDeEIsOERBQUNGO3NEQUFJRCxlQUFlSSxLQUFLOzs7Ozs7c0RBQ3pCLDhEQUFDSDtzREFBSXJCLFdBQVdvQixlQUFlSyxhQUFhOzs7Ozs7c0RBQzVDLDhEQUFDSjs7OERBQ0MsOERBQUNLO29EQUFPWixTQUFTLElBQU1mLHNCQUFzQnFCLGVBQWVFLGlCQUFpQjs4REFBRzs7Ozs7O2dEQUMvRTs4REFDRCw4REFBQ0k7b0RBQU9aLFNBQVMsSUFBTXJCLGFBQWEyQixlQUFlRSxpQkFBaUI7OERBQUc7Ozs7Ozs7Ozs7Ozs7bUNBUmxFRixlQUFlRSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCdkQ7TUFuQ01aOztBQWlFTiwrREFBZUEsd0JBQXdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbnZlbnRvcnlfaXRlbXMudHN4PzE0MTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHdpdGhQYWdlQXV0aFJlcXVpcmVkIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBkYiBmcm9tICcuLi8uLi9kYic7XHJcbmltcG9ydCB7IFJvd0RhdGFQYWNrZXQgfSBmcm9tICdteXNxbDInO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZTZmNTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgY29sb3I6ICM4NDQ3Yzk7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBUYWJsZSA9IHN0eWxlZC50YWJsZWBcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICB0aCwgdGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmNGI4YjtcclxuICAgIGNvbG9yOiAjZWRlNmY1O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3YzNlYjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYWBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZjRiOGI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZDZiYTA7XHJcbiAgfVxyXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuYFxyXG4gIFxyXG5pbnRlcmZhY2UgSW52ZW50b3J5SXRlbSB7XHJcbiAgICBpbnZlbnRvcnlfaXRlbV9pZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpY2U6IG51bWJlcjtcclxuICAgIHJlb3JkZXJfcG9pbnQ6IHN0cmluZztcclxufVxyXG4gIFxyXG5pbnRlcmZhY2UgTWFuYWdlSW52ZW50b3J5SXRlbXNQYWdlUHJvcHMge1xyXG4gICAgaW52ZW50b3J5X2l0ZW1zOiBJbnZlbnRvcnlJdGVtW107XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUFkZCA9ICgpID0+IHtcclxuICByb3V0ZXIucHVzaCgnL2FkZC1pbnZlbnRvcnktaXRlbScpO1xyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2ludmVudG9yeV9pdGVtL2RlbGV0ZS1pbnZlbnRvcnktaXRlbT9pZD0ke2lkfWAsIHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICB9KTtcclxuICBcclxuICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9pbnZlbnRvcnlfaXRlbXMnKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVFZGl0QnV0dG9uQ2xpY2sgPSAoaWQ6IG51bWJlcikgPT4ge1xyXG4gIHJvdXRlci5wdXNoKGAvZWRpdC1pbnZlbnRvcnktaXRlbS8ke2lkfWApO1xyXG59O1xyXG5cclxuY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlU3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcclxuICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLVVTJywge1xyXG4gICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgbW9udGg6ICdsb25nJyxcclxuICAgIGRheTogJ251bWVyaWMnLFxyXG4gIH0pLmZvcm1hdChkYXRlKTtcclxufTtcclxuXHJcbmNvbnN0IE1hbmFnZUludmVudG9yeUl0ZW1zUGFnZTogUmVhY3QuRkM8TWFuYWdlSW52ZW50b3J5SXRlbXNQYWdlUHJvcHM+ID0gKHsgaW52ZW50b3J5X2l0ZW1zIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc2MHB4JyB9fT5cclxuICAgICAgICA8VGl0bGU+TWFuYWdlIEludmVudG9yeSBJdGVtczwvVGl0bGU+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGQoKX0+QWRkIE5ldyBJbnZlbnRvcnkgSXRlbTwvQnV0dG9uPlxyXG4gICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD5JRDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlJlb3JkZXIgUG9pbnQ8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIHtpbnZlbnRvcnlfaXRlbXMubWFwKChpbnZlbnRvcnlfaXRlbTogSW52ZW50b3J5SXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDx0ciBrZXk9e2ludmVudG9yeV9pdGVtLmludmVudG9yeV9pdGVtX2lkfT5cclxuICAgICAgICAgICAgICAgIDx0ZD57aW52ZW50b3J5X2l0ZW0uaW52ZW50b3J5X2l0ZW1faWR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57aW52ZW50b3J5X2l0ZW0ubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntpbnZlbnRvcnlfaXRlbS5wcmljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntmb3JtYXREYXRlKGludmVudG9yeV9pdGVtLnJlb3JkZXJfcG9pbnQpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRWRpdEJ1dHRvbkNsaWNrKGludmVudG9yeV9pdGVtLmludmVudG9yeV9pdGVtX2lkKX0+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB7JyB8ICd9XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGludmVudG9yeV9pdGVtLmludmVudG9yeV9pdGVtX2lkKX0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd2l0aFBhZ2VBdXRoUmVxdWlyZWQoe1xyXG4gIGFzeW5jIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgZGIoKTtcclxuXHJcbiAgICBjb25zdCBbaW52ZW50b3J5SXRlbVJvd3NdID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeShgXHJcbiAgICAgIFNFTEVDVCBpbnZlbnRvcnlfaXRlbV9pZCwgbmFtZSwgcHJpY2UsIHJlb3JkZXJfcG9pbnRcclxuICAgICAgRlJPTSBpbnZlbnRvcnlfaXRlbXNcclxuICAgIGApO1xyXG5cclxuICAgIGF3YWl0IGNvbm5lY3Rpb24uZW5kKCk7XHJcblxyXG4gICAgY29uc3QgaW52ZW50b3J5X2l0ZW1zOiBJbnZlbnRvcnlJdGVtW10gPSAoaW52ZW50b3J5SXRlbVJvd3MgYXMgUm93RGF0YVBhY2tldFtdKS5tYXAoKHJvdzogYW55KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaW52ZW50b3J5X2l0ZW1faWQ6IHJvdy5pbnZlbnRvcnlfaXRlbV9pZCxcclxuICAgICAgICBuYW1lOiByb3cubmFtZSxcclxuICAgICAgICBwcmljZTogcm93LnByaWNlLFxyXG4gICAgICAgIHJlb3JkZXJfcG9pbnQ6IHJvdy5yZW9yZGVyX3BvaW50LnRvSVNPU3RyaW5nKClcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgaW52ZW50b3J5X2l0ZW1zOiBpbnZlbnRvcnlfaXRlbXMsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlSW52ZW50b3J5SXRlbXNQYWdlOyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJyb3V0ZXIiLCJDb250YWluZXIiLCJkaXYiLCJUaXRsZSIsImgxIiwiVGFibGUiLCJ0YWJsZSIsIkJ1dHRvbiIsImEiLCJoYW5kbGVBZGQiLCJwdXNoIiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwib2siLCJoYW5kbGVFZGl0QnV0dG9uQ2xpY2siLCJmb3JtYXREYXRlIiwiZGF0ZVN0cmluZyIsImRhdGUiLCJEYXRlIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiZm9ybWF0IiwiTWFuYWdlSW52ZW50b3J5SXRlbXNQYWdlIiwiaW52ZW50b3J5X2l0ZW1zIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJvbkNsaWNrIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJpbnZlbnRvcnlfaXRlbSIsInRkIiwiaW52ZW50b3J5X2l0ZW1faWQiLCJuYW1lIiwicHJpY2UiLCJyZW9yZGVyX3BvaW50IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/inventory_items.tsx\n"));

/***/ })

});