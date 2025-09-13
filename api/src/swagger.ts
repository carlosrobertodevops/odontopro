/**
 * Swagger/OpenAPI setup.
 * - /docs      -> Swagger UI
 * - /docs-json -> JSON do OpenAPI gerado
 * Inclui path extra para a rota de métricas do Next (web) como referência.
 */
import { INestApplication } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

export function setupSwagger(app: INestApplication) {
  const title = "OdontoPRO API";
  const description = "Documentação da API (NestJS) com OpenAPI 3";
  const version = "1.0.0";

  const builder = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .addTag("Health")
    .addTag("Metrics")
    .addServer(
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
      "API",
    )
    .addServer(
      process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
      "Web (Next) – referência",
    )
    .build();

  const document = SwaggerModule.createDocument(app, builder);

  // Adiciona manualmente a rota de métricas do Next (Web) como referência
  document.paths["/api/metrics"] = {
    get: {
      tags: ["Metrics"],
      summary: "Métricas do Next (Prometheus)",
      description:
        "Endpoint exposto pelo Next em /api/metrics (content-type text/plain).",
      responses: {
        200: {
          description: "Texto no formato Prometheus exposition format",
        },
      },
    },
  };

  SwaggerModule.setup("/docs", app, document, {
    jsonDocumentUrl: "/docs-json",
    swaggerOptions: { persistAuthorization: true },
  });
}
