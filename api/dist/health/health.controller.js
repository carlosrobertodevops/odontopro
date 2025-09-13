"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const swagger_1 = require("@nestjs/swagger");
class HealthOkDto {
}
class DbOkDto {
}
let HealthController = class HealthController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    ok() {
        return { status: "ok", service: "api" };
    }
    async db() {
        if (process.env.SKIP_PRISMA_CONNECT === "1") {
            return { status: "skipped", db: [{ ok: 1 }] };
        }
        const result = await this.prisma.$queryRawUnsafe("SELECT 1 as ok");
        return { status: "ok", db: result };
    }
};
exports.HealthController = HealthController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Status da API" }),
    (0, swagger_1.ApiOkResponse)({ type: HealthOkDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", HealthOkDto)
], HealthController.prototype, "ok", null);
__decorate([
    (0, common_1.Get)("db"),
    (0, swagger_1.ApiOperation)({ summary: "Teste de conexão ao banco" }),
    (0, swagger_1.ApiOkResponse)({ type: DbOkDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthController.prototype, "db", null);
exports.HealthController = HealthController = __decorate([
    (0, swagger_1.ApiTags)("Health"),
    (0, common_1.Controller)("health"),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HealthController);
//# sourceMappingURL=health.controller.js.map