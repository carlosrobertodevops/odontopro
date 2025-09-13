/**
 * Configuração central do OpenTelemetry para a API (Nest).
 * Exporta um NodeSDK que será iniciado em main.ts.
 */
import { NodeSDK } from "@opentelemetry/sdk-node";
import { Resource } from "@opentelemetry/resources";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";

const serviceName = process.env.OTEL_SERVICE_NAME_API || "odontopro-api";
const endpoint =
  (process.env.OTEL_EXPORTER_OTLP_ENDPOINT || "http://otel-collector:4318") +
  "/v1/traces";

export const otelSDK = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
    [SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]:
      process.env.OTEL_RESOURCE_ATTRIBUTES?.split("=")[1] || "local",
  }),
  traceExporter: new OTLPTraceExporter({ url: endpoint }),
  instrumentations: [
    getNodeAutoInstrumentations({
      "@opentelemetry/instrumentation-fs": { enabled: false },
    }),
  ],
});
