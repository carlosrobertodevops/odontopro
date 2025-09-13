# ===== deps =====
FROM node:20-bookworm-slim AS deps
WORKDIR /app/api
RUN apt-get update && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*

# copie o package.json da pasta api (pois o contexto agora é a raiz do repo)
COPY api/package*.json ./
RUN npm ci --ignore-scripts

# gerar prisma client usando o schema do monorepo
WORKDIR /app
COPY prisma ./prisma
WORKDIR /app/api
RUN npx prisma generate --schema=../prisma/schema.prisma

# ===== builder =====
FROM node:20-bookworm-slim AS builder
WORKDIR /app/api
RUN apt-get update && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*

COPY --from=deps /app/api/node_modules ./node_modules
# copie todo o código da pasta api (o contexto é a raiz)
COPY api/ .
COPY --from=deps /app/prisma /app/prisma

RUN npm run build

# ===== runner =====
FROM node:20-bookworm-slim AS runner
WORKDIR /app/api
ENV NODE_ENV=production

RUN apt-get update && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/api/node_modules ./node_modules
COPY --from=builder /app/api/dist ./dist

EXPOSE 4000
CMD ["node", "dist/main.js"]
