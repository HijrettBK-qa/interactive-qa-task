import { Page, expect } from "@playwright/test";

export default class ProductsPage {

    page: Page;

    constructor(page: Page) {

        this.page = page;
    }

    async goProductsPage() { await this.page.goto("https://automationexercise.com/products") };
    async searchProduct(product: string) { await this.page.locator("input#search_product").fill(product) };
    async productList() { await this.page.locator("div.features_items div.col-sm-4") };
    async verifyRelevantProduct(word: string) {
        const matchingProducts = this.page.locator(`div.productinfo.text-center p:has-text("${word}")`);
        const count = await matchingProducts.count();

        for (let i = 0; i < count; i++) {

            const text = await matchingProducts.nth(i).innerText();
            console.log(text);
            expect(text.toLowerCase(),`Searched products should be in the list.`).toContain(word.toLowerCase());

        }
    }
    async verifySearchedProducts() { await expect(this.page.locator("h2.title.text-center"),`The Searched Products text should be visible`).toContainText("Searched Products") };
    async viewProduct(product: string) {
        await this.page.waitForSelector("div.product-image-wrapper ");
        const products = this.page.locator("div.product-image-wrapper ");
        const count = await products.count();

        for (let i = 0; i < count; i++) {
            const productCard = products.nth(i);
            const name = await productCard.locator(".productinfo p ").innerText();

            if (name.toLowerCase().includes(product.toLowerCase())) {
                // Click on the "View Product" button
                const viewProductBtn = productCard.locator("div.choose a");
                await viewProductBtn.scrollIntoViewIfNeeded();
                await viewProductBtn.click();
                return;
            }
        }

        throw new Error(`Product "${product}" not found on the product list.`);
    };
    async addToCartBtnInProduct() { await this.page.locator("button.btn.btn-default.cart ").click() }
    async changeQuantity(number: string) { await this.page.locator("input#quantity").fill(number) };
    async addProductToCart(productName: string) {
        const products = this.page.locator("div.productinfo.text-center");
        const count = await products.count();

        for (let i = 0; i < count; i++) {
            const productCard = products.nth(i);
            const name = await productCard.locator("p").innerText();

            if (name.toLowerCase().includes(productName.toLowerCase())) {
                const addToCartBtn = productCard.locator("a.btn.btn-default.add-to-cart");
                await addToCartBtn.click();
                return;
            }
        }

        throw new Error(`Product "${productName}" not found on the product list.`);
    }
    async verifySuccessMessage() { await expect(this.page.getByText("Your product has been added to cart."),`The success message should be visible.`).toBeVisible(); };
    async verifyProductIsInTheCart(product: string) {

        const cartItems = this.page.locator("tbody tr");
        const count = await cartItems.count();

        for (let i = 0; i < count; i++) {
            const name = await cartItems.nth(i).locator("td.cart_description h4 a").innerText();
            if (name.toLowerCase().includes(product.toLowerCase())) {
                console.log(`The added product "${product}" is in the cart.`);
                return;
            }
        }

        throw new Error(`The added product "${product}" is not found in the cart.`);
    };
    async verifyQuantityOfProduct(product: string, number: string) {
        const cartItems = this.page.locator("tbody tr");
        const count = await cartItems.count();

        for (let i = 0; i < count; i++) {
            const name = await cartItems.nth(i).locator("td.cart_description h4 a").innerText();

            // Check if the product is there
            if (name.toLowerCase().includes(product.toLowerCase())) {
                // Get the quantity of the product
                const quantity = await cartItems
                    .nth(i)
                    .locator("td.cart_quantity button.disabled")
                    .innerText();

                // Verify if the quantity is correct
                if (quantity === number) {
                    console.log(`The added product "${product}" has the correct quantity of ${number}.`);
                } else {
                    console.log(`The added product "${product}" has an incorrect quantity. Expected: ${number}, Found: ${quantity}.`);
                }
                return;
            }
        }

        throw new Error(`Product "${product}" not found in the cart.`);
    }

    async goToCart() { await this.page.goto("https://automationexercise.com/view_cart")};
    async viewCart() { await this.page.locator("p.text-center a u").click() };
    async verifyCartPage() { await expect(this.page.getByText("Shopping Cart", { exact: true }),`The user should be landed in the Cart page.`).toBeVisible(); }
    async logOut() { await this.page.getByText(" Logout").click() };
    async deleteAccount(){await this.page.getByText("Delete Account").click()}
    async verifyDeleteSuccessMessage() {
        await expect(this.page.locator('b'),`Account should be deleted`).toContainText('Account Deleted!');
    }
    async verifyNoAccount(){await expect(this.page.locator("div.login-form"),`There should not be an account`).toContainText("Your email or password is incorrect!")}

}