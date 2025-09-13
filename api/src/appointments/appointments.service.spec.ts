import { Test } from "@nestjs/testing";
import { AppointmentsService } from "./appointments.service";
import { PrismaService } from "../prisma/prisma.service";
import { AppointmentStatus } from "./dto/create-appointment.dto";

describe("AppointmentsService", () => {
  let service: AppointmentsService;
  let prisma: jest.Mocked<PrismaService>;

  const now = new Date("2025-01-01T12:00:00Z");
  const mem: any[] = [];

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        AppointmentsService,
        {
          provide: PrismaService,
          useValue: {
            appointment: {
              create: jest.fn(async ({ data }) => {
                const rec = {
                  id: crypto.randomUUID(),
                  status: "SCHEDULED",
                  ...data,
                };
                mem.push(rec);
                return rec;
              }),
              findMany: jest.fn(
                async ({ skip = 0, take = 20, where, orderBy }) => {
                  let list = [...mem];
                  if (where?.status)
                    list = list.filter((x) => x.status === where.status);
                  if (where?.startAt?.gte)
                    list = list.filter(
                      (x) => new Date(x.startAt) >= where.startAt.gte,
                    );
                  if (where?.startAt?.lte)
                    list = list.filter(
                      (x) => new Date(x.startAt) <= where.startAt.lte,
                    );
                  if (orderBy?.startAt === "asc")
                    list.sort(
                      (a, b) => +new Date(a.startAt) - +new Date(b.startAt),
                    );
                  return list.slice(skip, skip + take);
                },
              ),
              findUnique: jest.fn(
                async ({ where: { id } }) =>
                  mem.find((x) => x.id === id) ?? null,
              ),
              update: jest.fn(async ({ where: { id }, data }) => {
                const i = mem.findIndex((x) => x.id === id);
                if (i < 0) throw new Error("not found");
                mem[i] = { ...mem[i], ...data };
                return mem[i];
              }),
              delete: jest.fn(async ({ where: { id } }) => {
                const i = mem.findIndex((x) => x.id === id);
                if (i < 0) throw new Error("not found");
                const [removed] = mem.splice(i, 1);
                return removed;
              }),
            },
          },
        },
      ],
    }).compile();

    service = moduleRef.get(AppointmentsService);
    prisma = moduleRef.get(PrismaService) as any;
    mem.length = 0;
  });

  it("cria e lista agendamentos", async () => {
    const a = await service.create({
      patientName: "Maria",
      startAt: now.toISOString(),
      status: AppointmentStatus.SCHEDULED,
    });

    expect(a.id).toBeDefined();
    const list = await service.findMany({ take: 10 });
    expect(list).toHaveLength(1);
    expect(list[0].patientName).toBe("Maria");
  });

  it("filtra por status e intervalo de datas", async () => {
    await service.create({ patientName: "A", startAt: "2025-01-01T10:00:00Z" });
    await service.create({
      patientName: "B",
      startAt: "2025-01-01T12:00:00Z",
      status: AppointmentStatus.CANCELED,
    });
    await service.create({ patientName: "C", startAt: "2025-01-01T14:00:00Z" });

    const list = await service.findMany({
      status: AppointmentStatus.SCHEDULED,
      from: "2025-01-01T11:00:00Z",
      to: "2025-01-01T15:00:00Z",
    });

    expect(list.map((x) => x.patientName)).toEqual(["C"]);
  });

  it("atualiza e remove", async () => {
    const a = await service.create({
      patientName: "X",
      startAt: now.toISOString(),
    });
    const u = await service.update(a.id, { notes: "trazer exames" });
    expect(u.notes).toBe("trazer exames");

    const r = await service.remove(a.id);
    expect(r).toEqual({ ok: true });
    const list = await service.findMany({});
    expect(list).toHaveLength(0);
  });
});
