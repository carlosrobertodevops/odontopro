export declare enum AppointmentStatus {
    SCHEDULED = "SCHEDULED",
    COMPLETED = "COMPLETED",
    CANCELED = "CANCELED",
    NO_SHOW = "NO_SHOW"
}
export declare class CreateAppointmentDto {
    patientName: string;
    startAt: string;
    endAt?: string;
    status?: AppointmentStatus;
    notes?: string;
    userId?: string;
}
