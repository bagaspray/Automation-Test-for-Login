import pom_code from './POM_page';

describe('Login Scenario', () => {
  beforeEach(() => {
    pom_code.visit_login();
  });

  it('TC001 - The user logs in using a valid username and password', () => {
    pom_code.login('Admin', 'admin123')

    // ✅ Expected result
    cy.url().should('include', '/dashboard')
    cy.contains('Time at Work').should('be.visible')
  })

  it('TC002 - The user logs in using an invalid username and password', () => {

    pom_code.login('Adminsalah', 'admin123salah')

    // ✅ Expected result
    cy.url().should('include', '/login')
    pom_code.elements.error_message().should('have.text', 'Invalid credentials')
  })

  it('TC003 - The user logs in using an invalid username and a valid password', () => {

    pom_code.login('Adminsalah', 'admin123')

    // ✅ Expected result
    cy.url().should('include', '/login')
    pom_code.elements.error_message().should('have.text', 'Invalid credentials')
  })

  it('TC004 - The user logs in using a valid username and an invalid password', () => {

    pom_code.login('Admin', 'admin123salah')

    // ✅ Expected result
    cy.url().should('include', '/login')
    pom_code.elements.error_message().should('have.text', 'Invalid credentials')
  })

  it('TC005 - The user logs in using a valid username and the password in uppercase letters', () => {

    pom_code.login('Admin', 'ADMIN123')

    // ✅ Expected result
    cy.url().should('include', '/login')
    pom_code.elements.error_message().should('have.text', 'Invalid credentials')
  })

  it('TC006 - The user logs in using an empty username and password', () => {

    pom_code.click_login()

    // ✅ Expected result
    cy.url().should('include', '/login')
    pom_code.elements.required_message().should('have.length', 2).and('contain.text', 'Required')
  })

  it('TC007 - The user logs in using a valid username and an empty password', () => {

    pom_code.type_username('Admin')
    pom_code.click_login()

    // ✅ Expected result
    cy.url().should('include', '/login')
    pom_code.elements.required_message().should('have.length', 1).and('contain.text', 'Required')
  })

  it('TC008 - The user logs in using an empty username and a valid password', () => {

    pom_code.type_password('admin123')
    pom_code.click_login()

    // ✅ Expected result
    cy.url().should('include', '/login')
    pom_code.elements.required_message().should('have.length', 1).and('contain.text', 'Required')
  })

  it('TC009 - The user logs in using both a whitespace username and a password', () => {

    pom_code.login(' ', ' ')

    // ✅ Expected result
    cy.url().should('include', '/login')
    pom_code.elements.required_message().should('have.length', 2).and('contain.text', 'Required')
  })
  
  it('TC0010 - The user logs in using a whitespace username and a valid password', () => {

    pom_code.login(' ', 'admin123')

    // ✅ Expected result
    cy.url().should('include', '/login')
    pom_code.elements.required_message().should('have.length', 1).and('contain.text', 'Required')
  })

  it('TC011 - The user logs in using a valid username and a whitespasce password', () => {

    pom_code.login('Admin', ' ')

    // ✅ Expected result
    cy.url().should('include', '/login')
    pom_code.elements.required_message().should('have.length', 1).and('contain.text', 'Required')
  })

  it('TC012 - The user logs in using a valid username and a valid password with spaces', () => {

    pom_code.login('Admin', 'admin123 ')

    // ✅ Expected result
    cy.url().should('include', '/login')
    pom_code.elements.error_message().should('have.text', 'Invalid credentials')
  })

  it('TC013 - The user logs in using special characters as the username and password', () => {

    pom_code.login('@dmin', '@dmin123')

    // ✅ Expected result
    cy.url().should('include', '/login')
    pom_code.elements.error_message().should('have.text', 'Invalid credentials')
  })

  it('TC014 - The user logs in using special characters as the username and a valid password', () => {

    pom_code.login('@dmin', 'admin123')

    // ✅ Expected result
    cy.url().should('include', '/login')
    pom_code.elements.error_message().should('have.text', 'Invalid credentials')
  })

  it('TC015 - The user logs in using a valid username and the password using special characters', () => {

    pom_code.login('Admin', '@dmin123')

    // ✅ Expected result
    cy.url().should('include', '/login')
    pom_code.elements.error_message().should('have.text', 'Invalid credentials')
  })
})