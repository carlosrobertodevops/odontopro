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
exports.id = "app/api/schedule/get-appointments/route";
exports.ids = ["app/api/schedule/get-appointments/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fschedule%2Fget-appointments%2Froute&page=%2Fapi%2Fschedule%2Fget-appointments%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fschedule%2Fget-appointments%2Froute.ts&appDir=%2Fapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fschedule%2Fget-appointments%2Froute&page=%2Fapi%2Fschedule%2Fget-appointments%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fschedule%2Fget-appointments%2Froute.ts&appDir=%2Fapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_src_app_api_schedule_get_appointments_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/schedule/get-appointments/route.ts */ \"(rsc)/./src/app/api/schedule/get-appointments/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"standalone\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/schedule/get-appointments/route\",\n        pathname: \"/api/schedule/get-appointments\",\n        filename: \"route\",\n        bundlePath: \"app/api/schedule/get-appointments/route\"\n    },\n    resolvedPagePath: \"/app/src/app/api/schedule/get-appointments/route.ts\",\n    nextConfigOutput,\n    userland: _app_src_app_api_schedule_get_appointments_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzY2hlZHVsZSUyRmdldC1hcHBvaW50bWVudHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNjaGVkdWxlJTJGZ2V0LWFwcG9pbnRtZW50cyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNjaGVkdWxlJTJGZ2V0LWFwcG9pbnRtZW50cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZhcHAlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD1zdGFuZGFsb25lJnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ0c7QUFDaEY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9hcHAvc3JjL2FwcC9hcGkvc2NoZWR1bGUvZ2V0LWFwcG9pbnRtZW50cy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJzdGFuZGFsb25lXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NjaGVkdWxlL2dldC1hcHBvaW50bWVudHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zY2hlZHVsZS9nZXQtYXBwb2ludG1lbnRzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zY2hlZHVsZS9nZXQtYXBwb2ludG1lbnRzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2FwcC9zcmMvYXBwL2FwaS9zY2hlZHVsZS9nZXQtYXBwb2ludG1lbnRzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fschedule%2Fget-appointments%2Froute&page=%2Fapi%2Fschedule%2Fget-appointments%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fschedule%2Fget-appointments%2Froute.ts&appDir=%2Fapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/schedule/get-appointments/route.ts":
/*!********************************************************!*\
  !*** ./src/app/api/schedule/get-appointments/route.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n// Backend meusite.com/api/schedule/get-appointments\n\n\nasync function GET(request) {\n    const { searchParams } = request.nextUrl;\n    const userId = searchParams.get('userId');\n    const dateParam = searchParams.get('date');\n    if (!userId || userId === \"null\" || !dateParam || dateParam === \"null\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: \"Nenhum agendamento encotnrado\"\n        }, {\n            status: 400\n        });\n    }\n    try {\n        // Converte a data recebida em um objeto Date\n        const [year, month, day] = dateParam.split(\"-\").map(Number);\n        const startDate = new Date(year, month - 1, day, 0, 0, 0);\n        const endDate = new Date(year, month - 1, day, 23, 59, 59, 999);\n        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findFirst({\n            where: {\n                id: userId\n            }\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                error: \"Nenhum agendamento encotnrado\"\n            }, {\n                status: 400\n            });\n        }\n        const appointments = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appointment.findMany({\n            where: {\n                userId: userId,\n                appointmentDate: {\n                    gte: startDate,\n                    lte: endDate\n                }\n            },\n            include: {\n                service: true\n            }\n        });\n        // Montar com todos os (slots) ocupados\n        const blockedSlots = new Set();\n        for (const apt of appointments){\n            // Ex: apt.time = \"10:00\", apt.service.duration = 60 (1h)\n            const requiredSlots = Math.ceil(apt.service.duration / 30);\n            const startIndex = user.times.indexOf(apt.time);\n            if (startIndex !== -1) {\n                for(let i = 0; i < requiredSlots; i++){\n                    const blockedSlot = user.times[startIndex + i];\n                    if (blockedSlot) {\n                        blockedSlots.add(blockedSlot);\n                    }\n                }\n            }\n        }\n        const blockedtimes = Array.from(blockedSlots);\n        console.log(\"blockedtimes: \", blockedtimes);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(blockedtimes);\n    } catch (err) {\n        console.log(err);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: \"Nenhum agendamento encotnrado\"\n        }, {\n            status: 400\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zY2hlZHVsZS9nZXQtYXBwb2ludG1lbnRzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9EQUFvRDtBQUVuQjtBQUNzQjtBQUVoRCxlQUFlRSxJQUFJQyxPQUFvQjtJQUM1QyxNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHRCxRQUFRRSxPQUFPO0lBRXhDLE1BQU1DLFNBQVNGLGFBQWFHLEdBQUcsQ0FBQztJQUNoQyxNQUFNQyxZQUFZSixhQUFhRyxHQUFHLENBQUM7SUFFbkMsSUFBSSxDQUFDRCxVQUFVQSxXQUFXLFVBQVUsQ0FBQ0UsYUFBYUEsY0FBYyxRQUFRO1FBQ3RFLE9BQU9QLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFDdkJDLE9BQU87UUFDVCxHQUFHO1lBQ0RDLFFBQVE7UUFDVjtJQUNGO0lBRUEsSUFBSTtRQUNGLDZDQUE2QztRQUM3QyxNQUFNLENBQUNDLE1BQU1DLE9BQU9DLElBQUksR0FBR04sVUFBVU8sS0FBSyxDQUFDLEtBQUtDLEdBQUcsQ0FBQ0M7UUFDcEQsTUFBTUMsWUFBWSxJQUFJQyxLQUFLUCxNQUFNQyxRQUFRLEdBQUdDLEtBQUssR0FBRyxHQUFHO1FBQ3ZELE1BQU1NLFVBQVUsSUFBSUQsS0FBS1AsTUFBTUMsUUFBUSxHQUFHQyxLQUFLLElBQUksSUFBSSxJQUFJO1FBRTNELE1BQU1PLE9BQU8sTUFBTXJCLG1EQUFNQSxDQUFDcUIsSUFBSSxDQUFDQyxTQUFTLENBQUM7WUFDdkNDLE9BQU87Z0JBQ0xDLElBQUlsQjtZQUNOO1FBQ0Y7UUFFQSxJQUFJLENBQUNlLE1BQU07WUFDVCxPQUFPcEIscURBQVlBLENBQUNRLElBQUksQ0FBQztnQkFDdkJDLE9BQU87WUFDVCxHQUFHO2dCQUNEQyxRQUFRO1lBQ1Y7UUFDRjtRQUVBLE1BQU1jLGVBQWUsTUFBTXpCLG1EQUFNQSxDQUFDMEIsV0FBVyxDQUFDQyxRQUFRLENBQUM7WUFDckRKLE9BQU87Z0JBQ0xqQixRQUFRQTtnQkFDUnNCLGlCQUFpQjtvQkFDZkMsS0FBS1g7b0JBQ0xZLEtBQUtWO2dCQUNQO1lBQ0Y7WUFDQVcsU0FBUztnQkFDUEMsU0FBUztZQUNYO1FBQ0Y7UUFFQSx1Q0FBdUM7UUFDdkMsTUFBTUMsZUFBZSxJQUFJQztRQUV6QixLQUFLLE1BQU1DLE9BQU9WLGFBQWM7WUFDOUIseURBQXlEO1lBQ3pELE1BQU1XLGdCQUFnQkMsS0FBS0MsSUFBSSxDQUFDSCxJQUFJSCxPQUFPLENBQUNPLFFBQVEsR0FBRztZQUN2RCxNQUFNQyxhQUFhbkIsS0FBS29CLEtBQUssQ0FBQ0MsT0FBTyxDQUFDUCxJQUFJUSxJQUFJO1lBRTlDLElBQUlILGVBQWUsQ0FBQyxHQUFHO2dCQUNyQixJQUFLLElBQUlJLElBQUksR0FBR0EsSUFBSVIsZUFBZVEsSUFBSztvQkFDdEMsTUFBTUMsY0FBY3hCLEtBQUtvQixLQUFLLENBQUNELGFBQWFJLEVBQUU7b0JBQzlDLElBQUlDLGFBQWE7d0JBQ2ZaLGFBQWFhLEdBQUcsQ0FBQ0Q7b0JBQ25CO2dCQUNGO1lBQ0Y7UUFFRjtRQUdBLE1BQU1FLGVBQWVDLE1BQU1DLElBQUksQ0FBQ2hCO1FBRWhDaUIsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQko7UUFFOUIsT0FBTzlDLHFEQUFZQSxDQUFDUSxJQUFJLENBQUNzQztJQUczQixFQUFFLE9BQU9LLEtBQUs7UUFDWkYsUUFBUUMsR0FBRyxDQUFDQztRQUNaLE9BQU9uRCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQ3ZCQyxPQUFPO1FBQ1QsR0FBRztZQUNEQyxRQUFRO1FBQ1Y7SUFDRjtBQUVGIiwic291cmNlcyI6WyIvYXBwL3NyYy9hcHAvYXBpL3NjaGVkdWxlL2dldC1hcHBvaW50bWVudHMvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQmFja2VuZCBtZXVzaXRlLmNvbS9hcGkvc2NoZWR1bGUvZ2V0LWFwcG9pbnRtZW50c1xuXG5pbXBvcnQgcHJpc21hIGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gcmVxdWVzdC5uZXh0VXJsO1xuXG4gIGNvbnN0IHVzZXJJZCA9IHNlYXJjaFBhcmFtcy5nZXQoJ3VzZXJJZCcpXG4gIGNvbnN0IGRhdGVQYXJhbSA9IHNlYXJjaFBhcmFtcy5nZXQoJ2RhdGUnKVxuXG4gIGlmICghdXNlcklkIHx8IHVzZXJJZCA9PT0gXCJudWxsXCIgfHwgIWRhdGVQYXJhbSB8fCBkYXRlUGFyYW0gPT09IFwibnVsbFwiKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIGVycm9yOiBcIk5lbmh1bSBhZ2VuZGFtZW50byBlbmNvdG5yYWRvXCJcbiAgICB9LCB7XG4gICAgICBzdGF0dXM6IDQwMFxuICAgIH0pXG4gIH1cblxuICB0cnkge1xuICAgIC8vIENvbnZlcnRlIGEgZGF0YSByZWNlYmlkYSBlbSB1bSBvYmpldG8gRGF0ZVxuICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGRhdGVQYXJhbS5zcGxpdChcIi1cIikubWFwKE51bWJlcilcbiAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSwgMCwgMCwgMClcbiAgICBjb25zdCBlbmREYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXksIDIzLCA1OSwgNTksIDk5OSlcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHVzZXJJZFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICAgIGVycm9yOiBcIk5lbmh1bSBhZ2VuZGFtZW50byBlbmNvdG5yYWRvXCJcbiAgICAgIH0sIHtcbiAgICAgICAgc3RhdHVzOiA0MDBcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgYXBwb2ludG1lbnRzID0gYXdhaXQgcHJpc21hLmFwcG9pbnRtZW50LmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICBhcHBvaW50bWVudERhdGU6IHtcbiAgICAgICAgICBndGU6IHN0YXJ0RGF0ZSxcbiAgICAgICAgICBsdGU6IGVuZERhdGVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgc2VydmljZTogdHJ1ZSxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gTW9udGFyIGNvbSB0b2RvcyBvcyAoc2xvdHMpIG9jdXBhZG9zXG4gICAgY29uc3QgYmxvY2tlZFNsb3RzID0gbmV3IFNldDxzdHJpbmc+KClcblxuICAgIGZvciAoY29uc3QgYXB0IG9mIGFwcG9pbnRtZW50cykge1xuICAgICAgLy8gRXg6IGFwdC50aW1lID0gXCIxMDowMFwiLCBhcHQuc2VydmljZS5kdXJhdGlvbiA9IDYwICgxaClcbiAgICAgIGNvbnN0IHJlcXVpcmVkU2xvdHMgPSBNYXRoLmNlaWwoYXB0LnNlcnZpY2UuZHVyYXRpb24gLyAzMClcbiAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB1c2VyLnRpbWVzLmluZGV4T2YoYXB0LnRpbWUpXG5cbiAgICAgIGlmIChzdGFydEluZGV4ICE9PSAtMSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcXVpcmVkU2xvdHM7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGJsb2NrZWRTbG90ID0gdXNlci50aW1lc1tzdGFydEluZGV4ICsgaV1cbiAgICAgICAgICBpZiAoYmxvY2tlZFNsb3QpIHtcbiAgICAgICAgICAgIGJsb2NrZWRTbG90cy5hZGQoYmxvY2tlZFNsb3QpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cblxuICAgIGNvbnN0IGJsb2NrZWR0aW1lcyA9IEFycmF5LmZyb20oYmxvY2tlZFNsb3RzKTtcblxuICAgIGNvbnNvbGUubG9nKFwiYmxvY2tlZHRpbWVzOiBcIiwgYmxvY2tlZHRpbWVzKVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGJsb2NrZWR0aW1lcylcblxuXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIGVycm9yOiBcIk5lbmh1bSBhZ2VuZGFtZW50byBlbmNvdG5yYWRvXCJcbiAgICB9LCB7XG4gICAgICBzdGF0dXM6IDQwMFxuICAgIH0pXG4gIH1cblxufSJdLCJuYW1lcyI6WyJwcmlzbWEiLCJOZXh0UmVzcG9uc2UiLCJHRVQiLCJyZXF1ZXN0Iiwic2VhcmNoUGFyYW1zIiwibmV4dFVybCIsInVzZXJJZCIsImdldCIsImRhdGVQYXJhbSIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInllYXIiLCJtb250aCIsImRheSIsInNwbGl0IiwibWFwIiwiTnVtYmVyIiwic3RhcnREYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJ1c2VyIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJpZCIsImFwcG9pbnRtZW50cyIsImFwcG9pbnRtZW50IiwiZmluZE1hbnkiLCJhcHBvaW50bWVudERhdGUiLCJndGUiLCJsdGUiLCJpbmNsdWRlIiwic2VydmljZSIsImJsb2NrZWRTbG90cyIsIlNldCIsImFwdCIsInJlcXVpcmVkU2xvdHMiLCJNYXRoIiwiY2VpbCIsImR1cmF0aW9uIiwic3RhcnRJbmRleCIsInRpbWVzIiwiaW5kZXhPZiIsInRpbWUiLCJpIiwiYmxvY2tlZFNsb3QiLCJhZGQiLCJibG9ja2VkdGltZXMiLCJBcnJheSIsImZyb20iLCJjb25zb2xlIiwibG9nIiwiZXJyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/schedule/get-appointments/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fschedule%2Fget-appointments%2Froute&page=%2Fapi%2Fschedule%2Fget-appointments%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fschedule%2Fget-appointments%2Froute.ts&appDir=%2Fapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();