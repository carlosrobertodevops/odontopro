"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const metrics_service_1 = require("./metrics.service");
let MetricsInterceptor = class MetricsInterceptor {
    constructor(metrics) {
        this.metrics = metrics;
    }
    intercept(context, next) {
        const http = context.switchToHttp();
        const req = http.getRequest();
        const start = process.hrtime.bigint();
        return next.handle().pipe((0, rxjs_1.tap)(() => {
            const res = http.getResponse();
            const status = String(res?.statusCode || 200);
            const method = (req?.method || "GET").toUpperCase();
            const route = req?.route?.path ||
                req?.originalUrl ||
                req?.url ||
                "unknown";
            const end = process.hrtime.bigint();
            const seconds = Number(end - start) / 1e9;
            this.metrics.httpHistogram
                .labels(method, route, status)
                .observe(seconds);
        }));
    }
};
exports.MetricsInterceptor = MetricsInterceptor;
exports.MetricsInterceptor = MetricsInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [metrics_service_1.MetricsService])
], MetricsInterceptor);
//# sourceMappingURL=metrics.interceptor.js.map