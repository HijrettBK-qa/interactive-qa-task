Proceed to perform the following tasks by creating a git repository which will contain all the work including answers
to the questions below.

• Can you review the website and pick six most important user journeys from the site?

- Add products to cart  and verify them and the quantity
When the user hover any product over, it goes orange without image of the item. It's annoying. The appearence of the product is very important thing to look. They would like to compare the products each other by looking them all. But each time it goes orange and it is frustrating for user. 

- Search products - and verify then add some of them to the cart - If there is a search button, it means to give the customer free will. If they see irrelevant items, it would make them as they were misled on purpose. And it would cause loosing customers.
- Go to cart without signing up then signup - verify if the added items are still in the cart - I would definitely write a review if it's not
- Go to cart after logging in and place the order - it's a simple expected process. It should work flawless.
- Go to cart after registering and place the order - this flow should also work as expected.
- Delete account - it made some customers frustrated in my previous company for some cases. If a user decides they no longer want to use the app, they should be able to delete their account without friction. Any obstacles or technical issues during this process can make users feel trapped or disrespected, which damages the brand's credibility.


• Out of the six user journeys proceed to pick four journeys to script against and explain why you picked these
journeys?
- Signing up - The user cannot purchase anything without signing up. It should be tested in the first place. It should be added to the smoke and regression test suites. 
- Go to cart without signing up then signup - verify if the added items are still in the cart 
I would definitely write a review if it's not
There is no back button after viewing the page. - improvement

- Go to cart after logging in and place the order
It is the main expected process from this website. That's why I've chosen this flow. If this flow doesn't work properly and there is a bug, it would be the critical range but to be fixed immediately.
- Search products - and verify then add some of them to the cart - If there is a search button, it means to give the customer free will. If they see irrelevant items, it would make them as they were misled on purpose. And it would cause loosing customers.
When the user click on the "enter" key in the keyboard, it should search automatically.
- Delete account - it made some customers frustrated in my previous company for some cases. If a user decides they no longer want to use the app, they should be able to delete their account without friction. Any obstacles or technical issues during this process can make users feel trapped or disrespected, which damages the brand's credibility.


• Proceed to choose the framework and programming language you intend on using and explain why you choose
them?

Based on my experience with Selenium, Cypress, and Playwright, I have chosen Playwright as the automation framework and TypeScript as the programming language.

There are the reasons behind this choice:

 - Performance and Efficiency: Playwright is faster compared to Selenium and Cypress, which significantly improves test execution time.

 - Cross-Browser Support: It supports Chromium, WebKit, and Firefox, making it suitable for comprehensive browser coverage.

 - First-Class TypeScript Support: Playwright works seamlessly with TypeScript in the Node.js environment. This combination allows for better type safety, autocomplete support, and maintainability of the codebase.

 - Built-in Test Runner: Playwright’s test runner offers powerful features, including:

    * Parallel test execution

    * Screenshot and video capture

    * HTML reports

    * Automatic tracing for debugging failed tests

 - Readable Test Structure: Writing test cases in TypeScript using Playwright's describe and test blocks makes the test framework highly readable. This helps even non-technical stakeholders understand the test cases without needing additional layers like Gherkin.
 That's why I've chosen TypeScript with Playwright. 

 - Recent Hands-On Experience: I’ve recently worked with Playwright and built an automation framework from scratch, which has further deepened my understanding of its capabilities.

For these reasons, I believe Playwright with TypeScript offers a modern, scalable, and maintainable solution for end-to-end test automation.

