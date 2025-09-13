/**
 * Endpoints simples de "saúde" da API.
 * GET /health     -> { status: "ok", service: "api" }
 * GET /health/db  -> testa conexão ao DB (SELECT 1)
 */
import { Controller, Get } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";

class HealthOkDto {
  status!: string;
  service!: string;
}
class DbOkDto {
  status!: string;
  db!: any;
}

@ApiTags("Health")
@Controller("health")
export class HealthController {
  private prisma = new PrismaClient();

  @Get()
  @ApiOperation({ summary: "Status da API" })
  @ApiOkResponse({ type: HealthOkDto })
  ok(): HealthOkDto {
    return { status: "ok", service: "api" };
  }

  @Get("db")
  @ApiOperation({ summary: "Teste de conexão ao banco" })
  @ApiOkResponse({ type: DbOkDto })
  async db(): Promise<DbOkDto> {
    const result = await this.prisma.$queryRawUnsafe("SELECT 1 as ok");
    return { status: "ok", db: result };
  }
}
