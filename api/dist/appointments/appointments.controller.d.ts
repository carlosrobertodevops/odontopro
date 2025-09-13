import { AppointmentsService } from "./appointments.service";
import { CreateAppointmentDto } from "./dto/create-appointment.dto";
import { UpdateAppointmentDto } from "./dto/update-appointment.dto";
import { QueryAppointmentDto } from "./dto/query-appointment.dto";
import { IdParamDto } from "./dto/id-param.dto";
export declare class AppointmentsController {
    private readonly service;
    constructor(service: AppointmentsService);
    create(dto: CreateAppointmentDto): Promise<any>;
    findMany(q: QueryAppointmentDto): Promise<any>;
    findOne({ id }: IdParamDto): Promise<any>;
    update({ id }: IdParamDto, dto: UpdateAppointmentDto): Promise<any>;
    remove({ id }: IdParamDto): Promise<{
        ok: boolean;
    }>;
}
