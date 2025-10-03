class dashboard_pom {
  elements = {
    directory_button: () => cy.contains('a.oxd-main-menu-item', 'Directory'),
    help_button: () => cy.get('button[title="Help"]'),
    triangle_button: () => cy.get('div[class="--toggle"] button[type="button"]'),
    reset_button: () => cy.get('button[type="reset"]'),
    search_button: () => cy.get('button[type="submit"]'),
    jobtitle_dropdown: () => cy.get('.oxd-select-text-input:first'),
    location_dropdown: () => cy.get('.oxd-select-text-input:eq(1)'), 
    selector_dropdown: () => cy.get('.oxd-select-option'),
    employee_name: () => cy.get('input[placeholder="Type for hints..."]')
  };

  //Assertion Directory
  visit_directory() {
    cy.url().should('include', '/directory/viewDirectory'); 
    cy.get('h6.oxd-text--h6').should('contain.text', 'Directory')
  }

  click_directory() {
    this.elements.directory_button().should('be.visible');
    this.elements.directory_button().click();
  }

  click_help() {
    this.elements.help_button().should('be.visible');
    this.elements.help_button().click();
  }

  click_triangle() {
    this.elements.triangle_button().should('be.visible');
    this.elements.triangle_button().click();
  }

  click_job() {
    this.elements.jobtitle_button().should('be.visible');
    this.elements.jobtitle_button().click();
  }

  click_search() {
    this.elements.search_button().should('be.visible');
    this.elements.search_button().click();
  }

  click_reset() {
    this.elements.reset_button().should('be.visible');
    this.elements.reset_button().click();
  }

  select_job(job) {
    this.elements.jobtitle_dropdown().click();
    this.elements.selector_dropdown().contains(job).click();
  }

  select_location(location) {
    this.elements.location_dropdown().click();
    this.elements.selector_dropdown().contains(location).click();
  }

  inputname (name) {
    this.elements.employee_name().type(name)
    .should('have.value', name)
  }

  //Assertion
  up_triangle_button() {
    cy.url().should('include', '/viewDirectory')
    this.elements.reset_button().should('not.be.visible');
    this.elements.search_button().should('not.be.visible');
  }

  down_triangle_button() {
    cy.url().should('include', '/viewDirectory')
    this.click_triangle()
    this.elements.reset_button().should('be.visible');
    this.elements.reset_button().should('be.visible');
  }

  assert_searchJobTitle() {
    cy.get('.orangehrm-container')
    .should('contain.text', 'QA Engineer');
  }

  assert_searchLocation() {
    cy.get('.orangehrm-container')
    .should('contain.text', 'Texas R&D');
  }

  assert_name(expectedName) {
  this.elements.employee_name()
  .should('have.value', expectedName);
  }

  assert_reset() {
    cy.get('.oxd-table-filter')
    .should('contain.text', '-- Select --')
  }

  assert_resetName() {
    this.elements.employee_name().should('be.visible')
    .and('have.attr', 'placeholder', 'Type for hints...');
  }

  assert_invalidName() {
    cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
      .should('be.visible')
      .and('contain.text', 'Invalid');
  }
}

export default new dashboard_pom();