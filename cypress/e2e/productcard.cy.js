describe('Detalle de producto', () => {

  it('Abre la página de detalle de un producto', () => {

    cy.visit('/store')

    cy.get('a[href*="/product/"]')
      .first()
      .click()

    cy.url().should('include', '/product/')

  })

})