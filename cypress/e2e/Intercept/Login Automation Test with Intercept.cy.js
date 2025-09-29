describe('Login Scenario', () => {
  it('TC001 - The user logs in using a valid username and password (intercept location)', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.intercept('GET', '**/locations').as('locations')

    cy.get('input[name="username"]').type('Admin').should('have.value', 'Admin')
    cy.get('input[name="password"]').type('admin123').should('have.value', 'admin123')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    cy.wait('@locations')

    // ✅ Expected result
    cy.url().should('include', '/dashboard')
    cy.contains('Time at Work').should('be.visible')

  })

    it('TC002 - The user logs in using a valid username and password (intercept subunit)', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.intercept('GET', '**/subunit').as('subunit')

    cy.get('input[name="username"]').type('Admin').should('have.value', 'Admin')
    cy.get('input[name="password"]').type('admin123').should('have.value', 'admin123')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    cy.wait('@subunit').its('response.statusCode').should('eq', 200);

    // ✅ Expected result
    cy.url().should('include', '/dashboard')
    cy.contains('Time at Work').should('be.visible')
  })


  it('TC003 - The user logs in using an invalid username and password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.intercept('POST', '**/validate').as('loginRequest')

    cy.get('input[name="username"]').type('Adminsalah').should('have.value', 'Adminsalah')
    cy.get('input[name="password"]').type('admin123salah').should('have.value', 'admin123salah')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    cy.wait('@loginRequest').its('request.body').should('include', 'password=admin123salah')

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC004 - The user logs in using an invalid username and a valid password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.intercept('POST', '**/validate').as('loginRequest')

    cy.get('input[name="username"]').type('Adminsalah').should('have.value', 'Adminsalah')
    cy.get('input[name="password"]').type('admin123').should('have.value', 'admin123')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    cy.wait('@loginRequest').its('request.body').should('include', 'username=Adminsalah');

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC005 - The user logs in using a valid username and an invalid password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.intercept('POST', '**/validate').as('loginRequest')

    cy.get('input[name="username"]').type('Admin').should('have.value', 'Admin')
    cy.get('input[name="password"]').type('admin123salah').should('have.value', 'admin123salah')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    cy.wait('@loginRequest').its('request.headers').should('have.property', 'content-type', 'application/x-www-form-urlencoded')

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC006 - The user logs in using a valid username and the password in uppercase letters', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.intercept('POST', '**/validate').as('loginRequest')

    cy.get('input[name="username"]').type('admin').should('have.value', 'admin')
    cy.get('input[name="password"]').type('ADMIN123').should('have.value', 'ADMIN123')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()
    
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 302);

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC007 - The user logs in using a valid username and a valid password with spaces', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.intercept('POST', '**/validate').as('loginRequest');

    cy.get('input[name="username"]').type('Admin').should('have.value', 'Admin')
    cy.get('input[name="password"]').type('admin123 ').should('have.value', 'admin123 ')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    cy.wait('@loginRequest').its('request.body').should('match', /password=admin123(\+|%20)$/);

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.contains('Invalid credentials').should('be.visible')
  })
})