"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const swagger_1 = require("./swagger");
const tracing_1 = require("./tracing");
const metrics_service_1 = require("./metrics/metrics.service");
const metrics_interceptor_1 = require("./metrics/metrics.interceptor");
async function bootstrap() {
    await tracing_1.otelSDK.start();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = app.get(config_1.ConfigService);
    const port = Number(config.get("API_PORT") || 4000);
    const corsOrigin = config.get("API_CORS_ORIGIN") || "http://localhost:3000";
    app.enableCors({
        origin: corsOrigin.split(",").map((s) => s.trim()),
        credentials: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    });
    const metricsService = app.get(metrics_service_1.MetricsService);
    app.useGlobalInterceptors(new metrics_interceptor_1.MetricsInterceptor(metricsService));
    (0, swagger_1.setupSwagger)(app);
    await app.listen(port, "0.0.0.0");
    console.log(`[api] Listening on http://0.0.0.0:${port} (CORS: ${corsOrigin})`);
}
bootstrap();
//# sourceMappingURL=main.js.map