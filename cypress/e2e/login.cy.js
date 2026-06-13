describe('Login', () => {

  it('Debe iniciar sesión correctamente', () => {

    cy.intercept('POST', '**/authorization/authorize').as('login')

    cy.visit('/login')

    cy.get('input[placeholder="Tu nombre de usuario"]')
      .type('anderjma')

    cy.get('input[type="password"]')
      .type('Password123!')

    cy.contains('Ingresar').click()

    cy.wait('@login')
      .its('response.statusCode')
      .should('eq', 200)

    cy.url({ timeout: 15000 })
      .should('include', '/profile')

  })

})