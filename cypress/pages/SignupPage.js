class SignupPage {
  elements = {
    usernameInput: () => cy.get("[type='text']"),
    emailInput: () => cy.get("[type='email']"),
    passwordInput: () => cy.get("[type='password']"),
    signupBtn: () => cy.get("[type='submit']"),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  typeEmail(email) {
    this.elements.emailInput().type(email);
  }

  clickSignup(){
    this.elements.signupBtn().click()
  }

  submitSignup(username,email,password){
    this.elements.usernameInput().type(username);
    this.elements.emailInput().type(email);
    this.elements.passwordInput().type(password);
    this.elements.signupBtn().click();
  }
}

export const signupPage = new SignupPage();
