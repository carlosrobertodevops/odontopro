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
exports.id = "app/api/clinic/appointments/route";
exports.ids = ["app/api/clinic/appointments/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/server/app-render/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/action-async-storage.external.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fclinic%2Fappointments%2Froute&page=%2Fapi%2Fclinic%2Fappointments%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclinic%2Fappointments%2Froute.ts&appDir=%2Fapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fclinic%2Fappointments%2Froute&page=%2Fapi%2Fclinic%2Fappointments%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclinic%2Fappointments%2Froute.ts&appDir=%2Fapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_src_app_api_clinic_appointments_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/clinic/appointments/route.ts */ \"(rsc)/./src/app/api/clinic/appointments/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"standalone\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/clinic/appointments/route\",\n        pathname: \"/api/clinic/appointments\",\n        filename: \"route\",\n        bundlePath: \"app/api/clinic/appointments/route\"\n    },\n    resolvedPagePath: \"/app/src/app/api/clinic/appointments/route.ts\",\n    nextConfigOutput,\n    userland: _app_src_app_api_clinic_appointments_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjbGluaWMlMkZhcHBvaW50bWVudHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNsaW5pYyUyRmFwcG9pbnRtZW50cyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNsaW5pYyUyRmFwcG9pbnRtZW50cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZhcHAlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD1zdGFuZGFsb25lJnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ0g7QUFDMUU7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9hcHAvc3JjL2FwcC9hcGkvY2xpbmljL2FwcG9pbnRtZW50cy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJzdGFuZGFsb25lXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NsaW5pYy9hcHBvaW50bWVudHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jbGluaWMvYXBwb2ludG1lbnRzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jbGluaWMvYXBwb2ludG1lbnRzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2FwcC9zcmMvYXBwL2FwaS9jbGluaWMvYXBwb2ludG1lbnRzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fclinic%2Fappointments%2Froute&page=%2Fapi%2Fclinic%2Fappointments%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclinic%2Fappointments%2Froute.ts&appDir=%2Fapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/clinic/appointments/route.ts":
/*!**************************************************!*\
  !*** ./src/app/api/clinic/appointments/route.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n/*\n  Rota para buscar todos os agendamentos de uma clinica\n\n  > Preciso ter a data\n  > Preciso ter o id da clinica (NAO POSSO RECEBER DA ROTA req.params)\n*/ const GET = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_0__.auth)(async function GET(request) {\n    if (!request.auth) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"Acesso nao autorizado!\"\n        }, {\n            status: 401\n        });\n    }\n    const searchParams = request.nextUrl.searchParams;\n    const dateString = searchParams.get(\"date\");\n    const clinicId = request.auth?.user?.id;\n    if (!dateString) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"Data não informada!\"\n        }, {\n            status: 400\n        });\n    }\n    if (!clinicId) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"Usuário não encontrado\"\n        }, {\n            status: 400\n        });\n    }\n    try {\n        // Criar uma data formatada \n        const [year, month, day] = dateString.split(\"-\").map(Number);\n        const startDate = new Date(year, month - 1, day, 0, 0, 0, 0);\n        const endDate = new Date(year, month - 1, day, 23, 59, 59, 999);\n        const appointments = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].appointment.findMany({\n            where: {\n                userId: clinicId,\n                appointmentDate: {\n                    gte: startDate,\n                    lte: endDate\n                }\n            },\n            include: {\n                service: true\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(appointments);\n    } catch (err) {\n        console.log(err);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"Falha ao buscar agendamentos\"\n        }, {\n            status: 400\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jbGluaWMvYXBwb2ludG1lbnRzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUM7QUFDQTtBQUNzQjtBQUd2RDs7Ozs7QUFLQSxHQUdPLE1BQU1HLE1BQU1ILCtDQUFJQSxDQUFDLGVBQWVHLElBQUlDLE9BQU87SUFDaEQsSUFBSSxDQUFDQSxRQUFRSixJQUFJLEVBQUU7UUFDakIsT0FBT0UscURBQVlBLENBQUNHLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXlCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzlFO0lBRUEsTUFBTUMsZUFBZUosUUFBUUssT0FBTyxDQUFDRCxZQUFZO0lBQ2pELE1BQU1FLGFBQWFGLGFBQWFHLEdBQUcsQ0FBQztJQUNwQyxNQUFNQyxXQUFXUixRQUFRSixJQUFJLEVBQUVhLE1BQU1DO0lBRXJDLElBQUksQ0FBQ0osWUFBWTtRQUNmLE9BQU9SLHFEQUFZQSxDQUFDRyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFzQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMzRTtJQUVBLElBQUksQ0FBQ0ssVUFBVTtRQUNiLE9BQU9WLHFEQUFZQSxDQUFDRyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF5QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM5RTtJQUdBLElBQUk7UUFDRiw0QkFBNEI7UUFDNUIsTUFBTSxDQUFDUSxNQUFNQyxPQUFPQyxJQUFJLEdBQUdQLFdBQVdRLEtBQUssQ0FBQyxLQUFLQyxHQUFHLENBQUNDO1FBRXJELE1BQU1DLFlBQVksSUFBSUMsS0FBS1AsTUFBTUMsUUFBUSxHQUFHQyxLQUFLLEdBQUcsR0FBRyxHQUFHO1FBQzFELE1BQU1NLFVBQVUsSUFBSUQsS0FBS1AsTUFBTUMsUUFBUSxHQUFHQyxLQUFLLElBQUksSUFBSSxJQUFJO1FBRTNELE1BQU1PLGVBQWUsTUFBTXZCLG1EQUFNQSxDQUFDd0IsV0FBVyxDQUFDQyxRQUFRLENBQUM7WUFDckRDLE9BQU87Z0JBQ0xDLFFBQVFoQjtnQkFDUmlCLGlCQUFpQjtvQkFDZkMsS0FBS1Q7b0JBQ0xVLEtBQUtSO2dCQUNQO1lBQ0Y7WUFDQVMsU0FBUztnQkFDUEMsU0FBUztZQUNYO1FBQ0Y7UUFFQSxPQUFPL0IscURBQVlBLENBQUNHLElBQUksQ0FBQ21CO0lBRTNCLEVBQUUsT0FBT1UsS0FBSztRQUNaQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1osT0FBT2hDLHFEQUFZQSxDQUFDRyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUErQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNwRjtBQUlGLEdBQVUiLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2FwcC9hcGkvY2xpbmljL2FwcG9pbnRtZW50cy9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkAvbGliL2F1dGhcIlxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcbmltcG9ydCB7IE5leHRSZXNwb25zZSwgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcidcblxuXG4vKlxuICBSb3RhIHBhcmEgYnVzY2FyIHRvZG9zIG9zIGFnZW5kYW1lbnRvcyBkZSB1bWEgY2xpbmljYVxuXG4gID4gUHJlY2lzbyB0ZXIgYSBkYXRhXG4gID4gUHJlY2lzbyB0ZXIgbyBpZCBkYSBjbGluaWNhIChOQU8gUE9TU08gUkVDRUJFUiBEQSBST1RBIHJlcS5wYXJhbXMpXG4qL1xuXG5cbmV4cG9ydCBjb25zdCBHRVQgPSBhdXRoKGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0KSB7XG4gIGlmICghcmVxdWVzdC5hdXRoKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiQWNlc3NvIG5hbyBhdXRvcml6YWRvIVwiIH0sIHsgc3RhdHVzOiA0MDEgfSlcbiAgfVxuXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHJlcXVlc3QubmV4dFVybC5zZWFyY2hQYXJhbXM7XG4gIGNvbnN0IGRhdGVTdHJpbmcgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IGNsaW5pY0lkID0gcmVxdWVzdC5hdXRoPy51c2VyPy5pZFxuXG4gIGlmICghZGF0ZVN0cmluZykge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkRhdGEgbsOjbyBpbmZvcm1hZGEhXCIgfSwgeyBzdGF0dXM6IDQwMCB9KVxuICB9XG5cbiAgaWYgKCFjbGluaWNJZCkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVzdcOhcmlvIG7Do28gZW5jb250cmFkb1wiIH0sIHsgc3RhdHVzOiA0MDAgfSlcbiAgfVxuXG5cbiAgdHJ5IHtcbiAgICAvLyBDcmlhciB1bWEgZGF0YSBmb3JtYXRhZGEgXG4gICAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXldID0gZGF0ZVN0cmluZy5zcGxpdChcIi1cIikubWFwKE51bWJlcilcblxuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5LCAwLCAwLCAwLCAwKVxuICAgIGNvbnN0IGVuZERhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSwgMjMsIDU5LCA1OSwgOTk5KVxuXG4gICAgY29uc3QgYXBwb2ludG1lbnRzID0gYXdhaXQgcHJpc21hLmFwcG9pbnRtZW50LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHVzZXJJZDogY2xpbmljSWQsXG4gICAgICAgIGFwcG9pbnRtZW50RGF0ZToge1xuICAgICAgICAgIGd0ZTogc3RhcnREYXRlLFxuICAgICAgICAgIGx0ZTogZW5kRGF0ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaW5jbHVkZToge1xuICAgICAgICBzZXJ2aWNlOiB0cnVlLFxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oYXBwb2ludG1lbnRzKVxuXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRmFsaGEgYW8gYnVzY2FyIGFnZW5kYW1lbnRvc1wiIH0sIHsgc3RhdHVzOiA0MDAgfSlcbiAgfVxuXG5cblxufSkgYXMgYW55OyJdLCJuYW1lcyI6WyJhdXRoIiwicHJpc21hIiwiTmV4dFJlc3BvbnNlIiwiR0VUIiwicmVxdWVzdCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInNlYXJjaFBhcmFtcyIsIm5leHRVcmwiLCJkYXRlU3RyaW5nIiwiZ2V0IiwiY2xpbmljSWQiLCJ1c2VyIiwiaWQiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJzcGxpdCIsIm1hcCIsIk51bWJlciIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJlbmREYXRlIiwiYXBwb2ludG1lbnRzIiwiYXBwb2ludG1lbnQiLCJmaW5kTWFueSIsIndoZXJlIiwidXNlcklkIiwiYXBwb2ludG1lbnREYXRlIiwiZ3RlIiwibHRlIiwiaW5jbHVkZSIsInNlcnZpY2UiLCJlcnIiLCJjb25zb2xlIiwibG9nIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/clinic/appointments/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   handlers: () => (/* binding */ handlers),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n\n\n\n\n\nconst { handlers, signIn, signOut, auth } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n    trustHost: true,\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ]\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0g7QUFDdUI7QUFFTDtBQUNBO0FBRXhDLE1BQU0sRUFBRUssUUFBUSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFLEdBQUdSLHFEQUFRQSxDQUFDO0lBQzFEUyxTQUFTUCxtRUFBYUEsQ0FBQ0QsK0NBQU1BO0lBQzdCUyxXQUFXO0lBQ1hDLFdBQVc7UUFBQ1Isa0VBQU1BO1FBQUVDLGtFQUFNQTtLQUFDO0FBQzdCLEdBQUUiLCJzb3VyY2VzIjpbIi9hcHAvc3JjL2xpYi9hdXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi9wcmlzbWEnXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBhdXRoL3ByaXNtYS1hZGFwdGVyXCJcbmltcG9ydCB7IEFkYXB0ZXIgfSBmcm9tIFwibmV4dC1hdXRoL2FkYXB0ZXJzXCJcbmltcG9ydCBHaXRIdWIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCJcbmltcG9ydCBHb29nbGUgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnXG5cbmV4cG9ydCBjb25zdCB7IGhhbmRsZXJzLCBzaWduSW4sIHNpZ25PdXQsIGF1dGggfSA9IE5leHRBdXRoKHtcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpIGFzIEFkYXB0ZXIsXG4gIHRydXN0SG9zdDogdHJ1ZSxcbiAgcHJvdmlkZXJzOiBbR2l0SHViLCBHb29nbGVdLFxufSkiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJwcmlzbWEiLCJQcmlzbWFBZGFwdGVyIiwiR2l0SHViIiwiR29vZ2xlIiwiaGFuZGxlcnMiLCJzaWduSW4iLCJzaWduT3V0IiwiYXV0aCIsImFkYXB0ZXIiLCJ0cnVzdEhvc3QiLCJwcm92aWRlcnMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    let globalWithPrisma = global;\n    if (!globalWithPrisma.prisma) {\n        globalWithPrisma.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = globalWithPrisma.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFFN0MsSUFBSUM7QUFFSixJQUFJQyxLQUFxQyxFQUFFLEVBRTFDLE1BQU07SUFDTCxJQUFJQyxtQkFBbUJDO0lBSXZCLElBQUksQ0FBQ0QsaUJBQWlCRixNQUFNLEVBQUU7UUFDNUJFLGlCQUFpQkYsTUFBTSxHQUFHLElBQUlELHdEQUFZQTtJQUM1QztJQUVBQyxTQUFTRSxpQkFBaUJGLE1BQU07QUFDbEM7QUFFQSxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsiL2FwcC9zcmMvbGliL3ByaXNtYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxubGV0IHByaXNtYTogUHJpc21hQ2xpZW50O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG59IGVsc2Uge1xuICBsZXQgZ2xvYmFsV2l0aFByaXNtYSA9IGdsb2JhbCBhcyB0eXBlb2YgZ2xvYmFsVGhpcyAmIHtcbiAgICBwcmlzbWE6IFByaXNtYUNsaWVudDtcbiAgfVxuXG4gIGlmICghZ2xvYmFsV2l0aFByaXNtYS5wcmlzbWEpIHtcbiAgICBnbG9iYWxXaXRoUHJpc21hLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuXG4gIHByaXNtYSA9IGdsb2JhbFdpdGhQcmlzbWEucHJpc21hO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInByb2Nlc3MiLCJnbG9iYWxXaXRoUHJpc21hIiwiZ2xvYmFsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@auth","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/oauth4webapi","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fclinic%2Fappointments%2Froute&page=%2Fapi%2Fclinic%2Fappointments%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fclinic%2Fappointments%2Froute.ts&appDir=%2Fapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();