import { Injectable } from "@nestjs/common";
import * as promClient from "prom-client";

/**
 * Serviço central de métricas (Prometheus).
 * - Exponibiliza registry com métricas padrão (prefixo api_).
 * - Fornece histograma de latência HTTP por rota.
 */
@Injectable()
export class MetricsService {
  public readonly registry: promClient.Registry;
  public readonly httpHistogram: promClient.Histogram<string>;

  constructor() {
    const g: any = global as any;

    this.registry = g.__API_PROM_REGISTRY__ || new promClient.Registry();

    if (!g.__API_PROM_REGISTRY__) {
      promClient.collectDefaultMetrics({
        register: this.registry,
        prefix: "api_",
      });
      g.__API_PROM_REGISTRY__ = this.registry;
    }

    const existing = this.registry.getSingleMetric(
      "api_http_request_duration_seconds",
    ) as promClient.Histogram<string> | undefined;

    this.httpHistogram =
      existing ||
      new promClient.Histogram({
        name: "api_http_request_duration_seconds",
        help: "API HTTP latency (seconds)",
        labelNames: ["method", "route", "status_code"],
        buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5],
        registers: [this.registry],
      });
  }

  async metrics(): Promise<string> {
    return this.registry.metrics();
  }
}
