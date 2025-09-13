import { Controller, Get } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Controller("health")
export class HealthController {
  private prisma = new PrismaClient();

  @Get()
  ok() {
    return { status: "ok", service: "api" };
  }

  @Get("db")
  async db() {
    // teste sem depender de modelos do schema
    const result = await this.prisma.$queryRawUnsafe("SELECT 1 as ok");
    return { status: "ok", db: result };
  }
}