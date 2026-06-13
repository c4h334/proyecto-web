describe('Flujo completo de compra', () => {

  it('Login -> Tienda -> Carrito', () => {

    cy.intercept('GET', '**/api/products')
      .as('products')

    cy.visit('/login')

    cy.get('input[placeholder="Tu nombre de usuario"]')
      .type('anderjma')

    cy.get('input[type="password"]')
      .type('Password123!')

    cy.contains('Ingresar').click()

    cy.url().should('include', '/profile')

    cy.visit('/store')

    cy.wait('@products')

    cy.contains('Agregar al Carrito')
      .first()
      .click()

    cy.wait(2000)

    // Entrar mediante la navegación real
    cy.contains('Carrito').click()

    cy.url().should('include', '/cart')

  })

})