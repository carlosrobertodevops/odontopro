/**
 * Gera swagger.json sem levantar HTTP, sem conectar no DB
 * e sem iniciar timers de métricas.
 */
import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

async function generate() {
  // ⚠️ Defina os flags ANTES de carregar o AppModule
  process.env.OPENAPI_ONLY = "1";
  process.env.SKIP_PRISMA_CONNECT = "1";
  process.env.SKIP_METRICS = "1";

  console.log("[openapi] iniciando geração…");

  // Carrega AppModule somente agora (respeitando os flags acima)
  const { AppModule } = await import("./app.module");

  console.log("[openapi] criando app (contexto Nest) …");
  const app = await NestFactory.create(AppModule, { logger: false });
  await app.init();

  console.log("[openapi] construindo documento OpenAPI…");
  const docBuilder = new DocumentBuilder()
    .setTitle("OdontoPRO API")
    .setDescription("OpenAPI gerado offline")
    .setVersion("1.0.0")
    .addTag("Health")
    .addTag("Metrics")
    .build();

  const document = SwaggerModule.createDocument(app, docBuilder);

  const outDir = join(process.cwd(), "dist");
  mkdirSync(outDir, { recursive: true });
  const outFile = join(outDir, "swagger.json");
  writeFileSync(outFile, JSON.stringify(document, null, 2));

  await app.close();
  console.log("[openapi] gerado:", outFile);

  // Fecha o processo mesmo se algum handler tiver ficado aberto
  process.exit(0);
}

generate().catch((e) => {
  console.error("[openapi] erro:", e);
  process.exit(1);
});
