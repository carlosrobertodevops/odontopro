import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { AppointmentsService } from "./appointments.service";
import { CreateAppointmentDto } from "./dto/create-appointment.dto";
import { UpdateAppointmentDto } from "./dto/update-appointment.dto";
import { QueryAppointmentDto } from "./dto/query-appointment.dto";
import { IdParamDto } from "./dto/id-param.dto";

@ApiTags("Appointments")
@Controller("appointments")
export class AppointmentsController {
  constructor(private readonly service: AppointmentsService) {}

  @Post()
  @ApiOperation({ summary: "Criar agendamento" })
  create(@Body() dto: CreateAppointmentDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: "Listar agendamentos (paginado/c filtragem)" })
  findMany(@Query() q: QueryAppointmentDto) {
    return this.service.findMany(q);
  }

  @Get(":id")
  @ApiOperation({ summary: "Buscar agendamento por ID" })
  findOne(@Param() { id }: IdParamDto) {
    return this.service.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Atualizar agendamento" })
  update(@Param() { id }: IdParamDto, @Body() dto: UpdateAppointmentDto) {
    return this.service.update(id, dto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Excluir agendamento" })
  @ApiOkResponse({ schema: { example: { ok: true } } })
  remove(@Param() { id }: IdParamDto) {
    return this.service.remove(id);
  }
}
