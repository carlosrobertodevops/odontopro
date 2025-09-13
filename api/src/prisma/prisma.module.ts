import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

/** Prisma disponível globalmente. */
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
