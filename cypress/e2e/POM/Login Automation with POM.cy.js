import login_pom from '../../support/POM_commands/login_pom'
import dataPOM from '../../fixtures/dataPOM.json'

describe('Login Scenario', () => {
  beforeEach(() => {
    login_pom.visit_login();
  });

  it('TC001 - The user logs in using a valid username and password', () => {
    login_pom.login(dataPOM.valid_username, dataPOM.valid_password)
    // ✅ Expected result
    login_pom.login_success()
  })

  it('TC002 - The user logs in using an invalid username and password', () => {
    login_pom.login(dataPOM.invalid_username, dataPOM.invalid_password)
    // ✅ Expected result
    login_pom.login_invalid_credentials()
  })

  it('TC003 - The user logs in using an invalid username and a valid password', () => {
    login_pom.login(dataPOM.invalid_username, dataPOM.valid_password)
    // ✅ Expected result
    login_pom.login_invalid_credentials()
  })

  it('TC004 - The user logs in using a valid username and an invalid password', () => {
    login_pom.login(dataPOM.valid_username, dataPOM.invalid_password)
    // ✅ Expected result
    login_pom.login_invalid_credentials()
  })

  it('TC005 - The user logs in using a valid username and the password in uppercase letters', () => {
    login_pom.login(dataPOM.valid_username, dataPOM.uppercase_password)
    // ✅ Expected result
    login_pom.login_invalid_credentials()
  })

  it('TC006 - The user logs in using an empty username and password', () => {
    login_pom.elements.login_button()
    login_pom.click_login()
    // ✅ Expected result
    login_pom.login_required2()
  })

  it('TC007 - The user logs in using a valid username and an empty password', () => {
    login_pom.type_username(dataPOM.valid_username)
    login_pom.elements.login_button()
    login_pom.click_login()
    // ✅ Expected result
    login_pom.login_required1()
  })

  it('TC008 - The user logs in using an empty username and a valid password', () => {
    login_pom.type_password(dataPOM.valid_password)
    login_pom.elements.login_button()
    login_pom.click_login()
    // ✅ Expected result
    login_pom.login_required1()
  })

  it('TC009 - The user logs in using both a whitespace username and a password', () => {
    login_pom.login(dataPOM.whitespace, dataPOM.whitespace)
    // ✅ Expected result
    login_pom.login_required2()
  })
  
  it('TC0010 - The user logs in using a whitespace username and a valid password', () => {
    login_pom.login(dataPOM.whitespace, dataPOM.valid_password)
    // ✅ Expected result
    login_pom.login_required1()
  })

  it('TC011 - The user logs in using a valid username and a whitespasce password', () => {
    login_pom.login(dataPOM.valid_username, dataPOM.whitespace)
    // ✅ Expected result
    cy.url().should('include', '/login')
    login_pom.login_required1()
  })

  it('TC012 - The user logs in using a valid username and a valid password with spaces', () => {
    login_pom.login(dataPOM.valid_username, dataPOM.valid_password_with_space)
    // ✅ Expected result
    login_pom.login_invalid_credentials()
  })

  it('TC013 - The user logs in using special characters as the username and password', () => {
    login_pom.login(dataPOM.spesial_username, dataPOM.spesial_password)
    // ✅ Expected result
    login_pom.login_invalid_credentials()
  })

  it('TC014 - The user logs in using special characters as the username and a valid password', () => {
    login_pom.login(dataPOM.spesial_username, dataPOM.valid_password)
    // ✅ Expected result
    login_pom.login_invalid_credentials()
  })

  it('TC015 - The user logs in using a valid username and the password using special characters', () => {
    login_pom.login(dataPOM.valid_username, dataPOM.spesial_password)
    // ✅ Expected result
    login_pom.login_invalid_credentials()
  })
})