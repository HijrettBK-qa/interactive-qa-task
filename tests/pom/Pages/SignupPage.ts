import { Page, expect } from "@playwright/test";


export default class SignupPage {
    page: Page;

    constructor(page: Page) {

        this.page = page;
    }

    async goToSignup() { await this.page.goto('https://automationexercise.com/login') };

    async verifyPage() { await expect(this.page).toHaveTitle("Automation Exercise - Signup / Login"); }
    async consentBtn() {
        const consentButton = this.page.getByRole('button', { name: 'Consent' });
      
        if (await consentButton.isVisible()) {
          await consentButton.click();
        }
      }
    async fillName(name: string) {
        await this.page.getByPlaceholder("Name").fill(name);
    }
    async fillEmail(email: string) {
        await this.page.getByTestId('signup-email').fill(email);
    }

    async clickSignupBtn() { await this.page.getByTestId("signup-button").click(); }
    async verifyNameIsFilled(name: string) { await expect(this.page.locator("div.required.form-group input#name")).toHaveValue(name) };
    async verifyEmailIsFilled(email: string) { await expect(this.page.locator("div.required.form-group input#email")).toHaveValue(email) };
    async verifyEmail() { };
    async selectPronouns() { await this.page.getByRole('radio', { name: 'Mrs.' }).check(); }
    async fillBirthDate(day: string, month: string, year: string) {
        await this.page.locator('#days').selectOption(day);
        await this.page.locator('#months').selectOption(month);
        await this.page.locator('#years').selectOption(year);
    }
    async fillPassword(password: string) {
        await this.page.getByTestId("password").fill(password);
    }

    async fillFirstName(name: string) {
        await this.page.getByTestId("first_name").fill(name);
    }
    async fillLastName(lastname: string) {
        await this.page.getByTestId("last_name").fill(lastname);

    }
    async fillAdress(street: string, country: string, state: string, city: string, zipcode: string) {
        await this.page.getByTestId("address").fill(street);
        await this.page.getByTestId("country").selectOption(country);
        await this.page.getByTestId("state").fill(state);
        await this.page.getByTestId("city").fill(city)
        await this.page.getByTestId("zipcode").fill(zipcode);

    }
    async fillMobileNumber(number: string) { this.page.getByTestId("mobile_number").fill(number); }
    async verifySignUp() {
        await expect(this.page.locator('b')).toContainText('Account Created!');
    }

    async createAccount() { await this.page.getByTestId("create-account").click(); }

    async verifyExistingEmailCannotBeUsed() {
        await expect(this.page.locator('#form')).toContainText('Email Address already exist!');
    }

}
