class interceptDashboard {
    
    //View Direct Intercept
    viewDirectory() {
        cy.intercept('GET', '**/viewDirectory').as('viewDirectory');
    }
    
    waitViewDirectory() {
        cy.wait('@viewDirectory').its('response.statusCode').should('eq', 200);
    }

    //Job Title Intercept
    jobTitle() {
        cy.intercept('GET', '**/employees/*').as('jobTittle');
    }
    
    waitJobTitle() {
        cy.wait('@jobTitle').its('response.statusCode').should('eq', 200);
    }

    //Login Request Intercept
    loginRequest() {  
        cy.intercept('POST', '**/validate').as('loginRequest');
    }

    waitloginRequest(username, password) {
        cy.wait('@loginRequest').then((interception) => {
            expect(interception.response.statusCode).to.eq(302)
            const body = decodeURIComponent(interception.request.body)
            expect(body).to.include(`username=${username}`)
            expect(body).to.include(`password=${password}`)
        })
    }
}

export default new interceptDashboard()