import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import {signinPage} from '@pages/SigninPage'
  

  
  When("A user navigate to sign in page", () => {
    cy.visit("#/login");
  });
  
  When("A user provides incorrect credentials, and clicks on the login button", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.email);
      cy.log(row.password);
      signinPage.submitLogin(row.email,row.password)
  
    });
  });
  
  Then("The error message {string} is displayed", (errorMessage) => {
    signinPage.elements.errorMessage().should("have.text", errorMessage);
  });
  
  