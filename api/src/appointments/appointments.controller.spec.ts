import { Test } from "@nestjs/testing";
import { AppointmentsController } from "./appointments.controller";
import { AppointmentsService } from "./appointments.service";
import { AppointmentStatus } from "./dto/create-appointment.dto";

describe("AppointmentsController", () => {
  let controller: AppointmentsController;
  const svc = {
    create: jest.fn(),
    findMany: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AppointmentsController],
      providers: [{ provide: AppointmentsService, useValue: svc }],
    }).compile();

    controller = moduleRef.get(AppointmentsController);
    jest.clearAllMocks();
  });

  it("POST /appointments", async () => {
    svc.create.mockResolvedValue({ id: "1", patientName: "A" });
    const res = await controller.create({
      patientName: "A",
      startAt: "2025-01-01T10:00:00Z",
    });
    expect(res.id).toBe("1");
  });

  it("GET /appointments (lista)", async () => {
    svc.findMany.mockResolvedValue([{ id: "1" }]);
    const res = await controller.findMany({
      take: 10,
      status: AppointmentStatus.SCHEDULED,
    });
    expect(res).toHaveLength(1);
  });

  it("PATCH /appointments/:id", async () => {
    svc.update.mockResolvedValue({ id: "1", notes: "ok" });
    const res = await controller.update({ id: "1" }, { notes: "ok" });
    expect(res.notes).toBe("ok");
  });

  it("DELETE /appointments/:id", async () => {
    svc.remove.mockResolvedValue({ ok: true });
    const res = await controller.remove({ id: "1" });
    expect(res).toEqual({ ok: true });
  });
});
