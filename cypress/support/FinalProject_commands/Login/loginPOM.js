class login_pom {
  elements = {
    username_input: () => cy.get('input[name="username"]'),
    password_input: () => cy.get('input[name="password"]'),
    login_button: () => cy.get('button[type="submit"]'),
  };

  //Assertion Login
  visit_login() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.url().should('include', '/login');
  }

  type_username(username) {
    this.elements.username_input().type(username);
  }

  type_password(password) {
    this.elements.password_input().type(password);
  }

  click_login() {
    this.elements.login_button().click();
  }

  login(username, password) {
    this.type_username(username);
    this.type_password(password);
    this.elements.login_button().should('be.visible');
    this.click_login();
  }

  //Assertion
  login_success() {
    cy.url().should('include', '/dashboard')
    cy.contains('Time at Work').should('be.visible')
  }

  login_invalid_credentials() {
    cy.url().should('include', '/login')
    cy.contains('Invalid credentials').should('be.visible')
  }

  login_required(expectedCount) {
    cy.get('.oxd-input-field-error-message')
        .should('have.length', expectedCount)
        .and('contain.text', 'Required');
  }

}
export default new login_pom();