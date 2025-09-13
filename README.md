
# odontopro

.
├─ prisma/
│  └─ schema.prisma
├─ src/                  # (seu Next.js)
│  └─ app/...
├─ api/                  # ⬅️ novo serviço NestJS
│  ├─ src/
│  │  ├─ main.ts
│  │  ├─ app.module.ts
│  │  ├─ prisma/
│  │  │  ├─ prisma.module.ts
│  │  │  └─ prisma.service.ts
│  │  └─ health/
│  │     ├─ health.module.ts
│  │     └─ health.controller.ts
│  ├─ package.json
│  ├─ tsconfig.json
│  ├─ tsconfig.build.json
│  ├─ nest-cli.json
│  └─ Dockerfile
├─ docker-compose.local.yml
├─ docker-compose.coolify.yml
├─ next.config.mjs (ou next.config.js)
├─ tsconfig.json
├─ tailwind.config.ts
├─ postcss.config.js
├─ .env.local
└─ .env.coolify


