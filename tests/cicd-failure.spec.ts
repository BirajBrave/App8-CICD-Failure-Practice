import { test, expect } from '@playwright/test';

test("CI/CD Failure - Locator Issue", async ({ page }) => {

    await page.goto("https://qademo.com/");
    await expect(page).toHaveTitle("QA Demo - Your Playground for Automated Testing");

    await page.getByRole("button", {name: "Sign Up"}).click();
    await expect(page).toHaveURL("https://qademo.com/signup2");

    const emailAddress = page.getByPlaceholder("john@example.com");
    const phoneNumber = page.getByPlaceholder("+1 (555) 123-4567");
    const username = page.getByPlaceholder("johndoe (auto-generated if empty)");
    const password = page.getByPlaceholder("Create a strong password");
    const confirmPassword = page.getByPlaceholder("Re-enter your password");

    await emailAddress.fill("birajbrave@yahoo.com");
    await phoneNumber.fill("8010423294");
    await username.fill("Raj");
    await password.fill("mona@2015");
    await confirmPassword.fill("mona@2015");

    await page.locator('[data-testid="signup-submit3-button"]').click();

});