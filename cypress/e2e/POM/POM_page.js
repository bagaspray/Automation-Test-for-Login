class POM_page {
  elements = {
    username_input: () => cy.get('input[name="username"]'),
    password_input: () => cy.get('input[name="password"]'),
    login_button: () => cy.get('button[type="submit"]'),
    error_message: () => cy.get('.oxd-alert-content-text'),
    required_message: () => cy.get('.oxd-input-field-error-message')
  };

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
}

export default new POM_page();