import { PrismaService } from "../prisma/prisma.service";
import { CreateAppointmentDto } from "./dto/create-appointment.dto";
import { UpdateAppointmentDto } from "./dto/update-appointment.dto";
import { QueryAppointmentDto } from "./dto/query-appointment.dto";
export declare class AppointmentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateAppointmentDto): Promise<any>;
    findMany(q: QueryAppointmentDto): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, dto: UpdateAppointmentDto): Promise<any>;
    remove(id: string): Promise<{
        ok: boolean;
    }>;
}
