import { test, expect } from "../Fixtures/Fixtures";


test.describe("Login", async () => {
    test.use({ storageState: ".auth/customer01.json" });

    test('Login with auth', async ({ page, login }) => {

        await login.loggedInPage();
        await login.verifyLogin("HBKK");

    });

})

test('Login without auth', async ({ page, login }) => {

    await login.goToLogin();
    await login.consentBtn()
    await login.fillEmail("hbkTest@gmail.com")
    await login.fillPassword("Test54321!")
    await login.loginBtn();
    await login.verifyLogin("HBKK");

});


