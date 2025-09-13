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
exports.MetricsService = void 0;
const common_1 = require("@nestjs/common");
const OPENAPI_ONLY = process.env.OPENAPI_ONLY === "1";
const SKIP = OPENAPI_ONLY || process.env.SKIP_METRICS === "1";
function loadProm() {
    return require("prom-client");
}
let MetricsService = class MetricsService {
    constructor() {
        if (SKIP) {
            this.registry = {
                async metrics() {
                    return "# metrics disabled during openapi generation\n";
                },
                contentType: "text/plain",
            };
            this.httpHistogram = {
                labels: () => ({ observe: (_v) => void 0 }),
            };
            return;
        }
        const prom = loadProm();
        const g = global;
        this.registry = g.__API_PROM_REGISTRY__ ?? new prom.Registry();
        if (!g.__API_PROM_REGISTRY__) {
            prom.collectDefaultMetrics({
                register: this.registry,
                prefix: "api_",
            });
            g.__API_PROM_REGISTRY__ = this.registry;
        }
        const existing = this.registry.getSingleMetric?.("api_http_request_duration_seconds");
        this.httpHistogram =
            existing ??
                new prom.Histogram({
                    name: "api_http_request_duration_seconds",
                    help: "API HTTP request latency in seconds",
                    labelNames: ["method", "route", "status_code"],
                    buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5],
                    registers: [this.registry],
                });
    }
    async metrics() {
        return this.registry.metrics();
    }
    getContentType() {
        return this.registry.contentType || "text/plain";
    }
};
exports.MetricsService = MetricsService;
exports.MetricsService = MetricsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MetricsService);
//# sourceMappingURL=metrics.service.js.map