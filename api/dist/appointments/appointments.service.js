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
exports.AppointmentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AppointmentsService = class AppointmentsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        return this.prisma.appointment.create({ data: dto });
    }
    async findMany(q) {
        const { skip = 0, take = 20, status, from, to } = q;
        return this.prisma.appointment.findMany({
            skip,
            take,
            orderBy: { startAt: "asc" },
            where: {
                status: status ?? undefined,
                startAt: {
                    gte: from ? new Date(from) : undefined,
                    lte: to ? new Date(to) : undefined,
                },
            },
        });
    }
    async findOne(id) {
        const item = await this.prisma.appointment.findUnique({ where: { id } });
        if (!item)
            throw new common_1.NotFoundException("Appointment not found");
        return item;
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.appointment.update({ where: { id }, data: dto });
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.appointment.delete({ where: { id } });
        return { ok: true };
    }
};
exports.AppointmentsService = AppointmentsService;
exports.AppointmentsService = AppointmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppointmentsService);
//# sourceMappingURL=appointments.service.js.map