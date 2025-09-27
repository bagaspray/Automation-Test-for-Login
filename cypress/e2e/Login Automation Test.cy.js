describe('Login Scenario', () => {
  it('TC001 - The user logs in using the correct username and password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[placeholder="Username"]').type('Admin').should('have.value', 'Admin')
    cy.get('input[placeholder="Password"]').type('admin123').should('have.value', 'admin123')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/dashboard')
    cy.contains('Time at Work').should('be.visible')

  })

  it('TC002 - The user logs in using an incorrect username and password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[placeholder="Username"]').type('Admin@').should('have.value', 'Admin@')
    cy.get('input[placeholder="Password"]').type('admin123@').should('have.value', 'admin123@')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC003 - The user logs in using the incorrect username and correct password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[placeholder="Username"]').type('Admin@').should('have.value', 'Admin@')
    cy.get('input[placeholder="Password"]').type('admin123').should('have.value', 'admin123')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC004 - The user logs in using the correct username and incorrect password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[placeholder="Username"]').type('Admin').should('have.value', 'Admin')
    cy.get('input[placeholder="Password"]').type('admin123@').should('have.value', 'admin123@')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC005 - The user logs in using the username in uppercase letters and the correct password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[placeholder="Username"]').type('ADMIN').should('have.value', 'ADMIN')
    cy.get('input[placeholder="Password"]').type('admin123').should('have.value', 'admin123')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.contains('Invalid credentials').should('be.visible')
  })

    it('TC006 - The user logs in using the username in lowercase letters and the correct password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[placeholder="Username"]').type('admin').should('have.value', 'admin')
    cy.get('input[placeholder="Password"]').type('admin123').should('have.value', 'admin123')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.contains('Invalid credentials').should('be.visible')
  })
})