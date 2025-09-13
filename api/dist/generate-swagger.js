"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const fs_1 = require("fs");
const path_1 = require("path");
async function generate() {
    process.env.OPENAPI_ONLY = "1";
    process.env.SKIP_PRISMA_CONNECT = "1";
    process.env.SKIP_METRICS = "1";
    console.log("[openapi] iniciando geração…");
    const { AppModule } = await Promise.resolve().then(() => __importStar(require("./app.module")));
    console.log("[openapi] criando app (contexto Nest) …");
    const app = await core_1.NestFactory.create(AppModule, { logger: false });
    await app.init();
    console.log("[openapi] construindo documento OpenAPI…");
    const docBuilder = new swagger_1.DocumentBuilder()
        .setTitle("OdontoPRO API")
        .setDescription("OpenAPI gerado offline")
        .setVersion("1.0.0")
        .addTag("Health")
        .addTag("Metrics")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, docBuilder);
    const outDir = (0, path_1.join)(process.cwd(), "dist");
    (0, fs_1.mkdirSync)(outDir, { recursive: true });
    const outFile = (0, path_1.join)(outDir, "swagger.json");
    (0, fs_1.writeFileSync)(outFile, JSON.stringify(document, null, 2));
    await app.close();
    console.log("[openapi] gerado:", outFile);
    process.exit(0);
}
generate().catch((e) => {
    console.error("[openapi] erro:", e);
    process.exit(1);
});
//# sourceMappingURL=generate-swagger.js.map