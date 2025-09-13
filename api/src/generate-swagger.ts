/**
 * Gera o arquivo swagger.json para CI/CD ou publicação estática.
 */
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

async function generate() {
  const app = await NestFactory.create(AppModule, { logger: false });

  const docBuilder = new DocumentBuilder()
    .setTitle("OdontoPRO API")
    .setDescription("OpenAPI gerado offline")
    .setVersion("1.0.0")
    .build();

  const document = SwaggerModule.createDocument(app, docBuilder);
  const outDir = join(process.cwd(), "dist");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(
    join(outDir, "swagger.json"),
    JSON.stringify(document, null, 2),
  );
  await app.close();
  // eslint-disable-next-line no-console
  console.log("[openapi] dist/swagger.json gerado");
}

generate();
