import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  const port = Number(config.get("API_PORT") || 4000);
  const corsOrigin = config.get<string>("API_CORS_ORIGIN") || "http://localhost:3000";

  app.enableCors({
    origin: corsOrigin.split(",").map((s) => s.trim()),
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
  });

  await app.listen(port, "0.0.0.0");
  // eslint-disable-next-line no-console
  console.log(`[api] Listening on http://0.0.0.0:${port} (CORS: ${corsOrigin})`);
}
bootstrap();