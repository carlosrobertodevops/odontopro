
# odontopro

# OdontoPRO — Web (Next.js) + API (NestJS) + Prisma + Observabilidade

Mono-repo com:
- **Web**: Next.js (App Router), Tailwind, shadcn, Stripe, métricas Prometheus em `/api/metrics`, tracing OTel.
- **API**: NestJS + Prisma, Swagger `/docs`, métricas Prometheus em `/metrics`, tracing OTel.
- **DB**: PostgreSQL (local via Compose; prod via Supabase ou Postgres próprio).
- **Observabilidade**: OpenTelemetry Collector → Tempo (traces) + Prometheus (métricas) + Grafana.

## Como subir (DEV)

---
```bash
docker compose -f docker-compose.local.yml up -d --build
# Web: http://localhost:3000
# API: http://localhost:4000/docs
# DB Adminer: http://localhost:8080
# Prometheus: http://localhost:9090
# Grafana: http://localhost:3001 (admin/admin)


---
```
---
```
odontopro/
├─ prisma/
│  ├─ schema.prisma                       # Modelo único do banco (compartilhado por Web e API)
│  └─ migrations/ …                       # (se houver) migrações do Prisma
│
├─ src/                                   # Next.js (App Router)
│  ├─ app/
│  │  ├─ layout.tsx                       # Importa ./globals.css e define <html/body>
│  │  ├─ globals.css                      # Tailwind base + tokens shadcn
│  │  ├─ api/
│  │  │  └─ metrics/route.ts              # Métricas Prometheus do Web (GET /api/metrics)
│  │  ├─ (public)/ …                      # Suas rotas/grupos existentes
│  │  └─ page.tsx                         # (se existir) página inicial
│  ├─ components/ …                       # Seus componentes (inclui ui/* — atenção ao case)
│  ├─ lib/ …                              # Utils/SDKs do front
│  ├─ providers/ …                        # React providers
│  ├─ utils/ …                            # Helpers
│  └─ types/ …                            # Tipos/DTOS front
│
├─ api/                                   # NestJS (API)
│  ├─ src/
│  │  ├─ main.ts                          # Bootstrap: CORS, Swagger, Métricas, inicia OTel
│  │  ├─ app.module.ts                    # Módulo raiz: Config, Prisma, Health, Metrics
│  │  ├─ swagger.ts                       # Setup do Swagger (UI /docs, JSON /docs-json)
│  │  ├─ tracing.ts                       # OpenTelemetry SDK (OTLP → Collector)
│  │  ├─ generate-swagger.ts              # Script p/ gerar dist/swagger.json sem HTTP
│  │  ├─ prisma/
│  │  │  ├─ prisma.module.ts              # Prisma como módulo global
│  │  │  └─ prisma.service.ts             # PrismaClient com lifecycle hooks
│  │  ├─ health/
│  │  │  ├─ health.module.ts
│  │  │  └─ health.controller.ts          # GET /health | GET /health/db
│  │  └─ metrics/
│  │     ├─ metrics.module.ts
│  │     ├─ metrics.service.ts            # Registry + histogram latência
│  │     └─ metrics.interceptor.ts        # Mede latência por rota/status
│  ├─ package.json                        # Nest deps (@nestjs/*, prisma, swagger, otel)
│  ├─ tsconfig.json
│  ├─ tsconfig.build.json
│  ├─ nest-cli.json
│  └─ Dockerfile                          # Docker multi-stage da API (deps → builder → runner)
│
├─ observability/
│  ├─ otel-collector.yaml                 # Collector: recebe OTLP e exporta p/ Tempo
│  ├─ tempo.yaml                          # Tempo: backend de traces (armazenamento local)
│  ├─ prometheus.yml                      # Prometheus: scrape web:/api/metrics e api:/metrics
│  └─ grafana/
│     └─ datasources/datasources.yml      # Provisiona datasources Prometheus e Tempo
│
├─ Dockerfile                             # Docker multi-stage do Web (deps → builder → runner)
├─ docker-compose.local.yml               # Ambiente DEV completo (db, migrate, web, api, adminer,
│                                         # collector, tempo, prometheus, grafana, stripe-listener)
├─ docker-compose.coolify.yml             # Produção no Coolify (web, api, migrate, observabilidade)
├─ docker-compose.coolify.postgres.yml    # Alternativa: Coolify com Postgres próprio (sem Supabase)
│
├─ next.config.mjs                        # Next config (standalone + images.domains)
├─ tsconfig.json                          # TS root (alias @ → src, moduleResolution: Bundler)
├─ tailwind.config.ts                     # Escopo de scan (src/app, components, lib, providers, utils)
├─ postcss.config.js                      # Tailwind + autoprefixer
├─ instrumentation.ts                     # (root) OTel SDK para o Web (Next server)
│
├─ .env.local                             # DEV local (DB local, Stripe test, API_PORT, OTEL_*)
├─ .env.coolify                           # Produção (Supabase OU Postgres próprio, Stripe, OTEL_*)
├─ .dockerignore
└─ .gitignore
```

---
```
---


```
---