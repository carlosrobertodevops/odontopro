# ========= deps: instala dependências e prisma client =========
FROM node:20-bookworm-slim AS deps
WORKDIR /app/api
RUN apt-get update && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*
COPY package*.json ./
RUN npm ci --ignore-scripts

# gerar prisma client usando schema do monorepo
WORKDIR /app
COPY prisma ./prisma
WORKDIR /app/api
RUN npx prisma generate --schema=../prisma/schema.prisma

# ========= builder: compila Nest =========
FROM node:20-bookworm-slim AS builder
WORKDIR /app/api
RUN apt-get update && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*
COPY --from=deps /app/api/node_modules ./node_modules
COPY . .
COPY --from=deps /app/prisma /app/prisma
RUN npm run build

# ========= runner: produção =========
FROM node:20-bookworm-slim AS runner
WORKDIR /app/api
ENV NODE_ENV=production
RUN apt-get update && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/api/node_modules ./node_modules
COPY --from=builder /app/api/dist ./dist

EXPOSE 4000
CMD ["node", "dist/main.js"]