"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.otelSDK = void 0;
const sdk_node_1 = require("@opentelemetry/sdk-node");
const resources_1 = require("@opentelemetry/resources");
const semantic_conventions_1 = require("@opentelemetry/semantic-conventions");
const exporter_trace_otlp_http_1 = require("@opentelemetry/exporter-trace-otlp-http");
const auto_instrumentations_node_1 = require("@opentelemetry/auto-instrumentations-node");
const serviceName = process.env.OTEL_SERVICE_NAME_API || "odontopro-api";
const endpoint = (process.env.OTEL_EXPORTER_OTLP_ENDPOINT || "http://otel-collector:4318") +
    "/v1/traces";
exports.otelSDK = new sdk_node_1.NodeSDK({
    resource: new resources_1.Resource({
        [semantic_conventions_1.SemanticResourceAttributes.SERVICE_NAME]: serviceName,
        [semantic_conventions_1.SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]: process.env.OTEL_RESOURCE_ATTRIBUTES?.split("=")[1] || "local",
    }),
    traceExporter: new exporter_trace_otlp_http_1.OTLPTraceExporter({ url: endpoint }),
    instrumentations: [
        (0, auto_instrumentations_node_1.getNodeAutoInstrumentations)({
            "@opentelemetry/instrumentation-fs": { enabled: false },
        }),
    ],
});
//# sourceMappingURL=tracing.js.map