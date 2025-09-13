import { AppointmentStatus } from "./create-appointment.dto";
export declare class QueryAppointmentDto {
    skip?: number;
    take?: number;
    status?: AppointmentStatus;
    from?: string;
    to?: string;
}
