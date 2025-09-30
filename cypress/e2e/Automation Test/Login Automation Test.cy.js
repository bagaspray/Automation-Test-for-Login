describe('Login Scenario', () => {
  it('TC001 - The user logs in using a valid username and password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[name="username"]').type('Admin').should('have.value', 'Admin')
    cy.get('input[name="password"]').type('admin123').should('have.value', 'admin123')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/dashboard')
    cy.contains('Time at Work').should('be.visible')
  })

  it('TC002 - The user logs in using an invalid username and password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[name="username"]').type('Adminsalah').should('have.value', 'Adminsalah')
    cy.get('input[name="password"]').type('admin123salah').should('have.value', 'admin123salah')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC003 - The user logs in using an invalid username and a valid password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[name="username"]').type('Adminsalah').should('have.value', 'Adminsalah')
    cy.get('input[name="password"]').type('admin123').should('have.value', 'admin123')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC004 - The user logs in using a valid username and an invalid password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[name="username"]').type('Admin').should('have.value', 'Admin')
    cy.get('input[name="password"]').type('admin123salah').should('have.value', 'admin123salah')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC005 - The user logs in using a valid username and the password in uppercase letters', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[name="username"]').type('Admin').should('have.value', 'Admin')
    cy.get('input[name="password"]').type('ADMIN123').should('have.value', 'ADMIN123')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC006 - The user logs in using an empty username and password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[name="username"]').clear().should('have.value', '')
    cy.get('input[name="password"]').clear().should('have.value', '')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.get('.oxd-input-field-error-message').should('have.length', 2).and('contain.text', 'Required')
  })

  it('TC007 - The user logs in using a valid username and an empty password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[name="username"]').type('Admin').should('have.value', 'Admin')
    cy.get('input[name="password"]').clear().should('have.value', '')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.get('.oxd-input-field-error-message').should('have.length', 1).and('contain.text', 'Required')
  })

  it('TC008 - The user logs in using an empty username and a valid password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[name="username"]').clear().should('have.value', '')
    cy.get('input[name="password"]').type('admin123').should('have.value', 'admin123')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.get('.oxd-input-field-error-message').should('have.length', 1).and('contain.text', 'Required')
  })

  it('TC009 - The user logs in using both a whitespace username and a password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[name="username"]').type(' ').should('have.value', ' ')
    cy.get('input[name="password"]').type(' ').should('have.value', ' ')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.get('.oxd-input-field-error-message').should('have.length', 2).and('contain.text', 'Required')
  })
  
  it('TC0010 - The user logs in using a whitespace username and a valid password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[name="username"]').type(' ').should('have.value', ' ')
    cy.get('input[name="password"]').type('admin123').should('have.value', 'admin123')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.get('.oxd-input-field-error-message').should('have.length', 1).and('contain.text', 'Required')
  })

  it('TC011 - The user logs in using a valid username and a whitespasce password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[name="username"]').type('Admin').should('have.value', 'Admin')
    cy.get('input[name="password"]').type(' ').should('have.value', ' ')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.get('.oxd-input-field-error-message').should('have.length', 1).and('contain.text', 'Required')
  })

  it('TC012 - The user logs in using a valid username and a valid password with spaces', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[name="username"]').type('Admin').should('have.value', 'Admin')
    cy.get('input[name="password"]').type('admin123 ').should('have.value', 'admin123 ')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC013 - The user logs in using special characters as the username and password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[name="username"]').type('@dmin').should('have.value', '@dmin')
    cy.get('input[name="password"]').type('@dmin123').should('have.value', '@dmin123')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC014 - The user logs in using special characters as the username and a valid password', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[name="username"]').type('@dmin').should('have.value', '@dmin')
    cy.get('input[name="password"]').type('admin123').should('have.value', 'admin123')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC015 - The user logs in using a valid username and the password using special characters', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login')

    cy.get('input[name="username"]').type('Admin').should('have.value', 'Admin')
    cy.get('input[name="password"]').type('@dmin123').should('have.value', '@dmin123')

    cy.get('button[type="submit"]').should('be.visible')
    cy.get('button[type="submit"]').click()

    // ✅ Expected result
    cy.url().should('include', '/login')
    cy.contains('Invalid credentials').should('be.visible')
  })
})