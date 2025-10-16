import loginPOM from '../../support/FinalProject_commands/Login/loginPOM'
import interceptLogin from '../../support/FinalProject_commands/Login/interceptLogin'
import changePasswordPOM from '../../support/FinalProject_commands/changePasswordPOM'
import dataFinal from '../../fixtures/dataFinal.json'

describe('Change Password Scenario', () => {
    beforeEach(() => {
        interceptLogin.timeAtWork()
        loginPOM.visit_login()
        loginPOM.login(dataFinal.valid_username, dataFinal.valid_password)
        interceptLogin.waitTimeAtWork
        loginPOM.login_success()
        changePasswordPOM.click_changePassword()
        changePasswordPOM.visit_changePassword()
    })

    it('TC001 - User changes password by entering the correct current password and a new password that meets the required criteria', () => {
        cy.intercept('POST', '**/validation/password').as('validate')
        changePasswordPOM.save(dataFinal.valid_password, dataFinal.new_password, dataFinal.new_password)
        cy.wait('@validate')
        // ✅ Expected result
        changePasswordPOM.changePassword_success()
    })

    it('TC002 - User changes password by entering the correct current password and a new password that meets the required criteria, then submits the change by pressing the "Enter key"', () => {
        cy.intercept('POST', '**/validation/password').as('validate')
        changePasswordPOM.type_currentPassword(dataFinal.valid_password)
        changePasswordPOM.type_newPassword(dataFinal.new_password)
        changePasswordPOM.type_confirmPassword(dataFinal.new_password + '{enter}')
        cy.wait('@validate')
        // ✅ Expected result
        changePasswordPOM.changePassword_success()
    })

    it('TC003 - User changes password by entering the incorrect current password and a new password that meets the required criteria', () => {
        cy.intercept('POST', '**/validation/password').as('validate')
        changePasswordPOM.save(dataFinal.invalid_password, dataFinal.new_password, dataFinal.new_password)
        cy.wait('@validate')
        // ✅ Expected result
        changePasswordPOM.changePassword_currentPasswordIncorrect()
    })

    it('TC004 - User attempts to change password by entering the correct current password, a new password, and a confirm password that does not match the new password', () => {
        cy.intercept('POST', '**/validation/password').as('validate')
        changePasswordPOM.save(dataFinal.valid_password, dataFinal.new_password, dataFinal.invalid_confirm_password)
        cy.wait('@validate')
        // ✅ Expected result
        changePasswordPOM.changePassword_PasswordNotMatch()
    })

    it('TC005 - User tries to change password by entering the correct current password but inputs a new password that empty', () => {
        changePasswordPOM.click_save()
        // ✅ Expected result
        changePasswordPOM.changePassword_PasswordRequired()
    })

    it('TC006 - User tries to change password by entering the correct current password but inputs a new password that contains only whitespace', () => {
        changePasswordPOM.save(dataFinal.valid_password, dataFinal.whitespace, dataFinal.whitespace)
        // ✅ Expected result
        changePasswordPOM.changePassword_PasswordRequired()
    })

    it('TC007 - User changes password by entering the correct current password and a new password that meets the required criteria + space', () => {
        cy.intercept('POST', '**/validation/password').as('validate')
        changePasswordPOM.save(dataFinal.valid_password, dataFinal.valid_password_with_space, dataFinal.valid_password_with_space)
        cy.wait('@validate')
        // ✅ Expected result
        changePasswordPOM.changePassword_PasswordWithSpace()
    })

    it('TC008 - User attempts to change password by entering a new password that is less than 7 characters long', () => {
        cy.intercept('POST', '**/validation/password').as('validate')
        changePasswordPOM.save(dataFinal.valid_password, dataFinal.new_password_not7, dataFinal.new_password_not7)
        cy.wait('@validate')
        // ✅ Expected result
        changePasswordPOM.changePassword_Should7()
    })

    it('TC009 - User attempts to change password by entering a new password consisting of letters only', () => {
        cy.intercept('POST', '**/validation/password').as('validate')
        changePasswordPOM.save(dataFinal.valid_password, dataFinal.new_password_letter, dataFinal.new_password_letter)
        cy.wait('@validate')
        // ✅ Expected result
        changePasswordPOM.changePassword_MinimumNumber()
    })

    it('TC010 - User attempts to change password by entering a new password consisting of numbers only', () => {
        cy.intercept('POST', '**/validation/password').as('validate')
        changePasswordPOM.save(dataFinal.valid_password, dataFinal.new_password_number, dataFinal.new_password_number)
        cy.wait('@validate')
        // ✅ Expected result
        changePasswordPOM.changePassword_MinimumLetter()
    })

    it('TC011 - Users cancel the change passwords', () => {
        changePasswordPOM.click_cancel()
        // ✅ Expected result
        loginPOM.login_success()
    })

    it('TC012 - Users click help button in the change password page', () => {
        changePasswordPOM.click_help()
        // ✅ Expected result
        changePasswordPOM.visit_changePassword()
    })

})