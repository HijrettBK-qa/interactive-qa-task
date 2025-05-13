
import { test } from "../Fixtures/Fixtures"
import { faker } from "@faker-js/faker/locale/en";



test.describe("TS01-Product puchase flow without signing up", async () => {

    test.beforeEach(async ({ product, signup }) => {
        await product.goProductsPage();
        await signup.consentBtn();

    })

    test("TC01-Add a product from products list", async ({ product, cart, signup }) => {

        //add to the cart from products list
        await product.addProductToCart("Blue Top")
        await product.verifySuccessMessage();

        //go to the cart
        await product.viewCart();
        await product.verifyCartPage();
        await product.verifyProductIsInTheCart("Blue Top");
        await cart.proceedToCheckout();

        //signup
        await cart.loginForCheckout();
        const firstName = faker.person.firstName();
        const eMail = faker.internet.email();
        await signup.fillName(firstName);
        await signup.fillEmail(eMail);

        await signup.clickSignupBtn();
        await signup.selectPronouns();

        await signup.fillPassword("Test54321!")
        await signup.fillBirthDate("1", "1", "1990");
        await signup.fillFirstName("testname");
        await signup.fillLastName("testLastName");
        await signup.fillAdress("Teststreet", "United States", "Teststate", "Indianapolis", "1234")
        await signup.fillMobileNumber("123455677");
        await signup.createAccount();

        //Verify if the signup process is successful
        await signup.verifySignUp();

        //Verify if those items are added to the cart successfully
        await product.goToCart();
        await product.verifyCartPage();
        await product.verifyProductIsInTheCart("Blue Top")

    });

    test("TC-02-Add a product after viewing it", async ({ product, signup, cart }) => {

        //add to the cart after vieving the item
        await product.viewProduct("Blue Top");

        //add to the cart after viewing the item and increase the quantity
        await product.changeQuantity("3");

        //go to the cart
        await product.addToCartBtnInProduct();
        await product.viewCart();

        //check the cart if those items are added successfully
        await product.verifyProductIsInTheCart("Blue Top");
        await product.verifyQuantityOfProduct("Blue Top", "3");
        await cart.proceedToCheckout();

        //signup
        await cart.loginForCheckout();
        const firstName = faker.person.firstName();
        const eMail = faker.internet.email();
        await signup.fillName(firstName);
        await signup.fillEmail(eMail);

        await signup.clickSignupBtn();
        await signup.selectPronouns();

        await signup.fillPassword("Test54321!")
        await signup.fillBirthDate("1", "1", "1990");
        await signup.fillFirstName("testname");
        await signup.fillLastName("testLastName");
        await signup.fillAdress("Teststreet", "United States", "Teststate", "Indianapolis", "1234")
        await signup.fillMobileNumber("123455677");
        await signup.createAccount();

        //Verify if the signup process is successful
        await signup.verifySignUp();

        //Verify if those items are added to the cart successfully
        await product.goToCart();
        await product.verifyCartPage();
        await product.verifyProductIsInTheCart("Blue Top")
        await product.verifyQuantityOfProduct("Blue Top", "3");


    });

});
test.describe("TS02-Puchase without logging in", async () => {

    test.beforeEach(async ({ product, signup }) => {
        await product.goProductsPage();
        await signup.consentBtn();

    })


    test("TC01-Add a product from products list", async ({ product, login, cart }) => {

        //add to the cart from products list
        await product.addProductToCart("Blue Top")
        await product.verifySuccessMessage();

        //go to the cart
        await product.viewCart();
        await product.verifyCartPage();
        await product.verifyProductIsInTheCart("Blue Top");
        await cart.proceedToCheckout();

        //login
        await cart.loginForCheckout();
        await login.fillEmail("hbkTest@gmail.com");
        await login.fillPassword("Test54321!");
        await login.loginBtn();
        await login.verifyLogin("HBKK");

        //Verify if those items are added to the cart successfully
        await product.goToCart();
        await product.verifyCartPage();
        await product.verifyProductIsInTheCart("Blue Top")


    });

    test("TC02-Add a product after viewing it", async ({ product, login, cart }) => {


        //add to the cart after vieving the item
        await product.viewProduct("Blue Top");

        //add to the cart after viewing the item and increase the quantity
        await product.changeQuantity("3");

        //go to the cart
        await product.addToCartBtnInProduct();
        await product.viewCart();

        //check the cart if those items are added successfully
        await product.verifyProductIsInTheCart("Blue Top");
        await product.verifyQuantityOfProduct("Blue Top", "3");
        await cart.proceedToCheckout();

        //login
        await cart.loginForCheckout();
        await login.fillEmail("hbkTest@gmail.com");
        await login.fillPassword("Test54321!");
        await login.loginBtn();
        await login.verifyLogin("HBKK");

        //Verify if those items are added to the cart successfully
        await product.goToCart();
        await product.verifyCartPage();
        await product.verifyProductIsInTheCart("Blue Top")
        await product.verifyQuantityOfProduct("Blue Top", "3");


    });


    test.describe("Puchase without logging in", async () => {

        test.beforeEach(async ({ product, signup }) => {
            await product.goProductsPage();
            await signup.consentBtn();


        });






    });




});

