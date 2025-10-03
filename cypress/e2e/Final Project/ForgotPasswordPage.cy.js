import loginPOM from '../../support/FinalProject_commands/Login/loginPOM'
import forgotPasswordPOM from '../../support/FinalProject_commands/ForgotPassword/forgotPasswordPOM'
import interceptForgotPassword from '../../support/FinalProject_commands/ForgotPassword/interceptForgotPassword'
import dataFinal from '../../fixtures/dataFinal.json'

describe('Forget Password Scenario', () => {
    beforeEach(() => {
        loginPOM.visit_login()
        forgotPasswordPOM.click_forgotPassword()
        forgotPasswordPOM.visit_forgotPassword()
    })

    it('TC001 - The user resets the password using a valid username', () => {
        interceptForgotPassword.successSend()
        forgotPasswordPOM.submit(dataFinal.valid_username)
        interceptForgotPassword.waitSuccessSend()
        // ✅ Expected result
        forgotPasswordPOM.resetPassword_success()
    })

    it('TC002 - The user resets the password using a whitespace username', () => {
        forgotPasswordPOM.submit(dataFinal.whitespace)
        // ✅ Expected result
        forgotPasswordPOM.forgotPassword_required()
    }) 

    it('TC003 - The user cancels the forgot password process', () => {
        interceptForgotPassword.cancelForgotPassword()
        forgotPasswordPOM.click_cancel()
        interceptForgotPassword.waitForgotPassword()
        // ✅ Expected result
        forgotPasswordPOM.backToLogin()
    }) 
})