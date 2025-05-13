import {test, expect } from "../Fixtures/Fixtures"

test.describe("Searcing Product", async()=>{

    test.use({ storageState: ".auth/customer01.json" });

    test("Searching for products", async({product})=>{

        await product.goProductsPage();
        await product.searchProduct("dress");
        await product.verifyRelevantProduct("dress");

    });

})