describe('Protección del carrito', () => {

  it('Redirige al login si no existe sesión', () => {

    cy.clearCookies()
    cy.clearLocalStorage()

    cy.visit('/cart')

    cy.url().should('include', '/login')
  })

})