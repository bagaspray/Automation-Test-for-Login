import loginPOM from '../../support/FinalProject_commands/Login/loginPOM'
import interceptLogin from '../../support/FinalProject_commands/Login/interceptLogin'
import dataFinal from '../../fixtures/dataFinal.json'

describe('Login Scenario', () => {
    beforeEach(() => {
    loginPOM.visit_login()
    })

  it('TC001 - The user logs in, and the dashboard loads data via API requests', () => {
    interceptLogin.timeAtWork()
    interceptLogin.actionSummary()
    interceptLogin.shortcuts()
    interceptLogin.buzzFeed()
    interceptLogin.leaves()
    interceptLogin.subunit()
    interceptLogin.locations()

    loginPOM.login(dataFinal.valid_username, dataFinal.valid_password)

    interceptLogin.waitTimeAtWork()
    interceptLogin.actionSummary()
    interceptLogin.waitShortcuts()
    interceptLogin.waitBuzzFeed()
    interceptLogin.waitLeaves()
    interceptLogin.waitSubunit()
    interceptLogin.waitLocations()

    // ✅ Expected result
    loginPOM.login_success
  })

  it('TC002 - The user logs in using an invalid username and password', () => {
    interceptLogin.loginRequest()
    loginPOM.login(dataFinal.invalid_username, dataFinal.invalid_password)
    interceptLogin.waitloginRequest(dataFinal.invalid_username, dataFinal.invalid_password)
    // ✅ Expected result
    loginPOM.login_invalid_credentials()
  })

  it('TC003 - The user logs in using an invalid username and a valid password', () => {
    interceptLogin.loginRequest()
    loginPOM.login(dataFinal.invalid_username, dataFinal.valid_password)
    interceptLogin.waitloginRequest(dataFinal.invalid_username, dataFinal.valid_password)
    // ✅ Expected result
    loginPOM.login_invalid_credentials()
  })

  it('TC004 - The user logs in using a valid username and an invalid password', () => {
    interceptLogin.loginRequest()
    loginPOM.login(dataFinal.valid_username, dataFinal.invalid_password)
    interceptLogin.waitloginRequest(dataFinal.valid_username, dataFinal.invalid_password)
    // ✅ Expected result
    loginPOM.login_invalid_credentials()
  })

  it('TC005 - The user logs in using a valid username and the password in uppercase letters', () => {
    interceptLogin.loginRequest()
    loginPOM.login(dataFinal.valid_username, dataFinal.uppercase_password)
    interceptLogin.waitloginRequest(dataFinal.valid_username, dataFinal.uppercase_password)
    // ✅ Expected result
    loginPOM.login_invalid_credentials()
  })

  it('TC006 - The user logs in using an empty username and password', () => {
    loginPOM.elements.login_button()
    loginPOM.click_login()
    // ✅ Expected result
    loginPOM.login_required(2)
  })

  it('TC007 - The user logs in using a valid username and an empty password', () => {
    loginPOM.type_username(dataFinal.valid_username)
    loginPOM.elements.login_button()
    loginPOM.click_login()
    // ✅ Expected result
    loginPOM.login_required(1)
  })

  it('TC008 - The user logs in using an empty username and a valid password', () => {
    loginPOM.type_password(dataFinal.valid_password)
    loginPOM.elements.login_button()
    loginPOM.click_login()
    // ✅ Expected result
    loginPOM.login_required(1)
  })

  it('TC009 - The user logs in using both a whitespace username and a password', () => {
    loginPOM.login(dataFinal.whitespace, dataFinal.whitespace)
    // ✅ Expected result
    loginPOM.login_required(2)
  })

  it('TC010 - The user logs in using a whitespace username and a valid password', () => {
    loginPOM.login(dataFinal.whitespace, dataFinal.valid_password)
    // ✅ Expected result
    loginPOM.login_required(1)
  })

  it('TC011 - The user logs in using a valid username and a whitespasce password', () => {
    loginPOM.login(dataFinal.valid_username, dataFinal.whitespace)
    // ✅ Expected result
    loginPOM.login_required(1)
  })

  it('TC012 - The user logs in using a valid username and a valid password with spaces', () => {
    loginPOM.login(dataFinal.valid_username, dataFinal.valid_password_with_space)
    // ✅ Expected result
    loginPOM.login_invalid_credentials
  })

  it('TC013 - The user logs in using special characters as the username and password', () => {
    interceptLogin.loginRequest()
    loginPOM.login(dataFinal.spesial_username, dataFinal.spesial_password)
    interceptLogin.waitloginRequest(dataFinal.spesial_username, dataFinal.spesial_password)
    // ✅ Expected result
    loginPOM.login_invalid_credentials
  })

  it('TC014 - The user logs in using special characters as the username and a valid password', () => {
    interceptLogin.loginRequest()
    loginPOM.login(dataFinal.spesial_username, dataFinal.valid_password)
    interceptLogin.waitloginRequest(dataFinal.spesial_username, dataFinal.valid_password)
    // ✅ Expected result
    loginPOM.login_invalid_credentials
  })

  it('TC015 - The user logs in using a valid username and the password using special characters', () => {
    interceptLogin.loginRequest()
    loginPOM.login(dataFinal.valid_username, dataFinal.spesial_password)
    interceptLogin.waitloginRequest(dataFinal.valid_username, dataFinal.spesial_password)
    // ✅ Expected result
    loginPOM.login_invalid_credentials
  })
})