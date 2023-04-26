import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {signupPage} from '@pages/SignupPage'

Given("A web browser is at the demo home page", () => {
  cy.visit("/");
});

When("A user navigate to signup page", () => {
  cy.visit("#/register");
});

When("A user enters the username {string}, the email {string}, the password {string}, and clicks on the signin button", (username,email,password) => {
  signupPage.submitSignup(username,email,password)
  
});

Then("A user should access the home page successfully", () => {
  cy.get('a[href="#settings"]').should("have.attr","href")
});

