/**
 * Bootstrap do NestJS.
 * - Inicia OpenTelemetry (tracing) via otelSDK.
 * - Habilita CORS.
 * - Liga Swagger em /docs e /docs-json.
 * - Adiciona interceptor de métricas Prometheus (latência por rota).
 */
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { setupSwagger } from "./swagger";
import { otelSDK } from "./tracing";
import { MetricsService } from "./metrics/metrics.service";
import { MetricsInterceptor } from "./metrics/metrics.interceptor";

async function bootstrap() {
  // OpenTelemetry (tracing)
  await otelSDK.start();

  const app = await NestFactory.create(AppModule);

  // CORS
  const config = app.get(ConfigService);
  const port = Number(config.get("API_PORT") || 4000);
  const corsOrigin =
    config.get<string>("API_CORS_ORIGIN") || "http://localhost:3000";
  app.enableCors({
    origin: corsOrigin.split(",").map((s) => s.trim()),
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  });

  // Métricas (interceptor de latência)
  const metricsService = app.get(MetricsService);
  app.useGlobalInterceptors(new MetricsInterceptor(metricsService));

  // Swagger/OpenAPI
  setupSwagger(app);

  await app.listen(port, "0.0.0.0");
  // eslint-disable-next-line no-console
  console.log(
    `[api] Listening on http://0.0.0.0:${port} (CORS: ${corsOrigin})`,
  );
}
bootstrap();
