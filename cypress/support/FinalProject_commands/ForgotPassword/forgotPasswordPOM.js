class forgotPassword_pom {
  elements = {
    forgotPassword_button: () => cy.get('.orangehrm-login-forgot'),
    username_input: () => cy.get('input[name="username"]'),
    cancel_button: () => cy.get('button[type="button"]'),
    submit_button: () => cy.get('button[type="submit"]'),
  };

  click_forgotPassword() {
    this.elements.forgotPassword_button().click();
  }

  //Assertion Visit Forgot Password Page
  visit_forgotPassword() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
    cy.url().should('include', '/requestPasswordResetCode');
  }

  type_username(username) {
    this.elements.username_input().type(username);
  }
  
  click_submit() {
    this.elements.submit_button().should('be.visible');
    this.elements.submit_button().click();
  }

  submit(username) {
    this.type_username(username);
    this.elements.submit_button().should('be.visible');
    this.click_submit();
  }

  click_cancel() {
    this.elements.cancel_button().should('be.visible');
    this.elements.cancel_button().click();
  }

  //Assertion
  resetPassword_success() {
    cy.url().should('include', '/sendPasswordReset')
    cy.contains('Reset Password link sent successfully').should('be.visible')
  }

  forgotPassword_required() {
    cy.get('.oxd-input-field-error-message').should('have.length', 1).and('contain.text', 'Required');
  }

  backToLogin() {
    cy.url().should('include', '/login')
    cy.contains('Login').should('be.visible')
  }

}
export default new forgotPassword_pom();