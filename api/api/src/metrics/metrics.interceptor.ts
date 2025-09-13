import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable, tap } from "rxjs";
import { MetricsService } from "./metrics.service";

/**
 * Interceptor que observa a duração da requisição por rota e status.
 */
@Injectable()
export class MetricsInterceptor implements NestInterceptor {
  constructor(private readonly metrics: MetricsService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const http = context.switchToHttp();
    const req = http.getRequest<Request>() as any;
    const start = process.hrtime.bigint();

    return next.handle().pipe(
      tap(() => {
        const res = http.getResponse<Response>() as any;
        const status = String(res?.statusCode || 200);
        const method = (req?.method || "GET").toUpperCase();
        const route =
          (req?.route?.path as string) ||
          (req?.originalUrl as string) ||
          (req?.url as string) ||
          "unknown";

        const end = process.hrtime.bigint();
        const seconds = Number(end - start) / 1e9;
        this.metrics.httpHistogram
          .labels(method, route, status)
          .observe(seconds);
      }),
    );
  }
}
