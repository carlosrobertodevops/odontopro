import { Injectable } from "@nestjs/common";

const OPENAPI_ONLY = process.env.OPENAPI_ONLY === "1";
const SKIP = OPENAPI_ONLY || process.env.SKIP_METRICS === "1";

// Tipagem leve para evitar dependência quando SKIP=true
type RegistryLike = {
  metrics: () => Promise<string>;
  contentType?: string;
};

// Lazy require do prom-client somente quando necessário
function loadProm() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require("prom-client") as typeof import("prom-client");
}

/**
 * Serviço central de métricas (Prometheus).
 * - Em modo OpenAPI ou SKIP_METRICS, fornece um stub sem timers.
 */
@Injectable()
export class MetricsService {
  public readonly registry: RegistryLike;
  public readonly httpHistogram: any;

  constructor() {
    if (SKIP) {
      // Stub: não cria intervalos nem importa prom-client
      this.registry = {
        async metrics() {
          return "# metrics disabled during openapi generation\n";
        },
        contentType: "text/plain",
      };
      this.httpHistogram = {
        labels: () => ({ observe: (_v: number) => void 0 }),
      };
      return;
    }

    const prom = loadProm();
    const g = global as unknown as {
      __API_PROM_REGISTRY__?: import("prom-client").Registry;
    };

    this.registry = g.__API_PROM_REGISTRY__ ?? new prom.Registry();

    if (!g.__API_PROM_REGISTRY__) {
      prom.collectDefaultMetrics({
        register: this.registry as any,
        prefix: "api_",
      });
      g.__API_PROM_REGISTRY__ = this.registry as any;
    }

    const existing = (this.registry as any).getSingleMetric?.(
      "api_http_request_duration_seconds",
    );

    this.httpHistogram =
      existing ??
      new prom.Histogram({
        name: "api_http_request_duration_seconds",
        help: "API HTTP request latency in seconds",
        labelNames: ["method", "route", "status_code"],
        buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5],
        registers: [this.registry as any],
      });
  }

  async metrics(): Promise<string> {
    return (this.registry as any).metrics();
  }

  getContentType(): string {
    return (this.registry as any).contentType || "text/plain";
  }
}
