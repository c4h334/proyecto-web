describe('Carga de productos', () => {

  it('Obtiene productos desde la API', () => {

    cy.intercept('GET', '**/api/products')
      .as('products')

    cy.visit('/store')

    cy.wait('@products')
      .its('response.statusCode')
      .should('eq', 200)

    cy.contains('Tienda de Productos')
  })

})