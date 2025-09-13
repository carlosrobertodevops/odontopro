import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
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
  constructor(private readonly prisma: PrismaService) {}

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
    // Durante a geração do OpenAPI, não tente acessar o banco
    if (process.env.SKIP_PRISMA_CONNECT === "1") {
      return { status: "skipped", db: [{ ok: 1 }] };
    }
    const result = await this.prisma.$queryRawUnsafe("SELECT 1 as ok");
    return { status: "ok", db: result };
  }
}
