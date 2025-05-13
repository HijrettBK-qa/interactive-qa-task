import { Page, expect } from "@playwright/test";

export default class LoginPage {

    page: Page;

    constructor(page: Page) {

        this.page = page;
    }

    async goToLogin(){ await this.page.goto("https://automationexercise.com/login")};
    async loggedInPage(){await this.page.goto("https://automationexercise.com/")};
    async consentBtn(){await this.page.getByRole('button', { name: 'Consent' }).click();}
    async fillEmail(email){ await this.page.getByTestId("login-email").fill(email)};
    async fillPassword(password){await this.page.getByTestId("login-password").fill(password)};
    async loginBtn(){ await this.page.getByTestId("login-button").click()}

    async verifyLogin(name:string){await expect(this.page.locator("#header")).toContainText(` Logged in as  ${name}`)}
    
}