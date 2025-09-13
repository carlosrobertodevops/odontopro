import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";

export class IdParamDto {
  @ApiProperty({ format: "uuid" })
  @IsString()
  @IsUUID()
  id!: string;
}
