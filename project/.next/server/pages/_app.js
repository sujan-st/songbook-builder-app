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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Header.module.css */ \"(pages-dir-node)/./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Header() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Header.useEffect\": ()=>{\n            const handleScroll = {\n                \"Header.useEffect.handleScroll\": ()=>{\n                    setIsScrolled(window.scrollY > 10);\n                }\n            }[\"Header.useEffect.handleScroll\"];\n            window.addEventListener('scroll', handleScroll);\n            return ({\n                \"Header.useEffect\": ()=>window.removeEventListener('scroll', handleScroll)\n            })[\"Header.useEffect\"];\n        }\n    }[\"Header.useEffect\"], []);\n    const isActive = (path)=>{\n        return router.pathname === path;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().header)} ${isScrolled ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().scrolled) : ''}`,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().logoIcon),\n                            children: \"\\uD83C\\uDFB5\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sujan\\\\Downloads\\\\songbook-builder-fullstack\\\\project\\\\components\\\\Header.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this),\n                        \"Songbook Builder\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Sujan\\\\Downloads\\\\songbook-builder-fullstack\\\\project\\\\components\\\\Header.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().nav),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/\",\n                            className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navLink)} ${isActive('/') ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : ''}`,\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sujan\\\\Downloads\\\\songbook-builder-fullstack\\\\project\\\\components\\\\Header.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/dashboard\",\n                            className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navLink)} ${isActive('/dashboard') ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : ''}`,\n                            children: \"Dashboard\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sujan\\\\Downloads\\\\songbook-builder-fullstack\\\\project\\\\components\\\\Header.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/login\",\n                            className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().navLink)} ${isActive('/login') ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : ''}`,\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sujan\\\\Downloads\\\\songbook-builder-fullstack\\\\project\\\\components\\\\Header.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/signup\",\n                            className: `${(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().authButton)} ${isActive('/signup') ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : ''}`,\n                            children: \"Sign Up\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sujan\\\\Downloads\\\\songbook-builder-fullstack\\\\project\\\\components\\\\Header.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Sujan\\\\Downloads\\\\songbook-builder-fullstack\\\\project\\\\components\\\\Header.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Sujan\\\\Downloads\\\\songbook-builder-fullstack\\\\project\\\\components\\\\Header.jsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sujan\\\\Downloads\\\\songbook-builder-fullstack\\\\project\\\\components\\\\Header.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDSjtBQUNYO0FBQ29CO0FBRWpDLFNBQVNLO0lBQ3RCLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNLENBQUNLLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUM7SUFFN0NDLGdEQUFTQTs0QkFBQztZQUNSLE1BQU1RO2lEQUFlO29CQUNuQkQsY0FBY0UsT0FBT0MsT0FBTyxHQUFHO2dCQUNqQzs7WUFFQUQsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7WUFDbEM7b0NBQU8sSUFBTUMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7O1FBQ3BEOzJCQUFHLEVBQUU7SUFFTCxNQUFNSyxXQUFXLENBQUNDO1FBQ2hCLE9BQU9ULE9BQU9VLFFBQVEsS0FBS0Q7SUFDN0I7SUFFQSxxQkFDRSw4REFBQ0U7UUFBT0MsV0FBVyxHQUFHZCx5RUFBYSxDQUFDLENBQUMsRUFBRUcsYUFBYUgsMkVBQWUsR0FBRyxJQUFJO2tCQUN4RSw0RUFBQ2dCO1lBQUlGLFdBQVdkLDRFQUFnQjs7OEJBQzlCLDhEQUFDRCxrREFBSUE7b0JBQUNtQixNQUFLO29CQUFJSixXQUFXZCx1RUFBVzs7c0NBQ25DLDhEQUFDb0I7NEJBQUtOLFdBQVdkLDJFQUFlO3NDQUFFOzs7Ozs7d0JBQVM7Ozs7Ozs7OEJBSTdDLDhEQUFDc0I7b0JBQUlSLFdBQVdkLHNFQUFVOztzQ0FDeEIsOERBQUNELGtEQUFJQTs0QkFDSG1CLE1BQUs7NEJBQ0xKLFdBQVcsR0FBR2QsMEVBQWMsQ0FBQyxDQUFDLEVBQUVVLFNBQVMsT0FBT1YseUVBQWEsR0FBRyxJQUFJO3NDQUNyRTs7Ozs7O3NDQUdELDhEQUFDRCxrREFBSUE7NEJBQ0htQixNQUFLOzRCQUNMSixXQUFXLEdBQUdkLDBFQUFjLENBQUMsQ0FBQyxFQUFFVSxTQUFTLGdCQUFnQlYseUVBQWEsR0FBRyxJQUFJO3NDQUM5RTs7Ozs7O3NDQUdELDhEQUFDRCxrREFBSUE7NEJBQ0htQixNQUFLOzRCQUNMSixXQUFXLEdBQUdkLDBFQUFjLENBQUMsQ0FBQyxFQUFFVSxTQUFTLFlBQVlWLHlFQUFhLEdBQUcsSUFBSTtzQ0FDMUU7Ozs7OztzQ0FHRCw4REFBQ0Qsa0RBQUlBOzRCQUNIbUIsTUFBSzs0QkFDTEosV0FBVyxHQUFHZCw2RUFBaUIsQ0FBQyxDQUFDLEVBQUVVLFNBQVMsYUFBYVYseUVBQWEsR0FBRyxJQUFJO3NDQUM5RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWCIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxTdWphblxcRG93bmxvYWRzXFxzb25nYm9vay1idWlsZGVyLWZ1bGxzdGFja1xccHJvamVjdFxcY29tcG9uZW50c1xcSGVhZGVyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hlYWRlci5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtpc1Njcm9sbGVkLCBzZXRJc1Njcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgc2V0SXNTY3JvbGxlZCh3aW5kb3cuc2Nyb2xsWSA+IDEwKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGlzQWN0aXZlID0gKHBhdGgpID0+IHtcbiAgICByZXR1cm4gcm91dGVyLnBhdGhuYW1lID09PSBwYXRoXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVhZGVyfSAke2lzU2Nyb2xsZWQgPyBzdHlsZXMuc2Nyb2xsZWQgOiAnJ31gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvSWNvbn0+8J+OtTwvc3Bhbj5cbiAgICAgICAgICBTb25nYm9vayBCdWlsZGVyXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cbiAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgIGhyZWY9XCIvXCIgXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5uYXZMaW5rfSAke2lzQWN0aXZlKCcvJykgPyBzdHlsZXMuYWN0aXZlIDogJyd9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgaHJlZj1cIi9kYXNoYm9hcmRcIiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm5hdkxpbmt9ICR7aXNBY3RpdmUoJy9kYXNoYm9hcmQnKSA/IHN0eWxlcy5hY3RpdmUgOiAnJ31gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgIGhyZWY9XCIvbG9naW5cIiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm5hdkxpbmt9ICR7aXNBY3RpdmUoJy9sb2dpbicpID8gc3R5bGVzLmFjdGl2ZSA6ICcnfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICBocmVmPVwiL3NpZ251cFwiIFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYXV0aEJ1dHRvbn0gJHtpc0FjdGl2ZSgnL3NpZ251cCcpID8gc3R5bGVzLmFjdGl2ZSA6ICcnfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkxpbmsiLCJzdHlsZXMiLCJIZWFkZXIiLCJyb3V0ZXIiLCJpc1Njcm9sbGVkIiwic2V0SXNTY3JvbGxlZCIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlzQWN0aXZlIiwicGF0aCIsInBhdGhuYW1lIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwic2Nyb2xsZWQiLCJkaXYiLCJjb250YWluZXIiLCJocmVmIiwibG9nbyIsInNwYW4iLCJsb2dvSWNvbiIsIm5hdiIsIm5hdkxpbmsiLCJhY3RpdmUiLCJhdXRoQnV0dG9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/Header.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"(pages-dir-node)/./components/Header.jsx\");\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Layout.module.css */ \"(pages-dir-node)/./styles/Layout.module.css\");\n/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Layout({ children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().layout),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sujan\\\\Downloads\\\\songbook-builder-fullstack\\\\project\\\\components\\\\Layout.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sujan\\\\Downloads\\\\songbook-builder-fullstack\\\\project\\\\components\\\\Layout.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sujan\\\\Downloads\\\\songbook-builder-fullstack\\\\project\\\\components\\\\Layout.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZCO0FBQ21CO0FBRWpDLFNBQVNFLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ3pDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXSix5RUFBYTs7MEJBQzNCLDhEQUFDRCwrQ0FBTUE7Ozs7OzBCQUNQLDhEQUFDTztnQkFBS0YsV0FBV0osdUVBQVc7MEJBQ3pCRTs7Ozs7Ozs7Ozs7O0FBSVQiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU3VqYW5cXERvd25sb2Fkc1xcc29uZ2Jvb2stYnVpbGRlci1mdWxsc3RhY2tcXHByb2plY3RcXGNvbXBvbmVudHNcXExheW91dC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0xheW91dC5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXR9PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJIZWFkZXIiLCJzdHlsZXMiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImRpdiIsImNsYXNzTmFtZSIsImxheW91dCIsIm1haW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/Layout.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"(pages-dir-node)/./components/Layout.jsx\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Sujan\\\\Downloads\\\\songbook-builder-fullstack\\\\project\\\\pages\\\\_app.jsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sujan\\\\Downloads\\\\songbook-builder-fullstack\\\\project\\\\pages\\\\_app.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDVztBQUUxQixTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDSCwwREFBTUE7a0JBQ0wsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU3VqYW5cXERvd25sb2Fkc1xcc29uZ2Jvb2stYnVpbGRlci1mdWxsc3RhY2tcXHByb2plY3RcXHBhZ2VzXFxfYXBwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59Il0sIm5hbWVzIjpbIkxheW91dCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/Header.module.css":
/*!**********************************!*\
  !*** ./styles/Header.module.css ***!
  \**********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"Header_header__072v2\",\n\t\"scrolled\": \"Header_scrolled__dJqKC\",\n\t\"container\": \"Header_container__DOHRG\",\n\t\"logo\": \"Header_logo__0dir7\",\n\t\"logoIcon\": \"Header_logoIcon__FHXPA\",\n\t\"nav\": \"Header_nav__evgr5\",\n\t\"navLink\": \"Header_navLink__bzbwi\",\n\t\"active\": \"Header_active__3IUjt\",\n\t\"authButton\": \"Header_authButton__jXx4C\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3N0eWxlcy9IZWFkZXIubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU3VqYW5cXERvd25sb2Fkc1xcc29uZ2Jvb2stYnVpbGRlci1mdWxsc3RhY2tcXHByb2plY3RcXHN0eWxlc1xcSGVhZGVyLm1vZHVsZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiSGVhZGVyX2hlYWRlcl9fMDcydjJcIixcblx0XCJzY3JvbGxlZFwiOiBcIkhlYWRlcl9zY3JvbGxlZF9fZEpxS0NcIixcblx0XCJjb250YWluZXJcIjogXCJIZWFkZXJfY29udGFpbmVyX19ET0hSR1wiLFxuXHRcImxvZ29cIjogXCJIZWFkZXJfbG9nb19fMGRpcjdcIixcblx0XCJsb2dvSWNvblwiOiBcIkhlYWRlcl9sb2dvSWNvbl9fRkhYUEFcIixcblx0XCJuYXZcIjogXCJIZWFkZXJfbmF2X19ldmdyNVwiLFxuXHRcIm5hdkxpbmtcIjogXCJIZWFkZXJfbmF2TGlua19fYnpid2lcIixcblx0XCJhY3RpdmVcIjogXCJIZWFkZXJfYWN0aXZlX18zSVVqdFwiLFxuXHRcImF1dGhCdXR0b25cIjogXCJIZWFkZXJfYXV0aEJ1dHRvbl9falh4NENcIlxufTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./styles/Header.module.css\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/Layout.module.css":
/*!**********************************!*\
  !*** ./styles/Layout.module.css ***!
  \**********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"Layout_layout__oM4MU\",\n\t\"main\": \"Layout_main__BqQ1G\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3N0eWxlcy9MYXlvdXQubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFN1amFuXFxEb3dubG9hZHNcXHNvbmdib29rLWJ1aWxkZXItZnVsbHN0YWNrXFxwcm9qZWN0XFxzdHlsZXNcXExheW91dC5tb2R1bGUuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxheW91dFwiOiBcIkxheW91dF9sYXlvdXRfX29NNE1VXCIsXG5cdFwibWFpblwiOiBcIkxheW91dF9tYWluX19CcVExR1wiXG59O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./styles/Layout.module.css\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.jsx")));
module.exports = __webpack_exports__;

})();