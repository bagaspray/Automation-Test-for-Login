class interceptForgotPassword {
    
    //Success Send Password Intercept
    successSend() {
        cy.intercept('GET', '**/sendPasswordReset*').as('successSend')
    }
    
    waitSuccessSend() {
        cy.wait('@successSend').its('response.statusCode').should('eq', 200)
    }

    //Cancel Intercept
    cancelForgotPassword() {
        cy.intercept('GET', '**/login*').as('cancelForgotPassword')
    }
    
    waitForgotPassword() {
        cy.wait('@cancelForgotPassword').its('response.statusCode').should('eq', 200)
    }
}

export default new interceptForgotPassword()