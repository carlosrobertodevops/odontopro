import { Controller, Get, Header } from "@nestjs/common";
import { MetricsService } from "./metrics.service";
import {
  ApiOkResponse,
  ApiOperation,
  ApiProduces,
  ApiTags,
} from "@nestjs/swagger";

/**
 * Exposição Prometheus da API:
 * GET /metrics  -> text/plain (exposition format)
 */
@ApiTags("Metrics")
@Controller("metrics")
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get()
  @Header("Content-Type", "text/plain; version=0.0.4")
  @ApiOperation({ summary: "Métricas Prometheus da API" })
  @ApiProduces("text/plain")
  @ApiOkResponse({ description: "Prometheus exposition format" })
  async getMetrics(): Promise<string> {
    return this.metricsService.metrics();
  }
}
