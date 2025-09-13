import { PrismaService } from "../prisma/prisma.service";
declare class HealthOkDto {
    status: string;
    service: string;
}
declare class DbOkDto {
    status: string;
    db: any;
}
export declare class HealthController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    ok(): HealthOkDto;
    db(): Promise<DbOkDto>;
}
export {};
