// Evita conexão real de DB e timers de métricas nos testes e2e
process.env.SKIP_PRISMA_CONNECT = process.env.SKIP_PRISMA_CONNECT || "1";
process.env.SKIP_METRICS = process.env.SKIP_METRICS || "1";
process.env.OPENAPI_ONLY = process.env.OPENAPI_ONLY || "1";
