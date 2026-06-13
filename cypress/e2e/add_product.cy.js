describe('Agregar al carrito', () => {

  it('Agrega un producto correctamente', () => {

    cy.visit('/login')

    cy.get('input[placeholder="Tu nombre de usuario"]')
      .type('anderjma')

    cy.get('input[type="password"]')
      .type('Password123!')

    cy.contains('Ingresar').click()

    cy.url().should('include', '/profile')

    cy.intercept('GET', '**/api/products')
      .as('products')

    cy.visit('/store')

    cy.wait('@products')

    cy.contains('Agregar al Carrito')
      .first()
      .click()

    cy.wait(2000)

    // Entrar al carrito usando la navegación real
    cy.contains('Carrito').click()

    cy.url().should('include', '/cart')

  })

})