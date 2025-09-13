# ========= Base para instalar dependências (inclui devDeps para rodar Prisma CLI) =========
FROM node:20-bookworm-slim AS deps
WORKDIR /app

# Pré-requisitos mínimos
RUN apt-get update && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
# Instala TODAS as deps (inclui devDeps -> importante para npx prisma)
RUN npm ci --ignore-scripts

# Copia apenas a pasta prisma (schema + migrations) para gerar client
COPY prisma ./prisma
RUN npx prisma generate

# ========= Builder: compila a app Next em modo standalone =========
FROM node:20-bookworm-slim AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# Copia node_modules da etapa deps
COPY --from=deps /app/node_modules ./node_modules
# Copia resto do código
COPY . .

# Build da aplicação
RUN npm run build

# ========= Runner: imagem final, mínima para produção =========
FROM node:20-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Usuário não-root
RUN addgroup --system --gid 1001 nodejs \
	&& adduser --system --uid 1001 nextjs

# Copia arquivos necessários do builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
# (Opcional, mas útil se você usa o Prisma em runtime para carregar schema etc.)
COPY --from=builder /app/prisma ./prisma

USER nextjs
EXPOSE 3000

# O "standalone" gera um server.js na raiz do que copiamos acima
CMD ["node", "server.js"]