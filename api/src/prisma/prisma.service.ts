import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";

// Lê os flags (avaliados na carga do módulo)
const OPENAPI_ONLY = process.env.OPENAPI_ONLY === "1";
const SKIP_CONNECT = process.env.SKIP_PRISMA_CONNECT === "1";

// Carrega a classe real do Prisma somente se NÃO for geração de OpenAPI
let PrismaClientCtor: any = null;
if (!OPENAPI_ONLY) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    PrismaClientCtor = require("@prisma/client").PrismaClient;
  } catch {
    PrismaClientCtor = null;
  }
}

// Stub mínimo compatível com PrismaClient para rodar sem DB
class PrismaClientStub {
  async $connect() {}
  async $disconnect() {}
  async $queryRawUnsafe(_q: string) {
    return [{ ok: 1 }];
  }
  $on() {}
}

const Base = (PrismaClientCtor || PrismaClientStub) as {
  new (): PrismaClientStub;
};

@Injectable()
export class PrismaService extends Base implements OnModuleInit {
  async onModuleInit() {
    if (OPENAPI_ONLY || SKIP_CONNECT || !PrismaClientCtor) return;
    // @ts-ignore - presente na implementação real
    if (typeof super.$connect === "function") await super.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    // @ts-ignore - presente na implementação real
    this.$on?.("beforeExit", async () => {
      await app.close();
    });
  }
}
