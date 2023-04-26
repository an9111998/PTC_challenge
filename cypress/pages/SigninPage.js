class SigninPage {
  elements = {
    emailInput: () => cy.get("[type='email']"),
    passwordInput: () => cy.get("[type='password']"),
    signinBtn: () => cy.get("[type='submit']"),
    errorMessage: () => cy.get('[class=error-messages]')
  };

  typeEmail(email) {
    this.elements.emailInput().type(email);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }


  clickSignin(){
    this.elements.signinBtn().click()
  }

  submitLogin(email,password){
    this.elements.emailInput().type(email);
    this.elements.passwordInput().type(password);
    this.elements.signinBtn().click();
  }
}

export const signinPage = new SigninPage();
