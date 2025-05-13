Proceed to perform the following tasks by creating a git repository which will contain all the work including answers
to the questions below.

• Can you review the website and pick six most important user journeys from the site?

- Yes, after reviewing the website, here are the six most important user journeys:

1. Add Products to Cart and Verify Them and the Quantity
This is a core e-commerce action. Users expect the cart to accurately reflect the items they select, including correct quantities.

2. Search for Products, Verify Results, Then Add to Cart
The search feature empowers users to find specific items. If the results are irrelevant, it can lead to user frustration or abandonment.
Improvement: When hovering over a product, the image disappears and the section turns orange, making it harder to compare products visually.

3. Add Items to Cart Without Signing Up, Then Sign Up
It's crucial that items added before account creation remain in the cart afterward. If not, users may feel their effort was wasted.

4. Login and Place an Order
This is the most typical purchase flow. Any failure here directly impacts conversions.

5. Register and Place an Order
This flow ensures new users can register and immediately complete a transaction without friction.

6. Delete Account
Users should be able to delete their accounts easily. Any technical issues or friction during this process can damage user trust.
I've seen users in a previous role express significant frustration over problems in this area.


• Out of the six user journeys proceed to pick four journeys to script against and explain why you picked these
journeys?

1. Signing Up
This is the entry point for many user flows. Without a successful signup, users can’t proceed to checkout. It's critical to test this journey frequently and include it in smoke and regression test suites.

2. Purchasing Process (Login and Place an Order)
This is the most vital business-critical flow. Ensuring users can log in and complete a purchase without bugs is essential to the platform’s success. If this flow breaks, it would lead to immediate business impact.

3. Search for Products, Then Add to Cart
Searching is often the first interaction a user has with a catalog. If the search produces irrelevant or no results, users may abandon the site.
Improvements:

The UI hides product images on hover, which is frustrating.

Pressing "Enter" in the search field should trigger the search automatically.

4. Delete Account
Users should always feel in control of their data. Making the account deletion process smooth and transparent is key for trust and brand integrity.
In my past experience, friction in this area caused significant negative feedback from users.

* Which framework and programming language do you intend to use and why?

I’ve selected Playwright as the automation framework and TypeScript as the programming language.

Reasons for this choice:
- Performance and Efficiency
Playwright is faster and more reliable than Selenium and Cypress, enabling quicker feedback from tests.

- Cross-Browser Support
It supports Chromium, Firefox, and WebKit—all out of the box—allowing comprehensive test coverage across major browsers.

- TypeScript Integration
TypeScript offers strong typing, better developer experience, and enhanced maintainability. Playwright works seamlessly in a Node.js + TypeScript setup.

- Built-in Test Runner
Playwright’s test runner includes powerful features like:

- Parallel test execution

- Screenshot and video capture

- HTML reporting

- Automatic trace collection for debugging

- Readable and Maintainable Test Code
The test syntax (describe, test) is clean and easy to follow. This makes it accessible even to non-technical team members without requiring additional tools like Gherkin.

- Hands-On Experience
I’ve recently implemented a test automation framework using Playwright and TypeScript, which deepened my practical understanding of its capabilities and strengths.

For these reasons, Playwright with TypeScript provides a modern, scalable, and maintainable approach to end-to-end testing.














- Signing up 
The user cannot purchase anything without signing up. It should be tested in the first place. It should be added to the smoke and regression test suites.

- Go to cart without signing up then signup 
I would definitely write a review if it's not
Improvement: There is no back button after viewing the page. 

- Go to cart after logging in and place the order
It is the main expected process from this website. That's why I've chosen this flow. If this flow doesn't work properly and there is a bug, it would be the critical range but to be fixed immediately.

- Search products - and verify then add some of them to the cart - If there is a search button, it means to give the customer free will. If they see irrelevant items, it would make them as they were misled on purpose. And it would cause loosing customers.
Improvement: When the user hover any product over, it goes orange without image of the item. It's annoying. The appearence of the product is very important thing to look. They would like to compare the products each other by looking them all. But each time it goes orange and it is frustrating for user. 

Improvement: After entering a product to the search box, when the user click on the "enter" key in the keyboard, it should search automatically.
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

