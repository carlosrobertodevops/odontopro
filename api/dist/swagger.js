"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = setupSwagger;
const swagger_1 = require("@nestjs/swagger");
function setupSwagger(app) {
    const title = "OdontoPRO API";
    const description = "Documentação da API (NestJS) com OpenAPI 3";
    const version = "1.0.0";
    const builder = new swagger_1.DocumentBuilder()
        .setTitle(title)
        .setDescription(description)
        .setVersion(version)
        .addTag("Health")
        .addTag("Metrics")
        .addServer(process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000", "API")
        .addServer(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000", "Web (Next) – referência")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, builder);
    document.paths["/api/metrics"] = {
        get: {
            tags: ["Metrics"],
            summary: "Métricas do Next (Prometheus)",
            description: "Endpoint exposto pelo Next em /api/metrics (content-type text/plain).",
            responses: {
                200: {
                    description: "Texto no formato Prometheus exposition format",
                },
            },
        },
    };
    swagger_1.SwaggerModule.setup("/docs", app, document, {
        jsonDocumentUrl: "/docs-json",
        swaggerOptions: { persistAuthorization: true },
    });
}
//# sourceMappingURL=swagger.js.map