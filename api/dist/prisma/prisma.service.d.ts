import { INestApplication, OnModuleInit } from "@nestjs/common";
declare class PrismaClientStub {
    $connect(): Promise<void>;
    $disconnect(): Promise<void>;
    $queryRawUnsafe(_q: string): Promise<{
        ok: number;
    }[]>;
    $on(): void;
}
declare const Base: {
    new (): PrismaClientStub;
};
export declare class PrismaService extends Base implements OnModuleInit {
    onModuleInit(): Promise<void>;
    enableShutdownHooks(app: INestApplication): Promise<void>;
}
export {};
