import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";

export enum AppointmentStatus {
  SCHEDULED = "SCHEDULED",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
  NO_SHOW = "NO_SHOW",
}

export class CreateAppointmentDto {
  @ApiProperty({ example: "Maria da Silva" })
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  patientName!: string;

  @ApiProperty({ example: "2025-09-13T14:00:00.000Z" })
  @IsDateString()
  startAt!: string;

  @ApiPropertyOptional({ example: "2025-09-13T14:30:00.000Z" })
  @IsOptional()
  @IsDateString()
  endAt?: string;

  @ApiPropertyOptional({
    enum: AppointmentStatus,
    default: AppointmentStatus.SCHEDULED,
  })
  @IsOptional()
  @IsEnum(AppointmentStatus)
  status?: AppointmentStatus;

  @ApiPropertyOptional({ maxLength: 2000 })
  @IsOptional()
  @IsString()
  @MaxLength(2000)
  notes?: string;

  @ApiPropertyOptional({ example: "optional-user-id" })
  @IsOptional()
  @IsString()
  userId?: string;
}
