"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const OPENAPI_ONLY = process.env.OPENAPI_ONLY === "1";
const SKIP_CONNECT = process.env.SKIP_PRISMA_CONNECT === "1";
let PrismaClientCtor = null;
if (!OPENAPI_ONLY) {
    try {
        PrismaClientCtor = require("@prisma/client").PrismaClient;
    }
    catch {
        PrismaClientCtor = null;
    }
}
class PrismaClientStub {
    async $connect() { }
    async $disconnect() { }
    async $queryRawUnsafe(_q) {
        return [{ ok: 1 }];
    }
    $on() { }
}
const Base = (PrismaClientCtor || PrismaClientStub);
let PrismaService = class PrismaService extends Base {
    async onModuleInit() {
        if (OPENAPI_ONLY || SKIP_CONNECT || !PrismaClientCtor)
            return;
        if (typeof super.$connect === "function")
            await super.$connect();
    }
    async enableShutdownHooks(app) {
        this.$on?.("beforeExit", async () => {
            await app.close();
        });
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)()
], PrismaService);
//# sourceMappingURL=prisma.service.js.map