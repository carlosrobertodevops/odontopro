/**
 * Módulo raiz da API (NestJS).
 * - Carrega variáveis de ambiente.
 * - Registra Prisma, Health e Metrics.
 */
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "./prisma/prisma.module";
import { HealthModule } from "./health/health.module";
import { MetricsModule } from "./metrics/metrics.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".env.local", ".env", ".env.coolify"],
    }),
    PrismaModule,
    HealthModule,
    MetricsModule,
  ],
})
export class AppModule {}
