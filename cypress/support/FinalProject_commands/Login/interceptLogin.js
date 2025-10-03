class interceptLogin {
    
    //Time at Work Intercept
    timeAtWork() {
        cy.intercept('GET', '**/time-at-work*').as('time-at-work')
    }
    
    waitTimeAtWork() {
        cy.wait('@time-at-work').its('response.statusCode').should('eq', 200);
    }

    //Action Summary Intercept
    actionSummary() {
        cy.intercept('GET', '**/action-summary').as('action-summary')
    }
    
    waitActionSummary() {
        cy.wait('@action-summary').its('response.statusCode').should('eq', 200);
    }

    //Shortcuts Intercept
    shortcuts() {
        cy.intercept('GET', '**/shortcuts').as('shortcuts')
    }
    
    waitShortcuts() {
        cy.wait('@shortcuts').its('response.statusCode').should('eq', 200);
    }

    //Buzz Feed Intercept
    buzzFeed() {
        cy.intercept('GET', '**/buzz/feed*').as('buzzFeed')
    }
    
    waitBuzzFeed() {
        cy.wait('@buzzFeed').its('response.statusCode').should('eq', 200);
    }
  
    //Leaves Intercept
    leaves() {
        cy.intercept('GET', '**/leaves*').as('leaves')
    }
    
    waitLeaves() {
        cy.wait('@leaves').its('response.statusCode').should('eq', 200);
    }

    //Subunit Intercept
    subunit() {
        cy.intercept('GET', '**/subunit').as('subunit')
    }
    
    waitSubunit() {
        cy.wait('@subunit').its('response.statusCode').should('eq', 200);
    }

    //Locations Intercept
    locations() {  
        cy.intercept('GET', '**/locations').as('locations')
    }
    
    waitLocations() {
        cy.wait('@locations').its('response.statusCode').should('eq', 200);
    }

    //Login Request Intercept
    loginRequest() {  
        cy.intercept('POST', '**/validate').as('loginRequest')
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

export default new interceptLogin()