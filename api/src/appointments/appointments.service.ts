import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateAppointmentDto } from "./dto/create-appointment.dto";
import { UpdateAppointmentDto } from "./dto/update-appointment.dto";
import { QueryAppointmentDto } from "./dto/query-appointment.dto";

@Injectable()
export class AppointmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateAppointmentDto) {
    return this.prisma.appointment.create({ data: dto });
  }

  async findMany(q: QueryAppointmentDto) {
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

  async findOne(id: string) {
    const item = await this.prisma.appointment.findUnique({ where: { id } });
    if (!item) throw new NotFoundException("Appointment not found");
    return item;
  }

  async update(id: string, dto: UpdateAppointmentDto) {
    await this.findOne(id);
    return this.prisma.appointment.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.appointment.delete({ where: { id } });
    return { ok: true };
  }
}
