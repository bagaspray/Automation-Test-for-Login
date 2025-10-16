class changePassword_pom {
  elements = {
    help_button: () => cy.get('button[title="Help"]'),
    save_button: () => cy.get('button[type="submit"]'),
    cancel_button: () => cy.get('button[class="oxd-button oxd-button--medium oxd-button--ghost"]'),
    profileDropdown: () => cy.get('.oxd-userdropdown-tab'),
    changePassword_button: () => cy.get(':nth-child(3) > .oxd-userdropdown-link'),
    currentPassword_input: () => cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
    newPassword_input: () => cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'),
    confirmPassword_input: () => cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
  };

  //Assertion Change Password
  visit_changePassword() {
    cy.url().should('include', 'pim/updatePassword'); 
    cy.get('.oxd-text.oxd-text--h6.orangehrm-main-title').should('contain.text', 'Update Password')
  }

  click_changePassword() {
    this.elements.profileDropdown().should('be.visible');
    this.elements.profileDropdown().click();
    this.elements.changePassword_button().should('be.visible');
    this.elements.changePassword_button().click();
  }

  type_currentPassword(currentPassword) {
    this.elements.currentPassword_input().type(currentPassword);
  }

  type_newPassword(newPassword) {
    this.elements.newPassword_input().type(newPassword);
  }

  type_confirmPassword(confirmPassword) {
    this.elements.confirmPassword_input().type(confirmPassword);
  }
  
  click_save() {
    this.elements.save_button().should('be.visible');
    this.elements.save_button().click();
  }

  save(currentPassword, newPassword, confirmPassword) {
    this.type_currentPassword(currentPassword);
    this.type_newPassword(newPassword);
    this.type_confirmPassword(confirmPassword);
    this.elements.save_button().should('be.visible');
    this.click_save();
  }

  click_cancel() {
    this.elements.cancel_button().should('be.visible');
    this.elements.cancel_button().click();
  }

  click_help() {
    this.elements.help_button().should('be.visible');
    this.elements.help_button().click();
  }

  //Assertion
  changePassword_success() {
    cy.url().should('include', '/updatePassword')
    cy.contains('Successfully Saved').should('be.visible')
  }

  changePassword_currentPasswordIncorrect() {
    cy.url().should('include', '/updatePassword')
    cy.contains('Current Password is Incorrect').should('be.visible')
  }

  changePassword_PasswordNotMatch() {
    cy.url().should('include', '/updatePassword')
    cy.contains('Passwords do not match').should('be.visible')
  }

  changePassword_PasswordRequired() {
    cy.url().should('include', '/updatePassword')
    cy.contains('Required').should('be.visible')
  }

  changePassword_PasswordWithSpace() {
    cy.url().should('include', '/updatePassword')
    cy.contains('Your password should not contain spaces').should('be.visible')
  }

  changePassword_Should7() {
    cy.url().should('include', '/updatePassword')
    cy.contains('Should have at least 7 characters').should('be.visible')
  }

  changePassword_MinimumNumber() {
    cy.url().should('include', '/updatePassword')
    cy.contains('Your password must contain minimum 1 number').should('be.visible')
  }

  changePassword_MinimumLetter() {
    cy.url().should('include', '/updatePassword')
    cy.contains('Your password must contain minimum 1 lower-case letter').should('be.visible')
  }

}
export default new changePassword_pom();