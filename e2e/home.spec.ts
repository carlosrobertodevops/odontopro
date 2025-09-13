import { test, expect } from "@playwright/test";

test("Home abre e mostra OdontoPRO", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("body")).toBeVisible();
  await expect(page.getByText("OdontoPRO")).toBeVisible();
});
