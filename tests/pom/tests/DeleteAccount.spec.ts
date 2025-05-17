import {test,expect} from "../Fixtures/Fixtures";
import { faker } from "@faker-js/faker/locale/en";

test("Delete the account",async({product,signup,login})=>{

    await signup.goToSignup();
        
    //Verify if the user is landed to the correct page
    await signup.verifyPage();

    await signup.consentBtn();
    const firstName = faker.person.firstName();
    const eMail= faker.internet.email();
    await signup.fillName(firstName);
    await signup.fillEmail(eMail);
    await signup.clickSignupBtn();
    await signup.selectPronouns();
    
    //Verify if the pre-filled info is correct
    await signup.verifyNameIsFilled(firstName);
    await signup.verifyEmailIsFilled(eMail)

    await signup.fillPassword("Test54321!")
    await signup.fillBirthDate("1","1","1990");
    await signup.fillFirstName("testname");
    await signup.fillLastName("testLastName");
    await signup.fillAdress("Teststreet","United States","Teststate","Indianapolis","1234")
    await signup.fillMobileNumber("123455677");
    await signup.createAccount();
   

    //Verify if the signup process is successful
    await signup.verifySignUp();
    await login.loggedInPage();
    
    //Delete the created account
    await product.deleteAccount();
    await product.verifyDeleteSuccessMessage();

    //Try to login again
    await login.goToLogin();
    await login.fillEmail(eMail);
    await login.fillPassword("Test54321!");
    await login.loginBtn();
    await product.verifyNoAccount();

})