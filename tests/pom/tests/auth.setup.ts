import { test as setup, expect } from "@playwright/test";

setup("Create customer 01 auth", async ({ page, context }) => {

    //Note for me: Find a way to use pom with it

    const email = "testhbkkk@gmail.com";
    const password = "Test54321!";
    const customer01AuthFile = ".auth/customer01.json";

    await page.goto("https://automationexercise.com/login");
    await page.getByRole('button', { name: 'Consent' }).click();
    await page.getByTestId("login-email").fill(email);
    await page.getByTestId("login-password").fill(password);
    await page.getByTestId("login-button").click();

    //login validation

    await context.storageState({ path: customer01AuthFile });

})

