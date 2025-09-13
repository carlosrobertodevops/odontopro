import { NextResponse } from "next/server";
import * as promClient from "prom-client";

const g: any = global as any;
const registry: promClient.Registry =
  g.__PROM_REGISTRY__ || new promClient.Registry();
if (!g.__PROM_REGISTRY__) {
  promClient.collectDefaultMetrics({ register: registry, prefix: "web_" });
  g.__PROM_REGISTRY__ = registry;
}

export async function GET() {
  const body = await registry.metrics();
  return new NextResponse(body, {
    status: 200,
    headers: { "Content-Type": registry.contentType },
  });
}
