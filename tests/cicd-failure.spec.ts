import{test, expect} from '@playwright/test';

test("Test CI/CD Using Github Action", async({page})=>{

    await page.goto("https://qademo.com/");

    await expect(page.getByRole("heading", {name: "Your Playground for"})).toBeVisible();
    await expect(page.getByRole("heading", {name: "Automated Testing"})).toBeVisible();



});