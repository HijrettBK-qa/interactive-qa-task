Proceed to perform the following tasks by creating a git repository which will contain all the work including answers
to the questions below.

• Can you review the website and pick six most important user journeys from the site?

- Yes, after reviewing the website, here are the six most important user journeys:

1. Add Products to Cart and Verify Them and the Quantity
This is a important e-commerce action. Users expect the cart to accurately reflect the items they select,with correct quantities.

2. Search for Products, Verify Results
The search feature empowers users to find specific items. If the results are irrelevant, it can lead to user frustration or abandonment.

3. Add Items to Cart Without Signing Up, Then Sign Up
It's crucial that items added before account creation remain in the cart afterward. If not, users may feel their effort was wasted.

4. Login and Place an Order
This is the most typical purchase flow. This is the reason why this website exist. So, this process should work flawless.

5. Register and Place an Order
This flow ensures new users can register and immediately complete a transaction without friction.

6. Delete Account
Users should be able to delete their accounts easily. 


• Out of the six user journeys proceed to pick four journeys to script against and explain why you picked these
journeys?

1. Signing Up
This is the first step for new users. A broken signup flow means lost users and sales. It should be included in smoke/regression suites.

2. Login and Place an Order
The most business-critical flow. If this breaks, it affects revenue directly.

UI Observation:

There is no back button after viewing the page. The user needs to use the window's back arrow.

3. Search for Products and Verify Results
Often the first interaction. It should yield accurate, relevant results quickly.

UI Observation:

Product images disappear on hover—hurts UX.

Pressing "Enter" should initiate a search automatically.

4. Delete Account
Supports user trust and GDPR-style compliance. A smooth deletion flow reduces user frustration and increases brand credibility.

Past experience: Friction here caused user dissatisfaction and complaints.


• Which framework and programming language do you intend to use and why?

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


Note: After starting the implementation, I ended up automating all six flows mentioned above—which turned out to be very useful for broader regression coverage. :)