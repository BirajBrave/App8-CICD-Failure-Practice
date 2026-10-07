import { test, expect } from '@playwright/test';

test("CI/CD Failure - Locator Issue", async ({ page }) => {

    await page.goto("https://qademo.com/");

    await expect(
        page.getByRole("heading", { name: "Your Playground for" })
    ).toBeVisible();

    // Intentional failure
    // await expect(
    //     page.getByRole("heading", { name: "Automated Testing" })
    // ).toBeVisible();

    //Checkpoint 1 — Intentionally Create One CI Failure
    await expect(page).toHaveTitle("DemoQA");

});