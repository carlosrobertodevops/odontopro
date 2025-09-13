import { NextResponse } from "next/server";
import client, { Registry, collectDefaultMetrics } from "prom-client";

const g: any = global as any;
const registry: Registry = g.__PROM_REGISTRY__ || new client.Registry();
if (!g.__PROM_REGISTRY__) {
  collectDefaultMetrics({ register: registry, prefix: "web_" });
  g.__PROM_REGISTRY__ = registry;
}

export async function GET() {
  const body = await registry.metrics();
  return new NextResponse(body, {
    status: 200,
    headers: { "Content-Type": registry.contentType },
  });
}
