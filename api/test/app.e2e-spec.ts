import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import * as request from "supertest";
import { AppModule } from "../src/app.module";

describe("API e2e", () => {
  let app: INestApplication;

  beforeAll(async () => {
    // Evita DB/metrics reais durante e2e local
    process.env.SKIP_PRISMA_CONNECT = "1";
    process.env.SKIP_METRICS = "1";
    process.env.OPENAPI_ONLY = "1";

    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({ whitelist: true, transform: true }),
    );
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it("GET /health", async () => {
    const r = await request(app.getHttpServer()).get("/health").expect(200);
    expect(r.body).toEqual({ status: "ok", service: "api" });
  });

  it("GET /metrics (Prometheus format)", async () => {
    const r = await request(app.getHttpServer()).get("/metrics").expect(200);
    expect(r.text).toContain("#"); // formato de exposição Prometheus
  });
});
