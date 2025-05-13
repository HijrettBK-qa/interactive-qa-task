import { Page, expect } from "@playwright/test";

export default class CartPage {

    page: Page;

    constructor(page: Page) {

        this.page = page;
    }

    async proceedToCheckout(){await this.page.getByText("Proceed To Checkout").click()};
    
    async checkQuantityOfProduct(quantity:string){await expect(this.page.locator("td.cart_quantity")).toHaveValue(quantity)};
    async removeProduct(order: number) {
        await this.page.locator("td.cart_delete").nth(order).click();
      }

    async loginForCheckout(){(await this.page.waitForSelector("div.modal-body p.text-center a u")).click()};

}